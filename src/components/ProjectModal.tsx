import { useState, useEffect } from 'react';
import type { ProjectItem } from '../types';
import {
  X,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Globe,
  Film,
  Image as ImageIcon,
  Box
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectMediaSlider } from './ProjectMediaSlider';
import { ProjectInteractiveViewer } from './ProjectInteractiveViewer';

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64c0-.91-.73-1.64-1.64-1.64Z"/>
  </svg>
);

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'slides' | '3d' | 'specs' | 'deliverables'>('slides');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setActiveTab('slides');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const handleCommissionClick = () => {
    onClose();
    navigate('/contact', {
      state: {
        prefilledProject: project.title,
        prefilledCategory: project.category
      }
    });
  };

  const getClientLinkIcon = (type?: string | null) => {
    if (type === 'linkedin') return <LinkedinIcon className="w-4 h-4 text-sky-400" />;
    return <Globe className="w-4 h-4 text-sky-400" />;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl my-auto bg-[#030712] rounded-3xl shadow-2xl border border-slate-800 text-white overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-30 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-950/80 text-sky-300 border border-sky-500/30 shadow-2xs">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider hidden md:inline">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Media Count Badge */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
              <span className="flex items-center gap-1 font-semibold text-sky-400">
                <ImageIcon className="w-3 h-3" /> {project.imageCount}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1 font-semibold text-sky-300">
                <Film className="w-3 h-3" /> {project.videoCount}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Title & Overview Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {project.title}
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>

            {/* Prominent Client Links Banner */}
            {project.clientLink && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-blue-950/60 border border-sky-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-sky-500/40 shadow-2xs flex items-center justify-center shrink-0">
                    {getClientLinkIcon(project.clientLinkType)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                        {project.clientLinkType === 'linkedin' ? 'Client LinkedIn Profile' : 'Verified Project Reference Link'}
                      </span>
                      <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-semibold">
                        Live Link
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                      {project.clientLinkTitle || project.clientLink}
                    </span>
                  </div>
                </div>

                <a
                  href={project.clientLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-600/30 hover:shadow-lg transition-all group shrink-0"
                >
                  <span>{project.clientLinkType === 'linkedin' ? 'Open Client LinkedIn' : 'Visit Live Project Link'}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )}
          </div>

          {/* Quick Highlight Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.keyHighlights.map((stat, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="block text-sm sm:text-base font-bold text-sky-400 mt-0.5">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Navigation View Tabs */}
          <div className="border-b border-slate-800 flex items-center gap-2 sm:gap-6 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('slides')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-all relative flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'slides'
                  ? 'text-sky-400 border-b-2 border-sky-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>All Pictures &amp; Videos ({project.mediaCount} Slides)</span>
            </button>

            {project.hasInteractive3D && (
              <button
                onClick={() => setActiveTab('3d')}
                className={`pb-3 text-xs sm:text-sm font-semibold transition-all relative flex items-center gap-2 whitespace-nowrap ${
                  activeTab === '3d'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Box className="w-4 h-4" />
                <span>Interactive 3D Inspector</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-all relative flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'text-sky-400 border-b-2 border-sky-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Technical Specifications</span>
            </button>

            <button
              onClick={() => setActiveTab('deliverables')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-all relative flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'deliverables'
                  ? 'text-sky-400 border-b-2 border-sky-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Production Deliverables</span>
            </button>
          </div>

          {/* TAB 1: ALL PICTURES & VIDEOS IN SLIDE FORMAT */}
          {activeTab === 'slides' && (
            <div className="space-y-4">
              <ProjectMediaSlider
                media={project.media}
                projectTitle={project.title}
              />
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 px-1 gap-2">
                <span>
                  &bull; Use <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-sky-400 font-mono text-[10px]">&larr;</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-sky-400 font-mono text-[10px]">&rarr;</kbd> arrow keys to navigate slides &bull; Click thumbnails to jump directly
                </span>
                <span className="font-mono text-slate-400">
                  Total {project.mediaCount} assets ({project.imageCount} images, {project.videoCount} videos)
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE 3D */}
          {activeTab === '3d' && (
            <div className="space-y-3">
              <ProjectInteractiveViewer
                modelType="web3d"
                polyCountLabel={project.polyCount}
              />
              <p className="text-xs text-slate-400 text-center">
                Interactive real-time 3D canvas: Drag to orbit 360&deg;, pinch to zoom, and toggle wireframe inspection.
              </p>
            </div>
          )}

          {/* TAB 3: SPECS & TOPOLOGY */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                    <Layers className="w-4 h-4" />
                    <span>Geometry, Topology &amp; Budget</span>
                  </div>
                  <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                    <li><strong className="text-white">Target Budget:</strong> {project.polyCount}</li>
                    <li><strong className="text-white">Mesh Flow:</strong> Production quad retopology with edge deformation loops</li>
                    <li><strong className="text-white">Engine Readiness:</strong> {project.engineReady}</li>
                    <li><strong className="text-white">UV Layout:</strong> High texel density &amp; non-overlapping packed UVs</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Materials, Shading &amp; Texturing</span>
                  </div>
                  <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                    <li><strong className="text-white">Texture Resolution:</strong> {project.textureSets}</li>
                    <li><strong className="text-white">Shading Pipeline:</strong> PBR Metallic / Roughness Workflow</li>
                    <li><strong className="text-white">Bake Channels:</strong> 16-bit Floating Normal, Curvature, AO, Cavity</li>
                    <li><strong className="text-white">Aesthetic Tone:</strong> {project.aestheticTone}</li>
                  </ul>
                </div>
              </div>

              {/* Tools Badges */}
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2.5">
                  Production Software &amp; Engine Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-slate-200 border border-slate-800 shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DELIVERABLES */}
          {activeTab === 'deliverables' && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white">
                Complete Production Deliverable Checklist:
              </h4>
              <div className="space-y-2.5">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Commercial Production Asset &bull; Commercial Rights Protected</span>
          </div>

          <div className="flex items-center gap-3">
            {project.clientLink && (
              <a
                href={project.clientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold shadow-2xs transition-colors"
              >
                <span>{project.clientLinkType === 'linkedin' ? 'LinkedIn Profile' : 'Project Link'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </a>
            )}

            <button
              onClick={handleCommissionClick}
              className="btn-primary-tactile text-xs sm:text-sm py-2.5 px-6"
            >
              <span>Commission Similar 3D Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

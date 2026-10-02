import { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import type { ProjectItem } from '../types';
import { ProjectModal } from '../components/ProjectModal';
import { getMediaUrl } from '../utils/media';
import {
  Sparkles,
  ArrowRight,
  Film,
  Image as ImageIcon,
  ExternalLink,
  PlaySquare,
  Globe,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LinkedinIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64c0-.91-.73-1.64-1.64-1.64Z"/>
  </svg>
);

export const WorkPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: `All Projects (${PROJECTS_DATA.length})` },
    { id: 'top3', label: '★ Highlighted Projects' },
    { id: 'characters', label: 'Characters & Sculpts' },
    { id: 'stylized', label: 'Stylized & Mobile Games' },
    { id: 'archviz', label: 'ArchViz & Interiors' },
    { id: 'environments', label: 'Environments & Levels' },
    { id: 'motion', label: 'Animation & Motion Design' },
    { id: 'links', label: 'Verified Client Links / LinkedIn' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'top3') return project.sequenceNumber <= 3;
    if (selectedCategory === 'characters')
      return [1, 7, 8, 9, 10].includes(project.sequenceNumber);
    if (selectedCategory === 'stylized')
      return [2, 4].includes(project.sequenceNumber);
    if (selectedCategory === 'archviz')
      return [5, 11, 12, 13].includes(project.sequenceNumber);
    if (selectedCategory === 'environments')
      return [6, 14].includes(project.sequenceNumber);
    if (selectedCategory === 'motion')
      return [3, 15, 16, 17].includes(project.sequenceNumber);
    if (selectedCategory === 'links')
      return Boolean(project.clientLink);
    return true;
  });

  const getLinkIcon = (type?: string | null) => {
    if (type === 'linkedin') return <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />;
    if (type === 'playstore') return <PlaySquare className="w-3.5 h-3.5 text-emerald-400" />;
    return <Globe className="w-3.5 h-3.5 text-sky-400" />;
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white">
      {/* Background Luminous Layers */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-sky-600/15 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] -z-10 -translate-x-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Complete 3D Portfolio &bull; 17 Production Case Studies</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            3D Projects, Real-Time Models &amp; Sculpting Portfolio
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Portfolio of Kashif Ullah Jan. All commercial works arranged in sequence, featuring high-poly digital sculpts, game-ready topologies, PBR textures, video walkthroughs, and verified client reference links.
          </p>

          {/* Highlighted Projects Showcase Bar */}
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-sky-400 uppercase tracking-wider">
              <span>Highlighted Projects Showcase</span>
              <span className="text-slate-400 font-semibold lowercase">Click to inspect</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {PROJECTS_DATA.slice(0, 3).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveModalProject(p)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/50 text-xs font-bold text-white shadow-2xs transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span>{p.title.split('—')[0].trim()}</span>
                  {p.clientLink && (
                    <span className="text-sky-400 text-[10px]">&bull; Link</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-xs shadow-sky-500/30 font-semibold'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-elevation rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-sky-400/50 transition-all duration-300 bg-slate-900/60 border border-slate-800"
            >
              {/* Card Visual Header / Media Preview */}
              <div
                className="relative h-60 bg-slate-950 overflow-hidden cursor-pointer select-none"
                onClick={() => setActiveModalProject(project)}
              >
                {/* Media Image or Video Preview */}
                {project.coverMedia.type === 'video' ? (
                  <div className="w-full h-full relative">
                    <video
                      src={`${getMediaUrl(project.coverMedia.url)}#t=0.5`}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-sky-600 group-hover:border-sky-400 transition-all">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={getMediaUrl(project.coverMedia.url)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                )}

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-950/80 text-sky-300 border border-sky-500/30 backdrop-blur-md">
                    {project.badge}
                  </span>

                  {/* Media Counter Pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-800 text-slate-300 text-[11px] font-mono shadow-sm">
                    {project.videoCount > 0 ? (
                      <span className="flex items-center gap-1 text-sky-400 font-semibold">
                        <Film className="w-3 h-3" /> {project.videoCount}
                      </span>
                    ) : null}
                    {project.imageCount > 0 ? (
                      <span className="flex items-center gap-1 text-sky-300 font-semibold">
                        <ImageIcon className="w-3 h-3" /> {project.imageCount}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 inset-x-4 z-10 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold block">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug line-clamp-1 group-hover:text-sky-300 transition-colors">
                    {project.title.split('—')[0]}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  {/* Client Link Pill (if available) */}
                  {project.clientLink && (
                    <a
                      href={project.clientLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-sky-950/40 hover:bg-sky-950/70 border border-sky-500/30 text-xs font-semibold text-sky-300 transition-colors group/link"
                      title={project.clientLinkTitle || project.clientLink}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {getLinkIcon(project.clientLinkType)}
                        <span className="truncate">
                          {project.clientLinkType === 'linkedin' ? 'Client LinkedIn' : project.clientLinkType === 'playstore' ? 'Google Play' : 'Official Portal'}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-sky-400 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
                    {project.overview}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.keyHighlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                        <span className="block text-[10px] uppercase font-semibold text-slate-400">
                          {h.label}
                        </span>
                        <span className="block text-xs font-bold text-white mt-0.5 truncate">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tools List */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tools.slice(0, 3).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-950 text-[11px] font-medium text-slate-300 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-950 text-[11px] font-mono text-slate-400 border border-slate-800">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Inspect / Open Slides Button */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 group/btn"
                  >
                    <span>View All {project.mediaCount} Slides</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[11px] font-mono text-slate-400">
                    {project.imageCount} img &bull; {project.videoCount} vid
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commission CTA banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-sky-500/20 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Ready to start your character sculpt or 3D asset?
            </h3>
            <p className="text-slate-300 text-sm max-w-lg">
              We provide upfront turnaround estimates, clean milestone reviews, and production-ready handoffs in all target formats.
            </p>
          </div>

          <Link
            to="/contact"
            className="btn-primary-tactile text-sm py-3 px-8 shrink-0"
          >
            <span>Commission 3D Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Project Detail Modal with Full Slide Format & Client Links */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};

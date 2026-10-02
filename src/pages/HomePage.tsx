import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  FileDown,
  Sparkles,
  PlaySquare,
  Globe,
  Play
} from 'lucide-react';
import { Hero3DViewer } from '../components/Hero3DViewer';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectModal } from '../components/ProjectModal';
import { getMediaUrl } from '../utils/media';
import type { ProjectItem } from '../types';

const LinkedinIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64c0-.91-.73-1.64-1.64-1.64Z"/>
  </svg>
);

export const HomePage = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const topProjects = PROJECTS_DATA.slice(0, 3);

  const getLinkIcon = (type?: string | null) => {
    if (type === 'linkedin') return <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />;
    if (type === 'playstore') return <PlaySquare className="w-3.5 h-3.5 text-emerald-400" />;
    return <Globe className="w-3.5 h-3.5 text-sky-400" />;
  };

  return (
    <div className="relative min-h-[calc(100vh-73px)] flex flex-col justify-center bg-[#030712] text-white overflow-hidden">
      {/* Ambient Cybernetic Blue Glow Layers */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-sky-600/15 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-14 lg:py-16 w-full my-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Pill, CTAs & Metrics */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* 1. Artist Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-950/60 border border-sky-500/30 shadow-xs backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-sky-300 tracking-tight">
                Studio Availability: Open for 3D Modeling, Unreal/Unity &amp; Game Commissions
              </span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Kashif Ullah Jan &mdash;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
                3D Artist &amp; Game Designer
              </span>
            </h1>

            {/* 3. Studio Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Creative and results-driven 3D Artist with proven expertise in modeling, texturing, and optimizing assets for real-time applications across Unreal Engine, Unity, and 3D printing workflows. Proven track record across 200+ commercial projects with advanced Blender and Substance Painter PBR mastery.
            </p>

            {/* 4. Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <Link
                to="/contact"
                className="btn-primary-tactile text-base group"
              >
                <span>Book a 3D Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/work"
                className="btn-secondary-tactile text-base group"
              >
                <span>View Full 3D Portfolio</span>
                <ArrowUpRight className="w-5 h-5 text-sky-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Download CV button */}
              <a
                href={getMediaUrl('/Kashif_Ullah_Jan_CV.pdf')}
                download="Kashif_Ullah_Jan_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-sky-950/60 text-slate-200 hover:text-sky-300 border border-slate-700/80 hover:border-sky-400 font-semibold text-sm transition-all shadow-2xs group"
                title="Download official CV (PDF)"
              >
                <FileDown className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* 5. Key Artist Metrics */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                
                {/* Metric 1 */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    200+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 leading-snug">
                    Commercial &amp; Internal 3D Assets
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight">
                    3.80 / 4.0
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 leading-snug">
                    Computer Science Honors <span className="text-slate-500 block text-[11px]">(UET Peshawar)</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Unreal &amp; Unity
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 leading-snug">
                    Real-Time Game Integration
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight">
                    PBR &amp; 3D Print
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 leading-snug">
                    Substance Painter &amp; STL Ready
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Hero Viewport */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur-md border border-sky-500/20 shadow-2xl shadow-sky-950/50 p-2 sm:p-4 overflow-hidden">
              {/* Studio Corner Watermark */}
              <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 text-sky-300 border border-sky-500/30 text-[11px] font-mono font-medium backdrop-blur-md">
                <Box className="w-3 h-3 text-sky-400" />
                <span>INTERACTIVE 3D VIEWPORT</span>
              </div>

              {/* Three.js Character Model & Orbit Canvas */}
              <Hero3DViewer />

              {/* Helper caption */}
              <div className="pt-2 pb-1 text-center">
                <span className="text-[11px] text-slate-400 font-medium">
                  &bull; Drag to orbit 360&deg; &bull; Toggle Wireframe / Clay sculpt above &bull;
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlighted Projects Showcase Banner */}
        <div className="pt-10 border-t border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured 3D Work</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Highlighted Projects
              </h2>
              <p className="text-slate-300 text-sm max-w-xl">
                Click any project card below to open the complete popup slide viewer with all high-resolution pictures, gameplay animations, and verified client reference links.
              </p>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>Explore All {PROJECTS_DATA.length} Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Highlighted Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topProjects.map((project) => (
              <div
                key={project.id}
                className="card-elevation rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-sky-400/60 transition-all cursor-pointer bg-slate-900/60 border border-slate-800"
                onClick={() => setActiveModalProject(project)}
              >
                {/* Visual Header */}
                <div className="relative h-56 bg-slate-950 overflow-hidden">
                  {project.coverMedia.type === 'video' ? (
                    <div className="w-full h-full relative">
                      <video
                        src={`${getMediaUrl(project.coverMedia.url)}#t=0.5`}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-slate-900/80 text-white border border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-sky-600 transition-all">
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

                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/40 backdrop-blur-md">
                      {project.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/80 text-slate-300 border border-slate-700 backdrop-blur-md">
                      {project.mediaCount} Slides
                    </span>
                  </div>

                  {/* Title on image */}
                  <div className="absolute bottom-3.5 inset-x-3.5 z-10 space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold block">
                      {project.category}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug line-clamp-1 group-hover:text-sky-300 transition-colors">
                      {project.title.split('—')[0]}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {project.clientLink && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 bg-sky-950/40 p-2 rounded-xl border border-sky-500/30">
                        {getLinkIcon(project.clientLinkType)}
                        <span className="truncate">
                          {project.clientLinkType === 'linkedin' ? 'Client LinkedIn Verified' : project.clientLinkType === 'playstore' ? 'Google Play Store App' : 'Official Portal Link'}
                        </span>
                      </div>
                    )}

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.overview}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-400 group-hover:text-sky-300 inline-flex items-center gap-1">
                      <span>Open Slide Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.imageCount} img &bull; {project.videoCount} vid
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Project Modal with Slider and Links */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};

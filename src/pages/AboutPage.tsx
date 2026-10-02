import { SOFTWARE_DATA } from '../data/software';
import { PIPELINE_PHASES, SUPPORTED_FORMATS } from '../data/pipeline';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  ArrowRight,
  FileCheck,
  Briefcase,
  GraduationCap,
  Languages,
  FileDown,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getMediaUrl } from '../utils/media';

export const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white">
      {/* Background Cybernetic Blue Glow Layers */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-sky-600/15 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] -z-10 -translate-x-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20 space-y-20">
        
        {/* 1. Artist Profile Header */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Bio Info (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              <span>3D Artist &bull; Unreal Engine &amp; Unity Game Designer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Kashif Ullah Jan &mdash; Crafting high-fidelity 3D assets, game worlds &amp; cinematic visuals.
            </h1>

            {/* Profile Summary verbatim from CV */}
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-4 border-sky-400 pl-4 py-1 bg-sky-950/30 rounded-r-xl italic text-slate-200 text-base">
                &ldquo;Creative and results-driven 3D Artist with proven expertise in modeling, texturing, and optimizing assets for real-time applications across Unreal Engine, Unity, and 3D printing workflows. Proficient in industry-standard tools such as Blender for 3D modeling and Substance Painter for advanced PBR texturing. Experienced in delivering visually compelling and technically sound assets in collaborative team environments. Adept at balancing artistic vision with performance constraints, consistently meeting project deadlines and quality standards.&rdquo;
              </p>
            </div>

            {/* Quick Metrics from CV */}
            <div className="pt-2 grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <span className="block text-2xl sm:text-3xl font-black text-sky-400">200+</span>
                <span className="text-xs font-medium text-slate-400">Delivered Commercial Assets</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <span className="block text-2xl sm:text-3xl font-black text-white">3.80</span>
                <span className="text-xs font-medium text-slate-400">CS Degree GPA (UET)</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <span className="block text-2xl sm:text-3xl font-black text-sky-400">100%</span>
                <span className="text-xs font-medium text-slate-400">Real-Time Engine Ready</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary-tactile text-sm py-3 px-7">
                <span>Commission 3D Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/work" className="btn-secondary-tactile text-sm py-3 px-7">
                <span>Explore 3D Portfolio</span>
              </Link>
              <a
                href={getMediaUrl('/Kashif_Ullah_Jan_CV.pdf')}
                download="Kashif_Ullah_Jan_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-sky-950/60 text-slate-200 hover:text-sky-300 border border-slate-700/80 hover:border-sky-400 font-semibold text-sm transition-all shadow-2xs group"
              >
                <FileDown className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Card: Digital Sculptor Blueprint Badge (5 cols) */}
          <div className="lg:col-span-5">
            <div className="card-elevation rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-white flex items-center justify-center font-black text-xl shadow-md shadow-sky-500/25">
                    KJ
                  </div>
                  <div>
                    <h3 className="font-bold text-white leading-tight">Kashif Ullah Jan</h3>
                    <span className="text-xs text-sky-400 font-medium">3D Artist &amp; Game Designer</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                  AVAILABLE NOW
                </span>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Education:</span>
                  <span className="font-semibold text-white text-xs sm:text-sm">BS Computer Science (GPA 3.80)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Primary DCC:</span>
                  <span className="font-semibold text-white">Blender &amp; Substance Painter</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Game Engines:</span>
                  <span className="font-semibold text-sky-400">Unreal Engine &amp; Unity</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Workflows:</span>
                  <span className="font-semibold text-white">PBR Texturing &bull; 3D Printing STL</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Cinematics:</span>
                  <span className="font-semibold text-white">AI Video Creator &amp; Animation</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white">Peshawar, Pakistan</span>
                </div>
              </div>

              {/* Direct Link Badges */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href="https://www.artstation.com/kashifullahjan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-semibold hover:border-sky-500/50 hover:text-white transition-colors"
                >
                  <span>ArtStation</span>
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kashifullahjan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#0A66C2]/30 border border-[#0A66C2]/50 text-white text-xs font-semibold hover:bg-[#0A66C2]/50 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/30 text-xs text-sky-200 leading-relaxed flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  All project deliveries include full source files, standard 3D printing pipelines, engine integration, and non-disclosure compliance.
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* 2. Professional Work Experience (From CV) */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              <span>Career History &amp; Commercial Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Hands-on production track record across over 200 commercial and internal game, animation, and 3D printing projects.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Experience 1: AptechMedia */}
            <div className="card-elevation rounded-3xl p-6 sm:p-8 space-y-5 bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                    2022 &ndash; PRESENT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    AptechMedia
                  </h3>
                  <div className="text-sm font-semibold text-slate-300">
                    3D Artist &amp; Unreal Engine and Unity Game Designer
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-semibold">
                    200+ Projects
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    Unreal &amp; Unity
                  </span>
                </div>
              </div>

              {/* Responsibilities list directly from CV */}
              <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <span>
                    <strong>Produced and optimized high-quality 3D assets for over 200 commercial and internal projects</strong> &mdash; featuring prominent titles and environments such as <em className="font-semibold text-white not-italic">Slash of Royal</em>, <em className="font-semibold text-white not-italic">GL Home</em>, <em className="font-semibold text-white not-italic">UV aye</em>, <em className="font-semibold text-white not-italic">HoN Game Characters</em>, <em className="font-semibold text-white not-italic">Takashi Ninja Character</em>, <em className="font-semibold text-white not-italic">Million Dollar Baby</em>, and <em className="font-semibold text-white not-italic">Saga OF Wings</em>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <span>
                    <strong>Engine Integration &amp; Visual Fidelity:</strong> Successfully integrated assets into both Unreal Engine and Unity environments, ensuring seamless real-time performance and visual consistency.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <span>
                    <strong>Advanced PBR Texturing &amp; Modeling:</strong> Utilized Blender for detailed modeling and Substance Painter for professional PBR texture workflows, capturing specialized styles ranging from stylized hand-painted looks to realistic surfaces.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <span>
                    <strong>3D Printing &amp; Engine Portability:</strong> Delivered versatile models fully compatible with standard 3D printing pipelines and cross-platform game engines.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <span>
                    <strong>UI &amp; Core Gameplay Systems:</strong> Contributed to UI design and core gameplay systems across a diverse portfolio of notable commercial projects, including <em className="font-semibold text-white not-italic">Kitchen Simulation</em> and <em className="font-semibold text-white not-italic">Eleven22</em>.
                  </span>
                </li>
              </ul>
            </div>

            {/* Experience 2: BIG Ventures Inc. */}
            <div className="card-elevation rounded-3xl p-6 sm:p-8 space-y-5 bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                    2025 &ndash; 2025
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    BIG Ventures Inc.
                  </h3>
                  <div className="text-sm font-semibold text-slate-300">
                    Senior 3D Artist &amp; AI Video Creator
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                    AI Video Creator
                  </span>
                  <span className="px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-semibold">
                    Cinematics &amp; Animation
                  </span>
                </div>
              </div>

              {/* Responsibilities list directly from CV */}
              <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <span>
                    <strong>Cinematic Visuals &amp; AI Integration:</strong> Merged artistic vision with cutting-edge AI technology to produce cinematic visuals, 3D animations, and engaging video content.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <span>
                    <strong>Asset &amp; Environment Crafting:</strong> Specialized in crafting detailed 3D assets, environments, and characters using Blender and Substance Painter, combined with advanced AI-driven storytelling and post-production techniques.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* 3. Education & Languages Section (From CV) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Education (7 cols) */}
          <div className="md:col-span-7 card-elevation rounded-3xl p-6 sm:p-8 space-y-6 bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                  Academic Background
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Education &amp; Computer Science
                </h3>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase">
                  2019 &ndash; 2023
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-950 text-sky-300 border border-sky-500/30">
                  GPA: 3.80 / 4.0
                </span>
              </div>
              <h4 className="text-lg font-bold text-white leading-tight">
                University of Engineering and Technology (UET), Peshawar
              </h4>
              <p className="text-sm font-semibold text-slate-300">
                Bachelor of Computer Science (BCS)
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Rigorous computer science curriculum emphasizing computer graphics, rendering algorithms, data structures, and computational optimization. This technical background directly elevates Kashif's ability to diagnose game engine bottlenecks, automate retopology, and structure clean scene hierarchies.
              </p>
            </div>
          </div>

          {/* Languages (5 cols) */}
          <div className="md:col-span-5 card-elevation rounded-3xl p-6 sm:p-8 space-y-6 bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400">
                <Languages className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                  Communication
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Languages
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white block">Pashto</span>
                  <span className="text-xs text-slate-400">Native Speaker</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                  Native
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white block">Urdu</span>
                  <span className="text-xs text-slate-400">National Language</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-sky-950/80 text-sky-300 border border-sky-500/30 text-xs font-semibold">
                  Fluent
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white block">English</span>
                  <span className="text-xs text-slate-400">International Studio Collaboration</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  Intermediate
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* 4. Workflow & Standards (3 Core Pillars) */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
              Core Technical Philosophies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              3 Uncompromising Standards in Every Asset
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Producing game assets and 3D prints that eliminate rework, ensuring your technical animators and engine developers receive pristine geometry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Standard 1 */}
            <div className="card-elevation rounded-3xl p-6 sm:p-8 space-y-4 bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                1. Clean Topology
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Clean quad topology suitable for seamless deformation during animation. Edge loops organically trace facial muscle groups, elbow bend lines, and shoulder articulation to prevent polygonal pinching or volume collapse.
              </p>
              <div className="pt-2 text-xs font-mono text-sky-400 font-medium">
                &bull; Zero Triangles on Deforming Joints
              </div>
            </div>

            {/* Standard 2 */}
            <div className="card-elevation rounded-3xl p-6 sm:p-8 space-y-4 bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                2. Artistic Accuracy
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Faithfully capturing silhouette, anatomy, and personality from initial concept to final bake. Whether translating a stylized 2D cartoon turnaround or an intricate dark-fantasy concept sheet, the artistic soul is preserved.
              </p>
              <div className="pt-2 text-xs font-mono text-sky-400 font-medium">
                &bull; Faithful 2D-to-3D Silhouette Match
              </div>
            </div>

            {/* Standard 3 */}
            <div className="card-elevation rounded-3xl p-6 sm:p-8 space-y-4 bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                3. Engine Optimization
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Strict adherence to polygon budgets, draw-call limits, and texture optimization. UV sheets are packed with 85%+ texel density, channel-packed ORM maps are created, and LOD meshes are generated for 60+ FPS stability.
              </p>
              <div className="pt-2 text-xs font-mono text-sky-400 font-medium">
                &bull; Low Draw Calls &amp; Max Texel Density
              </div>
            </div>

          </div>
        </section>

        {/* 5. Core Software Arsenal */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
              DCC Tools &amp; Engines
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Production Software Arsenal
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Proficient in industry-standard modeling, texturing, game engines, and 3D printing pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFTWARE_DATA.map((tool, idx) => (
              <div
                key={idx}
                className="card-elevation rounded-3xl p-6 space-y-4 hover:border-sky-400/50 bg-slate-900/60 border border-slate-800"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                    <span className="text-xs text-sky-400 font-medium">{tool.category}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950 text-[11px] font-mono font-semibold text-slate-300 border border-slate-800">
                    {tool.experienceYears}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {tool.description}
                </p>

                <div className="pt-2 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {tool.coreUseCases.map((use, uIdx) => (
                      <span
                        key={uIdx}
                        className="px-2 py-0.5 rounded-md bg-sky-950/60 text-[11px] font-medium text-sky-300 border border-sky-500/20"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Project Commission Pipeline (5 Phases) */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
              Transparent Production Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              The 5-Phase 3D Commission Pipeline
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Every commission follows a structured roadmap with milestone signoffs, ensuring you stay in total control of proportions, aesthetics, and technical delivery.
            </p>
          </div>

          <div className="space-y-6">
            {PIPELINE_PHASES.map((phase) => (
              <div
                key={phase.phase}
                className="card-elevation rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-slate-900/60 border border-slate-800"
              >
                {/* Phase Number Badge */}
                <div className="lg:col-span-3 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-white font-black text-2xl flex items-center justify-center shadow-md shadow-sky-500/25 shrink-0">
                    0{phase.phase}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block">
                      Phase 0{phase.phase}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                {/* Phase Description */}
                <div className="lg:col-span-5 space-y-2">
                  <span className="text-xs font-medium text-slate-400 block">
                    {phase.subtitle}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Deliverables & Review Gate */}
                <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider">
                    <FileCheck className="w-4 h-4 text-sky-400" />
                    <span>Review Milestone:</span>
                  </div>
                  <div className="text-xs font-semibold text-sky-300 bg-sky-950/60 border border-sky-500/30 px-3 py-1.5 rounded-xl">
                    {phase.reviewGate}
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Format Delivery Matrix */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
              Format Delivery
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Supported Industry File Formats
            </h2>
            <p className="text-slate-300 text-sm">
              Deliverables formatted precisely to seamlessly plug into your studio's existing game engine, 3D printing, or DCC pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPORTED_FORMATS.map((fmt, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5"
              >
                <div className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-sky-400 shadow-2xs">
                  {fmt.ext}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{fmt.name}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{fmt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Contact CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-950/80 via-slate-900 to-blue-950/80 border border-sky-500/30 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ready to collaborate on your next game or 3D project?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Let's talk about timeline, poly budgets, and art direction. Kashif responds within 12 hours worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getMediaUrl('/Kashif_Ullah_Jan_CV.pdf')}
              download="Kashif_Ullah_Jan_CV.pdf"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 shadow-md transition-all active:scale-98 flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 text-sky-400" />
              <span>Download CV</span>
            </a>

            <Link
              to="/contact"
              className="btn-primary-tactile text-base py-3.5 px-8 shrink-0"
            >
              <span>Commission 3D Work</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

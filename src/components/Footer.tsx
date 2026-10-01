import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#030712] border-t border-slate-800/90 py-16 text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1 & 2: Studio Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 p-0.5 shadow-sm flex items-center justify-center">
                <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                  <span className="text-sky-400 font-extrabold text-sm">3D</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-white text-lg leading-tight">
                  KASHIF ULLAH JAN <span className="text-sky-400">3D</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  3D Artist &amp; Game Designer
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Portfolio and studio of Kashif Ullah Jan. Specialized in modeling, texturing, and optimizing assets for real-time applications across Unreal Engine, Unity, Blender, Substance Painter, and 3D printing workflows.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/90 border border-slate-800 px-3.5 py-2 rounded-xl w-fit shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Peshawar, Pakistan &bull; Available Worldwide &bull; NDA Friendly</span>
            </div>
          </div>

          {/* Column 3: Core Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              3D Disciplines
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-sky-400 text-slate-300 transition-colors">
                  Character Sculpting &amp; Modeling
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 text-slate-300 transition-colors">
                  PBR Texturing (Substance Painter)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 text-slate-300 transition-colors">
                  Unreal Engine &amp; Unity Integration
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 text-slate-300 transition-colors">
                  3D Printing Workflows (STL/OBJ)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 text-slate-300 transition-colors">
                  AI Video Creation &amp; Cinematics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-sky-400 text-slate-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 text-slate-300 transition-colors">
                  Services &amp; Pipelines
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-sky-400 text-slate-300 transition-colors">
                  Portfolio &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 text-slate-300 transition-colors">
                  About Kashif Ullah Jan
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 text-slate-300 transition-colors">
                  Commission 3D Asset
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href="mailto:Kashifullahjan1234@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">Kashifullahjan1234@gmail.com</span>
              </a>

              <a
                href="https://wa.me/923129399703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <span className="text-emerald-400 font-bold text-xs uppercase">WA:</span>
                <span>+92 312 9399703</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kashifullahjan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors group"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.artstation.com/kashifullahjan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors group"
              >
                <span>ArtStation Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>&copy; {new Date().getFullYear()} Kashif Ullah Jan. All commercial rights and intellectual property reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Engineered with React &bull; Three.js &bull; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

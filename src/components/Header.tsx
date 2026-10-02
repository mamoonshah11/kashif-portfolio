import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, FileDown } from 'lucide-react';
import { getMediaUrl } from '../utils/media';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#030712]/90 backdrop-blur-md border-b border-sky-500/20 py-3.5 px-6 sm:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Minimalist 3D geometric cube / vertex icon */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 p-0.5 shadow-md shadow-sky-500/20 group-hover:shadow-lg group-hover:shadow-sky-500/40 transition-all flex items-center justify-center">
            <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <svg className="w-6 h-6 text-sky-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none">
                {/* 3D Cube with vertices */}
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#cube-top)" stroke="#38BDF8" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M2 7V17L12 22V12L2 7Z" fill="url(#cube-left)" stroke="#0284C7" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M12 12V22L22 17V7L12 12Z" fill="url(#cube-right)" stroke="#0369A1" strokeWidth="1.2" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="1.5" fill="#38BDF8"/>
                <circle cx="12" cy="2" r="1.2" fill="#BAE6FD"/>
                <circle cx="2" cy="7" r="1.2" fill="#0284C7"/>
                <circle cx="22" cy="7" r="1.2" fill="#0284C7"/>
                <circle cx="12" cy="22" r="1.2" fill="#0284C7"/>
                <defs>
                  <linearGradient id="cube-top" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" stopOpacity="0.8"/>
                    <stop offset="1" stopColor="#0284C7" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="cube-left" x1="2" y1="7" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0EA5E9" stopOpacity="0.3"/>
                    <stop offset="1" stopColor="#0369A1" stopOpacity="0.6"/>
                  </linearGradient>
                  <linearGradient id="cube-right" x1="12" y1="12" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0284C7" stopOpacity="0.5"/>
                    <stop offset="1" stopColor="#0F172A" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-white text-lg leading-tight flex items-center gap-1.5">
              KASHIF ULLAH JAN <span className="text-sky-400 font-black">3D</span>
            </span>
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-none mt-0.5">
              3D Artist &amp; Game Designer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-tight py-2 transition-all relative ${
                  isActive
                    ? 'text-sky-400 font-semibold border-b-2 border-sky-400 shadow-sky-400/20'
                    : 'text-slate-300 font-medium hover:text-sky-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Header Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={getMediaUrl('/Kashif_Ullah_Jan_CV.pdf')}
            download="Kashif_Ullah_Jan_CV.pdf"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-sky-950/60 text-slate-200 hover:text-sky-300 border border-slate-700/80 hover:border-sky-400/80 font-semibold text-xs transition-all shadow-2xs"
            title="Download Kashif Ullah Jan's Official CV (PDF)"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-400" />
            <span>Download CV</span>
          </a>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/40 active:scale-98 transition-all group"
          >
            <span>Commission 3D Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-800 pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200 bg-[#030712]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-sky-950/60 text-sky-400 font-semibold border border-sky-500/30'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-sky-400'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-2 px-2 space-y-2">
            <a
              href={getMediaUrl('/Kashif_Ullah_Jan_CV.pdf')}
              download="Kashif_Ullah_Jan_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-slate-200 font-semibold text-sm border border-slate-800"
            >
              <FileDown className="w-4 h-4 text-sky-400" />
              <span>Download Official CV (PDF)</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary-tactile text-sm py-3 justify-center"
            >
              <span>Commission 3D Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';
import type { ServiceItem } from '../types';
import {
  CheckCircle2,
  ArrowRight,
  Calculator,
  Search,
  Cpu,
  Layers,
  Palette,
  Box,
  Orbit,
  Printer,
  Sparkles,
  UserCheck,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CostEstimatorModal } from '../components/CostEstimatorModal';

export const ServicesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All 8 Services' },
    { id: 'character', label: 'Character Sculpting' },
    { id: 'pipeline', label: 'Rigging & Engine' },
    { id: 'texturing', label: 'PBR Texturing' },
    { id: 'hardsurface', label: 'Hard-Surface & Mech' },
    { id: 'product', label: 'Product Viz' },
    { id: 'web3d', label: 'Web 3D & WebGL' },
    { id: 'printing', label: '3D Printing' },
    { id: 'concept', label: 'Concept Translation' }
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'character':
        return <UserCheck className="w-6 h-6 text-sky-400" />;
      case 'pipeline':
        return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'texturing':
        return <Palette className="w-6 h-6 text-sky-400" />;
      case 'hardsurface':
        return <Layers className="w-6 h-6 text-sky-400" />;
      case 'product':
        return <Box className="w-6 h-6 text-sky-400" />;
      case 'web3d':
        return <Orbit className="w-6 h-6 text-sky-400" />;
      case 'printing':
        return <Printer className="w-6 h-6 text-sky-400" />;
      case 'concept':
        return <Sparkles className="w-6 h-6 text-sky-400" />;
      default:
        return <Zap className="w-6 h-6 text-sky-400" />;
    }
  };

  const handleRequestService = (service: ServiceItem) => {
    navigate('/contact', {
      state: {
        prefilledType: service.id,
        prefilledServiceTitle: service.title
      }
    });
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white">
      {/* Ambient Cybernetic Blue Glow Layers */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-sky-600/15 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] -z-10 -translate-x-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
        
        {/* Header Title Section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>End-to-End 3D Production Pipelines</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Comprehensive 3D Modeling, Sculpting &amp; Engine Integration
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Every 3D discipline crafted to AAA industry standards. From concept art translation and anatomically precise digital sculpts to fully rigged characters, physical 3D print slicing, and lightweight WebGL assets.
          </p>
        </div>

        {/* Filter Controls & Estimator Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, deliverables, or software..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
            />
          </div>

          {/* Cost Estimator Modal Trigger */}
          <button
            onClick={() => setIsEstimatorOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-950/60 hover:bg-sky-900/60 border border-sky-500/30 text-sky-300 font-semibold text-sm transition-all shadow-2xs group"
          >
            <Calculator className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span>Calculate Project Scope &amp; Cost</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
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

        {/* Services Grid (8 Services) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="card-elevation rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group bg-slate-900/60 border border-slate-800"
            >
              {/* Subtle card decorative top glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-colors pointer-events-none" />

              <div className="space-y-5">
                {/* Header Icon & Tagline */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xs">
                    {getServiceIcon(service.category)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-medium text-slate-500">
                      0{index + 1} //
                    </span>
                    <span className="block text-xs font-semibold text-sky-400 mt-0.5">
                      {service.estimatedTimeline}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-2 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Core Deliverables Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software Tools */}
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Production Tools Utilized:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 text-xs font-medium text-slate-300 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Commercial &amp; NDA Certified</span>
                </div>

                <button
                  onClick={() => handleRequestService(service)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/50 text-slate-200 hover:text-sky-300 text-xs font-semibold transition-all shadow-2xs group/btn"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredServices.length === 0 && (
          <div className="mt-12 text-center py-16 bg-slate-900/60 rounded-3xl border border-slate-800">
            <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No matching services found</h3>
            <p className="text-sm text-slate-400 mt-1">Try adjusting your search terms or filter selection.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner to Contact */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-950/80 via-slate-900 to-blue-950/80 border border-sky-500/30 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Have a custom 3D requirement or unique pipeline?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We frequently handle custom hybrid pipelines, stylized art directions, proprietary engine rigs, and high-volume asset packs.
            </p>
          </div>

          <Link
            to="/contact"
            className="btn-primary-tactile text-sm sm:text-base py-3 px-8 shrink-0"
          >
            <span>Discuss Custom Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Cost Estimator Modal */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />
    </div>
  );
};

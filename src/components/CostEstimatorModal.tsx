import { useState } from 'react';
import { X, Calculator, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [assetType, setAssetType] = useState<string>('hero-character');
  const [polyTier, setPolyTier] = useState<string>('aaa-game');
  const [textureTier, setTextureTier] = useState<string>('4k-pbr');
  const [includeRigging, setIncludeRigging] = useState<boolean>(true);
  const [includeBlendshapes, setIncludeBlendshapes] = useState<boolean>(true);
  const [includeWeb3D, setIncludeWeb3D] = useState<boolean>(false);

  if (!isOpen) return null;

  // Calculate estimate
  let basePrice = 800;
  let timelineDays = 8;

  if (assetType === 'hero-character') {
    basePrice = 1400;
    timelineDays = 14;
  } else if (assetType === 'stylized') {
    basePrice = 950;
    timelineDays = 10;
  } else if (assetType === 'hardsurface') {
    basePrice = 1200;
    timelineDays = 12;
  } else if (assetType === 'product') {
    basePrice = 750;
    timelineDays = 6;
  } else if (assetType === 'statue') {
    basePrice = 1100;
    timelineDays = 11;
  }

  if (polyTier === 'aaa-game') {
    basePrice += 400;
    timelineDays += 3;
  } else if (polyTier === 'cinematic') {
    basePrice += 750;
    timelineDays += 5;
  }

  if (textureTier === '4k-pbr') basePrice += 250;
  if (textureTier === '8k-udim') {
    basePrice += 500;
    timelineDays += 2;
  }

  if (includeRigging) {
    basePrice += 350;
    timelineDays += 3;
  }
  if (includeBlendshapes) {
    basePrice += 300;
    timelineDays += 2;
  }
  if (includeWeb3D) {
    basePrice += 250;
    timelineDays += 1;
  }

  const handleApply = () => {
    onClose();
    navigate('/contact', {
      state: {
        prefilledType: assetType,
        estimatedBudget: `$${basePrice - 200} – $${basePrice + 300}`,
        notes: `Estimated scope: ${assetType} with ${polyTier}, ${textureTier}, Rigging: ${includeRigging ? 'Yes' : 'No'}, 52 ARKit Blendshapes: ${includeBlendshapes ? 'Yes' : 'No'}, WebGL: ${includeWeb3D ? 'Yes' : 'No'}`
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#030712] rounded-3xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col max-h-[90vh] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-500 text-white shadow-xs">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Interactive 3D Project Estimator</h3>
              <p className="text-xs text-slate-400">Calculate estimated scope, turnaround SLA, and budget</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Asset Type */}
          <div>
            <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
              1. 3D Discipline / Asset Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'hero-character', label: 'AAA Hero Character' },
                { id: 'stylized', label: 'Stylized Mascot' },
                { id: 'hardsurface', label: 'Sci-Fi / Mech / Armor' },
                { id: 'product', label: '3D Product Viz' },
                { id: 'statue', label: '3D Printable Statue' },
                { id: 'web3d', label: 'Interactive Web 3D' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAssetType(opt.id)}
                  className={`p-3 rounded-xl text-xs font-medium border text-left transition-all ${
                    assetType === opt.id
                      ? 'bg-sky-950/80 border-sky-400 text-sky-300 font-semibold shadow-xs'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Polycount Tier */}
          <div>
            <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
              2. Polygon Budget &amp; Target Pipeline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'mobile', label: 'Mobile / Indie', sub: '< 18k Tris' },
                { id: 'aaa-game', label: 'AAA Unreal / Unity', sub: '30k – 60k Tris' },
                { id: 'cinematic', label: 'Cinematic / Sub-D', sub: 'High-Density / SSS' }
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setPolyTier(tier.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    polyTier === tier.id
                      ? 'bg-sky-950/80 border-sky-400 text-sky-300 shadow-xs'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="block text-xs font-semibold">{tier.label}</span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">{tier.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Texturing */}
          <div>
            <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
              3. PBR Texture Resolution
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: '2k-pbr', label: '2K PBR' },
                { id: '4k-pbr', label: '4K Ultra HD PBR' },
                { id: '8k-udim', label: '8K Multi-UDIM' }
              ].map((tex) => (
                <button
                  key={tex.id}
                  onClick={() => setTextureTier(tex.id)}
                  className={`p-2.5 rounded-xl border text-xs text-center font-medium transition-all ${
                    textureTier === tex.id
                      ? 'bg-sky-950/80 border-sky-400 text-sky-300 font-semibold shadow-xs'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {tex.label}
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
              4. Pipeline Add-ons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label
                onClick={() => setIncludeRigging(!includeRigging)}
                className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                  includeRigging ? 'bg-sky-950/80 border-sky-400 text-sky-300' : 'bg-slate-900/60 border-slate-800 text-slate-300'
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${includeRigging ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-700'}`}>
                  {includeRigging && <Check className="w-3 h-3" />}
                </div>
                <span className="text-xs font-medium">Skeletal Deform Rig</span>
              </label>

              <label
                onClick={() => setIncludeBlendshapes(!includeBlendshapes)}
                className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                  includeBlendshapes ? 'bg-sky-950/80 border-sky-400 text-sky-300' : 'bg-slate-900/60 border-slate-800 text-slate-300'
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${includeBlendshapes ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-700'}`}>
                  {includeBlendshapes && <Check className="w-3 h-3" />}
                </div>
                <span className="text-xs font-medium">52 ARKit Blendshapes</span>
              </label>

              <label
                onClick={() => setIncludeWeb3D(!includeWeb3D)}
                className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                  includeWeb3D ? 'bg-sky-950/80 border-sky-400 text-sky-300' : 'bg-slate-900/60 border-slate-800 text-slate-300'
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${includeWeb3D ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-700'}`}>
                  {includeWeb3D && <Check className="w-3 h-3" />}
                </div>
                <span className="text-xs font-medium">60 FPS WebGL GLB</span>
              </label>
            </div>
          </div>

          {/* Real-time Result Summary Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 border border-sky-500/40 text-white shadow-lg shadow-sky-950/50 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-sky-400 uppercase tracking-wider block">
                Estimated Project Investment
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-0.5">
                ${basePrice - 200} &ndash; ${basePrice + 300} USD
              </div>
              <div className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                <span>Estimated Turnaround:</span>
                <span className="font-semibold text-sky-300">{timelineDays}&ndash;{timelineDays + 4} Business Days</span>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all shadow-md shadow-sky-500/30 active:scale-98 flex items-center gap-2"
            >
              <span>Apply to Commission Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

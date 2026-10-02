import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  PhoneCall,
  FileDown,
  MapPin
} from 'lucide-react';
import type { CommissionFormData } from '../types';
import { getMediaUrl } from '../utils/media';

export const ContactPage = () => {
  const location = useLocation();
  const navState = location.state as any;

  const [formData, setFormData] = useState<CommissionFormData>({
    clientName: '',
    email: '',
    projectType: 'Realistic Character',
    targetPolyCount: 'Unreal Engine 5',
    budgetRange: '$1,500–$3,000',
    brief: '',
    deadline: '',
    referenceUrl: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Pre-fill from navigation state if available
  useEffect(() => {
    if (navState) {
      setFormData((prev) => ({
        ...prev,
        projectType: navState.prefilledType || navState.prefilledCategory || prev.projectType,
        budgetRange: navState.estimatedBudget || prev.budgetRange,
        brief: navState.notes
          ? `${prev.brief ? prev.brief + '\n\n' : ''}${navState.notes}`
          : navState.prefilledProject
          ? `Inquiry regarding project reference: ${navState.prefilledProject}.`
          : prev.brief
      }));
    }
  }, [navState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate professional studio dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Celebrate with confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0ea5e9', '#38bdf8', '#0284c7', '#bae6fd']
        });
      } catch (err) {
        // graceful fallback if canvas blocked
      }
    }, 800);
  };

  const projectTypes = [
    'Realistic Character',
    'Stylized Mascot',
    'Hard-Surface / Mech',
    '3D Product Modeling',
    '3D Printing / Collectible',
    'Rigging / Game Integration',
    'Real-Time Web 3D'
  ];

  const engineOptions = [
    'Unreal Engine 5',
    'Unity',
    '3D Print STL',
    'Cinematic Render',
    'Mobile Game'
  ];

  const budgetOptions = [
    '$500–$1,500',
    '$1,500–$3,000',
    '$3,000–$6,000',
    '$6,000+'
  ];

  const faqs = [
    {
      q: 'What is your standard turnaround time for a 3D character?',
      a: 'A game-ready character (high-poly sculpt, retopology, UVs, and 4K PBR textures) typically takes 10–18 business days. We provide staged WIP milestones (High-poly sculpt approval -> Retopology & UV wireframe gate -> Final PBR lookdev).'
    },
    {
      q: 'Do you operate under Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, 100%. We routinely work with commercial studios and independent developers under mutual NDAs to safeguard pre-announcement game IP and proprietary designs.'
    },
    {
      q: 'Can you integrate 3D models directly into our Unreal Engine 5 or Unity project?',
      a: 'Absolutely. We configure Master Material instances, setup Nanite & Lumen settings in UE5, create socket attachments for weapons, and export cleanly formatted .unitypackage assets with URP shaders.'
    },
    {
      q: 'What files will I receive upon project completion?',
      a: 'You receive clean production-ready .FBX, .OBJ, native .BLEND or .ZTL source sculpts, non-overlapping UVs, and multi-channel 2K/4K/8K PBR texture sets (Albedo, Normal, Roughness, Metallic, AO, SSS). Unreal Engine 5 or Unity turnkey scenes are available upon request.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-white">
      {/* Ambient Cybernetic Blue Glow Layers */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-sky-600/15 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] -z-10 -translate-x-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            <span>Direct Studio Inquiries &amp; 3D Commissions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Commission 3D Characters, Sculpting &amp; Assets
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you need a flagship hero character for Unreal Engine 5, a series of stylized mascots, or physical collectible sculpts, share your project details below to receive a formal turnaround quote.
          </p>
        </div>

        {/* 2-Column Layout: Direct Desk & Commission Request Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Inquiry Desk (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="card-elevation rounded-3xl p-6 sm:p-7 space-y-6 bg-slate-900/60 border border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">Direct Inquiry Desk</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Direct channels for rapid feedback and studio communications.
                </p>
              </div>

              {/* SLA Badge */}
              <div className="p-3.5 rounded-2xl bg-sky-950/50 border border-sky-500/30 flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-sky-300">Guaranteed 12-Hour SLA</span>
                  <span className="text-[11px] text-sky-200/80">All inquiries answered within 12 hours worldwide</span>
                </div>
              </div>

              {/* Channels List */}
              <div className="space-y-3.5">
                <a
                  href="mailto:Kashifullahjan1234@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/50 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 shadow-2xs group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase">Primary Email</span>
                    <span className="block text-xs font-bold text-white truncate">Kashifullahjan1234@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/923129399703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/50 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-2xs group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase">WhatsApp &amp; Phone</span>
                    <span className="block text-xs font-bold text-white">+92 312 9399703</span>
                  </div>
                </a>

                <a
                  href="https://www.artstation.com/kashifullahjan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/50 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 text-sky-400 flex items-center justify-center font-bold text-sm shadow-2xs">
                      A
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase">ArtStation</span>
                      <span className="block text-xs font-bold text-white">artstation.com/kashifullahjan</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kashifullahjan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/50 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                      in
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase">LinkedIn Profile</span>
                      <span className="block text-xs font-bold text-white">linkedin.com/in/kashifullahjan</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase">Studio Location</span>
                    <span className="block text-xs font-bold text-white leading-tight">Warsak Road, Mathra, Peshawar, Pakistan</span>
                  </div>
                </div>

                {/* Direct CV Download Link in channels */}
                <a
                  href={getMediaUrl('/Kashif_Ullah_Jan_CV.pdf')}
                  download="Kashif_Ullah_Jan_CV.pdf"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-sky-950/50 hover:bg-sky-900/60 border border-sky-500/30 text-sky-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-2xs">
                      <FileDown className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-sky-400 uppercase">Official Curriculum Vitae</span>
                      <span className="block text-xs font-bold text-white">Download Kashif Ullah Jan CV (PDF)</span>
                    </div>
                  </div>
                  <FileDown className="w-4 h-4 text-sky-400 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* NDA & IP Trust Notice */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Strict NDA Protection</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  We frequently operate under mutual NDAs before reviewing concept art or story bibles. Your intellectual property is 100% safeguarded.
                </p>
              </div>
            </div>

            {/* Quick FAQ Mini-Widget */}
            <div className="card-elevation rounded-3xl p-6 space-y-4 bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-400" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-2">
                {faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="border border-slate-800 rounded-2xl overflow-hidden transition-all bg-slate-950/50"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                      className="w-full p-3.5 text-left text-xs font-semibold text-white flex items-center justify-between gap-2 hover:bg-slate-900/60"
                    >
                      <span>{faq.q}</span>
                      {openFaq === fIdx ? (
                        <ChevronUp className="w-4 h-4 text-sky-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {openFaq === fIdx && (
                      <div className="px-3.5 pb-3.5 text-xs text-slate-300 leading-relaxed bg-slate-900/40 border-t border-slate-800/60 pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3D Commission Request Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="card-elevation rounded-3xl p-6 sm:p-10 relative overflow-hidden bg-slate-900/60 border border-slate-800">
              
              {/* Form Header */}
              <div className="border-b border-slate-800 pb-6 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  3D Project Commission Request
                </h2>
                <p className="text-slate-300 text-sm mt-1">
                  Fill in the project details below to receive a formal schedule and milestone estimate.
                </p>
              </div>

              {/* Success Confirmation State */}
              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-sky-950 border border-sky-500/40 text-sky-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-white">
                      Commission Request Dispatched!
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Thank you, <strong className="text-white">{formData.clientName}</strong>. Kashif Ullah Jan will review your project brief and target pipeline ({formData.targetPolyCount}) and reply to <strong className="text-white">{formData.email}</strong> within 12 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-sky-950/50 border border-sky-500/30 text-xs text-sky-200 max-w-sm mx-auto">
                    <strong>Project Type:</strong> {formData.projectType} &bull; <strong>Budget:</strong> {formData.budgetRange}
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        clientName: '',
                        email: '',
                        projectType: 'Realistic Character',
                        targetPolyCount: 'Unreal Engine 5',
                        budgetRange: '$1,500–$3,000',
                        brief: '',
                        deadline: '',
                        referenceUrl: ''
                      });
                    }}
                    className="btn-secondary-tactile text-xs py-2.5 px-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Client Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Client / Studio Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        placeholder="e.g. Apex Games Studio / Alex Vance"
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. studio@production.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Project Type & Target Engine */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Project Type / Discipline <span className="text-sky-400">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
                      >
                        {projectTypes.map((pt) => (
                          <option key={pt} value={pt} className="bg-slate-950 text-white">
                            {pt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Target Engine / Destination <span className="text-sky-400">*</span>
                      </label>
                      <select
                        value={formData.targetPolyCount}
                        onChange={(e) => setFormData({ ...formData, targetPolyCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
                      >
                        {engineOptions.map((eng) => (
                          <option key={eng} value={eng} className="bg-slate-950 text-white">
                            {eng}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Estimated Budget & Target Deadline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Estimated Budget (USD) <span className="text-sky-400">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budgetRange: b })}
                            className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                              formData.budgetRange === b
                                ? 'bg-sky-950/70 border-sky-400 text-sky-300 font-semibold shadow-xs'
                                : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Target Deadline / Launch Date
                      </label>
                      <input
                        type="text"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        placeholder="e.g. Q4 Release, or 3–4 Weeks"
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
                      />
                      <span className="block text-[11px] text-slate-500 mt-1">
                        Turnaround typically ranges from 1–3 weeks per character.
                      </span>
                    </div>
                  </div>

                  {/* Row 4: Concept Art Link or Cloud Storage */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Reference URL / Concept Art Drive Link (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.referenceUrl}
                      onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                      placeholder="e.g. https://dropbox.com/... or Google Drive link"
                      className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Row 5: Project Brief Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Project Brief &amp; Technical Requirements <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder="Describe your character/asset requirements: anatomical style, clothing/armor layers, rigging requirements (e.g. 52 ARKit blendshapes), texture resolution (4K/8K), and target triangle budget..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-sky-400" />
                      <span>Encrypted dispatch &bull; Non-Disclosure respected</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto btn-primary-tactile text-sm py-3 px-8 group disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Brief...</span>
                      ) : (
                        <>
                          <span>Submit 3D Commission Brief</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

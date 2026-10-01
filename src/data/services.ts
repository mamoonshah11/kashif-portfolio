import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'character-modeling',
    title: '3D Character Modeling & Sculpting (Realistic & Stylized)',
    tagline: 'High-Fidelity Organic Sculpting & Anatomy Definition',
    summary: 'High-poly digital sculpting and optimized low-poly retopology for hero characters, creatures, and human anatomy. From expressive stylized mascots to photorealistic AAA video game heroes.',
    deliverables: [
      'ZBrush digital sculpt (.ZTL & high-density mesh)',
      'Clean quad-based low-poly production mesh',
      'Detailed facial anatomy & realistic micro-skin pores',
      'Clothes and dynamic armor modeling with natural folds',
      'Optimized hair cards setup or Ornatrix/XGen grooming guides',
      'Clean non-overlapping UV layout across UDIMs or single atlas'
    ],
    tools: ['ZBrush', 'Maya', 'Blender', 'Marvelous Designer'],
    category: 'character',
    icon: 'UserCheck',
    estimatedTimeline: '2–3 Weeks per Hero Character',
    targetEngines: ['Unreal Engine 5', 'Unity', 'Cinematic Arnold/V-Ray', 'Blender Cycles']
  },
  {
    id: 'game-pipeline',
    title: 'Game-Ready Character Pipeline (Rigging & Engine Integration)',
    tagline: 'Full Skeletal Rigging, 52 ARKit Blendshapes & LODs',
    summary: 'Complete game-ready characters prepared for Unreal Engine 5 and Unity with proper skeletal deformation, physics cloth proxies, and comprehensive facial expression blendshapes.',
    deliverables: [
      'Full body skeletal deformation rig with IK/FK switching',
      'Facial expression blendshapes (52 ARKit blendshapes for Live Link tracking)',
      'Level of Detail (LOD0 through LOD3) automated meshes',
      'Clean bone hierarchy mapped to Unreal Mannequin / Unity Humanoid',
      'Socket setup for weapons, armor attachments, and VFX sockets',
      'Engine integration test scenes in UE5 and Unity'
    ],
    tools: ['Maya', 'Blender', 'Unreal Engine 5', 'Unity'],
    category: 'pipeline',
    icon: 'Cpu',
    estimatedTimeline: '1–2 Weeks per Character',
    targetEngines: ['Unreal Engine 5 (Control Rig / Live Link)', 'Unity Humanoid']
  },
  {
    id: 'pbr-texturing',
    title: 'PBR Texturing & Realistic Material Shading',
    tagline: 'Industry-Standard Physically Based Rendering Textures',
    summary: 'Industry-standard Physically Based Rendering (PBR) texturing, creating lifelike skin, weathered metals, fabrics, and stylized hand-painted maps with true physical light response.',
    deliverables: [
      '2K, 4K, and 8K ultra-sharp texture resolution sets',
      'Complete map pack: Albedo, Normal (DirectX & OpenGL), Roughness, Metallic, AO',
      'Subsurface Scattering (SSS) thickness and color maps for lifelike skin',
      'Micro-detail displacement and height maps for extreme closeups',
      'Channel-packed ORM (Occlusion-Roughness-Metallic) maps for game engines',
      'Non-overlapping clean UV unwraps with minimal seam distortion'
    ],
    tools: ['Substance 3D Painter', 'Substance Designer', 'Photoshop'],
    category: 'texturing',
    icon: 'Palette',
    estimatedTimeline: '4–7 Days per Asset Set',
    targetEngines: ['Unreal Engine 5', 'Unity HDRP/URP', 'Marmoset Toolbag 4', 'WebGL']
  },
  {
    id: 'hard-surface',
    title: 'Hard Surface Modeling & Sci-Fi / Mech Design',
    tagline: 'Sub-D Precision Engineering & High-Detail Mechanical Components',
    summary: 'Precision modeling for robotics, sci-fi exoskeletons, weapons, vehicles, and industrial mechanical components with impeccable bevels and clean edge loops.',
    deliverables: [
      'High-precision subdivision surfaces (Sub-D) topology',
      'Flawless beveled normal bakes free from shading pinching',
      'Modular parts and interchangeable weapon components',
      'Custom decal integration and panel detailing',
      'Functional articulation hinges, pistons, and mechanical joints',
      'Optimized poly count tailored to target hardware specifications'
    ],
    tools: ['Maya', 'Blender', 'ZBrush Hard-Surface', 'MOI3D'],
    category: 'hardsurface',
    icon: 'Layers',
    estimatedTimeline: '1.5–3 Weeks',
    targetEngines: ['Unreal Engine 5', 'Unity', 'Industrial Real-Time Viz']
  },
  {
    id: 'product-design',
    title: '3D Product Design & Commercial Visualizations',
    tagline: 'Photorealistic Studio Renders & Micron-Level Accuracy',
    summary: 'Photorealistic studio renders of consumer products, packaging, electronics, and luxury goods for advertising, e-commerce, and high-impact investor presentations.',
    deliverables: [
      'Studio three-point lighting setups and custom HDRI environments',
      'Transparent PNG cutouts in ultra-high resolution (up to 8K)',
      '360-degree turntable animations and camera fly-through sequences',
      'Material variations (colors, finishes, metallic sheens)',
      'Exploded technical assembly views showcasing internal engineering',
      'Ready-to-use marketing graphics and social media aspect ratios'
    ],
    tools: ['Blender Cycles', 'KeyShot', 'Octane Render', 'Photoshop'],
    category: 'product',
    icon: 'Box',
    estimatedTimeline: '3–6 Days per Product Line',
    targetEngines: ['Commercial Print', 'E-commerce Web', 'Cinematic Video Renders']
  },
  {
    id: 'web-3d',
    title: 'Interactive Web 3D & Real-Time WebGL Models',
    tagline: '60 FPS In-Browser 3D Assets with Instant Loading',
    summary: 'Lightweight, optimized 3D models embedded directly into websites allowing users to spin, zoom, and inspect assets at 60 FPS in real time across mobile and desktop browsers.',
    deliverables: [
      'Ultra-compressed GLTF/GLB web assets with Draco geometry compression',
      'KTX2/Basis Universal texture compression for instantaneous load times',
      'Three.js and React Three Fiber component integration code',
      'Mobile-friendly touch gesture controls (rotate, pinch-zoom, pan)',
      'Material variations switchable live via web UI buttons',
      'Baked ambient occlusion and environment lighting for instant 60 FPS'
    ],
    tools: ['Three.js', 'React Three Fiber', 'GLTF Viewer', 'WebGL', 'Blender'],
    category: 'web3d',
    icon: 'Orbit',
    estimatedTimeline: '3–7 Days',
    targetEngines: ['WebGL 2.0', 'Three.js / React Three Fiber', 'Babylon.js']
  },
  {
    id: '3d-printing',
    title: '3D Printing & Collectible Sculpt Preparation',
    tagline: 'Watertight Manifold Meshes & Keyed Assembly Slicing',
    summary: 'Preparing digital character sculpts for physical 3D resin printing, tabletop miniatures, and collectible statue manufacturing with precision engineering.',
    deliverables: [
      'Watertight manifold STL and OBJ files guaranteed error-free in slicers',
      'Hollowed meshes with strategically placed drainage holes for resin conservation',
      'Keyed interlocking parts (custom plugs and sockets) for snap-fit assembly',
      'Pre-supported files tested for Formlabs and standard SLA/DLP 3D printers',
      'Splitting by material boundaries (cloak, weapons, base, head) for multi-part printing',
      'Base stands and custom collectible plinths with engraved naming plaques'
    ],
    tools: ['ZBrush', 'Chitubox', 'Lychee Slicer', 'Blender'],
    category: 'printing',
    icon: 'Printer',
    estimatedTimeline: '1–2 Weeks',
    targetEngines: ['SLA/DLP Resin 3D Printers', 'FDM 3D Printers', 'Foundry Casting']
  },
  {
    id: 'concept-translation',
    title: 'Concept Art Translation (2D to 3D)',
    tagline: 'Faithful Silhouette Preservation from 2D Art to 3D Dimension',
    summary: 'Taking rough 2D sketches, character turnarounds, or reference sheets and accurately translating them into fully realized 3D models while preserving artistic silhouette and emotional intent.',
    deliverables: [
      'Rapid blockout approval passes for proportion and silhouette review',
      'Proportion and anatomy checks against 2D turnaround orthographics',
      'Harmonious color palette matching and stylistic texture alignment',
      'Iterative milestone check-ins with client before detail sculpting passes',
      'Multi-angle turntable previews for final aesthetic signoff',
      'Full production asset package ready for downstream pipelines'
    ],
    tools: ['ZBrush', 'Photoshop', 'PureRef', 'Maya'],
    category: 'concept',
    icon: 'Sparkles',
    estimatedTimeline: '1–2 Weeks',
    targetEngines: ['All Target Production Pipelines']
  }
];

import type { PipelinePhaseItem } from '../types';

export const PIPELINE_PHASES: PipelinePhaseItem[] = [
  {
    phase: 1,
    title: 'Reference & Silhouette Blockout',
    subtitle: 'Concept Alignment & Primary Proportions',
    description: 'We begin by analyzing your 2D concept sheets, anatomical references, and project style goals. A fast primary 3D blockout is sculpted to lock in silhouette, head-to-body proportions, and personality before any fine detail work begins.',
    deliverables: [
      'Multi-angle viewport turnaround snapshots (Front, Side, 3/4)',
      'Silhouette read validation against camera framing',
      'Artistic scale and anatomy proportion signoff pass'
    ],
    reviewGate: 'Client Blockout & Proportion Signoff'
  },
  {
    phase: 2,
    title: 'High-Poly Digital Sculpting & Detail Passes',
    subtitle: 'Anatomy, Cloth Folds & Micro-Surfaces',
    description: 'Deep digital sculpting inside ZBrush and Marvelous Designer. Every anatomical muscle contour, dynamic garment seam, armor bevel, and skin pore is carved with high artistic fidelity, reaching up to 40+ million polygons.',
    deliverables: [
      'Full resolution digital sculpt (.ZTL / high-poly OBJ)',
      'Marvelous Designer garment simulation files',
      'High-resolution clay render turntables for aesthetic inspection'
    ],
    reviewGate: 'Client High-Poly Detail Signoff'
  },
  {
    phase: 3,
    title: 'Retopology, UV Unwrapping & Clean Bakes',
    subtitle: 'Clean Quad Topology & 16-Bit Normal Bakes',
    description: 'Crafting clean quad-based low-poly topology following natural muscle deformation loops. Non-overlapping UVs are packed with maximum texel density across UDIMs, followed by high-to-low normal, AO, and curvature bakes in Marmoset Toolbag without skew or projection artifacts.',
    deliverables: [
      'Production-ready quad mesh within agreed target budget',
      'Clean non-overlapping UV layout with optimized texel density',
      '16-bit high-to-low baked map package (Normal, Curvature, World Space, AO)'
    ],
    reviewGate: 'Topology Wireframe & Bake Verification'
  },
  {
    phase: 4,
    title: 'PBR Texturing, Material Shading & Rigging',
    subtitle: 'Substance 3D Painter & Unreal / Unity Integration',
    description: 'Bringing characters to life with Physically Based Rendering (PBR) multi-channel texturing. Skin receives subsurface scattering and micro-blemishes; armor receives realistic metallic wear, weathering, and edge highlighting. Rigging and 52 ARKit blendshapes are applied.',
    deliverables: [
      '2K / 4K / 8K PBR texture sets (Albedo, Normal, Roughness, Metallic, SSS, AO)',
      'Complete skeletal deformation rig with IK/FK controls',
      '52 ARKit facial expression blendshapes for real-time tracking'
    ],
    reviewGate: 'Material Lookdev & Rig Deform Approval'
  },
  {
    phase: 5,
    title: 'Final Delivery & Engine Package',
    subtitle: 'Full Source Files & Turnkey Asset Archive',
    description: 'Comprehensive packaging in all requested industry file formats. Complete with test scenes in Unreal Engine 5 or Unity, ensuring instant drag-and-drop integration for your development or 3D printing workflow.',
    deliverables: [
      'Industry standard formats: .FBX, .OBJ, .BLEND, .ZTL, .STL, .GLB',
      'Ready-to-use Unreal Engine 5 (.uasset) / Unity (.unitypackage) setups',
      'Full source archive with documented naming conventions & material slots'
    ],
    reviewGate: 'Final Project Acceptance & Handoff'
  }
];

export const SUPPORTED_FORMATS = [
  { ext: '.FBX', name: 'Autodesk FBX', desc: 'Industry-standard rigged animation & mesh format for Unreal Engine, Unity & Maya.' },
  { ext: '.OBJ', name: 'Wavefront OBJ', desc: 'Universal geometric mesh format with companion .MTL material definitions.' },
  { ext: '.BLEND', name: 'Blender Project', desc: 'Complete native Blender scenes with procedural nodes, lighting, and Cycles materials.' },
  { ext: '.ZTL / .ZPR', name: 'ZBrush Tool', desc: 'Original high-poly dynamesh/subdivision layers with polypaint vertex color.' },
  { ext: '.STL', name: 'Stereolithography', desc: 'Watertight, 100% manifold meshes tailored for SLA/DLP 3D resin printing.' },
  { ext: '.GLB / .GLTF', name: 'GL Transmission', desc: 'Draco-compressed, lightweight 3D web format running at 60 FPS in WebGL.' }
];

const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', '3d work', '3D work');

const PROJECT_CONFIGS = [
  {
    folder: 'HON1',
    sequence: 1,
    id: 'hon-heroes-of-newerth',
    title: 'HON — Heroes of Newerth Hero Suite & Character Sculpts',
    category: 'Game Characters & Digital Sculpt',
    badge: 'MOBA Hero Suite',
    specs: '16 High-Res Character Passes | 4K PBR UDIM Sets | Real-Time Game Topology',
    polyCount: '35,000–55,000 Triangles per Hero',
    textureSets: '4K PBR (BaseColor, Normal, Roughness, Metallic, AO)',
    engineReady: 'Unreal Engine 5 & Unity Compatible',
    overview: 'Flagship AAA 3D character sculpts, production retopology, and Substance Painter texturing for legendary Heroes of Newerth playable champions including Andromeda, Arachna, Blood Hunter, Bombardier, and creature fighters. Crafted with production-grade topology, micro-detailed surface wrinkles, and game-ready edge flow.',
    deliverables: [
      'High-poly ZBrush master sculpts with anatomical micro-detail passes',
      'Clean low-poly production quad topology optimized for fast animation deformation',
      'Complete 4K PBR texture sets (Albedo, Normal, Roughness, Metallic, Ambient Occlusion)',
      'Character turnaround sheets, orthographic reference views, and promotional renders',
      'Modular armor and weapon accessories ready for game-engine socket rigging'
    ],
    tools: ['ZBrush', 'Blender', 'Substance 3D Painter', 'Photoshop', 'Unity / Unreal Engine'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Character Suite', value: '16+ Renders' },
      { label: 'Texture Resolution', value: '4K PBR UDIM' },
      { label: 'Topology', value: '100% Quad Flow' },
      { label: 'Target Platform', value: 'PC / Console MOBA' }
    ],
    clientOrContext: 'Frostburn Studios / Garena — Heroes of Newerth (HON)',
    aestheticTone: 'Dark Fantasy & Heroic MOBA Styling',
    clientLink: 'https://heroesofnewerth.com/',
    clientLinkTitle: 'Official Heroes of Newerth Game Portal',
    clientLinkType: 'website',
    coverFileName: 'Blood hunter.png'
  },
  {
    folder: 'Saga of wings 2',
    sequence: 2,
    id: 'saga-of-wings',
    title: 'Saga of Wings — Mobile Fantasy Game 3D Assets & Creatures',
    category: 'Stylized 3D & Mobile Games',
    badge: 'Mobile Game Production',
    specs: '9 High-Res Renders + 5 Motion Animation Clips | Unity URP Hand-Painted Shaders',
    polyCount: '12,000–22,000 Triangles Combined',
    textureSets: '2x 2K Hand-Crafted Stylized Atlases',
    engineReady: 'Unity URP & Mobile iOS/Android Ready',
    overview: 'Whimsical 3D creature and character asset pipeline built for Saga of Wings on Google Play. Features winged mythical unicorns, expressive fantasy creatures, stylized hand-painted textures, and 5 dynamic in-game animation cycles engineered for low draw calls and smooth 60 FPS mobile performance.',
    deliverables: [
      '5 complete in-game animation sequence renders (idle, gallop, wing flap, attack)',
      'Low-poly stylized meshes with clean edge loops for squash & stretch deformation',
      'Hand-crafted vibrant stylized textures and gradient atlases',
      'Google Play store marketing icons and high-resolution promotional artwork',
      'Turnkey Unity asset package (.unitypackage) with animator controllers'
    ],
    tools: ['Blender', 'Substance 3D Painter', 'Unity Engine', 'Photoshop'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Animation Clips', value: '5 Sequences' },
      { label: 'Platform Target', value: 'Google Play Mobile' },
      { label: 'Frame Rate', value: '60 FPS Solid' },
      { label: 'App Store Presence', value: 'Official Release' }
    ],
    clientOrContext: 'IsoPixel Games — Saga of Wings (Google Play Release)',
    aestheticTone: 'Vibrant Stylized Fantasy & Playful Silhouette',
    clientLink: 'https://play.google.com/store/apps/details?id=com.isopixelgames.sagaofwings&hl=en',
    clientLinkTitle: 'Download Saga of Wings on Google Play Store',
    clientLinkType: 'playstore',
    coverFileName: 'Unicorn Saga.JPG'
  },
  {
    folder: 'UVeye 3',
    sequence: 3,
    id: 'uveye-vehicle-inspection',
    title: 'UVeye — Automated AI Vehicle Inspection 3D Simulation & Hardware Visualization',
    category: 'Industrial 3D & Tech Visualization',
    badge: 'Automotive AI Vision',
    specs: 'Full Commercial Vehicle Scanner Simulation Video | High-Fidelity Hardware Rig',
    polyCount: 'Subdivision Hard-Surface (Micron Precision)',
    textureSets: '4K PBR Industrial Powder-Coated Metal, Optical Lenses & LED Emissive Maps',
    engineReady: 'Unreal Engine 5 (Lumen) & Blender Cycles',
    overview: 'Comprehensive 3D industrial visualization and kinetic simulation showcasing UVeye’s industry-leading automated drive-through vehicle inspection scanner systems. Showcases high-precision multi-angle camera arches, underbody laser scanners, optical sensory arrays, and real-time vehicle telemetry utilized by global automotive leaders (General Motors, Volvo, CarMax).',
    deliverables: [
      'High-fidelity 3D CAD-to-polygonal hardware model of multi-scanner inspection arch',
      'Cinematic camera path rendering simulating drive-through vehicle diagnostics',
      'Physical industrial materials: anodized aluminum, tinted safety glass, optical sensors',
      'LED lighting indicators, laser line projection shaders, and diagnostic telemetry UI',
      'Broadcast-quality commercial animation showcase video'
    ],
    tools: ['Blender', 'Cinema 4D', 'Substance Painter', 'After Effects', 'Unreal Engine'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Industry Partner', value: 'GM / Volvo / CarMax' },
      { label: 'Simulation Type', value: 'AI Hardware Rig' },
      { label: 'Video Showcase', value: 'Commercial Cut' },
      { label: 'LinkedIn Verified', value: 'UVeye Tech' }
    ],
    clientOrContext: 'UVeye Automotive AI Systems (Official Client)',
    aestheticTone: 'Futuristic High-Tech Industrial Precision',
    clientLink: 'https://www.linkedin.com/company/uveye/posts/?feedView=all',
    clientLinkTitle: 'View Client LinkedIn Company Profile (UVeye)',
    clientLinkType: 'linkedin',
    coverFileName: 'UVeye_Video.mp4'
  },
  {
    folder: 'Joygram',
    sequence: 4,
    id: 'joygram-kids-animated-world',
    title: 'Joygram — Stylized 3D Animated Characters & Whimsical Worlds',
    category: 'Stylized 3D & Animation',
    badge: 'Children Entertainment 3D',
    specs: '22 Character & World Renders + 2 Animation Sequences | Joygram Kids Platform',
    polyCount: '8,000–18,000 Triangles per Character',
    textureSets: '2K Stylized PBR Atlases with Vibrant Cel Gradients',
    engineReady: 'Unity & Blender Animation Rig',
    overview: 'Expansive 3D stylized character suite and dynamic holiday environments created for the Joygram Kids digital entertainment platform. Features adorable animated animals, joyful family characters, festive snowy landscapes, race tracks, and expressive animation loops.',
    deliverables: [
      '22 production environment & character render passes',
      '2 animated motion clips featuring fluid character dialogue & movement',
      'Winter holiday snowy environments with custom stylized snow shaders',
      'Modular character outfits, accessories, and ARKit facial blendshapes',
      'Vibrant color palette tailored for children engagement'
    ],
    tools: ['Blender', 'Substance Painter', 'Photoshop', 'Unity'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Total Assets', value: '24 Media Items' },
      { label: 'Style', value: 'Stylized 3D Cartoon' },
      { label: 'Animation Rigs', value: 'Squash & Stretch' },
      { label: 'Target Audience', value: 'Joygram Kids' }
    ],
    clientOrContext: 'Joygram Kids — Children Educational & Entertainment Media',
    aestheticTone: 'Playful, Whimsical & Highly Expressive',
    clientLink: 'https://joygramkids.com/',
    clientLinkTitle: 'Visit Joygram Kids Official Platform',
    clientLinkType: 'website',
    coverFileName: '3d_realistic_cartoon[00_00_07][20251024-143417].png'
  },
  {
    folder: 'GL Home',
    sequence: 5,
    id: 'gl-home-luxury-real-estate',
    title: 'GL Homes — Architectural 3D Interiors & Kitchen Appliance Collection',
    category: 'Architectural Visualization & Interior 3D',
    badge: 'Luxury Real Estate Viz',
    specs: '45 Photorealistic 3D Interior Assets, Custom Doors & Kitchen Product Models',
    polyCount: 'Subdivision Level 2 (Production CAD Quality)',
    textureSets: '4K Micro-Etched Stainless Steel, Polished Granite, Hardwood Veneers',
    engineReady: 'Blender Cycles & 3ds Max / V-Ray',
    overview: 'Extensive architectural 3D visualization catalog for GL Homes, premier luxury homebuilder. Encompasses millimeter-accurate 3D models of premium entry doors, built-in cooktops, ovens, dishwashers, range hoods, custom cabinetry, and photorealistic interior finishes.',
    deliverables: [
      '45 high-resolution architectural renders and product visualization passes',
      'Accurate CAD-matched dimensions for residential building approval',
      'Photorealistic PBR materials for brushed stainless steel, glass, and timber',
      'Exploded appliance component assemblies and door handle variations',
      'Turnkey asset library for real-time virtual walkthrough staging'
    ],
    tools: ['Blender Cycles', '3ds Max / Maya', 'Substance 3D Painter', 'Photoshop'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Asset Library', value: '45 Renders' },
      { label: 'Materials', value: 'PBR Brushed Steel' },
      { label: 'Accuracy', value: 'CAD Dimensional' },
      { label: 'Client Partner', value: 'GL Homes USA' }
    ],
    clientOrContext: 'GL Homes — Premier Luxury Residential Homebuilder',
    aestheticTone: 'Modern Luxury Editorial & Architectural Elegance',
    clientLink: 'https://www.glhomes.com/',
    clientLinkTitle: 'Visit GL Homes Official Website',
    clientLinkType: 'website',
    coverFileName: 'DOOR1.png'
  },
  {
    folder: 'Million dollar baby',
    sequence: 6,
    id: 'million-dollar-baby-environments',
    title: 'Million Dollar Baby — Cyberpunk Game Environments & Urban Rooftops',
    category: 'Game Environments & Level Art',
    badge: 'Cinematic Game Environment',
    specs: '8 High-Res Concept Renders + 4 Cinematic Walkthrough Videos | Volumetric Lighting',
    polyCount: 'Modular Environment Kit (Nanite & Lumen Ready)',
    textureSets: '4K PBR Wet Asphalt, Neon Emissive, Grimy Concrete & Corrugated Steel',
    engineReady: 'Unreal Engine 5 (Lumen GI) & Blender',
    overview: 'Moody, rain-drenched cyberpunk city environments featuring atmospheric rooftop mechanical tunnels, glowing neon dragon markets, transit passages, and cinematic real-time camera tours rendered with cinematic volumetric fog and realistic reflections.',
    deliverables: [
      '4 cinematic level flythrough videos capturing lighting mood and spatial flow',
      '8 high-resolution environment beauty renders and texture breakdowns',
      'Modular rooftop HVAC, ducts, water towers, and parapet wall kits',
      'Dynamic neon signage with flicker animation shaders and puddle rain ripples',
      'Optimized draw-call instanced meshes for real-time combat gameplay'
    ],
    tools: ['Unreal Engine 5', 'Blender', 'Substance 3D Designer', 'Quixel Megascans'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Cinematic Tours', value: '4 Videos' },
      { label: 'Lighting Tech', value: 'Lumen & Volumetrics' },
      { label: 'Environment', value: 'Cyberpunk Rooftop' },
      { label: 'Art Direction', value: 'Moody Noir' }
    ],
    clientOrContext: 'Commercial Action Game Production & Level Design',
    aestheticTone: 'Cyberpunk Noir, Wet Neon & Atmospheric Realism',
    coverFileName: 'dragon market.png'
  },
  {
    folder: 'Samurai Character',
    sequence: 7,
    id: 'samurai-character-sculpt',
    title: 'Feudal Samurai Character — High-Poly Digital Sculpt & Combat Rig',
    category: 'Game Characters & Digital Sculpt',
    badge: 'AAA Action Hero Sculpt',
    specs: '4 ZBrush Sculpt Renders + Combat Animation Video | Feudal Armor & Katana',
    polyCount: '45,000 Triangles (Real-Time Mesh) | 28M ZBrush Sculpt',
    textureSets: '3x 4K PBR UDIM Texture Sets (Lacquered Wood, Steel, Silk Cord)',
    engineReady: 'Unreal Engine 5 & Unity Compatible',
    overview: 'Masterfully crafted feudal samurai warrior sculpt featuring segmented lacquered plate armor, woven cordage, intimidating oni mask, and fluid sword combat choreography. Engineered to maintain silhouette strength from both close-up cutscenes and combat action cameras.',
    deliverables: [
      'Full combat sword animation video demonstrating authentic posture and balance',
      '4 high-resolution clay sculpt and textured production passes',
      'Micro-etched damascus steel katana blade with ray-traced reflections',
      'Realistic cloth physics simulation for hakama and waist sash',
      'Clean retopology optimized for dynamic martial arts combat deformation'
    ],
    tools: ['ZBrush', 'Blender', 'Substance Painter', 'Marvelous Designer'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Sculpt Detail', value: '28M Polys' },
      { label: 'Combat Video', value: 'Fully Animated' },
      { label: 'Armor Pieces', value: 'Segmented Plates' },
      { label: 'Pipeline', value: 'ZBrush to Engine' }
    ],
    clientOrContext: 'Takashi Ninja / Slash of Royal Character Pipeline',
    aestheticTone: 'Feudal Japanese History & Gritty AAA Combat',
    coverFileName: 'kashif-khan-screenshot-2025-04-11-153348.jpg'
  },
  {
    folder: 'vendetta Character',
    sequence: 8,
    id: 'vendetta-heroine-sculpt',
    title: 'Vendetta Heroine — High-End Character Sculpt & Hair Grooming',
    category: 'Game Characters & Digital Sculpt',
    badge: 'Heroine Character & Grooming',
    specs: '4 High-Poly Renders | Layered Strand Hair Cards | Realistic Facial Anatomy',
    polyCount: '42,000 Triangles | 8,500 Tris Hair Cards',
    textureSets: '4K PBR Skin Subsurface Scattering + Anisotropic Hair Shaders',
    engineReady: 'Unreal Engine 5 & Marmoset Toolbag 4',
    overview: 'Next-gen heroine character sculpt featuring hyper-detailed facial bone structure, delicate skin pore detailing, and realistic multi-layered hairstyle groom. Built with optimized quad topology and custom strand hair cards for authentic physics motion.',
    deliverables: [
      '4 high-resolution character sculpt and grooming passes',
      'Hand-placed hair card layers with root-to-tip opacity and specular flow maps',
      'Multi-channel Subsurface Scattering (SSS) skin shader setups',
      'Natural facial asymmetry and lifelike corneal eye reflections',
      'Clean quad facial topology ready for 52 blendshape facial capture'
    ],
    tools: ['ZBrush', 'Blender Particle Hair / Curves', 'Substance 3D Painter', 'Photoshop'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Hair Cards', value: '8.5k Tris' },
      { label: 'Skin Shader', value: 'Multi-layer SSS' },
      { label: 'Facial Anatomy', value: 'Micro-Pore Res' },
      { label: 'Readiness', value: 'Rig & Mocap Ready' }
    ],
    clientOrContext: 'Next-Gen Game Protagonist Development Pipeline',
    aestheticTone: 'Photorealistic Cinematic & Modern Action',
    coverFileName: 'Vendetta.png'
  },
  {
    folder: 'shards of destiny',
    sequence: 9,
    id: 'shards-of-destiny-armored-hero',
    title: 'Shards of Destiny — RPG Armored Champion & Creature Sculpts',
    category: 'Game Characters & Digital Sculpt',
    badge: 'Action RPG Fantasy Character',
    specs: '17 Sculpt Orthographic Passes, Topology Turnarounds & In-Game Renders',
    polyCount: '52,000 Triangles | Clean Quad Retopology',
    textureSets: '4x 4K PBR Texture Sets (Ornate Gold, Engraved Iron, Leather Straps)',
    engineReady: 'Unreal Engine 5 & Unity HDRP',
    overview: 'Comprehensive character asset suite for Shards of Destiny. Features complete front, side, and rear orthographic turnaround sheets, armored plating, horned pauldrons, sculpted chainmail, and heroic proportions designed for fantasy combat gameplay.',
    deliverables: [
      '17 orthographic and beauty render sheets showing full 360-degree development',
      'Clean low-poly in-game mesh with flawless edge flow across joint deformation zones',
      'High-poly ZBrush source files with hand-carved ornamental filigree details',
      'Engine-ready PBR texture atlases with custom roughness wear and battle weathering',
      'Production-ready weapon and shield accessory models'
    ],
    tools: ['ZBrush', 'Maya', 'Substance 3D Painter', 'Unreal Engine 5'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Media Breakdown', value: '17 Passes' },
      { label: 'Armor Detailing', value: 'Hand-Carved Filigree' },
      { label: 'Views', value: 'Full Orthographics' },
      { label: 'Engine Integration', value: 'UE5 HDRP' }
    ],
    clientOrContext: 'Commercial Fantasy Action RPG Production',
    aestheticTone: 'High-Fantasy Mythological Heroism',
    coverFileName: 'Front.png'
  },
  {
    folder: 'FPS Shooter game',
    sequence: 10,
    id: 'fps-shooter-game-assets',
    title: 'FPS Shooter Game — Sci-Fi Combat Heroes, Aliens & Armor Systems',
    category: 'Hard Surface & Game Characters',
    badge: 'Sci-Fi FPS Asset Suite',
    specs: '11 Character & Creature Renders | Alien Beasts, Foxes & Modular Armor',
    polyCount: '38,000 Triangles per Rigged Hero',
    textureSets: '3x 4K PBR Tactical Armor, Ballistic Composites & Bioluminescent Alien Shaders',
    engineReady: 'Unreal Engine 5 & Unity URP',
    overview: 'Futuristic shooter character lineup featuring modular exoskeleton armor sets, ballistic combat helmet, cybernetic alien enemies, and stylized animal companion assets. Engineered for high-speed first-person weapon perspective and third-person multiplayer visibility.',
    deliverables: [
      '11 detailed render sheets covering heroes, tactical armor suits, and extraterrestrial foes',
      'Modular armor pieces enabling in-game loadout customization',
      'Alien creature sculpt with chitinous carapace and organic membrane texturing',
      'High-poly hard-surface normal bakes captured with zero bevel warping',
      'Compact texture packing for maximum mobile and console framerates'
    ],
    tools: ['Blender', 'ZBrush', 'Substance 3D Painter', 'Unreal Engine'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Asset Count', value: '11 Characters/Armor' },
      { label: 'Type', value: 'Sci-Fi Hard Surface' },
      { label: 'Multiplayer', value: 'Modular Sockets' },
      { label: 'Texture Packing', value: 'Optimized Atlases' }
    ],
    clientOrContext: 'Competitive Sci-Fi First-Person Shooter Production',
    aestheticTone: 'Futuristic Military & Cyber-Sci-Fi',
    coverFileName: 'hero .png'
  },
  {
    folder: 'Building',
    sequence: 11,
    id: 'building-architectural-complex',
    title: 'Modern Commercial Architectural Complex & Facade Simulation',
    category: 'Architectural Visualization & Exterior 3D',
    badge: 'Architectural Exterior Viz',
    specs: '13 Architectural Perspectives | Multi-Level Structure | Daylight Simulation Video',
    polyCount: 'Optimized Polygonal Architectural BIM Mesh',
    textureSets: '4K Architectural PBR Concrete, Tinted Glass, Cladding & Landscape Foliage',
    engineReady: 'Blender Cycles, V-Ray & Unreal Engine ArchViz',
    overview: 'Multi-story contemporary commercial complex with modern glass curtain walls, cantilevered overhangs, landscaped access plazas, and dynamic daylight angle simulations. Provides developers and investors with photorealistic spatial planning and material previews.',
    deliverables: [
      'Daylight orbital video walkthrough showing sunlight transitions across facade',
      '13 high-resolution exterior perspective and elevation render passes',
      'Accurate structural proportion modeling based on architectural blueprints',
      'PBR physical architectural materials for fair-faced concrete, glass, and timber louvers',
      'Landscaped ground plane with procedural vegetation and scale figures'
    ],
    tools: ['Blender Cycles', '3ds Max', 'V-Ray / Corona', 'Photoshop'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Visuals', value: '13 Photos + 1 Video' },
      { label: 'Lighting Study', value: 'Solar Daylight' },
      { label: 'Structure', value: 'Multi-Story Complex' },
      { label: 'Purpose', value: 'Commercial ArchViz' }
    ],
    clientOrContext: 'Commercial Architectural Planning & Real Estate Marketing',
    aestheticTone: 'Contemporary Minimalist Architecture',
    coverFileName: '1.png'
  },
  {
    folder: 'Office',
    sequence: 12,
    id: 'office-interior-architecture',
    title: 'Corporate Executive Office — Interior Architecture & Furniture Design',
    category: 'Architectural Visualization & Interior 3D',
    badge: 'Corporate Interior Architecture',
    specs: '23 Photorealistic Interior Angles, Custom Desks, Glass Partitions & Video Tour',
    polyCount: 'Sub-D Hard-Surface & Architectural Cad-Clean Meshes',
    textureSets: '4K Warm Walnut, Acoustic Slats, Tempered Glass & Brushed Brass',
    engineReady: 'Blender Cycles Photoreal Engine',
    overview: 'Sophisticated modern corporate headquarters interior with acoustic vertical slat walls, ergonomic designer executive desks, floor-to-ceiling glass conference partitions, and warm ambient architectural lighting schemes.',
    deliverables: [
      'Interior walkthrough video showcasing spatial layout and illumination atmosphere',
      '23 comprehensive camera angles highlighting materials, textures, and bespoke furniture',
      'Modular executive desk suite with cable management recesses and chamfered edges',
      'Custom wall paneling systems with integrated LED perimeter wash lighting',
      'Full lighting setup with realistic photometric IES light profiles'
    ],
    tools: ['Blender Cycles', 'Substance Painter', 'Photoshop'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Gallery Size', value: '23 Renders + Video' },
      { label: 'Furniture Pieces', value: 'Custom Desks/Chairs' },
      { label: 'Lighting', value: 'Photometric IES' },
      { label: 'Style', value: 'Executive Contemporary' }
    ],
    clientOrContext: 'Corporate Headquarters Workspace Visualization',
    aestheticTone: 'Warm Sophistication & Executive Precision',
    coverFileName: 'office.png'
  },
  {
    folder: 'Row Ambassy',
    sequence: 13,
    id: 'row-embassy-furniture-suite',
    title: 'Row Embassy — Luxury Hospitality & Lounge Furniture 3D Collection',
    category: '3D Product Modeling & Rendering',
    badge: 'Luxury Furniture & Hospitality',
    specs: '18 High-Poly Product Renders | Bespoke Reception Counters, Sofas & Chairs',
    polyCount: 'Subdivision Surface Level 2 (Curvature Continuous)',
    textureSets: '4K Aniline Leather, Bouclé Fabric, Polished Brass & Honed Marble',
    engineReady: 'KeyShot & Blender Cycles Studio Staging',
    overview: 'Premium bespoke furniture collection designed for high-end diplomatic lounges and boutique hotel hospitality. Features organically curved reception counters, plush tufted hospitality sofas, modernist minimalist wander chairs, and polished brass and timber accents.',
    deliverables: [
      '18 ultra-high-resolution studio commercial product renders',
      'Precision cloth simulation for natural cushion wrinkling and drape realism',
      'Curved reception counter CAD models with interior shelving and lighting reveals',
      'Multiple fabric and leather colorway variations for client catalog presentations',
      'Manufacturing-ready polygonal meshes with clean non-distorted UV unwrap'
    ],
    tools: ['Blender', 'Marvelous Designer', 'KeyShot', 'Substance Painter'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Products Modeled', value: '18 Studio Renders' },
      { label: 'Cloth Realism', value: 'Marvelous Designer' },
      { label: 'Materials', value: 'Leather & Brass' },
      { label: 'Application', value: 'Hospitality Staging' }
    ],
    clientOrContext: 'Diplomatic Embassy & Luxury Hospitality Interior Furnishings',
    aestheticTone: 'Quiet Luxury & Timeless Craftsmanship',
    coverFileName: 'Row Ambassy.png'
  },
  {
    folder: 'Sword Fight',
    sequence: 14,
    id: 'sword-fight-arenas',
    title: 'Sword Fight Combat Arenas — Colosseum, Medieval, Desert & Viking',
    category: 'Game Environments & Level Art',
    badge: 'Historical Combat Arenas',
    specs: '6 Historic Combat Arena Environments | Colosseum, Desert Dunes, Viking Outpost',
    polyCount: 'Modular Arena Environment Kits (Optimized Draw-Calls)',
    textureSets: '4K Weathered Sandstone, Chiseled Marble, Packed Mud & Aged Timber',
    engineReady: 'Unreal Engine 5 & Unity HDRP',
    overview: 'Atmospheric, historically inspired 3D melee combat arenas spanning the Roman Colosseum amphitheater, sun-bleached desert ruins, fortified medieval courtyards, and rugged Viking coastal encampments. Features authentic arena geometry, sand pits, and iron gates.',
    deliverables: [
      '6 complete battle arena environment perspective sheets and weapon prop studies',
      'Roman Colosseum arches, tiered spectator seating, and underground gladiator cages',
      'Viking wooden barricades, carved totems, and coastal mountain backdrops',
      'High-poly decorative sword prop assets with engraved hilts and chipped blades',
      'Dynamic collision meshes engineered for responsive third-person melee physics'
    ],
    tools: ['Unreal Engine', 'Blender', 'Substance 3D Designer', 'Quixel Megascans'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Historical Arenas', value: '4 Battlegrounds' },
      { label: 'Combat Props', value: 'Engraved Swords' },
      { label: 'Textures', value: 'Weathered Stone' },
      { label: 'Game Ready', value: 'Full Collisions' }
    ],
    clientOrContext: 'Slash of Royal / Medieval Melee Action Game Title',
    aestheticTone: 'Gritty Historical Realism & Epic Warfare',
    coverFileName: 'colosseum_05.jpg'
  },
  {
    folder: 'exercise',
    sequence: 15,
    id: 'exercise-biomechanical-kinetics',
    title: 'Medical & Biomechanical Physical Therapy 3D Kinetic Simulations',
    category: 'Medical & Scientific 3D Animation',
    badge: 'Kinetic Medical 3D & Animation',
    specs: '16 Biomechanical Exercise Motion Videos | Anatomical Flexion & Machine Training',
    polyCount: 'High-Fidelity Musculoskeletal Rig & Cable Equipment Model',
    textureSets: 'PBR Matte Anatomical Clay Shaders & Powder-Coated Gym Iron',
    engineReady: 'Blender Kinetic Rig & After Effects Compositing',
    overview: 'Extensive library of 16 physiologically precise 3D kinetic animations demonstrating neck, spine, and rotator cuff physical therapy exercises, including anterior scalene stretches, scapula retraction, and cable machine tricep mechanics. Created to visually educate patients and trainers on accurate movement kinematics.',
    deliverables: [
      '16 fluid 3D medical kinetic animation video clips covering distinct stretches',
      'Anatomically accurate joint pivot centers ensuring correct degrees of freedom',
      'Cable resistance pulley machine model with dynamic cable tension physics',
      'Color-coded postural indicators highlighting targeted muscle groups',
      'Standardized pacing and multi-angle camera perspectives for clinical training'
    ],
    tools: ['Blender Rigging & Animation', 'Anatomical Skeletal Rigs', 'After Effects'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Video Animations', value: '16 Complete Clips' },
      { label: 'Field', value: 'Physical Therapy' },
      { label: 'Kinematics', value: 'Clinical Accuracy' },
      { label: 'Rig Type', value: 'Biomechanic FK/IK' }
    ],
    clientOrContext: 'Healthcare Platform & Rehabilitation Kinetic Training',
    aestheticTone: 'Clinical Precision, Modern Minimalist Medical',
    coverFileName: 'Anterior Scalene Stretch Exercise0001-0450.mp4'
  },
  {
    folder: 'Wallpaper',
    sequence: 16,
    id: 'wallpaper-motion-loops',
    title: '3D Motion Design Loops — Sci-Fi Hard-Surface, Omega Watch & Cybernetic Walls',
    category: '3D Motion Design & Dynamic Renders',
    badge: 'Dynamic Motion & Sci-Fi Loops',
    specs: '23 Dynamic Motion Videos | Iron Man HUD, Omega Chronograph, Sci-Fi Conduit Tunnels',
    polyCount: 'Complex Procedural & Hard-Surface Geometry',
    textureSets: 'Emissive Multi-Channel Glow, Brushed Titanium, Carbon Fiber & Glass Dispersion',
    engineReady: 'Blender Cycles / Eevee & After Effects',
    overview: 'Captivating suite of 23 seamless 3D motion design loops and animated wallpapers, featuring photorealistic Omega luxury watch mechanics, Iron Man HUD elements, neon sci-fi conduit tunnels, festive holiday compositions, and futuristic automotive displays.',
    deliverables: [
      '23 seamless looping animation videos engineered for ultra-smooth playback',
      '2 high-resolution 4K wallpaper render beauty passes',
      'Photorealistic luxury timepiece chronograph movement with gear meshing',
      'Complex sci-fi conduit tunnels with animated particle light streams',
      'High-contrast visual pacing optimized for desktop wallpaper and live stream backgrounds'
    ],
    tools: ['Blender Cycles / Eevee', 'After Effects', 'Substance 3D Painter'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Video Motion Loops', value: '23 Animations' },
      { label: 'Featured Loops', value: 'Omega Watch & Iron Man' },
      { label: 'Style', value: 'Sci-Fi / Hard-Surface' },
      { label: 'Loop Seamlessness', value: '100% Seamless' }
    ],
    clientOrContext: 'Commercial Motion Graphics & Animated Wallpaper Productions',
    aestheticTone: 'Luminous Sci-Fi, Dynamic Motion & High Contrast',
    coverFileName: 'AD Iron Man.mp4'
  },
  {
    folder: 'Other Projects',
    sequence: 17,
    id: 'other-specialized-3d-projects',
    title: 'Specialty 3D Showcase — Robotics, Drone Systems & Fluid Dynamics',
    category: 'Specialized 3D & R&D Simulations',
    badge: 'Robotics, Drones & VFX Labs',
    specs: '29 Renders + 12 VFX Simulations | QSS Robotics, Drones, Liquid Gold & Steampunk',
    polyCount: 'Varied Multi-Pipeline Asset Suite',
    textureSets: 'Substance Painter PBR, Viscous Liquid Shaders & Weathered Steampunk Patina',
    engineReady: 'Unreal Engine 5, Blender Mantaflow & Unity',
    overview: 'Diverse, cutting-edge technical 3D portfolio encompassing industrial QSS robotics, aerodynamic surveillance drones, viscous liquid gold simulations, steampunk mechanical creatures, organic creature masks, and real-time level sequences.',
    deliverables: [
      '12 dynamic video clips showcasing fluid dynamics, drone flight, and character animations',
      '29 high-definition concept renders, orthographic views, and prop studies',
      'QSS industrial robotic arm assembly with hydraulic hoses and joint limits',
      'Viscous fluid surface tension simulations rendered with optical refraction',
      'Steampunk mechanical character sculpt with exposed brass cogs and pressure gauges'
    ],
    tools: ['Blender Mantaflow / Flip Fluids', 'Substance Painter', 'Unreal Engine 5', 'ZBrush'],
    wireframeAvailable: true,
    keyHighlights: [
      { label: 'Total Media', value: '41 Assets (29 img + 12 vid)' },
      { label: 'Simulations', value: 'Fluid Dynamics & Drone' },
      { label: 'Robotics', value: 'QSS Industrial' },
      { label: 'Range', value: 'Characters to VFX' }
    ],
    clientOrContext: 'Specialized Technical 3D R&D, Simulation & Prop Asset Pipeline',
    aestheticTone: 'Eclectic Innovation & Multi-Disciplinary Mastery',
    coverFileName: 'QSS Robotics.JPG'
  }
];

function generateTypeScript() {
  const result = PROJECT_CONFIGS.map(cfg => {
    const dirPath = path.join(baseDir, cfg.folder);
    const allFiles = [];
    
    function walk(p) {
      fs.readdirSync(p).forEach(f => {
        const fp = path.join(p, f);
        if (fs.statSync(fp).isDirectory()) walk(fp);
        else allFiles.push(path.relative(dirPath, fp).replace(/\\/g, '/'));
      });
    }
    walk(dirPath);

    const mediaFiles = allFiles
      .filter(f => !f.toLowerCase().endsWith('.txt'))
      .filter(f => !f.includes('Forever - Anno Domini Beats'))
      .filter(f => !f.includes('Tutorial_(2).avi'))
      .filter(f => !f.includes('.bak') && !f.includes('__temp_opt'))
      .sort((a, b) => {
        // Put coverFileName first if matches
        if (cfg.coverFileName) {
          if (path.basename(a) === cfg.coverFileName) return -1;
          if (path.basename(b) === cfg.coverFileName) return 1;
        }
        return a.localeCompare(b);
      });

    const mediaItems = mediaFiles.map((f, idx) => {
      const ext = path.extname(f).toLowerCase().replace('.', '');
      const isVideo = ['mp4', 'mkv', 'avi', 'mov', 'webm'].includes(ext);
      const fileName = path.basename(f);
      const cleanName = fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      const encodedUrl = `/projects-media/${encodeURIComponent(cfg.folder)}/${f.split('/').map(encodeURIComponent).join('/')}`;

      return {
        id: `${cfg.id}-media-${idx + 1}`,
        name: cleanName,
        url: encodedUrl,
        type: isVideo ? 'video' : 'image',
        extension: ext,
        caption: `${cfg.title} — ${cleanName}`
      };
    });

    const imageCount = mediaItems.filter(m => m.type === 'image').length;
    const videoCount = mediaItems.filter(m => m.type === 'video').length;
    
    // Choose coverMedia: preference to coverFileName or first image or first video
    let cover = mediaItems.find(m => path.basename(m.url) === encodeURIComponent(cfg.coverFileName));
    if (!cover) cover = mediaItems.find(m => m.type === 'image') || mediaItems[0];

    return {
      id: cfg.id,
      sequenceNumber: cfg.sequence,
      folderName: cfg.folder,
      title: cfg.title,
      category: cfg.category,
      badge: cfg.badge,
      specs: cfg.specs,
      polyCount: cfg.polyCount,
      textureSets: cfg.textureSets,
      engineReady: cfg.engineReady,
      overview: cfg.overview,
      deliverables: cfg.deliverables,
      tools: cfg.tools,
      wireframeAvailable: cfg.wireframeAvailable ?? true,
      hasInteractive3D: cfg.sequence === 3,
      keyHighlights: cfg.keyHighlights,
      clientOrContext: cfg.clientOrContext,
      aestheticTone: cfg.aestheticTone,
      clientLink: cfg.clientLink || null,
      clientLinkTitle: cfg.clientLinkTitle || null,
      clientLinkType: cfg.clientLinkType || null,
      mediaCount: mediaItems.length,
      imageCount,
      videoCount,
      coverMedia: cover,
      media: mediaItems
    };
  });

  const tsContent = `import type { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = ${JSON.stringify(result, null, 2)};
`;

  const outputPath = path.resolve(__dirname, '..', 'src', 'data', 'projects.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`Successfully generated projects.ts with ${result.length} projects!`);
}

generateTypeScript();

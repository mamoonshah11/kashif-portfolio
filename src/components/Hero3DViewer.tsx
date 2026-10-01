import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, RotateCw } from 'lucide-react';

export const Hero3DViewer = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [shadingMode, setShadingMode] = useState<'clay' | 'sky' | 'chrome'>('sky');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [fps, setFps] = useState<number>(60);

  // References to three objects for runtime updates
  const sceneRef = useRef<THREE.Scene | null>(null);
  const materialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const wireframeMeshesRef = useRef<THREE.Mesh[]>([]);
  const groupRef = useRef<THREE.Group | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 460;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.4);
    fillLight.position.set(-4, 2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x0284c7, 3.5);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    const bottomGlow = new THREE.DirectionalLight(0x38bdf8, 1.2);
    bottomGlow.position.set(0, -3, 2);
    scene.add(bottomGlow);

    // Create 3D Sculpt Group (Character / Sci-Fi Hero Bust)
    const characterGroup = new THREE.Group();
    groupRef.current = characterGroup;

    materialsRef.current = [];
    wireframeMeshesRef.current = [];

    // Base materials factory
    const getMaterials = () => {
      let mainMat: THREE.MeshStandardMaterial;
      let accentMat: THREE.MeshStandardMaterial;
      let visorMat: THREE.MeshStandardMaterial;

      if (shadingMode === 'clay') {
        // High-end digital sculpting clay (ZBrush gray clay)
        mainMat = new THREE.MeshStandardMaterial({
          color: 0xcccccc,
          roughness: 0.45,
          metalness: 0.05,
          flatShading: false
        });
        accentMat = new THREE.MeshStandardMaterial({
          color: 0xb0b0b0,
          roughness: 0.4,
          metalness: 0.1
        });
        visorMat = new THREE.MeshStandardMaterial({
          color: 0x0284c7,
          roughness: 0.2,
          metalness: 0.8
        });
      } else if (shadingMode === 'chrome') {
        // High-end polished chrome & PBR steel
        mainMat = new THREE.MeshStandardMaterial({
          color: 0xf1f5f9,
          roughness: 0.15,
          metalness: 0.9
        });
        accentMat = new THREE.MeshStandardMaterial({
          color: 0x0ea5e9,
          roughness: 0.25,
          metalness: 0.85
        });
        visorMat = new THREE.MeshStandardMaterial({
          color: 0x0369a1,
          roughness: 0.05,
          metalness: 0.95
        });
      } else {
        // Luminous Sky Blue (Signature studio aesthetic)
        mainMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.2,
          metalness: 0.15
        });
        accentMat = new THREE.MeshStandardMaterial({
          color: 0x0ea5e9,
          roughness: 0.25,
          metalness: 0.65
        });
        visorMat = new THREE.MeshStandardMaterial({
          color: 0x0284c7,
          roughness: 0.1,
          metalness: 0.9,
          emissive: 0x0284c7,
          emissiveIntensity: 0.2
        });
      }

      return { mainMat, accentMat, visorMat };
    };

    const mats = getMaterials();
    materialsRef.current.push(mats.mainMat, mats.accentMat, mats.visorMat);

    // 1. Head Cranium (Sculpted Icosahedron / Rounded Form)
    const headGeo = new THREE.IcosahedronGeometry(0.85, 3);
    const headMesh = new THREE.Mesh(headGeo, mats.mainMat);
    headMesh.scale.set(0.9, 1.15, 1.05);
    characterGroup.add(headMesh);

    // 2. Visor / Optical Sensor (Sleek Sci-Fi curvature)
    const visorGeo = new THREE.CylinderGeometry(0.55, 0.65, 0.35, 32, 1, false, 0, Math.PI);
    const visorMesh = new THREE.Mesh(visorGeo, mats.visorMat);
    visorMesh.position.set(0, 0.15, 0.58);
    visorMesh.rotation.x = Math.PI / 12;
    characterGroup.add(visorMesh);

    // 3. Cheek / Jaw Armor Plates
    const jawGeo = new THREE.BoxGeometry(0.9, 0.45, 0.7);
    const jawMesh = new THREE.Mesh(jawGeo, mats.accentMat);
    jawMesh.position.set(0, -0.65, 0.25);
    jawMesh.rotation.x = -Math.PI / 16;
    characterGroup.add(jawMesh);

    // 4. Neck & Collar Support
    const neckGeo = new THREE.CylinderGeometry(0.4, 0.55, 0.65, 24);
    const neckMesh = new THREE.Mesh(neckGeo, mats.accentMat);
    neckMesh.position.set(0, -0.9, 0);
    characterGroup.add(neckMesh);

    // 5. Hero Shoulder Pauldrons / Torso Core
    const shoulderGeo = new THREE.BoxGeometry(2.4, 0.45, 1.1);
    const shoulderMesh = new THREE.Mesh(shoulderGeo, mats.mainMat);
    shoulderMesh.position.set(0, -1.3, 0);
    characterGroup.add(shoulderMesh);

    const chestCoreGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.1, 16);
    const chestCoreMesh = new THREE.Mesh(chestCoreGeo, mats.visorMat);
    chestCoreMesh.position.set(0, -1.25, 0.58);
    chestCoreMesh.rotation.x = Math.PI / 2;
    characterGroup.add(chestCoreMesh);

    // 6. Orbital Studio Ring (Floating Gyroscope / Topology Guides)
    const ringGeo = new THREE.TorusGeometry(1.65, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.5;
    characterGroup.add(ringMesh);

    const ringGeo2 = new THREE.TorusGeometry(1.9, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.35 });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 3;
    characterGroup.add(ringMesh2);

    // 7. Wireframe Overlay Group
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: wireframe ? 0.85 : 0
    });

    [headMesh, jawMesh, shoulderMesh, visorMesh].forEach((mesh) => {
      const wire = new THREE.Mesh(mesh.geometry, wireMat);
      wire.position.copy(mesh.position);
      wire.rotation.copy(mesh.rotation);
      wire.scale.copy(mesh.scale);
      wire.scale.multiplyScalar(1.002);
      characterGroup.add(wire);
      wireframeMeshesRef.current.push(wire);
    });

    // Subtly position group
    characterGroup.position.set(0, 0.25, 0);
    scene.add(characterGroup);

    // Mouse Interaction for dragging / orbiting
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !groupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      groupRef.current.rotation.y += deltaX * 0.008;
      groupRef.current.rotation.x += deltaY * 0.008;
      // Clamp vertical tilt
      groupRef.current.rotation.x = Math.max(-0.6, Math.min(0.6, groupRef.current.rotation.x));

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch support for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !groupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.current.y;

      groupRef.current.rotation.y += deltaX * 0.008;
      groupRef.current.rotation.x += deltaY * 0.008;
      groupRef.current.rotation.x = Math.max(-0.6, Math.min(0.6, groupRef.current.rotation.x));

      previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domEl.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop & FPS calculation
    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = performance.now();

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // FPS tracking
      frameCount++;
      if (time - fpsTimer >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - fpsTimer)));
        frameCount = 0;
        fpsTimer = time;
      }

      const delta = (time - lastTime) * 0.001;
      lastTime = time;

      if (groupRef.current && autoRotate && !isDraggingRef.current) {
        groupRef.current.rotation.y += delta * 0.45;
        ringMesh.rotation.z += delta * 0.3;
        ringMesh2.rotation.z -= delta * 0.25;
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      domEl.removeEventListener('mousedown', onMouseDown);
      domEl.removeEventListener('touchstart', onTouchStart);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [shadingMode]);

  // Update wireframe state dynamically
  useEffect(() => {
    wireframeMeshesRef.current.forEach((mesh) => {
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = wireframe ? 0.9 : 0;
    });
  }, [wireframe]);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] flex items-center justify-center">
      {/* Decorative luminous ice-blue background glow */}
      <div className="absolute inset-0 bg-radial from-sky-100/70 via-sky-50/30 to-transparent rounded-3xl -z-10 blur-2xl" />

      {/* Subtle coordinate grid disc */}
      <div className="absolute bottom-6 w-72 h-16 rounded-[100%] bg-sky-100/50 blur-md -z-10" />

      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
        title="Click and drag to rotate the 3D model"
      />

      {/* Floating Tactical Overlay Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        {/* Real-time telemetry badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xs pointer-events-auto">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-700">
            {fps} FPS &bull; WebGL Real-Time
          </span>
        </div>

        {/* Rotation toggle */}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-xl border backdrop-blur-md transition-all pointer-events-auto shadow-xs ${
            autoRotate
              ? 'bg-sky-50 text-sky-600 border-sky-200'
              : 'bg-white/90 text-slate-500 border-slate-200 hover:text-slate-900'
          }`}
          title={autoRotate ? 'Pause turntable rotation' : 'Resume turntable rotation'}
        >
          <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin-slow' : ''}`} />
        </button>
      </div>

      {/* Interactive Bottom Control Bar */}
      <div className="absolute bottom-4 inset-x-4 flex flex-wrap items-center justify-center gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md shadow-sky-100/50 pointer-events-auto">
          {/* Shading mode selectors */}
          <button
            onClick={() => setShadingMode('sky')}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              shadingMode === 'sky'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Studio Sky
          </button>
          <button
            onClick={() => setShadingMode('clay')}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              shadingMode === 'clay'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Clay Sculpt
          </button>
          <button
            onClick={() => setShadingMode('chrome')}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
              shadingMode === 'chrome'
                ? 'bg-sky-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            PBR Chrome
          </button>

          <div className="w-px h-4 bg-slate-200 mx-0.5" />

          {/* Wireframe Toggle */}
          <button
            onClick={() => setWireframe(!wireframe)}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg flex items-center gap-1 transition-all ${
              wireframe
                ? 'bg-sky-100 text-sky-700 font-semibold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Wireframe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

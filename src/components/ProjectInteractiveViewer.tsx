import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Layers, Sun } from 'lucide-react';

interface ProjectInteractiveViewerProps {
  modelType?: 'warrior' | 'android' | 'mascot' | 'watch' | 'statue' | 'web3d';
  polyCountLabel?: string;
}

export const ProjectInteractiveViewer = ({
  modelType = 'web3d',
  polyCountLabel = '12,000 Tris'
}: ProjectInteractiveViewerProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [lightingPreset, setLightingPreset] = useState<'studio' | 'skyrim' | 'dramatic'>('skyrim');
  const [shadingMode, setShadingMode] = useState<'pbr' | 'clay' | 'normal'>('pbr');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [fps, setFps] = useState<number>(60);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const lightsRef = useRef<{
    ambient: THREE.AmbientLight;
    key: THREE.DirectionalLight;
    fill: THREE.DirectionalLight;
    rim: THREE.DirectionalLight;
  } | null>(null);

  const isDraggingRef = useRef<boolean>(false);
  const previousMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const zoomLevelRef = useRef<number>(4.8);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, zoomLevelRef.current);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Setup Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 2.5);
    key.position.set(5, 6, 4);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xe0f2fe, 1.3);
    fill.position.set(-5, 2, 3);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0x0284c7, 3.8);
    rim.position.set(0, 5, -5);
    scene.add(rim);

    lightsRef.current = { ambient, key, fill, rim };

    // Build Model Geometry based on modelType
    const modelGroup = new THREE.Group();
    groupRef.current = modelGroup;

    // Build custom 3D asset representation
    buildModelGeometry(modelGroup, modelType, shadingMode, wireframe);

    scene.add(modelGroup);

    // Mouse & Touch Orbit
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !groupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      groupRef.current.rotation.y += deltaX * 0.009;
      groupRef.current.rotation.x += deltaY * 0.009;
      groupRef.current.rotation.x = Math.max(-0.7, Math.min(0.7, groupRef.current.rotation.x));

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomLevelRef.current += e.deltaY * 0.003;
      zoomLevelRef.current = Math.max(2.8, Math.min(8.0, zoomLevelRef.current));
      if (cameraRef.current) {
        cameraRef.current.position.z = zoomLevelRef.current;
      }
    };

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

      groupRef.current.rotation.y += deltaX * 0.009;
      groupRef.current.rotation.x += deltaY * 0.009;
      groupRef.current.rotation.x = Math.max(-0.7, Math.min(0.7, groupRef.current.rotation.x));

      previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domEl.addEventListener('wheel', onWheel, { passive: false });
    domEl.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = performance.now();

    const animate = (time: number) => {
      animId = requestAnimationFrame(animate);

      frameCount++;
      if (time - fpsTimer >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - fpsTimer)));
        frameCount = 0;
        fpsTimer = time;
      }

      const delta = (time - lastTime) * 0.001;
      lastTime = time;

      if (groupRef.current && autoRotate && !isDraggingRef.current) {
        groupRef.current.rotation.y += delta * 0.5;
      }

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      cameraRef.current.aspect = newW / newH;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      domEl.removeEventListener('mousedown', onMouseDown);
      domEl.removeEventListener('wheel', onWheel);
      domEl.removeEventListener('touchstart', onTouchStart);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelType, shadingMode, wireframe]);

  // Handle Lighting Preset Change
  useEffect(() => {
    if (!lightsRef.current) return;
    const { ambient, key, fill, rim } = lightsRef.current;

    if (lightingPreset === 'studio') {
      ambient.intensity = 1.6;
      key.intensity = 2.2;
      key.color.setHex(0xffffff);
      fill.intensity = 1.5;
      rim.intensity = 1.0;
      rim.color.setHex(0xffffff);
    } else if (lightingPreset === 'skyrim') {
      ambient.intensity = 1.2;
      key.intensity = 2.4;
      key.color.setHex(0xffffff);
      fill.intensity = 1.2;
      fill.color.setHex(0xe0f2fe);
      rim.intensity = 4.0;
      rim.color.setHex(0x0284c7);
    } else {
      // dramatic
      ambient.intensity = 0.5;
      key.intensity = 3.5;
      key.color.setHex(0xfff7ed);
      fill.intensity = 0.4;
      rim.intensity = 4.8;
      rim.color.setHex(0x0ea5e9);
    }
  }, [lightingPreset]);

  const resetView = () => {
    if (groupRef.current) {
      groupRef.current.rotation.set(0, 0, 0);
    }
    if (cameraRef.current) {
      zoomLevelRef.current = 4.8;
      cameraRef.current.position.set(0, 0.2, 4.8);
    }
  };

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] bg-slate-950/5 rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial from-sky-100/60 via-slate-50/40 to-white/90 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none" />

      {/* Top Telemetry & Header Controls */}
      <div className="relative z-10 p-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs pointer-events-auto">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span className="text-xs font-mono font-semibold text-slate-800">
            {polyCountLabel}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-mono text-slate-600">
            {fps} FPS
          </span>
        </div>

        {/* Action Utilities */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={resetView}
            className="p-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-all shadow-xs"
            title="Reset Camera View"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded-xl border backdrop-blur-md text-xs font-medium transition-all shadow-xs ${
              autoRotate
                ? 'bg-sky-50 text-sky-700 border-sky-200'
                : 'bg-white/90 text-slate-600 border-slate-200 hover:text-slate-900'
            }`}
          >
            {autoRotate ? 'Turntable: On' : 'Turntable: Paused'}
          </button>
        </div>
      </div>

      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
        title="Click & drag to rotate, mouse wheel to zoom"
      />

      {/* Bottom Shading & Lighting HUD */}
      <div className="relative z-10 p-4 flex flex-wrap items-center justify-center gap-2 pointer-events-none">
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-sky-100/60 pointer-events-auto">
          {/* Shading Selectors */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShadingMode('pbr')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                shadingMode === 'pbr'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              PBR Material
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
              onClick={() => setShadingMode('normal')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                shadingMode === 'normal'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Normal Space
            </button>
          </div>

          <div className="w-px h-4 bg-slate-200 mx-1" />

          {/* Wireframe Button */}
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

          <div className="w-px h-4 bg-slate-200 mx-1" />

          {/* Lighting Mode */}
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Sun className="w-3.5 h-3.5 ml-1 text-sky-500" />
            <select
              value={lightingPreset}
              onChange={(e) => setLightingPreset(e.target.value as any)}
              className="bg-transparent text-xs font-medium text-slate-700 focus:outline-none cursor-pointer pr-1"
            >
              <option value="skyrim">Sky Blue Rim</option>
              <option value="studio">Studio Neutral</option>
              <option value="dramatic">Dramatic Key</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper: build compound 3D meshes representing characters & hard surface models
function buildModelGeometry(
  group: THREE.Group,
  type: string,
  mode: 'pbr' | 'clay' | 'normal',
  wireframe: boolean
) {
  // Clear any existing children
  while (group.children.length > 0) {
    group.remove(group.children[0]);
  }

  const getMat = (baseColor: number, roughness = 0.3, metalness = 0.5) => {
    if (wireframe) {
      return new THREE.MeshBasicMaterial({
        color: 0x0284c7,
        wireframe: true
      });
    }

    if (mode === 'clay') {
      return new THREE.MeshStandardMaterial({
        color: 0xd1d5db,
        roughness: 0.5,
        metalness: 0.05
      });
    }

    if (mode === 'normal') {
      return new THREE.MeshNormalMaterial({
        wireframe: false
      });
    }

    // Default PBR
    return new THREE.MeshStandardMaterial({
      color: baseColor,
      roughness,
      metalness
    });
  };

  if (type === 'watch') {
    // Luxury Timepiece geometry
    const caseGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.3, 48);
    const caseMat = getMat(0xe2e8f0, 0.15, 0.95);
    const caseMesh = new THREE.Mesh(caseGeo, caseMat);
    caseMesh.rotation.x = Math.PI / 2;
    group.add(caseMesh);

    // Watch Dial
    const dialGeo = new THREE.CylinderGeometry(1.05, 1.05, 0.05, 48);
    const dialMat = getMat(0x0f172a, 0.2, 0.4);
    const dialMesh = new THREE.Mesh(dialGeo, dialMat);
    dialMesh.position.z = 0.16;
    dialMesh.rotation.x = Math.PI / 2;
    group.add(dialMesh);

    // Watch Bezel Accent
    const bezelGeo = new THREE.TorusGeometry(1.15, 0.08, 16, 64);
    const bezelMat = getMat(0x0284c7, 0.1, 0.8);
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    group.add(bezelMesh);

    // Strap Brackets
    const strapTop = new THREE.BoxGeometry(0.8, 1.1, 0.2);
    const strapMat = getMat(0x1e293b, 0.6, 0.1);
    const strapTopMesh = new THREE.Mesh(strapTop, strapMat);
    strapTopMesh.position.set(0, 1.3, -0.05);
    group.add(strapTopMesh);

    const strapBottomMesh = new THREE.Mesh(strapTop, strapMat);
    strapBottomMesh.position.set(0, -1.3, -0.05);
    group.add(strapBottomMesh);

    group.position.y = 0;
  } else if (type === 'statue') {
    // Valkyrie / Classical Figurine Sculpt
    const baseGeo = new THREE.CylinderGeometry(1.3, 1.5, 0.35, 32);
    const baseMat = getMat(0x334155, 0.3, 0.3);
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -1.5;
    group.add(baseMesh);

    const bodyGeo = new THREE.ConeGeometry(0.7, 1.8, 16);
    const bodyMat = getMat(0xf8fafc, 0.4, 0.1);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = -0.3;
    group.add(bodyMesh);

    const chestGeo = new THREE.SphereGeometry(0.65, 24, 24);
    const chestMesh = new THREE.Mesh(chestGeo, bodyMat);
    chestMesh.position.y = 0.6;
    group.add(chestMesh);

    const headGeo = new THREE.SphereGeometry(0.42, 24, 24);
    const headMesh = new THREE.Mesh(headGeo, bodyMat);
    headMesh.position.y = 1.35;
    group.add(headMesh);

    // Valkyrie Wings
    const wingGeo = new THREE.BoxGeometry(1.6, 0.6, 0.08);
    const wingMat = getMat(0x38bdf8, 0.25, 0.6);
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.position.set(-1.1, 0.8, -0.3);
    leftWing.rotation.set(0.2, 0.4, 0.5);
    group.add(leftWing);

    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.position.set(1.1, 0.8, -0.3);
    rightWing.rotation.set(0.2, -0.4, -0.5);
    group.add(rightWing);
  } else {
    // Default Character Bust / WebGL 3D Model (Aethelgard, Cyber-Unit, or Web3D Hero)
    // Head / Helm
    const headGeo = new THREE.DodecahedronGeometry(0.9, 2);
    const headMat = getMat(0xffffff, 0.25, 0.4);
    const headMesh = new THREE.Mesh(headGeo, headMat);
    headMesh.scale.set(0.95, 1.1, 1.0);
    headMesh.position.y = 0.35;
    group.add(headMesh);

    // Visor / Mask
    const visorGeo = new THREE.BoxGeometry(0.9, 0.35, 0.65);
    const visorMat = getMat(0x0284c7, 0.1, 0.85);
    const visorMesh = new THREE.Mesh(visorGeo, visorMat);
    visorMesh.position.set(0, 0.45, 0.55);
    group.add(visorMesh);

    // Collar / Neck
    const neckGeo = new THREE.CylinderGeometry(0.4, 0.55, 0.6, 16);
    const neckMat = getMat(0x1e293b, 0.4, 0.6);
    const neckMesh = new THREE.Mesh(neckGeo, neckMat);
    neckMesh.position.set(0, -0.45, 0);
    group.add(neckMesh);

    // Shoulders
    const shoulderGeo = new THREE.BoxGeometry(2.3, 0.4, 1.0);
    const shoulderMat = getMat(0x0ea5e9, 0.2, 0.7);
    const shoulderMesh = new THREE.Mesh(shoulderGeo, shoulderMat);
    shoulderMesh.position.set(0, -0.85, 0);
    group.add(shoulderMesh);

    // Orbit rings
    const ringGeo = new THREE.TorusGeometry(1.6, 0.02, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, opacity: 0.6, transparent: true });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    group.add(ringMesh);
  }
}

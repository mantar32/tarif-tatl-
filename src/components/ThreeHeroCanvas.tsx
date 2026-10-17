import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeHeroCanvasProps {
  className?: string;
}

export const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeModel, setActiveModel] = useState<'all' | 'donut' | 'cupcake' | 'lavacake'>('all');

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 360;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.4, 7.2);
    camera.lookAt(0, 0.1, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.shadowMap.enabled = !isMobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Warm bakery lighting
    const ambientLight = new THREE.AmbientLight(0xfff0f5, 1.35);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff6e5, 2.2);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = !isMobile;
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xff7eb3, 1.8, 15);
    rimLight.position.set(-4, 3, -2);
    scene.add(rimLight);

    const warmFill = new THREE.PointLight(0xffb347, 1.2, 12);
    warmFill.position.set(3, -2, 3);
    scene.add(warmFill);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Helper for kawaii eyes
    const addCuteFace = (parent: THREE.Group, zOffset: number, yOffset: number, scale = 1) => {
      const eyeGeo = new THREE.SphereGeometry(0.085 * scale, 16, 16);
      const eyeMat = new THREE.MeshStandardMaterial({ color: 0x1e0d08, roughness: 0.15, metalness: 0.2 });
      const shineGeo = new THREE.SphereGeometry(0.03 * scale, 10, 10);
      const shineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

      const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
      leftEye.position.set(-0.22 * scale, yOffset, zOffset);
      const leftShine = new THREE.Mesh(shineGeo, shineMat);
      leftShine.position.set(-0.19 * scale, yOffset + 0.03 * scale, zOffset + 0.07 * scale);

      const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
      rightEye.position.set(0.22 * scale, yOffset, zOffset);
      const rightShine = new THREE.Mesh(shineGeo, shineMat);
      rightShine.position.set(0.25 * scale, yOffset + 0.03 * scale, zOffset + 0.07 * scale);

      // Cute pink blush cheeks
      const cheekGeo = new THREE.SphereGeometry(0.07 * scale, 12, 12);
      cheekGeo.scale(1.4, 0.7, 0.5);
      const cheekMat = new THREE.MeshBasicMaterial({ color: 0xff6b9d });
      const leftCheek = new THREE.Mesh(cheekGeo, cheekMat);
      leftCheek.position.set(-0.34 * scale, yOffset - 0.08 * scale, zOffset - 0.02 * scale);
      const rightCheek = new THREE.Mesh(cheekGeo, cheekMat);
      rightCheek.position.set(0.34 * scale, yOffset - 0.08 * scale, zOffset - 0.02 * scale);

      parent.add(leftEye, leftShine, rightEye, rightShine, leftCheek, rightCheek);
    };

    // 1. 3D STRAWBERRY FROSTED DONUT (Left-Front)
    const donutGroup = new THREE.Group();
    const doughGeo = new THREE.TorusGeometry(0.72, 0.34, 24, 48);
    const doughMat = new THREE.MeshStandardMaterial({ color: 0xf3b873, roughness: 0.55 });
    const doughMesh = new THREE.Mesh(doughGeo, doughMat);
    doughMesh.rotation.x = Math.PI * 0.32;
    donutGroup.add(doughMesh);

    const icingGeo = new THREE.TorusGeometry(0.72, 0.355, 24, 48);
    const icingMat = new THREE.MeshStandardMaterial({
      color: 0xff6fa5,
      roughness: 0.2,
      metalness: 0.08,
    });
    const icingMesh = new THREE.Mesh(icingGeo, icingMat);
    icingMesh.rotation.x = Math.PI * 0.32;
    icingMesh.position.y = 0.05;
    icingMesh.scale.set(1.01, 1.01, 0.75);
    donutGroup.add(icingMesh);

    // Sprinkles on donut
    const sprinkleColors = [0xffffff, 0xffe066, 0x63e6be, 0x74c0fc, 0xff8787];
    const sprinkleGeo = new THREE.CapsuleGeometry(0.028, 0.09, 6, 8);
    for (let i = 0; i < 22; i++) {
      const angle = (i / 22) * Math.PI * 2;
      const r = 0.68 + (Math.sin(i * 3) * 0.12);
      const spMat = new THREE.MeshStandardMaterial({
        color: sprinkleColors[i % sprinkleColors.length],
        roughness: 0.3,
      });
      const sp = new THREE.Mesh(sprinkleGeo, spMat);
      sp.position.set(Math.cos(angle) * r, 0.22 + Math.sin(angle) * 0.18, Math.sin(angle) * r * 0.85);
      sp.rotation.set(i * 0.5, i * 1.1, i * 0.8);
      donutGroup.add(sp);
    }
    addCuteFace(donutGroup, 0.98, -0.05, 0.9);
    donutGroup.position.set(-1.65, -0.25, 0.4);
    rootGroup.add(donutGroup);

    // 2. 3D PASTEL PINK SWIRL CUPCAKE (Center-Top)
    const cupcakeGroup = new THREE.Group();
    const cupBaseGeo = new THREE.CylinderGeometry(0.68, 0.48, 0.82, 28);
    const cupBaseMat = new THREE.MeshStandardMaterial({ color: 0xe6a15c, roughness: 0.6 });
    const cupBase = new THREE.Mesh(cupBaseGeo, cupBaseMat);
    cupcakeGroup.add(cupBase);

    // Cream layers
    const creamMat = new THREE.MeshStandardMaterial({
      color: 0xffb3c6,
      roughness: 0.25,
      metalness: 0.05,
    });
    const layer1 = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.24, 18, 36), creamMat);
    layer1.rotation.x = Math.PI / 2;
    layer1.position.y = 0.48;
    const layer2 = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.2, 18, 36), creamMat);
    layer2.rotation.x = Math.PI / 2;
    layer2.position.y = 0.76;
    const layer3 = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.45, 24), creamMat);
    layer3.position.y = 1.05;

    // Cherry on top
    const cherryMat = new THREE.MeshStandardMaterial({ color: 0xd90429, roughness: 0.12, metalness: 0.15 });
    const cherry = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 20), cherryMat);
    cherry.position.set(0.05, 1.32, 0.05);

    cupcakeGroup.add(layer1, layer2, layer3, cherry);
    addCuteFace(cupcakeGroup, 0.61, 0.02, 1.05);
    cupcakeGroup.position.set(0, 0.05, 0);
    rootGroup.add(cupcakeGroup);

    // 3. 3D MOLTEN CHOCOLATE LAVA CAKE (Right-Front)
    const lavaGroup = new THREE.Group();
    const cakeGeo = new THREE.CylinderGeometry(0.68, 0.78, 0.86, 32);
    const cakeMat = new THREE.MeshStandardMaterial({ color: 0x3b1c11, roughness: 0.65 });
    const cakeMesh = new THREE.Mesh(cakeGeo, cakeMat);
    lavaGroup.add(cakeMesh);

    // Glossy molten chocolate top & flowing stream
    const moltenMat = new THREE.MeshStandardMaterial({
      color: 0x220c05,
      roughness: 0.12,
      metalness: 0.25,
    });
    const moltenTop = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.08, 24), moltenMat);
    moltenTop.position.y = 0.42;
    const moltenFlow = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.55, 12, 16), moltenMat);
    moltenFlow.position.set(0, -0.1, 0.66);
    moltenFlow.rotation.x = 0.28;
    const moltenPool = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.42, 0.06, 24), moltenMat);
    moltenPool.position.set(0, -0.42, 0.85);

    // Raspberry on top
    const berryMat = new THREE.MeshStandardMaterial({ color: 0xe63946, roughness: 0.35 });
    const berry = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 16), berryMat);
    berry.position.set(0, 0.55, 0);

    lavaGroup.add(moltenTop, moltenFlow, moltenPool, berry);
    addCuteFace(lavaGroup, 0.72, 0.08, 0.95);
    lavaGroup.position.set(1.65, -0.2, 0.35);
    rootGroup.add(lavaGroup);

    // Floating sugar pearls in background
    const pearlsGroup = new THREE.Group();
    const pearlGeo = new THREE.SphereGeometry(0.08, 12, 12);
    for (let i = 0; i < (isMobile ? 8 : 16); i++) {
      const pMat = new THREE.MeshStandardMaterial({
        color: sprinkleColors[i % sprinkleColors.length],
        roughness: 0.25,
      });
      const pearl = new THREE.Mesh(pearlGeo, pMat);
      const angle = (i / 16) * Math.PI * 2;
      pearl.position.set(
        Math.cos(angle) * (2.5 + (i % 3) * 0.4),
        Math.sin(angle * 2) * 1.2,
        -0.8 - (i % 2) * 0.5
      );
      pearlsGroup.add(pearl);
    }
    rootGroup.add(pearlsGroup);

    // Focus visibility according to activeModel
    const applyFocus = () => {
      if (activeModel === 'all') {
        donutGroup.visible = true;
        cupcakeGroup.visible = true;
        lavaGroup.visible = true;
        donutGroup.position.set(-1.65, -0.25, 0.4);
        cupcakeGroup.position.set(0, 0.05, 0);
        lavaGroup.position.set(1.65, -0.2, 0.35);
        donutGroup.scale.setScalar(1);
        cupcakeGroup.scale.setScalar(1);
        lavaGroup.scale.setScalar(1);
      } else if (activeModel === 'donut') {
        donutGroup.visible = true;
        cupcakeGroup.visible = false;
        lavaGroup.visible = false;
        donutGroup.position.set(0, 0, 1.1);
        donutGroup.scale.setScalar(1.35);
      } else if (activeModel === 'cupcake') {
        donutGroup.visible = false;
        cupcakeGroup.visible = true;
        lavaGroup.visible = false;
        cupcakeGroup.position.set(0, -0.25, 1.1);
        cupcakeGroup.scale.setScalar(1.3);
      } else if (activeModel === 'lavacake') {
        donutGroup.visible = false;
        cupcakeGroup.visible = false;
        lavaGroup.visible = true;
        lavaGroup.position.set(0, -0.05, 1.1);
        lavaGroup.scale.setScalar(1.35);
      }
    };
    applyFocus();

    // Pointer interaction
    let targetRotX = 0;
    let targetRotY = 0;
    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotY = nx * 0.45;
      targetRotX = -ny * 0.25;
    };

    container.addEventListener('mousemove', onPointerMove);

    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        donutGroup.rotation.y = Math.sin(t * 0.9) * 0.25 + targetRotY;
        donutGroup.position.y = (activeModel === 'all' ? -0.25 : 0) + Math.sin(t * 1.8) * 0.08;

        cupcakeGroup.rotation.y = t * 0.45 + targetRotY;
        cupcakeGroup.position.y = (activeModel === 'all' ? 0.05 : -0.25) + Math.cos(t * 1.5) * 0.08;

        lavaGroup.rotation.y = Math.cos(t * 0.8) * 0.25 + targetRotY;
        lavaGroup.position.y = (activeModel === 'all' ? -0.2 : -0.05) + Math.sin(t * 1.6 + 1) * 0.08;

        pearlsGroup.rotation.z = t * 0.12;
        rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.08;
        rootGroup.rotation.y += (targetRotY * 0.5 - rootGroup.rotation.y) * 0.08;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 520;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [activeModel]);

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center ${className}`}>
      <div
        ref={mountRef}
        className="w-full h-[290px] sm:h-[340px] cursor-grab active:cursor-grabbing"
        aria-label="İnteraktif 3D Tatlı Modelleri Sahnesi"
      />
      <div className="flex flex-wrap items-center justify-center gap-1.5 pb-2 z-10">
        {[
          { key: 'all', label: '✨ Tümü (3D Sahne)' },
          { key: 'cupcake', label: '🧁 3D Cupcake' },
          { key: 'donut', label: '🍩 3D Donut' },
          { key: 'lavacake', label: '🍫 3D Lava Kek' },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveModel(tab.key as typeof activeModel)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              activeModel === tab.key
                ? 'bg-pastelPink-500 text-white shadow-btn-pink scale-105'
                : 'bg-white/80 text-choco-800 hover:bg-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

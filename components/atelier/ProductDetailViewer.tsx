"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface ProductDetailViewerProps {
  alloy: "22ct" | "18ct" | "platinum";
  className?: string;
}

export function ProductDetailViewer({ alloy, className = "" }: ProductDetailViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const ringMeshRef = useRef<THREE.Mesh | null>(null);
  const gemMeshRef = useRef<THREE.Mesh | null>(null);
  const materialsRef = useRef<{
    ring: THREE.MeshPhysicalMaterial;
    gem: THREE.MeshPhysicalMaterial;
  } | null>(null);

  // Update material properties when alloy changes
  useEffect(() => {
    if (!materialsRef.current) return;
    const { ring } = materialsRef.current;

    if (alloy === "22ct") {
      // 22ct Royal Gold: Deep rich yellow, high metalness, warm specular
      ring.color.set("#D4AF37");
      ring.metalness = 0.98;
      ring.roughness = 0.22;
      ring.clearcoat = 0.3;
      ring.clearcoatRoughness = 0.1;
    } else if (alloy === "18ct") {
      // 18ct Rose Gold: Coppery champagne pink
      ring.color.set("#C58F78");
      ring.metalness = 0.95;
      ring.roughness = 0.25;
      ring.clearcoat = 0.25;
      ring.clearcoatRoughness = 0.15;
    } else {
      // 950 Pure Platinum: Dense cool silver-white
      ring.color.set("#D8DEE4");
      ring.metalness = 0.97;
      ring.roughness = 0.18;
      ring.clearcoat = 0.4;
      ring.clearcoatRoughness = 0.08;
    }
    ring.needsUpdate = true;
  }, [alloy]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#141416");

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.2);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 3. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2.5;
    controls.maxDistance = 6.0;
    controls.maxPolarAngle = Math.PI / 1.7; // Prevent going beneath floor
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    // 4. Studio Lighting Rig
    // Soft Key Light (Warm Goldsmith Spotlight)
    const keyLight = new THREE.SpotLight(0xfff4e0, 80);
    keyLight.position.set(4, 6, 4);
    keyLight.angle = Math.PI / 5;
    keyLight.penumbra = 0.8;
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Cool Rim Specular Light
    const rimLight = new THREE.DirectionalLight(0xddeeff, 25);
    rimLight.position.set(-4, 3, -3);
    scene.add(rimLight);

    // Bottom Bounce Light
    const bounceLight = new THREE.PointLight(0xc6a75e, 18, 10);
    bounceLight.position.set(0, -2, 2);
    scene.add(bounceLight);

    // Ambient Fill
    const ambientLight = new THREE.AmbientLight(0x2a2724, 2.5);
    scene.add(ambientLight);

    // 5. Procedural 3D Jewellery Geometry
    // Heavy Cast Ring Shank (Torus Geometry with architectural bevel)
    const ringGeo = new THREE.TorusGeometry(1.2, 0.22, 48, 120);

    const ringMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(alloy === "22ct" ? "#D4AF37" : alloy === "18ct" ? "#C58F78" : "#D8DEE4"),
      metalness: 0.98,
      roughness: 0.22,
      clearcoat: 0.3,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    ringMesh.castShadow = true;
    ringMesh.receiveShadow = true;
    scene.add(ringMesh);
    ringMeshRef.current = ringMesh;

    // Solitaire Bezel Crown
    const crownGeo = new THREE.CylinderGeometry(0.52, 0.38, 0.45, 32);
    const crownMesh = new THREE.Mesh(crownGeo, ringMat);
    crownMesh.position.set(0, 1.25, 0.3);
    crownMesh.rotation.x = Math.PI / 6;
    ringMesh.add(crownMesh);

    // Cabochon Gemstone (Royal Deep Crimson Ruby / Garnet)
    const gemGeo = new THREE.SphereGeometry(0.42, 32, 24);
    const gemMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#9E1538"),
      emissive: new THREE.Color("#400412"),
      roughness: 0.05,
      metalness: 0.05,
      transmission: 0.85, // Glass/gem transmission
      ior: 1.76, // Ruby/Garnet Refractive Index
      thickness: 1.2,
      specularIntensity: 1.0,
      clearcoat: 1.0,
    });

    const gemMesh = new THREE.Mesh(gemGeo, gemMat);
    gemMesh.position.set(0, 0.22, 0);
    gemMesh.scale.set(1, 0.7, 1);
    crownMesh.add(gemMesh);
    gemMeshRef.current = gemMesh;

    // Store references
    materialsRef.current = { ring: ringMat, gem: gemMat };

    // 6. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      ringGeo.dispose();
      crownGeo.dispose();
      gemGeo.dispose();
      ringMat.dispose();
      gemMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[350px] sm:min-h-[420px] ${className}`}>
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-3 left-3 bg-[#141416]/90 backdrop-blur-md px-3 py-1.5 border border-[#2C2825] font-mono text-[10px] tracking-[0.2em] text-[#C6A75E] uppercase pointer-events-none select-none">
        360° WEBGL ORBIT · DRAG TO INSPECT
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeTorus() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // ✅ Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // ✅ Purple Torus
    const geometry = new THREE.TorusGeometry(2.5, 0.7, 20, 100);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setStyle("#7E7CD9"), // Balanced mix of your colors
      metalness: 0.7, // gives it a metallic look
      roughness: 0.2, // less rough for more shine
      emissive: new THREE.Color(0x1f1f3a), // soft glow
      emissiveIntensity: 0.3,
    });

    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-[400px] w-full" />;
}

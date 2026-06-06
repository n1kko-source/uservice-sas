import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.15;
      ref.current.rotation.y += dt * 0.2;
    }
  });
  return (
    <group position={[0.55, 0, 0]}>
      <Float speed={1.1} rotationIntensity={0.22} floatIntensity={0.55}>
        <mesh ref={ref} scale={1.28}>
          <torusKnotGeometry args={[1, 0.32, 220, 32]} />
          <MeshDistortMaterial
            color="#0a1628"
            emissive="#1a3a6e"
            emissiveIntensity={0.35}
            metalness={0.92}
            roughness={0.12}
            distort={0.32}
            speed={1.4}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5.4], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-3, 1, 2]} intensity={1.8} color="#c084fc" />
        <pointLight position={[4, -1, 3]} intensity={1.4} color="#22d3ee" />
        <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#7aa7ff" />
        <Suspense fallback={null}>
          <Knot />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

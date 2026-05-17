import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

type Shape = "box" | "sphere" | "torus" | "octahedron" | "cone" | "icosa";

function Geometry({ shape }: { shape: Shape }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.4;
      ref.current.rotation.y += dt * 0.55;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} scale={1.2}>
        {shape === "box" && <boxGeometry args={[1, 1, 1]} />}
        {shape === "sphere" && <sphereGeometry args={[0.75, 48, 48]} />}
        {shape === "torus" && <torusGeometry args={[0.6, 0.22, 24, 64]} />}
        {shape === "octahedron" && <octahedronGeometry args={[0.85, 0]} />}
        {shape === "cone" && <coneGeometry args={[0.7, 1.1, 32]} />}
        {shape === "icosa" && <icosahedronGeometry args={[0.85, 0]} />}
        <meshStandardMaterial
          color="#0f1e36"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
}

export function Service3DIcon({ shape }: { shape: Shape }) {
  return (
    <div className="h-32 w-32">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <directionalLight position={[-3, -2, -2]} intensity={0.4} color="#7aa7ff" />
        <Suspense fallback={null}>
          <Geometry shape={shape} />
        </Suspense>
      </Canvas>
    </div>
  );
}

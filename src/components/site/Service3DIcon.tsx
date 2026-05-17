import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";
import type { ServiceShape } from "@/lib/services-data";

function Geometry({
  shape,
  color,
  accent,
}: {
  shape: ServiceShape;
  color: string;
  accent: string;
}) {
  const ref = useRef<Group>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.25;
      ref.current.rotation.y += dt * 0.4;
    }
  });

  // Friendlier, softer material — less metallic, slightly glossy.
  const material = (
    <meshPhysicalMaterial
      color={color}
      roughness={0.35}
      metalness={0.15}
      clearcoat={0.8}
      clearcoatRoughness={0.2}
    />
  );

  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.9}>
      <group ref={ref} scale={1.15}>
        {shape === "roundedBox" && (
          <RoundedBox args={[1.1, 1.1, 1.1]} radius={0.22} smoothness={6}>
            {material}
          </RoundedBox>
        )}
        {shape === "sphere" && (
          <mesh>
            <sphereGeometry args={[0.78, 64, 64]} />
            {material}
          </mesh>
        )}
        {shape === "torus" && (
          <mesh>
            <torusGeometry args={[0.62, 0.24, 32, 96]} />
            {material}
          </mesh>
        )}
        {shape === "capsule" && (
          <mesh rotation={[Math.PI / 4, 0, Math.PI / 6]}>
            <capsuleGeometry args={[0.42, 0.7, 16, 32]} />
            {material}
          </mesh>
        )}
        {shape === "knot" && (
          <mesh>
            <torusKnotGeometry args={[0.5, 0.18, 128, 32]} />
            {material}
          </mesh>
        )}
        {shape === "dodeca" && (
          <mesh>
            <dodecahedronGeometry args={[0.85, 0]} />
            {material}
          </mesh>
        )}

        {/* Soft accent halo — small floating sphere */}
        <mesh position={[0.95, 0.7, 0.2]} scale={0.18}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color={accent}
            roughness={0.4}
            metalness={0.1}
            emissive={accent}
            emissiveIntensity={0.25}
          />
        </mesh>
      </group>
    </Float>
  );
}

export function Service3DIcon({
  shape,
  color,
  accent,
}: {
  shape: ServiceShape;
  color: string;
  accent: string;
}) {
  return (
    <div className="h-32 w-32">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 3, 3]} intensity={1.1} />
        <directionalLight position={[-3, -2, -2]} intensity={0.45} color={accent} />
        <Suspense fallback={null}>
          <Geometry shape={shape} color={color} accent={accent} />
        </Suspense>
      </Canvas>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
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

  // Improved, more realistic material — premium glossy feel
  const material = (
    <meshPhysicalMaterial
      color={color}
      roughness={0.15}
      metalness={0.3}
      clearcoat={1}
      clearcoatRoughness={0.1}
      transmission={0.1}
      thickness={0.5}
      envMapIntensity={1.2}
    />
  );

  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.9}>
      <group ref={ref} scale={0.82}>
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Defer WebGL until client mount so prerender/SSR stays stable for SEO HTML
  if (!mounted) {
    return <div className="h-32 w-32 rounded-2xl bg-secondary/60" aria-hidden />;
  }

  return (
    <div className="h-32 w-32">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <spotLight position={[5, 5, 5]} angle={0.2} penumbra={1} intensity={2} />
        <directionalLight position={[-3, -2, -2]} intensity={0.5} color={accent} />
        <Suspense fallback={null}>
          <Geometry shape={shape} color={color} accent={accent} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

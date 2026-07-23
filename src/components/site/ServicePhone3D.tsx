import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { Group } from "three";

function PhoneModel() {
  const { scene } = useGLTF("/models/iPhone.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const groupRef = useRef<Group>(null);

  useFrame((_, dt) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += dt * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.12}>
      <group ref={groupRef} position={[0, -0.08, 0]}>
        <primitive object={clonedScene} />
      </group>
    </Float>
  );
}

export function ServicePhone3D({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("relative w-full overflow-hidden bg-background", className)}>
      {!mounted ? (
        <div className="absolute inset-0 bg-secondary/40" aria-hidden />
      ) : (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, -0.02, 1.2], fov: 12 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-3, 1, 2]} intensity={1.5} color="#c084fc" />
          <pointLight position={[4, -1, 3]} intensity={1.2} color="#22d3ee" />
          <Suspense fallback={null}>
            <PhoneModel />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

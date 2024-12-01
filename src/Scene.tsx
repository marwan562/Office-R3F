import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";

function Scene({ children }: { children: ReactNode }) {
  return (
    <Canvas camera={{ fov: 60, position: [2.3, 1.5, 2.3] }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={3} />
      {children}
    </Canvas>
  );
}

export default Scene;

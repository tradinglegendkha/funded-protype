import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../../utils/Loader";

const RocketAsteroid = () => {
  const rocket = useGLTF("./rocket_asteroid/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.15} groundColor="black" />
      <pointLight intensity={10} position={(1, 2, 2)} />
      <primitive
        object={rocket.scene}
        scale={0.55}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const RocketAsteroidCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 35, near: 0.1, far: 200, position: [10, 25, 2] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RocketAsteroid />
      </Suspense>
    </Canvas>
  );
};

export default RocketAsteroidCanvas;

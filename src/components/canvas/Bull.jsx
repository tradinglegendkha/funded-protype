import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../../utils/Loader";

const Bull = ({ isMobile }) => {
  const bull = useGLTF("./charging_bull/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.15} groundColor="black" />
      <pointLight intensity={10} position={(1, 2, 2)} />
      {/* <spotLight
        position={[20, 50, 10]}
        angle={0.9}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive
        object={bull.scene}
        scale={isMobile ? 0.7 : 2.0}
        position={isMobile ? [0, -3, -2.2] : [0, -0.9, -0.4]}
        rotation={[0.0, 1, 0.1]}
      />
    </mesh>
  );
};

const BullCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setisMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} s>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Bull isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BullCanvas;

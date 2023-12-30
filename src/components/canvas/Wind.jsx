import React from "react";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, Line, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Wind = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[1, -1, Math.PI / 1]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      {/* <Line
        points={[0, 0, 0]}
        color="white"
        lineWidth={1}
        segments={true}
        dashed={false}
        {...props}
      /> */}
    </group>
  );
};

const WindCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Wind />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default WindCanvas;

"use client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Showcase = () => {
  const glassObj = useLoader(GLTFLoader, "/scene.glb");
  return (
    <div className="w-full h-48 bg-red-900 flex justify-center items-center select-none">
      {/* 3d showcase */}
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <mesh rotation={[-90, 0, 0]} position={[0, 0, 0]}>
            <primitive object={glassObj.scene} />
          </mesh>
        </Suspense>
        {/* <OrbitControls target={[0, 1, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default Showcase;

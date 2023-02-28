"use client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, OrbitControls, Stats } from "@react-three/drei";
import { Mesh } from "three";

const Showcase = () => {
  const model = useLoader(GLTFLoader, "/model/scene.gltf");
  return (
    <div className="w-full h-48 bg-red-900 flex justify-center items-center select-none relative">
      {/* 3d showcase */}
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <mesh position={[0, -2, 0]} scale={[4, 4, 4]}>
            <primitive object={model.scene} />
            <meshNormalMaterial attach="material" />
          </mesh>
        </Suspense>
        <OrbitControls target={[0, 0, 0]} />
        {/* <Stats  /> */}
      </Canvas>
      <span className="absolute bottom-0">needs to change model</span>
    </div>
  );
};

export default Showcase;

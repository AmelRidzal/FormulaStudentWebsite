// src/js/FbxViewer.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FBXModel from './FBXModel';

const FbxViewer = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <FBXModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default FbxViewer;

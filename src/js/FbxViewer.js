// src/js/FbxViewer.js
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

import '../css/FBXViewer.css';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.01} />;
}

const FbxViewer = () => {
  const [model, setModel] = useState('/models/aero.glb'); // default model path

  return (
    <>
      {/* Custom Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><button onClick={() => setModel('/models/aero.glb')}>Aero</button></li>
          <li><button onClick={() => setModel('/models/chassie.glb')}>Chassie</button></li>
          <li><button onClick={() => setModel('/models/engine.glb')}>Engine</button></li>
        </ul>
      </nav>

      {/* 3D Canvas */}
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute" }}>
        <color attach="background" args={["#101010"]} />
        <Suspense fallback={null}>
          <PresentationControls key={model} speed={1.5} global zoom={0.5} polar={[-Math.PI / 2, Math.PI / 2]}>
            <Stage environment="sunset">
              <Model modelPath={model} />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default FbxViewer;

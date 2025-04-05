// src/js/FBXModel.js
/*import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const FBXModel = () => {
  const fbx = useLoader(FBXLoader, '/FBXTest1.fbx'); // adjust path to your file
  const ref = useRef();

  useEffect(() => {
    fbx.scale.set(0.01, 0.01, 0.01); // adjust scale if needed
    if (ref.current) {
      ref.current.add(fbx);
    }
  }, [fbx]);

  return <primitive object={fbx} ref={ref} />;
};

export default FBXModel;*/

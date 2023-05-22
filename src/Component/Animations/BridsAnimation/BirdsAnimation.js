import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BirdsAnimation = () => {
  const group = useRef();
  const bird = useRef();
  const numBirds = 200;
  const birdSpeed = 0.01;

  useEffect(() => {
    const mesh = group.current;

    // Bird geometry and material
    const geometry = new THREE.BoxBufferGeometry(20, 20, 20);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });

    // Create bird instances and position them randomly
    for (let i = 0; i < numBirds; i++) {
      const birdInstance = new THREE.Mesh(geometry, material);
      birdInstance.position.x = Math.random() * 800 - 400;
      birdInstance.position.y = Math.random() * 800 - 400;
      birdInstance.position.z = Math.random() * 800 - 400;
      birdInstance.rotation.y = Math.random() * 2 * Math.PI;
      birdInstance.matrixAutoUpdate = false;
      birdInstance.updateMatrix();
      mesh.add(birdInstance);
    }
  }, []);

  useFrame(() => {
    const mesh = group.current;

    // Move and rotate each bird
    mesh.children.forEach((birdInstance) => {
      birdInstance.rotation.y += birdSpeed;
    });

    // Make the bird group rotate around its center
    mesh.rotation.y += birdSpeed / 2;
  });

  return (
    <group ref={group}>
      {/* This is an empty group to hold the bird instances */}
    </group>
  );
};
export default BirdsAnimation;
import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'

export default function Tshirt(props) {
  const { nodes, materials } = useGLTF('/OTshirt.glb')

  const snap = useSnapshot(state);
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)
  
  useFrame((state, delta) => {
    if (materials['Material.001'] && materials['Material.001'].color) {
      easing.dampC(materials['Material.001'].color, snap.color, 0.25, delta);
    }
  });
  
  const stateString = JSON.stringify(snap);
  console.log('Logo Decal:', snap.logoDecal);
console.log('Full Decal:', snap.fullDecal);
console.log('Logo Texture:', logoTexture);
console.log('Full Texture:', fullTexture);
console.log(nodes);

materials['Material.001'].transparent = true;
materials['Material.001'].alphaTest = 0.5;
  return (
    <group {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]}>
    <mesh
  geometry={nodes.Object_4.geometry}
  material={materials['Material.001']}
  position={[-0.008, -0.003, -0.006]}
  rotation={[0.164, 0.016, 0.058]}
>
  {snap.isFullTexture && (
    <Decal
      position={[0, -1.37, 0.1]} // Slightly forward and higher for chest placement
      rotation={[0, 0, 0]}     // Ensure it's flat on the chest
      scale={1}                // Scale to cover the entire chest
      map={fullTexture}
    />
  )}

  {snap.isLogoTexture && (
    <Decal
      position={[0, 0, 0]} // Adjust for logo placement on the chest
      rotation={[0, 0, 0]}      // Flat on the surface
      scale={3}               // Smaller scale for a logo
      map={logoTexture}
      depthTest={true}
      depthWrite={false}
    />
  )}
</mesh>

    </group>
  </group>
  )
}

useGLTF.preload('/Tshirt.glb')

import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'

const Tshirt = () => {
    const snap = useSnapshot(state);
    const {nodes, materials} = useGLTF('/tshirt.gltf')

    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)
    
    useFrame((state,delta) => easing.dampC(materials.Material001.color, snap.color, 0.25, delta));
    const stateString = JSON.stringify(snap);

    materials.Material001.transparent = true;
materials.Material001.opacity = 1.0;



  return (
    <group key={stateString} dispose={null} rotation={[-Math.PI / 2, 0, 0]} >
          
          <mesh 
        castShadow
        geometry={nodes.Object_2.geometry} material={materials.Material001}/>

        <mesh 
        
        geometry={nodes.Object_3.geometry} material={materials.Material001} >
        
        
        {snap.isFullTexture && (
  <Decal
  position={[0,0,0]}
  rotation={[0,0,0]}
  scale={1}
  map={fullTexture}
  />
)}

{snap.isLogoTexture && (
    <Decal
  position={[0, 0, 0]}
  rotation={[0, 0.9, 0]}
  scale={0.8}
  map={logoTexture}
  depthTest={false}
  depthWrite={true}
  />
  )}
        </mesh>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material001} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material001} />
    </group>
  )
}


export default Tshirt
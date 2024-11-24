import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'


export default function Suit(props) {
  const { nodes, materials } = useGLTF('/suit.glb')
  const snap = useSnapshot(state)

  useFrame((state, delta) => easing.dampC(materials.Inner_FRONT_1380.color, snap.color, 0.25, delta))

  return (
    
      <group castShadow rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Pattern_2916_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380} />
        <mesh geometry={nodes.Pattern_2917_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_0} />
        <mesh geometry={nodes.Pattern_2918_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_1} />
        <mesh geometry={nodes.Pattern_2919_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_2} />
        <mesh geometry={nodes.Pattern_141347_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_3} />
        <mesh geometry={nodes.Pattern_141206_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_4} />
        <mesh geometry={nodes.Pattern_141207_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_5} />
        <mesh geometry={nodes.Pattern_163649_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_6} />
        <mesh geometry={nodes.Pattern_269035_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_7} />
        <mesh geometry={nodes.Pattern_163650_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_8} />
        <mesh geometry={nodes.Pattern_269036_Inner_FRONT_1380_0.geometry} material={materials.Inner_FRONT_1380_9} />
        <mesh geometry={nodes.Pattern_290730_Outer_FRONT_904734_0.geometry} material={materials.Outer_FRONT_904734} />
        <mesh geometry={nodes.Pattern_290731_Outer_FRONT_904734_0.geometry} material={materials.Outer_FRONT_904734_0} />
        <mesh geometry={nodes.Pattern_829096_Outer_FRONT_904734_0.geometry} material={materials.Outer_FRONT_904734_1} />
        <mesh geometry={nodes.Pattern_829098_Outer_FRONT_904734_0.geometry} material={materials.Outer_FRONT_904734_2} />
        <mesh geometry={nodes.Pattern_829100_Outer_FRONT_904734_0.geometry} material={materials.Outer_FRONT_904734_3} />
        <mesh geometry={nodes.Pattern_836445_Tie_FRONT_904736_0.geometry} material={materials.Tie_FRONT_904736} />
        <mesh geometry={nodes.Pattern_854869_Tie_FRONT_904736_0.geometry} material={materials.Tie_FRONT_904736_0} />
        <mesh geometry={nodes.Pattern_855976_Tie_FRONT_904736_0.geometry} material={materials.Tie_FRONT_904736_1} />
        <mesh geometry={nodes.Pattern_854870_Tie_FRONT_904736_0.geometry} material={materials.Tie_FRONT_904736_2} />
        <mesh geometry={nodes.Pattern_855977_Tie_FRONT_904736_0.geometry} material={materials.Tie_FRONT_904736_3} />
        <mesh geometry={nodes.MatShape_1103779_Material1357_0.geometry} material={materials.Material1357} />
        <mesh geometry={nodes.MatShape_1103779_Material1357_0_1.geometry} material={materials.Material1357_0} />
        <mesh geometry={nodes.MatShape_1103889_Material1357_0.geometry} material={materials.Material1357_1} />
        <mesh geometry={nodes.MatShape_1103889_Material1357_0_1.geometry} material={materials.Material1357_2} />
        <mesh geometry={nodes.MatShape_1104068_Material1357_0.geometry} material={materials.Material1357_3} />
        <mesh geometry={nodes.MatShape_1104068_Material1357_0_1.geometry} material={materials.Material1357_4} />
        <mesh geometry={nodes.MatShape_1104226_Material1357_0.geometry} material={materials.Material1357_5} />
        <mesh geometry={nodes.MatShape_1104226_Material1357_0_1.geometry} material={materials.Material1357_6} />
        <mesh geometry={nodes.Pattern_290735_Outer_FRONT_904734_0.geometry} material={materials.Outer_FRONT_904734_4} />
        <mesh geometry={nodes.Pattern_829097_Outer_FRONT_904734_0.geometry} material={materials.Outer_FRONT_904734_5} />
        <mesh geometry={nodes.Pattern_829099_Outer_FRONT_904734_0.geometry} material={materials.Outer_FRONT_904734_6} />
        <mesh geometry={nodes.Pattern_829101_Outer_FRONT_904734_0.geometry} material={materials.Outer_FRONT_904734_7} />
        <mesh geometry={nodes.MatShape_1198362_Material1198069_0.geometry} material={materials.Material1198069} />
        <mesh geometry={nodes.MatShape_1198362_Material1198069_0_1.geometry} material={materials.Material1198069_0} />
        <mesh geometry={nodes.MatShape_1198496_Material1198069_0.geometry} material={materials.Material1198069_1} />
        <mesh geometry={nodes.MatShape_1198496_Material1198069_0_1.geometry} material={materials.Material1198069_2} />
        <mesh geometry={nodes.MatShape_1198879_Material1198069_0.geometry} material={materials.Material1198069_3} />
        <mesh geometry={nodes.MatShape_1198879_Material1198069_0_1.geometry} material={materials.Material1198069_4} />
        <mesh geometry={nodes.MatShape_1198923_Material1198069_0.geometry} material={materials.Material1198069_5} />
        <mesh geometry={nodes.MatShape_1198923_Material1198069_0_1.geometry} material={materials.Material1198069_6} />
      </group>
   
  )
}

useGLTF.preload('/suit.glb')

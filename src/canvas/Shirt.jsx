import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'

const Shirt = () => {
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF('/shirt_baked.glb')

    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)

    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))

    return (
        <group>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
            >
                {snap.isFullTexture && (
                    <Decal
                        position={[0, -0.1, 0]}
                        rotation={[0, 0, 0]}
                        scale={0.6}
                        map={fullTexture}
                    />
                )}

                {snap.isLogoTexture && (
                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={0.45}
                        map={logoTexture}
                        depthTest={false}
                        depthWrite={true}
                    />
                )}
            </mesh>
        </group>
    )
}

export default Shirt

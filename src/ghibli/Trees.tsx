import { forwardRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { Color, Group, Mesh, Vector3 } from 'three'
import { GhibliShader } from './GhibliShader'
import { GroupProps } from '@react-three/fiber'
import { useParams } from '../params'

type Props = {
  colors: Array<Color>
}

export const Trees = forwardRef<Group, GroupProps & Props>((props, ref) => {
  const { nodes } = useGLTF('/trees.glb')

  const { applyShader } = useParams()

  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: props.colors,
      },
      brightnessThresholds: {
        value: [0.6, 0.35, 0.001],
      },
      lightPosition: { value: new Vector3(15, 15, 15) },
    }),
    [props.colors]
  )

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Foliage as Mesh).geometry}
        position={[0.33, -0.05, -0.68]}
      >
        {/*  */}

        {applyShader && (
          <shaderMaterial
            attach="material"
            {...GhibliShader}
            uniforms={uniforms}
          />
        )}

        {!applyShader && <meshStandardMaterial />}
      </mesh>
    </group>
  )
})

useGLTF.preload('/trees.glb')

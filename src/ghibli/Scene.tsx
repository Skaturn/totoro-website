import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Trees } from './Trees'
import { Color, Group } from 'three'
import { useParams } from '../params'

export function Scene() {
  const refTrees = useRef<Group>(null)

  const { runAnimation } = useParams()

  useFrame(() => {
    const { current: group } = refTrees
    if (group && runAnimation) {
      // group.rotation.y += 0.001
      // animate each child
      group.children.forEach((child, index) => {
        child.rotation.y += 0.01 * (index % 2 ? 1 : -1)
      })
    }
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <group ref={refTrees}>
      <Trees
        position={[0, 0, -2]}
        colors={[
          new Color('#427062').convertLinearToSRGB(),
          new Color('#33594e').convertLinearToSRGB(),
          new Color('#234549').convertLinearToSRGB(),
          new Color('#1e363f').convertLinearToSRGB(),
        ]}
      />
      <Trees
        ref={refTrees}
        position={[-0, 0, 10]}
        colors={[
          new Color('#427062').convertLinearToSRGB(),
          new Color('#33594e').convertLinearToSRGB(),
          new Color('#234549').convertLinearToSRGB(),
          new Color('#1e363f').convertLinearToSRGB(),
        ]}
      />
      <Trees
        position={[0, 0, 4]}
        colors={[
          new Color('#4a8d7e').convertLinearToSRGB(),
          new Color('#377f6a').convertLinearToSRGB(),
          new Color('#184f52').convertLinearToSRGB(),
          new Color('#143b36').convertLinearToSRGB(),
        ]}
      />

      <Trees
        position={[4, 0, -8]}
        colors={[
          new Color('#4a8d7e').convertLinearToSRGB(),
          new Color('#377f6a').convertLinearToSRGB(),
          new Color('#184f52').convertLinearToSRGB(),
          new Color('#143b36').convertLinearToSRGB(),
        ]}
      />
      </group>
    </>
  )
}

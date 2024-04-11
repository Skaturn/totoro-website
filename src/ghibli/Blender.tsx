import { useGLTF } from "@react-three/drei";

export function BlenderScene() {
  const { nodes } = useGLTF('/ghibli-tree.glb')

  console.log(nodes)

  return (
    <group>
    </group>
  )
}
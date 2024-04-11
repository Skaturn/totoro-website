import { Canvas, useFrame } from '@react-three/fiber'
// import Scene from './scene'
import { Scene } from './ghibli/Scene'
import { Perf } from 'r3f-perf'
import { UniformParams, useParams, useScroll } from './params'
import { Ground } from './ghibli/Ground'
import { Page } from './page'
import { useRef } from 'react'

function ScrollControls() {
  const targetScroll = useScroll()
  let scroll = useRef(0)
  useFrame(({camera}) => {
    // lerp scroll to target
    scroll.current += (targetScroll.current - scroll.current) * 0.1

    camera.position.y = targetScroll.current * -20 + 3

    // orbit around the origin
    // const angle = Math.PI * scroll.current
    // camera.position.x = 14 * Math.cos(angle)
    // camera.position.z = 14 * Math.sin(angle)
    // camera.lookAt(new Vector3(0, 0, 0))
  })
  return <></>
}

function Fiber() {
  const { debug } = useParams()
  
  return (
    <Canvas camera={{ position: [14, 2, 5] }} shadows>
      {debug && <Perf position="top-left" minimal />}
      {debug && <gridHelper />}
      <UniformParams />
      {/* <OrbitControls /> */}
      <ScrollControls />
      <Scene />
      <Ground />
    </Canvas>
  )
}

function App() {
  return (
    <div>
      <div className="fixed inset-0 pointer-events-none -z-1">
        <Fiber />
      </div>
      <Page />
    </div>
  )
}

export default App

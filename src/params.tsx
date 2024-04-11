import { useControls } from 'leva'
import { useEffect, useRef } from 'react'
import { Uniform } from 'three'

export const useParams = () => {
  return useControls({
    debug: { value: false && import.meta.env.DEV, label: 'Debug' },
    applyShader: { value: true, label: 'Apply Shader' },
    runAnimation: { value: false, label: 'Run Animation' },
    background: { value: false, label: 'Background' },
    value: { value: 0.5, min: 0, max: 1, label: 'Value' },
  })
}

export const uniforms = {
  value: new Uniform(0.5),
}


export const useScroll = () => {
  const scroll = useRef(0)
  // onscroll
  useEffect(() => {
    const onscroll = () => {
      scroll.current =
        window.scrollY / (document.body.scrollHeight - window.innerHeight)
    }
    window.addEventListener('scroll', onscroll)
    return () => window.removeEventListener('scroll', onscroll)
  }, [])
  return scroll
}

export const UniformParams = () => {
  const { value: valueParam } = useParams()

  useEffect(() => {
    uniforms.value.value = valueParam
  }, [valueParam])
  return null
}

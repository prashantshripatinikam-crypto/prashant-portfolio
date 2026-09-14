import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Sculpture() {
  const group = useRef()
  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * .18, .035)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -state.pointer.x * .12, .035)
  })
  return (
    <Float speed={1.2} rotationIntensity={.25} floatIntensity={.4}>
      <group ref={group} rotation={[.35, -.5, -.15]}>
        <mesh>
          <torusKnotGeometry args={[1.22, .31, 180, 24, 2, 3]} />
          <meshPhysicalMaterial color="#d8d4cb" metalness={.92} roughness={.12} clearcoat={1} clearcoatRoughness={.08} />
        </mesh>
        <mesh scale={.62} rotation={[1.2, .3, .3]}>
          <torusGeometry args={[1.25, .08, 16, 100]} />
          <meshPhysicalMaterial color="#c9ff35" metalness={.35} roughness={.2} emissive="#243000" emissiveIntensity={.2} />
        </mesh>
      </group>
    </Float>
  )
}

export default function ChromeScene({ compact = false }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, compact ? 5.7 : 5], fov: 42 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
      <ambientLight intensity={.45} />
      <spotLight position={[4, 5, 5]} intensity={70} angle={.5} penumbra={1} />
      <spotLight position={[-5, -1, 3]} intensity={35} color="#a7ff42" />
      <Sculpture />
      <Environment preset="studio" />
    </Canvas>
  )
}

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Octahedron } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingShape = ({ position, color, shape = 'sphere' }: {
  position: [number, number, number];
  color: string;
  shape?: 'sphere' | 'box' | 'octahedron';
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const ShapeComponent = shape === 'box' ? Box : shape === 'octahedron' ? Octahedron : Sphere;

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ShapeComponent ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </ShapeComponent>
    </Float>
  );
};

const ThreeBackground = () => {
  const instagramColors = [
    '#405DE6', '#5851DB', '#833AB4', '#C13584', 
    '#E1306C', '#FD1D1D', '#F56040', '#FCAF45'
  ];

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#C13584" />
        
        {Array.from({ length: 12 }, (_, i) => (
          <FloatingShape
            key={i}
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20
            ]}
            color={instagramColors[i % instagramColors.length]}
            shape={['sphere', 'box', 'octahedron'][i % 3] as any}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
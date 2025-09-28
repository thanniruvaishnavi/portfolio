import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Cursor Sphere Component
const CursorSphere = ({ mousePosition, isHovering }: { mousePosition: { x: number; y: number }, isHovering: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, camera } = useThree();
  
  useFrame(() => {
    if (meshRef.current) {
      // Convert mouse position to 3D coordinates
      const x = (mousePosition.x / window.innerWidth) * 2 - 1;
      const y = -(mousePosition.y / window.innerHeight) * 2 + 1;
      
      // Convert to world coordinates
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      
      // Smooth following with slight delay
      meshRef.current.position.lerp(vector, 0.1);
      
      // Scale and glow effect on hover
      const targetScale = isHovering ? 1.5 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Gentle rotation
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.015, 32, 32]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color={isHovering ? "#FFB6C1" : "#ffffff"}
        metalness={0.9}
        roughness={0.05}
        distort={0.4}
        speed={3}
        transparent
        opacity={isHovering ? 0.95 : 0.8}
        emissive={isHovering ? "#FFB6C1" : "#ffffff"}
        emissiveIntensity={isHovering ? 0.3 : 0.1}
      />
    </Sphere>
  );
};

// Main Custom Cursor Component
const CustomCursor3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('[data-clickable]') ||
        target.closest('.group') || // Project cards
        target.closest('[href]') || // Any element with href
        target.classList.contains('hover\\:scale-105') || // Elements with hover effects
        target.closest('.hover\\:bg-portfolio-card-hover')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('[data-clickable]') ||
        target.closest('.group') || // Project cards
        target.closest('[href]') || // Any element with href
        target.classList.contains('hover\\:scale-105') || // Elements with hover effects
        target.closest('.hover\\:bg-portfolio-card-hover')
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50"
      style={{ 
        mixBlendMode: 'normal',
        filter: 'drop-shadow(0 0 10px rgba(255, 182, 193, 0.3))'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFB6C1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        <CursorSphere mousePosition={mousePosition} isHovering={isHovering} />
      </Canvas>
    </div>
  );
};

export default CustomCursor3D;
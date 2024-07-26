import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

export default function Experience() {
  return (
    <>
      <Perf position={'top-left'} />
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2} maxZoom={0.1} />
      <ambientLight intensity={2} />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={'yellow'} />
      </mesh>
    </>
  );
}

import './index.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './experience/Experience';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Canvas
    shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 100,
      position: [2, 2, 5],
    }}
  >
    <Experience />
  </Canvas>
);

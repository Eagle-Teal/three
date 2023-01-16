import { Canvas } from '@react-three/fiber';
import {Suspense} from 'react'
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import { OrbitControls, Stars } from '@react-three/drei';
function App() {
  return (
    <Canvas id='three-canvas-container'>
      <Suspense fallback={null}>
        <Stars/>
        <OrbitControls/>
        <AllRoutes />
      </Suspense>
    </Canvas>
  );
}

export default App;

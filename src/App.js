import { RouterProvider } from 'react-router-dom';
import router from './Routes/router/router';
import BirdsAnimation from './Component/Animations/BridsAnimation/BirdsAnimation';
import { Canvas } from '@react-three/fiber';
import FullWindowsAnimation from './Component/Animations/FullWindowsAnimation/FullWindowsAnimation';

function App() {
  return (
    <div className='bg-[#07060E] h-screen'>
      <RouterProvider
        router={router}
      ></RouterProvider>
      {/* <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <BirdsAnimation />
    </Canvas> */}
    <FullWindowsAnimation></FullWindowsAnimation>
    </div>
  );
}

export default App;

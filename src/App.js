import { RouterProvider } from 'react-router-dom';
import router from './Routes/router/router';
import './App.css';
import FullWindowsAnimation from './Component/Animations/FullWindowsAnimation/FullWindowsAnimation';

function App() {
  return (
    <div>
      <RouterProvider
        router={router}
      ></RouterProvider>
      <div className='absolute z-[-1]'>
        <FullWindowsAnimation></FullWindowsAnimation>
      </div>
    </div>
  );
}

export default App;

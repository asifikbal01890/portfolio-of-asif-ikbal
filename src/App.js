import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import FullWindowsAnimation from './Component/Animations/FullWindowsAnimation/FullWindowsAnimation';
import { Toaster } from 'react-hot-toast';
import NavBar from './Component/NavBar/NavBar';
import Main from "./Layout/Main";


function App() {


  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
      <div className='absolute z-[-1]'>
        <FullWindowsAnimation></FullWindowsAnimation>
      </div>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

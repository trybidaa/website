import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Waitlist from './pages/Waitlist';

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="font-steradian">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </div>
  );
}

export default App;

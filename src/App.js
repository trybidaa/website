import React from 'react';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <div className="bg-bidhaa-purple h-full"></div>
    </div>
  );
}

export default App;

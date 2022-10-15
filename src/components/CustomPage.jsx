import React from 'react';
import Footer from './footer/Footer';
import Navigation from './navigation/Navigation';

const CustomPage = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default CustomPage;

import React from 'react';
import Brainstorm from '../components/Brainstorm/Brainstorm';
import Goal from '../components/goal/Goal';
import Hero from '../components/Hero/Hero';
import Market from '../components/product/Market';
import ProductX from '../components/product/ProductX';
import WaitListForm from '../components/waitlist/WaitListForm';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Brainstorm />
      <Goal />
      <ProductX />
      <Market />
      <WaitListForm />
    </div>
  );
};

export default HomePage;

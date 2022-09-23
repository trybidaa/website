import React from 'react';
import Brainstorm from '../components/Brainstorm/Brainstorm';
import Goal from '../components/goal/Goal';
import Hero from '../components/Hero/Hero';
import Market from '../components/product/Market';
import ProductX from '../components/product/ProductX';
import Values from '../components/values/Values';
import WaitListForm from '../components/waitlist/WaitListForm';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Brainstorm />
      <Goal />
      <Values />
      <div className="py-16">
        <ProductX />
        <Market />
      </div>
      <WaitListForm />
    </div>
  );
};

export default HomePage;

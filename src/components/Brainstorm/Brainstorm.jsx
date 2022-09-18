import React from 'react';
import Rocket from '../../assets/images/brainstorm-rocket.png';
import { Button } from '../navigation/Navigation';

const Brainstorm = () => {
  return (
    <div className="px-8 grid grid-cols-2 gap-4">
      <div>
        <img className="h-[600px]" src={Rocket} alt="Brainstorm Rocket" />
      </div>
      <div className="flex px-20 flex-col items-start justify-center">
        <h2 className="text-bidhaa-blue text-5xl text-justify">
          The fastest way to brainstorm on your next product
        </h2>
        <p className="my-6 text-bidhaa-gray tracking-wide text-justify font-light">
          Bidhaa highlights digital products in Africa helping entrepreneurs
          create unique business designs & products for the right market.
        </p>
        <Button bgColor="bg-bidhaa-blue">
          <a href="#waitList">Get on board</a>
        </Button>
      </div>
    </div>
  );
};

export default Brainstorm;

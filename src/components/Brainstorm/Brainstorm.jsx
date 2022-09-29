import React from 'react';
import Rocket from '../../assets/images/rocket.svg';
import { Button } from '../navigation/Navigation';

const Brainstorm = () => {
  return (
    <div className="bg-black text-center grid place-items-center">
      <div className="px-8 max-w-5xl  md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img className="md:h-[400px]" src={Rocket} alt="Brainstorm Rocket" />
        </div>
        <div className="block py-4 md:py-0  md:flex md:px-20 md:flex-col md:items-start md:justify-center">
          <h2 className="text-white text-3xl md:text-3xl md:text-justify">
            The fastest way to brainstorm on your next product
          </h2>
          <p className="py-4 text-white tracking-wide text-justify font-light">
            Bidhaa highlights digital products in Africa helping entrepreneurs
            create unique business designs & products for the right market.
          </p>
          <Button bgColor="bg-bidhaa-purple">
            <a href="#waitList">Get on board</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Brainstorm;

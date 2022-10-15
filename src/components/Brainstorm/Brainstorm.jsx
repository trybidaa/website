import React from 'react';
import Rocket from '../../assets/images/rocket.svg';
import { CustomButton } from '../navigation/Navigation';

const Brainstorm = () => {
  return (
    <div className="bg-black text-center grid place-items-center">
      <div className="px-8 max-w-5xl  md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            data-aos="fade-up-right"
            className="md:h-[400px]"
            src={Rocket}
            alt="Brainstorm Rocket"
          />
        </div>
        <div className="block py-4 text-left md:py-0 md:flex md:px-10 md:flex-col md:items-start md:justify-center">
          <h2
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-white text-3xl md:text-3xl md:text-left"
          >
            The fastest way to brainstorm on your next product
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="300"
            className="py-4 text-white tracking-wide text-left  font-light"
          >
            Bidhaa highlights digital products in Africa helping entrepreneurs
            create unique business designs & products for the right market.
          </p>
          <CustomButton
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="200"
            bgColor="bg-bidhaa-purple"
          >
            <a href="#waitList">Get on board</a>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Brainstorm;

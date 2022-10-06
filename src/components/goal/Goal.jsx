import React from 'react';
import Globe from '../../assets/images/globe-light.svg';
import './style.scss';
const Goal = () => {
  return (
    <div className="px-8 flex justify-center items-center flex-col">
      <div className="md:w-[50%] ">
        <p
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="100"
          className="text-2xl md:text-4xl md:mx-20 my-8 text-center"
        >
          Our goal is to build an ecosystem for{' '}
          <span className="text-bidhaa-purple with-border">Africa-based</span>{' '}
          minds with a sense of business purpose
        </p>
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="pb-16 mx-8"
      >
        <img className="md:h-[400px]" src={Globe} alt="globe" />
      </div>
    </div>
  );
};

export default Goal;

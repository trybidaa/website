import React from 'react';
import Globe from '../../assets/images/globe-light.svg';

const Goal = () => {
  return (
    <div className="px-8 flex justify-center items-center flex-col">
      <div className="md:w-[50%] ">
        <p className="text-2xl md:text-4xl md:mx-20 my-8 text-center">
          Our goal is to build an ecosystem for{' '}
          <span className="text-bidhaa-purple">Africa-based</span> minds with a
          sense of business purpose
        </p>
      </div>
      <div className="pb-16 mx-8">
        <img className="md:h-[400px]" src={Globe} alt="globe" />
      </div>
    </div>
  );
};

export default Goal;

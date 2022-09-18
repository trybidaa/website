import React from 'react';
import Globe from '../../assets/images/globe-light.svg';

const Goal = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[50%] ">
        <p className="text-4xl mx-20 my-8 text-center">
          Our goal is to build an ecosystem for{' '}
          <span className="text-bidhaa-purple">Africa-based</span> minds with a
          sense of business purpose
        </p>
      </div>
      <div className="w-[500px] h-[500px]">
        <img src={Globe} alt="globe" />
      </div>
    </div>
  );
};

export default Goal;

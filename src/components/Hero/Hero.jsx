import React from 'react';
import Emoji from '../Emoji/Emoji';
import './styles.scss';
import Typewriter from 'typewriter-effect';
import Icon1 from '../../assets/images/small-1.png';
import Icon2 from '../../assets/images/small-2.png';
import Icon3 from '../../assets/images/small-3.png';
import Icon4 from '../../assets/images/small-4.png';

const Hero = () => {
  return (
    <div className="hero h-screen px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center relative justify-center w-full h-full">
        <div className="hero__content max-w-3xl w-full relative  h-[80%] grid place-content-center">
          <h1 className="hero__title  min-h-[80px] md:min-h-[130px]  block text-2xl md:text-5xl text-center font-light">
            <Emoji aria-label="waving-hand" symbol="👋" label="waving hand" />{' '}
            Hey,
            <div>
              <Typewriter
                options={{
                  wrapperClassName: 'hero__title__typewriter',
                  strings: ['Techpreneur', 'Student', 'Product Manager'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p className="text-bidhaa-gray py-4 md:text-xl text-center">
            Ideate your next Africa-based digital product to live with Bidhaa
          </p>
          <img
            className="absolute top-10 md:top-20 left-10 md:left-20 h-20 w-20"
            src={Icon1}
            alt="icon-1"
          />
          <img
            className="absolute top-10 md:top-20 right-10 md:right-20 h-20 w-20"
            src={Icon2}
            alt="icon-2"
          />
          <img
            className="absolute bottom-10 md:bottom-20 left-10 md:left-20 h-20 w-20"
            src={Icon3}
            alt="icon-3"
          />
          <img
            className="absolute bottom-10 md:bottom-20 right-10 md:right-20 h-20 w-20"
            src={Icon4}
            alt="icon-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

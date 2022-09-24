import React from 'react';
import WaitListForm from '../components/waitlist/WaitListForm';

const About = () => {
  return (
    <div className="bg-black text-bidhaa-gray-text min-h-screen pt-12 md:py-8">
      <div className="heading text-center grid place-items-center md:text-2xl mt-20 md:mt-32">
        <div className="w-full md:max-w-3xl px-4 md:px-12 tracking-wide">
          <p className="px-0 md:px-12 md:tracking-wide">
            Bidhaa is a cluster platform sharing “users challenges” & “tech
            products” in Africa.
          </p>
          <p className="py-8 md:py-16">
            Bidhaa in Swahili means Product, we are on a mission ‘to give
            Africans the data & platform they need to innovate, brainstorm &
            collaborate’.
          </p>
        </div>
      </div>
      <div>
        <div className="block px-8 md:grid grid-cols-3 grid-row-2 ">
          <div className="row-span-2 container col-span-1 grid ">
            <h2 className="text-3xl md:px-20 md:mt-[10rem]">
              Our <br className="hidden md:block" /> values
            </h2>
          </div>
          <div className="md:border-l-[1px] col-span-2 border-l-[#BBBBBB]">
            <div className="md:border-b-[1px] grid place-items-center pt-8 md:py-20 md:text-center md:border-b-[#BBBBBB]">
              <h4 className="text-3xl">Innovation & Creativity</h4>
              <p className="text-lg max-w-md my-4">
                We build with a nature to innovate and take responsibility for
                our actions.
              </p>
            </div>
            <div className="md:flex justify-between md:text-center md:border-b-[#BBBBBB]">
              <div className="flex-1  md:pt-[10rem] md:pb-[15rem]  md:border-r-[1px] md:border-r-[#BBBBBB]">
                <h4 className="text-3xl">User Obsession</h4>
                <div className="md:text-center flex items-center justify-center">
                  <p className="text-lg md:text-md max-w-sm my-4">
                    Meeting the needs of our users is an act we value dearly.
                  </p>
                </div>
              </div>
              <div className="flex-1 md:pt-[10rem] md:pb-[15rem] ">
                <h4 className="text-3xl">Simplicity & Empathy</h4>
                <div className="md:text-center flex items-center justify-center">
                  <p className="text-lg md:text-md  max-w-sm my-4">
                    We create simple but powerful experiences. We create from an
                    understanding of our customers' experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="waitList">
        <WaitListForm />
      </div>
    </div>
  );
};

export default About;

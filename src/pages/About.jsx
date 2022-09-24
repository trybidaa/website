import React from 'react';
import WaitListForm from '../components/waitlist/WaitListForm';

const About = () => {
  return (
    <div className="bg-black text-bidhaa-gray-text min-h-screen py-8">
      <div className="heading  text-center grid place-items-center text-2xl mt-32">
        <div className="max-w-3xl px-12 tracking-wide">
          <p className="px-12 tracking-wide">
            Bidhaa is a cluster platform sharing “users challenges” & “tech
            products” in Africa.
          </p>
          <p className="py-16">
            Bidhaa in Swahili means Product, we are on a mission ‘to give
            Africans the data & platform they need to innovate, brainstorm &
            collaborate’.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 grid-row-2 ">
          <div className="row-span-2 container col-span-1 grid ">
            <h2 className="text-3xl px-20 mt-[10rem]">
              Our <br /> values
            </h2>
          </div>
          <div className="border-l-[1px] col-span-2 border-l-[#BBBBBB]">
            <div className="border-b-[1px]  grid place-items-center py-20 text-center border-b-[#BBBBBB]">
              <h4 className="text-3xl">Innovation & Creativity</h4>
              <p className="text-lg max-w-md my-4">
                We build with a nature to innovate and take responsibility for
                our actions.
              </p>
            </div>
            <div className="flex justify-between text-center border-b-[#BBBBBB]">
              <div className="flex-1  pt-[10rem] pb-[20rem]  border-r-[1px] border-r-[#BBBBBB]">
                <h4 className="text-3xl">User Obsession</h4>
                <div className="text-center flex items-center justify-center">
                  <p className="text-md max-w-sm text-center my-4">
                    Meeting the needs of our users is an act we value dearly.
                  </p>
                </div>
              </div>
              <div className="flex-1  pt-[10rem] pb-[20rem]">
                <h4 className="text-3xl">Simplicity & Empathy</h4>
                <div className="text-center flex items-center justify-center">
                  <p className="text-md  max-w-sm my-4">
                    We create simple but powerful experiences. We create from an
                    understanding of our customers' experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaitListForm />
    </div>
  );
};

export default About;

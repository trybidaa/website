import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

export const CustomButton = ({ children, bgColor, ...prop }) => {
  return (
    <button
      className={`md:block z-30 px-4 md:px-8 text-white py-3 rounded-md  ${bgColor} ${
        prop.otherstyle && prop.otherstyle
      }`}
      {...prop}
    >
      {children}
    </button>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  // sticky top-0 z-50
  return (
    <div className="max-w-screen  text-black">
      <nav className="w-screen fixed py-2 z-50  bg-white px-4 md:px-12">
        <div>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img className="h-12 w-24" src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/about" className="px-3 py-2 rounded-md text-sm">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <CustomButton bgColor="bg-bidhaa-purple">
                <Link to="/waitlist">Join Waitlist</Link>
              </CustomButton>
            </div>
            <div className=" md:hidden">
              <button
                className="block h-6 w-6  text-bidhaa-blue"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>

                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  // <p>Close</p>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden bg-bidhaa-purple " id="mobile-menu">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  to="/about"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <CustomButton bgColor="bg-white text-bidhaa-purple">
                  <Link
                    to="/waitlist"
                    className=" text-black block px-3 rounded-md text-base font-medium"
                  >
                    Join Wishlist
                  </Link>
                </CustomButton>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navigation;

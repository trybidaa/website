import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

export const Button = ({ children, bgColor, ...prop }) => {
  return (
    <button
      className={`md:block px-8 text-white py-3 rounded-md  ${bgColor} ${
        prop.classname && prop.classname
      }`}
      {...prop}
    >
      {children}
    </button>
  );
};
<Link to="/">
  <img className="h-12 w-24" src={Logo} alt="Logo" />
</Link>;
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4">
      <nav>
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

            <div>
              <Button bgColor="bg-bidhaa-purple">
                <a href="#waitList">Join Waitlist</a>
              </Button>
              {/* <button className="hidden md:block px-8 text-white py-3 rounded-md bg-bidhaa-purple"></button> */}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/about"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navigation;

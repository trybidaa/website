import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import Deckdash from '../../assets/images/deckdash.svg';
import Facebook from '../../assets/images/facebook.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Instagram from '../../assets/images/instagram.svg';
import Twitter from '../../assets/images/twitter.svg';

const Footer = () => {
  // create a function to navigate to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="px-8 md:px-12 py-12 ">
      <div className="">
        <div className="pointer-cursor cursor-pointer" onClick={scrollToTop}>
          <img className="h-12 w-24" src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="my-6 md:flex justify-between items-center">
        <div className="mb-4 md:mb-0 md:flex gap-8">
          <div className="mb-4 md:mb-0">
            <h4 className="text-bidhaa-blue font-bold pb-2">Company</h4>
            <h4 className="text-bidhaa-gray font-light ">
              <Link
                className="text-bidhaa-gray font-light  transition ease-in-out hover:scale-[1.2] hover:text-bidhaa-purple active:text-bidhaa-purple"
                to="/about"
              >
                About
              </Link>
            </h4>
          </div>

          <div>
            <h4 className="text-bidhaa-blue font-bold pb-2">Contact</h4>
            <h4>
              <a
                className="text-bidhaa-gray font-light  transition ease-in-out hover:scale-[1.2] hover:text-bidhaa-purple active:text-bidhaa-purple"
                href="mailto:hello@trybidhaa.com"
              >
                hello@trybidhaa.com
              </a>
            </h4>
          </div>
        </div>
        <div>
          <h4 className="text-bidhaa-blue font-bold pb-2">Connect with us</h4>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/trybidhaa">
              <img className="h-6 w-6" src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/trybidhaa">
              <img className="h-6 w-6" src={Facebook} alt="Facebook" />
            </a>{' '}
            <a href="https://twitter.com/trybidhaa">
              <img className="h-6 w-6" src={Twitter} alt="Twitter" />
            </a>{' '}
            <a href="https://www.linkedin.com/company/trybidhaa/">
              <img className="h-6 w-6" src={Linkedin} alt="Linkedin" />
            </a>{' '}
          </div>
        </div>
      </div>
      <div className="flex items-baseline justify-between text-[#666666]">
        <p>&copy; Copyright {new Date().getFullYear()} Bidhaa Ltd.</p>
        <div>
          <a href="https://twitter.com/DeckDash">
            <img className="" src={Deckdash} alt="Deckdash" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

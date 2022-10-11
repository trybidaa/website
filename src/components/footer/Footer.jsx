import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import Deckdash from '../../assets/images/deckdash.svg';
import Faceebook from '../../assets/images/facebook.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Instagram from '../../assets/images/instagram.svg';
import Twitter from '../../assets/images/twitter.svg';

const Footer = () => {
  return (
    <div className="px-8 md:px-12 py-12 ">
      <div className="">
        <Link to="/">
          <img className="h-12 w-24" src={Logo} alt="Logo" />
        </Link>
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
            <a href="faceboo.com">
              <img className="h-6 w-6" src={Instagram} alt="Instagram" />
            </a>
            <a href="faceboo.com">
              <img className="h-6 w-6" src={Faceebook} alt="Facebook" />
            </a>{' '}
            <a href="faceboo.com">
              <img className="h-6 w-6" src={Twitter} alt="Twitter" />
            </a>{' '}
            <a href="faceboo.com">
              <img className="h-6 w-6" src={Linkedin} alt="Linkedin" />
            </a>{' '}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[#666666]">
        <p>© Copyright {new Date().getFullYear()} Bidhaa Ltd.</p>
        <div>
          <img className="" src={Deckdash} alt="Deckdash" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

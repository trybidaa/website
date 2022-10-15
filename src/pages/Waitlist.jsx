import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import Celebrate from '../assets/images/hurray.svg';
import Logo from '../assets/images/logo.svg';
import { CustomButton } from '../components/navigation/Navigation';
import { Link } from 'react-router-dom';

const Waitlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialFormValues = {
    email: '',
    firstName: '',
    lastName: '',
  };

  const [formState, setFormState] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-screen bg-white grid place-items-center">
        <div>
          <div className="text-center flex justify-center items-center flex-col">
            <div className="h-[70px] w-[130px]">
              <img className="h-full w-full" src={Logo} alt="..." />
            </div>
            <p>Be the first to know when we launch</p>
            <p>Please fill this form below</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2 my-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="fistName"
                >
                  First Name
                </label>
                <input
                  onChange={handleChange}
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="block w-full rounded-md border-gray-300 pl-7 pr-12  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleChange}
                type="email"
                name="email"
                value=""
              />
            </div>
          </form>
          <button
            className="text-red bg-teal-700 px-6 py-4 "
            onClick={() => setIsOpen(true)}
          >
            Click to Open Modal
          </button>
        </div>
      </div>

      <Modal handleClose={() => setIsOpen(false)} open={isOpen}>
        <div className="grid place-items-center py-8">
          <img src={Celebrate} alt="..." />
          <h3 className="py-2 text-bidhaa-purple font-bold">Thank you </h3>

          <p className="py-2">We will Notify You</p>
          <CustomButton bgColor="bg-bidhaa-purple">
            <Link to="/">Back home</Link>
          </CustomButton>
        </div>
      </Modal>
    </>
  );
};

export default Waitlist;

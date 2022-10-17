import { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Link } from 'react-router-dom';
import Celebrate from '../assets/images/hurray.svg';
import Logo from '../assets/images/logo.svg';
import Modal from '../components/Modal/Modal';
import { CustomButton } from '../components/navigation/Navigation';
import { url } from '../components/waitlist/WaitListForm';

const Waitlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-screen bg-white grid place-items-center">
        <div>
          <div className="text-center flex justify-center items-center flex-col">
            <div className="h-[70px] w-[130px]">
              <img className="h-full w-full" src={Logo} alt="..." />
            </div>
            <h3 className="py-2 text-bidhaa-purple font-bold">
              Be the first to know when we launch
            </h3>
            <p>Please fill this form below</p>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <WaitListForm
                  onValidated={(formData) => subscribe(formData)}
                  status={status}
                  message={message}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              )}
            />
          </div>
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

const WaitListForm = ({ isOpen, setIsOpen, status, message, onValidated }) => {
  const initialFormValues = {
    email: '',
    firstName: '',
    lastName: '',
  };

  const [formState, setFormState] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      onValidated({
        EMAIL: formState.email,
        MERGE0: formState.email,
        MERGE1: formState.firstName,
        MERGE2: formState.lastName,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setFormState(initialFormValues);
      setIsOpen(!isOpen);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 md:my-4">
        <div>
          <label
            className="block text-left  text-sm font-medium text-gray-700"
            htmlFor="fistName"
            aria-label="firstName"
          >
            First Name
          </label>
          <input
            onChange={handleChange}
            id="firstName"
            type="text"
            name="firstName"
            required
            aria-required="true"
            value={formState.firstName}
            className="w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="my-2 md:my-0">
          <label
            className="block text-left  text-sm font-medium text-gray-700"
            htmlFor="lastName"
            aria-label="lastName"
          >
            Last Name
          </label>
          <input
            className="block w-full rounded-md border-gray-300 pl-7 pr-12  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={handleChange}
            value={formState.lastName}
            aria-required="true"
            type="text"
            name="lastName"
            required
          />
        </div>
      </div>

      <div>
        <label
          className="block text-left text-sm font-medium text-gray-700"
          htmlFor="email"
          aria-label="email"
        >
          Email
        </label>
        <input
          className="block w-full rounded-md border-gray-300 pl-7 pr-12  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={handleChange}
          type="email"
          name="email"
          value={formState.email}
          aria-required="true"
          required
        />
      </div>
      <div className="mx-8 my-4">
        <CustomButton bgColor="bg-bidhaa-purple" otherstyle="w-full">
          Submit
        </CustomButton>
      </div>
    </form>
  );
};

export default Waitlist;

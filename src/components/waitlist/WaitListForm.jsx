import React from 'react';
import { Button } from '../navigation/Navigation';

const WaitListForm = () => {
  const formValues = {
    email: '',
  };

  const [form, setForm] = React.useState(formValues);
  const handleFormChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div id="wait-list" className="md:px-32 ">
      <div className="py-8 px-8 bg-bidhaa-purple mx-auto text-center">
        <div className="text-center grid place-items-center">
          <p className="text-white text-2xl md:text-4xl md:max-w-[55%] tracking-normal md:tracking-wide">
            Be the first to know about Bidhaa's next move'
          </p>
        </div>
        <div className="grid place-items-center my-4">
          <form
            onSubmit={handleSubmit}
            className="gap-4 flex items-center justify-center md:w-[50%]"
          >
            <input
              onChange={handleFormChange}
              name="email"
              value={form.email}
              type="text"
              placeholder="Your Email"
              required
              className="w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <Button
              bgColor={'bg-bidhaa-gray-light'}
              otherstyle="text-black py-2"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitListForm;

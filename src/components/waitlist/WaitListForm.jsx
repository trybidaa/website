import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Button } from '../navigation/Navigation';

const WaitListForm = () => {
  const url = `https://trybidhaa.us8.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <div id="wait-list" className="md:px-32 ">
      <div className="py-8 md:px-8 bg-bidhaa-purple mx-auto text-center">
        <div className="text-center grid place-items-center">
          <p className="text-white px-8 text-2xl md:text-4xl md:max-w-md tracking-normal md:tracking-wide">
            Be the first to know about Bidhaa's next move'
          </p>
        </div>
        <div className="mx-4 md:mx-[20%]">
          <div className="my-4">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomForm = ({ status, message, onValidated }) => {
  const formValues = {
    email: '',
  };

  const [form, setForm] = React.useState(formValues);
  const handleFormChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onValidated({
      EMAIL: form.email,
      MERGE0: form.email,
    });

    setTimeout(() => {
      setForm(formValues);
    }, [3000]);
  };
  return (
    <div>
      {status === 'sending' && <div>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && <div className="text-white">Subscribed !</div>}
      <form
        onSubmit={handleSubmit}
        className="gap-1 md:gap-4 flex items-center justify-center"
      >
        <input
          onChange={handleFormChange}
          name="email"
          value={form.email}
          type="text"
          placeholder="Your Email"
          required
          className="w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-3 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <Button bgColor={'bg-bidhaa-gray-light'} otherstyle="text-black py-2">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default WaitListForm;

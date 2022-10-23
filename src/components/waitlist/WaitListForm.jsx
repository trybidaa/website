import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

export const url = `https://trybidhaa.us8.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

const SubscriptionForm = () => {
  return (
    <div id="wait-list" className="md:px-32 my-24">
      <div className="py-8 md:px-8 bg-bidhaa-purple mx-auto text-center">
        <div className="text-center grid place-items-center">
          <p className="text-white px-8 text-2xl md:text-[32px] md:leading-9 md:max-w-md tracking-normal md:tracking-wide">
            Be the first to know about Bidhaa's next move'
          </p>
        </div>
        <div className="grid place-items-center">
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
    fullName: '',
  };

  const [form, setForm] = React.useState(formValues);

  const handleFormChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      onValidated({
        EMAIL: form.email,
        MERGE0: form.email,
        MERGE1: form.fullName.split(' ')[0],
        MERGE2: form.fullName.split(' ')[1],
      });
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setForm(formValues);
      }, [3000]);
    }
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
      <form onSubmit={handleSubmit} className="grid place-items-center">
        <div className="block md:flex gap-4 items-center mb-2">
          <div className="mb-4 md:m-0">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="fistName"
              aria-label="firstName"
            >
              <input
                onChange={handleFormChange}
                id="firstName"
                type="text"
                name="fullName"
                required
                aria-required="true"
                placeholder="Full Name"
                value={form.fullName}
                className="w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
              aria-label="email"
            >
              <input
                onChange={handleFormChange}
                name="email"
                id="email"
                value={form.email}
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <button className="md:block mt-4 md:mt-0  px-4 md:px-8 text-black bg-bidhaa-gray-light  py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bidhaa-purple': '#7400B8',
        'bidhaa-gray': '#444444',
        'bidhaa-blue': '#10002B',
        'bidhaa-gray-light': '#FAFAFA',
        'bidhaa-gray-text': '#BBBBBB',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

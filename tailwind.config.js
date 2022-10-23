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
        'bidhaa-green': '#80FFDB',
      },
      fontFamily: {
        steradian: ['steradian-normal', 'sans-serif'],
        'steradian-light': ['steradian-light', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

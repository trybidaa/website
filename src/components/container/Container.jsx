import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-14 my-8">
      {children}
    </div>
  );
};

export default Container;

import React from 'react';
import Container from '../container/Container';
import Desk from '../../assets/images/desk.png';

const ProductX = () => {
  return (
    <Container>
      <div>
        <img src={Desk} alt="desk" />
      </div>
      <div className="font-light px-20 py-10">
        <h2 className="text-4xl font-semibold">ProductX</h2>
        <div className="py-8">
          <p className="py-4">
            The Product explore feature simply allows you to make searches
            across available industries and countries for various
            technology-inclined digital products. It offers product information
            on more than 500 digital products across Africa.
          </p>
          <p className="py-4">
            You’d have access to various metrics focused on your searches from
            the founding teams, to related products, their business models &
            more.
          </p>
          <p>We are building the web app with this feature in place.</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductX;

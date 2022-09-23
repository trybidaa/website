import React from 'react';
import Container from '../container/Container';
import Chart from '../../assets/images/chart.png';
import { Button } from '../navigation/Navigation';

const Market = () => {
  return (
    <Container reverse={true}>
      <div className="font-light md:px-20 py-10 order-2 md:order-1">
        <h2 className="text-4xl font-semibold">Bidhaa Market</h2>
        <div className="py-8">
          <p className="py-4">
            Bidhaa market allows you to access market challenges (seen as market
            opportunities) as posted by various users.
          </p>
          <p className="py-4">
            With the information provided, you can choose to head on further
            research or join existing open conversations and teams addressing
            sighted market opportunities or tech product ideas, based on your
            interest or expertise.
          </p>

          <Button bgColor="bg-bidhaa-blue">
            <a href="#waitList">Join Waitlist</a>
          </Button>
        </div>
      </div>
      <div className="order-2 md:order-1">
        <img src={Chart} alt="desk" />
      </div>
    </Container>
  );
};

export default Market;

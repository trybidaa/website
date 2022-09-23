import React from 'react';
import Card from '../card/Card';
import Growth from '../../assets/images/growing.svg';
import Product from '../../assets/images/product.svg';
import Community from '../../assets/images/community.svg';

const cardValues = [
  {
    id: 1,
    image: Community,
    heading: 'Product Redundancy',
    info: 'Too many unintentional product copycats solving the same problems',
  },
  {
    id: 2,
    image: Growth,
    heading: 'Growing Unidentified Users',
    info: 'Lots of challenges to be solved by product teams',
  },
  {
    id: 1,
    image: Product,
    heading: 'Poor Community',
    info: 'Limited innovation and support of sectors & their players',
  },
];

const Values = () => {
  return (
    <div className="px-8 md:px-20 h-full py-4 md:py-24 bg-black">
      <div className="container  py-4 md:px-4 grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1  py-4 md:py-16">
          <h2 className="text-white text-3xl md:text-5xl tracking-wider">
            3 barriers to initial product{' '}
            <span className="text-bidhaa-purple underline underline-offset-1">
              Growth
            </span>{' '}
            across sectors.
          </h2>
        </div>
        <div className="col-span-1  md:col-span-2 ">
          <div className="grid md:mx-8 md:grid-cols-2 gap-8 justify-around">
            {cardValues.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;

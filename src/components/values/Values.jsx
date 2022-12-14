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
    id: 3,
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
            <span className="text-[#80FFD8] before:w-[100%] before:md:w-[170px] inline-block relative before:absolute before:bg-center before:h-[20px] before:-bottom-2 test">
              {' '}
              Growth{' '}
            </span>{' '}
            across sectors.
          </h2>
        </div>
        <div className="col-span-1  md:col-span-2 ">
          <div className="grid md:mx-8 md:grid-cols-2 gap-8 justify-around">
            {cardValues.map((card, idx) => (
              <Card
                data-aos={idx % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'}
                key={card.id}
                card={card}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;

// ction = 'https://trybidhaa.us8.list-manage.com/subscribe/post';
// <input type="hidden" name="u" value="4cec82a7d62bed175dddae05c">
// <input type="hidden" name="id" value="5a42fc8327"></input>

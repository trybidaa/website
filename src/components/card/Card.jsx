import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="bg-white transition-colors px-4 py-8 rounded-md hover:bg-[#80FFD8]">
      <div>
        <img src={card.image} alt="" />
      </div>
      <div>
        <h3 className="text-2xl my-2">{card.heading}</h3>

        <p className="font-light py-2">{card.info}</p>
      </div>
    </div>
  );
};

export default Card;

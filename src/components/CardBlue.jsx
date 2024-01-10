import React from 'react';
import help from '../assets/help.svg';
const CardBlue = ({ title, amount, orders, date }) => {
  return (
    <div className="bg-primaryBlue  text-white flex flex-col shadow rounded-lg flex-1 cursor-pointer">
      <div className="flex gap-2 items-center text-sm font-extralight p-4">
        <span> {title}</span> <img src={help} />
      </div>
      <div className="flex justify-between items-center p-4">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-medium">
          &#8377; {amount}
        </h1>
        <span className="text-xs underline font-light">
          {orders} orders {'>'}
        </span>
      </div>
      <div className="flex p-4 text-[10px] md:text-sm rounded-lg font-extralight bg-secondaryBlue justify-between">
        <div>Next payout date:</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default CardBlue;

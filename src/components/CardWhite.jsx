import React from 'react';
import help from '../assets/help-black.svg';
const CardWhite = ({ title, amount, orders }) => {
  return (
    <div className="bg-white  text-black flex flex-col shadow rounded-lg flex-1 cursor-pointer">
      <div className="flex gap-2 items-center text-sm font-extralight p-4">
        <span> {title}</span> <img src={help} className="fill-black" />
      </div>
      <div className="flex justify-between items-center p-4">
        <h1 className="lg:text-3xl text-lg font-medium">&#8377; {amount}</h1>
        {orders && (
          <span className="text-xs underline font-light">
            {orders} orders {'>'}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardWhite;

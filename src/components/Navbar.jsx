import React from 'react';
import help from '../assets/help-black.svg';
import search from '../assets/search.svg';
import mic from '../assets/mic.svg';
import menu from '../assets/menu.svg';
const Navbar = () => {
  return (
    <nav className="bg-white shadow mb-12 p-4">
      <div className=" mx-auto max-w-[1400px] flex justify-between ">
        <div className="flex gap-4 items-center">
          <h1 className="font-bold text-xl cursor-pointer">Payouts</h1>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={help} />
            <span className="text-xs">How it works</span>
          </div>
        </div>
        <div className="bg-[#F2F2F2] md:flex hidden gap-2 w-fit p-2 rounded-md ">
          <img src={search} className="w-4" />
          <input
            type="text"
            placeholder="Search features, tutorials, etc."
            className="focus:outline-none bg-[#F2F2F2] placeholder:text-sm placeholder:font-light w-10 md:w-fit "
          />
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-[#E6E6E6] rounded-full p-2">
            <img src={mic} className="w-4" />
          </button>
          <button>
            <img src={menu} className="w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import '../index.css';
import React from "react";
import logo from "../assets/logo.png";
import downWhite from "../assets/down-white.svg";
import wallet from "../assets/wallet.svg";
const SideBar = () => {
  const navData = [
    "Home",
    "Products",
    "Delivery",
    "Marketing",
    "Analytics",
    "Payouts",
    "Discounts",
    "Audience",
    "Appearance",
    "Plugins",
  ];
  return (
    <div className="md:flex flex-col gap-8 hidden bg-navBg text-white py-4 px-8 sidebarHight">
      <div className="flex gap-4">
        <button className="w-16">
          <img
            src={logo}
            className=" w-full object-center aspect-square border-[1px] border-none  overflow-hidden rounded"
          />
        </button>

        <div className="flex flex-col  gap-1">
          <span className="text-base">Nishyan</span>
          <a href="#" className="underline text-xs font-extralight">
            Visit Store
          </a>
        </div>
        <button>
          <img src={downWhite} className="w-6" />
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {navData.map((element) => {
          return (
            <li
              key={element}
              className="flex gap-2 cursor-pointer hover:underline"
            >
              <img src={`/src/assets/${element.toLowerCase()}.svg`} />
              <span className="font-extralight text-sm">{element}</span>
            </li>
          );
        })}
      </ul>

      <button className="bg-navBgLight rounded mt-72 flex py-4 px-2 items-center gap-2 justify-between">
        <div className="bg-white bg-opacity-20 p-2 rounded">
          <img src={wallet} />
        </div>
        <div className="flex flex-col text-xs gap-2 mt-auto">
          <span className="opacity-85 font-thin">Available credits</span>
          <div>222.10</div>
        </div>
      </button>
    </div>
  );
};

export default SideBar;

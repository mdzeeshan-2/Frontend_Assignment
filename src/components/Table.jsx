import React from 'react';

import search from '../assets/search.svg';
import sorting from '../assets/sorting.svg';
import download from '../assets/download.svg';

const Table = () => {
  return (
    <div className="p-5  bg-white shadow rounded flex flex-col gap-3">
      <div className="flex items-center gap-2 text-sm ">
        <div className="bg-white flex gap-2 border-gray-100 border-2 w-fit p-2 rounded-md ">
          <img src={search} className="w-4" />
          <input
            type="text"
            placeholder="Order ID or transaction ID"
            className="focus:outline-none placeholder:text-sm placeholder:font-light w-10 md:w-fit "
          />
        </div>

        <div className="cursor-pointer p-2 border-gray-100 border-2 flex gap-1 items-center ml-auto">
          <span>Sort</span>
          <img src={sorting} className="w-4" />
        </div>

        <div className="cursor-pointer p-2 border-gray-100 border-2">
          <img src={download} className="w-4" />
        </div>
      </div>
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="bg-[#F2F2F2]  ">
            <tr>
              <th className="p-3 text-sm   font-medium tracking-wide text-left">
                Order ID
              </th>
              <th className="p-3 text-sm  font-medium tracking-wide text-left">
                Status
              </th>
              <th className="p-3 text-sm  font-medium tracking-wide text-left">
                Transaction ID
              </th>
              <th className=" p-3 text-sm font-medium tracking-wide text-left">
                Refund Date
              </th>
              <th className=" p-3 text-sm  font-medium tracking-wide text-left">
                Order Amount
              </th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white ">
            <tr>
              <td className="p-3 text-sm text-primaryBlue font-semibold whitespace-nowrap ">
                <a href="#" className="hover:underline">
                  #281209
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center">
                <div className="rounded-full bg-green-600 h-2 w-2"></div>
                <div>Successful</div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                131634495747
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Today, 08:45 PM
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₹1,125.00
              </td>
            </tr>

            <tr>
              <td className="p-3 text-sm text-primaryBlue font-semibold whitespace-nowrap ">
                <a href="#" className="hover:underline">
                  #281209
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center">
                <div className="rounded-full bg-gray-600 h-2 w-2"></div>
                <div>Processing</div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                131634495747
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Yesterday, 3:00 PM
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₹1,125.00
              </td>
            </tr>

            <tr>
              <td className="p-3 text-sm text-primaryBlue font-semibold whitespace-nowrap ">
                <a href="#" className="hover:underline">
                  #281209
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center">
                <div className="rounded-full bg-green-600 h-2 w-2"></div>
                <div>Successful</div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                131634495747
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                12 Jul 2023, 03:00 PM
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₹1,125.00
              </td>
            </tr>

            <tr>
              <td className="p-3 text-sm text-primaryBlue font-semibold whitespace-nowrap ">
                <a href="#" className="hover:underline">
                  #281209
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center">
                <div className="rounded-full bg-green-600 h-2 w-2"></div>
                <div>Successful</div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                131634495747
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                12 Jul 2023, 03:00 PM
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₹1,125.00
              </td>
            </tr>

            <tr>
              <td className="p-3 text-sm text-primaryBlue font-semibold whitespace-nowrap ">
                <a href="#" className="hover:underline">
                  #281209
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center">
                <div className="rounded-full bg-green-600 h-2 w-2"></div>
                <div>Successful</div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                131634495747
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                12 Jul 2023, 03:00 PM
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

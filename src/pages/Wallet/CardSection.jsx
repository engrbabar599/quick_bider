import React from 'react';

const CardSection = () => {


  return (
    <div className="bg-sky-100 shadow-md rounded p-4">
      <h2 className="text-xl font-semibold mb-4">My Card</h2>
      <div className="" >
        <div className="flex justify-between">
          <div className="p-4 bg-custom-blue text-white rounded-xl w-full shadow-lg h-[30vh]">
            <p>Universal Card</p>
            <p className="text-lg">5214 4321 5678 4345</p>
            <div className="flex justify-between">
              <p>Expiry: 08/23</p>
              <p>CVV: ***</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <h3 className="text-sm font-normal  text-[#B8B8B8]">Total Balance</h3>
        <p className="text-4xl font-semibold text-gray-1">$12,500.00</p>
      </div>
      <div className="mt-4 ">
        <div className="shadow bg-white p-2 rounded-lg">
          <h3 className="text-lg font-semibold">Recent Transaction</h3>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p>Bid auction Bid</p>
                <p>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500">+200</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p>Bid auction Bid</p>
                <p>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500">+200</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p>Bid auction Bid</p>
                <p>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500">+200</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p>Bid auction Bid</p>
                <p>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500">+200</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p>Bid auction Bid</p>
                <p>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500">+200</span>
              </p>
            </div>
          </div>
          <div className=" text-center py-3">
            <button className="text-custom-blue cursor-pointer">See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

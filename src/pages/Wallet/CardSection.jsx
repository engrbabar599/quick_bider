import React from 'react';
import cardBar from "../../assets/images/cardBar.png"
import ornament from "../../assets/images/Ornament.png"
const CardSection = () => {


  return (
    <div className="bg-sky-100 shadow-md rounded p-4">
      <h2 className="text-xl font-semibold mb-4">My Card</h2>
      <div className="" >
        <div className="flex flex-col justify-between items-center">
          <div className="p-4 flex flex-col justify-between relative bg-custom-blue text-white rounded-xl w-full shadow-lg h-[30vh] ">
            <img src={cardBar} alt="" className='absolute top-0 right-0' />
            <div className='flex justify-between items-center'>
            <p className=' z-20 text-lg font-medium'>Universal Card</p>
            <button className='bg-[#d3d9fd] text-black px-4 py-1.5 rounded-lg text-lg font-normal'>Edit</button>
            </div>
            <div>
            <p className="text-xl font-semibold">5214 4321 5678 4345</p>
            </div>
            <div className='flex items-center justify-between'>
            <div className="flex items-center gap-7">
              <p className='text-xs'>Nasyiya Ulfa</p>
              <p className='text-xs'>12/24</p>
            </div>
            <div>
              <img src={ornament} alt="" />
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <h3 className="text-sm font-normal  text-[#B8B8B8] py-3">Total Balance</h3>
        <p className="text-3xl font-semibold text-gray-1 py-3">$12,500.00</p>
      </div>
      <div className="mt-4 ">
        <div className="shadow bg-white py-6 px-4 rounded-lg">
          <h3 className="text-lx font-medium">Recent Transaction</h3>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className=' font-medium'>Bid auction Bid</p>
                <p className='text-sm font-medium opacity-60'>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500 font-medium">+200</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className=' font-medium'>Bid auction Bid</p>
                <p className='text-sm font-medium opacity-65'>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500 font-medium">+200</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className=' font-medium'>Bid auction Bid</p>
                <p className='text-sm font-medium opacity-65'>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500 font-medium">+200</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className=' font-medium'>Bid auction Bid</p>
                <p className='text-sm font-medium opacity-65'>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500 font-medium">+200</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className=' font-medium'>Bid auction Bid</p>
                <p className='text-sm font-medium opacity-65'>12/34/2555</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-green-500 font-medium">+200</span>
              </p>
            </div>
          </div>
          <div className=" text-center py-3">
            <button className="text-custom-blue font-semibold cursor-pointer">See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

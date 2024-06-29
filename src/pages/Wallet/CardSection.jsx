import React from 'react';
import cardBar from "../../assets/images/cardBar.png"
import ornament from "../../assets/images/Ornament.png"
const CardSection = () => {


  return (
    <div className="bg-[#eff3ff] bg-opacity-10 shadow-md rounded-xl px-4 py-3">
      <div className='w-full flex flex-row justify-between items-center py-4'>
        <h2 className="md:text-[28px] text-base font-semibold font-poppins">My Card</h2>
        <button className='text-custom-blue underline xs:text-sm md:text-base font-medium font-poppins hover:scale-105 hover:text-blue-500'>
          +Add New
        </button>
      </div>
      <div className="" >
        <div className="flex flex-col justify-between items-center">
          <div className="p-4 flex flex-col justify-between relative bg-[#4b62f5] text-white rounded-xl w-full shadow-lg lg:h-[30vh] ">
            <img src={cardBar} alt="" className='absolute top-0 right-0 z-10' />
            <div className='flex justify-between items-center'>
              <p className=' z-30 xs:text-base md:text-lg font-medium font-poppins'>Universal Card</p>
              <button className=' z-20 bg-white bg-opacity-60 text-black px-4 py-1 w-[64px] rounded-lg md:text-lg xs:text-base font-normal font-poppins'>Edit</button>
            </div>
            <div>
              <p className="md:text-2xl xs:text-lg font-dm-sans font-bold">5214 4321 5678 4345</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className="flex items-center gap-7 font-dm-sans">
                <p className='xs:text-[10pzx] md:text-xs  font-bold font-dm-sans'>Nasyiya Ulfa</p>
                <p className='xs:text-[10pzx] md:text-xs font-bold font-dm-sans'>12/24</p>
              </div>
              <div>
                <img src={ornament} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <h3 className="text-base font-medium font-poppins  text-[#B8B8B8] py-2 ">Total Balance</h3>
        <p className="text-[40px] font-semibold font-poppins text-gray-1 ">$12,500.00</p>
      </div>
      <div className="mt-4 font-dm-sans ">
        <div className="shadow bg-white py-6 px-4 rounded-lg">
          <h3 className="text-[22px] font-medium text-[#333333] font-poppins">Recent Transaction</h3>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3 font-dm-sans items-centers">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className=' font-medium text-base font-dm-sans text-[#333333]'>BA auction Bid</p>
                <p className='text-sm font-medium text-gray-4 font-dm-sans'>12 Sept at 22:21</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-custom-red text-base font-medium font-dm-sans">-$5</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className='font-medium text-base font-dm-sans text-[#333333]'>Return on Investment</p>
                <p className='text-sm font-medium text-gray-4 font-dm-sans'>12 Sept at 22:21</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-custom-green text-base font-medium font-dm-sans">+$605</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className=' font-medium text-base font-dm-sans text-[#333333]'>Deposit</p>
                <p className='text-sm font-medium text-gray-4'>12 Sept at 22:21</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-custom-green text-base font-medium font-dm-sans">+$500</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className=' font-medium text-base font-dm-sans text-[#333333]'>BA auction Bid</p>
                <p className='text-sm font-medium text-gray-4'>12 Sept at 22:21</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-custom-red text-base font-medium font-dm-sans">-$5</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b p-2">
            <div className="flex gap-3">
              <div>
                <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
              </div>
              <div>
                <p className='font-medium text-base font-dm-sans text-[#333333]'>Investment</p>
                <p className='text-sm font-medium text-gray-4'>12 Sept at 22:21</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-custom-red text-base font-medium font-dm-sans">-$500</span>
              </p>
            </div>
          </div>
          <div className=" text-center py-3">
            <button className="text-custom-blue text-balance font-sans font-bold cursor-pointer">See All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

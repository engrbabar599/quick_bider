import React from "react";
import { useState } from "react";
import ClaimNow from "./ClaimNow";
import { Button } from "../../components/Button";
import { OutlineButton } from "../../components/OutlineButton";
import IMAGES from "../../assets/IMAGES";

function Claim() {
  const cardItem = [
    {
      model: "Ford Mustang",
      year: "(2018Model)",
      winner: "You are the winner!",
      score: "1400",
    },
    {
      model: "Bugatti",
      year: "(2022Model)",
      winner: "You are the winner!",
      score: "1800",
    },
    {
      model: "Audi",
      year: "(2023Model)",
      winner: "You are the winner!",
      score: "1280",
    },
    {
      model: "Mercedes",
      year: "(2017Model)",
      winner: "You are the winner!",
      score: "1800",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div>
        <div className="">
          <div className="pb-6">
            <h1 className="text-2xl font-semibold font-poppins text-gray-1">My winnings</h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {cardItem.map((value, index) => {
              return (
                <div
                  // onClick={() => { setOpenBidsInfo(true) }}
                  className=' bg-custom-blue bg-opacity-10  shadow-sm  rounded-xl cursor-pointer '>
                  <div className='space-y-4 p-4 bg-white shadow-sm rounded-t-xl'>
                    <img src={IMAGES?.mustang} alt="" className='object-contain rounded-xl  ' />

                    <div className='font-poppins font-semibold text-base'>
                      <div className='flex flex-col'>
                        <p className='text-gray-1 font-poppins font-semibold text-lg'>Ford Mustang
                          <span className='text-gray-4 text-sm font-normal font-poppins'>(2017 Model)</span>
                        </p>
                        <p className='font-poppins font-medium text-sm text-[#3EB14A]'>You are the winner! </p>
                      </div>
                    </div>

                  </div>


                  <div className={`flex flex-row justify-around items-center ${index === 3 ? " bg-white rounded-b-xl " : " "} `}>

                    <div className='flex flex-row w-full justify-between  p-3'>
                      <div className='font-poppins text-gray-4 font-normal flex flex-col  gap-1'>
                        <p className='text-xs font-poppins font-medium text-gray-4'>My Score</p>
                        <p className='font-semibold text-base text-gray-1'>1280</p>
                      </div>
                      <div>
                        {index === 3 ?
                          <OutlineButton
                            className={"px-5 py-2.5 rounded-xl text-sm font-semibold font-poppins"}
                            title={"Claim sent"} />
                          :

                          <Button
                            onClick={handleShowPopup}
                            className={"px-5 py-2.5 rounded-xl text-sm font-semibold font-poppins"}
                            title={"Claim now"}
                          />
                        }
                      </div>

                    </div>
                  </div>


                </div>
              );
            })}
          </div>

        </div>
        {showPopup && <ClaimNow show={showPopup} onClose={handleClosePopup} />}
      </div>
    </>
  );
}

export default Claim;

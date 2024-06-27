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

  const [isVisible, setIsVisible] = useState(false);

  const showDialog = () => {
    setIsVisible(true);
  };

  const closeDialog = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div>
        <div className="p-5">
          <div className="pb-3">
            <h1 className="text-lg font-semibold">My winnings</h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {cardItem.map((value, index) => {
              return (
                <div
                  // onClick={() => { setOpenBidsInfo(true) }}
                  className=' bg-white border shadow-sm  rounded-xl cursor-pointer '>
                  <div className='space-y-4 p-4'>
                    <img src={IMAGES?.mustang} alt="" className='object-contain !rounded-lg md:w-56 ' />

                    <div className='font-poppins font-semibold text-base'>
                      <div className='flex flex-col'>
                        <p className='text-gray-1'>Ford Mustang
                          <span className='text-gray-4 text-sm font-normal'>(2017 Model)</span>
                        </p>
                        <p className='font-poppins font-medium text-sm text-custom-green'>You are the winner! </p>
                      </div>
                    </div>

                  </div>


                  <div className={`flex flex-row justify-around items-center ${index === 3 ? " bg-white " : " bg-custom-blue bg-opacity-10 "} `}>

                    <div className='flex flex-row w-full justify-between  p-3'>
                      <div className='font-poppins text-gray-4 font-normal'>
                        <p className='text-xs'>My Score</p>
                        <p className='font-semibold text-sm text-gray-1'>1280</p>
                      </div>
                      <div>
                        {index === 3 ?
                          <OutlineButton
                            className={"!p-2"}
                            title={"Claim sent"} />
                          :

                          <Button
                            onClick={showDialog}
                            className={"!p-2 "}
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
        {isVisible && <ClaimNow onClose={() => setIsVisible(false)} />}
      </div>
    </>
  );
}

export default Claim;

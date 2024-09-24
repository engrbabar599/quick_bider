import React from "react";
import car1 from "assets/images/car1.png";
import car2 from "assets/images/car2.png";
import car3 from "assets/images/car3.png";
import stars from "assets/images/stars.png";
import people from "assets/images/people.png";
import clock from "assets/images/clock.png";
import { Button } from "components/Button";
import Svgs from "assets/svgs";

function BidResultMustang() {

  return (
    <div>
      <h2 className="text-gray-1 font-poppins font-semibold text-[20px] pb-[28px]">Ford Mustang(bidding completed)</h2>
      {/* <div className=" border rounded-3xl p-8 shadow-sm  col-span-8">
        <div className=" flex items-center justify-center gap-5">
          <div className="flex flex-col gap-4 group">
            <img
              src={car1}
              className={`group-hover:scale-110 ease-in-out cursor-pointer duration-500 hidden md:block`}
              alt=""
            />
            <hr
              className={`border-2 rounded-full group-hover:border-custom-blue ease-in-out duration-1000`}
            />
          </div>

          <div
            className="flex flex-col gap-4 group"
          >
            <img
              src={car2}
              className={`group-hover:scale-110 duration-500 ease-in-out cursor-pointer`}
              alt=""
            />
            <hr
              className={"border-2 rounded-full group-hover:border-custom-blue ease-in-out duration-1000 "}
            />
          </div>
          <div
            className="flex flex-col gap-4 group"
          >
            <img
              src={car3}
              className={`group-hover:scale-110 duration-300 ease-in-out hidden md:block`}
              alt=""
            />
            <hr
              className={`border-2 rounded-full group-hover:border-custom-blue ease-in-out duration-1000`}
            />
          </div>
        </div>

        <div className="text-center py-5 md:block hidden">
          <p>
            We are delighted to offer you a wide range of vehicles
            through our auction platform. Whether you're looking for a
            new ride or seeking a classic gem, our auctions provide you
            with a variety of options to choose from.
          </p>
        </div>
        <div className="flex items-center md:block">
          <div className=" pt-5 block md:hidden">
            <h1 className="text-lg font-semibold">Investment audi</h1>
            <p className=" text-gray-2 py-3">@invest.audi</p>
          </div>

          <div>
            <div className="text-center block md:hidden">
              <button className="px-4 py-2 border border-blue rounded-lg text-blue">
                View details
              </button>
            </div>
          </div>
        </div>
        <div className="box border rounded-xl shadow-sm p-4 hidden md:block">
          <div className="upside flex justify-between items-center">
            <div className="upfirst flex items-center gap-1">
              <h1 className="opacity-60">Date:</h1>
              <h1 className="text-md font-semibold font-poppins">25/06/2024</h1>
            </div>
            <div className="upsecond flex gap-1">
              <h1 className="text-gray-4">Total rounds:</h1>
              <h1 className=" text-custom-blue font-semibold">4</h1>
            </div>
          </div>
          <div className="downside flex justify-between items-center">
            <div className="dwnfirst flex items-center gap-1">
              <h1 className=" text-gray-4">Time:</h1>
              <h1 className=" text-md font-semibold">9:00 PM</h1>
            </div>
            <div className="dwnsecond flex items-center gap-1">
              <h1 className=" text-gray-4">Bid amount:</h1>
              <h1 className=" text-custom-blue font-semibold">$5</h1>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <p className=" text-gray-2">
            Bid Online and attend Bidding Events for Pre-owned Cars,
            Bikes, Trucks, Construction Equipment, Tractors.
          </p>
        </div>
        <div className="flex items-center justify-between py-8 md:hidden">
          <h1 className=" opacity-60">Date</h1>
          <h1 className=" font-bold">25/06/2024</h1>
        </div>
        <div className="bg-[#F5F5F5] rounded-xl shadow-sm flex justify-between gap-7 p-6 md:hidden">
          <div className="">
            <h1 className="text-center text-blue">$500.00</h1>
            <h1 className="pt-4">Invested Amount</h1>
          </div>

          <div className="border -ml-16"></div>

          <div className="">
            <h1 className="text-green-500 ">21%</h1>
            <h1 className="pt-4">ROI</h1>
          </div>
        </div>
        <div className=" md:flex md:justify-center md:items-center gap-7 lg:gap-2 xl:gap-4 p-5 hidden">
          <div className="border rounded-xl py-3 px-9 flex flex-col items-center">
            <div>
              <img src={stars} alt="" />
            </div>
            <div className="pt-1 text-lg font-semibold">
              <h1>320</h1>
            </div>
            <div>
              <h1 className=" font-semibold opacity-60">Score</h1>
            </div>
          </div>
          <div className="border rounded-xl py-4 px-5 flex flex-col items-center">
            <div>
              <img src={people} alt="" />
            </div>
            <div className="pt-1 text-lg font-semibold">
              <h1>160</h1>
            </div>
            <div>
              <h1 className=" font-semibold opacity-60">
                Participants
              </h1>
            </div>
          </div>
          <div className="border rounded-xl px-7 py-3 flex flex-col items-center">
            <div>
              <img src={clock} alt="" />
            </div>
            <div className="pt-1 text-lg font-semibold">
              <h1>4:12</h1>
            </div>
            <div>
              <h1 className=" font-semibold opacity-60">Minutes</h1>
            </div>
          </div>
        </div>
      </div> */}

      <div className="card border rounded-3xl xl:p-[32px] lg:p-[24px] p-4  shadow-sm">
        <div className="cars flex items-center justify-center gap-5 ">
          <img src={car1} className="hidden md:block w-[28%]" alt="Car 1" />
          <img src={car2} className="w-[100%] sm:w-[40%]" alt="Car 2" />
          <img src={car3} className="hidden sm:block w-[28%]" alt="Car 3" />
        </div>
        <div className="flex items-center justify-between ">
          <div className="pt-5">
            <h1 className="text-sm md:text-xl font-semibold font-poppins text-gray-700">Investment audi</h1>
            <p className="text-sm md:text-xl font-normal font-poppins text-gray-400 py-4">
              @invest.audi
            </p>
          </div>

        </div>
        <div className="box border rounded-xl shadow-sm p-4  block">
          <div className="upside flex flex-col md:flex-row w-full justify-between items-center ">
            <div className="upfirst flex items-center w-full max-md:justify-between gap-1 text-sm md:text-base font-medium font-poppins ">
              <h1 className=" text-gray-4">
                Date:
              </h1>
              <h1 className=" font-semibold  text-gray-1">
                25/06/2024
              </h1>
            </div>
            <div className="upfirst flex text-right w-full max-md:justify-between gap-1 text-sm md:text-base font-medium font-poppins   md:justify-end ">
              <h1 className=" text-gray-4">Total rounds:</h1>
              <h1 className=" font-semibold  text-custom-blue">4</h1>
            </div>
          </div>
          <div className="downside  justify-between items-center hidden md:flex">
            <div className="dwnfirst flex items-center gap-1">
              <h1 className="text-xs md:text-base font-medium font-poppins text-gray-400">Time:</h1>
              <h1 className="text-xs md:text-base font-semibold font-poppins text-gray-700">9:00 PM</h1>
            </div>
            <div className="dwnsecond flex items-center gap-1">
              <h1 className="text-xs md:text-base font-medium font-poppins text-gray-400">Bid amount:</h1>
              <h1 className="text-xs md:text-base font-semibold font-poppins text-blue-500">$2</h1>
            </div>
          </div>
        </div>
        <div className=" justify-center items-center gap-2.5 lg:pt-5 pt-2.5   flex">
          <div
            className="border border-gray-5  h-[116px] w-[112px] rounded-xl justify-center flex flex-col items-center">
            <span>
              <Svgs.ScoreIcon />
            </span>
            <div className="flex flex-col items-center">
              <h1 className=" md:text-xl font-semibold font-poppins text-gray-1">
                320
              </h1>
              <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">
                Score
              </h1>
            </div>
          </div>
          <div className="border border-gray-5 rounded-xl justify-center gap-[6px] w-[112px] h-[116px] flex flex-col items-center">
            <Svgs.ParticipantsIcon />
            <div className="flex flex-col items-center">
              <h1 className=" md:text-xl font-semibold font-poppins text-gray-1">
                160
              </h1>
              <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">
                Participants
              </h1>
            </div>
          </div>
          <div className="border border-gray-5 rounded-xl px-2 justify-center py-3 w-[112px] h-[116px] flex flex-col items-center">
            <Svgs.TimeIcon />
            <div className="flex flex-col items-center">
              <h1 className=" md:text-xl font-semibold font-poppins text-gray-1">
                4:12
              </h1>
              <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">
                Minutes
              </h1>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default BidResultMustang
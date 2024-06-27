import React from "react";
import { useState } from "react";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import stars from "../../assets/images/stars.png";
import people from "../../assets/images/people.png";
import clock from "../../assets/images/clock.png";

function BidResultMustang() {

    const cards = [
        {
          brand: "audi",
          date: "24/7/2023",
          amount: "$5",
        },
      ];
      const [activeTab, setActiveTab] = useState("first");

  return (
   <>
      {cards.map(() => {
          return (
            <>
              <div className="card border rounded-3xl p-8 shadow-sm  col-span-8">
                <div className="cars flex items-center justify-center gap-5">
                  <div
                    onClick={() => {
                      setActiveTab("first");
                    }}
                    className="flex flex-col gap-4"
                  >
                    <img
                      src={car1}
                      className={`${
                        activeTab === "first" ? "scale-110 duration-300" : ""
                      } xs:hidden md:block`}
                      alt=""
                    />
                    <hr
                      className={`${
                        activeTab === "first"
                          ? "border-2 rounded-full border-custom-blue"
                          : "border-2 rounded-full"
                      }`}
                    />
                  </div>
                  <div
                    onClick={() => {
                      setActiveTab("second");
                    }}
                    className="flex flex-col gap-4"
                  >
                    <img
                      src={car2}
                      className={`${
                        activeTab === "second" ? "scale-110 duration-300" : ""
                      }`}
                      alt=""
                    />
                    <hr
                      className={`${
                        activeTab === "second"
                          ? "border-2 rounded-full border-custom-blue"
                          : "border-2 rounded-full"
                      }`}
                    />
                  </div>
                  <div
                    onClick={() => {
                      setActiveTab("third");
                    }}
                    className="flex flex-col gap-4"
                  >
                    <img
                      src={car3}
                      className={`${
                        activeTab === "third" ? "scale-110 duration-300" : ""
                      } xs:hidden md:block`}
                      alt=""
                    />
                    <hr
                      className={`${
                        activeTab === "third"
                          ? "border-2 rounded-full border-custom-blue"
                          : "border-2 rounded-full"
                      }`}
                    />
                  </div>
                </div>

                <div className="text-center py-5 md:block xs:hidden">
                  <p>
                    We are delighted to offer you a wide range of vehicles
                    through our auction platform. Whether you're looking for a
                    new ride or seeking a classic gem, our auctions provide you
                    with a variety of options to choose from.
                  </p>
                </div>
                <div className="xs:flex xs:items-center xs:justify-between md:block">
                  <div className=" pt-5 xs:block md:hidden">
                    <h1 className="text-lg font-bold">Investment audi</h1>
                    <p className=" opacity-60 py-3">@invest.audi</p>
                  </div>

                  <div>
                    <div className="text-center xs:block md:hidden">
                      <button className="px-4 py-2 border border-blue rounded-lg text-blue">
                        View details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="box border rounded-xl shadow-sm p-4 xs:hidden md:block">
                  <div className="upside flex justify-between items-center">
                    <div className="upfirst flex items-center gap-1">
                      <h1 className="opacity-60">Date:</h1>
                      <h1 className="text-md font-bold">25/06/2024</h1>
                    </div>
                    <div className="upsecond flex gap-1">
                      <h1 className="opacity-60">Total rounds:</h1>
                      <h1 className=" text-blue">4</h1>
                    </div>
                  </div>
                  <div className="downside flex justify-between items-center">
                    <div className="dwnfirst flex items-center gap-1">
                      <h1 className=" opacity-60">Time:</h1>
                      <h1 className=" text-md font-bold">9:00 PM</h1>
                    </div>
                    <div className="dwnsecond flex items-center gap-1">
                      <h1 className=" opacity-60">Bid amount:</h1>
                      <h1 className=" text-blue">$5</h1>
                    </div>
                  </div>
                </div>

                <div className="xs:block md:hidden">
                  <p className=" opacity-60">
                    Bid Online and attend Bidding Events for Pre-owned Cars,
                    Bikes, Trucks, Construction Equipment, Tractors.
                  </p>
                </div>
                <div className="xs:flex xs:items-center xs:justify-between py-8 md:hidden">
                  <h1 className=" opacity-60">Date</h1>
                  <h1 className=" font-bold">25/06/2024</h1>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl shadow-sm xs:flex xs:justify-between gap-7 p-6 md:hidden">
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
                <div className=" md:flex md:justify-center md:items-center xs:gap-7 lg:gap-2 xl:gap-4 p-5 xs:hidden">
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

                <div>
                  <div className="text-center pt-6 xs:hidden md:block">
                    <button className="px-12 py-2 border border-blue rounded-lg text-white bg-custom-blue">
                      Bid now
                    </button>
                  </div>
                </div>
                <div className="flex justify-center gap-2 py-6">
                  <h1>Wallet:</h1>
                  <h1 className="text-blue">$1200</h1>
                </div>
              </div>
            </>
          );
        })}
   </>
  )
}

export default BidResultMustang
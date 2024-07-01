import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import stars from "../../assets/images/stars.png";
import people from "../../assets/images/people.png";
import clock from "../../assets/images/clock.png";


function MyBids() {
  const navigate = useNavigate()
  const cards = [
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
  ];

  const [activeTab, setActiveTab] = useState("first");

  const handleFirstButtonClick = () => {
    setActiveTab("first");
  };

  const handleSecondButtonClick = () => {
    setActiveTab("second");
  };


  return (
    <>
      <div className="p-6">
        <div className="mybids flex justify-between">
          <h1 className="md:text-2xl font-semibold font-poppins text-gray-1">My Bids</h1>
          <button className="xs:text-sm md:text-base font-semibold font-poppins text-custom-blue">View all</button>
        </div>
        <div className="flex gap-4 py-4 xs:justify-center md:justify-start">
          <div>
            <button
              onClick={handleFirstButtonClick}
              className={`px-[20px] py-[10px] font-semibold rounded-xl text-sm font-poppins ${activeTab === "first"
                ? "bg-custom-blue text-white "
                : " text-gray-2 border border-gray-2"
                }`}
            >
              Active
            </button>
          </div>
          <div>
            <button
              onClick={handleSecondButtonClick}
              className={`px-[20px] py-[10px] font-semibold  rounded-xl text-sm font-poppins  ${activeTab === "second"
                ? " bg-custom-blue text-white"
                : "  text-gray-2  border border-gray-2"
                }`}
            >
              History
            </button>
          </div>
        </div>

        <div className="cardspart grid xs:grid-cols-1 md:grid-cols-2 gap-5 ">
          {cards.map(() => {
            return (
              <>
                <div className="card border rounded-3xl p-8 shadow-sm ">
                  <div className="cars flex items-center justify-center gap-5">
                    <img src={car1} className="xs:hidden md:block w-[28%]" alt="" />
                    <img src={car2} className="xs:w-[100%] sm:w-[40%] " alt="" />
                    <img src={car3} className=" xs:hidden sm:block w-[28%]" alt="" />
                  </div>
                  <div className="xs:flex xs:items-center xs:justify-between md:block">
                    <div className=" pt-5">
                      <h1 className=" xs:text-base md:text-xl font-semibold font-poppins text-gray-1">Investment audi</h1>
                      <p className=" xs:text-sm md:text-xl font-normal font-poppins text-gray-4 py-4 ">@invest.audi</p>
                    </div>

                    <div>
                      <div className="text-center xs:block md:hidden">
                        <button
                          onClick={() => navigate("/mybids/bidDetails")}
                          className="px-4 py-2 border border-blue rounded-lg text-custom-blue ">
                          View details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="box border rounded-xl shadow-sm p-4 xs:hidden md:block">
                    <div className="upside flex justify-between items-center">
                      <div className="upfirst flex items-center gap-1">
                        <h1 className=" text-base font-medium font-poppins text-gray-4">Date:</h1>
                        <h1 className="text-base font-semibold font-poppins text-gray-1">25/06/2024</h1>
                      </div>
                      <div className="upsecond flex gap-1">
                        <h1 className="text-base font-medium font-poppins text-gray-4">Total rounds:</h1>
                        <h1 className=" text-base font-semibold font-poppins text-custom-blue">4</h1>
                      </div>
                    </div>
                    <div className="downside flex justify-between items-center">
                      <div className="dwnfirst flex items-center gap-1">
                        <h1 className="text-base font-medium font-poppins text-gray-4">Time:</h1>
                        <h1 className="text-base font-semibold font-poppins text-gray-1">9:00 PM</h1>
                      </div>
                      <div className="dwnsecond flex items-center gap-1">
                        <h1 className="text-base font-medium font-poppins text-gray-4">Bid amount:</h1>
                        <h1 className=" text-base font-semibold font-poppin text-custom-blue">$5</h1>
                      </div>
                    </div>
                  </div>

                  <div className="xs:block md:hidden ">
                    <p className="text-xs font-normal font-poppins text-gray-4">
                      Bid Online and attend Bidding Events for Pre-owned Cars,
                      Bikes, Trucks, Construction Equipment, Tractors.
                    </p>
                  </div>
                  <div className="xs:flex xs:items-center xs:justify-between py-8 md:hidden">
                    <h1 className="text-xs font-normal font-poppins text-gray-4">Date</h1>
                    <h1 className="text-xs font-semibold font-poppins text-gray-1">25/06/2024</h1>
                  </div>
                  <div className="bg-[#F5F5F5] rounded-xl shadow-sm xs:flex xs:justify-between gap-7 p-6 md:hidden">
                    <div className="">
                      <h1 className="text-center text-xl font-semibold font-poppins text-custom-blue">$500.00</h1>
                      <h1 className="pt-4 text-[15px] font-normal font-poppins text-gray-4">Invested Amount</h1>
                    </div>

                    <div className="border -ml-16"></div>

                    <div className="">
                      <h1 className="text-center text-xl font-semibold font-poppins text-custom-green">21%</h1>
                      <h1 className="pt-4 text-[15px] font-normal font-poppins text-gray-4">ROI</h1>
                    </div>
                  </div>
                  <div className=" flex justify-center items-center gap-5 p-5 xs:hidden lg:flex">
                    <div className="border rounded-xl px-2 py-3 w-[112px] flex flex-col items-center">
                      <div>
                        <img src={stars} alt="" />
                      </div>
                      <div className="pt-1">
                        <h1 className="text-xl font-semibold font-poppins text-gray-1">320</h1>
                      </div>
                      <div>
                        <h1 className=" text-base font-normal font-poppins text-gray-4">Score</h1>
                      </div>
                    </div>
                    <div className="border rounded-xl px-2 py-4 w-[112px] flex flex-col items-center">
                      <div>
                        <img src={people} alt="" />
                      </div>
                      <div className="pt-2">
                        <h1 className="text-xl font-semibold font-poppins text-gray-1">160</h1>
                      </div>
                      <div>
                        <h1 className="text-base font-normal font-poppins text-gray-4">
                          Participants
                        </h1>
                      </div>
                    </div>
                    <div className="border rounded-xl px-2 py-3 w-[112px] flex flex-col items-center">
                      <div>
                        <img src={clock} alt="" />
                      </div>
                      <div className="pt-1 ">
                        <h1 className="text-xl font-semibold font-poppins text-gray-1">4:12</h1>
                      </div>
                      <div>
                        <h1 className="text-base font-normal font-poppins text-gray-4">Minutes</h1>
                      </div>
                    </div>
                  </div>

                  <div>

                    <div className="text-center pt-6 xs:hidden md:block">
                      <button
                        onClick={() => navigate("bidDetails")}

                        className="px-4 py-2 border border-blue rounded-lg text-custom-blue hover:bg-custom-blue hover:text-white">

                        View details

                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyBids;

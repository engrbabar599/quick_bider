import React, { act, useState } from "react";
import { useNavigate } from "react-router-dom";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import stars from "../../assets/images/stars.png";
import people from "../../assets/images/people.png";
import clock from "../../assets/images/clock.png";

function MyBids() {
  const navigate = useNavigate();
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

  const [activeTab, setActiveTab] = useState("active");

  const handleViewDetails = () => {
    if (activeTab === "active") {
      navigate("/mybids/bidDetails")
    }
    else if (activeTab === "history") {
      navigate("/dashboard/results")
    }
  }

  return (
    <>
      <div className="p-6">
        <div className="mybids flex justify-between">
          <h1 className="md:text-2xl font-semibold font-poppins text-gray-700">My Bids</h1>
          <button className="text-sm md:text-base font-semibold font-poppins text-blue-500">View all</button>
        </div>
        <div className="flex gap-4 py-4 justify-center md:justify-start">
          <div>
            <button
              onClick={() => { setActiveTab("active") }}
              className={`px-5 py-2 font-semibold rounded-xl text-sm font-poppins ${activeTab === "active"
                ? "bg-blue-500 text-white"
                : "text-gray-400 border border-gray-400"
                }`}
            >
              Active
            </button>
          </div>
          <div>
            <button
              onClick={() => { setActiveTab("history") }}
              className={`px-5 py-2 font-semibold rounded-xl text-sm font-poppins ${activeTab === "history"
                ? "bg-blue-500 text-white"
                : "text-gray-400 border border-gray-400"
                }`}
            >
              History
            </button>
          </div>
        </div>
        <>
          <div className="cardspart grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map((card, index) => {
              return (
                <div key={index} className="card border rounded-3xl p-8 shadow-sm">
                  <div className="cars flex items-center justify-center gap-5">
                    <img src={car1} className="hidden md:block w-[28%]" alt="Car 1" />
                    <img src={car2} className="w-[100%] sm:w-[40%]" alt="Car 2" />
                    <img src={car3} className="hidden sm:block w-[28%]" alt="Car 3" />
                  </div>
                  <div className="flex items-center justify-between md:block">
                    <div className="pt-5">
                      <h1 className="text-xs md:text-xl font-semibold font-poppins text-gray-700">Investment audi</h1>
                      <p className="text-xs md:text-xl font-normal font-poppins text-gray-400 py-4">@invest.audi</p>
                    </div>
                    <div className="text-center block md:hidden">
                      <button
                        onClick={handleViewDetails}
                        className="py-2 px-3 md:px-4 md:py-2 border border-blue-500 rounded-xl text-blue-500 text-xs md:text-sm font-semibold font-poppins hover:bg-blue-500 hover:text-white">
                        View details
                      </button>
                    </div>
                  </div>
                  <div className="box border rounded-xl shadow-sm p-4 hidden md:block">
                    <div className="upside flex justify-between items-center">
                      <div className="upfirst flex items-center gap-1">
                        <h1 className="text-xs md:text-base font-medium font-poppins text-gray-400">Date:</h1>
                        <h1 className="text-xs md:text-base font-semibold font-poppins text-gray-700">25/06/2024</h1>
                      </div>
                      <div className="upsecond flex gap-1">
                        <h1 className="text-xs md:text-base font-medium font-poppins text-gray-400">Total rounds:</h1>
                        <h1 className="text-xs md:text-base font-semibold font-poppins text-blue-500">4</h1>
                      </div>
                    </div>
                    <div className="downside flex justify-between items-center">
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
                  <div className="block md:hidden">
                    <p className="text-xs md:text-base font-normal font-poppins text-gray-400 py-4">
                      Bid Online and attend Bidding Events for Pre-owned Cars, Bikes, Trucks, Construction Equipment, Tractors.
                    </p>
                  </div>
                  <div className="flex items-center justify-between py-8 md:hidden">
                    <h1 className="text-xs font-normal font-poppins text-gray-400">Date</h1>
                    <h1 className="text-xs font-semibold font-poppins text-gray-700">25/06/2024</h1>
                  </div>
                  <div className="bg-gray-100 rounded-xl shadow-sm flex justify-between gap-7 p-6 md:hidden">
                    <div>
                      <h1 className="text-center text-xs md:text-xl font-semibold font-poppins text-blue-500">$500.00</h1>
                      <h1 className="pt-4 text-xs md:text-sm font-normal font-poppins text-gray-400">Invested Amount</h1>
                    </div>
                    <div className="border-l border-gray-300"></div>
                    <div>
                      <h1 className="text-center text-xs md:text-xl font-semibold font-poppins text-green-500">21%</h1>
                      <h1 className="pt-4 text-xs md:text-sm font-normal font-poppins text-gray-400">ROI</h1>
                    </div>
                  </div>
                  <div className=" justify-center items-center gap-5 p-5 hidden lg:flex">
                    <div className="border rounded-xl px-2 py-3 w-[112px] flex flex-col items-center">
                      <img src={stars} alt="Stars" />
                      <h1 className="pt-1 md:text-xl font-semibold font-poppins text-gray-700">320</h1>
                      <h1 className="text-xs md:text-base font-normal font-poppins text-gray-400">Score</h1>
                    </div>
                    <div className="border rounded-xl px-2 py-4 w-[112px] flex flex-col items-center">
                      <img src={people} alt="People" />
                      <h1 className="pt-2 md:text-xl font-semibold font-poppins text-gray-700">160</h1>
                      <h1 className="text-xs md:text-base font-normal font-poppins text-gray-400">Participants</h1>
                    </div>
                    <div className="border rounded-xl px-2 py-3 w-[112px] flex flex-col items-center">
                      <img src={clock} alt="Clock" />
                      <h1 className="pt-1 md:text-xl font-semibold font-poppins text-gray-700">4:12</h1>
                      <h1 className="text-xs md:text-base font-normal font-poppins text-gray-400">Minutes</h1>
                    </div>
                  </div>
                  <div className="text-center pt-6 hidden md:block">
                    <button onClick={() => navigate("/mybids/bidDetails")} className="w-[127px] min-w-max px-5 py-2 border rounded-xl text-blue-500 hover:bg-blue-500 hover:text-white text-sm font-semibold font-poppins border-blue-500">
                      View details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>

      </div>
    </>
  );
}

export default MyBids;

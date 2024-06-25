import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import stars from "../../assets/images/stars.png";
import people from "../../assets/images/people.png";
import clock from "../../assets/images/clock.png";



function MyBids() {
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
          <h1 className="text-lg font-bold">My Bids</h1>
          <button className=" text-blue">View all</button>
        </div>
        <div className="flex gap-4 py-4">
          <div>
            <button
              onClick={handleFirstButtonClick}
              className={`px-4 py-2 font-semibold rounded-lg ${
                activeTab === "first"
                  ? "bg-blue text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Active
            </button>
          </div>
          <div>
            <button
              onClick={handleSecondButtonClick}
              className={`px-4 py-2 font-semibold rounded-lg ${
                activeTab === "second"
                  ? "bg-blue text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              History
            </button>
          </div>
        </div>

        <div className="cardspart grid xs:grid-cols-1 lg:grid-cols-2 gap-5 ">
          {cards.map(() => {
            return (
              <>
                <div className="card border rounded-3xl p-8 shadow-sm">
                  <div className="cars flex items-center justify-center gap-5">
                    <img src={car1} className="xs:hidden md:block" alt="" />
                    <img src={car2} className=" " alt="" />
                    <img src={car3} className=" xs:hidden sm:block" alt="" />
                  </div>
                  <div className="xs:flex xs:items-center xs:justify-between md:block">
                    <div className=" pt-5">
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
                  <div className="box border rounded-lg shadow-sm p-4 xs:hidden md:block">
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

                  <div className="xs:block md:hidden ">
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
                  <div className=" flex justify-center items-center gap-10 p-5 xs:hidden">
                    <div className="border rounded-xl p-2 w-[20%] flex flex-col items-center">
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
                    <div className="border rounded-xl p-3 w-[20%] flex flex-col items-center">
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
                    <div className="border rounded-xl p-2 w-[20%] flex flex-col items-center">
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
                      <button className="px-4 py-2 border border-blue rounded-lg text-blue">
                        <Link to={'/bidDetails'}> 
                        View details
                        </Link>
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

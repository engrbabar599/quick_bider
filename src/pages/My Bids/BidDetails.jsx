import React from "react";
import { useState } from "react";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import stars from "../../assets/images/stars.png";
import people from "../../assets/images/people.png";
import clock from "../../assets/images/clock.png";

function BidDetails() {
  const cards = [
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
  ];

  const myBids = [
    {
      name: "Bids 1",
      score: "320",
      time: "10:10:20 AM",
    },
    {
      name: "Bids 1",
      score: "320",
      time: "10:10:20 AM",
    },
    {
      name: "Bids 1",
      score: "320",
      time: "10:10:20 AM",
    },
    {
      name: "Bids 1",
      score: "320",
      time: "10:10:20 AM",
    },
  ];

  const investment = [
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
  ];

  const [activeTab, setActiveTab] = useState("first");

  return (
    <>
      <div className="cardspart grid xs:grid-cols-1 lg:grid-cols-12 gap-5 p-5">
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
                        activeTab === "first" ? "scale-110 duration" : ""
                      } xs:hidden md:block`}
                      alt=""
                    />
                    <hr
                      className={`${
                        activeTab === "first"
                          ? "border-2 rounded-full border-blue"
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
                        activeTab === "second" ? "scale-110 duration" : ""
                      }`}
                      alt=""
                    />
                    <hr
                      className={`${
                        activeTab === "second"
                          ? "border-2 rounded-full border-blue"
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
                        activeTab === "third" ? "scale-110 duration" : ""
                      } xs:hidden md:block`}
                      alt=""
                    />
                    <hr
                      className={`${
                        activeTab === "third"
                          ? "border-2 rounded-full border-blue"
                          : "border-2 rounded-full"
                      }`}
                    />
                  </div>
                </div>

                <div className="text-center w-[40vw] mx-auto py-5 md:block xs:hidden">
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
                <div className=" md:flex md:justify-center md:items-center gap-10 p-5 xs:hidden">
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
                    <button className="px-12 py-2 border border-blue rounded-lg text-white bg-blue">
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

        <div className=" xs:col-span-8 md:col-span-8 lg:col-span-4 ">
          <div className=" flex justify-between items-center">
            <div className="">
              <h1 className="text-lg font-bold">Leaderboard</h1>
            </div>
            <div className="w-[60%] mx-auto border-b-2"></div>
            <div className="text-blue">
              <button>view all</button>
            </div>
          </div>
          <div className="pt-5">
            <div className="border rounded-xl p-5 shadow-lg">
              <div className="grid grid-cols-3 border-b-2">
                <div className="text-md font-semibold">Winners</div>
                <div className="text-md font-semibold">Time</div>
                <div className="text-md font-semibold">Province</div>
              </div>
              {investment.map((value, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className="grid grid-cols-3 pt-3 border-b py-2 hover:bg-[#E2EBFF]"
                    >
                      <div>{value.name}</div>
                      <div>10:20:40 AM</div>
                      <div>AB</div>
                    </div>
                  </>
                );
              })}

              <div className="text-center pt-5">
                <button className="px-4 py-2 border border-blue rounded-lg text-blue hover:bg-blue hover:text-white">
                  View all
                </button>
              </div>
            </div>
          </div>

          <div className="rightbottom py-6">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">My bids</h1>
              <h1 className="border-b-2 w-[75%]"></h1>
            </div>
            {myBids.map(() => {
              return (
                <>
                  <div className="border rounded-xl shadow-sm flex justify-between items-center p-4 my-5">
                    <div className="left flex items-center gap-4">
                      <div className="bid1">
                        <h1 className=" font-semibold text-blue text-base">
                          Bid 1
                        </h1>
                      </div>
                      <div className="robertouter flex flex-col gap-3">
                        <div className="robert flex items-center">
                          <div>
                            <h1 className=" font-bold">Robert Fox</h1>
                          </div>
                          <div>
                            <h1 className=" opacity-70">(Rank 3)</h1>
                          </div>
                        </div>
                        <div className="time flex gap-1">
                          <div>
                            <h1 className=" opacity-70">Time:</h1>
                          </div>
                          <div>
                            <h1 className=" font-bold">10:10:20 AM</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right flex items-center gap-3">
                      <div className="img">
                        <img src={stars} alt="" />
                      </div>
                      <div className="score">
                        <div>
                          <h1 className=" font-bold">320</h1>
                        </div>
                        <div>
                          <h1 className=" opacity-70">Score</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="leftpart col-span-8">
          <div className="py-5">
            <h1 className="text-xl font-semibold">Terms & conditions</h1>
          </div>
          <div className="border p-5 rounded-xl">
            <ul className=" list-decimal px-14 py-1">
              <li>
                <p className="py-3 text-lg font-semibold opacity-70">
                  Bidders must be 18+ and register with valid ID. Registration
                  implies agreement to these terms.
                </p>
              </li>
              <li>
                <p className="py-3 text-lg font-semibold opacity-70">
                  Bidders must be 18+ and register with valid ID. Registration
                  implies agreement to these terms.
                </p>
              </li>
              <li>
                <p className="py-3 text-lg font-semibold opacity-70">
                  Bidders must be 18+ and register with valid ID. Registration
                  implies agreement to these terms.
                </p>
              </li>
              <li>
                <p className="py-3 text-lg font-semibold opacity-70">
                  Bidders must be 18+ and register with valid ID. Registration
                  implies agreement to these terms.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BidDetails;

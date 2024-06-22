import React from "react";
import Graph from "./Graph";
import Project from "./Project";
import vectorImage from "../../assets/images/Vector.png";
import starImage from "../../assets/images/star.png";
import { useState } from "react";
import Employees from "./Employees";
const Investment = () => {
  const review = [
    {
      name: "jones",
      role: "investers",
    },
    {
      name: "jones",
      role: "investers",
    },
    {
      name: "jones",
      role: "investers",
    },
    {
      name: "jones",
      role: "investers",
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

  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
    <div className="p-5">
      <div>
        <div>
          <h1 className="text-lg font-semibold">Investments</h1>
        </div>
        <div className="flex gap-4 py-4">
          <div>
            <button className="px-4 py-2 bg-blue rounded-lg text-white">
              Investments
            </button>
          </div>
          <div>
            <button className="px-4 py-2 border rounded-lg ">
              My Portfolio
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-12 gap-5 ">
        <div className="bg-white p-6 rounded-lg shadow-md col-span-8">
          <h2 className="text-xl font-bold mb-4">
            Empower Your Financial Future with Our Investment Portal
          </h2>
          <p className="text-gray-600 mb-4">
            Welcome to a new era of investment management. Our advanced
            Investment Portal is designed to empower you with the tools and
            insights needed to maximize your financial growth. Experience
            unparalleled control over your portfolio and make strategic
            decisions that drive success.
          </p>
          <div className="bg-sky-100 px-4 py-6 border rounded-xl mb-4 flex justify-between items-center">
            <div>
            <span>
              Unlock the Potential of Your Investments, activate investment
              services.
            </span>
            </div>
           
            <div>
            <button
              onClick={toggleVisibility}
              className="bg-blue text-white px-6 py-2 rounded-xl"
            >
              Add money
            </button>
            {isVisible && <Employees />}
            </div>
           
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p>Total investment</p>
              <h3 className="text-2xl font-bold">$12 M</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p>ROI</p>
              <h3 className="text-2xl font-bold text-green-500">21%</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p>Total projects</p>
              <h3 className="text-2xl font-bold">224</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p>Total investors</p>
              <h3 className="text-2xl font-bold">11K</h3>
            </div>
          </div>
        </div>
        <div className=" col-span-4">
          <Graph />
        </div>
      </div>

      <div>
        <Project />
      </div>

      <div className="grid lg:grid-cols-2 gap-5 pt-5">
        <div className="">
          <div className=" flex justify-between items-center">
            <div className="w-[20%]">
              <h1 className="text-lg font-bold">All Investers</h1>
            </div>
            <div className="w-[65%] mx-auto border-b-2"></div>
            <div className="text-blue w-[10%]">
              <button>view all</button>
            </div>
          </div>
          <div className="pt-5">
            <div className="border rounded-xl p-5">
              <div className="grid grid-cols-3 border-b-2">
                <div className="text-md font-semibold">Name</div>
                <div className="text-md font-semibold">Time</div>
                <div className="text-md font-semibold">Investment</div>
              </div>
              {investment.map((value, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className="grid grid-cols-3 pt-3 border-b py-2"
                    >
                      <div>{value.name}</div>
                      <div>10:20:40 AM</div>
                      <div>$**</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="">
          <div className=" flex justify-between items-center">
            <div className="w-[20%]">
              <h1 className="text-lg font-bold">All Reviews</h1>
            </div>
            <div className="w-[65%] border-b-2"></div>
            <div className="text-blue w-[10%]">
              <button>view all</button>
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <div>
              <button className="bg-blue px-4 py-2 rounded-lg text-white">
                All reviews
              </button>
            </div>
            <div>
              <button className="bg-white px-4 py-2 rounded-lg border">
                write a review
              </button>
            </div>
          </div>
          {review.map((value, i) => {
            return (
              <>
                <div className="border p-3 rounded-xl shadow-xl my-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="icon">
                        <p>
                          <img src={vectorImage} alt="" />
                        </p>
                      </div>
                      <div>
                        <h1 className="text-xl font-semibold">Jonas Sousa</h1>
                        <p className="opacity-65">Investor</p>
                      </div>
                    </div>
                    <div>
                      <img src={starImage} alt="" />
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className=" opacity-55">
                      I didn't know the first thing about investing. This book
                      helped me understand some basic topics. It even taught me
                      who to be careful with when taking advice about investing,
                      wink wink youtube gurus. I recommend this book to anyone
                      trying to understand the stock market before investing.
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};

export default Investment;

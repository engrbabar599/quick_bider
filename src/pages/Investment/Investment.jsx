import React from "react";
import Graph from "./Graph";
import Project from "./Project";
import vectorImage from "../../assets/images/Vector.png";
import starImage from "../../assets/images/star.png";
import { useState } from "react";
import Employees from "./Employees";
import { Line } from "react-chartjs-2";
// import CardSection from "./CardSection";
import { BalanceGraph } from "../Dashboard/BalanceGraph"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import InvestmentCompleted from "./InvestmentCompleted";
import { Button } from "../../components/Button";
import { OutlineButton } from "../../components/OutlineButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Investment = () => {
  const data = {
    labels: [
      "Jun 12",
      "Jun 13",
      "Jun 14",
      "Jun 15",
      "Jun 16",
      "Jun 17",
      "Jun 18",
      "Jun 19",
      "Jun 20",
      "Jun 21",
    ],
    datasets: [
      {
        label: "Balance",
        data: [
          4000, 6000, 5000, 6000, 4500, 4800, 7000, 6500, 6800, 9000, 12000,
        ],
        fill: true,
        borderColor: "#AAFF00",
        tension: 0.4,
        pointBackgroundColor: "#AAFF00",
        pointBorderColor: "#AAFF00",
        pointHoverBackgroundColor: "#AAFF00",
        pointHoverBorderColor: "#AAFF00",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        // borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

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

  const [activeTab, setActiveTab] = useState("first");

  const handleFirstButtonClick = () => {
    setActiveTab("first");
  };

  const handleSecondButtonClick = () => {
    setActiveTab("second");
  };

  const [activeButton, setActiveButton] = useState("active")
  const handleActiveButtonClick = () => {
    setActiveButton("active");
  };

  const handleCompletedButtonClick = () => {
    setActiveButton("completed");
  };

  return (
    <>
      <div className="md:p-5">
        <div>
          <div>
            <h1 className="text-2xl font-medium">Investments</h1>
          </div>
          <div className="flex md:justify-start xs:flex xs:justify-center gap-4 py-4">
            <div>
              <button
                onClick={handleFirstButtonClick}
                className={`px-4 py-2 font-semibold text-sm rounded-lg ${activeTab === "first"
                  ? " bg-custom-blue text-white "
                  : " bg-custom-gray text-gray-700 "
                  }`}
              >
                Investments
              </button>
            </div>
            <div>
              <button
                onClick={handleSecondButtonClick}
                className={`px-4 py-2 font-semibold text-sm rounded-lg ${activeTab === "second"
                  ? "bg-custom-blue text-white"
                  : "bg-gray-200 text-gray-700"
                  }`}
              >
                Portfolio
              </button>
            </div>
          </div>
        </div>

        {activeTab === "first" && (
          <div className="space-y-4">
            <div className="lg:grid lg:grid-cols-12 gap-6 ">
              <div className="bg-white p-6 rounded-lg shadow-sm border lg:col-span-8">
                <h2 className="text-xl font-medium mb-4 text-wrap ">
                  Empower Your Financial Future with Our Investment Portal
                </h2>
                <p className="text-gray-600 mb-4 text-sm text-wrap ">
                  Welcome to a new era of investment management. Our advanced
                  Investment Portal is designed to empower you with the tools
                  and insights needed to maximize your financial growth.
                  Experience unparalleled control over your portfolio and make
                  strategic decisions that drive success.
                </p>
                <div className="bg-custom-blue bg-opacity-10 px-4 py-6 border rounded-xl mb-4 flex  lg:flex-row flex-col justify-between items-center gap-4">
                  <div className="items-center flex">
                    <span className="xs:text-center md:text-start">
                      Unlock the Potential of Your Investments, activate
                      investment services.
                    </span>
                  </div>

                  <div>
                    <Button
                      className={"!min-w-max"}
                      title={"Activate now"}
                    />
                    {/* <button
                      onClick={toggleVisibility}
                      className="bg-custom-blue text-white px-8 py-2.5 rounded-xl min-w-max text-sm"
                    >
                      Activate now
                    </button> */}
                    {isVisible && <Employees />}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className=" text-sm font-normal text-gray-2">Total investment</p>
                    <h3 className="text-2xl font-semibold">$12 M</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className=" text-sm font-normal text-gray-2">ROI</p>
                    <h3 className="text-2xl font-semibold text-green-500">21%</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className=" text-sm font-normal text-gray-2">Total projects</p>
                    <h3 className="text-2xl font-semibold">224</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className=" text-sm font-normal text-gray-2">Total investors</p>
                    <h3 className="text-2xl font-semibold">11K</h3>
                  </div>
                </div>
              </div>
              <div className=" col-span-4">
                <BalanceGraph />
              </div>
            </div>

            {/* <div> */}
            <Project />
            {/* </div> */}

            <div className="grid lg:grid-cols-2 gap-5 pt-5">
              <div className="">
                <div className=" flex justify-between items-center gap-4">
                  <div className="">
                    <h1 className="text-xl font-semibold min-w-max text-gray-1">All Investers</h1>
                  </div>
                  <div className="w-full border-b-2"></div>
                  <div className="text-custom-blue min-w-max">
                    <button className=" font-semibold hover:scale-105 hover:text-blue-500">View all</button>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="border rounded-xl p-5  w-full justify-between flex flex-col items-stretch">
                    <div className="grid grid-cols-3 text-[#1E1E1E]">
                      <div className="text-base font-medium">Name</div>
                      <div className="text-base font-medium">Time</div>
                      <div className="text-base font-medium">Investment</div>
                      <div className="border-b-2 pt-2 col-span-3"></div>
                    </div>
                    {investment.map((value, i) => {
                      return (
                        <>
                          <div
                            key={i}
                            className="grid grid-cols-3 pt-4 border-b text-[#1E1E1E]"
                          >
                            <div><h1 className=" font-normal text-[#686868] font-open-sans text-base underline">{value.name}</h1></div>
                            <div><p className="text-base font-light">10:20:40 AM</p></div>
                            <div><p className="text-base font-light">$**</p></div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" flex justify-between items-center gap-4">
                  <div className="">
                    <h1 className="text-lg font-semibold min-w-max">All Reviews</h1>
                  </div>
                  <div className="w-full border-b-2"></div>
                  <div className="text-custom-blue min-w-max">
                    <button className="text-sm font-semibold hover:scale-105 hover:text-blue-500">View all</button>
                  </div>
                </div>
                <div className="flex gap-4 pt-4 items-center">
                  <div>
                    <Button
                      title={"All reviews"}
                    />
                  </div>
                  <div>
                    <OutlineButton
                      className={"text-gray-2 border-gray-2 hover:bg-gray-2 hover:text-white"}
                      title={"Write a review"}
                    />

                  </div>
                </div>
                {review.map((value, i) => {
                  return (
                    <>
                      <div className="border p-3 rounded-xl shadow my-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="icon">
                              <p>
                                <img src={vectorImage} alt="" />
                              </p>
                            </div>
                            <div>
                              <h1 className="text-xl font-semibold">
                                Jonas Sousa
                              </h1>
                              <p className="opacity-65 font-normal">Investor</p>
                            </div>
                          </div>
                          <div>
                            <img src={starImage} alt="" />
                          </div>
                        </div>
                        <div className="pt-4">
                          <p className=" text-sm font-normal opacity-55">
                            I didn't know the first thing about investing. This
                            book helped me understand some basic topics. It even
                            taught me who to be careful with when taking advice
                            about investing, wink wink youtube gurus. I
                            recommend this book to anyone trying to understand
                            the stock market before investing.
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === "second" && (
          <>
            <div className="lg:grid lg:grid-cols-12 flex flex-col gap-5">
              <div className="bg-white md:p-6 p-4 border rounded-2xl shadow xs:col-span-12 md:lg:col-span-8">
                <div className="flex flex-row justify-between items-center ">
                  <div>
                    <h2 className="text-lg font-medium opacity-50 min-w-max">
                      My Investments
                    </h2>
                    <p className="lg:text-5xl xs:text-3xl font-medium py-3">
                      $12,000.00
                      <span className="hidden md:inline text-3xl text-green-500">(+21%)</span>
                    </p>
                  </div>
                  <div className="w-1/4">
                    <Line data={data} options={options} />
                  </div>
                </div>


                <div className="pt-14">
                  <div className=" hidden lg:flex justify-between p-6 border-2 rounded-xl">
                    <div className="flex flex-col justify-between">
                      <p className="text-gray-600">Total Returns</p>
                      <p className="text-2xl font-semibold text-green-600">
                        $2,520.00
                      </p>
                      <p className="text-green-600">↑ 21%</p>
                    </div>
                    <div className="border"></div>
                    <div className="flex flex-col justify-between">
                      <p className="text-gray-600">My balance</p>
                      <p className="text-2xl font-semibold text-green-600">
                        $14,500.00
                      </p>
                      <p className="text-green-600">↑ 21%</p>
                    </div>
                    <div className="xs:hidden md:block border"></div>
                    <div className="xs:hidden md:flex md:flex-col md:justify-between">
                      <p></p>
                      <p className="text-gray-600">Active investments</p>
                      <p className="text-2xl text-right font-semibold text-green-600">5</p>
                    </div>
                  </div>

                  <div className=" flex lg:hidden flex-row justify-between items-center">
                    <div>
                      <p className="text-[#737373] text-xs">
                        Total returns </p>
                      <p className="text-custom-green text-base font-bold"> $2520.00</p>
                      <p className="text-custom-green text-xs font-medium">↑ 21%</p>
                    </div>

                    <div>
                      <p className="text-[#737373] text-xs">My balance</p>
                      <p className="text-gray-1 text-base font-bold">$14250.00</p>
                      <p className="text-custom-green text-xs font-medium">↑ 21%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" xs:col-span-12 md:col-span-4  border-[3px] rounded-lg">
                <Graph />
              </div>
            </div>

            <div className="pt-6 xs:text-center md:text-left">
              <div>
                <h1 className="text-xl font-bold">
                  My portfolio <span className=" opacity-60">(24)</span>
                </h1>
              </div>
              <div className="flex gap-4 items-center py-6 xs:justify-center md:justify-start">
                <div className="flex gap-4 py-4">
                  <div>
                    <button
                      onClick={handleActiveButtonClick}
                      className={`px-4 py-2 font-semibold text-sm rounded-lg ${activeButton === "active"
                        ? "bg-custom-blue text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                    >
                      Active
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={handleCompletedButtonClick}
                      className={`px-4 py-2 font-semibold text-sm rounded-lg ${activeButton === "completed"
                        ? "bg-custom-blue text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                    >
                      Completed
                    </button>
                  </div>
                </div>
              </div>
              {activeButton === "active" && (
                <>
                  <div>
                    <Project />
                  </div>

                  <div>
                    <Project />
                  </div>
                </>
              )}

              {activeButton === "completed" && (
                <>
                  <div>
                    <InvestmentCompleted />
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Investment;

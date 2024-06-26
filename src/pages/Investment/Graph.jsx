import React from "react";
import { useState } from "react";
// import Employees from "./Employees";
import { Line } from "react-chartjs-2";
// import CardSection from "./CardSection";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
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
        fill: false,
        borderColor: "#6366F1",
        tension: 0.1,
        pointBackgroundColor: "#6366F1",
        pointBorderColor: "#FFFFFF",
        pointHoverBackgroundColor: "#FFFFFF",
        pointHoverBorderColor: "#6366F1",
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
        display: true,
        beginAtZero: true,
      },
    },
  };


  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className=" mx-auto ">
      <div className="lg:col-span-4">

        <div className="bg-white  rounded-lg p-6 ">
          <div className="">
            <div className="flex  justify-between items-center">
              <div>
                <h1 className="font-semibold text-xl">My Balance</h1>
              </div>
              <div>
                <p className="text-xl text-custom-blue font-semibold">$12500.00</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 items-center px-4 py-10 w-full">
            <div className=" flex items-center justify-between">
              <select name="" id="" className=" rounded-lg px-2 py-2.5 outline-2 border text-sm opacity-60">
                <option value="last 7 days">last 7 days</option>
                <option value="last 7 days">last 7 days</option>
                <option value="last 7 days">last 7 days</option>
                <option value="last 7 days">last 7 days</option>
                <option value="last 7 days">last 7 days</option>
                <option value="last 7 days">last 7 days</option>
                <option value="last 7 days">last 7 days</option>
              </select>
            </div>
            <div>
              <button
                onClick={toggleVisibility}
                className="bg-custom-blue text-white px-6 py-3 rounded-lg xs:text-sm min-w-max "
              >
                Add money
              </button>

            </div>
          </div>
          <Line data={data} options={options} />
        </div>
      </div>

    </div>
  );
};

export default Graph;

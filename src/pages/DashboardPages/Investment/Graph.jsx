import React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
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

const Graph = ({ inline }) => {
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

        <div className="bg-white  rounded-xl p-6 ">
          <div className="">
            <div className="flex  justify-between items-center">
              <div>
                <h1 className="font-semibold text-xl font-poppins">My Balance</h1>
              </div>
              <div>
                <p className="text-xl text-custom-blue font-semibold font-poppins">$12500.00
                  <span className={`text-[#3EB14A] text-lg font-medium font-poppins`}>
                    (+21%)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 items-center px-4 py-10 w-full">
            <div className=" flex items-center justify-between">
              <select name="" id="" className=" rounded-xl px-4 py-3 outline-2 border text-sm opacity-60">
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
                className="bg-custom-blue text-white px-4 py-3 rounded-xl xs:text-sm min-w-max "
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

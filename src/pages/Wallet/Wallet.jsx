import React from "react";
import { useState } from "react";
import Employees from "./Employees";
import { Line } from "react-chartjs-2";
import CardSection from "./CardSection";
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

const Wallet = () => {
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
        display: true,
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
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Wallet</h2>
        <div className="bg-white shadow-md rounded p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-4xl font-bold">$12500.00</p>
              <p className="text-gray-500">Current Balance</p>
            </div>
            <div>
              <button
                onClick={toggleVisibility}
                className="bg-custom-blue text-white px-4 py-2 rounded mb-4"
              >
                Add money
              </button>
              {isVisible && <Employees />}
            </div>
          </div>
          <Line data={data} options={options} />
        </div>
      </div>
      <div>
        <CardSection />
      </div>
    </div>
  );
};

export default Wallet;

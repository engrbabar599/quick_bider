import React from "react";
import { useState } from "react";
import Employees from "./Employees";
import { Line } from "react-chartjs-2";
import { Button } from "../../components/Button"
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
    <div className="container mx-auto md:p-4 lg:grid flex flex-col lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2">
        <h2 className="md:text-2xl font-medium font-poppins text-gray-1 mb-4 text-lg">Wallet</h2>
        <div className="bg-white shadow rounded-lg border md:p-6 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="xs:text-xl md:text-4xl font-semibold text-gray-1 font-poppins">$12500.00</p>
              <p className="text-gray-1">Current Balance</p>
            </div>
            <div>
              <Button
                className={"md:px-6 !text-xs"}
                onClick={toggleVisibility}
                title={"Add money"}
              />

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

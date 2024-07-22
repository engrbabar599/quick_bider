import React from "react";
import { useState } from "react";
import Employees from "./Employees";
import { Line } from "react-chartjs-2";
import { Button } from "../../components/Button";
import CardSection from "./CardSection";
import cwb from "../../assets/images/cwb.png";
import edit from "../../assets/images/edit.png";
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
import Withdraw from "./Withdraw";

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
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="container mx-auto md:p-4 lg:grid flex flex-col lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2">
        <h2 className="text-base md:text-2xl font-medium font-poppins text-gray-1 mb-4">
          Wallet
        </h2>
        <div className="bg-white shadow rounded-xl border px-5 py-6 md:py-12">
          <div className="flex justify-between items-center flex-wrap">
            <div>
              <p className="xs:text-2xl md:text-[64px] xs:font-semibold text-gray-1 font-poppins">
                $12500.00
              </p>
              <p className="text-gray-1 text-[20px] xs:text-sm font-noraml font-poppins md:py-8 xs:py-3">
                Current Balance
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <button
                  onClick={toggleVisibility}
                  className="px-4 py-3 rounded-xl text-white bg-[#6F9CFF] text-sm font-semibold font-inter md:w-[172px]"
                >
                  Add money
                </button>
                {isVisible && <Employees />}
              </div>
              <div>
                <div>
                  <button
                    onClick={toggleShow}
                    className="px-4 py-3 border rounded-xl text-gray-1 text-sm font-semibold font-inter w-[172px] border-gray-1 hidden md:block hover:bg-custom-blue hover:text-white hover:border-none">
                    Withdraw
                  </button>
                  {show && <Withdraw />}
                </div>
              </div>
            </div>
          </div>
          <Line data={data} options={options} />
        </div>
        <div>
          <div className="py-6">
            <h1 className="text-2xl font-medium font-poppins">Bank account</h1>
          </div>
          <div className="border px-3 py-7 rounded-xl shadow">
            <div className="border border-[#6f9cff] rounded-xl">
              <div className="flex justify-between items-center px-2 py-4">
                <div className="flex items-center gap-3">
                  <div>
                    <img src={cwb} alt="" />
                  </div>
                  <div>
                    <h1 className="text-base font-semibold font-poppins text-gray-1">
                      **** **** 1454
                    </h1>
                    <h1 className="text-[10px] font-normal text-gray-4 font-poppins">
                      Canadian western bank
                    </h1>
                  </div>
                </div>
                <div>
                  <button className="text-sm font-semibold font-inter border flex items-center gap-3 w-[94px] py-3 px-5 rounded-xl border-gray-1">
                    <img src={edit} alt="" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-7">

              <Button
                className={"md:w-2/5 min-w-max font-inter"}
                title={"+Add new bank account"} />
              {/* <button className="py-3 w-[194px] bg-custom-blue text-white rounded-xl text-sm font-semibold font-inter">
                +Add new bank account
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <CardSection />
      </div>
    </div>
  );
};

export default Wallet;

import { DashboardLayout } from 'components/Layout'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { NavLink } from 'react-router-dom'
import vectorImage from "assets/images/Vector.png";
import starImage from "assets/images/star.png";
import { useState } from "react";
import Project from '../Elements/UpcomingInvestmentSection';
import Graph from '../Graph';
import { BalanceSection } from 'components/Elements/BalanceSection';
import { useGetInvestmentProject, useGetUserInvestment } from 'api/AuctionManagement';
import UpcomingInvestmentSection from '../Elements/UpcomingInvestmentSection';
import { useGetWallet } from 'api/UserManagement';
import { Button } from 'components/Button';
import InvestmentProjectCard from '../Elements/InvestmentProjectCard';
import { InvestmentSkeleton } from 'components/Skeleton/InvestmentSkeleton';

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
function PortfolioPage() {


    const [statusFilter, setStatusFilter] = useState("True")

    const { data: userInvestments,
        isLoading: isLoadingUserInvestments } = useGetUserInvestment({ is_active: statusFilter })
    const { data: walletDetails } = useGetWallet()

    const { data: investmentProjects, isLoading: isLoadingInvestments } = useGetInvestmentProject()

    return (
        <DashboardLayout activeSidebar={"Investments"}>
            <div>
                <h1 className="hidden md:flex text-2xl font-medium text-gray-1">
                    Investments
                </h1>

                <div className="flex md:justify-start  justify-center gap-4 py-4">
                    <NavLink
                        to={"/investments"}
                        className={({ isActive }) => (
                            `md:px-5 md:py-3 px-[10px] py-[7px] md:font-semibold font-medium text-sm rounded-xl font-poppins ${isActive ? 'bg-custom-blue text-white' :
                                'text-gray-2  border border-gray-2'}`)}>
                        Investments
                    </NavLink>
                    <NavLink
                        to={"/portfolio"}
                        className={({ isActive }) => (
                            `md:px-5 md:py-3 px-[10px] py-[7px] md:font-semibold font-medium text-sm rounded-xl font-poppins ${isActive ? 'bg-custom-blue text-white' :
                                'text-gray-2  border border-gray-2'}`)}>
                        My portfolio
                    </NavLink>
                </div>
            </div>


            <div className="lg:grid lg:grid-cols-12 flex flex-col gap-5">
                <div className="bg-white md:p-6 p-4 border rounded-2xl shadow xs:col-span-12 md:lg:col-span-8">
                    <div className="flex flex-row justify-between items-center ">
                        <div>
                            <h2 className="text-base md:text-lg font-medium text-[#737373] font-lato min-w-max">
                                My Investments
                            </h2>
                            <p className=" md:text-[48px] text-2xl font-semibold font-lato py-3">
                                ${userInvestments?.my_investments || 0}
                                <span className="hidden md:inline text-[36px] text-[#3EB14A] font-lato">
                                    (+21%)
                                </span>
                            </p>
                        </div>
                        <div className="md:w-1/4 w-[40%]">
                            <Line data={data} options={options} />
                        </div>
                    </div>


                    <div className="md:pt-14 pt-[28px] ">
                        <div className=" flex flex-row  justify-between md:p-4 md:border border-gray-5 rounded-xl">
                            <div className="flex flex-col  items-start justify-center gap-[6px] md:gap-[12px] md:min-w-[150px] xl:min-w-[191px] ">
                                <p className="text-[#737373] md:text-lg text-xs font-normal font-lato ">Total Returns</p>
                                <p className="md:text-[32px] text-base font-bold font-lato text-[#66C87B]">
                                    ${userInvestments?.total_return || 0}
                                </p>
                                <p className="text-[#66C87B] text-xs font-lato font-medium">↑ 21%</p>
                            </div>

                            <div className="border border-black border-opacity-[0.12] "></div>

                            <div className="flex flex-col items-end justify-center  md:min-w-[150px] xl:min-w-[191px] gap-[6px] md:gap-[12px] ">
                                <p className="text-[#737373] md:text-lg text-xs font-normal font-lato text-right">My balance</p>
                                <p className="md:text-[32px]  text-base   font-bold font-lato text-[#66C87B]">
                                    ${walletDetails?.balance || 0}
                                </p>
                                <p className="text-[#66C87B] text-xs font-lato font-medium text-right">
                                    ↑ 21%
                                </p>
                            </div>
                            <div className="hidden md:block border border-black border-opacity-[0.12]"></div>
                            <div className="hidden md:flex md:flex-col md:justify-center items-end gap-[12px] min-w-[150px] xl:min-w-[191px]">
                                <p></p>
                                <p className="text-[#737373] text-lg font-normal font-lato">
                                    Active investments
                                </p>
                                <p className="text-[32px] font-bold font-lato text-[#66C87B] text-right">
                                    {userInvestments?.active_investments || 0}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" xs:col-span-12 md:col-span-4  ">
                    {/* <Graph block="inline" /> */}
                    <BalanceSection />
                </div>
            </div>

            <div className="pt-6 text-center md:text-left">
                <h1 className="md:text-2xl text-lg font-medium font-poppins">
                    My portfolio{" "}
                    <span className=" text-lg font-medium font-poppins text-[#828282]">
                        ({userInvestments?.active_investments || 0})
                    </span>
                </h1>

                <div className="flex gap-4 items-center py-[20px] md:py-6 xs:justify-center md:justify-start">
                    <div className="flex gap-4 ">
                        <button
                            onClick={() => setStatusFilter("True")}
                            className={`md:px-5 md:py-2.5 px-[10px] py-[7px] font-semibold text-sm font-poppins rounded-xl border ${statusFilter == 'True'
                                ? "bg-custom-blue text-white"
                                : " text-gray-2 border border-gray-2"
                                }`}
                        >
                            Active
                        </button>
                        <button
                            onClick={() => setStatusFilter("False")}
                            className={`md:px-5 md:py-2.5 px-[10px] py-[7px] font-semibold text-sm font-poppins rounded-xl border ${statusFilter == "False"
                                ? "bg-custom-blue text-white"
                                : " text-gray-2 border border-gray-2"
                                }`}
                        >
                            Completed
                        </button>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-5">
                    <div className="flex xl:flex-row flex-col justify-between w-full gap-5 items-center  ">
                        <div className="flex flex-row flex-wrap gap-[20px] items-center justify-center ">
                            {isLoadingUserInvestments ?
                                Array(4).fill(null)?.map((_, index) => (
                                    <InvestmentSkeleton key={index} />
                                ))
                                :
                                investmentProjects?.results?.length > 0 ?
                                    investmentProjects?.results?.map((data) =>
                                        <>
                                            <InvestmentProjectCard data={{ ...data, status: statusFilter == "True" ? "active" : "completed" }} />
                                        </>
                                    )
                                    :
                                    <div className='flex items-center justify-center w-[60vw] capitalize text-2xl font-semibold h-[30vh]'>
                                        No {statusFilter == "True" ? "Active" : "Completed"} investments
                                    </div>

                            }

                        </div>
                        {investmentProjects?.results?.length > 4 &&
                            <div className=" h-full flex-1 w-full flex items-center justify-center">
                                <Button
                                    customWidth={"min-w-max"}
                                    customTheme={"btn-outline"}
                                    title={"View all"}
                                />
                            </div>
                        }
                    </div>


                </div>

            </div>


            <>
                <UpcomingInvestmentSection />
            </>
        </DashboardLayout >
    )
}

export default PortfolioPage
import React from 'react'
import IMAGES from '../../assets/IMAGES'
import { Button } from "../../components/Button"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { TrophyIcon } from '../../assets/svgs/TrophyIcon'
import { StarIcon } from '../../assets/svgs/StarIcon'
import { Link } from 'react-router-dom'
import { OutlineButton } from '../../components/OutlineButton'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
    labels: ['12', '13', '14', '15', '16', '17'],
    datasets: [
        {
            label: 'Investment',
            data: [4000, 8000, 9000, 10000, 12000, 7800],
            fill: false,
            borderColor: "#6F9CFF",
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            tension: 0.4,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 4,
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
            enabled: false,
            backgroundColor: '#f5f5f5',
            titleColor: '#333',
            bodyColor: '#666',
            cornerRadius: 4,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                font: {
                    family: "Inter",
                    size: 12,
                },
                color: "#828282"
            },
        },
        y: {
            grid: {
                borderDash: [5, 5],
            },
            ticks: {
                font: {
                    size: 12,
                    family: "Inter"
                },
                color: "#828282",

                callback: function (value) {
                    return '$' + value;
                },
            },
        },

    },
};

export const Dashboard = () => {
    return (
        <div className='gap-8 flex flex-col'>

            <div className='grid lg:grid-cols-3  gap-8 w-full'>

                {/* First Column with thr ad and Bids */}
                <div className='flex flex-col gap-8 lg:col-span-2'>

                    <img src={IMAGES?.mainAd} alt="" className='lg:col-span-2' />


                    <div className='lg:col-span-2 space-y-4'>
                        <div className='flex flex-row justify-between font-poppins font-semibold'>
                            <h3 className='text-gray-1  lg:text-2xl text-base'>
                                Trending Auctions
                            </h3>
                            <button className='text-custom-blue lg:text-base text-sm '>View all</button>
                        </div>


                        <div className='flex  lg:flex-row flex-col gap-4 items-center px-7 lg:px-0 '>
                            {Array(3).fill().map((_, index) => (
                                <div className=' bg-white border shadow-sm  rounded-xl group lg:hover:scale-105 duration-300 transform ease-in'>
                                    <div className='space-y-4 p-4'>
                                        <img src={IMAGES?.mustang} alt="" className='object-contain !rounded-lg ' />

                                        <div className='font-poppins font-semibold text-lg'>
                                            <div className='flex flex-col'>
                                                <p className='text-gray-1'>Ford Mustang
                                                    <span className='text-gray-4 text-base font-normal'>(2017 Model)</span>
                                                </p>
                                                <p className='font-poppins font-medium text-sm'>250 <span className='font-normal text-gray-4'>Member</span> </p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='flex flex-row justify-around items-center group-hover:bg-custom-blue group-hover:bg-opacity-10 '>

                                        <div className='flex flex-row w-full justify-between  p-2'>
                                            <div className='font-poppins text-gray-4 font-normal'>
                                                <p className='text-xs'>Bid Amount</p>
                                                <p className='font-semibold text-base text-gray-1'>$5.00
                                                    <span className='text-gray-4 font-normal text-sm'>(4 Rounds)</span>
                                                </p>
                                            </div>
                                            <div>

                                                <Button
                                                    className={"!p-2 bg-white !text-custom-blue group-hover:bg-custom-blue group-hover:!text-white border border-custom-blue"}
                                                    title={"Place a Bid"}
                                                />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Second Column with the chart and ad */}

                <div className='flex flex-col gap-8 w-full justify-between items-center'>

                    <div className=' border rounded-xl p-4 border-gray-5 flex flex-col shadow-sm space-y-8 w-full '>
                        <div className='flex flex-row justify-between items-center font-heading'>
                            <p className=''>My Balance</p>
                            <p className='text-custom-blue'>$12500.00
                                <span className='text-custom-green'>
                                    (+21%)
                                </span>
                            </p>
                        </div>
                        <div className='flex flex-row space-x-4 w-full '>
                            <select name="" id="" className='w-full border outline-none border-[#E6E6E6] rounded-xl  font-base-2'>
                                <option value="">Last 7 days</option>
                                <option value="">Last 30 days</option>
                                <option value="">Last 60 days</option>
                            </select>

                            <div className='w-full'>

                                <Button
                                    title={"Add Money"}
                                />
                            </div>

                        </div>

                        <div className='w-full items-center flex justify-center'>
                            <Line data={data} options={options} />
                        </div>
                    </div>

                    <img src={IMAGES?.sipAd} alt="" className='object-contain hidden lg:block' />
                </div>
            </div>



            <div className='lg:grid lg:grid-cols-7 gap-8 flex flex-col'>

                <div className='flex flex-col w-full gap-8 lg:col-span-4'>
                    <div className='flex flex-row w-full font-poppins font-semibold items-center justify-between gap-5'>
                        <h3 className=' lg:text-2xl text-base text-gray-1 min-w-max'>
                            Recent winners
                        </h3>
                        <div className='border-[#F5F5F5] border-2 w-full'></div>
                        <button className='text-custom-blue lg:text-base text-sm min-w-max'>
                            All winners
                        </button>
                    </div>



                    <div className='flex flex-col gap-5 px-1'>
                        {Array(4).fill().map((_, index) => (
                            <div className='flex lg:flex-row flex-col lg:items-center items-start justify-between py-4 px-4 bg-custom-blue bg-opacity-10 rounded-2xl gap-4 '>
                                <div className='flex flex-row space-x-2 items-center'>
                                    <TrophyIcon />
                                    <img src={IMAGES?.winnerPic} alt="" className='object-contain h-12 w-12' />
                                    <div className='font-poppins text-base'>
                                        <p className='text-gray-1 font-semibold '>
                                            Robert Fox
                                        </p>
                                        <div className='font-normal text-gray-4 flex flex-row space-x-1'>
                                            <p>
                                                Score:
                                            </p>
                                            <span className='text-custom-blue'>
                                                1280
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                <div className=' flex flex-row space-x-3 justify-between lg:w-auto w-full items-center'>

                                    <div className='flex flex-col items-start justify-center'>
                                        <div className='flex items-center space-x-1 font-poppins lg:text-base text-xs'>
                                            <p className='font-normal text-gray-4'>Date:</p>
                                            <p className='font-semibold text-gray-1'>24/05/2024</p>
                                        </div>
                                        <div className='flex items-center space-x-1 font-poppins lg:text-base text-xs'>
                                            <p className='font-normal text-gray-4'>Province:</p>
                                            <p className='font-semibold text-gray-1'>Surrey(BC)</p>
                                        </div>


                                    </div>

                                    <div className='flex flex-col items-center justify-center space-y-1'>
                                        <div>
                                            <OutlineButton
                                                title={"Send reaction"}
                                                className={"! !text-sm !py-2.5 !px-4"}
                                            />
                                        </div>

                                        <div className='flex flex-row space-x-1'>
                                            <StarIcon />
                                            <p className='text-custom-green font-poppins font-normal text-sm'>
                                                432 reactions
                                            </p>

                                        </div>
                                    </div>
                                </div>





                            </div>
                        ))}
                    </div>











                </div>


                <div className='lg:col-span-3 flex flex-col lg:gap-8 gap-5'>

                    <div className='flex flex-row items-center justify-between font-poppins font-semibold '>
                        <div className='flex flex-row  items-center text-base'>
                            <h3 className='text-gray-1 lg:text-2xl text-base'>My bids</h3>
                            <span className='text-custom-blue lg:text-lg font-normal'>(3 active)</span>
                        </div>

                        <button className='text-custom-blue hover:scale-105 hover:text-blue-500 text-sm lg:text-base'>
                            View all
                        </button>

                    </div>

                    <div className='bg-white border rounded-2xl shadow-sm lg:p-8 p-4'>
                        <div className='flex flex-col gap-5 font-poppins'>

                            <div className='hidden lg:flex gap-4  flex-row items-center '>
                                {Array(3).fill().map((_, index) => (
                                    <div className={`${index === 1 ? "" : ""} `}>
                                        <img src={IMAGES?.mybids1} alt="" className='object-contain ' />
                                    </div>
                                ))}
                            </div>
                            <img src={IMAGES?.mybids1} alt="" className='object-contain lg:hidden ' />


                            <div className='flex flex-row justify-between items-center font-poppins '>
                                <div className='flex flex-col gap-2 lg:text-xl text-base'>
                                    <h5 className='text-gray-1 font-semibold '>
                                        Investment audi
                                    </h5>
                                    <Link className='font-normal text-gray-4 hover:underline text-sm'>
                                        @invest.audi
                                    </Link>
                                </div>
                                <div>
                                    <OutlineButton
                                        // className={""}
                                        title={"View Details"}
                                    // onClick={}
                                    />
                                </div>
                            </div>

                            <p className='text-gray-4 lg:text-base text-xs font-normal'>
                                Bid Online and attend Bidding Events for Pre-owned Cars, Bikes, Trucks, Construction Equipment, Tractors.
                            </p>


                            <div className='grid lg:grid-cols-3 grid-cols-2 p-4  bg-custom-gray rounded-2xl gap-x-3.5 divide-x w-full '>
                                <div className='flex flex-col items-center justify-between gap-3 '>
                                    <h5 className='text-custom-blue text-xl font-semibold'>
                                        $500.00
                                    </h5>
                                    <p className='text-gray-400 text-sm text-center'>
                                        Invested Amount
                                    </p>
                                </div>
                                <div className='flex flex-col items-center justify-between gap-3  '>
                                    <h5 className='text-custom-green text-xl font-semibold'>
                                        21 %
                                    </h5>
                                    <p className='text-gray-400 text-sm text-center'>
                                        ROI
                                    </p>
                                </div>
                                <div className='lg:flex flex-col items-center justify-between gap-3 hidden'>
                                    <h5 className='text-gray-1 text-xl font-semibold'>
                                        25/05/2024
                                    </h5>
                                    <p className='text-gray-400 text-sm'>
                                        Date
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

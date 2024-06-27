import React from 'react'
import { Button } from '../../components/Button'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

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


export const BalanceGraph = ({hidden}) => {
    return (
        <div className=' border rounded-xl p-4 border-gray-5 flex flex-col shadow-sm space-y-8 w-full xs:mt-4 lg:mt-0'>
            <div className='flex flex-row justify-between items-center font-heading !text-lg'>
                <p className='text-xl font-semibold font-poppins'>My Balance</p>
                <p className='text-custom-blue text-xl font-semibold'>$12500.00
                    <span className={`text-custom-green ${hidden} `}>
                        (+21%)
                    </span>
                </p>
            </div>
            <div className='flex flex-row space-x-4 w-full '>
                <select name="" id="" className='w-full border outline-none border-[#E6E6E6] rounded-xl  font-base-2 px-2'>
                    <option value="">Last 7 days</option>
                    <option value="">Last 30 days</option>
                    <option value="">Last 60 days</option>
                </select>

                <div className='w-full'>
                    <Button
                        className={"!text-sm"}
                        title={"Add money"}
                    />
                </div>

            </div>

            <div className='items-center flex justify-center'>
                <Line data={data} options={options} />
            </div>
        </div>)
}



import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { useGetWallet } from 'api/UserManagement';
import AddMoneyPopup from 'components/Popups/AddMoneyPopup';
import AddNewCard from 'components/Popups/AddNewCard';
import Dropdown from 'components/Dropdown';

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

export const BalanceSection = ({ hidden }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [filterData, setFilterData] = useState('7')
    const [openAddCardPopup, setOpenNewCardPopup] = useState(false)


    const { data: walletData } = useGetWallet()

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='border rounded-xl p-4 border-gray-5 flex flex-col shadow-sm space-y-8 w-full'>
            <div className='flex flex-wrap flex-row justify-between items-center font-heading text-lg'>
                <p className='text-xl font-semibold font-poppins'>My Balance</p>
                <p className='text-custom-blue text-xl font-semibold'>${walletData?.balance ? walletData?.balance : 0}
                    <span className={`text-custom-green ${hidden}`}>
                        (+21%)
                    </span>
                </p>
            </div>
            <div className='gap-3 grid grid-cols-2 items-center justify-center w-full'>
                <Dropdown
                    value={filterData}
                    onChange={(value) => setFilterData(value)}
                    options={[
                        { label: "Last 7 days", value: '7' },
                        { label: "Last 30 days", value: '30' },
                        { label: "Last 60 days", value: '60' }
                    ]}
                />

                <Button
                    customPadding={""}
                    onClick={handleShowPopup}
                    className="!text-sm"
                    title="Add money"
                />
            </div>

            <div className='flex justify-center items-center min-h-fit   min-w-full  '>
                <Line data={data} options={options} />
            </div>

            {showPopup &&
                <AddMoneyPopup
                    show={showPopup}
                    onClose={handleClosePopup}
                />
            }

        </div>
    );
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CountDownTimer } from './CountDownTimer'

export default function AuctionCard({ data, from }) {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => { navigate(`/dashboard/bids`, { state: { auctionDetails: { ...data, from } } }) }}
            className={`bg-white border shadow-sm  rounded-xl group lg:hover:scale-105 duration-300 transform ease-in cursor-pointer w-full h-full md:max-w-[310px] max-w-[300px] lg:max-w-[300px] xl:max-w-[250px] `}>
            <div className='space-y-4 p-4 relative '>
                <img src={data?.thumbnail_image} alt="" className=' h-[140px] max-h-[150px] w-full  object-fill !rounded-lg bg-gray-200 ' />
                <div className=''>
                    <CountDownTimer timeStamp={data?.bid_date_time} />
                </div>
                <div className='font-poppins font-semibold text-sm lg:text-base'>
                    <div className='flex flex-col'>
                        <p className='text-gray-1 truncate min-w-[170px] '>
                            {data?.title}

                        </p>
                        <p className='font-poppins font-medium text-xs lg:text-sm'>{data?.participants?.length} <span className='font-normal text-gray-4'>Member</span> </p>
                    </div>
                </div>

            </div>


            <div className='flex flex-row justify-around items-center bg-custom-blue bg-opacity-10 '>

                <div className='flex flex-row w-full justify-between  p-2'>
                    <div className='font-poppins text-gray-4 font-normal'>
                        <p className='text-xs'>Bid Amount</p>
                        <p className='font-semibold text-xs lg:text-sm text-gray-1'>${data?.bid_amount}
                            <span className='text-gray-4 font-normal text-xs'>({data?.bidding_round} Rounds)</span>
                        </p>
                    </div>
                    <div>

                        <button
                            className={"p-2  bg-custom-blue text-white border  text-xs lg:text-sm rounded-xl outline-none"}
                        >
                            Place a Bid
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}

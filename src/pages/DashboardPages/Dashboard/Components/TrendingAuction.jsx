import React, { useEffect, useState } from 'react'
import { Button } from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { useGetAuction } from 'api/AuctionManagement'
import { DashboardAuctionSkeleton } from 'components/Skeleton/DashboardAuctionSkeleton'
import { CountDownTimer } from 'components/Elements/CountDownTimer'


export const TrendingAuction = () => {
    const navigate = useNavigate()
    const { data: auctionData, isLoading: isLoadingAuction } = useGetAuction({ page: 1 })

    const [time, setTime] = useState({
        hours: 2,
        minutes: 4,
        seconds: 32,
    });


    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prevTime => {
                const { hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    return { ...prevTime, seconds: seconds - 1 };
                }
                if (minutes > 0) {
                    return { hours, minutes: minutes - 1, seconds: 59 };
                }
                if (hours > 0) {
                    return { hours: hours - 1, minutes: 59, seconds: 59 };
                }
                clearInterval(timerId);
                return prevTime;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className=' space-y-4'>
            <div className='flex flex-row justify-between font-poppins font-semibold'>
                <h3 className='text-gray-1  lg:text-xl text-base'>
                    Trending Auctions
                </h3>
                <button onClick={() => { navigate("/auction") }} className='text-custom-blue lg:text-base text-sm hover:text-blue-500 cursor-pointer hover:scale-105'>
                    View all
                </button>
            </div>


            <div className='flex md:flex-row flex-col gap-4 items-center px-7 lg:px-0 '>
                {isLoadingAuction ?
                    Array(3).fill().map((_, index) => (
                        <DashboardAuctionSkeleton key={index} />
                    ))
                    :
                    auctionData?.results?.map((data, index) => (
                        <div
                            key={index}
                            onClick={() => { navigate(`/dashboard/bids`, { state: { auctionDetails: data } }) }}
                            className=' bg-white border shadow-sm  rounded-xl group lg:hover:scale-105 duration-300 transform ease-in cursor-pointer'>
                            <div className='space-y-4 p-4 relative'>
                                <img src={data?.thumbnail_image} alt="" className=' w-[225px] h-[152px] object-contain !rounded-lg bg-gray-200 ' />
                                <div className=''>

                                    <CountDownTimer timeStamp={data?.bid_date_time} />

                                </div>
                                <div className='font-poppins font-semibold text-sm lg:text-base'>
                                    <div className='flex flex-col'>
                                        <p className='text-gray-1'>{data?.title}
                                            {/* <span className='text-gray-4 text-xs lg:text-sm font-normal'>(2017 Model)</span> */}
                                        </p>
                                        <p className='font-poppins font-medium text-xs lg:text-sm'>{data?.participants?.length} <span className='font-normal text-gray-4'>Member</span> </p>
                                    </div>
                                </div>

                            </div>


                            <div className='flex flex-row justify-around items-center group-hover:bg-custom-blue group-hover:bg-opacity-10 '>

                                <div className='flex flex-row w-full justify-between  p-2'>
                                    <div className='font-poppins text-gray-4 font-normal'>
                                        <p className='text-xs'>Bid Amount</p>
                                        <p className='font-semibold text-xs lg:text-sm text-gray-1'>${data?.bid_amount}
                                            <span className='text-gray-4 font-normal text-xs'>({data?.bidding_round} Rounds)</span>
                                        </p>
                                    </div>
                                    <div>

                                        <button
                                            className={"p-2 bg-white !text-custom-blue group-hover:bg-custom-blue group-hover:!text-white border border-custom-blue text-xs lg:text-sm rounded-xl outline-none"}
                                        >
                                            Place a Bid
                                        </button>
                                    </div>

                                </div>
                            </div>


                        </div>
                    ))}
            </div>

        </div>
    )
}

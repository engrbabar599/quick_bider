import React, { useEffect, useState } from 'react'
import { Button } from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { useGetAuction } from 'api/AuctionManagement'
import { DashboardAuctionSkeleton } from 'components/Skeleton/DashboardAuctionSkeleton'
import { CountDownTimer } from 'components/Elements/CountDownTimer'
import IMAGES from 'assets/IMAGES'
import AuctionCard from 'components/Elements/AuctionCard'


export const TrendingAuction = () => {
    const navigate = useNavigate()
    const { data: auctionData, isLoading: isLoadingAuction } = useGetAuction({ page: 0 })

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


            <div className='flex md:flex-row flex-col gap-4  items-center px-4 lg:px-0  justify-center '>
                {isLoadingAuction ?
                    Array(3).fill().map((_, index) => (
                        <DashboardAuctionSkeleton key={index} className={index == 2 ? 'lg:max-xl:hidden' : ""} />
                    ))
                    :
                    auctionData?.results?.length == 0 ?
                        <div className='w-full  h-full flex-1 flex min-h-[300px] items-center justify-center text-lg lg:text-xl font-poppins font-medium text-center'>
                            No Auction available at this time
                        </div>
                        :
                        auctionData?.results?.slice(6, 9)?.map((data, index) => (
                            <AuctionCard data={data} key={index} />
                        ))}
            </div>

        </div>
    )
}

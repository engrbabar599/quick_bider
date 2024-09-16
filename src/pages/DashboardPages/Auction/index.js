import React from 'react'
import { Button } from 'components/Button'
import { AuctionSkeleton } from 'components/Skeleton/AuctionSkeleton'
import { DashboardLayout } from 'components/Layout'
import { useAuctionHelper } from './helper'
import { CountDownTimer } from 'components/Elements/CountDownTimer'


export const AuctionPage = () => {
    const { auctionData, isLoadingAuction, navigate } = useAuctionHelper()

    return (
        <DashboardLayout activeSidebar={"Auction"}>
            <div className='flex flex-col gap-6'>
                <div className="flex flex-row justify-between items-center font-poppins">
                    <h3 className='text-gray-1 font-semibold text-xl'>Trending Auctions</h3>
                    <button className='text-custom-blue text-base font-semibold hover:scale-105 hover:text-blue-500 ease-in-out duration-300'>
                        View all
                    </button>
                </div>

                <div className='flex md:flex-row flex-col  items-center justify-center gap-x-14 gap-y-6 flex-wrap w-full'>
                    {isLoadingAuction ?
                        Array(8).fill().map((_, index) => (
                            <AuctionSkeleton key={index} />
                        ))
                        :
                        auctionData?.results?.map((data) => (
                            <div
                                key={data?.id}
                                onClick={() => { navigate(`/dashboard/bids`, { state: { auctionDetails: { ...data, from: "Auction" } } }) }}
                                className=' bg-white border shadow-sm  rounded-xl group lg:hover:scale-105 duration-300 transform ease-in cursor-pointer'>
                                <div className='space-y-4 p-4'>
                                    <img src={data?.thumbnail_image} alt="" className='object-contain !rounded-lg w-[256px] h-[182px] bg-gray-200' />
                                    <div className=''>

                                        <CountDownTimer timeStamp={data?.bid_date_time} />

                                    </div>

                                    <div className='font-poppins font-semibold text-base'>
                                        <div className='flex flex-col'>
                                            <p className='text-gray-1'>{data?.title}
                                                {/* <span className='text-gray-4 text-sm font-normal'>(2017 Model)</span> */}
                                            </p>
                                            <p className='font-poppins font-medium text-sm'>{data?.participant?.length} <span className='font-normal text-gray-4'>Member</span> </p>
                                        </div>
                                    </div>

                                </div>


                                <div className='flex flex-row justify-around items-center group-hover:bg-custom-blue group-hover:bg-opacity-10 '>

                                    <div className='flex flex-row w-full justify-between  p-2'>
                                        <div className='font-poppins text-gray-4 font-normal'>
                                            <p className='text-xs'>Bid Amount</p>
                                            <p className='font-semibold text-sm text-gray-1'>${data?.bid_amount}
                                                <span className='text-gray-4 font-normal text-xs'>({data?.bidding_round}Rounds)</span>
                                            </p>
                                        </div>
                                        <div>

                                            <button
                                                className={"px-[20px] py-[12px] bg-white !text-custom-blue group-hover:bg-custom-blue group-hover:!text-white border border-custom-blue text-xs lg:text-sm rounded-xl"}
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
        </DashboardLayout>

    )
}

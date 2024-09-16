import React from 'react'
import { Button } from '../../../components/Button'
import IMAGES from '../../../assets/IMAGES'
import { useNavigate } from 'react-router-dom'
import { useLoginContext } from '../../../context/LoginContext'
import { useGetAuction } from '../../../api/AuctionManagement'
import { AuctionSkeleton } from '../../../components/Skeleton/AuctionSkeleton'

export const TrendingAuction = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useLoginContext()
    const { data: auctionBid, isLoading: isLoadingAuction } = useGetAuction()

    return (
        <div className='lg:col-span-2 space-y-4 py-10 w-[90%] mx-auto'>
            <div className='flex  lg:flex-row flex-col gap-12 items-center px-7 lg:px-0 '>
                {isLoadingAuction ?
                    Array(3).fill().map((_, index) => (
                        <AuctionSkeleton key={index} />
                    ))
                    :
                    auctionBid?.results?.slice(0, 3)?.map((data, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                isLoggedIn ?
                                    navigate("/dashboard/bids") :
                                    navigate("/login")
                            }}
                            className=' bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)]  rounded-xl group lg:hover:scale-105 duration-300 transform ease-in cursor-pointer'>
                            <div className='space-y-4 p-4'>
                                {/* <img src={IMAGES?.mustang} alt="" className='object-contain !rounded-lg lg:w-full sm:w-1/2 w-full mx-auto' /> */}
                                <img src={data?.thumbnail_image} alt="" className='object-contain !rounded-lg mx-auto h-[182px] w-[265px] bg-gray-5' />


                                <div className='font-poppins font-semibold text-base'>
                                    <div className='flex flex-col'>
                                        <p className='text-gray-1'>{data?.title}
                                            {/* <span className='text-gray-4 text-sm font-normal'>(2017 Model)</span> */}
                                        </p>
                                        <p className='font-poppins font-medium text-sm'>{data?.participants?.length} <span className='font-normal text-gray-4'>Member</span> </p>
                                    </div>
                                </div>

                            </div>


                            <div className='flex flex-row justify-around items-center group-hover:bg-custom-blue group-hover:bg-opacity-10 '>

                                <div className='flex flex-row w-full justify-between  p-2'>
                                    <div className='font-poppins text-gray-4 font-normal'>
                                        <p className='text-xs'>Bid Amount</p>
                                        <p className='font-semibold text-sm text-gray-1'>${data?.bid_amount}
                                            <span className='text-gray-4 font-normal text-xs'>({data?.bidding_round} Rounds)</span>
                                        </p>
                                    </div>
                                    <div>

                                        <Button
                                            className={"!p-2 bg-white !text-custom-blue group-hover:bg-custom-blue group-hover:!text-white border border-custom-blue !text-sm"}
                                            title={"Place a Bid"}
                                        />
                                    </div>

                                </div>
                            </div>


                        </div>
                    ))}
            </div>
        </div>
    )
}


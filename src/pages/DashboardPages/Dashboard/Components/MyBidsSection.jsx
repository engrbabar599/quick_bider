import React from 'react'
import { OutlineButton } from '../../../../components/OutlineButton'
import { Link, useNavigate } from 'react-router-dom'
import IMAGES from '../../../../assets/IMAGES'
import { useGetBidParticipant, useGetUserInvestment } from 'api/AuctionManagement'
import Spinner from 'components/Spinner'
import { Button } from 'components/Button'


export const MyBidsSection = () => {
    const navigate = useNavigate();
    const { data: activeBids } = useGetBidParticipant({ is_active: true })
    const { data: investmentData, isLoading: isLoadingUserInvestment } = useGetUserInvestment({ is_active: true })

    return (
        <div className='lg:col-span-3 flex flex-col lg:gap-8 gap-5'>
            <div className='flex flex-row items-center justify-between font-poppins font-semibold '>
                <div className='flex flex-row  items-center text-base'>
                    <h3 className='text-gray-1 lg:text-xl text-base'>My Investments</h3>
                    <span className='text-custom-blue lg:text-base font-normal'>
                        ({investmentData?.active_investments || 0} active)
                    </span>
                </div>

                <button
                    onClick={() => { navigate("/portfolio") }}
                    className='text-custom-blue hover:scale-105 hover:text-blue-500 text-sm '>
                    View all
                </button>

            </div>
            {isLoadingUserInvestment ?
                <div className='flex items-center justify-center min-h-[200px]'>
                    <Spinner color={'custom-blue'} width={50} height={50} />
                </div>
                :
                <div className='bg-white border rounded-2xl shadow-sm  md:p-5 p-2.5'>
                    <div className='flex flex-col gap-5 font-poppins'>

                        <div className='flex items-center justify-center w-full '>

                            <div className='h-[150px] w-full bg-white border rounded-[8px]  items-center justify-center flex text-white'>
                                <div className='bg-custom-blue h-[100px] w-[100px]  rounded-full flex items-center justify-center text-3xl'>
                                    AKL
                                </div>

                            </div>
                        </div>


                        <div className='flex flex-wrap gap-3 flex-row justify-between items-center font-poppins  w-full '>
                            <div className='flex flex-col gap-2 lg:text-xl text-base'>
                                <h5 className='text-gray-1 font-semibold max-xs:text-sm '>
                                    Investment audi
                                </h5>
                                <p className='font-normal text-gray-4 hover:underline text-sm'>
                                    @invest.audi
                                </p>
                            </div>
                            <div className='hidden'>
                                <Button
                                    customTheme={'btn-outline'}
                                    onClick={() => { navigate("/my-bids/bid-details") }}
                                    className={"!text-sm"}
                                    customPadding={"px-[20px] py-[10px] "}
                                    title={"View Details"}
                                />
                            </div>
                        </div>

                        <p className='text-gray-4 text-sm font-normal'>
                            Bid Online and attend Bidding Events for Pre-owned Cars, Bikes, Trucks, Construction Equipment, Tractors.
                        </p>

                        <div
                            className='flex flex-row flex-wrap w-full items-center   gap-0  bg-[#F5F5F5] p-[12px] rounded-xl  gap-y-5 justify-between   '
                        >
                            <div className='flex flex-col items-center justify-between  xl:w-[33%] lg:w-[40%] md:w-[33%] w-[45%]  '>
                                <h5 className='text-custom-blue text-lg font-semibold'>
                                    ${investmentData?.investments?.results[0]?.invested_amount}
                                </h5>
                                <p className='text-gray-400 text-sm text-center'>
                                    Invested Amount
                                </p>
                            </div>
                            <div className=' h-[54px] w-[0.5px] bg-[#BDBDBD]'></div>

                            <div className='flex flex-col items-center justify-between gap-3 lg:-[120px] -w-[130px]  xl:w-[33%] lg:w-[40%] md:w-[33%] w-[45%]'>
                                <h5 className='text-custom-green text-xl font-semibold'>
                                    21 %
                                </h5>
                                <p className='text-gray-400 text-sm text-center'>
                                    ROI
                                </p>
                            </div>
                            <div className=' h-[54px] w-[0.5px] bg-[#BDBDBD] lg:max-xl:hidden  block max-md:hidden'></div>

                            <div className=' flex-col items-center justify-center gap-3  md:w-[33%] flex xl:w-[33%] w-full lg:w-full'>
                                <h5 className='text-gray-1 text-lg font-semibold'>
                                    25/05/2024
                                </h5>
                                <p className='text-gray-400 text-sm'>
                                    Date
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

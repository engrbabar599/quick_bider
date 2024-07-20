import React from 'react'
import { OutlineButton } from '../../components/OutlineButton'
import { Link, useNavigate } from 'react-router-dom'
import IMAGES from '../../assets/IMAGES'
import { Navigate } from 'react-router-dom'
export const MyBidsSection = () => {
    const navigate = useNavigate();
    return (
        <div className='lg:col-span-3 flex flex-col lg:gap-8 gap-5'>

            <div className='flex flex-row items-center justify-between font-poppins font-semibold '>
                <div className='flex flex-row  items-center text-base'>
                    <h3 className='text-gray-1 lg:text-xl text-base'>My bids</h3>
                    <span className='text-custom-blue lg:text-base font-normal'>(3 active)</span>
                </div>

                <button onClick={()=>{navigate("/mybids")}} className='text-custom-blue hover:scale-105 hover:text-blue-500 text-sm '>
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
                            onClick={()=>{navigate("/mybids/bidDetails")}}
                                className={"!text-sm"}
                                title={"View Details"}
                            // onClick={}
                            />
                        </div>
                    </div>

                    <p className='text-gray-4 text-sm font-normal'>
                        Bid Online and attend Bidding Events for Pre-owned Cars, Bikes, Trucks, Construction Equipment, Tractors.
                    </p>


                    <div className='flex flex-wrap lg:flex-nowrap p-4 bg-custom-gray rounded-2xl lg:gap-4 divide-x w-full items-center justify-center gap-y-5 '>
                        <div className='flex flex-col items-center justify-between gap-3 lg:w-1/3 w-2/4'>
                            <h5 className='text-custom-blue text-xl font-semibold'>
                                $500.00
                            </h5>
                            <p className='text-gray-400 text-sm text-center'>
                                Invested Amount
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-between gap-3 lg:w-1/4 w-2/4  '>
                            <h5 className='text-custom-green text-xl font-semibold'>
                                21 %
                            </h5>
                            <p className='text-gray-400 text-sm text-center'>
                                ROI
                            </p>
                        </div>
                        <div className=' flex-col items-center justify-between gap-3 w-1/3 flex '>
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
    )
}

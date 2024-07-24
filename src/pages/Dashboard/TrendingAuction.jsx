import React, { useState } from 'react'
import { Button } from '../../components/Button'
import IMAGES from '../../assets/IMAGES'
import { useNavigate } from 'react-router-dom'

export const TrendingAuction = () => {
    const navigate = useNavigate()
    const [timer, setTimer] = useState()

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
                {Array(3).fill().map((_, index) => (
                    <div
                        key={index}
                        onClick={() => { navigate("/dashboard/bids") }}
                        className=' bg-white border shadow-sm  rounded-xl group lg:hover:scale-105 duration-300 transform ease-in cursor-pointer'>
                        <div className='space-y-4 p-4 relative'>
                            <img src={IMAGES?.mustang} alt="" className='object-contain !rounded-lg ' />
                            <div>
                                <h1 className='text-xs font-semibold font-poppins text-gray-1 bg-[#eae9ed] absolute rounded-xl px-2 h-[36px] flex items-center justify-center top-5 right-5'>2h : 4m : 32s</h1>
                            </div>
                            <div className='font-poppins font-semibold text-sm lg:text-base'>
                                <div className='flex flex-col'>
                                    <p className='text-gray-1'>Ford Mustang
                                        <span className='text-gray-4 text-xs lg:text-sm font-normal'>(2017 Model)</span>
                                    </p>
                                    <p className='font-poppins font-medium text-xs lg:text-sm'>250 <span className='font-normal text-gray-4'>Member</span> </p>
                                </div>
                            </div>

                        </div>


                        <div className='flex flex-row justify-around items-center group-hover:bg-custom-blue group-hover:bg-opacity-10 '>

                            <div className='flex flex-row w-full justify-between  p-2'>
                                <div className='font-poppins text-gray-4 font-normal'>
                                    <p className='text-xs'>Bid Amount</p>
                                    <p className='font-semibold text-xs lg:text-sm text-gray-1'>$5.00
                                        <span className='text-gray-4 font-normal text-xs'>(4 Rounds)</span>
                                    </p>
                                </div>
                                <div>

                                    <Button
                                        className={"!p-2 bg-white !text-custom-blue group-hover:bg-custom-blue group-hover:!text-white border border-custom-blue text-xs lg:!text-sm"}
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

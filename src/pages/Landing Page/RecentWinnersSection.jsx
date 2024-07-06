import React from 'react'
import IMAGES from '../../assets/IMAGES'
import { TrophyIcon } from '../../assets/svgs/TrophyIcon'
import { OutlineButton } from '../../components/OutlineButton'
import { StarIcon } from '../../assets/svgs/StarIcon'
import womanImage from "../../assets/images/woman.png"
export const RecentWinnersSection = () => {
    return (
        <div className='gap-8 lg:col-span-4'>
            <div className='flex items-center justify-center gap-5 px-1'>
                {Array(4).fill().map((_, index) => (
                    <div key={index}
                        className='flex flex-col py-4 px-4 border bg-opacity-10 rounded-2xl gap-4 w-full'>
                        <div className='space-x-2'>
                            <div className=''>
                            <TrophyIcon />
                            </div>
                            <div className='flex flex-col items-center'>
                            <img src={womanImage} alt="" className='object-contain' />
                            <div className=''>
                                <p className='text-gray-1 text-[36px] font-semibold font-inter'>
                                    Robert Fox
                                </p>
                                <div className='flex items-center justify-center space-x-1'>
                                    <p className='font-normal text-gray-4 text-base font-inter'>
                                        Score:
                                    </p>
                                    <span className='text-custom-blue text-base font-semibold font-inter'>
                                        1280
                                    </span>
                                </div>
                            </div>
                            </div>
                           
                        </div>


                     

                            <div className='flex items-center justify-center space-y-1'>
                                <div className='w-full px-5'>
                                    <OutlineButton
                                        title={"Send reaction"}
                                        className={" !py-2.5 !px-4 w-[189px] !text-sm font-semibold font-poppins"}
                                    />
                                </div>

                               
                            </div>
                        </div>

                    
                ))}
            </div>

        </div>
    )
}

import React from 'react'
import IMAGES from '../../assets/IMAGES'
import { TrophyIcon } from '../../assets/svgs/TrophyIcon'
import { OutlineButton } from '../../components/OutlineButton'
import { StarIcon } from '../../assets/svgs/StarIcon'

export const AllParticipents = () => {
    const participants = [
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
    ]
    return (
        <div className='flex flex-col w-full gap-8 lg:col-span-4'>
            <div className='flex flex-row w-full font-poppins font-semibold items-center justify-between gap-5'>
                <h3 className=' lg:text-xl text-base text-gray-1 min-w-max'>
                All participants
                </h3>
                <div className='border-[#F5F5F5] border-2 w-full'></div>
               
            </div>

            <div className='flex flex-col gap-5 px-1'>
                {participants.map((value,i)=>{
                    return(
                        <>
                          <div 
                        className='flex xl:flex-row flex-col xl:items-center items-start justify-between py-4 px-4 shadow-sm border bg-opacity-10 rounded-2xl gap-4 w-full'>
                        <div className='flex flex-row space-x-2 items-center'>
                            <p className=' text-[#33333359] font-poppins font-medium'>{value.id}</p>
                            <img src={IMAGES?.winnerPic} alt="" className='object-contain h-12 w-12' />
                            <div className='font-poppins text-base'>
                                <p className='text-gray-1 font-semibold '>
                                    Robert Fox
                                </p>
                                <div className='font-normal text-gray-4 flex flex-row space-x-1'>
                                    <p>
                                        Score:
                                    </p>
                                    <span className='text-custom-blue'>
                                        1280
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className=' flex flex-row space-x-3 justify-between xl:w-auto w-full items-center'>

                            <div className='flex flex-col items-start justify-center'>
                                <div className='flex items-center space-x-1 font-poppins lg:text-sm text-xs'>
                                    <p className='font-normal text-gray-4'>Date:</p>
                                    <p className='font-semibold text-gray-1'>24/05/2024</p>
                                </div>
                                <div className='flex items-center space-x-1 font-poppins lg:text-sm text-xs'>
                                    <p className='font-normal text-gray-4'>Province:</p>
                                    <p className='font-semibold text-gray-1'>Surrey(BC)</p>
                                </div>


                            </div>

                            
                        </div>

                    </div>
                        </>
                    )
                })}
                  

                   
            </div>

        </div>
    )
}

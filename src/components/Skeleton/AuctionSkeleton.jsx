import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const AuctionSkeleton = () => {
    return (
        <div
            className=' bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)] rounded-xl '>
            <div className='space-y-4 p-4'>

                <Skeleton
                    width={"265px"}
                    height={"182px"} />


                <div className='font-poppins font-semibold text-base'>
                    <div className='flex flex-col'>
                        <Skeleton width={200} />
                        <Skeleton width={100} />
                    </div>
                </div>

            </div>


            <div className='flex flex-row justify-around items-center '>

                <div className='flex flex-row w-full justify-between  p-2'>
                    <div className='font-poppins text-gray-4 font-normal'>
                        <Skeleton width={100} />
                        <div className='flex flex-row gap-2'>
                            <Skeleton width={30} />
                            <Skeleton width={30} />

                        </div>
                    </div>
                    <div>
                        <Skeleton width={100} height={40} />

                    </div>

                </div>
            </div>


        </div >
    )
}

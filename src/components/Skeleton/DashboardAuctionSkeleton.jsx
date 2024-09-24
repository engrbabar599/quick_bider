import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const DashboardAuctionSkeleton = ({ className }) => {
    return (
        <div
            className={`${className} bg-white border shadow-sm  rounded-xl  h-full md:w-[250px] w-[250px] xs:w-[300px] lg:w-[250px] `}>
            <div className='space-y-4 p-4 relative'>
                <Skeleton className='w-full min-h-[100px] h-[150px] xs:h-[180px] md:h-[120px] lg:h-[140px] ' />
                <div className=''>
                </div>
                <div className='font-poppins font-semibold text-sm lg:text-base'>
                    <div className='flex flex-col'>
                        <Skeleton width={150} />

                        <Skeleton width={75} />

                    </div>
                </div>

            </div>


            <div className='flex flex-row justify-around items-center'>

                <div className='flex flex-row w-full justify-between  p-2'>
                    <div className='font-poppins text-gray-4 font-normal'>

                        <Skeleton width={50} />
                        <Skeleton width={50} />
                    </div>
                    <div className='flex justify-end items-end'>
                        <Skeleton width={100} height={30} />
                    </div>

                </div>
            </div>


        </div>
    )
}

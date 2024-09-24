import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const InvestmentSkeleton = ({ hideInvesment }) => {
    return (
        <div className={`border p-3 rounded-xl shadow-sm min-w-[245px] ${hideInvesment}`}>
            <div className="flex items-center gap-4">
                <div className="icon" >
                    <Skeleton circle width={40} height={40} />
                </div>
                <div className="font-lato">
                    <Skeleton width={130} />
                    <Skeleton width={100} />
                </div>
            </div>
            <div className="pt-4 font-lato font-semibold">
                {Array(3).fill()?.map((_, index) => (
                    <div key={index} className=" font-lato font-semibold ">
                        <div className="flex justify-between items-center py-2">
                            <Skeleton width={75} />
                            <Skeleton width={75} />
                        </div>
                        <div className="border-dashed border-[1px]"></div>
                    </div>
                ))}
            </div >

            <div className='flex items-center justify-center pt-3'>
                <Skeleton width={120} height={40} />

            </div>

        </div>
    )
}

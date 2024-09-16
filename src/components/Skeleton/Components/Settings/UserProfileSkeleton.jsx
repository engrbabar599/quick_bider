import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const UserProfileSkeleton = () => {
    return (
        <>
            <div className="border-b-[1px]">
                <div className="flex flex-col gap-2 sm:flex-row items-center mb-4">
                    <div className="relative border-">
                        <Skeleton
                            borderRadius={12}
                            width={120}
                            height={120}
                            className='!w-[120px] !h-[120px] rounded-xl mr-4 mb-4 sm:mb-0 '
                        />




                    </div>

                    <div className="flex-1 text-center sm:text-left">
                        <Skeleton width={105} />
                        <Skeleton width={200} />
                    </div>
                </div>
            </div>
            <div className="pt-3">
                <Skeleton width={130} />

                <div
                    className="space-y-8">
                    <div className="space-y-5">
                        {Array(4).fill().map((_, index) => (
                            <div key={index} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                                <div className="w-full flex flex-col gap-2">
                                    <Skeleton width={110} />
                                    <Skeleton height={44} borderRadius={8} />
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <Skeleton width={110} />
                                    <Skeleton height={44} borderRadius={8} />
                                </div>
                            </div>

                        ))}

                        <div className='flex items-center justify-center'>
                            <Skeleton width={190} height={50} borderRadius={12} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

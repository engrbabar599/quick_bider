import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const BankDetailSkeleton = () => {
    return (
        <div
            className="border border-gray-5 rounded-xl px-2 py-4">
            <div className="flex items-center gap-3">
                <Skeleton circle height={64} width={64} />
                <div className='flex w-1/4 flex-col  justify-center'>
                    <Skeleton containerClassName='flex-1' />
                    <Skeleton containerClassName='flex-1' />
                </div>
            </div>
        </div>
    )
}

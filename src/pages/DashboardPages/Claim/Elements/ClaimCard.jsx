import { Button } from 'components/Button'
import React from 'react'

export default function ClaimCard({ image, title, claim_sent, score, onClickSendClaim }) {
    return (
        <div
            className=' bg-custom-blue bg-opacity-10 shadow-[rgba(0,0,0,0.2)]  shadow rounded-xl cursor-pointer '>
            <div className='space-y-4 p-4 bg-white shadow-sm rounded-t-xl'>
                <img src={image} alt="" className='object-contain rounded-xl  ' />

                <div className='font-poppins font-semibold text-base'>
                    <div className='flex flex-col'>
                        <p className='text-gray-1 font-poppins font-semibold text-lg'>
                            {title}
                            {/* <span className='text-gray-4 text-sm font-normal font-poppins'>(2017 Model)</span> */}
                        </p>
                        <p className='font-poppins font-medium text-sm text-[#3EB14A]'>You are the winner! </p>
                    </div>
                </div>

            </div>


            <div className={`flex flex-row justify-around items-center ${claim_sent ? " bg-white rounded-b-xl " : " "} `}>

                <div className='flex flex-row w-full justify-between  p-3'>
                    <div className='font-poppins text-gray-4 font-normal flex flex-col  gap-1'>
                        <p className='text-xs font-poppins font-medium text-gray-4'>My Score</p>
                        <p className='font-semibold text-base text-gray-1'>{score}</p>
                    </div>
                    <div>
                        {claim_sent ?
                            <Button
                                customTheme={'btn-outline'}
                                className={"px-5 py-2.5 rounded-xl text-sm font-semibold font-poppins"}
                                title={"Claim sent"} />
                            :

                            <Button
                                onClick={onClickSendClaim}
                                className={"px-5 py-2.5 rounded-xl text-sm font-semibold font-poppins"}
                                title={"Claim now"}
                            />
                        }
                    </div>

                </div>
            </div>


        </div>)
}

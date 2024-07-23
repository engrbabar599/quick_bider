import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import IMAGES from '../assets/IMAGES'
import { Button } from './Button'

export const VideoAd = ({ open, setOpen }) => {
    useEffect(() => {
        setTimeout(() => {
            // setIsOpen(false)
        }, 1000)
    })
    // const [open, isOpen] = useState(true)
    // useEffect(() => {
    //     const rootElement = document.getElementById("root")
    //     rootElement.appendChild.classList = "overflow-hidden"
    // })

    return (
        <ReactModal
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setOpen(false)}
            style={{
                content: {
                    width: window.innerWidth >= 768 ? "60%" : "",
                    margin: "auto",
                    borderRadius: "16px"
                }
            }}
            isOpen={open}

        >
            <div className='bg-white rounded-xl flex flex-col gap-4 w-full h-full items-center'>
                <div className='flex flex-row gap-2 font-poppins text-base'>
                    <p className='text-gray-4 font-normal'>Time left -</p>
                    <p className='text-gray-1 font-semibold'> 5:00 min</p>
                </div>
                <div className='h-full md:px-8 relative cursor-pointer'>
                    <img src={IMAGES.adPlaceholder} alt="" className='h-full' />
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <div className='bg-white bg-opacity-60 h-36 w-36  rounded-full flex items-center justify-center'>
                            <svg width="47" height="56" viewBox="0 0 47 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.6553 27.9113L0.669865 55.4822L0.669865 0.340509L46.6553 27.9113Z" fill="#6F9CFF" />
                            </svg>
                        </div>
                    </div>



                </div>
                <div className='md:w-1/5'>

                    <Button
                        className={""}
                        title={"Close"} />
                </div>

            </div>
        </ReactModal >
    )
}

import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import Popup from './Popup'
import Svgs from 'assets/svgs'
import ReactModal from 'react-modal'

export const VideoAd = ({ open, setOpen, closeModal }) => {
    const [time, setTime] = useState({
        minutes: 4,
        seconds: 0
    })

    const [openClosePopup, setOpenClosePopup] = useState(false)
    // const [closeTimer, setCloseTimer] = useState({ minutes: 0, seconds: 30 })


    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prev => {
                const { minutes, seconds } = prev;

                if (minutes === 0 && seconds === 0) {
                    clearInterval(timerId);
                    closeModal();
                    setOpen(false)
                    return prev;
                }

                if (seconds > 0) {
                    return { ...prev, seconds: seconds - 1 };
                }

                if (minutes > 0 && seconds === 0) {
                    return { minutes: minutes - 1, seconds: 59 };
                }

                return prev;
            });

            // setCloseTimer(prevTime => {
            //     const { minutes, seconds } = prevTime

            //     if (minutes === 0 && seconds === 0) {
            //         // closeModal()
            //         setOpenClosePopup(false)
            //         return prevTime
            //     }

            //     if (seconds > 0) {
            //         return { ...prevTime, seconds: seconds - 1 }
            //     }
            //     if (minutes > 0) {
            //         return { minutes: minutes - 1, seconds: 59 }
            //     }
            //     return prevTime
            // })


        }, 1000);
        return () => {
            setTime({ minutes: 4, seconds: 59 })
            // setCloseTimer({ minutes: 0, seconds: 30 })
            clearInterval(timerId)
        };
    }, [open])

    useEffect(() => {
        const rootElement = document.getElementById("root")
        if (rootElement && (open || openClosePopup)) {
            rootElement.classList.add("overflow-hidden")
            rootElement.classList.add("h-[100vh]")
        }
        else {
            rootElement.classList.remove("overflow-hidden")
            rootElement.classList.remove("h-[100vh]")
        }

        return (() => {
            rootElement.classList.remove("overflow-hidden")
            rootElement.classList.remove("h-[100vh]")

        })
    })


    const handleCloseVideoAd = () => {
        if (time.minutes == 0 && time.seconds == 0) {
            setOpenClosePopup(true)
            closeModal()
        }
        else {
            setOpenClosePopup(true)
        }
    }

    useEffect(() => {
        if (open) {
            if (time?.minutes < 4) {
                setOpenClosePopup(true)
            }
        }
    }, [time])

    return (
        <>
            <ReactModal
                isOpen={open}
                shouldCloseOnOverlayClick={false}
                onRequestClose={closeModal}
                overlayClassName="flex items-center justify-center h-screen w-screen absolute inset-0 bg-gray-500 bg-opacity-75 "
                className={`w-[90vw] lg:w-[70vw] md:w-[80vw] py-[24px] bg-white max-h-[90vh] rounded-xl outline-none overflow-y-auto`}

            >
                <div className=' flex flex-col gap-4 items-center relative h-full'>
                    <div className='flex flex-row gap-2 font-poppins text-base'>
                        <p className='text-gray-4 font-normal'>Time left -</p>
                        <p className='text-gray-1 font-semibold'>{time.minutes}:{time.seconds < 10 ? "0" + time.seconds : time.seconds} min</p>
                    </div>
                    {/* <button onClick={closeModal} className='absolute right-4 -top-5 '>
                        <Svgs.MinimizeIcon />
                    </button> */}

                    <div className='h-full md:px-8 px-[20px] relative cursor-pointer w-full'>
                        <video
                            loop
                            autoPlay
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            controls
                            className='h-full max-sm:min-h-svh w-full object-cover rounded-xl outline-none '>
                            Your browser does not support the video tag.
                        </video>

                    </div>
                    <div className='md:w-1/5'>
                        <Button
                            className=""
                            title="Close"
                            onClick={handleCloseVideoAd}
                        />
                    </div>
                </div>
            </ReactModal >



            <Popup
                open={openClosePopup}
                closeModal={() => setOpenClosePopup(false)}
                customWidth={"lg:w-[25vw] xl:w-[20vw] 2xl:w-[15vw] w-[80vw] xs:w-[70vw] md:w-[40vw]"}
                customPadding={"px-[32px] py-[20px]"}
            >
                <div className='bg-white rounded-xl flex flex-col gap-5  items-center justify-center'>
                    <div className='flex flex-col items-center justify-center gap-8'>
                        <Svgs.FilledRightIcon />
                        <p className='text-gray-1 font-poppins font-semibold text-3xl'>
                            {time.minutes}:{time.seconds < 10 ? "0" + time.seconds : time.seconds} min
                        </p>
                    </div>
                    <Button
                        disabled={time?.minutes < 1}
                        className={`${time?.minutes < 1 ? "cursor-not-allowed" : ''}`}
                        onClick={() => { time?.minutes < 5 && setOpenClosePopup(false) }}
                        title={"Close"}
                    />
                </div>
            </Popup >


        </>

    )
}

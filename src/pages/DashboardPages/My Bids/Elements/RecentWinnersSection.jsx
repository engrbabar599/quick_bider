import React from 'react'
import IMAGES from '../../../../assets/IMAGES'
import { OutlineButton } from '../../../../components/OutlineButton'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ReactionPopup from 'components/Popups/ReactionPopup'
import SuccessPopup from 'components/Popups/SuccessPopup'
import Svgs from 'assets/svgs'


export const RecentWinnersSection = () => {
    const [showReactionPopup, setShowReactionPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)

    const handleShowPopup = () => {
        setShowReactionPopup(true);
    };

    const handleClosePopup = () => {
        setShowReactionPopup(false);
    };


    const navigate = useNavigate();
    return (
        <div className='flex flex-col w-full gap-8 lg:col-span-4'>
            <div className='flex flex-row gap-x-4 items-center min-w-max'>
                <button onClick={() => navigate(-1)}>
                    <Svgs.BackArrow />
                </button>

                <div className='flex flex-row'>
                    <button onClick={() => navigate(-1)} className=' text-gray-1 font-normal text-lg'>
                        Dashboard/
                    </button>
                    <p className='text-custom-blue font-semibold text-lg'>Results</p>
                </div>
            </div>
            <div className='flex flex-row w-full font-poppins font-semibold items-center justify-between gap-5'>
                <h3 className=' lg:text-xl text-base text-gray-1 min-w-max'>
                    Winners
                </h3>
                <div className='border-[#F5F5F5] border-2 w-full'></div>

            </div>

            <div className='flex flex-col gap-2.5 px-1'>

                <div
                    className='flex xl:flex-row flex-col xl:items-center items-start justify-between py-4 px-4 bg-custom-blue bg-opacity-10 rounded-2xl gap-4 w-full'>
                    <div className='flex flex-row space-x-2 items-center'>
                        <Svgs.TrophyIcon />
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

                        <div className='flex flex-col items-center justify-center space-y-1'>
                            <div>
                                <OutlineButton
                                    onClick={handleShowPopup}
                                    title={"Send reaction"}
                                    className={" !text-sm !py-2.5 !px-4"}
                                />
                            </div>

                            <div className='flex flex-row space-x-1 text-custom-green'>
                                <Svgs.StarIcon />
                                <p className=' font-poppins font-normal text-sm underline'>
                                    432 reactions
                                </p>

                            </div>
                        </div>
                    </div>

                </div>

                <div
                    className='flex xl:flex-row flex-col xl:items-center items-start justify-between py-4 px-4 bg-[#ffc586] bg-opacity-10 rounded-2xl gap-4 w-full'>
                    <div className='flex flex-row space-x-2 items-center'>
                        <Svgs.TrophyIcon />
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

                        <div className='flex flex-col items-center justify-center space-y-1'>
                            <div>
                                <OutlineButton
                                    onClick={handleShowPopup}
                                    title={"Send reaction"}
                                    className={" !text-sm !py-2.5 !px-4"}
                                />
                            </div>

                            <div className='flex flex-row space-x-1 text-custom-green '>
                                <Svgs.StarIcon />
                                <p className=' font-poppins font-normal text-sm underline'>
                                    432 reactions
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ReactionPopup
                open={showReactionPopup}
                onSendReaction={(e) => {
                    e.preventDefault()
                    setShowReactionPopup(false)
                    setShowSuccessPopup(true)
                }}
                closeModal={() => setShowReactionPopup(false)}
            />

            <SuccessPopup
                open={showSuccessPopup}
                closeModal={() => {
                    setShowSuccessPopup(false)
                    setShowReactionPopup(false)
                }}
                successText={"Reaction send successfully"}
                buttonText={"Close"}
            />
        </div>
    )
}

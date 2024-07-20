import React from 'react'
import IMAGES from '../../assets/IMAGES'
import { TrophyIcon } from '../../assets/svgs/TrophyIcon'
import { OutlineButton } from '../../components/OutlineButton'
import { StarIcon } from '../../assets/svgs/StarIcon'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ReactionsPopUp from '../Dashboard/ReactionsPopUp'
export const RecentWinnersSection = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };


    const navigate = useNavigate();
    return (
        <div className='flex flex-col w-full gap-8 lg:col-span-4'>
            <div className='flex flex-row gap-x-4 items-center min-w-max'>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z" fill="black" />
                </svg>
                <div className='flex flex-row'>
                    <p onClick={() => navigate(-1)} className=' text-black'>
                        Dashboard/
                    </p>
                    <p className='text-custom-blue'>Results</p>
                </div>
            </div>
            <div className='flex flex-row w-full font-poppins font-semibold items-center justify-between gap-5'>
                <h3 className=' lg:text-xl text-base text-gray-1 min-w-max'>
                    Winners
                </h3>
                <div className='border-[#F5F5F5] border-2 w-full'></div>

            </div>

            <div className='flex flex-col gap-5 px-1'>

                <div
                    className='flex xl:flex-row flex-col xl:items-center items-start justify-between py-4 px-4 bg-custom-blue bg-opacity-10 rounded-2xl gap-4 w-full'>
                    <div className='flex flex-row space-x-2 items-center'>
                        <TrophyIcon />
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
                                 {showPopup && <ReactionsPopUp  onClose={handleClosePopup}  />}
                            </div>

                            <div className='flex flex-row space-x-1'>
                                <StarIcon />
                                <p className='text-custom-green font-poppins font-normal text-sm'>
                                    432 reactions
                                </p>

                            </div>
                        </div>
                    </div>

                </div>

                <div
                    className='flex xl:flex-row flex-col xl:items-center items-start justify-between py-4 px-4 bg-[#ffc586] bg-opacity-10 rounded-2xl gap-4 w-full'>
                    <div className='flex flex-row space-x-2 items-center'>
                        <TrophyIcon />
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
                                    title={"Send reaction"}
                                    className={" !text-sm !py-2.5 !px-4"}
                                />
                            </div>

                            <div className='flex flex-row space-x-1'>
                                <StarIcon />
                                <p className='text-custom-green font-poppins font-normal text-sm'>
                                    432 reactions
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

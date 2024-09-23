import React from 'react'
import IMAGES from 'assets/IMAGES'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SuccessPopup from 'components/Popups/SuccessPopup'
import ReactionPopup from 'components/Popups/ReactionPopup'
import Svgs from 'assets/svgs'
import { useAddTestimonialReaction, useGetRecentWinners } from 'api/UserManagement'
import { formatDate } from 'utils/utility-functions'
import { Button } from 'components/Button'
import { toast } from 'react-toastify'
import Spinner from 'components/Spinner'

export const RecentWinnersSection = () => {
    const { data: recentWinners, isLoading: isLoadingRecentWinners, isError, refetch } = useGetRecentWinners()
    const [openReactionPopup, setOpenReactionPopup] = useState(false)
    const [reactionId, setReactionId] = useState('')

    const navigate = useNavigate()
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)

    const { mutate: sendReaction, isPending: isSendingReaction } = useAddTestimonialReaction({
        onError: () => {
            toast.error("Something went wrong")
        },
        onSuccess: () => {
            toast.success("Reacted succcessfully!")
        }
    })

    return (
        <div className='flex flex-col w-full gap-8 lg:col-span-4'>
            <div className='flex flex-row w-full font-poppins font-semibold items-center justify-between gap-5'>
                <h3 className=' lg:text-xl text-base text-gray-1 min-w-max'>
                    Recent winners
                </h3>
                <div className='border-[#F5F5F5] border-2 w-full'></div>
                <button
                    onClick={() => navigate("/dashboard/results")}
                    className='text-custom-blue text-sm min-w-max hover:text-blue-500 hover:scale-105'>
                    All winners
                </button>
            </div>

            <div className='flex flex-col gap-5 px-1'>
                {isLoadingRecentWinners ?
                    <div className='w-full min-h-[300px] h-full flex items-center justify-center'>
                        <Spinner color={"#6F9CFF"} height={50} width={50} />
                    </div>
                    :
                    isError ?
                        <div className='w-full min-h-[200px] flex items-center justify-center'>
                            <div className='gap-2 flex items-center justify-center flex-col'>
                                <p>Something went wrong</p>
                                <div>

                                    <Button
                                        onClick={() => refetch()}
                                        customTheme={"btn-outline"}
                                        title={"Retry"}
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        recentWinners?.length == 0 ?
                            <div className='flex items-center text-center justify-center w-full min-h-[200px] text-xl font-poppins font-medium'>
                                No winners as of now
                            </div>
                            :
                            recentWinners?.map((winner, index) => (
                                <div
                                    key={index}
                                    className='flex xl:flex-row flex-col xl:items-center items-start justify-between py-4 px-4 bg-custom-blue bg-opacity-10 rounded-2xl gap-4 w-full'>
                                    <div className='flex flex-row space-x-2 items-center'>
                                        <Svgs.TrophyIcon />
                                        <img src={IMAGES?.winnerPic} alt="" className='object-contain h-[60px] w-[60px] ' />
                                        <div className='font-poppins text-base'>
                                            <p className='text-gray-1 font-semibold capitalize  '>
                                                {winner?.first_name} {winner?.last_name}
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


                                    <div className=' flex lg:gap-[16px] flex-wrap flex-row justify-between xl:w-auto w-full items-center'>

                                        <div className='flex flex-col items-start justify-center'>
                                            <div className='flex items-center space-x-1 font-poppins lg:text-sm text-xs'>
                                                <p className='font-normal text-gray-4'>Date:</p>
                                                <p className='font-semibold text-gray-1'>
                                                    {formatDate(winner?.winning_date_time)}

                                                </p>
                                            </div>
                                            <div className='flex items-center space-x-1 font-poppins lg:text-sm text-xs'>
                                                <p className='font-normal text-gray-4'>Province:</p>
                                                <p className='font-semibold text-gray-1'>Surrey({winner?.province})</p>
                                            </div>


                                        </div>

                                        <div className='flex flex-col items-center xl:items-center justify-center space-y-1'>
                                            <div >
                                                <Button
                                                    customTheme={"btn-outline"}
                                                    onClick={() => {
                                                        setReactionId(winner?.id)
                                                        setOpenReactionPopup(true)
                                                    }}
                                                    title={"Send reaction"}
                                                    customPadding={' py-2.5 px-2 xs:px-4 '}
                                                    className={'!text-xs lg:!text-sm '}
                                                />
                                            </div>

                                            <div className='flex flex-row space-x-1 text-custom-green text-xs'>
                                                <Svgs.StarIcon />
                                                <p className=' font-poppins font-normal text-xs lg:text-sm underline'>
                                                    {winner?.total_reaction} reactions
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
            </div>



            <ReactionPopup
                id={reactionId}
                onSubmit={sendReaction}
                isSubmitting={isSendingReaction}
                open={openReactionPopup}
                closeModal={() => {
                    setReactionId("")
                    setOpenReactionPopup(false)
                }}
            />

            <SuccessPopup
                open={showSuccessPopup}
                closeModal={() => {
                    setReactionId('')
                    setShowSuccessPopup(false)
                    setOpenReactionPopup(false)
                }}
                successText={"Reaction send successfully"}
                buttonText={"Close"}
            />

        </div>
    )
}
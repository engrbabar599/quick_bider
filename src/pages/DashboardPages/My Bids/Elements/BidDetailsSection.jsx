import React from 'react'
import IMAGES from 'assets/IMAGES'
import { useLocation, useNavigate } from 'react-router-dom'
import { OutlineButton } from 'components/OutlineButton'
import { DashboardLayout } from 'components/Layout'
import Svgs from 'assets/svgs'
import { Button } from 'components/Button'

export const BidDetailsSection = () => {
    const navigate = useNavigate()
    const { state } = useLocation()


    return (
        <DashboardLayout activeSidebar={"My Bids"}>
            <div className='xl:grid xl:grid-cols-5 flex flex-col gap-8 '>

                <div className='lg:col-span-3 flex flex-col gap-6'>
                    {/* <img src={IMAGES.mainAd} alt="" /> */}

                    <div className='flex flex-row items-center gap-x-2'>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z" fill="black" />
                        </svg>
                        <div className='flex flex-row font-poppins font-normal  text-base'>
                            <p onClick={() => navigate(-1)} className='text-gray-1  hover:cursor-pointer hover:text-black'>My bids/</p>
                            <p onClick={() => navigate(-1)} className='text-gray-1  hover:cursor-pointer hover:text-black'>Active/</p>
                            <p className='font-semibold text-custom-blue'>Investment audi</p>
                        </div>
                    </div>


                    <div className="bg-white border  shadow-sm rounded-xl flex flex-col  lg:px-10 p-5 gap-7 items-center">

                        <h2 className='font-heading !text-lg text-center flex md:flex-row flex-col'>
                            Ford Mustang
                            <span>
                                (1st round bid)

                            </span>

                        </h2>

                        <div className='flex flex-col gap-4 items-center'>

                            <div className='md:flex flex-row gap-3 hidden '>
                                {Array(3).fill().map((_, index) => (
                                    <div key={index} className='flex flex-col gap-4 group'>
                                        <img src={IMAGES.mustang} alt="" className='rounded-xl group-hover:scale-105 group-hover:ease-in group-hover:duration-300' />
                                        <div className='w-full border-4 rounded-xl group-hover:border-custom-blue'></div>
                                    </div>
                                ))}
                            </div>

                            <img src={IMAGES.mustang} alt="" className='rounded-xl md:hidden' />


                            <p className='text-justify font-poppins font-normal text-gray-2 lg:text-sm text-xs lg:px-5'>
                                We are delighted to offer you a wide range of vehicles through our auction platform. Whether you're looking for a new ride or seeking a classic gem, our auctions provide you with a variety of options to choose from. </p>
                        </div>



                        <div className='flex flex-col gap-4 lg:w-4/5 w-full'>
                            <div className='flex flex-row justify-between items-center w-full border border-gray-5 shadow-sm rounded-2xl p-3'>
                                <div className='font-poppins lg:text-base text-xs gap-2 flex flex-col'>
                                    <div className='flex flex-row space-x-1'>
                                        <p className='text-gray-4'>Date:</p>
                                        <p className='text-gray-1 font-semibold'>24/05/2024</p>
                                    </div>
                                    <div className='flex flex-row space-x-1'>
                                        <p className='text-gray-4'>Time:</p>
                                        <p className='text-gray-1 font-semibold'>3:00 PM</p>
                                    </div>
                                </div>

                                <div className='font-poppins lg:text-base text-xs gap-2 flex flex-col'>
                                    <div className='flex flex-row space-x-1'>
                                        <p className='text-gray-4'>Total rounds:</p>
                                        <p className='text-custom-blue font-semibold'>4</p>
                                    </div>
                                    <div className='flex flex-row space-x-1'>
                                        <p className='text-gray-4'>Bid amount:</p>
                                        <p className='text-custom-blue font-semibold'>$5</p>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-wrap items-center justify-center flex-row lg:gap-6 gap-4 h-full w-full'>
                                <div className='border border-gray-5  py-2 flex flex-col items-center justify-center rounded-xl lg:w-28 w-20 h-full gap-2'>
                                    <Svgs.ScoreIcon />
                                    <div className='flex flex-col font-poppins items-center'>
                                        <p className='text-gray-1 font-semibold lg:text-xl text-sm'>320</p>
                                        <p className='text-gray-4 lg:text-base text-xs'>Score</p>
                                    </div>
                                </div>
                                <div className='border border-gray-5 py-2  flex flex-col items-center justify-center rounded-xl lg:w-28 w-20 h-full gap-2 '>
                                    <Svgs.ParticipantsIcon />
                                    <div className='flex flex-col font-poppins items-center'>
                                        <p className='text-gray-1 font-semibold lg:text-xl text-sm '>160</p>
                                        <p className='text-gray-4 lg:text-base text-xs'>Participants</p>
                                    </div>
                                </div>
                                <div className='border border-gray-5 py-2  flex flex-col items-center justify-center rounded-xl lg:w-28 w-20 h-full gap-2'>
                                    <Svgs.TimeIcon />
                                    <div className='flex flex-col font-poppins items-center'>
                                        <p className='text-gray-1 font-semibold lg:text-xl text-sm'>4:20</p>
                                        <p className='text-gray-4 lg:text-base text-xs'>Time</p>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <div className='flex flex-col gap-5 lg:w-1/4 w-2/4 items-center'>

                            <button className=' hidden px-4 py-3 bg-custom-blue text-white rounded-xl text-center text-sm font-medium font-poppins w-[190px]'>Bid now</button>
                            <div className=' flex-row hidden font-poppins text-base space-x-1'>
                                <p className='text-gray-4'>Wallet:</p>
                                <p className='text-custom-blue'>$1200</p>
                            </div>
                        </div>

                        {/* <button className='underline text-custom-blue cursor-pointer text-base underline-offset-2 font-poppins hover:scale-105 ease-in duration-150'>
                        Check terms & conditions
                    </button> */}


                    </div>




                    <div className="leftpart col-span-12 md:col-span-7">
                        <div className="py-5">
                            <h1 className="text-xl md:text-2xl font-semibold font-poppins text-gray-1">Terms & conditions</h1>
                        </div>
                        <div className="border  px-4 rounded-xl">
                            <ul className="list-decimal px-10 max-md:px-2 py-2.5 text-sm whitespace-pre-wrap">
                                <li>
                                    <p className="py-3 text-sm md:text-base font-normal text-gray-2 font-poppins whitespace-pre-wrap">
                                        Bidders must be 18+ and register with valid ID. Registration implies agreement to these terms.
                                    </p>
                                </li>
                                <li>
                                    <p className="py-3 text-sm md:text-base font-normal text-gray-2 font-poppins">
                                        All bids are final and binding. The highest bid wins. The auctioneer can reject bids, withdraw items, and resolve disputes.
                                    </p>
                                </li>
                                <li>
                                    <p className="py-3 text-sm md:text-base font-normal text-gray-2 font-poppins">
                                        Full payment due within [Number] hours/days post-auction. A [Percentage]% buyer’s premium applies. Non-payment results in bid forfeiture.
                                    </p>
                                </li>
                                <li>
                                    <p className="py-3 text-sm md:text-base font-normal text-gray-2 font-poppins">
                                        Items sold "as is" without warranties. Bidders must inspect items before bidding. Auction house not liable for description errors.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>









                </div>

                <div className="lg:col-span-2 flex flex-col gap-8">

                    {/* LEaderboards */}
                    <div className='flex flex-col gap-8' >
                        <div className='flex flex-row justify-between items-center font-poppins font-semibold '>
                            <p className='text-gray-1 lg:text-xl text-base'>Leaderboard</p>
                            <button
                                onClick={() => navigate("/dashboard/results")}
                                className='text-custom-blue text-sm hover:text-blue-500 hover:scale-105'>View all</button>
                        </div>


                        <div className='flex flex-col border shadow-md rounded-2xl lg:p-8 p-4 gap-5 w-full items-center'>
                            <div className='flex flex-row justify-between font-poppins lg:text-base text-sm font-medium w-full'>
                                <p className=''>Winners</p>
                                <p>Time</p>
                                <p>Province</p>
                            </div>
                            <div className='divide-y-2 w-full '>
                                {Array(6).fill().map((_, index) => (
                                    <div className='flex flex-row justify-between items-center text-justify font-poppins py-2 font-light lg:text-base text-sm text-gray-4'>
                                        <p className='underline text-sm font-open-sans font-normal cursor-pointer'>Paul Fisher</p>
                                        <p>10:20:04 AM</p>
                                        <p>AB</p>
                                    </div>
                                ))}
                            </div>
                            <div className='lg:w-1/4'>
                                <Button
                                    customTheme={'btn-outline'}
                                    onClick={() => navigate("/dashboard/results")}
                                    className={"!text-sm"}
                                    title={"View all"}
                                />
                            </div>


                        </div>

                    </div>



                    {/* My bids */}
                    <div className='flex flex-col gap-8'>
                        <h3 className='font-poppins lg:text-xl text-base text-gray-1 font-semibold'>
                            My bids
                        </h3>

                        {Array(4).fill().map((_, index) => (
                            <div
                                key={index} className='flex flex-row items-center justify-between border bg-white shadow-md rounded-2xl p-4'>
                                <div className='flex flex-row items-center font-poppins lg:text-base text-xs gap-4'>
                                    <p className='text-custom-blue font-semibold'>Bid {index + 1}</p>
                                    <div className='font-poppins font-semibold gap-2 flex flex-col' >
                                        <div className='flex flex-row'>
                                            <p className=''>Robert Fox</p>
                                            <span className='font-normal'>(Rank 3)</span>
                                        </div>
                                        <div className='flex flex-row space-x-1'>
                                            <p className='font-normal'>Time:</p>
                                            <span>10:10:20 AM</span>
                                        </div>

                                    </div>

                                </div>

                                <div className='flex flex-row space-x-2 items-center'>
                                    <Svgs.ScoreIcon />
                                    <div className='flex flex-col items-center font-poppins'>
                                        <p className=' font-semibold text-gray-1 lg:text-lg text-sm'>320</p>
                                        <p className='text-gray-4 lg:text-base text-xs'>Score</p>
                                    </div>


                                </div>


                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </DashboardLayout>

    )
}

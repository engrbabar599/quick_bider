import React from 'react';
import { OutlineButton } from 'components/OutlineButton';
import womanImage from "assets/images/woman.png";
import { useState } from 'react';
import Svgs from 'assets/svgs';
import { useGetRecentWinners } from 'api/UserManagement';
import ReactionPopup from 'components/Popups/ReactionPopup';
import { Button } from 'components/Button';
import { NavLink } from 'react-router-dom';
import { useLoginContext } from 'context/LoginContext';

export const RecentWinnersSection = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { isLoggedIn } = useLoginContext()

    const { data: recentWinners, isLoading } = useGetRecentWinners()

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className='gap-8 grid lg:grid-cols-12 '>
                <div className='flex flex-wrap justify-center gap-5 px-1 lg:col-span-12 w-full'>
                    {recentWinners?.length > 0 ?

                        recentWinners?.map((data, index) => (
                            <div
                                key={index}
                                className='flex flex-col py-4 px-4 border bg-opacity-10 rounded-2xl gap-6 w-full max-w-[250px]'>
                                <div className='space-x-2'>
                                    <div>
                                        <Svgs.TrophyIcon />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <img src={womanImage} alt="" className='object-contain  w-[160px] h-[160px] lg:w-full ' />
                                        <div className='flex flex-col items-center gap-2'>
                                            <p className='text-gray-1 text-lg lg:text-[36px] font-semibold font-inter capitalize truncate max-w-[220px] '>
                                                {data?.first_name} {data?.last_name}
                                            </p>
                                            <div className='flex items-center justify-center space-x-1'>
                                                <p className='font-normal text-gray-4 text-sm md:text-base font-inter'>
                                                    Score:
                                                </p>
                                                <span className='text-custom-blue text-sm md:text-base font-semibold font-inter'>
                                                    {data?.user_score}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center space-y-1'>
                                    <div className='w-full px-5'>
                                        {/* Assuming OutlineButton is a component */}
                                        <Button
                                            customTheme={'btn-outline'}
                                            onClick={handleShowPopup}
                                            title={"Send reaction"}
                                            customPadding={"py-2.5 px-4"}
                                            className={" w-full lg:w-[189px] !text-xs lg:!text-sm font-semibold font-poppins"}
                                        />
                                        {showPopup && <ReactionPopup onClose={handleClosePopup} />}
                                    </div>
                                </div>
                            </div>
                        ))

                        :

                        <div className='lg:col-span-12 text-lg md:text-2xl text-gray-1 font-poppins font-medium min-h-[100px] items-center justify-center text-center flex'>
                            No winners as of now

                        </div>

                    }
                </div>

            </div>
            {recentWinners?.length > 0 &&
                <div className="text-center py-6 lg:py-12">
                    <NavLink
                        to={
                            isLoggedIn ?
                                "/dashboard/results"
                                : "/login"
                        }>
                        <Button
                            customTheme={'btn-outline'}
                            title={"View all"}
                            className={"!w-[160px] !px-[16px] !lg:px-[24px] !py-[12px] !lg:py-[14px] !text-sm !lg:text-base !font-medium !rounded-lg"}
                        />
                    </NavLink>
                </div>
            }

        </>


    );
}

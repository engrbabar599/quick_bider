import React, { useEffect, useRef, useState } from 'react'
import IMAGES from 'assets/IMAGES'
import { Link, useNavigate } from 'react-router-dom'
import NotificationBox from './NotificationBox'
import { useGetUserProfile } from 'api/UserManagement'
import { useLoginContext } from 'sdfsdjfgdsjfs/LoginContext'
import Svgs from 'assets/svgs'

export const Navbar = () => {
    const { setIsLoggedIn } = useLoginContext()
    const navigate = useNavigate()
    const [openDropdown, setOpenDropdown] = useState(false)
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const dropdownRef = useRef();
    const { data: userData } = useGetUserProfile()

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpenNotification(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <>
            <nav className="bg-white border-gray-200 relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xl:p-3 gap-x-4">

                    {/* Mobile Logo */}
                    <Link to={"/"} className="flex xl:hidden items-center space-x-3 rtl:space-x-reverse">
                        <img src={IMAGES?.logo} className="h-8 md:h-10" alt="Quick Bid Logo" />
                    </Link>

                    {/* Greeting (visible on medium and larger screens) */}
                    <div className='xl:flex hidden flex-row gap-x-8 w-full'>
                        <div className='xl:flex flex-col font-poppins '>
                            <p className='text-custom-blue font-semibold text-xl capitalize max-w-[210px] truncate'>
                                Hello, {userData?.first_name} {userData?.last_name}!
                            </p>
                            <p className='font-medium text-gray-4 text-sm'>
                                Welcome back, let's bid now!
                            </p>
                        </div>

                        <div className='bg-[#F5F5F5] rounded-xl border col-span-2 flex flex-row space-x-4 px-3 py-3 flex-1 items-center'>
                            <Svgs.SearchIcon />
                            <input type="text" className='bg-transparent w-full font-poppins font-normal placeholder:text-gray-4 text-gray-1 text-base outline-none' placeholder='Search here' />
                        </div>

                        <div className='flex flex-row justify-end space-x-4 col-span-2'>
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpenNotification(prev => !prev)}
                                    className='flex items-center justify-center border rounded-xl h-14 w-14'>
                                    <Svgs.BellIcon />
                                </button>
                                {isOpenNotification && (
                                    <NotificationBox />
                                )}

                            </div>

                            <div className='flex flex-row items-center justify- w-full min-w-[300px]'>
                                <div className='space-x-4 flex flex-row justify-between'>
                                    {userData?.display_pic
                                        ?
                                        <img
                                            src={userData?.display_pic}
                                            alt="Profile Pic"
                                            className='aspect-square 
                                            h-[64px] w-[64px] bg-white border rounded-xl object-cover' />
                                        :
                                        <div
                                            className='h-[64px] w-[64px] rounded-xl bg-custom-blue select-none text-white text-xl text-center flex items-center justify-center bg-opacity-90'>
                                            {userData?.first_name[0]}
                                            {userData?.last_name[0]}

                                        </div>
                                    }
                                    <div className='font-poppins'>
                                        <p className='text-gray-1 text-xl font-medium capitalize  max-w-[250px] truncate'>
                                            {userData?.first_name} {userData?.last_name}
                                        </p>
                                        <p className='text-gray-4 text-lg font-normal'>
                                            {userData?.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Icons */}
                    <div className="flex items-center xl:order-2 space-x-4 xl:space-x-0 rtl:space-x-reverse xl:hidden">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsOpenNotification(prev => !prev)}
                                className='hidden md:flex xl:hidden items-center justify-center border rounded-xl xl:h-14 xl:w-14 h-12 w-12'>
                                <Svgs.BellIcon />
                            </button>
                            {isOpenNotification && (
                                <NotificationBox />
                            )}
                        </div>

                        <Link className='' to={"/settings"}>
                            {userData?.display_pic
                                ?
                                <img
                                    src={userData?.display_pic}
                                    alt="Profile Pic"
                                    className='aspect-square 
                                            xl:h-14 xl:w-14 md:h-10  md:w-10 h-8 w-8 bg-white border rounded-xl object-cover' />
                                :
                                <div
                                    className='xl:h-14 xl:w-14 h-8 w-8 rounded-xl bg-custom-blue text-white md:text-base text-sm text-center flex items-center justify-center bg-opacity-90'>
                                    {userData?.first_name[0]}
                                    {userData?.last_name[0]}

                                </div>
                            }
                        </Link>
                        {/* <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            data-collapse-toggle="navbar-language"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-custom-blue rounded-lg bg-white xl:hidden  focus:outline-none focus:ring-2 focus:ring-custom-blue border border-custom-blue hover:bg-custom-blue hover:bg-opacity-10">
                            <span className="sr-only">
                                Open main menu
                            </span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button> */}
                    </div>


                    {/* Navbar Items (visible on medium and larger screens) */}
                    <div
                        className={` absolute top-14 pb-10 bg-white z-50 items-center justify-between w-full xl:w-auto xl:order-1
                        ${openDropdown ? " transform ease-in duration-1000 " : "hidden "}`}
                        id="navbar-language">

                        <div
                            className="flex flex-col font-medium p-4 xl:p-0 mt-4 border border-gray-5 rounded-lg  xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white xl:w-full space-y-8">
                            <div className='bg-custom-gray rounded-xl border col-span-2 flex flex-row space-x-4 px-4 py-4 flex-1 w-full'>
                                <Svgs.SearchIcon />
                                <input
                                    type="text"
                                    className='bg-transparent w-full font-poppins font-normal placeholder:text-gray-4 text-gray-1 text-base outline-none' placeholder='Search here' />
                            </div>

                            <div className='flex flex-row items-center justify-between w-full'>
                                <div className='space-x-4 flex flex-row items-center'>
                                    <img src={IMAGES?.profilePic} alt="Profile Pic" className='aspect-square h-12' />
                                    <div className='font-poppins'>
                                        <p className='text-gray-1 text-base font-medium'>
                                            Robert Fox
                                        </p>
                                        <p className='text-gray-4 text-sm font-normal'>
                                            robertfox@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <button>
                                    <Svgs.ArrowDown />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

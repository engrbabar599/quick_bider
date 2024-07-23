import React, { useState } from 'react'
import { SearchIcon } from '../assets/svgs/SearchIcon'
import { BellIcon } from '../assets/svgs/BellIcon'
import IMAGES from '../assets/IMAGES'
import { ArrowDown } from '../assets/svgs/ArrowDown'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    return (
        <>
            <nav className="bg-white border-gray-200 relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xl:p-3 gap-x-4">

                    {/* Mobile Logo */}
                    <Link to={""} className="flex xl:hidden items-center space-x-3 rtl:space-x-reverse">
                        <img src={IMAGES?.logo} className=" lg:h-10 h-8" alt="Quick Bid Logo" />
                    </Link>

                    {/* Greeting (visible on medium and larger screens) */}
                    <div className='xl:flex hidden flex-row gap-x-8 w-full'>
                        <div className='xl:flex flex-col font-poppins '>
                            <p className='text-custom-blue font-semibold text-xl'>
                                Hello, Robert Fox!
                            </p>
                            <p className='font-medium text-gray-4 text-sm'>
                                Welcome back, let's bid now!
                            </p>
                        </div>

                        <div className='bg-[#F5F5F5] rounded-xl border col-span-2 flex flex-row space-x-4 px-3 py-3 flex-1 items-center'>
                            <SearchIcon />
                            <input type="text" className='bg-transparent w-full font-poppins font-normal placeholder:text-gray-4 text-gray-1 text-base outline-none' placeholder='Search here' />
                        </div>

                        <div className='flex flex-row space-x-4 col-span-2'>
                            <button className='flex items-center justify-center border rounded-xl h-14 w-14'>
                                <BellIcon />
                            </button>

                            <div className='flex flex-row items-center justify-between w-full'>
                                <div className='space-x-4 flex flex-row'>
                                    <img src={IMAGES?.profilePic} alt="Profile Pic" className='aspect-square h-16' />
                                    <div className='font-poppins'>
                                        <p className='text-gray-1 text-xl font-medium'>Robert Fox</p>
                                        <p className='text-gray-4 text-lg font-normal'>robertfox@gmail.com</p>
                                    </div>
                                </div>
                                <button>
                                    <ArrowDown />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Icons */}
                    <div className="flex items-center xl:order-2 space-x-4 xl:space-x-0 rtl:space-x-reverse xl:hidden">
                        <button className='flex xl:hidden items-center justify-center border rounded-xl xl:h-14 xl:w-14 h-12 w-12'>
                            <BellIcon />
                        </button>

                        <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-custom-blue rounded-lg bg-white xl:hidden  focus:outline-none focus:ring-2 focus:ring-custom-blue border border-custom-blue hover:bg-custom-blue hover:bg-opacity-10">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>


                    {/* Navbar Items (visible on medium and larger screens) */}
                    <div className={` absolute top-14 pb-10 bg-white z-50 items-center justify-between w-full ${openDropdown ? " transform ease-in duration-1000 " : "hidden "} xl:w-auto xl:order-1 z-50`} id="navbar-language">
                        <div className="flex flex-col font-medium p-4 xl:p-0 mt-4 border border-gray-5 rounded-lg  xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white xl:w-full space-y-8">
                            <div className='bg-custom-gray rounded-xl border col-span-2 flex flex-row space-x-4 px-4 py-4 flex-1 w-full'>
                                <SearchIcon />
                                <input type="text" className='bg-transparent w-full font-poppins font-normal placeholder:text-gray-4 text-gray-1 text-base outline-none' placeholder='Search here' />
                            </div>

                            <div className='flex flex-row items-center justify-between w-full'>
                                <div className='space-x-4 flex flex-row items-center'>
                                    <img src={IMAGES?.profilePic} alt="Profile Pic" className='aspect-square h-12' />
                                    <div className='font-poppins'>
                                        <p className='text-gray-1 text-base font-medium'>Robert Fox</p>
                                        <p className='text-gray-4 text-sm font-normal'>robertfox@gmail.com</p>
                                    </div>
                                </div>
                                <button>
                                    <ArrowDown />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </>

    )
}

import React from 'react'
import { SearchIcon } from '../assets/svgs/SearchIcon'
import { BellIcon } from '../assets/svgs/BellIcon'
import IMAGES from '../assets/IMAGES'
import { ArrowDown } from '../assets/svgs/ArrowDown'

export const Navbar = () => {
    return (
        <nav className='grid grid-cols-5 items-center  space-x-8  justify-between '>
            <div className='flex flex-col font-poppins '>
                <p className='text-custom-blue font-semibold text-2xl'>
                    Hello, Robert Fox!
                </p>
                <p className='font-medium text-gray-4 text-sm'>
                    Welcome back, let's bid now!
                </p>
            </div>

            <div className='bg-[#F5F5F5] rounded-xl border col-span-2 flex flex-row space-x-4 px-4 py-4'>
                <SearchIcon />
                <input type="text" name="" id="" className='bg-transparent w-full font-poppins font-normal text-gray-4 text-base'
                    placeholder='Search here' />
            </div>

            <div className='flex flex-row space-x-4 col-span-2'>
                <div className='flex items-center justify-center border rounded-xl h-14 w-14'>
                    <BellIcon />
                </div>


                <div className='flex flex-row items-center justify-between w-full '>
                    <div className='space-x-4 flex flex-row'>
                        <img src={IMAGES?.profilePic} alt="Profile Pic" className='aspect-square h-16' />
                        <div className='font-poppins'>
                            <p className='text-gray-1 text-2xl font-medium'>Robert Fox</p>
                            <p className='text-gray-4 text-lg font-normal'>robertfox@gmail.com</p>
                        </div>
                    </div>
                    <ArrowDown />
                </div>

            </div>

        </nav >
    )
}

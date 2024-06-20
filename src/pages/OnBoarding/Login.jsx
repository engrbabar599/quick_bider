import React from 'react'
import IMAGES from '../../assets/IMAGES'
import { Input } from '../../components/Input'

export const Login = () => {
    return (
        <div className='bg-blue relative z-50 h-screen flex justify-center items-center'>
            <img src={IMAGES.logo} alt="" className="absolute right-10 top-0 h-3/5 -rotate-8" />
            <img src={IMAGES.logoWithName} alt="" className="absolute left-10 bottom-10 h-2/6 -rotate-8" />

            <div
                className='bg-white p-5 rounded-xl flex flex-col space-y-4 w-2/5 items-center justify-center'>
                <div
                    className='w-3/4 items-center justify-center flex flex-col space-y-8'>
                    <img src={IMAGES.coloredLogoWithName}
                        alt='Colored Logo'
                        className='h-24 ' />


                    <div className='flex flex-col w-full  items-center justify-center space-y-4'>
                        <h1 className='text-[1.75rem] font-semibold text-gray-1 font-poppins text-center'>
                            Sign in to continue
                        </h1>
                        <div className=' flex flex-col w-full space-y-4 '>
                            <Input
                                label={"Email"}
                                type={"text"}
                                placeholder={"input your email in here"}
                            />
                            <Input
                                label={"Password"}
                                type={"password"}
                                placeholder={"input your password in here"}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

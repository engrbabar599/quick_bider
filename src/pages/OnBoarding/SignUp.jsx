import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import IMAGES from '../../assets/IMAGES'

export const SignUp = () => {
    return (
        <div className='bg-custom-blue relative z-50 min-h-max md:p-12 p-6 flex justify-center items-center'>
            <img src={IMAGES.logo} alt="" className="absolute right-0 top-0 h-[36rem] -rotate-8" />
            <img src={IMAGES.logoWithName} alt="" className="absolute left-0 bottom-10 h-60 -rotate-8 -z-50" />

            <div
                className='bg-white p-5 rounded-xl flex flex-col space-y-4 md:w-2/5  items-center justify-center z-50'>
                <div
                    className='md:w-3/4 items-center justify-center flex flex-col space-y-4'>
                    <img src={IMAGES.coloredLogoWithName}
                        alt='Colored Logo'
                        className='md:h-16 h-12 ' />

                    <div className='flex flex-col md:w-full w-[95%]  items-center justify-center space-y-8'>

                        <div className=' flex flex-col w-full space-y-4 '>
                            <h1 className='text-[1.75rem] font-semibold text-gray-1 font-poppins text-center'>
                                Sign up to continue
                            </h1>
                            <Input
                                label={"Name"}
                                type={"text"}
                                placeholder={"Input your name in here"}
                            />
                            <Input
                                label={"Email"}
                                type={"email"}
                                placeholder={"Input your email in here"}
                            />
                            <Input
                                label={"Mobile no"}
                                type={"number"}
                                placeholder={"Input your number in here"}
                            />
                            <div className='flex flex-col w-full justify-center space-y-4'>
                                <Input
                                    label={"Password"}
                                    type={"password"}
                                    placeholder={"input your password in here"}
                                />
                                <div className='flex flex-row space-x-2 items-center'>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        className=' !border-2 border-custom-blue rounded-md appearance-none
                                        checked:bg-custom-blue hover:scale-105 hover:cursor-pointer
                                        w-6 h-6 outline-none  checked:bg-no-repeat checked:bg-center' />
                                    <div className='font-poppins text-sm text-gray-4 font-normal flex flex-col md:flex-row space-x-1'>
                                        <p>I have read and agree to the</p>
                                        <Link className="text-custom-blue underline">Terms of Service</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Button
                            title={"Sign up"}
                        // onClick={}
                        />


                        <div className='space-y-4 items-center justify-center flex flex-col'>
                            <p
                                className='text-gray-4 font-poppins font-normal text-sm'>
                                Sign up with
                            </p>
                            <div className=' flex space-x-4 flex-row'>
                                <button className="h-11 w-11 border border-gray-5 rounded-full flex items-center justify-center">
                                    <img
                                        src={IMAGES?.googleLogo} // Replace with your actual image source
                                        alt="Google Logo"
                                        className="h-6 w-6"
                                    />
                                </button>

                                <button className="h-11 w-11 border border-gray-5 rounded-full flex items-center justify-center">
                                    <img
                                        src={IMAGES?.appleLogo} // Replace with your actual image source
                                        alt="Apple Logo"
                                        className="h-6 w-6"
                                    />
                                </button>

                            </div>

                        </div>


                        <div className='text-center font-poppins font-normal flex flex-col md:flex-row space-x-1 text-gray-4 text-base'>
                            <p>Already have an account?</p>
                            <Link to="/" className='text-custom-blue hover:text-custom-blue-500'>
                                Sign in
                            </Link>
                        </div>




                    </div>
                </div>
            </div>
        </div>)
}

import React from 'react'
import IMAGES from '../../assets/IMAGES'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginContext } from '../../Context/LoginContext'

export const Login = () => {
    const navigate = useNavigate()
    const { setIsLoggedIn } = useLoginContext()
    return (
        <>
            <div className='bg-custom-blue relative z-50 min-h-screen h-fit flex justify-center items-center px-1'>
                <img src={IMAGES.backgroundLogo} alt="" className="absolute right-0 top-0 h-[36rem] -rotate-8" />
                <img src={IMAGES.logoWithName} alt="" className="absolute left-0 bottom-10 h-60 -rotate-8 -z-50" />

                <div
                    className='bg-white md:p-5 py-4 rounded-xl flex flex-col space-y-4 lg:w-3/5   xl:w-2/5 items-center justify-center z-50 w-full'>
                    <div
                        className='md:w-3/4 items-center justify-center flex flex-col space-y-8'>
                        <img src={IMAGES.logo}
                            alt='Colored Logo'
                            className='md:h-24 h-12 md:min-w-max' />

                        <form className='flex flex-col sm:w-full xs:w-[90%]  items-center justify-center space-y-6 px-3'>
                            <h1 className='text-[1.75rem] font-semibold text-gray-1 font-poppins text-center min-w-max'>
                                Sign in to continue
                            </h1>
                            <div className=' flex flex-col sm:w-full xs:w-[90%] space-y-4 '>
                                <Input
                                    label={"Email"}
                                    type={"text"}
                                    placeholder={"Input your email in here"}
                                />
                                <div className='flex flex-col w-full justify-center space-y-2'>
                                    <Input
                                        label={"Password"}
                                        type={"password"}
                                        placeholder={"Input your password in here"}
                                    />
                                    <button
                                        className='text-right font-poppins text-gray-2 text-base font-normal'>
                                        Forgot password?
                                    </button>
                                </div>

                            </div>
                            <Button
                                title={"Sign In"}
                                onClick={() => {
                                    setIsLoggedIn(true)
                                    navigate("/dashboard")
                                }}
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

                                    <button
                                        onClick={() => { }}
                                        className="h-11 w-11 border border-gray-5 rounded-full flex items-center justify-center">
                                        <img
                                            src={IMAGES?.appleLogo} // Replace with your actual image source
                                            alt="Apple Logo"
                                            className="h-6 w-6"
                                        />
                                    </button>

                                </div>

                            </div>


                            <div className=' text-center flex flex-col md:flex-row font-poppins font-normal text-gray-4 text-base space-x-1'>
                                <p>Doesn’t have an account?</p>
                                <Link to="/signup"
                                    className='text-custom-blue hover:text-blue-500'>Sign up now</Link>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
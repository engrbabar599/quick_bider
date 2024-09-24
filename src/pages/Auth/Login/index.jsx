import React from 'react'
import IMAGES from 'assets/IMAGES'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import Spinner from 'components/Spinner'
import { useLoginHelper } from './helper'
import Svgs from 'assets/svgs'

export const Login = () => {
    const { isPending, loginSchema, siginUser } = useLoginHelper()

    return (
        <>
            <div className='bg-custom-blue max-sm:py-16 relative z-50 min-h-screen h-fit flex justify-center items-center px-1'>
                <img
                    src={IMAGES.backgroundLogo}
                    alt=""
                    className="absolute right-0 top-0 h-[36rem] -rotate-8" />
                <img
                    src={IMAGES.logoWithName}
                    alt=""
                    className="absolute left-0 bottom-10 h-60 -rotate-8 -z-50" />

                <div
                    className='bg-white md:p-5 py-4 rounded-xl flex flex-col w-[95vw] xs:w-[85vw] space-y-4  md:w-[60vw]
                    lg:w-3/5 xl:w-2/5 items-center justify-center z-50 '>
                    <div
                        className='lg:w-3/4 w-full items-center justify-center flex flex-col   space-y-8'>
                        <Link to={"/"} className=' min-w-max outline-none'>
                            <img
                                src={IMAGES.logo}
                                alt='Colored Logo'
                                className='lg:h-24 h-12 md:min-w-max' />
                        </Link>
                        <div
                            className='flex flex-col sm:w-full xs:w-[90%]  items-center justify-center space-y-6 px-3'>
                            <h1
                                className='text-[1.75rem] font-semibold text-gray-1 font-poppins text-center min-w-max'>
                                Sign in to continue
                            </h1>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validateOnChange={false}
                                validateOnBlur={false}
                                validationSchema={loginSchema}
                                onSubmit={(values) => {
                                    siginUser(values)
                                }}>
                                {({
                                    setErrors,
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (
                                    <form onSubmit={handleSubmit} className=' flex flex-col sm:w-full xs:w-[90%] space-y-4 '>
                                        <div className=' flex flex-col sm:w-full space-y-4 '>
                                            <div>
                                                <Input
                                                    error={(errors.email && touched.password) && errors.email}
                                                    value={values.email}
                                                    onChange={(e) => {
                                                        setErrors({ ...errors, email: "" })
                                                        handleChange(e)
                                                    }}
                                                    name="email"
                                                    label={"Email"}
                                                    type={"text"}
                                                    placeholder={"Input your email in here"}
                                                    smallPlaceholder={"Input your email"}
                                                />
                                            </div>
                                            <div className='flex flex-col w-full justify-center space-y-2'>
                                                <div>
                                                    <Input
                                                        error={(errors.password && touched.password) ? errors?.password : ""}
                                                        value={values.password}
                                                        onChange={(e) => {
                                                            setErrors({ ...errors, password: "" })
                                                            handleChange(e)
                                                        }}
                                                        name="password"
                                                        label={"Password"}
                                                        type={"password"}
                                                        placeholder={"Input your password in here"}
                                                        smallPlaceholder={"Input your password"}
                                                    />
                                                </div>

                                                <div className='flex w-full justify-end items-end'>
                                                    <button
                                                        type='button'
                                                        className='text-right font-poppins text-gray-2 text-base font-normal hover:text-black outline-none'>
                                                        Forgot password?
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                        <Button
                                            disabled={isPending}
                                            type="submit"
                                            title={isPending ?
                                                <Spinner
                                                    isVisible={isPending} />
                                                :
                                                "Sign In"} />
                                    </form>

                                )}
                            </Formik>

                            <div className='space-y-4 items-center justify-center flex flex-col'>
                                <p
                                    className='text-gray-4 font-poppins font-normal text-sm'>
                                    Sign up with
                                </p>
                                <div className=' flex space-x-4 flex-row'>
                                    <button className="h-11 w-11 border border-gray-5 rounded-full flex items-center justify-center outline-none">
                                        <Svgs.GoogleIcon />
                                    </button>

                                    <button
                                        onClick={() => { }}
                                        className="h-11 w-11 border border-gray-5 rounded-full flex items-center outline-none justify-center">
                                        <Svgs.AppleIcon />
                                    </button>

                                </div>

                            </div>


                            <div className=' text-center flex flex-col md:flex-row font-poppins font-normal text-gray-4 text-base space-x-1'>
                                <p>Doesn’t have an account?</p>
                                <Link to="/signup"
                                    className='text-custom-blue hover:text-blue-500'>Sign up now</Link>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
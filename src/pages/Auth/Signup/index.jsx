import React from 'react'
import { Link, } from 'react-router-dom'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import IMAGES from 'assets/IMAGES'
import { Formik } from 'formik'
import Spinner from 'components/Spinner'
import { useSignupHelper } from './helper'

export const SignUp = () => {

    const { isRegisteringUser, registerSchema, registerUser } = useSignupHelper()

    return (
        <div className='bg-custom-blue relative z-50 min-h-screen md:p-12 p-1 max-sm:py-16 flex justify-center items-center'>
            <img src={IMAGES.backgroundLogo} alt="" className="absolute right-0 top-0 h-[36rem] -rotate-8" />
            <img src={IMAGES.logoWithName} alt="" className="absolute left-0 bottom-10 h-60 -rotate-8 -z-50" />

            <div
                className='bg-white lg:p-5 p-2.5 rounded-xl flex flex-col space-y-4 xl:w-2/5 lg:w-3/5   items-center justify-center z-50  w-[90vw] md:w-[60vw]'>
                <div
                    className='md:w-3/4 items-center justify-center flex flex-col space-y-4'>
                    <Link to={"/"} className='min-w-max'>
                        <img src={IMAGES.logo}
                            alt='Colored Logo'
                            className='lg:h-16 h-12 ' />
                    </Link>

                    <div className='flex flex-col md:w-full w-[95%]  items-center justify-center space-y-8'>

                        <div className=' flex flex-col w-full space-y-4 '>
                            <h1 className='text-[1.75rem]  font-semibold text-gray-1 font-poppins text-center '>
                                Sign up to continue
                            </h1>
                        </div>

                        <Formik
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                username: '',
                                email: '',
                                password: '',
                                device_id: '4555455',
                                termsConditions: false
                            }}
                            validateOnBlur={false}
                            validationSchema={registerSchema}
                            onSubmit={(values) => {
                                registerUser(values)
                            }}>
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                setErrors
                                /* and other goodies */
                            }) => (
                                <>
                                    <form
                                        onSubmit={handleSubmit}
                                        className='flex flex-col w-full space-y-4'>
                                        <div>
                                            <Input
                                                error={errors.first_name && touched.first_name}
                                                value={values.first_name}
                                                name={"first_name"}
                                                onChange={handleChange}
                                                // onBlur={handleBlur}
                                                label={"First Name"}
                                                type={"text"}
                                                placeholder={"Input your first name in here"}
                                                smallPlaceholder={"Input your first name"}
                                            />
                                            {errors.first_name && touched.first_name &&
                                                <span className='text-red-500 text-sm font-poppins'>
                                                    {errors.first_name}
                                                </span>
                                            }
                                        </div>
                                        <div>
                                            <Input
                                                error={errors.last_name && touched.last_name}
                                                name={"last_name"}
                                                // onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.last_name}
                                                label={"Last Name"}
                                                type={"text"}
                                                placeholder={"Input your last name in here"}
                                                smallPlaceholder={"Input your last name"}

                                            />
                                            {errors.last_name && touched.last_name &&
                                                <span className='text-red-500 text-sm font-poppins'>
                                                    {errors.last_name}
                                                </span>
                                            }
                                        </div>
                                        <div>
                                            <Input
                                                onChange={handleChange}
                                                // onBlur={handleBlur}
                                                error={errors.username && touched.username}
                                                name={"username"}
                                                value={values.username}
                                                label={"Username"}
                                                type={"text"}
                                                placeholder={"Input your username in here"}
                                                smallPlaceholder={"Input your username"}

                                            />
                                            {errors.username && touched.username &&
                                                <span className='text-red-500 text-sm font-poppins'>
                                                    {errors.username}
                                                </span>
                                            }
                                        </div>

                                        <div>
                                            <Input
                                                value={values.email}
                                                // onBlur={handleBlur}
                                                onChange={handleChange}
                                                name={"email"}
                                                error={errors.email && touched.email}
                                                label={"Email"}
                                                type={"email"}
                                                placeholder={"Input your email in here"}
                                                smallPlaceholder={"Input your email "}

                                            />
                                            {errors.email && touched.email &&
                                                <span className='text-red-500 text-sm font-poppins'>
                                                    {errors.email}
                                                </span>
                                            }
                                        </div>
                                        <div>

                                            <Input
                                                value={values.password}
                                                onChange={handleChange}
                                                // onBlur={handleBlur}
                                                error={errors.password && touched.password}
                                                name={"password"}
                                                label={"Password"}
                                                type={"password"}
                                                placeholder={"Input your password in here"}
                                                smallPlaceholder={"Input your password"}
                                            />
                                            {errors.password && touched.password &&
                                                <span className='text-red-500 text-sm font-poppins'>
                                                    {errors.password}
                                                </span>
                                            }
                                        </div>

                                        <div className='flex flex-col w-full justify-center gap-1 '>
                                            <div className='flex flex-row space-x-2 items-start'>
                                                <input
                                                    value={values.termsConditions}
                                                    onChange={handleChange}
                                                    // onBlur={handleBlur}
                                                    type="checkbox"
                                                    name="termsConditions"
                                                    id=""
                                                    className='!border-2 border-custom-blue rounded-md appearance-none checked:bg-custom-blue hover:scale-105 hover:cursor-pointer md:w-5 w-6 max-w-5 max-[375px]:w-6 h-5 outline-none min-w-max checked:bg-no-repeat checked:bg-center'
                                                />
                                                <div className='font-poppins text-xs lg:text-sm text-gray-4 font-normal flex flex-col space-y-1'>
                                                    <span className='flex flex-wrap'>
                                                        <span>I have read and agree to the&nbsp;</span>
                                                        <Link className="text-custom-blue underline">Terms of Service</Link>
                                                    </span>
                                                </div>
                                            </div>

                                            {errors.termsConditions && touched.termsConditions &&
                                                <span className='text-sm text-red-500 font-poppins'>
                                                    {errors.termsConditions}
                                                </span>
                                            }
                                        </div>

                                        <Button
                                            type={"submit"}
                                            title={isRegisteringUser ?
                                                <Spinner
                                                    isVisible={isRegisteringUser}
                                                />
                                                :
                                                "Sign up"}
                                        />
                                    </form>

                                </>

                            )}
                        </Formik>



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
                            <Link to="/login" className='text-custom-blue hover:text-blue-500 '>
                                Sign in
                            </Link>
                        </div>




                    </div>
                </div>
            </div>
        </div >
    )
}

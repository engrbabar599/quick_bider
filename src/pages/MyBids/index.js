import React from 'react'
import IMAGES from '../../assets/IMAGES'
import { OutlineButton } from '../../components/OutlineButton'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export const MyBidsPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col gap-6 '>
            <div className="flex flex-row justify-between items-center font-poppins">
                <h3 className='text-gray-1 font-semibold text-xl'>My bids</h3>
                <button className='text-custom-blue text-base font-semibold hover:scale-105 hover:text-blue-500'>View all</button>
            </div>
            <div className='flex flex-row min-w-max gap-4'>
                <div>

                    <Button
                        className={"!min-w-max !px-5 !py-2"}
                        title={"Active"}
                    />
                </div>
                <div>
                    <OutlineButton
                        className={"!min-w-max !px-4 !py-2"}
                        title={"History"} />

                </div>
            </div>

            <div className='flex flex-row gap-y-5 gap-x-8 flex-wrap w-full items-center justify-center'>

                {Array(5).fill().map((_, index) => (
                    <div className="bg-white border  shadow-sm rounded-xl flex flex-col  lg:px-10 p-5 gap-7 items-center ">

                        <div className='flex flex-col gap-4 items-center'>

                            <div className='md:flex flex-row gap-3 hidden '>
                                {Array(3).fill().map((_, index) => (
                                    <div className='flex flex-col gap-4  '>
                                        <img src={IMAGES.mybids1} alt="" className='rounded-xl  w-36 h-32  ' />
                                    </div>
                                ))}
                            </div>

                            <img src={IMAGES.mustang} alt="" className='rounded-xl md:hidden' />


                        </div>

                        <div className='flex flex-col items-start w-full font-poppins'>
                            <p className='font-semibold text-xl text-gray-1'>Investment audi</p>
                            <p className='cursor-pointer text-gray-4'>@invest.audi</p>
                        </div>


                        <div className='flex flex-col gap-4  w-full'>
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
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.0367 29.7515L35.3191 29.4763L44.6607 20.3701C44.6609 20.3699 44.6611 20.3697 44.6613 20.3695C44.8682 20.166 44.94 19.8689 44.8525 19.6003C44.7638 19.3283 44.5287 19.13 44.2456 19.0886C44.2455 19.0886 44.2454 19.0885 44.2453 19.0885L31.3323 17.2136L30.942 17.1569L30.7675 16.8033L24.9925 5.10026L24.9925 5.10024C24.8958 4.90419 24.6543 4.75 24.3196 4.75C23.9848 4.75 23.7434 4.90419 23.6467 5.10024L23.6466 5.10026L17.8716 16.8033L17.6971 17.1569L17.3068 17.2136L4.39384 19.0885C4.39372 19.0885 4.39359 19.0886 4.39347 19.0886C4.39343 19.0886 4.39338 19.0886 4.39334 19.0886C4.11117 19.13 3.87529 19.3291 3.78645 19.6009C3.69901 19.8684 3.77166 20.1677 3.97711 20.3688C3.97723 20.3689 3.97734 20.3691 3.97745 20.3692L13.3215 29.4747L13.6039 29.75L13.5373 30.1387L11.3309 43.002L35.0367 29.7515ZM35.0367 29.7515L35.1034 30.1402M35.0367 29.7515L35.1034 30.1402M35.1034 30.1402L37.3098 43.0036C37.3578 43.2852 37.2422 43.5696 37.0109 43.7378L37.0099 43.7386M35.1034 30.1402L37.0099 43.7386M37.0099 43.7386C36.8814 43.8324 36.7268 43.8809 36.5701 43.8809C36.4508 43.8809 36.3312 43.8524 36.2224 43.795L36.2216 43.7945M37.0099 43.7386L36.2216 43.7945M36.2216 43.7945L24.6686 37.721L24.3196 37.5376M36.2216 43.7945L24.3196 37.5376M24.3196 37.5376L23.9706 37.721M24.3196 37.5376L23.9706 37.721M23.9706 37.721L12.4191 43.793L12.417 43.7941M23.9706 37.721L12.417 43.7941M12.417 43.7941C12.1664 43.9269 11.861 43.9053 11.631 43.7373L11.6297 43.7363M12.417 43.7941L11.6297 43.7363M11.6297 43.7363C11.3986 43.5683 11.283 43.2841 11.3308 43.0027L11.6297 43.7363Z" stroke="#6F9CFF" stroke-width="1.5" />
                                    </svg>
                                    <div className='flex flex-col font-poppins items-center'>
                                        <p className='text-gray-1 font-semibold lg:text-xl text-sm'>320</p>
                                        <p className='text-gray-4 lg:text-base text-xs'>Score</p>
                                    </div>
                                </div>
                                <div className='border border-gray-5 py-2  flex flex-col items-center justify-center rounded-xl lg:w-28 w-20 h-full gap-2 '>
                                    <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M41.5133 14.1718C42.9189 13.184 43.8496 11.541 43.8496 9.68896C43.8496 6.65929 41.3993 4.20895 38.3696 4.20895C35.3399 4.20895 32.8896 6.65929 32.8896 9.68896C32.8896 11.541 33.8108 13.184 35.226 14.1718C34.0198 14.5896 32.9181 15.2355 31.9873 16.0712C30.7052 14.979 29.1951 14.1433 27.5425 13.6494C29.5465 12.4337 30.8951 10.2208 30.8951 7.704C30.8951 3.86704 27.7895 0.761383 23.9525 0.761383C20.1156 0.761383 17.0099 3.87654 17.0099 7.704C17.0099 10.2208 18.349 12.4337 20.3625 13.6494C18.7289 14.1433 17.2378 14.9695 15.9652 16.0427C15.0344 15.226 13.9517 14.5896 12.7645 14.1812C14.1702 13.1935 15.1009 11.5505 15.1009 9.69846C15.1009 6.66878 12.6506 4.21845 9.62089 4.21845C6.59122 4.21845 4.14088 6.66878 4.14088 9.69846C4.14088 11.5505 5.06213 13.1935 6.47725 14.1812C2.70677 15.4824 0 19.0629 0 23.2703V23.8971C0 23.9161 0.0189949 23.9351 0.0379897 23.9351H11.6533C11.5869 24.4575 11.5489 24.9988 11.5489 25.5402V26.186C11.5489 28.9782 13.8093 31.2386 16.6015 31.2386H31.3225C34.1148 31.2386 36.3751 28.9782 36.3751 26.186V25.5402C36.3751 24.9988 36.3372 24.4575 36.2707 23.9351H47.962C47.981 23.9351 48 23.9161 48 23.8971V23.2703C47.981 19.0534 45.2837 15.4729 41.5133 14.1718ZM34.4092 9.67947C34.4092 7.49506 36.1852 5.71904 38.3696 5.71904C40.554 5.71904 42.33 7.49506 42.33 9.67947C42.33 11.8354 40.592 13.5924 38.4456 13.6399C38.4171 13.6399 38.3981 13.6399 38.3696 13.6399C38.3411 13.6399 38.3221 13.6399 38.2936 13.6399C36.1377 13.6019 34.4092 11.8449 34.4092 9.67947ZM18.5105 7.704C18.5105 4.71231 20.9418 2.28097 23.9335 2.28097C26.9252 2.28097 29.3566 4.71231 29.3566 7.704C29.3566 10.5912 27.0867 12.9561 24.2469 13.1175C24.1425 13.1175 24.038 13.1175 23.9335 13.1175C23.829 13.1175 23.7246 13.1175 23.6201 13.1175C20.7804 12.9561 18.5105 10.5912 18.5105 7.704ZM5.63197 9.67947C5.63197 7.49506 7.40799 5.71904 9.5924 5.71904C11.7768 5.71904 13.5528 7.49506 13.5528 9.67947C13.5528 11.8354 11.8148 13.5924 9.66838 13.6399C9.63989 13.6399 9.62089 13.6399 9.5924 13.6399C9.56391 13.6399 9.54492 13.6399 9.51642 13.6399C7.37 13.6019 5.63197 11.8449 5.63197 9.67947ZM11.9193 22.406H1.53858C1.96597 18.3601 5.38504 15.188 9.53542 15.1595C9.55441 15.1595 9.57341 15.1595 9.5924 15.1595C9.6114 15.1595 9.63039 15.1595 9.64939 15.1595C11.6249 15.169 13.4294 15.9003 14.8255 17.0875C13.4579 18.5691 12.4416 20.3926 11.9193 22.406ZM34.8366 26.186C34.8366 28.133 33.2505 29.719 31.3035 29.719H16.5825C14.6355 29.719 13.0495 28.133 13.0495 26.186V25.5402C13.0495 19.6423 17.7602 14.8176 23.6201 14.6466C23.7246 14.6561 23.8385 14.6561 23.943 14.6561C24.0475 14.6561 24.1615 14.6561 24.2659 14.6466C30.1258 14.8176 34.8366 19.6423 34.8366 25.5402V26.186ZM35.9668 22.406C35.4444 20.4021 34.4472 18.607 33.089 17.1255C34.4947 15.9098 36.3182 15.1785 38.3126 15.1595C38.3316 15.1595 38.3506 15.1595 38.3696 15.1595C38.3886 15.1595 38.4076 15.1595 38.4266 15.1595C42.577 15.188 45.996 18.3601 46.4234 22.406H35.9668Z" fill="#6F9CFF" />
                                    </svg>

                                    <div className='flex flex-col font-poppins items-center'>
                                        <p className='text-gray-1 font-semibold lg:text-xl text-sm '>160</p>
                                        <p className='text-gray-4 lg:text-base text-xs'>Participants</p>
                                    </div>
                                </div>
                                <div className='border border-gray-5 py-2  flex flex-col items-center justify-center rounded-xl lg:w-28 w-20 h-full gap-2'>
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_7_2111)">
                                            <path d="M21 42C32.578 42 42 32.578 42 21C42 9.42202 32.5781 0 21 0C9.4219 0 0 9.42202 0 21C0 32.578 9.42202 42 21 42ZM21 2.79995C31.038 2.79995 39.2 10.9619 39.2 21C39.2 31.0381 31.0381 39.2 21 39.2C10.9619 39.2 2.79995 31.0381 2.79995 21C2.79995 10.9619 10.962 2.79995 21 2.79995Z" fill="#6F9CFF" />
                                            <path d="M27.1251 27.6921C27.3841 27.902 27.692 28.0001 28.0001 28.0001C28.4131 28.0001 28.8191 27.8181 29.092 27.4751C29.575 26.8731 29.477 25.9911 28.8751 25.5081L22.4001 20.3281V9.80006C22.4001 9.03005 21.7701 8.40009 21.0001 8.40009C20.2301 8.40009 19.6001 9.03005 19.6001 9.80006V21.0001C19.6001 21.4271 19.7961 21.8261 20.1251 22.0921L27.1251 27.6921Z" fill="#6F9CFF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7_2111">
                                                <rect width="42" height="42" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <div className='flex flex-col font-poppins items-center'>
                                        <p className='text-gray-1 font-semibold text-xl'>4:20</p>
                                        <p className='text-gray-4  text-xs'>Time</p>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <div className='flex flex-col gap-5  items-center'>
                            <OutlineButton
                                onClick={() => navigate("/mybids/bidDetails")}
                                title={"View details"}
                            />

                        </div>


                    </div>
                ))}
            </div>


        </div>
    )
}

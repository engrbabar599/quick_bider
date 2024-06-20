import React from 'react'
import IMAGES from '../../assets/IMAGES'
import { Sidebar } from '../../components/Sidebar'
import { Navbar } from '../../components/Navbar'
import { Button } from "../../components/Button"

export const Dashboard = () => {
    return (
        <>
            <div className='grid grid-cols-5'>
                <Sidebar />

                <div className='w-full col-span-4 px-4 py-6 '>
                    <Navbar />


                    <div className='grid md:grid-cols-3 mt-12 gap-8'>
                        <img src={IMAGES?.mainAd} alt="" className='col-span-2' />


                        <div className=' border rounded-xl p-4 border-gray-5 flex flex-col shadow-sm'>
                            <div className='flex flex-row justify-between items-center font-heading'>
                                <p className=''>My Balance</p>
                                <p className='text-custom-blue'>$12500.00
                                    <span className='text-custom-green'>
                                        (+21%)
                                    </span>
                                </p>
                            </div>


                            <div className='flex flex-row space-x-4'>
                                <select name="" id="">
                                    <option value="">Last 7 days</option>
                                    <option value="">Last 30 days</option>
                                    <option value="">Last 60 days</option>
                                </select>

                                <Button
                                    title={"Add Money"}
                                />

                            </div>

                        </div>
                    </div>




                </div>
            </div>
        </>

    )
}

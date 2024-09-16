import Svgs from 'assets/svgs'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function BreadCrumb({ first, firstUrl, second, secondUrl, third, thirdUrl }) {
    const navigate = useNavigate()
    return (
        <div className='flex flex-row items-center gap-x-2 py-6'>
            <span onClick={() => navigate(-1)} className='cursor-pointer'>
                <Svgs.BackArrow />
            </span>
            <div className='flex flex-row font-poppins font-normal  text-base'>
                <p
                    onClick={() => firstUrl ? navigate(firstUrl) : navigate(-1)}
                    className='text-gray-1 font-poppins font-medium hover:cursor-pointer hover:text-black'>
                    {first}/
                </p>
                {third &&
                    <p
                        onClick={() => secondUrl ? navigate(secondUrl) : navigate(-1)}
                        className='text-gray-1 font-poppins font-medium hover:cursor-pointer hover:text-black'>
                        {second}/
                    </p>
                }

                <p
                    className='font-semibold text-custom-blue capitalize'>
                    {third ? third : second}
                </p>
            </div>
        </div>
    )
}

export default BreadCrumb
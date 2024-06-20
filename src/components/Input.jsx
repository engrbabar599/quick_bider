import React, { useState } from 'react'
import { EyeIcon } from '../assets/svgs/EyeIcon'

export const Input = ({ label, value, onChange, placeholder, type }) => {
    const [tooglePasswordInput, setTogglePasswordInput] = useState(false)

    return (
        <div className='flex flex-col space-y-2'>
            <label htmlFor="email"
                className='font-poppins font-medium text-base text-gray-1'>
                {label}
            </label>

            {type === "password" ?
                <div
                    className='border-gray-5 pr-2 border rounded-lg flex flex-row w-full justify-between items-center '>
                    <input
                        type={tooglePasswordInput ? "text" : "password"}
                        // value={}
                        // onChange={}
                        className=' p-2 w-full   rounded-lg font-poppins text-base placeholder:text-gray-4 outline-none'
                        placeholder={placeholder}
                    />
                    <button onClick={() => {
                        setTimeout(() => {
                            setTogglePasswordInput(false)
                        }, 500)
                        setTogglePasswordInput(!tooglePasswordInput)
                    }}>
                        <EyeIcon />
                    </button>
                </div>
                :
                <input
                    type={type}
                    // value={}
                    // onChange={}
                    className='border-gray-5 border p-2 rounded-lg font-poppins text-base placeholder:text-gray-4 outline-none'
                    placeholder={placeholder}
                />
            }

        </div>
    )
}

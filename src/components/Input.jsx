import React from 'react'

export const Input = ({ label, value, onChange, placeholder, type }) => {
    return (
        <div className='flex flex-col space-y-2'>
            <label htmlFor="email"
                className='font-poppins font-medium text-base text-gray-1'>
                {label}
            </label>

            {type === "password" ?
                <div>
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

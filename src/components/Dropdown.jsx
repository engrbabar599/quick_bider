import React, { useState } from 'react'

function Dropdown({ title, value, placeholder, options, onChange, errors }) {
    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <div className=" flex flex-col gap-2">
            <div className="text-base font-medium font-poppins text-gray-1">
                {title}
            </div>

            <div className='relative'>
                <button type='button' onClick={() => setOpenDropdown(!openDropdown)} className={`flex flex-row items-center justify-between w-full px-3 py-2 border rounded-lg outline-none relative ${value ? "text-gray-1 " : " text-gray-4"} ${errors ? " ring-1 ring-custom-red" : ""}`}>
                    {value ? value : placeholder}
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.0346C0.00415039 1.0951 0.00364971 1.1105 0.0139503 1.17041C0.0372009 1.30511 0.088253 1.43467 0.163257 1.54897C0.201159 1.60678 0.24526 1.65723 0.292313 1.70763L6.29257 7.70789C6.33692 7.74929 6.34702 7.76084 6.39547 7.79759C6.44988 7.83884 6.50853 7.87449 6.57023 7.90385C6.83979 8.03205 7.15966 8.03205 7.42922 7.90385C7.49092 7.87449 7.54957 7.83884 7.60398 7.79759C7.65238 7.76084 7.66253 7.74929 7.70683 7.70789L13.7071 1.70763C13.7485 1.66328 13.7601 1.65313 13.7968 1.60473C13.8932 1.47762 13.9583 1.32761 13.9855 1.17041C14.0048 1.05815 14.0048 0.942797 13.9855 0.830543C13.97 0.740789 13.9422 0.653235 13.9031 0.570982C13.7545 0.258568 13.4464 0.0410585 13.1023 0.0056572C12.9663 -0.00829315 12.8277 0.0059576 12.6974 0.0473094C12.5889 0.0817609 12.4864 0.134813 12.3957 0.203616C12.3473 0.240367 12.3372 0.251918 12.2928 0.29332L6.9997 5.58645L1.70657 0.29332L1.65667 0.246718C1.60967 0.208467 1.59872 0.197566 1.54792 0.164264C1.45271 0.101811 1.34686 0.0558095 1.23625 0.0288582C1.14775 0.00730705 1.05635 -0.00209332 0.965342 0.00100708C0.619576 0.0128074 0.297313 0.208817 0.127755 0.510329C0.0719528 0.609583 0.0333014 0.718338 0.0139503 0.830543C0.00364971 0.890445 0.00415039 0.905846 0 0.966349C0 0.9891 0 1.01185 0 1.0346Z" fill="black" />
                    </svg>
                </button>


                {openDropdown &&
                    <div className='flex flex-col absolute z-10 top-[45px] bg-white border w-full rounded-xl shadow-lg shadow-[rgba(0,0,0,0.2)]'>
                        {options?.length > 0 ?
                            options?.map((data) => (
                                <button
                                    type='button'
                                    onClick={() => {
                                        onChange &&
                                            onChange(data?.value);
                                        setOpenDropdown(false)
                                    }}
                                    className={`text-left hover:bg-custom-blue hover:bg-opacity-10 px-2 py-3 text-sm outline-none  w-full  justify-between items-center flex flex-row ${value == data?.value ? " text-custom-blue bg-custom-blue bg-opacity-10" : ''}`}>
                                    {data?.label}

                                    {data?.value == value &&
                                        <span className='text-custom-blue fill-custom-blue'>

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width={15} height={15}
                                                viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                        </span>

                                    }
                                </button>
                            ))
                            :
                            <div className='text-center font-medium text-sm px-2 py-3'>
                                No Records
                            </div>
                        }

                    </div>
                }
            </div>

            <div className='text-xs text-custom-red'>
                {errors}
            </div>


        </div>
    )
}

export default Dropdown
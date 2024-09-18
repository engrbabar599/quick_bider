import React, { useEffect, useState } from 'react'
import Svgs from 'assets/svgs';

export const Input = ({
    label,
    value,
    onChange,
    placeholder,
    smallPlaceholder,
    type,
    parentClass,
    name,
    error,
    onBlur,
    maxLength
}) => {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [tooglePasswordInput, setTogglePasswordInput] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className={`${parentClass ? parentClass : ""} flex flex-col space-y-2`}>
                {label &&
                    <label htmlFor="email"
                        className='font-poppins font-medium text-base text-gray-1'>
                        {label}
                    </label>
                }


                {type === "password" ?
                    <div
                        className={`border-gray-5 pr-2 border rounded-lg flex flex-row w-full justify-between items-center focus-within:ring-2 ring-custom-blue caret-custom-blue group ${error ? "ring-1 ring-red-500" : ""} `}>
                        <input
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            name={name ? name : ""}
                            type={tooglePasswordInput ? "text" : "password"}
                            autoComplete="current-password"
                            className={`focus:bg-white p-2 w-full rounded-lg font-poppins text-base placeholder:text-gray-4 outline-none `}
                            placeholder={isSmallScreen ? (smallPlaceholder ? smallPlaceholder : placeholder) : placeholder}
                        />
                        <button
                            type='button'
                            className='outline-none'
                            onClick={() => {
                                setTogglePasswordInput(!tooglePasswordInput)
                            }}>
                            {tooglePasswordInput ?
                                <Svgs.PasswordShowIcon />
                                : <Svgs.EyeIcon />
                            }
                        </button>
                    </div>
                    :
                    <input
                        onKeyDown={(e) => {
                            if (e.key === '+' || e.key === '-') {
                                e.preventDefault();
                            }
                        }}
                        maxLength={maxLength ? maxLength : ""}
                        onWheel={(e) => e.target.blur()}
                        autoComplete='off'
                        name={name ? name : ""}
                        type={type}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={` focus:bg-white border-gray-5 border p-2 rounded-lg font-poppins text-base placeholder:text-gray-4 outline-none focus:ring-2 ring-custom-blue
                     caret-custom-blue  ${error ? "ring-1 ring-red-500" : ""}`}
                        placeholder={isSmallScreen ? (smallPlaceholder ? smallPlaceholder : placeholder) : placeholder}
                    />
                }

            </div>
            {error &&
                <span className='text-xs text-custom-red '>
                    {error}
                </span>
            }
        </>

    )
}

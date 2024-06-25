import React from 'react'

export const Button = ({ title, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-custom-blue text-white rounded-lg p-3 w-full font-poppins text-base font-medium active:bg-custom-blue-600 hover:bg-custom-blue-500 outline-none ${className}`}>
            {title}
        </button>
    )
}

import React from 'react'

export const OutlineButton = ({ title, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-white border border-custom-blue text-custom-blue rounded-xl p-3 w-full font-poppins lg:text-base text-sm font-medium  outline-none hover:bg-custom-blue hover:text-white ${className}`}>
            {title}
        </button>
    )
}
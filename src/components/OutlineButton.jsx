import React from 'react'

export const OutlineButton = ({ title, onClick, className, customPadding, customTheme }) => {
    return (
        <button
            onClick={onClick}
            className={`${customTheme ? customTheme : "btn"} ${customPadding ? customPadding : "p-3"} w-full font-poppins lg:text-base text-sm font-medium  outline-none hover:bg-custom-blue hover:text-white ${className}`}>
            {title}
        </button>
    )
}
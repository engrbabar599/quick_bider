import React from 'react'

export const Button = ({ title, onClick, className, customPadding, customTheme, customWidth, type, disabled }) => {
    return (
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={`${customTheme ? customTheme : 'btn'} ${customPadding ? customPadding : " p-3 "} ${customWidth ? customWidth : "w-full"} ${className} ease-in-out duration-300`}>
            {title}
        </button>
    )
}

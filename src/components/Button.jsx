import React, { forwardRef } from 'react'

export const Button = forwardRef(
    ({ title, onClick, className, customPadding, customTheme, customWidth, type, disabled }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled}
                type={type}
                onClick={onClick}
                className={`${customTheme ? customTheme : 'btn'} ${customPadding ? customPadding : " p-3 "} ${customWidth ? customWidth : "w-full"} ${className} ease-in-out duration-300`}>
                {title}
            </button>
        )
    }
)

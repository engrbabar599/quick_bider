import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const DropdownSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const data = [
        {
            name: "",
            navigate: "/"
        }
    ]

    return (
        <div className='w-full'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                className={`!text-custom-blue w-full bg-custom-blue bg-opacity-10 border border-custom-blue focus:ring-1 focus:outline-none focus:ring-custom-blue font-base-2 rounded-xl text-sm px-4 py-4 text-center  items-center justify-between inline-flex xl:hidden  `} type="button">
                Dropdown button
                <svg className="w-2.5 h-2.5 ms-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* <!-- Dropdown menu-- > */}
            <div id="dropdown" className={`z-10 ${isOpen ? " " : " hidden "} bg-white divide-y divide-gray-100 rounded-lg shadow w-full`}>
                <ul className="py-2 text-sm text-gray-4" aria-labelledby="dropdownDefaultButton">

                    <li>
                        <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</NavLink>
                    </li>
                </ul>
            </div>

        </div>

    )
}

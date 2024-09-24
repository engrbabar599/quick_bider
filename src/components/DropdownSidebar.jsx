import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Svgs from 'assets/svgs';

export const DropdownSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    let location = useLocation();

    const dropdownData = [
        {
            name: "Dashboard",
            icon: <Svgs.DashboardIcon />,
            navigate: "/dashboard"
        },
        {
            name: "Auction",
            icon: <Svgs.AuctionIcon />,
            navigate: "/auction"
        },
        {
            name: "My Bids",
            icon: <Svgs.MyBidsIcon />,
            navigate: "/my-bids"
        },
        {
            name: "Investments",
            icon: <Svgs.InvestmentsIcon />,
            navigate: "/investments"
        },
        {
            name: "Ads",
            icon: <Svgs.AdsIcon />,
            navigate: "/ads"
        },
        {
            name: "Claim",
            icon: <Svgs.ClaimIcon />,
            navigate: "/claim"
        },
        {
            name: "Wallet",
            icon: <Svgs.WalletIcon />,
            navigate: "/wallet"
        },
        {
            name: "Help & Support",
            icon: <Svgs.SupportIcon />,
            navigate: "/help-support"
        },
        {
            name: "Settings",
            icon: <Svgs.SettingsIcon />,
            navigate: "/settings"
        },
        {
            name: "Logout",
            icon: <Svgs.LogoutIcon />,
            navigate: "/"
        },

    ]

    return (
        <div className='w-full bg-white py-2 xl:hidden '>
            <button
                onClick={() => setIsOpen(!isOpen)}
                id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                className={`!text-custom-blue w-full bg-custom-blue bg-opacity-10 border border-custom-blue focus:ring-1 focus:outline-none focus:ring-custom-blue font-base-2 rounded-xl text-base px-4 py-4 text-center  items-center justify-between inline-flex xl:hidden  `} type="button">
                <div className='flex flex-row gap-2 items-center text-base '>
                    {React.cloneElement(
                        dropdownData?.filter(
                            item => location.pathname.includes(item.navigate) ||
                                (item.name === 'Investments' && location.pathname.includes('portfolio'))
                        )[0]?.icon,
                        { color: "#6F9CFF" }
                    )}

                    {dropdownData?.filter(item => location.pathname.includes(item.navigate) || (item?.name === "Investments" && location.pathname.includes("portfolio")))[0].name}

                </div>
                <svg className="w-2.5 h-2.5 ms-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* <!-- Dropdown menu-- > */}
            <div id="dropdown" className={`z-10 ${isOpen ? " " : " hidden "} bg-white w-[95vw]      divide-y divide-gray-100 rounded-lg shadow-[rgba(0,0,0,0.2)] shadow-md  absolute`}>
                <ul className="py-2 text-base text-gray-4 space-y-2 " aria-labelledby="dropdownDefaultButton">
                    {dropdownData?.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                to={item?.navigate}
                                className={(({ isActive }) =>
                                    `  ${isActive ? " text-custom-blue font-semibold bg-custom-blue bg-opacity-10 " : " text-gray-4  "} block px-4 py-2 hover:bg-custom-blue hover:bg-opacity-10  items-center text-base font-poppins`)}>
                                {({ isActive }) => (
                                    <div className='flex flex-row gap-4 items-center'>
                                        {React.cloneElement(item.icon, { color: isActive ? "#6F9CFF" : "#828282" })}
                                        {item?.name}
                                    </div>

                                )}
                            </NavLink>
                        </li>

                    ))}
                </ul>
            </div>

        </div>

    )
}

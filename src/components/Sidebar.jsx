import React, { useEffect } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import IMAGES from '../assets/IMAGES';
import { useLoginContext } from '../context/LoginContext';
import Svgs from 'assets/svgs';
import { useQueryClient } from '@tanstack/react-query';

export const Sidebar = ({ activeSidebar }) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { setIsLoggedIn } = useLoginContext()
    const defaultRoute = localStorage?.getItem('activeTab') || "/dashboard"

    // Use useEffect to handle navigation based on the default route
    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate(defaultRoute);
        }
    }, [defaultRoute, navigate]);

    // const handleChangeRoute = (route) => {
    //     localStorage.setItem("activeTab", route)
    //     navigate(route)
    // }

    const sidebarData = [
        {
            name: "Dashboard",
            icon: <Svgs.DashboardIcon />,
            navigate: "/dashboard",
            active: activeSidebar === "Dashboard"
        },
        {
            name: "Auction",
            icon: <Svgs.AuctionIcon />,
            navigate: "/auction",
            active: activeSidebar === "Auction"
        },
        {
            name: "My Bids",
            icon: <Svgs.MyBidsIcon />,
            navigate: "/my-bids",
            active: activeSidebar === "My Bids"

        },
        {
            name: "Investments",
            icon: <Svgs.InvestmentsIcon />,
            navigate: "/investments",
            active: activeSidebar === "Investments"

        },
        {
            name: "Ads",
            icon: <Svgs.AdsIcon />,
            navigate: "/ads",
            active: activeSidebar === "Ads"
        },
        {
            name: "Claim",
            icon: <Svgs.ClaimIcon />,
            navigate: "/claim",
            active: activeSidebar === "Claim"

        },
        {
            name: "Wallet",
            icon: <Svgs.WalletIcon />,
            navigate: "/wallet",
            active: activeSidebar === "Wallet"

        },
        {
            name: "Help & Support",
            icon: <Svgs.SupportIcon />,
            navigate: "/help-support",
            active: activeSidebar === "Help & Support"
        },
        {
            name: "Settings",
            icon: <Svgs.SettingsIcon />,
            navigate: "/settings",
            active: activeSidebar === "Settings"
        },
        {
            name: "Logout",
            icon: <Svgs.LogoutIcon />,
            // navigate: "/",
            onClick: () => {
                console.log("Logging out")
                localStorage.removeItem("token")
                setIsLoggedIn(false)
                navigate("/")
                queryClient.removeQueries()

            }
        },
    ]

    return (
        <div className='xl:flex hidden flex-col w-full  justify-start border-r'>
            <div className='p-6 cursor-pointer' onClick={() => navigate("/")} >
                <img src={IMAGES.logo} alt="" className=' h-10 object-contain' />
            </div>

            <div className='flex flex-col  space-y-4'>
                {sidebarData?.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data?.navigate}
                        onClick={data?.onClick}
                        className={`w-full flex lg:flex-row flex-col items-center lg:justify-start justify-center space-x-4 py-4 px-6 hover:bg-custom-blue hover:bg-opacity-10 outline-none 
                            ${data?.active ? "active-link " : " bg-white text-[#828282] "}`
                        }>

                        <p>{data?.icon}</p>

                        <p className={`${data?.active ? "text-custom-blue" : "text-gray-4"} font-poppins font-semibold xl:text-lg text-base`}>
                            {data?.name}
                        </p>
                    </NavLink>
                )
                )}

            </div>
        </div >
    )
}

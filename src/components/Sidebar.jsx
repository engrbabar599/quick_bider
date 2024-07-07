import React from 'react'
import { AdsIcon, AuctionIcon, ClaimIcon, DashboardIcon, InvestmentsIcon, LogoutIcon, MyBidsIcon, SettingsIcon, SupportIcon, WalletIcon } from '../assets/svgs/SidebarSvg';
import { NavLink, useNavigate } from 'react-router-dom';
import IMAGES from '../assets/IMAGES';

export const Sidebar = () => {
    const navigate = useNavigate()

    const sidebarData = [
        {
            name: "Dashboard",
            icon: DashboardIcon,
            navigate: "/dashboard"
        },
        {
            name: "Auction",
            icon: AuctionIcon,
            navigate: "/auction"
        },
        {
            name: "My Bids",
            icon: MyBidsIcon,
            navigate: "/mybids"
        },
        {
            name: "Investments",
            icon: InvestmentsIcon,
            navigate: "/investments"
        },


        {
            name: "Ads",
            icon: AdsIcon,
            navigate: "/ads"
        },
        {
            name: "Claim",
            icon: ClaimIcon,
            navigate: "/claim"
        },

        {
            name: "Wallet",
            icon: WalletIcon,
            navigate: "/wallet"
        },
        {
            name: "Help & Support",
            icon: SupportIcon,
            navigate: "/helpAndSupport"
        },
        {
            name: "Settings",
            icon: SettingsIcon,
            navigate: "/settings"
        },
        {
            name: "Logout",
            icon: LogoutIcon,
            navigate: "/"
        },
    ]

    return (
        <div className='xl:flex hidden flex-col w-full  justify-start border-r'>
            <div className='p-6 cursor-pointer' onClick={() => navigate("/")} >
                <img src={IMAGES.logo} alt="" className=' h-10 object-contain' />
            </div>

            <div className='flex flex-col  space-y-4'>
                {sidebarData?.map((data, index) => {
                    const IconComponent = data.icon;
                    return (
                        <NavLink
                            to={data?.navigate}
                            className={({ isActive }) => `w-full flex lg:flex-row flex-col items-center lg:justify-start justify-center space-x-4 py-4 px-6 hover:bg-custom-blue hover:bg-opacity-10 outline-none ${isActive ? "bg-custom-blue bg-opacity-10" : " bg-white"}`}>
                            {({ isActive }) => (
                                <>
                                    <IconComponent color={isActive ? "#6F9CFF" : "#828282"} />
                                    <p
                                        className={`${isActive ? "text-custom-blue" : "text-gray-4"} font-poppins font-semibold xl:text-lg text-base`}>
                                        {data?.name}
                                    </p>
                                </>

                            )}
                        </NavLink>
                    )
                })}

            </div>


        </div>
    )
}

import React from 'react'
import { AuctionIcon, DashboardIcon, InvestmentsIcon, LogoutIcon, MyBidsIcon, SettingsIcon, SupportIcon, WalletIcon } from '../assets/svgs/SidebarSvg';
import { NavLink } from 'react-router-dom';
import IMAGES from '../assets/IMAGES';

export const Sidebar = () => {

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
            navigate: "/myBids"
        },
        {
            name: "Investments",
            icon: InvestmentsIcon,
            navigate: "/investments"
        },
        {
            name: "Wallet",
            icon: WalletIcon,
            navigate: "/wallet"
        },
        {
            name: "Help & Support",
            icon: SupportIcon,
            navigate: "/help"
        },
        {
            name: "Settings",
            icon: SettingsIcon,
            navigate: "/settings"
        },
        {
            name: "Logout",
            icon: LogoutIcon,
            navigate: "/logout"
        },
    ]
    return (
        <div className='xl:flex hidden flex-col w-full  justify-start border-r'>
            <div className='p-6'>
                <img src={IMAGES.coloredLogoWithName} alt="" className='h-12 object-contain' />
            </div>

            <div className='flex flex-col  space-y-4'>
                {sidebarData?.map((data, index) => {
                    const IconComponent = data.icon;
                    return (
                        <NavLink
                            to={data?.navigate}
                            className={({ isActive }) => `w-full flex flex-row space-x-4 py-4 px-6 hover:bg-custom-blue hover:bg-opacity-10 outline-none ${isActive ? "bg-custom-blue bg-opacity-10" : " bg-white"}`}>
                            {({ isActive }) => (
                                <>
                                    <IconComponent color={isActive ? "" : "#828282"} />
                                    <p
                                        className={`${isActive ? "text-custom-blue" : "text-gray-4"} font-poppins font-semibold text-xl`}>
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

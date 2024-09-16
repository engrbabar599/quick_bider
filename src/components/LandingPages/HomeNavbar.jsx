import React, { useState } from "react";
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { OutlineButton } from "../OutlineButton";
import { Button } from "../Button";
import { useLoginContext } from "../../context/LoginContext";
import { useGetUserProfile } from "api/UserManagement";


export const HomeNavbar = () => {
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState(false)
    const { isLoggedIn, setIsLoggedIn } = useLoginContext()
    const { data: userData } = useGetUserProfile()

    const handleLogout = () => {
        console.log("Logging out")
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        navigate("/")

    }
    return (
        <div className="navbar shadow-md z-20">

            <div className="xl:w-[80vw] lg:w-[90vw] lg:px-0 px-5 mx-auto flex justify-between items-center h-[90px]">
                <div className="logo cursor-pointer" onClick={() => navigate("/")}>
                    <img src={quickBidLogo} alt="" className="object-contain lg:min-w-max w-52 " />
                </div>
                <div className="navitem flex  items-center lg:gap-20">
                    <div className="hidden lg:block">
                        <ul className="text-lg font-medium font-Work-sans flex items-center gap-7">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                Home
                            </NavLink>
                            <NavLink
                                to={isLoggedIn ? "/my-bids" : "/login"}
                                className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                Bids
                            </NavLink>
                            <NavLink
                                to={isLoggedIn ? "/investments" : "/login"}
                                className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                Investments
                            </NavLink>
                            <NavLink
                                to={"/about"}
                                className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                About Us
                            </NavLink>
                            <NavLink
                                to={"/contact"}
                                className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                Contact us
                            </NavLink>
                        </ul>
                    </div>

                    <div className="flex items-center lg:order-2 space-x-4 lg:space-x-0 rtl:space-x-reverse lg:hidden">

                        <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            data-collapse-toggle="navbar-language"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-custom-blue rounded-lg bg-white lg:hidden  focus:outline-none focus:ring-2 focus:ring-custom-blue border border-custom-blue hover:bg-custom-blue hover:bg-opacity-10">
                            <span className="sr-only">
                                Open main menu
                            </span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex">
                        {isLoggedIn ?
                            userData?.display_pic
                                ?
                                <img
                                    src={userData?.display_pic}
                                    alt="Profile Pic"
                                    className='aspect-square 
                                            h-[48px] w-[48px] bg-white border rounded-full object-cover' />
                                :
                                <Link to={"/settings"}
                                    className='h-[48px] w-[48px] rounded-full bg-custom-blue text-white text-xl text-center flex items-center justify-center bg-opacity-90'>
                                    {userData?.first_name[0]}
                                    {userData?.last_name[0]}

                                </Link>

                            :
                            <Button
                                title={"Log in"}
                                onClick={() => navigate("/login")}
                                className={"!font-Work-sans !font-medium !text-lg "}
                                customPadding={"px-6 py-3"}
                            />
                        }

                    </div>

                    <div className={` absolute top-[4.5rem] pb-10 left-0 bg-white z-50 items-center justify-between w-full ${openDropdown ? "  max-h-96 opacity-100 " : " max-h-0 opacity-0 "} xl:w-auto xl:order-1 z-50  ease-in-out duration-300 transition-all`} id="navbar-language">
                        <div className="flex flex-col font-medium p-4 xl:p-0 mt-4 border border-gray-5 rounded-lg  xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white xl:w-full space-y-8">

                            <ul className="text-lg font-medium font-work-sans space-y-4 ">
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={isLoggedIn ? "/my-bids" : "/login"}
                                        className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                        Bids
                                    </NavLink>
                                </li>
                                <li>

                                    <NavLink
                                        to={isLoggedIn ? "/investments" : "/login"}
                                        className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                        Investments
                                    </NavLink>
                                </li>

                                <li>

                                    <NavLink
                                        to={"/about"}
                                        className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                        About Us
                                    </NavLink>
                                </li>
                                <li>

                                    <NavLink
                                        to={"contact"}
                                        className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}>
                                        Contact us
                                    </NavLink>
                                </li>

                                <li>
                                    {false ?
                                        <OutlineButton
                                            customPadding={"px-6 py-4"}
                                            onClick={() => handleLogout()}
                                            title="Log out" />
                                        :
                                        <Button
                                            onClick={() => {
                                                setOpenDropdown(false)
                                                navigate("/login")
                                            }}
                                            customPadding={"px-6 py-4"}
                                            title={"Log in"}
                                        />

                                    }

                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div >)
}

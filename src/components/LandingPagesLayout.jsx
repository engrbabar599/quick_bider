import React, { useState } from "react";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import quickBidLogo from "../assets/images/quickbider logo png 2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";
import banner from "../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../assets/images/facebook.png";
import tiktok from "../assets/images/tiktok.png";
import youtube from "../assets/images/youtube.png";
import twitter from "../assets/images/twitter.png";
import baseImage from "../assets/images/Wave.png"
import IMAGES from "../assets/IMAGES";
import { OutlineButton } from "./OutlineButton";


export const LandingPageLayout = ({ children }) => {
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState(false)
    const { isLoggedIn } = useLoginContext()

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
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
                                    className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to={isLoggedIn ? "/mybids" : "/login"}
                                    className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}
                                >
                                    Bids
                                </NavLink>
                                <NavLink
                                    to={isLoggedIn ? "/investments" : "/login"}
                                    className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}
                                >
                                    Investments
                                </NavLink>
                                <NavLink
                                    to={"/about"}
                                    className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}
                                >
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
                                data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-custom-blue rounded-lg bg-white lg:hidden  focus:outline-none focus:ring-2 focus:ring-custom-blue border border-custom-blue hover:bg-custom-blue hover:bg-opacity-10">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex">
                            {isLoggedIn ?
                                <div>
                                    <OutlineButton title="Log out" />
                                </div>
                                :
                                <button
                                    onClick={() => navigate("/login")}
                                    className="px-[24px] py-[15.5px] bg-custom-blue rounded-xl text-lg font-medium font-Work-sans text-white w-[101px] h-[52px]   items-center justify-center hidden lg:flex hover:bg-blue-500 hover:scale-105 ease-in-out transform duration-300">
                                    Log in
                                </button>
                            }

                        </div>

                        <div className={` absolute top-[4.5rem] pb-10 left-0 bg-white z-50 items-center justify-between w-full ${openDropdown ? "  max-h-96 opacity-100 " : " max-h-0 opacity-0 "} xl:w-auto xl:order-1 z-50  ease-in-out duration-300 transition-all`} id="navbar-language">
                            <div className="flex flex-col font-medium p-4 xl:p-0 mt-4 border border-gray-5 rounded-lg  xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white xl:w-full space-y-8">

                                {/* <div className="w-full"> */}
                                {/* </div> */}
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
                                            to={isLoggedIn ? "/mybids" : "/login"}
                                            className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}
                                        >
                                            Bids
                                        </NavLink>
                                    </li>
                                    <li>

                                        <NavLink
                                            to={isLoggedIn ? "/investments" : "/login"}
                                            className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}
                                        >
                                            Investments
                                        </NavLink>
                                    </li>

                                    <li>

                                        <NavLink
                                            to={"/about"}
                                            className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}
                                        >
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li>

                                        <NavLink
                                            to={"contact"}
                                            className={({ isActive }) => `cursor-pointer hover:text-custom-blue ${isActive ? "text-custom-blue" : "text-gray-1"}`}
                                        >
                                            Contact us
                                        </NavLink>
                                    </li>

                                    <li>
                                        {true ?
                                            <OutlineButton title="Log out" />
                                            :
                                            <button
                                                onClick={() => {
                                                    setOpenDropdown(false)
                                                    navigate("/login")
                                                }}
                                                className="px-[24px] py-[15.5px] bg-custom-blue rounded-xl text-lg font-medium font-Work-sans text-white  h-[52px]   items-center justify-center flex hover:bg-blue-500 hover:scale-105 ease-in-out transform duration-300 w-full">
                                                Log in
                                            </button>
                                        }

                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div >


            {children}


            <div className="WaveImage" >
                <img src={baseImage} alt="" />
            </div>
            <div className="banner cursor-pointer">
                <img src={banner} className=" w-[100vw]" alt="" />
            </div>
            <div className="footer py-10 bg-[#e0e0e0]">
                <div className="w-[90vw] lg:w-[80vw] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
                        <div className="first w-full lg:w-[35%]">
                            <div>
                                <img src={quickBidLogo} alt="" />
                            </div>
                            <div>
                                <p className="text-base lg:text-lg font-normal font-Work-sans text-gray-1 py-5 lg:py-10">
                                    But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="cursor-pointer">
                                    <img src={facebook} alt="" />
                                </div>
                                <div className="cursor-pointer">
                                    <img src={twitter} alt="" />
                                </div>
                                <div className="cursor-pointer">
                                    <img src={tiktok} alt="" />
                                </div>
                                <div className="cursor-pointer">
                                    <img src={youtube} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="second w-full lg:w-[15%]">
                            <div>
                                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                                    Our Services
                                </h1>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                                <NavLink
                                    to={"/"}
                                    onClick={handleScrollToTop}
                                    className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                                    Home
                                </NavLink>
                                <NavLink
                                    to={isLoggedIn ? "/mybids" : "/login"}
                                    onClick={handleScrollToTop}
                                    className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                                    Bids
                                </NavLink>
                                <NavLink
                                    to={isLoggedIn ? "/investments" : "/login"}
                                    onClick={handleScrollToTop}
                                    className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                                    Investments
                                </NavLink>
                                <NavLink
                                    to={"/about"}
                                    onClick={handleScrollToTop}
                                    className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer  ">
                                    About us
                                </NavLink>
                                <NavLink
                                    to={"/contact"}
                                    onClick={handleScrollToTop}
                                    className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer">
                                    Contact us
                                </NavLink>
                            </div>
                        </div>
                        <div className="third w-full lg:w-[35%]">
                            <div>
                                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-1">
                                    Contact
                                </h1>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                                    +012-334-5864
                                </h3>
                                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                                    info.alva@example.com
                                </h3>
                                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                                    2048 Wexford Way Wings SC 287290
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="companyName h-[100px] bg-[#4f4f4f] flex items-center justify-center">
                <div className="">
                    <h1 className="text-white font-medium text-sm font-Work-sans">
                        © 2022 wheeldealhub. All Rights Reserved
                    </h1>
                </div>
            </div>

        </>

    )
}

import React from "react";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import quickBidLogo from "../assets/images/quickbider logo png 2.png";
import { NavLink } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import banner from "../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import { HomeNavbar } from "./LandingPages/HomeNavbar";
import Svgs from "assets/svgs";


export const LandingPageLayout = ({ children }) => {
    const { isLoggedIn, setIsLoggedIn } = useLoginContext()

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


    return (
        <>
            <HomeNavbar />
            {children}

            <div className="banner cursor-pointer">
                <img src={banner} className=" w-[100vw]" alt="" />
            </div>
            <div className="footer py-10 bg-[#e0e0e0]">
                <div className="w-[90vw] lg:w-[85vw] mx-auto">
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
                                    <Svgs.FacebookIcon />
                                </div>
                                <div className="cursor-pointer">
                                    <Svgs.TwitterIcon />
                                </div>
                                <div className="cursor-pointer">
                                    <Svgs.TiktokIcon />
                                </div>
                                <div className="cursor-pointer">
                                    <Svgs.YoutubeIcon />
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
                                    to={isLoggedIn ? "/my-bids" : "/login"}
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
                                    <a href="tel:+012-334-5864">
                                        +012-334-5864
                                    </a>
                                </h3>
                                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                                    quickbider@gmail.com
                                </h3>
                                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                                    2048 Wexford Way Wings BC 287290
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

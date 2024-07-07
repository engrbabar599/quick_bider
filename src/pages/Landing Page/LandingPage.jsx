import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import './swiper-custom.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
import carImage from "../../assets/images/white grey car sale promotion banner 1.png";
import blueLine from "../../assets/images/blueline.png";
import circle from "../../assets/images/circle.png";
import { TrendingAuction } from "./TrendingAuction";
import manImage from "../../assets/images/man.png";
import trophyImage from "../../assets/images/trophyy.png";
import progressImage from "../../assets/images/progress.png";
import savemoneyImage from "../../assets/images/save-money.png";
import { RecentWinnersSection } from "./RecentWinnersSection";
import moneyImage from "../../assets/images/money.png";
import blueline2 from "../../assets/images/blueline2.png";
import circle2 from "../../assets/images/circle2.png";
import Project from "./Project";
import StarImage from "../../assets/images/starGroup.png";
import mail from "../../assets/images/mail.png";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import questionmanImage from "../../assets/images/questionman.png";
import bluelineofWeAre from "../../assets/images/lineOfWhoWeAre.png";
import bluelineVision from "../../assets/images/bluellionVision.png";
import background from "../../assets/images/Background.png"
import callIcon from "../../assets/images/Icon_Call.png"
import emailIcon from "../../assets/images/Icon_Email.png"
import supportIcon from "../../assets/images/Icon_CS.png"
import baseImage from "../../assets/images/Wave.png"
import { ArrowRight } from "../../assets/svgs/ArrowRight"
import blueBase from "../../assets/images/bluseBase.png"
import { NavLink, useNavigate } from "react-router-dom";


function LandingPage() {
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleClick = (item) => {
    setOpenDropdown(false)
    setTabActive(item);
  };

  const bidsClick = () => {
    setOpenDropdown(false)
    handleClick("bids")
    navigate("/mybids")
  }
  const investmentClick = () => {
    setOpenDropdown(false)
    handleClick("investments");
    navigate("/investments")
  }


  return (
    <>
      <div className="landingpage">

        <div className="navbar shadow-md z-20">
          <div className="lg:w-[80vw] lg:px-0 px-5 mx-auto flex justify-between items-center h-[90px]">
            <div className="logo">
              <img src={quickBidLogo} alt="" className="object-contain min-w-max" />
            </div>
            <div className="navitem flex  items-center lg:gap-20">
              <div className="hidden lg:block">
                <ul className="text-lg font-medium font-Work-sans flex items-center gap-7">
                  <li
                    onClick={() => {
                      handleClick("home");
                    }}
                    className={`cursor-pointer hover:text-custom-blue ${tabActive === "home" ? "text-custom-blue" : "text-gray-1"
                      }`}
                  >
                    Home
                  </li>
                  <li
                    onClick={bidsClick}
                    className={`cursor-pointer hover:text-custom-blue ${tabActive === "bids" ? "text-custom-blue" : "text-gray-1"
                      }`}
                  >
                    Bids
                  </li>
                  <li
                    onClick={investmentClick}
                    className={`cursor-pointer hover:text-custom-blue ${tabActive === "investments"
                      ? "text-custom-blue"
                      : "text-gray-1"
                      }`}
                  >
                    Investments
                  </li>
                  <li
                    onClick={() => {
                      handleClick("about");
                    }}
                    className={`cursor-pointer hover:text-custom-blue ${tabActive === "about" ? "text-custom-blue" : "text-gray-1"
                      }`}
                  >
                    About Us
                  </li>
                  <li
                    onClick={() => {
                      handleClick("contact");
                    }}
                    className={`cursor-pointer hover:text-custom-blue ${tabActive === "contact"
                      ? "text-custom-blue"
                      : "text-gray-1"
                      }`}
                  >
                    Contact us
                  </li>
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
              <div className="">
                <button
                  onClick={() => navigate("/login")}
                  className="px-[24px] py-[15.5px] bg-custom-blue rounded-xl text-lg font-medium font-Work-sans text-white w-[101px] h-[52px]   items-center justify-center hidden lg:flex hover:bg-blue-500 hover:scale-105 ease-in-out transform duration-300">
                  Log in
                </button>
              </div>

              <div className={` absolute top-[4.5rem] pb-10 left-0 bg-white z-50 items-center justify-between w-full ${openDropdown ? "  max-h-96 opacity-100 " : " max-h-0 opacity-0 "} xl:w-auto xl:order-1 z-50  ease-in-out duration-300 transition-all`} id="navbar-language">
                <div className="flex flex-col font-medium p-4 xl:p-0 mt-4 border border-gray-5 rounded-lg  xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white xl:w-full space-y-8">

                  {/* <div className="w-full"> */}
                  {/* </div> */}
                  <ul className="text-lg font-medium font-work-sans space-y-4 ">
                    <li
                      onClick={() => {
                        handleClick("home");
                      }}
                      className={`cursor-pointer hover:text-custom-blue ${tabActive === "home" ? "text-custom-blue" : "text-gray-1"
                        }`}
                    >
                      Home
                    </li>
                    <li
                      onClick={bidsClick}
                      className={`cursor-pointer hover:text-custom-blue ${tabActive === "bids" ? "text-custom-blue" : "text-gray-1"
                        }`}
                    >
                      Bids
                    </li>
                    <li
                      onClick={investmentClick}
                      className={`cursor-pointer hover:text-custom-blue ${tabActive === "investments"
                        ? "text-custom-blue"
                        : "text-gray-1"
                        }`}
                    >
                      Investments
                    </li>
                    <li
                      onClick={() => {
                        handleClick("about");
                      }}
                      className={`cursor-pointer hover:text-custom-blue ${tabActive === "about" ? "text-custom-blue" : "text-gray-1"
                        }`}
                    >
                      About Us
                    </li>
                    <li
                      onClick={() => {
                        handleClick("contact");
                      }}
                      className={`cursor-pointer hover:text-custom-blue ${tabActive === "contact"
                        ? "text-custom-blue"
                        : "text-gray-1"
                        }`}
                    >
                      Contact us
                    </li>
                    <li>

                      <button
                        onClick={() => {
                          setOpenDropdown(false)
                          navigate("/login")
                        }}
                        className="px-[24px] py-[15.5px] bg-custom-blue rounded-xl text-lg font-medium font-Work-sans text-white  h-[52px]   items-center justify-center flex hover:bg-blue-500 hover:scale-105 ease-in-out transform duration-300 w-full">
                        Log in
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>






      </div>
    </>
  );
}

export default LandingPage;

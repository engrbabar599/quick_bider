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
// import bluelineVision from "../../assets/images/bluellionVision.png";
import background from "../../assets/images/Background.png"
import callIcon from "../../assets/images/Icon_Call.png"
import emailIcon from "../../assets/images/Icon_Email.png"
import supportIcon from "../../assets/images/Icon_CS.png"
import baseImage from "../../assets/images/Wave.png"
import { ArrowRight } from "../../assets/svgs/ArrowRight"
import blueBase from "../../assets/images/bluseBase.png"
import { NavLink, useNavigate } from "react-router-dom";
import mission from "../../assets/images/mission.png"

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
          <div className="xl:w-[80vw] lg:w-[90vw] lg:px-0 px-5 mx-auto flex justify-between items-center h-[90px]">
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

        {tabActive === "home" && (
          <>


            <div className="firstcarpart relative flex flex-col lg:flex-row items-center justify-between mx-auto p-4 lg:p-0">
              <div className="relative textpart w-full xl:w-[35%] mx-auto xl:ml-40 lg:w-[50%] lg:ml-24 text-center lg:text-left">
                <h1 className="relative text-[32px] lg:text-[54px] font-bold font-inter text-gray-1 mx-auto pt-5 md:pt-0">
                  Your Winning Streak Starts Here
                  <span className="block">
                    <img
                      src={blueLine}
                      alt=""
                      className="absolute top-16 lg:right-48  transform -translate-x-1/2 lg:translate-x-0 lg:inline-block hidden"
                    />
                  </span>
                </h1>
                <p className="text-base lg:text-lg font-normal font-inter text-gray-2 py-4 lg:py-7 w-[70%] mx-auto lg:mx-0 lg:w-[90%]">
                  Betting at QuickBider is simple and accessible. With just $2 per bid, you have multiple chances to participate and win.
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6">
                  <button className="bg-custom-blue w-1/2 lg:w-[160px] py-3 lg:py-[14px] px-6 lg:px-[24px] rounded-xl text-base font-medium font-poppins text-white">
                    Bid now
                  </button>
                  <button className="border border-custom-blue w-1/2 lg:w-[160px] py-3 lg:py-[14px] px-6 lg:px-[24px] rounded-xl text-base font-medium font-poppins text-custom-blue mt-2 lg:mt-0">
                    Invest
                  </button>
                </div>
              </div>
              <div className="relative carimage w-full lg:w-[50%] h-[60vh] lg:h-[90vh] lg:flex items-center justify-start bg-[#f0f4fe] -z-10 mt-6 lg:mt-0 hidden ">
                <img
                  src={circle}
                  alt=""
                  className="absolute top-8 lg:top-32 right-1/4 lg:right-40 w-1/3 lg:w-auto lg:inline-block hidden"
                />
                <img
                  src={blueBase}
                  className="absolute top-[260px] lg:top-[430px] object-cover w-full lg:w-auto"
                  alt=""
                />
                <img
                  src={carImage}
                  alt=""
                  className="absolute top-24 xl:right-32 lg:right-0 w-full lg:w-[699px]"
                />
                <img
                  src={circle}
                  alt=""
                  className="absolute bottom-2 left-1/4 lg:left-3 w-1/3 lg:w-auto lg:inline-block hidden"
                />
              </div>
            </div>


            <div className="trending actions lg:w-[80%] mx-auto relative">
              <div className="text-center mt-8 lg:mt-24 text-gray-1">
                <h1 className="lg:text-[54px] font-bold font-inter text-gray-1">
                  Trending auctions
                </h1>
              </div>
              <div>
                <img
                  src={circle}
                  alt=""
                  className="absolute top-6 right-16 lg:inline-block hidden"
                />
                <TrendingAuction />
                <img
                  src={circle}
                  alt=""
                  className="absolute bottom-6 left-12 lg:inline-block hidden"
                />
              </div>
              <div className="text-center py-6">
                <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins">
                  View all
                </button>
              </div>
            </div>


            <div className="blueRectangle w-[90%] lg:w-[80%] mx-auto py-10 lg:py-16">
              <div className="bg-custom-blue rounded-xl px-8 lg:px-[64px] py-8 lg:py-[32px]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
                  <div className="flex flex-col items-center">
                    <img src={manImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      50k+
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Bidders
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={trophyImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      2k+
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Winners
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={progressImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      $7M+
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Investments
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={savemoneyImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      21%
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Return
                    </h1>
                  </div>
                </div>
              </div>
            </div>






            <div className="recentWinners w-full lg:w-[90%] mx-auto p-4 lg:p-0">
              <div className="text-center">
                <h1 className="text-[32px] lg:text-[54px] font-bold font-inter text-gray-1">
                  Recent winners
                </h1>
              </div>
              <div className="w-full lg:w-[90%] mx-auto py-6 lg:py-10">
                <RecentWinnersSection />
              </div>
              <div className="text-center py-6 lg:py-12">
                <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[16px] lg:px-[24px] py-[12px] lg:py-[14px] text-xs lg:text-base font-medium font-poppins">
                  View all
                </button>
              </div>
            </div>





            <div className="smartInvestment bg-[#E0E0E033] py-10">
              <div className="flex flex-col lg:flex-row items-center w-[90%] lg:w-[80%] mx-auto">
                <div className="relative mb-6 lg:mb-0 lg:mr-6">
                  <img src={moneyImage} alt="" className="w-full h-auto" />
                  <img
                    src={circle2}
                    className="absolute top-0 left-14 w-12 h-12 lg:w-16 lg:h-16"
                    alt=""
                  />
                  <img
                    src={circle2}
                    className="absolute bottom-0 right-14 w-12 h-12 lg:w-16 lg:h-16"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-[45%] mx-auto text-center lg:text-left">
                  <h1 className="relative lg:text-[54px] font-bold font-inter text-gray-1">
                    Smart Investments for Smart Returns
                    <img
                      src={blueline2}
                      className="absolute top-8 lg:top-16 right-4 lg:right-10 w-16 lg:w-auto md:inline-block hidden"
                      alt=""
                    />
                  </h1>
                  <p className="text-base lg:text-lg font-normal font-inter text-gray-2 py-4 lg:py-6 w-full lg:w-[90%] mx-auto lg:mx-0">
                    Betting at QuickBider is simple and accessible. With just $2 per bid, you have multiple chances to participate and win.
                  </p>
                  <button className="px-6 py-3 lg:px-[24px] lg:py-[14px] w-[140px] lg:w-[160px] bg-custom-blue text-base font-medium font-poppins rounded-xl text-white">
                    Invest now
                  </button>
                </div>
              </div>
            </div>





            <div className="upcominginvestments w-[90%] lg:w-[90%] mx-auto min-h-screen py-20">
              <div className="text-center">
                <h1 className="text-2xl lg:text-[54px] font-bold font-inter text-gray-1">
                  Upcoming Investments
                </h1>
              </div>
              <div className="">
                <Project />
                <div className="text-center mt-10">
                  <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins hover:bg-custom-blue hover:text-white">
                    View all
                  </button>
                </div>
              </div>
            </div>




            <div className="testimonials bg-[#d2eaff] py-10">
              <div className="text-center mb-10">
                <h1 className="text-2xl lg:text-[54px] font-bold font-inter text-gray-1">
                  What people say about us?
                </h1>
              </div>
              <Swiper
                cssMode={true}
                loop={true}
                spaceBetween={50}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {[0, 1, 2].map((slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div className="cards w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                      {Array(3)
                        .fill()
                        .map((_, i) => (
                          <div key={i} className="bg-white rounded-xl shadow-md p-7">
                            <div className="flex items-center gap-5">
                              <div>
                                <h1 className="w-[64px] h-[64px] rounded-full bg-[#cecece]"></h1>
                              </div>
                              <div className="flex flex-col gap-1">
                                <div>
                                  <h1 className="text-xl font-semibold font-inter text-gray-1">
                                    Sandra T. Robinson
                                  </h1>
                                </div>
                                <div className="flex items-center">
                                  <img src={StarImage} className="inline" alt="" />
                                  <span className="text-lg font-medium font-Work-sans text-gray-1 px-2">
                                    5.0
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p className="text-base font-normal font-Work-sans text-gray-2 pt-5">
                                And equal blame belongs to those who fail in their duty
                                through weakness of will, which is the same as saying
                                through shrinking from toil and pain.
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="text-center py-10">
                <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins hover:bg-custom-blue hover:text-white">
                  View all
                </button>
              </div>
            </div>




            <div className="newsLatter h-auto lg:h-[80vh] flex items-center justify-center py-10">
              <div className="bg-custom-blue rounded-3xl w-[90%] lg:w-[80%] mx-auto p-10">
                <div className="w-[90%] lg:w-[50%] text-center mx-auto">
                  <h1 className=" text-white md:text-[40px] font-bold font-inter text-center">
                    Subscribe to Our Newsletter For Weekly Article Update.
                  </h1>
                </div>
                <div className="text-center py-6 lg:py-10 flex flex-col lg:flex-row items-center justify-center gap-5">
                  <label
                    htmlFor=""
                    className="relative w-full lg:w-[468px] h-[48px] lg:h-[61px] rounded-full flex items-center px-5 bg-[#FEFEFE] bg-opacity-40 lg:px-16 text-base font-normal text-[#ffffff4b] border border-white"
                  >
                    <div className="flex flex-row w-full gap-2">
                      <img src={mail} className=" " alt="" />
                      <input type="text" className="bg-transparent outline-none w-full text-[#FFFFFF] placeholder:text-[#FFFFFF] placeholder:opacity-50"
                        placeholder="Enter your e-mail address" />

                    </div>
                  </label>
                  {/* <input
                    type="text"
                    placeholder="Enter your e-mail address"
                    className=" bg-white opacity-40 border-2 border-white outline-none rounded-full w-full lg:w-[468px] h-[48px] lg:h-[61px] px-5 lg:px-16"
                  /> */}
                  <button className="w-[174px] h-[48px] lg:h-[61px] rounded-full text-base lg:text-lg font-semibold font-inter text-custom-blue bg-white">
                    Subscribe
                  </button>
                </div>
                <div></div>
              </div>
            </div>






            <div className="banner">
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
                      <div>
                        <img src={facebook} alt="" />
                      </div>
                      <div>
                        <img src={twitter} alt="" />
                      </div>
                      <div>
                        <img src={tiktok} alt="" />
                      </div>
                      <div>
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
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Home
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Bids
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Investments
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        About us
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Contact us
                      </h3>
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
        )}
        {tabActive === "about" && (
          <>
            <div className="firstcarpart relative flex flex-col lg:flex-row items-center justify-between mx-auto p-4 lg:p-0">
              <div className="relative textpart w-full xl:w-[35%] lg:w-[50%] mx-auto xl:ml-40 lg:ml-24 text-center lg:text-left">
                <h1 className="relative text-[32px] lg:text-[54px] font-bold font-inter text-gray-1 mx-auto">
                  About Us
                  <span className="block">
                    <img
                      src={blueLine}
                      alt=""
                      className="absolute top-16 lg:right-76 transform -translate-x-1/2 lg:translate-x-0 lg:inline-block hidden"
                    />
                  </span>
                </h1>
                <p className="text-base lg:text-lg font-normal font-inter text-gray-2 py-4 lg:py-7 w-[90%] lg:text-left mx-auto lg:mx-0">
                  Welcome to QuickBider, where we combine the thrill of betting with the wisdom of smart investments. Our mission is to offer our users an unparalleled experience, whether they're looking to win big or grow their wealth.
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6">
                  <button className="bg-custom-blue w-1/2 lg:w-[160px] py-3 lg:py-[14px] px-6 lg:px-[24px] rounded-xl text-base font-medium font-poppins text-white">
                    Bid now
                  </button>
                  <button className="border border-custom-blue w-1/2 lg:w-[160px] py-3 lg:py-[14px] px-6 lg:px-[24px] rounded-xl text-base font-medium font-poppins text-custom-blue mt-2 lg:mt-0">
                    Invest
                  </button>
                </div>
              </div>
              <div className="relative carimage w-full lg:w-[50%] h-[60vh] lg:h-[90vh] lg:flex items-center justify-start bg-[#f0f4fe] -z-10 mt-6 lg:mt-0 hidden ">
                <img
                  src={circle}
                  alt=""
                  className="absolute top-8 lg:top-32 right-1/4 lg:right-40 w-1/3 lg:w-auto lg:inline-block hidden"
                />
                <img
                  src={blueBase}
                  className="absolute top-[260px] lg:top-[430px] object-cover w-full lg:w-auto"
                  alt=""
                />
                <img
                  src={carImage}
                  alt=""
                  className="absolute top-24  xl:right-32 w-full lg:w-[699px] "
                />
                <img
                  src={circle}
                  alt=""
                  className="absolute bottom-2 left-1/4 lg:left-3 w-1/3 lg:w-auto lg:inline-block hidden"
                />
              </div>
            </div>
            <div className="smartInvestment bg-[#E0E0E033] py-10">
              <div className="flex flex-col lg:flex-row items-center w-[90%] lg:w-[80%] mx-auto">
                <div className="relative mb-6 lg:mb-0 lg:mr-6">
                  <img src={questionmanImage} alt="" className="w-full h-auto" />
                  <img
                    src={circle2}
                    className="absolute top-0 left-24 w-12 h-12 lg:w-16 lg:h-16"
                    alt=""
                  />
                  <img
                    src={circle2}
                    className="absolute bottom-0 right-24 w-12 h-12 lg:w-16 lg:h-16"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-[45%] mx-auto text-center lg:text-left">
                  <h1 className="relative lg:text-[54px] font-bold font-inter text-gray-1">
                    Who We Are
                    <img
                      src={bluelineofWeAre}
                      className="absolute top-8 lg:top-16 left-32  w-16 lg:w-auto lg:inline-block hidden"
                      alt=""
                    />
                  </h1>
                  <p className="text-base lg:text-lg font-normal font-inter text-gray-2 py-4 lg:py-6 w-full lg:w-[90%] mx-auto lg:mx-0">
                    Founded by MR Corporation PVT LTD. QuickBider was created to revolutionize the way people engage with betting and investment opportunities. Our platform is built on the principles of transparency, fairness, and customer-centricity, ensuring that every user feels confident and valued.      </p>
                  <button className="px-6 py-3 lg:px-[24px] lg:py-[14px] w-[140px] lg:w-[160px] bg-custom-blue text-base font-medium font-poppins rounded-xl text-white">
                    Invest now
                  </button>
                </div>
              </div>
            </div>
            <div className="smartInvestment bg-[#E0E0E033] py-10">
              <div className="flex flex-col lg:flex-row items-center w-[90%] lg:w-[80%] mx-auto">
                <div className="w-full lg:w-[45%] mx-auto text-center lg:text-left">
                  <h1 className="relative lg:text-[54px] font-bold font-inter text-gray-1">
                    Our Vision
                    <img
                      src={bluelineofWeAre}
                      className="absolute top-8 lg:top-16 left-24  w-16 lg:w-auto lg:inline-block hidden"
                      alt=""
                    />
                  </h1>
                  <p className="text-base lg:text-lg font-normal font-inter text-gray-2 py-4 lg:py-6 w-full lg:w-[90%] mx-auto lg:mx-0">
                    Founded by MR Corporation PVT LTD. QuickBider was created to revolutionize the way people engage with betting and investment opportunities. Our platform is built on the principles of transparency, fairness, and customer-centricity, ensuring that every user feels confident and valued.      </p>
                  <button className="px-6 py-3 lg:px-[24px] lg:py-[14px] w-[140px] lg:w-[160px] bg-custom-blue text-base font-medium font-poppins rounded-xl text-white">
                    Invest now
                  </button>
                </div>
                <div className="relative my-6 lg:mb-0 lg:mr-6">
                  <img src={mission} alt="" className="w-full h-auto" />
                  <img
                    src={circle2}
                    className="absolute top-0 left-24 w-12 h-12 lg:w-16 lg:h-16 hidden"
                    alt=""
                  />
                  <img
                    src={circle2}
                    className="absolute bottom-0 right-24 w-12 h-12 lg:w-16 lg:h-16 hidden"
                    alt=""
                  />
                </div>

              </div>
            </div>



            <div className="blueRectangle w-[90%] lg:w-[80%] mx-auto py-10 lg:py-16">
              <div className="bg-custom-blue rounded-xl px-8 lg:px-[64px] py-8 lg:py-[32px]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
                  <div className="flex flex-col items-center">
                    <img src={manImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      50k+
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Bidders
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={trophyImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      2k+
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Winners
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={progressImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      $7M+
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Investments
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={savemoneyImage} alt="" className="w-16 lg:w-auto" />
                    <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                      21%
                    </h1>
                    <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                      Return
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="newsLatter h-auto lg:h-[80vh] flex items-center justify-center py-10">
              <div className="bg-custom-blue rounded-3xl w-[90%] lg:w-[80%] mx-auto p-10">
                <div className="w-[90%] lg:w-[50%] text-center mx-auto">
                  <h1 className=" text-white md:text-[40px] font-bold font-inter text-center">
                    Subscribe to Our Newsletter For Weekly Article Update.
                  </h1>
                </div>
                <div className="text-center py-6 lg:py-10 flex flex-col lg:flex-row items-center justify-center gap-5">
                  <label
                    htmlFor=""
                    className="relative w-full lg:w-[468px] h-[48px] lg:h-[61px] rounded-full flex items-center px-5 lg:px-16 text-base font-normal text-[#ffffff4b] border border-white"
                  >
                    <div className="flex flex-row w-full gap-2">
                      <img src={mail} className=" " alt="" />
                      <input type="text" className="bg-transparent outline-none w-full text-[#FFFFFF] placeholder:text-[#FFFFFF] placeholder:opacity-50"
                        placeholder="Enter your e-mail address" />

                    </div>
                  </label>
                  {/* <input
                    type="text"
                    placeholder="Enter your e-mail address"
                    className="hidden bg-white opacity-40 border-2 border-white outline-none rounded-full w-full lg:w-[468px] h-[48px] lg:h-[61px] px-5 lg:px-16"
                  /> */}
                  <button className="w-[174px] h-[48px] lg:h-[61px] rounded-full text-base lg:text-lg font-semibold font-inter text-custom-blue bg-white">
                    Subscribe
                  </button>
                </div>
                <div></div>
              </div>
            </div>


            <div className="banner">
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
                      <div>
                        <img src={facebook} alt="" />
                      </div>
                      <div>
                        <img src={twitter} alt="" />
                      </div>
                      <div>
                        <img src={tiktok} alt="" />
                      </div>
                      <div>
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
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Home
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Bids
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Investments
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        About us
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Contact us
                      </h3>
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
        )}
        {tabActive === "contact" && (
          <>


            <div class="relative blueAreaFirstPart">
              <img src={background} class="absolute top-0 w-full -z-10 h-full" alt="" />
              <div class="contactpart z-10 md:pt-40 pt-10">
                <div class="text-center">
                  <h1 class="text-[56px] font-bold font-inter text-white">
                    Contact Us
                  </h1>
                </div>
                <div class="pt-5 pb-12 px-5">
                  <p class="text-base font-normal font-inter text-white w-full md:w-[50%] mx-auto text-center">
                    We’re here to help! Whether you have questions about our betting rounds,
                    investment opportunities, or need assistance with your account, our team is
                    ready to assist you. Reach out to us through any of the following channels:
                  </p>
                </div>
                <div class="w-full md:w-[63%] mx-auto p-6 md:p-12 rounded-xl bg-white border">
                  <div class="text-center">
                    <h1 class="text-[36px] font-bold font-inter text-gray-1">
                      Send message
                    </h1>
                  </div>
                  <div class="flex flex-col md:flex-row md:justify-between">
                    <div class="mb-4 md:mb-0 md:w-[48%]">
                      <label for="yourname" class="text-base font-medium font-poppins text-gray-1 mb-1">
                        Your name
                      </label>
                      <input type="text" id="yourname" class="w-full h-[44px] rounded-xl border px-4 py-2 outline-none" placeholder="Type your name here" />
                    </div>
                    <div class="md:w-[48%]">
                      <label for="email" class="text-base font-medium font-poppins text-gray-1 mb-1">
                        Email
                      </label>
                      <input type="text" id="email" class="w-full h-[44px] rounded-xl border px-4 py-2 outline-none" placeholder="Input your email here" />
                    </div>
                  </div>
                  <div class="py-4">
                    <label for="message" class="text-base font-medium font-poppins text-gray-1 mb-1">
                      Your message
                    </label>
                    <textarea id="message" rows="7" class="w-full rounded-xl border px-4 py-2 outline-none" placeholder="Type your message here"></textarea>
                  </div>
                  <div class="text-center">
                    <button class="w-[220px] h-[48px] rounded-xl text-base font-medium font-poppins bg-custom-blue text-white px-6 py-3">
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>




            <div class="iconspart w-full md:w-[80%] mx-auto py-10 md:py-20 flex flex-wrap items-center justify-center gap-10">
              <div class="card1 w-full md:w-[28%] flex flex-col items-center justify-center text-center gap-4">
                <div class="p-3 bg-[#f5f8fe] rounded-2xl">
                  <img src={emailIcon} class="border-[3px] border-dashed border-gray-400" alt="" />
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-1 font-hk-grotesk">Email us</h1>
                </div>
                <div>
                  <p class="text-base font-normal text-gray-2 font-open-sans">
                    Email us for general queries, including marketing and partnership opportunities.
                  </p>
                </div>
                <div>
                  <p class="text-base font-bold text-custom-blue font-open-sans">
                    info@quickbider.com
                  </p>
                </div>
              </div>
              <div class="card2 w-full md:w-[28%] flex flex-col items-center justify-center text-center gap-4">
                <div class="p-3 bg-[#f5f8fe] rounded-2xl">
                  <img src={callIcon} class="border-[3px] border-dashed border-gray-400" alt="" />
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-1 font-hk-grotesk">Call us</h1>
                </div>
                <div>
                  <p class="text-base font-normal text-gray-2 font-open-sans">
                    Call us to speak to a member of our team. We are always happy to help.
                  </p>
                </div>
                <div>
                  <p class="text-base font-bold text-custom-blue font-open-sans">
                    +1 (646) 786-5060
                  </p>
                </div>
              </div>
              <div class="card3 w-full md:w-[28%] flex flex-col items-center justify-center text-center gap-4">
                <div class="p-3 bg-[#f5f8fe] rounded-2xl">
                  <img src={supportIcon} class="border-[3px] border-dashed border-gray-400" alt="" />
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-1 font-hk-grotesk">Support</h1>
                </div>
                <div>
                  <p class="text-base font-normal text-gray-2 font-open-sans">
                    Check out helpful resources, FAQs, and developer tools.
                  </p>
                </div>
                <div>
                  <button class="w-full md:w-[179px] h-[40px] rounded-xl p-4 bg-white border border-custom-blue text-custom-blue text-base font-bold font-open-sans flex items-center justify-between hover:text-white hover:bg-custom-blue">
                    Support Center <ArrowRight />
                  </button>
                </div>
              </div>
            </div>



            <div className="WaveImage">
              <img src={baseImage} alt="" />
            </div>
            <div className="banner">
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
                      <div>
                        <img src={facebook} alt="" />
                      </div>
                      <div>
                        <img src={twitter} alt="" />
                      </div>
                      <div>
                        <img src={tiktok} alt="" />
                      </div>
                      <div>
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
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Home
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Bids
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Investments
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        About us
                      </h3>
                      <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                        Contact us
                      </h3>
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
        )}




      </div>
    </>
  );
}

export default LandingPage;

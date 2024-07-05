import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import './swiper-custom.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
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
import graycircle from "../../assets/images/grapcircle.png";
import mail from "../../assets/images/mail.png";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import questionmanImage from "../../assets/images/questionman.png";
import bluelineofWeAre from "../../assets/images/lineOfWhoWeAre.png";
import bluelineVision from "../../assets/images/bluellionVision.png";
import ovalTop from "../../assets/images/OvalTop.png";
import ovalBottom from "../../assets/images/OvalBottom.png";
import background from "../../assets/images/Background.png"
import callIcon from "../../assets/images/Icon_Call.png"
import emailIcon from "../../assets/images/Icon_Email.png"
import supportIcon from "../../assets/images/Icon_CS.png"
import baseImage from "../../assets/images/Wave.png"
import arrowIcon from "../../assets/images/arrow.png"
import ArrowDown, { ArrowRight } from "../../assets/svgs/ArrowRight"
import blueBase from "../../assets/images/bluseBase.png"
import { Navigate, useNavigate } from "react-router-dom";
function LandingPage() {
  const [tabActive, setTabActive] = useState("home");
  const handleClick = (item) => {
    setTabActive(item);
  };
  const navigate = useNavigate();
  const bidsClick = () =>{
    handleClick("bids")
   navigate("/mybids")
  }
  const investmentClick = () =>{
    handleClick("investments");
    navigate("/investments")
  }
  return (
    <>
      <div className="landingpage">
        <div className="navbar shadow-md z-20">
          <div className="w-[80vw] mx-auto flex justify-between items-center h-[100px]">
            <div className="logo">
              <img src={quickBidLogo} width={"224px"} height={"46px"} alt="" />
            </div>
            <div className="navitem flex items-center gap-20">
              <div className="">
                <ul className="text-lg font-medium font-Work-sans flex items-center gap-7">
                  <li
                    onClick={() => {
                      handleClick("home");
                    }}
                    className={`cursor-pointer hover:text-custom-blue ${
                      tabActive === "home" ? "text-custom-blue" : "text-gray-1"
                    }`}
                  >
                    Home
                  </li>
                  <li
                    onClick={bidsClick}
                    className={`cursor-pointer hover:text-custom-blue ${
                      tabActive === "bids" ? "text-custom-blue" : "text-gray-1"
                    }`}
                  >
                    Bids
                  </li>
                  <li
                    onClick={investmentClick}
                    className={`cursor-pointer hover:text-custom-blue ${
                      tabActive === "investments"
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
                    className={`cursor-pointer hover:text-custom-blue ${
                      tabActive === "about" ? "text-custom-blue" : "text-gray-1"
                    }`}
                  >
                    About Us
                  </li>
                  <li
                    onClick={() => {
                      handleClick("contact");
                    }}
                    className={`cursor-pointer hover:text-custom-blue ${
                      tabActive === "contact"
                        ? "text-custom-blue"
                        : "text-gray-1"
                    }`}
                  >
                    Contact us
                  </li>
                </ul>
              </div>
              <div className="">
                <button className="px-[24px] py-[15.5px] bg-custom-blue rounded-xl text-lg font-medium font-Work-sans text-white w-[101px] h-[52px] flex  items-center justify-center">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
        {tabActive === "home" && (
          <>
            <div className="firstcarpart relative mx-auto flex items-center justify-between">
              <div className="relative textpart w-[35%] mx-auto ml-40">
                <h1 className="text-[54px] font-bold font-inter text-gray-1 mx-auto">
                  Your Winning Streak Starts Here
                  <span>
                    <img
                      src={blueLine}
                      alt=""
                      className="absolute top-16 left-36"
                    />
                  </span>
                </h1>
                <p className="text-lg font-normal font-inter text-gray-2 py-7 w-[90%]">
                  Betting at QuickBider is simple and accessible. With just $2
                  per bid, you have multiple chances to participate and win.
                </p>
                <div className="flex items-center gap-6">
                  <button className="bg-custom-blue w-[160px] py-[14px] px-[24px] rounded-xl text-base font-medium font-poppins text-white">
                    Bid now
                  </button>
                  <button className="border border-custom-blue w-[160px] py-[14px] px-[24px] rounded-xl text-base font-medium font-poppins text-custom-blue">
                    Invest
                  </button>
                </div>
              </div>
              <div className="relative carimage w-[50%] h-[90vh] flex items-center justify-start bg-[#f0f4fe] -z-10">
              <img
                  src={circle}
                  alt=""
                  className="absolute top-32 right-40"
                /> 
              <img src={blueBase} className="absolute top-[430px] object-cover" alt="" />
                <img
                  src={carImage}
                  alt=""
                  className=" absolute top-24 right-32 w-[699px] "
                />
                <img
                  src={circle}
                  alt=""
                  className="absolute bottom-7 left-3"
                />
              </div>
            </div>
            
            <div className="trending actions w-[80%] mx-auto relative">
              <div className="text-center mt-24 text-gray-1">
                <h1 className="text-[54px] font-bold font-inter text-gray-1">
                  Trending auctions
                </h1>
              </div>
              <div>
              <img
                  src={circle}
                  alt=""
                  className="absolute top-6 right-16"
                /> 
                <TrendingAuction />
                <img
                  src={circle}
                  alt=""
                  className="absolute bottom-6 left-12"
                /> 
              </div>
              <div className="text-center py-6">
                <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins">
                  View all
                </button>
              </div>
            </div>
            <div className="blueReactangle w-[80%] mx-auto py-16">
              <div className="bg-custom-blue rounded-xl px-[64px] py-[32px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center">
                    <img src={manImage} alt="" />
                    <h1 className="text-[36px] font-bold font-inter text-white">
                      50k+
                    </h1>
                    <h1 className="text-lg font-medium font-inter text-white">
                      Bidders
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={trophyImage} alt="" />
                    <h1 className="text-[36px] font-bold font-inter text-white">
                      2k+
                    </h1>
                    <h1 className="text-lg font-medium font-inter text-white">
                      Winners
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={progressImage} alt="" />
                    <h1 className="text-[36px] font-bold font-inter text-white">
                      $7M+
                    </h1>
                    <h1 className="text-lg font-medium font-inter text-white">
                      Investments
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={savemoneyImage} alt="" />
                    <h1 className="text-[36px] font-bold font-inter text-white">
                      21%
                    </h1>
                    <h1 className="text-lg font-medium font-inter text-white">
                      Return
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="recentWinners w-[80%] mx-auto">
              <div className="text-center">
                <h1 className="text-[54px] font-bold font-inter text-gray-1">
                  Recent winners
                </h1>
              </div>
              <div className="w-[95%] mx-auto py-10">
                <RecentWinnersSection />
                <div className="text-center py-12">
                  <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins">
                    View all
                  </button>
                </div>
              </div>
            </div>
            <div className="smartInvestment bg-[#E0E0E033] py-10">
              <div className="flex items-center w-[80%] mx-auto">
                <div className=" relative">
                  <img src={moneyImage} alt="" />
                  <img
                    src={circle2}
                    className="absolute top-0 left-14"
                    alt=""
                  />
                  <img
                    src={circle2}
                    className="absolute bottom-0 right-14"
                    alt=""
                  />
                </div>
                <div className="w-[45%] mx-auto">
                  <h1 className="relative text-[54px] font-bold font-inter text-gray-1">
                    Smart Investments for Smart Returns
                    <img
                      src={blueline2}
                      className=" absolute top-16 right-10"
                      alt=""
                    />
                  </h1>
                  <p className="text-lg font-normal font-inter text-gray-2 py-6 w-[90%]">
                    Betting at QuickBider is simple and accessible. With just $2
                    per bid, you have multiple chances to participate and win.
                  </p>
                  <button className="px-[24px] py-[14px] w-[160px] bg-custom-blue text-base font-medium font-poppins rounded-xl text-white">
                    Invest now
                  </button>
                </div>
              </div>
            </div>
            <div className="upcominginvestments w-[80%] mx-auto h-[100vh] py-20">
              <div className="text-center">
                <h1 className=" text-[54px] font-bold font-inter text-gray-1">
                  Upcoming Investments
                </h1>
              </div>
              <div className="">
                <Project />
                <div className="text-center">
                  <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins hover:bg-custom-blue hover:text-white">
                    View all
                  </button>
                </div>
              </div>
            </div>
            <div className="testomonials h-[100vh] bg-[#d2eaff] py-10">
            <div className="text-center ">
                <h1 className="text-[54px] font-bold font-inter text-gray-1">
                  What people say about us?
                </h1>
              </div>
            <Swiper
        cssMode={true}
        // navigation={true}
        loop={true}
        spaceBetween={50}
        pagination={{clickable:true}}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="cards w-[80%] mx-auto grid grid-cols-3 gap-6 py-10">
                {Array(3)
                  .fill()
                  .map((_, i) => {
                    return (
                      <>
                        <div className="bg-white rounded-xl shadow-md p-7">
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
                              <div>
                                <img
                                  src={StarImage}
                                  className="inline"
                                  alt=""
                                />
                                <span className="text-lg font-medium font-Work-sons text-gray-1 px-2">
                                  5.0
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-base font-normal font-Work-sans text-gray-2 pt-5">
                              And equal blame belongs to those who fail in their
                              duty through weakness of will, which is the same
                              as saying through shrinking from toil and pain.
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cards w-[80%] mx-auto grid grid-cols-3 gap-6 py-10">
                {Array(3)
                  .fill()
                  .map((_, i) => {
                    return (
                      <>
                        <div className="bg-white rounded-xl shadow-md p-7">
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
                              <div>
                                <img
                                  src={StarImage}
                                  className="inline"
                                  alt=""
                                />
                                <span className="text-lg font-medium font-Work-sons text-gray-1 px-2">
                                  5.0
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-base font-normal font-Work-sans text-gray-2 pt-5">
                              And equal blame belongs to those who fail in their
                              duty through weakness of will, which is the same
                              as saying through shrinking from toil and pain.
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="cards w-[80%] mx-auto grid grid-cols-3 gap-6 py-10">
                {Array(3)
                  .fill()
                  .map((_, i) => {
                    return (
                      <>
                        <div className="bg-white rounded-xl shadow-md p-7">
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
                              <div>
                                <img
                                  src={StarImage}
                                  className="inline"
                                  alt=""
                                />
                                <span className="text-lg font-medium font-Work-sons text-gray-1 px-2">
                                  5.0
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-base font-normal font-Work-sans text-gray-2 pt-5">
                              And equal blame belongs to those who fail in their
                              duty through weakness of will, which is the same
                              as saying through shrinking from toil and pain.
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
        </SwiperSlide>
        </Swiper>
              {/* <div className="cards w-[80%] mx-auto grid grid-cols-3 gap-6 py-10">
                {Array(3)
                  .fill()
                  .map((_, i) => {
                    return (
                      <>
                        <div className="bg-white rounded-xl shadow-md p-7">
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
                              <div>
                                <img
                                  src={StarImage}
                                  className="inline"
                                  alt=""
                                />
                                <span className="text-lg font-medium font-Work-sons text-gray-1 px-2">
                                  5.0
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-base font-normal font-Work-sans text-gray-2 pt-5">
                              And equal blame belongs to those who fail in their
                              duty through weakness of will, which is the same
                              as saying through shrinking from toil and pain.
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div> */}
              {/* <div className="flex items-center justify-center gap-8">
                {Array(4)
                  .fill()
                  .map((_, i) => {
                    return (
                      <>
                        <img src={graycircle} alt="" />
                      </>
                    );
                  })}
              </div> */}
              <div className="text-center py-20">
                <button className="border text-custom-blue border-custom-blue rounded-xl w-[160px] px-[24px] py-[14px] text-base font-medium font-poppins hover:bg-custom-blue hover:text-white">
                  View all
                </button>
              </div>

             
       
      

            </div>
            <div className="newsLatter h-[80vh] py-20">
              <div className="bg-custom-blue rounded-3xl w-[80%] mx-auto py-10">
                <div className="w-[50%] text-center mx-auto">
                  <h1 className=" text-white text-[40px] font-bold font-inter text-center">
                    Subscribe to Our Newsletter For Weekly Article Update.
                  </h1>
                </div>
                <div className=" text-center py-10 flex items-center justify-center gap-5">
                  <label
                    htmlFor=""
                    className=" border border-white relative w-[468px] h-[61px] rounded-full flex items-center px-16 text-base font-normal text-[#ffffff4b]"
                  >
                    Enter your e-mail address
                    <img src={mail} className=" absolute left-0 px-5" alt="" />
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your e-mail address"
                    className="hidden bg-white opacity-40 border-2 border-white outline-none rounded-full w-[468px] h-[61px]"
                  />
                  <button className=" w-[174px] h-[61px] rounded-full text-lg font-semibold font-inter text-custom-blue bg-white">
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
              <div className="w-[80vw] mx-auto">
                <div className="flex justify-between">
                  <div className="first w-[35%]">
                    <div>
                      <img src={quickBidLogo} alt="" />
                    </div>
                    <div>
                      <p className="text-lg font-normal font-Work-sans text-gray-1 py-10">
                        But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying
                        consequences
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
                  <div className="second w-[15%]">
                    <div>
                      <h1 className="text-2xl font-semibold font-inter text-gray-1">
                        Our Services
                      </h1>
                    </div>
                    <div className="flex flex-col gap-5 pt-5">
                      <h3 className="text-lg font-normal font-Work-sans">
                        Home
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        Bids
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        Investments
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        About us
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        Contact us
                      </h3>
                    </div>
                  </div>
                  <div className="third w-[35%]">
                    <div>
                      <h1 className="text-2xl font-semibold font-inter text-gray-1">
                        Contact
                      </h1>
                    </div>
                    <div className="flex flex-col gap-5 pt-5">
                      <h3 className="text-lg font-normal font-Work-sans">
                        +012-334-5864
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        info.alva@example.com
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
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
            <div className="firstcarpart relative mx-auto flex items-center justify-between">
              <div className="relative textpart w-[35%] mx-auto ml-40">
                <h1 className="text-[54px] font-bold font-inter text-gray-1 mx-auto">
                  Your Winning Streak Starts Here
                  <span>
                    <img
                      src={blueLine}
                      alt=""
                      className="absolute top-16 left-36"
                    />
                  </span>
                </h1>
                <p className="text-lg font-normal font-inter text-gray-2 py-7 w-[90%]">
                  Betting at QuickBider is simple and accessible. With just $2
                  per bid, you have multiple chances to participate and win.
                </p>
                <div className="flex items-center gap-6">
                  <button className="bg-custom-blue w-[160px] py-[14px] px-[24px] rounded-xl text-base font-medium font-poppins text-white">
                    Bid now
                  </button>
                  <button className="border border-custom-blue w-[160px] py-[14px] px-[24px] rounded-xl text-base font-medium font-poppins text-custom-blue">
                    Invest
                  </button>
                </div>
              </div>
              <div className=" carimage w-[50%] h-[90vh] flex items-center justify-start bg-[#f0f4fe] -z-10">
                <img
                  src={carImage}
                  alt=""
                  className=" absolute top-24 right-32 w-[699px]"
                />
                <img
                  src={circle}
                  alt=""
                  className="absolute top-[88%] right-[46%]"
                />
              </div>
            </div>
            <div className="smartInvestment  py-10">
              <div className="flex items-center w-[80%] mx-auto">
                <div className=" relative">
                  <img src={questionmanImage} alt="" />
                  <img
                    src={circle2}
                    className="absolute top-0 left-14"
                    alt=""
                  />
                  <img
                    src={circle2}
                    className="absolute bottom-0 right-14"
                    alt=""
                  />
                </div>
                <div className="w-[45%] mx-auto">
                  <h1 className="relative text-[54px] font-bold font-inter text-gray-1">
                    Who We Are
                    <img
                      src={bluelineofWeAre}
                      className=" absolute top-16 left-32"
                      alt=""
                    />
                  </h1>
                  <p className="text-lg font-normal font-inter text-gray-2 py-6 w-[90%]">
                    Founded by MR Corporation PVT LTD. QuickBider was created to
                    revolutionize the way people engage with betting and
                    investment opportunities. Our platform is built on the
                    principles of transparency, fairness, and
                    customer-centricity, ensuring that every user feels
                    confident and valued.
                  </p>
                  <button className="px-[24px] py-[14px] w-[160px] bg-custom-blue text-base font-medium font-poppins rounded-xl text-white">
                    Invest now
                  </button>
                </div>
              </div>
            </div>
            <div className="smartInvestment  py-10">
              <div className="flex items-center w-[80%] mx-auto">
                <div className="w-[45%] mx-auto">
                  <h1 className="relative text-[54px] font-bold font-inter text-gray-1">
                    Our Vision
                    <img
                      src={bluelineVision}
                      className=" absolute top-16 left-32"
                      alt=""
                    />
                  </h1>
                  <p className="text-lg font-normal font-inter text-gray-2 py-6 w-[90%]">
                    We envision a world where financial opportunities are
                    accessible to everyone. By providing a platform that merges
                    entertainment with financial growth, we aim to empower our
                    users to achieve their dreams, whether that’s driving away
                    in a brand new car or watching their investments grow
                    exponentially.{" "}
                  </p>
                  <button className="px-[24px] py-[14px] w-[160px] bg-custom-blue text-base font-medium font-poppins rounded-xl text-white">
                    Bid now
                  </button>
                </div>
                <div className=" relative">
                  <img src={questionmanImage} alt="" />
                  <img
                    src={circle2}
                    className="absolute top-0 left-14"
                    alt=""
                  />
                  <img
                    src={circle2}
                    className="absolute bottom-0 right-14"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="blueReactangle w-[80%] mx-auto py-16">
              <div className="bg-custom-blue rounded-xl px-[64px] py-[32px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center">
                    <img src={manImage} alt="" />
                    <h1 className="text-[36px] font-bold font-inter text-white">
                      50k+
                    </h1>
                    <h1 className="text-lg font-medium font-inter text-white">
                      Bidders
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={trophyImage} alt="" />
                    <h1 className="text-[36px] font-bold font-inter text-white">
                      2k+
                    </h1>
                    <h1 className="text-lg font-medium font-inter text-white">
                      Winners
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={progressImage} alt="" />
                    <h1 className="text-[36px] font-bold font-inter text-white">
                      $7M+
                    </h1>
                    <h1 className="text-lg font-medium font-inter text-white">
                      Investments
                    </h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={savemoneyImage} alt="" />
                    <h1 className="text-[36px] font-bold font-inter text-white">
                      21%
                    </h1>
                    <h1 className="text-lg font-medium font-inter text-white">
                      Return
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsLatter h-[80vh] py-20">
              <div className="bg-custom-blue rounded-3xl w-[80%] mx-auto py-10">
                <div className="w-[50%] text-center mx-auto">
                  <h1 className=" text-white text-[40px] font-bold font-inter text-center">
                    Subscribe to Our Newsletter For Weekly Article Update.
                  </h1>
                </div>
                <div className=" text-center py-10 flex items-center justify-center gap-5">
                  <label
                    htmlFor=""
                    className=" border border-white relative w-[468px] h-[61px] rounded-full flex items-center px-16 text-base font-normal text-[#ffffff4b]"
                  >
                    Enter your e-mail address
                    <img src={mail} className=" absolute left-0 px-5" alt="" />
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your e-mail address"
                    className="hidden bg-white opacity-40 border-2 border-white outline-none rounded-full w-[468px] h-[61px]"
                  />
                  <button className=" w-[174px] h-[61px] rounded-full text-lg font-semibold font-inter text-custom-blue bg-white">
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
              <div className="w-[80vw] mx-auto">
                <div className="flex justify-between">
                  <div className="first w-[35%]">
                    <div>
                      <img src={quickBidLogo} alt="" />
                    </div>
                    <div>
                      <p className="text-lg font-normal font-Work-sans text-gray-1 py-10">
                        But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying
                        consequences
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
                  <div className="second w-[15%]">
                    <div>
                      <h1 className="text-2xl font-semibold font-inter text-gray-1">
                        Our Services
                      </h1>
                    </div>
                    <div className="flex flex-col gap-5 pt-5">
                      <h3 className="text-lg font-normal font-Work-sans">
                        Home
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        Bids
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        Investments
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        About us
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        Contact us
                      </h3>
                    </div>
                  </div>
                  <div className="third w-[35%]">
                    <div>
                      <h1 className="text-2xl font-semibold font-inter text-gray-1">
                        Contact
                      </h1>
                    </div>
                    <div className="flex flex-col gap-5 pt-5">
                      <h3 className="text-lg font-normal font-Work-sans">
                        +012-334-5864
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        info.alva@example.com
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
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
            <div className=" relative blueAreaFirstPart ">
                <img src={background} className=" absolute top-0 w-full -z-10" alt="" />
              <div className="contactpart z-10 pt-40">
              <div className="text-center">
                <h1 className="text-[56px] font-bold font-inter text-white">
                  Contact Us
                </h1>
              </div>
              <div className="py-5">
                <p className="text-lg font-normal font-inter text-white w-[50%] mx-auto text-center ">
                  We’re here to help! Whether you have questions about our
                  betting rounds, investment opportunities, or need assistance
                  with your account, our team is ready to assist you. Reach out
                  to us through any of the following channels:
                </p>
              </div>
              <div className="w-[63%] mx-auto p-12 rounded-xl bg-white border ">
                <div className="text-center">
                  <h1 className="text-[36px] font-bold font-inter text-gray-1">
                    Send message
                  </h1>
                </div>
                <div>
                  <div className="flex justify-between ">
                    <div className=" w-[400px]">
                      <label
                        htmlFor="yourname"
                        className="text-base font-medium font-poppins to-gray-1 w-full inline-block px-1 py-1"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        id="yourname"
                        className="w-full h-[44px] rounded-xl border px-[16px] py-[12.5px] outline-none"
                        placeholder="Type your name here"
                      />
                    </div>
                    <div className=" w-[400px]">
                      <label
                        htmlFor="yourname"
                        className="text-base font-medium font-poppins to-gray-1 w-full inline-block px-1 py-1"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="yourname"
                        className="w-full h-[44px] rounded-xl border px-[16px] py-[12.5px] outline-none"
                        placeholder="input your email in here"
                      />
                    </div>
                  </div>
                  <div>
                  <div className="py-5">
                      <label
                        htmlFor="yourname"
                        className="text-base font-medium font-poppins to-gray-1 w-full inline-block px-1 py-1"
                      >
                        Your message
                      </label>
                      <textarea
                      
                     rows="7"
                        type="text"        
                        id="yourname"
                        className="w-full rounded-xl border px-[16px] py-[12.5px] outline-none"
                        placeholder="Type your message here">
                        </textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                    <button className="w-[220px] h-[48px] rounded-xl text-base font-medium font-poppins bg-custom-blue text-white px-[24px] py-[14px]">
                    Send message
                    </button>
                </div>
              </div>
              </div>
              </div>
              <div className="iconspart w-[80%] mx-auto py-20 flex items-center justify-center gap-10">
                <div className="card1 w-[28%] flex flex-col items-center justify-center text-center gap-4">
                    <div className="p-3 bg-[#f5f8fe] rounded-2xl">
                        <img src={emailIcon} className="border-[3px] border-dashed border-gray-400" alt="" />
                    </div>
                    <div>
                    <h1 className="text-2xl font-bold to-gray-1 font-hk-grotesk">Email us</h1>
                    </div>
                    <div>
                        <p className=" text-base font-normal font-open-sans text-gray-2">
                        Email us for general queries, including marketing and partnership opportunities.
                        </p>
                    </div>
                    <div>
                        <p className="text-base font-bold font-open-sans text-custom-blue">
                        info@quickbider.com
                        </p>
                    </div>
                </div>
                <div className="card2 w-[28%] flex flex-col items-center justify-center text-center gap-4">
                    <div className="p-3 bg-[#f5f8fe] rounded-2xl">
                        <img src={callIcon} className="border-[3px] border-dashed border-gray-400" alt="" />
                    </div>
                    <div>
                    <h1 className="text-2xl font-bold to-gray-1 font-hk-grotesk">Call us</h1>
                    </div>
                    <div>
                        <p className=" text-base font-normal font-open-sans text-gray-2">
                        Call us to speak to a member of our team. We are always happy to help.                        </p>
                    </div>
                    <div>
                        <p className="text-base font-bold font-open-sans text-custom-blue">
                        +1 (646) 786-5060
                        </p>
                    </div>
                </div>
                <div className="card3 w-[28%] flex flex-col items-center justify-center text-center gap-4">
                    <div className="p-3 bg-[#f5f8fe] rounded-2xl">
                        <img src={supportIcon} className="border-[3px] border-dashed border-gray-400" alt="" />
                    </div>
                    <div>
                    <h1 className="text-2xl font-bold to-gray-1 font-hk-grotesk">Support</h1>
                    </div>
                    <div>
                        <p className=" text-base font-normal font-open-sans text-gray-2">
                        Check out helpful resources, FAQs and developer tools.                        </p>
                    </div>
                    <div>
                        <button className="w-[179px] h-[40px] rounded-xl p-4 bg-white border border-custom-blue text-custom-blue text-base font-bold font-open-sans flex items-center justify-between hover:text-white hover:bg-custom-blue">Support Center <ArrowRight/> </button>
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
              <div className="w-[80vw] mx-auto">
                <div className="flex justify-between">
                  <div className="first w-[35%]">
                    <div>
                      <img src={quickBidLogo} alt="" />
                    </div>
                    <div>
                      <p className="text-lg font-normal font-Work-sans text-gray-1 py-10">
                        But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying
                        consequences
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
                  <div className="second w-[15%]">
                    <div>
                      <h1 className="text-2xl font-semibold font-inter text-gray-1">
                        Our Services
                      </h1>
                    </div>
                    <div className="flex flex-col gap-5 pt-5">
                      <h3 className="text-lg font-normal font-Work-sans">
                        Home
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        Bids
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        Investments
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        About us
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        Contact us
                      </h3>
                    </div>
                  </div>
                  <div className="third w-[35%]">
                    <div>
                      <h1 className="text-2xl font-semibold font-inter text-gray-1">
                        Contact
                      </h1>
                    </div>
                    <div className="flex flex-col gap-5 pt-5">
                      <h3 className="text-lg font-normal font-Work-sans">
                        +012-334-5864
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
                        info.alva@example.com
                      </h3>
                      <h3 className="text-lg font-normal font-Work-sans">
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

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
import ReactGA from "react-ga4"
import { useLoginContext } from "../../Context/LoginContext";
import { LandingPageLayout } from "../../components/LandingPagesLayout";
import { OutlineButton } from "../../components/OutlineButton";
import { Button } from "../../components/Button";


function LandingPage() {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Landing"
  })
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false)
  const { isLoggedIn } = useLoginContext()


  const handleClick = (item) => {
    setOpenDropdown(false)
    setTabActive(item);
  };

  return (
    <>
      <LandingPageLayout >
        <>
          <div className="firstcarpart relative flex flex-col lg:flex-row items-center justify-between mx-auto p-4 lg:p-0">
            <div className="relative textpart w-full xl:w-[40%] mx-auto xl:ml-40 lg:w-[50%] lg:ml-24 text-center lg:text-left">
              <h1 className="text-[32px] lg:text-[54px] font-bold font-inter text-gray-1 mx-auto pt-5 md:pt-0">
                Your <span className="text-[32px] lg:text-[54px] font-bold font-inter text-gray-1 relative">Winning <img src={blueLine} alt="" className=" absolute top-10 lg:top-16 right-0" /></span> Streak Starts Here

              </h1>
              <p className="text-base lg:text-lg font-normal font-inter text-gray-2 py-4 lg:py-7 w-[70%] mx-auto lg:mx-0 lg:w-[90%]">
                Betting at QuickBider is simple and accessible. With just $2 per bid, you have multiple chances to participate and win.
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6">
                <NavLink
                  to={isLoggedIn ? "/dashboard/bids" : "/login"}
                  className="bg-custom-blue w-1/2 lg:w-[160px] py-3 lg:py-[14px] px-6 lg:px-[24px] rounded-xl text-base font-medium font-poppins text-white text-center">
                  Bid now
                </NavLink>
                <NavLink
                  to={isLoggedIn ? "/investments/beproject" : "/login"}
                  className="border border-custom-blue hover:bg-custom-blue hover:text-white w-1/2 lg:w-[160px] py-3 lg:py-[14px] px-6 lg:px-[24px] rounded-xl text-base font-medium font-poppins text-custom-blue mt-2 lg:mt-0 text-center">
                  Invest
                </NavLink>
              </div>
            </div>
            {/* <div className="relative carimage w-full lg:w-[50%] h-[60vh] lg:h-[90vh] lg:flex items-center justify-start bg-[#f0f4fe] -z-10 mt-6 lg:mt-0 hidden ">
                <img
                  src={circle}
                  alt=""
                  className="absolute top-8 lg:top-32 right-1/4 lg:right-40 w-1/3 lg:w-auto lg:inline-block hidden"
                />
                <div>
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
                </div>
                <img
                  src={circle}
                  alt=""
                  className="absolute bottom-2 left-1/4 lg:left-3 w-1/3 lg:w-auto lg:inline-block hidden"
                />
              </div> */}

            <div className="relative w-full lg:w-[50%] h-[60vh] lg:h-[90vh] lg:flex items-center justify-start bg-[#f0f4fe] mt-6 lg:mt-0 hidden ">
              <img
                src={circle}
                alt="Circle"
                className="hidden 2xl:block absolute top-8 lg:top-32 right-1/4 lg:right-40 w-1/3 lg:w-auto"
              />
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={blueBase}
                  alt="Blue Base"
                  className="absolute top-[30%] lg:top-[40%] xl:top-[70%] 2xl:top-[55%] xl:right-[15%] w-full lg:w-auto object-cover"
                />
                <img
                  src={carImage}
                  alt="Car"
                  className="absolute top-24 2xl:top-28 2xl:right-28 xl:top-16 xl:right-16 lg:right-0 w-[500px] xl:w-[699px]"
                />
              </div>
              <img
                src={circle}
                alt="Circle"
                className="absolute bottom-2 left-1/4 lg:left-3 w-1/3 lg:w-auto"
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
              <NavLink
                to={isLoggedIn ? "/dashboard/bids" : "/login"}
              >
                <OutlineButton
                  className={" !w-[160px] !px-[24px] !py-[14px]"}
                  title={"View all"} />
              </NavLink>
            </div>
          </div>

          <div className="blueRectangle w-[90%] lg:w-[80%] mx-auto py-10 lg:py-16">
            <div className="bg-custom-blue rounded-xl px-8 lg:px-[64px] py-8 lg:py-[32px]">
              <div className="flex flex-wrap  items-center justify-center lg:justify-between gap-10 lg:gap-0">
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
              <NavLink
                to={isLoggedIn ? "/dashboard/results" : "/login"}>
                <OutlineButton title={"View all"}
                  className={"!w-[160px] !px-[16px] !lg:px-[24px] !py-[12px] !lg:py-[14px] !text-xs !lg:text-base !font-medium"}
                />
              </NavLink>
            </div>
          </div>

          <div className="smartInvestment bg-[#E0E0E033] py-10">
            <div className="flex flex-col lg:flex-row gap-10 items-center w-[90%] lg:w-[80%] mx-auto">
              <div className="relative mb-6 lg:mb-0 lg:mr-6">
                <img src={moneyImage} alt="" className="w-full h-auto" />
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
              <div className="w-full lg:w-[50%] mx-auto text-center lg:text-left">
                <h1 className=" lg:text-[54px] font-bold font-inter text-gray-1">
                  Smart <span className="lg:text-[54px] font-bold font-inter text-gray-1 relative">Investments <img src={blueline2} className=" absolute left-5 top-5 lg:top-14" alt="" /></span>  for Smart Returns

                </h1>
                <p className="text-base lg:text-lg font-normal font-inter text-gray-2 py-4 lg:py-6 w-full lg:w-[90%] mx-auto lg:mx-0">
                  Betting at QuickBider is simple and accessible. With just $2 per bid, you have multiple chances to participate and win.
                </p>
                <NavLink
                  to={isLoggedIn ? "/investments/beproject" : "/login"}>
                  <Button title={"Invest now"}
                    className={"!px-6 !py-3 !lg:px-[24px] !lg:py-[14px] !w-[140px] !lg:w-[160px]"} />
                </NavLink>
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
                <NavLink
                  to={isLoggedIn ? "/investments" : "/login"}>
                  <OutlineButton
                    title={"View all"}
                    className={"!w-[160px] !px-[24px] !py-[14px]"}
                  />
                </NavLink>
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
                          <div className="flex flex-wrap items-center gap-5">
                            <div>
                              <div className="w-[64px] h-[64px] rounded-full bg-[#cecece]"></div>
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
            <div className="text-center py-10 flex items-center justify-center">

              <OutlineButton className=" !w-[160px] !px-[24px] !py-[14px] "
                title={"View all"}>
              </OutlineButton>
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
                  className="relative w-full lg:w-[468px] h-[48px] lg:h-[61px] rounded-full flex items-center px-5 lg:px-16 text-base font-normal bg-white bg-opacity-30 text-[#ffffff4b] border border-white"
                >
                  <div className="flex flex-row w-full gap-2">
                    <img src={mail} className=" " alt="" />
                    <input type="text" className="bg-transparent outline-none w-full text-[#FFFFFF] placeholder:text-[#FFFFFF] placeholder:opacity-50"
                      placeholder="Enter your e-mail address" />
                  </div>
                </label>
                <button className="w-[174px] h-[48px] lg:h-[61px] rounded-full text-base lg:text-lg font-semibold font-inter text-custom-blue bg-white hover:shadow hover:shadow-white ">
                  Subscribe
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </>
      </LandingPageLayout >
    </>
  );
}

export default LandingPage;

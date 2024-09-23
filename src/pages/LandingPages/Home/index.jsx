import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import './swiper-custom.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import carImage from "assets/images/white grey car sale promotion banner 1.png";
import blueLine from "assets/images/blueline.png";
import circle from "assets/images/circle.png";
import { TrendingAuction } from "./TrendingAuction";
import manImage from "assets/images/man.png";
import trophyImage from "assets/images/trophyy.png";
import progressImage from "assets/images/progress.png";
import savemoneyImage from "assets/images/save-money.png";
import { RecentWinnersSection } from "./RecentWinnersSection";
import moneyImage from "assets/images/money.png";
import blueline2 from "assets/images/blueline2.png";
import circle2 from "assets/images/circle2.png";
import Project from "./Project";
import mail from "assets/images/mail.png";
import blueBase from "assets/images/bluseBase.png"
import { NavLink, useNavigate } from "react-router-dom";
import { LandingPageLayout } from "../../../components/LandingPagesLayout";
import { useLoginContext } from "../../../context/LoginContext";
import { OutlineButton } from "../../../components/OutlineButton";
import { useGetProjectStat } from "../../../api/AppUtils";
import { useGetUserReview } from "../../../api/AuctionManagement";
import { Button } from "../../../components/Button";
import Svgs from "assets/svgs";


function LandingPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useLoginContext()
  const { data: projectStat } = useGetProjectStat()
  const { data: userReview } = useGetUserReview()

  return (
    <>
      <LandingPageLayout>
        <>
          <div className="firstcarpart relative flex flex-col lg:flex-row items-center justify-between mx-auto p-4 lg:p-0">
            <div className="relative textpart w-full xl:w-[40%] mx-auto xl:ml-40 lg:w-[50%] lg:ml-16 text-center lg:text-left ">
              <h1 className="text-[32px] lg:text-[54px] font-bold font-inter text-gray-1 mx-auto pt-5 md:pt-0">
                Your <span className="text-[32px] lg:text-[54px] font-bold font-inter text-gray-1 relative">Winning <img src={blueLine} alt="" className=" absolute top-10 lg:top-16 right-0" /></span> Streak Starts Here

              </h1>
              <p className="text-base lg:text-lg font-normal font-inter text-gray-2 py-4 lg:py-7 w-[80%] mx-auto lg:mx-0 lg:w-[90%]">
                Betting at QuickBider is simple and accessible. With just $2 per bid, you have multiple chances to participate and win.
              </p>
              <div className="flex flex-col md:flex-row max-lg:justify-center  items-center gap-3 lg:gap-6">
                <>
                  <Button
                    customWidth={"w-[150px]"}
                    title={'Bid now'}
                    customPadding={'py-3 lg:py-[14px] px-6 lg:px-[24px]'}
                    onClick={() => {
                      isLoggedIn ?
                        navigate("/my-bids")
                        : navigate("/login")
                    }}
                  />
                </>
                <>
                  <Button
                    customWidth={"w-[150px]"}
                    title={'Invest'}
                    customPadding={' py-3 lg:py-[14px] px-6 lg:px-[24px]'}
                    customTheme={'btn-outline'}
                    onClick={() => {
                      isLoggedIn ?
                        navigate("/investments/project-details")
                        :
                        navigate("/login")
                    }}
                  />
                </>
              </div>
            </div>

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
                  className="absolute top-24 2xl:top-28 2xl:right-28 xl:top-16 xl:right-16 lg:right-0 w-[500px] xl:w-[699px] 2xl:w-[40vw]"
                />
              </div>
              <img
                src={circle}
                alt="Circle"
                className="absolute bottom-2 left-1/4 lg:left-3 w-1/3 lg:w-auto"
              />
            </div>



          </div>

          <section className="trending actions lg:w-[80%] mx-auto relative">
            <div className="text-center mt-8 lg:mt-24 text-gray-1">
              <h1 className="lg:text-[54px] text-[32px]  font-bold font-inter text-gray-1">
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
                to={
                  isLoggedIn ?
                    "/auction"
                    : "/login"
                }
              >
                <OutlineButton
                  className={" !w-[160px] !px-[24px] !py-[14px]"}
                  title={"View all"} />
              </NavLink>
            </div>
          </section>

          <section className=" w-[90%] xl:w-[80%] mx-auto py-10 lg:py-16">
            <div className="bg-custom-blue rounded-xl px-8 lg:px-[64px] py-8 lg:py-[32px]">
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-10 lg:gap-0">

                <div className="flex flex-col items-center ">
                  <Svgs.BiddersIcon />
                  <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                    {projectStat?.total_bidders}
                  </h1>
                  <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                    Bidders
                  </h1>
                </div>
                <div className="flex flex-col items-center">
                  <Svgs.WinnersIcon />
                  <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                    {projectStat?.total_winners}
                  </h1>
                  <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                    Winners
                  </h1>
                </div>
                <div className="flex flex-col items-center">
                  <Svgs.InvestmentIcon />
                  <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                    {projectStat?.total_investment}
                  </h1>
                  <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                    Investments
                  </h1>
                </div>
                <div className="flex flex-col items-center">
                  <Svgs.ReturnIcon />
                  <h1 className="text-2xl lg:text-[36px] font-bold font-inter text-white mt-2 lg:mt-4">
                    {projectStat?.avg_return}%
                  </h1>
                  <h1 className="text-base lg:text-lg font-medium font-inter text-white mt-1 lg:mt-2">
                    Return
                  </h1>
                </div>
              </div>
            </div>
          </section>


          <section className="recentWinners w-full  xl:w-[80%] mx-auto p-4 lg:p-0">
            <div className="text-center">
              <h1 className="text-[32px] lg:text-[54px] font-bold font-inter text-gray-1">
                Recent winners
              </h1>
            </div>
            <div className="w-full lg:w-[90%] mx-auto py-6 lg:py-10">
              <RecentWinnersSection />
            </div>


          </section>

          <section className="smartInvestment bg-[#E0E0E033] py-10">
            <div className="flex flex-col lg:flex-row gap-10 items-center w-[90%] xl:w-[80%] mx-auto">
              <div className="relative mb-6 lg:mb-0 lg:mr-6">
                <img src={'smart-investment.png'} alt="" className="w-full max-w-[450px] h-auto md:max-lg:max-h-[450px]" />
              </div>
              <div className="w-full lg:w-[50%] mx-auto text-center lg:text-left">
                <h1 className=" lg:text-[54px] font-bold font-inter text-gray-1">
                  Smart <span className="lg:text-[54px] font-bold font-inter text-gray-1 relative">Investments <img src={blueline2} className=" absolute left-5 top-5 lg:top-14" alt="" /></span>  for Smart Returns

                </h1>
                <p className="text-base lg:text-lg font-normal font-inter text-gray-2 py-4 lg:py-6 w-full lg:w-[85%] mx-auto lg:mx-0">
                  Betting at QuickBider is simple and accessible. With just $2 per bid, you have multiple chances to participate and win.
                </p>
                <NavLink
                  to={
                    isLoggedIn ?
                      "/investments"
                      : "/login"
                  }>
                  <Button title={"Invest now"}
                    customPadding={"px-6 !py-3 !lg:px-[24px] !lg:py-[14px]"}
                    customWidth={' !w-[140px] !lg:w-[160px]'}
                  />
                </NavLink>
              </div>
            </div>
          </section>

          <section className="upcominginvestments w-[90%]  xl:w-[80%]  mx-auto  py-20">
            <div className="text-center">
              <h1 className="text-[32px] lg:text-[54px] font-bold font-inter text-gray-1">
                Upcoming Investments
              </h1>
            </div>
            <div className="">
              <Project />

            </div>
          </section>

          <section className="testimonials bg-gradient-to-r from-[#D1EAFF] to-[#F2F8FD] py-16 ">
            <div className="text-center mb-8">
              <h1 className="text-[32px] lg:text-[54px] font-bold font-inter text-gray-1 px-4">
                What people say about us?
              </h1>
            </div>

            {userReview?.results?.length < 0 ?
              <>
                <Swiper
                  cssMode={true}
                  loop={true}
                  spaceBetween={50}
                  pagination={{ clickable: true }}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className=" flex flex-row "
                >

                  <SwiperSlide>
                    <div className="cards w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                      {userReview?.results?.map((data, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-7">
                          <div className="flex items-center gap-5">
                            <div>
                              <div className="w-[64px] h-[64px] rounded-full bg-[#cecece]"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div>
                                <h1 className="text-xl font-semibold font-inter text-gray-1">
                                  {data?.user?.name}dfalijk
                                </h1>
                              </div>
                              <div className="flex items-center">
                                <div className="flex flex-row gap-2">
                                  {Array(5).fill().map((_, index) => (
                                    <Svgs.StarIcon color={index < data?.rating ? "#F5A200" : "#C2C2C2"} key={index} />
                                  ))}
                                </div>
                                <span className="text-lg font-medium font-Work-sans text-gray-1 px-2">
                                  {data?.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-base font-normal font-Work-sans text-gray-2 pt-5">
                              {data?.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>

                </Swiper>
                <div className="text-center pt-8 flex items-center justify-center">
                  <Button
                    customTheme={'btn-outline'}
                    customWidth={'w-[160px] '}
                    customPadding={'px-[24px] py-[14px]'}
                    className="!bg-transparent"
                    title={"View all"} />
                </div>
              </>

              :
              <div className="flex items-center justify-center w-full min-h-[150px] md:text-2xl font-poppins font-medium text-xl ">
                No reviews available yet
              </div>
            }



          </section>

          <section className="newsLatter h-auto lg:h-[80vh] flex items-center justify-center py-10">
            <div className="bg-custom-blue rounded-3xl w-[90%] lg:w-[85%] mx-auto p-10">
              <div className="w-[90%] lg:w-[70%] text-center mx-auto">
                <h1 className=" text-white md:text-[24px] lg:text-[40px] font-bold font-inter text-center">
                  Subscribe to Our Newsletter For Weekly Article Update.
                </h1>
              </div>
              <div className="text-center py-6 lg:py-10 flex flex-col lg:flex-row items-center justify-center gap-5">
                <label
                  htmlFor=""
                  className=" bg-white bg-opacity-30 relative w-full lg:w-[468px] h-[48px] lg:h-[61px] rounded-full flex items-center px-5 lg:px-16 text-base font-normal text-[#ffffff4b] border border-white justify-center  "
                >
                  <div className="flex flex-row w-full gap-2 items-center  ">
                    <Svgs.EmailIcon />
                    <input type="text" className="bg-transparent outline-none w-full text-[#FFFFFF] placeholder:text-[#FFFFFF] placeholder:opacity-50 text-center"
                      placeholder="Enter your e-mail address" />

                  </div>
                </label>
                <button className="w-[174px] h-[48px] lg:h-[61px] rounded-full text-base lg:text-lg font-semibold font-inter text-custom-blue bg-white">
                  Subscribe
                </button>
              </div>
              <div>

              </div>
            </div>
          </section>

        </>
      </LandingPageLayout >
    </>
  );
}

export default LandingPage;

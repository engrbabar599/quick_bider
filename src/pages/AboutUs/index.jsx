import React from "react";
import carImage from "../../assets/images/white grey car sale promotion banner 1.png";
import blueLine from "../../assets/images/blueline.png";
import circle from "../../assets/images/circle.png";
import manImage from "../../assets/images/man.png";
import trophyImage from "../../assets/images/trophyy.png";
import progressImage from "../../assets/images/progress.png";
import savemoneyImage from "../../assets/images/save-money.png";
import circle2 from "../../assets/images/circle2.png";
import mail from "../../assets/images/mail.png";
import questionmanImage from "../../assets/images/questionman.png";
import bluelineofWeAre from "../../assets/images/lineOfWhoWeAre.png";
import blueBase from "../../assets/images/bluseBase.png"
import { NavLink, useNavigate } from "react-router-dom";
import mission from "../../assets/images/mission.png"
import ReactGA from "react-ga4"
import { LandingPageLayout } from "../../components/LandingPagesLayout";
import { useLoginContext } from "../../Context/LoginContext";
import { Button } from "../../components/Button";


export const AboutUsPage = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useLoginContext()
    return (
        <LandingPageLayout>
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
                            Welcome to QUICK BIDER, where we revolutionized the traditional auction scene since our inception in 2020. Born from a desire to integrate excitement with opportunity, our platform has redefined the auction process, making it more dynamic and accessible to everyone. From our humble beginnings with a small but dedicated team, we quickly escalated into a reputable platform, hosting thousands of auctions and attracting participants from across the globe. As we continue to grow, our commitment to innovation remains strong, evidenced by the continuous enhancements to our platform and services.
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
                    <div className="relative carimage w-full lg:w-[50%] h-[60vh] lg:h-[90vh] lg:flex items-center justify-start bg-[#f0f4fe] -z-10 mt-6 lg:mt-0 hidden ">
                        <img
                            src={circle}
                            alt=""
                            className="absolute top-8 lg:top-32 right-1/4 lg:right-40 w-1/3 lg:w-auto lg:inline-block hidden"
                        />
                        <img
                            src={blueBase}
                            className="absolute top-[260px] right-40 lg:top-[430px] object-cover w-full lg:w-auto hidden xl:block"
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
                            <NavLink
                                to={isLoggedIn ? "/investments/beproject" : "/login"}
                                className="px-6 py-3 lg:px-[24px] lg:py-[14px] w-[140px] lg:w-[160px] bg-custom-blue text-base font-medium font-poppins text-center rounded-xl text-white ">
                                Invest now
                            </NavLink>
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
                            <NavLink
                                to={isLoggedIn ? "/investments/beproject" : "/login"}
                                className="px-6 py-3 lg:px-[24px] lg:py-[14px] w-[140px] lg:w-[160px] bg-custom-blue text-base font-medium font-poppins rounded-xl text-white">
                                Invest now
                            </NavLink>
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
                                className="relative w-full lg:w-[468px] h-[48px] lg:h-[61px] rounded-full flex items-center px-5 lg:px-16 text-base font-normal text-[#ffffff4b] border border-white bg-white bg-opacity-30"
                            >
                                <div className="flex flex-row w-full gap-2">
                                    <img src={mail} className=" " alt="" />
                                    <input type="text" className="bg-transparent outline-none w-full text-[#FFFFFF] placeholder:text-[#FFFFFF] placeholder:opacity-50"
                                        placeholder="Enter your e-mail address" />

                                </div>
                            </label>
                            <button className="w-[174px] h-[48px] lg:h-[61px] rounded-full text-base lg:text-lg font-semibold font-inter text-custom-blue bg-white">
                                Subscribe
                            </button>
                        </div>
                        <div></div>
                    </div>
                </div>

            </>
        </LandingPageLayout>
    )
}


import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Form, Link, NavLink, useNavigate } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Button } from "components/Button";
import { useGetInvestmentProject, useGetUserReview } from "api/AuctionManagement";
import { useGetProjectStat } from "api/AppUtils";
import { DashboardLayout } from "components/Layout";
import { BalanceSection } from "components/Elements/BalanceSection";
import ReviewSection from "components/Elements/ReviewSection";
import { useGetAllInvestors, useGetUserProfile, useUpdateUserProfile } from "api/UserManagement";
import ActivateInvestmentPopup from "./Elements/Popups/ActivateInvestmentPopup";
import OtpVerificationPopup from "./Elements/Popups/OtpVerificationPopup";
import SuccessPopup from "components/Popups/SuccessPopup";
import InvestmentProjectCard from "./Elements/InvestmentProjectCard";
import { formatDate } from "utils/utility-functions";
import { InvestmentSkeleton } from "components/Skeleton/InvestmentSkeleton";
import UpcomingInvestmentSection from "./Elements/UpcomingInvestmentSection";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import InvestmentCard from "components/Elements/InvestmentCard";
import Spinner from "components/Spinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Investment = () => {
  const [showActivateInvestmentPopup, setShowActivateInvestmentPopup] = useState(false)
  const [showOtpPopup, setShowOtpPopup] = useState(false)
  const [showActivatedSuccessfullyPopup, setShowActivatedSuccessfullyPopup] = useState(false)
  const [isInvestmentActive, setIsInvestmentActive] = useState(false)
  const activateInvestmentRef = useRef(null)

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: projectStat, isLoading: isLoadingProjectStat } = useGetProjectStat()
  const { data: userReviews, isLoading: isLoadingUserReviews } = useGetUserReview('investment_project')
  const { data: userProfile, isLoading: isLoadingUserProfile } = useGetUserProfile()
  const { data: allInvestors, isLoading: isLoadingAllInvestors } = useGetAllInvestors()
  const { data: projects, isLoading: isLoadingProjects } = useGetInvestmentProject()
  const { mutate: handleActivateInvestment, isPending } = useUpdateUserProfile({
    onError: () => {
      toast.error("Something went wrong")
    },
    onSuccess: () => {
      setShowOtpPopup(false)
      setShowActivatedSuccessfullyPopup(true)
      queryClient.invalidateQueries({ queryKey: ["useGetUserProfile"] })
    }
  })



  return (
    <DashboardLayout activeSidebar={"Investments"}>
      <section >
        <h1 className=" hidden md:flex text-2xl font-medium text-gray-1">
          Investments
        </h1>
        <div className="flex md:justify-start justify-center gap-4 py-4">
          <NavLink
            to={"/investments"}
            className={({ isActive }) => (
              `md:px-5 md:py-3 px-[10px] py-[7px] md:font-semibold font-medium text-sm rounded-xl font-poppins ${isActive ? 'bg-custom-blue text-white' :
                'text-gray-2  border border-gray-2'}`)}>
            Investments
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) => (
              `md:px-5 md:py-3 px-[10px] py-[7px] md:font-semibold font-medium text-sm rounded-xl font-poppins ${isActive ? 'bg-custom-blue text-white' :
                'text-gray-2  border border-gray-2'}`)}>
            My portfolio
          </NavLink>
        </div>
      </section>


      {isLoadingAllInvestors || isLoadingProjectStat || isLoadingProjects || isLoadingUserReviews || isLoadingUserProfile
        ?
        <div className="flex items-center justify-center h-[70vh]">
          <Spinner color={"#6F9CFF"} height={70} width={70} />

        </div>
        :
        <section className="space-y-4 flex  justify-start flex-col ">
          <div className="grid xl:grid-cols-12   md:space-x-6 items-center justify-center  space-y-4 w-full pr-0">
            {
              userProfile?.active_investment ?
                <section
                  className="bg-white p-6 rounded-lg shadow-sm border xl:col-span-8">
                  <h2 className="md:text-xl font-medium mb-4 text-wrap font-poppins xs:text-center md:text-start">
                    Get Started with Confidence
                  </h2>
                  <p className="text-gray-600 mb-4 text-xs md:text-sm font-normal text-wrap text-justify md:text-start">
                    Explore upcoming projects, track your portfolio performance, and monitor your returns—all from one place. Need guidance? We’ve got you covered. Our comprehensive Investment Guides offer expert tips and insights to help you navigate the world of investing, no matter your experience level.
                  </p>
                  <div className="bg-custom-blue bg-opacity-10 px-4 py-6 border rounded-xl mb-4 flex  lg:flex-row flex-col justify-center items-center gap-4 w-full ">
                    <div className="items-center flex flex-col justify-center">
                      <span className="text-center  md:text-xl font-medium text-gray-2 ">
                        Your investment service is activated
                      </span>
                      <span className="text-center w-full md:text-xl font-medium text-gray-2 ">
                        start exploring opportunities and grow your wealth today!
                      </span>
                    </div>

                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className=" text-sm font-normal text-gray-2">Total investment</p>
                      <h3 className="text-2xl font-semibold">${projectStat?.total_investment} </h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className=" text-sm font-normal text-gray-2">ROI</p>
                      <h3 className="text-2xl font-semibold text-green-500">{projectStat?.avg_return}%</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className=" text-sm font-normal text-gray-2">Total projects</p>
                      <h3 className="text-2xl font-semibold">224</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className=" text-sm font-normal text-gray-2">Total investors</p>
                      <h3 className="text-2xl font-semibold">11K</h3>
                    </div>
                  </div>
                </section>
                :
                <section
                  className="bg-white p-6 rounded-lg shadow-sm border xl:col-span-8">
                  <h2 className="md:text-xl font-medium mb-4 text-wrap font-poppins xs:text-center md:text-start">
                    Empower Your Financial Future with Our Investment Portal
                  </h2>
                  <p className="text-gray-600 mb-4 xs:text-xs md:text-sm font-normal text-wrap xs:text-center md:text-start">
                    Welcome to a new era of investment management. Our advanced Investment Portal is designed to empower you with the tools and insights needed to maximize your financial growth. Experience unparalleled control over your portfolio and make strategic decisions that drive success.
                  </p>
                  <div className="bg-custom-blue bg-opacity-10 px-4 py-6 border rounded-xl mb-4 flex  lg:flex-row flex-col justify-between items-center gap-4">
                    <div className="items-center flex">
                      <span className="xs:text-center md:text-start md:text-xl font-medium text-gray-2 ">
                        {isInvestmentActive ? "Invest now to gain returns " :
                          "Unlock the Potential of Your Investments, activate investment services."
                        }
                      </span>
                    </div>

                    <div >
                      <Button
                        ref={activateInvestmentRef}
                        disabled={isInvestmentActive}
                        onClick={() => setShowActivateInvestmentPopup(true)}
                        className={"!min-w-max px-4 py-3 text-sm font-poppins font-normal rounded-xl focus:outline-custom-blue  "}
                        title={
                          isInvestmentActive ? "Activated" : "Activate now"
                        }
                      />
                    </div>
                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className=" text-sm font-normal text-gray-2">Total investment</p>
                      <h3 className="text-2xl font-semibold">${projectStat?.total_investment} </h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className=" text-sm font-normal text-gray-2">ROI</p>
                      <h3 className="text-2xl font-semibold text-green-500">{projectStat?.avg_return}%</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className=" text-sm font-normal text-gray-2">Total projects</p>
                      <h3 className="text-2xl font-semibold">224</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className=" text-sm font-normal text-gray-2">Total investors</p>
                      <h3 className="text-2xl font-semibold">11K</h3>
                    </div>
                  </div>
                </section>
            }


            <div className=" xl:col-span-4 max-xl:w-[90vw]">
              <BalanceSection />
            </div>
          </div>

          <>
            <UpcomingInvestmentSection activeInvestmentRef={activateInvestmentRef} />
          </>

          <div className="grid xl:grid-cols-2 gap-5 pt-5">

            <section className="">
              <div className=" flex justify-between items-center gap-4">
                <div className=" min-w-max">
                  <h1 className="text-2xl font-semibold font-poppins text-gray-1">All Investors</h1>
                </div>
                <div className=" w-full border-b-2"></div>
                <div className="text-custom-blue min-w-max">
                  <button onClick={() => { navigate("/investments/all-investors") }} className=" font-semibold hover:scale-105 hover:text-blue-500 font-poppins text-base">View all</button>
                </div>
              </div>

              <div className="pt-5">
                <div className=" p-[14px] md:p-[28px] border rounded-[16px] ">

                  <table className="table-fixed w-full space-y-20 ">
                    <thead className=" w-full   text-[#1E1E1E] ">
                      <tr className=" border-b border-gray-5 text-base">
                        <th className=" pb-2 text-left font-poppins font-medium max-md:text-sm">
                          Name
                        </th>
                        <th className=" pb-2 text-left  font-poppins font-medium  max-md:text-sm">
                          Time
                        </th>
                        <th className="pb-2 text-right md:w-1/5 w-[30%] font-poppins font-medium  max-md:text-sm ">
                          Investment
                        </th>
                      </tr>
                    </thead>


                    <tr className="h-[16px]"></tr>
                    <tbody>
                      {isLoadingAllInvestors ?
                        Array(8).fill(null)?.map((_, index) => (
                          <tr key={index} className="border-b border-gray-5">
                            <td className="py-2">
                              <Skeleton width={100} />
                            </td>
                            <td className="py-2">
                              <Skeleton width={100} />
                            </td>
                            <td className="py-2">
                              <Skeleton width={75} />
                            </td>
                          </tr>
                        ))
                        :
                        allInvestors?.slice(0, 8)?.map((data, index) => (
                          <tr key={index} className="border-b border-gray-5 ">
                            <td className="py-2 font-open-sans text-[#686868]  max-md:text-sm text-base underline underline-offset-1 decoration-[#686868] decoration-1 ">
                              {data?.username}
                            </td>
                            <td className="py-2 font-poppins font-light  max-md:text-sm text-[#1E1E1E] text-base uppercase">
                              {formatDate(data?.completed_date_time, {
                                hour: "2-digit",
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: '2-digit'
                              })}
                            </td>
                            <td className="py-2 font-poppins font-light  max-md:text-sm text-[#1E1E1E] text-base uppercase  md:w-1/5 w-[30%]">
                              $**
                            </td>
                          </tr>
                        ))}

                    </tbody>
                  </table>
                </div>



              </div>
            </section>

            <section>
              <ReviewSection
                hideSwitch={true}
                reviewType={"investment_project"}

              />

            </section>
          </div>
        </section>
      }


      <ActivateInvestmentPopup
        showModal={showActivateInvestmentPopup}
        closeModal={() => setShowActivateInvestmentPopup(false)}
        onSubmit={() => {
          setShowActivateInvestmentPopup(false)
          setShowOtpPopup(true)
        }}
      />
      <OtpVerificationPopup
        showModal={showOtpPopup}
        closeModal={() => setShowOtpPopup(false)}
        onSubmit={() => {
          const formData = new FormData()
          formData.append("active_investment", true)
          formData.append("id", userProfile?.id)
          handleActivateInvestment(formData)
        }}
      />
      <SuccessPopup
        open={showActivatedSuccessfullyPopup}
        closeModal={() => setShowActivatedSuccessfullyPopup(false)}
        successText={"Investments activated successfully!"}
        secondaryText={"You can now invest on our portal for easy returns."}
        onButtonClick={() => { navigate("/portfolio") }}
        buttonText={"Invest now"}
      />
    </DashboardLayout>
  );
};

export default Investment;

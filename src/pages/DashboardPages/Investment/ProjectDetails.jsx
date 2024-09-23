import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DashboardLayout } from "components/Layout";
import { useAddUserInvestment, useGetSingleInvestmentProject } from "api/AuctionManagement";
import { toast } from "react-toastify";
import BreadCrumb from "components/BreadCrumb";
import { formatDate } from "utils/utility-functions";
import { useGetUserProfile, useGetWallet } from "api/UserManagement";
import { Input } from "components/Input";
import { Button } from "components/Button";
import ReviewSection from "components/Elements/ReviewSection";
import Spinner from "components/Spinner";
import InvestmentSuccessPopup from "./Elements/Popups/InvestmentSuccessPopup";
import { useQueryClient } from "@tanstack/react-query";

function ProjectDetails() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [investmentError, setInvestmentError] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const projectId = searchParams.get("id")

  const { data: walletDetails } = useGetWallet()
  const { data: projectDetails, isLoading } = useGetSingleInvestmentProject(projectId)
  const { data: userData } = useGetUserProfile()
  const [errors, setErrors] = useState("")
  const [investmentData, setInvestmentData] = useState({
    investment_project: projectId,
    currency: projectDetails?.currency,
    invested_amount: 0
  })

  const [investedData, setInvestedData] = useState({
    id: "",
    invested_amount: ""
  })

  useEffect(() => {
    setInvestmentData({ ...investmentData, currency: projectDetails?.currency })
  }, [projectDetails])


  const { mutate: handleInvestment, isPending: isInvesting } = useAddUserInvestment({
    onError: () => {
      toast.error("Error")
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["useGetSingleInvestmentProject"] })
      queryClient.invalidateQueries({ queryKey: ["useGetWallet"] })
      queryClient.invalidateQueries({ queryKey: ["useGetUserInvestment"] })
      setInvestedData({ id: data?.id, invested_amount: data?.invested_amount })
      setInvestmentData({ investment_project: "", invested_amount: 0 })
      setShowSuccessPopup(true)
    }
  })

  const invest = () => {
    console.log(investedData)
    if (investmentData?.invested_amount.length < 0 || investmentData?.invested_amount < Number(projectDetails?.min_amount)) {
      setInvestmentError(() => {
        return investmentData?.invested_amount?.length < 0 ? "Required" : investmentData?.invested_amount < Number(projectDetails?.min_amount) ? `$${projectDetails?.min_amount} is the minimum investment amount` : ""
      })
      return
    }
    handleInvestment(investmentData)
  }

  return (
    <DashboardLayout activeSidebar={"Investments"}>

      {isLoading ?
        <div className="flex items-center justify-center flex-1 min-h-[80vh]">
          <Spinner color={"#6F9CFF"} height={75} width={75} />
        </div>
        :

        <div className="overallpage ">

          <BreadCrumb
            first={"Investments"}
            second={projectDetails?.name}
          />

          <div className=" grid grid-cols-12 gap-5 pt-5">

            <div className="leftpart  col-span-12 lg:col-span-7">
              <div className="border p-[15px] lg:p-5 rounded-xl shadow-sm">
                <div className="flex flex-col  md:flex-row items-center gap-4">
                  <div className="icon" >
                    {projectDetails?.display_pic ?
                      <img src={projectDetails?.display_pic} alt="" className="w-[40px] h-[40px] rounded-full" />
                      :
                      <div className="h-[40px] w-[40px] bg-gray-4 flex items-center justify-center text-white rounded-full capitalize">
                        {projectDetails?.name[0]}
                      </div>
                    }
                  </div>
                  <div className="flex flex-col xs:gap-2 md:block">
                    <h1 className="md:text-2xl font-semibold font-lato text-gray-1 capitalize">
                      {projectDetails?.name}
                    </h1>
                    <p className="xs:text-xs md:text-base font-medium font-lato text-gray-4">
                      {projectDetails?.created_by}
                    </p>
                  </div>
                </div>
                <div className="py-6 text-center md:text-start">
                  <p className="xs:text-xs md:text-base font-normal font-poppins text-gray-2">
                    {projectDetails?.detail}
                  </p>
                </div>

                <div className="border rounded-xl p-2 md:p-5 my-6 shadow-sm md:w-[90%]">
                  <div className="flex justify-between w-full">
                    <div className="upfirst flex items-center gap-1">
                      <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">
                        Date:
                      </h1>
                      <h1 className="text-xs md:text-base font-semibold font-poppins text-gray-1">
                        {formatDate(projectDetails?.start_date_time)}
                      </h1>
                    </div>
                    <div className="upsecond flex gap-1 items-center">
                      <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">Min investment:</h1>
                      <h1 className="text-xs md:text-base font-semibold font-poppins text-custom-blue">
                        ${projectDetails?.min_amount}
                      </h1>
                    </div>
                  </div>
                  <div className="downside flex justify-between items-center">
                    <div className="dwnfirst flex items-center gap-1">
                      <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">
                        Time:
                      </h1>
                      <h1 className="text-xs md:text-base font-semibold font-poppins uppercase text-gray-1">
                        {formatDate(projectDetails?.start_date_time, {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        })}
                      </h1>
                    </div>
                    <div className="dwnsecond flex items-center gap-1">
                      <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">
                        ROI:
                      </h1>
                      <h1 className="text-xs md:text-base font-semibold font-poppins text-custom-green">{projectDetails?.roi}%
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="pt-5 flex flex-col md:flex-row items-start justify-center gap-4 ">
                  <div className="w-full">
                    <Input
                      type={"number"}
                      parentClass={'w-full'}
                      className="w-full"
                      placeholder={"Enter amount to invest"}
                      value={investmentData?.invested_amount != 0 ? investmentData?.invested_amount : ""}
                      onChange={(e) => {
                        setInvestmentError("")
                        setInvestmentData({ ...investmentData, invested_amount: Number(e.target.value) })
                      }}
                      error={investmentError}
                    />
                  </div>

                  <div>
                    <Button
                      title={isInvesting ?
                        <Spinner width={70} height={20} />
                        :
                        "Invest Now"}
                      onClick={() => {
                        invest()
                        // if (!investmentData?.invested_amount || investmentData?.invested_amount == 0) {
                        //   setInvestmentError("Enter a amount")
                        // }
                        // else {
                        //   handleInvestment(investmentData)
                        // }
                      }}
                      className={"min-w-max"}
                      customPadding={"px-[34px] py-[12px]"}

                    />
                  </div>
                </div>

                <div className="flex justify-center gap-2 py-6">
                  <h1 className="font-normal font-poppins text-gray-1">Wallet:</h1>
                  <h1 className="text-custom-blue font-semibold font-poppins">
                    ${walletDetails?.balance ? walletDetails?.balance : 0}
                  </h1>
                </div>
              </div>
            </div>


            <section className="w-full col-span-12 lg:col-span-5 ">
              <div className=" flex justify-between items-center gap-4">
                <div className=" min-w-max">
                  <h1 className="lg:text-2xl text-base font-semibold font-poppins text-gray-1">All Investers</h1>
                </div>
                <div className=" w-full border-b-2"></div>
                <div className="text-custom-blue min-w-max">
                  <button onClick={() => {
                    navigate("/investments/all-investors")
                  }} className=" font-semibold hover:scale-105 hover:text-blue-500 font-poppins text-base">View all</button>
                </div>
              </div>

              <div className="pt-5">
                <div className="p-[14px] lg:p-[28px] border rounded-[16px] w-full">

                  <table className="table-fixed w-full space-y-20 ">
                    <thead className=" w-full   text-[#1E1E1E] ">
                      <tr className=" border-b border-gray-5 text-base">
                        <th className=" pb-2 text-left font-poppins font-medium">
                          Name
                        </th>
                        <th className=" pb-2 text-left  font-poppins font-medium">
                          Time
                        </th>
                        <th className="pb-2 text-left text-base lg:w-1/5  font-poppins font-medium ">
                          Investment
                        </th>
                      </tr>
                    </thead>


                    <tr className="h-[16px]"></tr>
                    <tbody>

                      {projectDetails?.investors?.slice(0, 8)?.map((data, index) => (
                        <tr key={index} className="border-b border-gray-5 ">
                          <td className="py-2 font-open-sans text-[#686868] lg:text-base text-sm underline underline-offset-1 decoration-[#686868] decoration-1  capitalize">
                            {data?.first_name} {data?.last_name}
                          </td>
                          <td className="py-2 font-poppins font-light text-[#1E1E1E] lg:text-base uppercase text-sm">
                            {/* {formatDate(projectDetails?.completed_date_time, {
                              hour: "2-digit",
                              minute: '2-digit',
                              second: '2-digit',
                              hour12: '2-digit'
                            })} */}
                          </td>
                          <td className="py-2 font-poppins font-light text-[#1E1E1E] lg:text-base uppercase  lg:w-1/5 text-sm">
                            ${data?.invested_amount}
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                  <div className="flex items-center justify-center pt-5">
                    <Button
                      customWidth={"min-w-max"}
                      customPadding={"px-[12px] py-[8px]"}
                      customTheme={"btn-outline"}
                      title={"View all"}
                    />
                  </div>
                </div>



              </div>
            </section>
          </div>


          <section className="downpart grid lg:grid-cols-12 gap-5">
            <div className="leftpart col-span-12 md:col-span-7">
              <div className="py-5">
                <h1 className="text-base md:text-2xl font-semibold font-poppins text-gray-1">Terms & conditions</h1>
              </div>
              <div className="border p-5 rounded-xl">
                <ul className="list-decimal px-[8px] md:px-10 py-1 !text-xs md:!text-base">
                  <li>
                    <p className="py-3  font-normal text-gray-2 font-poppins">
                      Bidders must be 18+ and register with valid ID. Registration implies agreement to these terms.
                    </p>
                  </li>
                  <li>
                    <p className="py-3  font-normal text-gray-2 font-poppins">
                      All bids are final and binding. The highest bid wins. The auctioneer can reject bids, withdraw items, and resolve disputes.
                    </p>
                  </li>
                  <li>
                    <p className="py-3 font-normal text-gray-2 font-poppins">
                      Full payment due within [Number] hours/days post-auction. A [Percentage]% buyer’s premium applies. Non-payment results in bid forfeiture.
                    </p>
                  </li>
                  <li>
                    <p className="py-3  font-normal text-gray-2 font-poppins">
                      Items sold "as is" without warranties. Bidders must inspect items before bidding. Auction house not liable for description errors.
                    </p>
                  </li>
                </ul>
              </div>
            </div>




            <div className="rightpart col-span-12 lg:col-span-5 pt-6">

              <ReviewSection
                hideSwitch={!projectDetails?.investors?.some(investor => investor?.id == userData?.id)}
                reviewType={"investment_project"}
                id={projectId}

              />

            </div>
          </section>
        </div>
      }



      <InvestmentSuccessPopup
        open={showSuccessPopup}
        closeModal={() => setShowSuccessPopup(false)}
        amount={investedData?.invested_amount}
        transactionId={investedData?.id}
      />

    </DashboardLayout >

  );
}


export default ProjectDetails;

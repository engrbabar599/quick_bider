import React, { useEffect } from "react";
import partyImage from "assets/images/party.png";
import vectorImage from "assets/images/Vector.png";
import pdfImage from "assets/images/pdf.png";
import starImage from "assets/images/star.png"
import { useNavigate, useSearchParams } from "react-router-dom";
import { DashboardLayout } from "components/Layout";
import { useGetSingleInvestmentProject } from "api/AuctionManagement";
import BreadCrumb from "components/BreadCrumb";
import { formatDate } from "utils/utility-functions";
import { Button } from "components/Button";
import ReviewSection from "components/Elements/ReviewSection";

function CompletedInvestmentPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const projectId = searchParams.get("id")

  const { data: projectDetails, isLoading: isLoadingProjectDetails } = useGetSingleInvestmentProject(projectId)

  const review = [
    {
      name: "jones",
      role: "investers",
    },
    {
      name: "jones",
      role: "investers",
    },
    {
      name: "jones",
      role: "investers",
    },
    {
      name: "jones",
      role: "investers",
    },
  ];

  const investment = [
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
    {
      name: "Harry",
      Date: "10/12/2024",
      Investmwnt: "$**",
    },
  ];

  const navigate = useNavigate()


  const downloadInvestmentCertificate = async (fileUrl) => {
    const response = await fetch(fileUrl)
    console.log(response)
    const blob = await response.blob()
    console.log(blob)
    const url = window.URL.createObjectURL(blob)
    console.log(url)

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'certificate.jpg'); // Set default filename for download

    document.body.appendChild(link);
    link.click()

    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  };

  return (
    <DashboardLayout activeSidebar={"Investments"}>
      <div className="allpage grid grid-cols-1 md:grid-cols-12 gap-4">

        <div className="leftside col-span-12 md:col-span-12 lg:col-span-7">


          <BreadCrumb
            first={"Investment"}
            second={projectDetails?.name}
          />


          <div className="upsidebox border bg-[#F1F5ff] rounded-xl py-6 px-3 md:px-10">
            <div className="flex justify-center items-center gap-1">
              <img src={partyImage} alt="" />
              <h1 className=" md:text-xl font-medium font-poppins">Congratulations</h1>
              <img src={partyImage} alt="" />
            </div>
            <div className="pt-6">
              <div className="flex justify-between items-center">
                <h1 className="text-[#3EB14A]  md:text-4xl font-semibold font-poppins">
                  ${projectDetails?.return_amount || 0}
                </h1>
                <h1 className="text-xs md:text-sm font-poppins font-normal text-gray-4">
                  Invested amount: <span className="text-[#6F9CFF] font-poppins text-xs md:text-sm font-semibold">${projectDetails?.invested_amount || 0}</span>
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-start text-xs md:text-sm font-poppins font-normal text-gray-4">
                  Date of transfer:{" "}
                  <span className="text-gray-1 font-poppins text-xs text-start md:text-sm font-semibold">
                    {projectDetails?.trf_date || "24/05/2024"}
                  </span>
                </h1>
                <h1 className=" text-xs md:text-sm font-poppins font-normal text-gray-4">
                  Return on investment:{" "}
                  <span className="text-[#3EB14A] font-poppins text-xs md:text-sm font-semibold">21%</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="leftpart  pt-8">
            <div className="border p-3 rounded-xl ">
              <div className="flex items-center gap-4">
                <div className="icon" >
                  {projectDetails?.display_pic ?
                    <img src={projectDetails?.display_pic} alt="" className="w-[40px] h-[40px] rounded-full" />
                    :
                    <div className="h-[40px] w-[40px] bg-gray-4 flex items-center justify-center text-white rounded-full capitalize">
                      {projectDetails?.name[0]}
                    </div>
                  }
                </div>
                <div>
                  <h1 className="md:text-2xl lato font-semibold capitalize">{projectDetails?.name}</h1>
                  <p className="xs:text-xs md:text-base font-medium lato text-gray-1">
                    {projectDetails?.created_by}
                  </p>
                </div>
              </div>
              <div className="py-6">
                <p className="font-noraml font-poppins xs:text-xs md:text-base text-gray-2">
                  {projectDetails?.detail}
                </p>
              </div>
              <div className="border rounded-xl p-5 my-6 shadow-sm md:w-[90%]">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <h1 className=" text-xs md:text-sm font-poppins font-normal text-gray-4 ">
                      Date:
                    </h1>
                    <h1 className="text-gray-1 font-poppins text-xs md:text-sm font-semibold">
                      {formatDate(projectDetails?.created_at)}
                    </h1>
                  </div>
                  <div className="flex gap-1">
                    <h1 className="text-xs md:text-sm font-poppins font-normal text-gray-4">Minimum Investment:</h1>
                    <h1 className="text-[#6F9CFF] font-poppins text-xs md:text-sm font-semibold">${projectDetails?.min_amount}</h1>
                  </div>
                </div>
                <div className="flex justify-between pt-3">
                  <div className="flex gap-1">
                    <h1 className=" text-sm font-poppins font-normal text-gray-4">Time:</h1>
                    <h1 className=" text-gray-1 font-poppins text-sm font-semibold uppercase">
                      {formatDate(projectDetails?.created_at, {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </h1>
                  </div>
                  <div className="flex gap-1">
                    <h1 className=" text-sm font-poppins font-normal text-gray-4">
                      Return on investment:
                    </h1>
                    <h1 className="text-[#3EB14A] font-poppins text-sm font-semibold">
                      21%
                    </h1>
                  </div>
                </div>
              </div>
              <div className=""></div>


              <button
                onClick={() => downloadInvestmentCertificate("https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg")}
                className="border border-gray-1 p-3 w-fit rounded-xl ease-in-out duration-100 flex hover:shadow-md hover:shadow-[rgba(0,0,0,0.2)] items-center gap-2">
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_35_471)">
                    <path d="M2.5 7V6.5H2V7H2.5ZM6.5 7V6.5H6V7H6.5ZM6.5 11H6V11.5H6.5V11ZM13.5 4H14V3.793L13.854 3.646L13.5 4ZM10.5 1L10.854 0.646L10.707 0.5H10.5V1ZM2.5 7.5H3.5V6.5H2.5V7.5ZM3 11.5V9H2V11.5H3ZM3 9V7H2V9H3ZM3.5 8.5H2.5V9.5H3.5V8.5ZM4 8C4 8.13261 3.94732 8.25979 3.85355 8.35355C3.75979 8.44732 3.63261 8.5 3.5 8.5V9.5C3.89782 9.5 4.27936 9.34196 4.56066 9.06066C4.84196 8.77936 5 8.39782 5 8H4ZM3.5 7.5C3.63261 7.5 3.75979 7.55268 3.85355 7.64645C3.94732 7.74021 4 7.86739 4 8H5C5 7.60218 4.84196 7.22064 4.56066 6.93934C4.27936 6.65804 3.89782 6.5 3.5 6.5V7.5ZM6 7V11H7V7H6ZM6.5 11.5H7.5V10.5H6.5V11.5ZM9 10V8H8V10H9ZM7.5 6.5H6.5V7.5H7.5V6.5ZM9 8C9 7.60218 8.84196 7.22064 8.56066 6.93934C8.27936 6.65804 7.89782 6.5 7.5 6.5V7.5C7.63261 7.5 7.75979 7.55268 7.85355 7.64645C7.94732 7.74021 8 7.86739 8 8H9ZM7.5 11.5C7.89782 11.5 8.27936 11.342 8.56066 11.0607C8.84196 10.7794 9 10.3978 9 10H8C8 10.1326 7.94732 10.2598 7.85355 10.3536C7.75979 10.4473 7.63261 10.5 7.5 10.5V11.5ZM10 6.5V11.5H11V6.5H10ZM10.5 7.5H13V6.5H10.5V7.5ZM10.5 9.5H12V8.5H10.5V9.5ZM2 5.5V2H1V5.5H2ZM13 4V5.5H14V4H13ZM2.5 1.5H10.5V0.5H2.5V1.5ZM10.146 1.354L13.146 4.354L13.854 3.646L10.854 0.646L10.146 1.354ZM2 2C2 1.86739 2.05268 1.74021 2.14645 1.64645C2.24021 1.55268 2.36739 1.5 2.5 1.5V0.5C2.10218 0.5 1.72064 0.658035 1.43934 0.93934C1.15804 1.22064 1 1.60218 1 2H2ZM1 12.5V14H2V12.5H1ZM2.5 15.5H12.5V14.5H2.5V15.5ZM14 14V12.5H13V14H14ZM12.5 15.5C12.8978 15.5 13.2794 15.342 13.5607 15.0607C13.842 14.7794 14 14.3978 14 14H13C13 14.1326 12.9473 14.2598 12.8536 14.3536C12.7598 14.4473 12.6326 14.5 12.5 14.5V15.5ZM1 14C1 14.3978 1.15804 14.7794 1.43934 15.0607C1.72064 15.342 2.10218 15.5 2.5 15.5V14.5C2.36739 14.5 2.24021 14.4473 2.14645 14.3536C2.05268 14.2598 2 14.1326 2 14H1Z" fill="#F23939" />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_471">
                      <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <h1 className="text-xs md:text-sm font-semibold font-inter text-gray-1">
                  Download investment certificate
                </h1>
              </button>
            </div>
          </div>
        </div>

        <div className="rightside lg:col-span-5 xs:col-span-12 space-y-6">
          <section className=" ">
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



          <section>
            <ReviewSection
              type={'investment'}
              id={projectId}
            />
          </section>


        </div>
      </div>
    </DashboardLayout>
  );
}

export default CompletedInvestmentPage;

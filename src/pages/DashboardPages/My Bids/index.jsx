import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import car1 from "assets/images/car1.png";
import car2 from "assets/images/car2.png";
import car3 from "assets/images/car3.png";
import stars from "assets/images/stars.png";
import people from "assets/images/people.png";
import clock from "assets/images/clock.png";
import { OutlineButton } from "components/OutlineButton";
import { DashboardLayout } from "components/Layout";
import Skeleton from "react-loading-skeleton";
import Svgs from "assets/svgs";
import { Button } from "components/Button";

function MyBids() {
  const navigate = useNavigate();
  const cards = [
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
    {
      brand: "audi",
      date: "24/7/2023",
      amount: "$5",
    },
  ];

  const [statusFilter, setStatusFilter] = useState("active")

  const [activeTab, setActiveTab] = useState("active");

  const handleViewDetails = () => {
    if (activeTab === "active") {
      navigate("/my-bids/bid-details")
    }
    else {
      navigate("/dashboard/results")
    }
  }


  // const {data:myAuctionData,isLoading:isLoadingMyAuctionData}= use

  return (
    <DashboardLayout activeSidebar={"My Bids"}>
      <div className="">
        <div className="my-bids flex justify-between">
          <h1 className="md:text-2xl font-semibold font-poppins text-gray-1">
            My Bids
          </h1>
        </div>

        <div className="flex gap-4 py-4 justify-center md:justify-start">
          <button
            onClick={() => setStatusFilter("active")}
            className={`md:px-5 md:py-2.5 px-[10px] py-[7px] font-semibold text-sm font-poppins rounded-xl border ${statusFilter == 'active'
              ? "bg-custom-blue text-white"
              : " text-gray-2 border border-gray-2"
              }`}
          >
            Active
          </button>
          <button
            onClick={() => setStatusFilter("history")}
            className={`md:px-5 md:py-2.5 px-[10px] py-[7px] font-semibold text-sm font-poppins rounded-xl border ${statusFilter == "history"
              ? "bg-custom-blue text-white"
              : " text-gray-2 border border-gray-2"
              }`}
          >
            History
          </button>
        </div>
        <>
          <div className="cardspart grid grid-cols-1 lg:grid-cols-2 gap-5">

            {false ?
              Array(6).fill()?.map((_, index) => (
                <div key={index} className="card border rounded-3xl md:p-8 p-4 shadow-sm">
                  <div className="cars flex items-center justify-center gap-5">
                    <span className="hidden md:block w-[30%]">
                      <Skeleton width={"100%"} height={120} borderRadius={12} />
                    </span>
                    <span className="w-full md:w-[40%]">
                      <Skeleton width={"100%"} height={120} borderRadius={12} />
                    </span>
                    <span className="hidden md:block w-[30%]">
                      <Skeleton width={"100%"} height={120} borderRadius={12} />
                    </span>
                  </div>
                  <div className="flex items-center justify-between md:block">
                    <div className="py-5">
                      <Skeleton width={150} />
                      <Skeleton width={100} />
                    </div>
                    <div className="md:hidden">
                      <Skeleton width={75} height={25} />

                    </div>
                  </div>
                  <div className="box border rounded-xl shadow-sm md:p-4 p-2 block">
                    <div className="upside flex justify-between items-center">
                      <div className="upfirst flex items-center gap-1">
                        <Skeleton width={125} />
                      </div>
                      <div className="upsecond flex gap-1">
                        <Skeleton width={125} />

                      </div>
                    </div>
                    <div className="downside flex justify-between items-center">
                      <div className="dwnfirst flex items-center gap-1">
                        <Skeleton width={125} />
                      </div>
                      <div className="dwnsecond flex items-center gap-1">
                        <Skeleton width={125} />
                      </div>
                    </div>
                  </div>
                  <div className=" justify-center items-center gap-5 p-5 flex">
                    <div className="border rounded-xl px-2 py-3 w-[112px] flex flex-col items-center">
                      <Skeleton width={50} height={45} borderRadius={16} />
                      <Skeleton width={50} className="mt-2" />
                      <Skeleton width={50} />
                    </div>
                    <div className="border rounded-xl px-2 py-4 w-[112px] flex flex-col items-center">
                      <Skeleton width={50} height={45} borderRadius={16} />
                      <Skeleton width={50} className="mt-2" />
                      <Skeleton width={50} />
                    </div>
                    <div className="border rounded-xl px-2 py-3 w-[112px] flex flex-col items-center">
                      <Skeleton width={50} height={45} borderRadius={16} />
                      <Skeleton width={50} className="mt-2" />
                      <Skeleton width={50} />
                    </div>
                  </div>
                  <div className="text-center pt-6 md:flex items-center justify-center hidden">
                    <Skeleton
                      width={125}
                      height={35}
                      borderRadius={12}
                    />
                  </div>
                </div>
              ))
              :
              false ?
                <div className=" flex items-center h-[50vh] justify-center col-span-3 text-2xl font-medium capitalize">
                  No {statusFilter} Bids
                </div>
                :

                cards.map((card, index) => {
                  return (
                    <div key={index} className="card border rounded-3xl md:p-8 p-4 shadow-sm">
                      <div className="cars flex items-center justify-center gap-5">
                        <img src={car1} className="hidden md:block w-[28%]" alt="Car 1" />
                        <img src={car2} className="w-[100%] sm:w-[40%]" alt="Car 2" />
                        <img src={car3} className="hidden sm:block w-[28%]" alt="Car 3" />
                      </div>
                      <div className="flex items-center justify-between ">
                        <div className="pt-5">
                          <h1 className="text-xs md:text-xl font-semibold font-poppins text-gray-700">Investment audi</h1>
                          <p className="text-xs md:text-xl font-normal font-poppins text-gray-400 py-4">
                            @invest.audi
                          </p>
                        </div>
                        <div className="md:hidden ">
                          <div>

                            <Button
                              onClick={() => {
                                if (statusFilter === "active") {
                                  navigate(`/my-bids/bid-details`, { state: { auctionDetails: { ...data, from: "Auction" } } })
                                  // navigate("/my-bids/bid-details")
                                }
                                else {
                                  navigate("/dashboard/results")
                                }
                              }}
                              customTheme={'btn-outline'}
                              title={"View details"}
                              className={"!text-sm"}
                              customPadding={"px-4 py-2"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="box border rounded-xl shadow-sm p-4 block">
                        <div className="upside flex flex-col md:flex-row w-full justify-between items-center ">
                          <div className="upfirst flex items-center w-full max-md:justify-between gap-1 text-xs md:text-base font-medium font-poppins ">
                            <h1 className=" text-gray-4">
                              Date:
                            </h1>
                            <h1 className=" font-semibold  text-gray-1">
                              25/06/2024
                            </h1>
                          </div>
                          <div className="upfirst flex text-right w-full max-md:justify-between gap-1 text-xs md:text-base font-medium font-poppins   md:justify-end ">
                            <h1 className=" text-gray-4">Total rounds:</h1>
                            <h1 className=" font-semibold  text-custom-blue">4</h1>
                          </div>
                        </div>
                        <div className="downside  justify-between items-center hidden md:flex">
                          <div className="dwnfirst flex items-center gap-1">
                            <h1 className="text-xs md:text-base font-medium font-poppins text-gray-400">Time:</h1>
                            <h1 className="text-xs md:text-base font-semibold font-poppins text-gray-700">9:00 PM</h1>
                          </div>
                          <div className="dwnsecond flex items-center gap-1">
                            <h1 className="text-xs md:text-base font-medium font-poppins text-gray-400">Bid amount:</h1>
                            <h1 className="text-xs md:text-base font-semibold font-poppins text-blue-500">$2</h1>
                          </div>
                        </div>
                      </div>
                      <div className=" justify-center items-center gap-2.5 lg:p-5 py-2.5   flex">
                        <div
                          className="border border-gray-5  h-[116px] w-[112px] rounded-xl justify-center flex flex-col items-center">
                          <span>
                            <Svgs.ScoreIcon />
                          </span>
                          <div className="flex flex-col items-center">
                            <h1 className=" md:text-xl font-semibold font-poppins text-gray-1">
                              320
                            </h1>
                            <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">
                              Score
                            </h1>
                          </div>
                        </div>
                        <div className="border border-gray-5 rounded-xl justify-center gap-[6px] w-[112px] h-[116px] flex flex-col items-center">
                          <Svgs.ParticipantsIcon />
                          <div className="flex flex-col items-center">
                            <h1 className=" md:text-xl font-semibold font-poppins text-gray-1">
                              160
                            </h1>
                            <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">
                              Participants
                            </h1>
                          </div>
                        </div>
                        <div className="border border-gray-5 rounded-xl px-2 justify-center py-3 w-[112px] h-[116px] flex flex-col items-center">
                          <Svgs.TimeIcon />
                          <div className="flex flex-col items-center">
                            <h1 className=" md:text-xl font-semibold font-poppins text-gray-1">
                              4:12
                            </h1>
                            <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">
                              Minutes
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-center md:flex items-center justify-center hidden ">
                        <div className="">
                          <Button
                            onClick={() => {
                              if (statusFilter === "active") {
                                // navigate(`/my-bids/bid-details`, { state: { auctionDetails: { ...data, from: "Auction" } } })
                                navigate("/my-bids/bid-details")
                              }
                              else {
                                navigate("/dashboard/results")
                              }
                            }}
                            customTheme={'btn-outline'}
                            title={"View details"}
                            customPadding={"px-5 py-3"}
                          />
                          {/* <OutlineButton
                            onClick={handleViewDetails}
                            className=" min-w-max px-5 py-2  text-sm font-semibold font-poppins"
                            title={"View details"}

                          /> */}
                        </div>
                      </div>
                    </div>
                  );
                })}

          </div>
        </>

      </div>
    </DashboardLayout>
  );
}

export default MyBids;

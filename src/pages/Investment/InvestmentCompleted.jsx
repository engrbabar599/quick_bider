import React from "react";
import partyImage from "../../assets/images/party.png";
import vectorImage from "../../assets/images/Vector.png";
import pdfImage from "../../assets/images/pdf.png";
import starImage from "../../assets/images/star.png"
import { Navigate, useNavigate } from "react-router-dom";
function InvestmentCompleted() {

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
  return (
    <>
      <div className="allpage grid xs:grid-cols-1 md:grid-cols-12 gap-4">

        <div className="leftside xs:col-span-12 md:col-span-12 lg:col-span-7">


        <div className='flex flex-row items-center gap-x-2 pb-7'>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z" fill="black" />
                    </svg>
                    <div className='flex flex-row font-poppins font-normal  text-base'>
                        <p onClick={() => navigate(-1)} className='text-gray-1  hover:cursor-pointer hover:text-black'>Investments/</p>
                        <p className='font-semibold text-custom-blue'>BE Project</p>
                    </div>
      </div>

          <div className="upsidebox border bg-[#F1F5ff] rounded-xl py-6 px-3 md:px-10">
            <div className="flex justify-center items-center gap-1">
              <img src={partyImage} alt="" />
              <h1 className=" md:text-xl font-medium font-poppins">Congratulations</h1>
              <img src={partyImage} alt="" />
            </div>
            <div className="pt-6">
              <div className="flex justify-between items-center">
                <h1 className="text-[#3EB14A]  md:text-4xl font-semibold font-poppins">$605.00</h1>
                <h1 className="text-xs md:text-sm font-poppins font-normal text-gray-4">
                  Invested amount: <span className="text-[#6F9CFF] font-poppins text-xs md:text-sm font-semibold">$500</span>
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-start text-xs md:text-sm font-poppins font-normal text-gray-4">
                  Date of transfer:{" "}
                  <span className="text-gray-1 font-poppins text-xs text-start md:text-sm font-semibold">
                    20/7/2024
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
                <div className="icon">
                  <p>
                    <img src={vectorImage} alt="" />
                  </p>
                </div>
                <div>
                  <h1 className="md:text-2xl lato font-semibold">Project 21</h1>
                  <p className="xs:text-xs md:text-base font-medium lato text-gray-1">TechDX, Inc</p>
                </div>
              </div>
              <div className="py-6">
                <p className="font-noraml font-poppins xs:text-xs md:text-base text-gray-2">
                  We are delighted to offer you a wide range of vehicles through
                  our auction platform. Whether you're looking for a new ride or
                  seeking a classic gem, our auctions provide you with a variety
                  of options to choose from.
                </p>
              </div>
              <div className="border rounded-xl p-5 my-6 shadow-sm md:w-[90%]">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <h1 className=" text-xs md:text-sm font-poppins font-normal text-gray-4 ">Date:</h1>
                    <h1 className="text-gray-1 font-poppins text-xs md:text-sm font-semibold">24/05/2024</h1>
                  </div>
                  <div className="flex gap-1">
                    <h1 className="text-xs md:text-sm font-poppins font-normal text-gray-4">Minimum Investment:</h1>
                    <h1 className="text-[#6F9CFF] font-poppins text-xs md:text-sm font-semibold">%500</h1>
                  </div>
                </div>
                <div className="flex justify-between pt-3">
                  <div className="flex gap-1">
                    <h1 className=" text-sm font-poppins font-normal text-gray-4">Time:</h1>
                    <h1 className=" text-gray-1 font-poppins text-sm font-semibold">9:00 PM</h1>
                  </div>
                  <div className="flex gap-1">
                    <h1 className=" text-sm font-poppins font-normal text-gray-4">Return on investment:</h1>
                    <h1 className="text-[#3EB14A] font-poppins text-sm font-semibold">21%</h1>
                  </div>
                </div>
              </div>
              <div className=""></div>
              <div className="border border-black p-3 w-fit rounded-xl flex items-center gap-2">
                <img src={pdfImage} alt="" className="" />
                <h1 className="text-xs md:text-sm font-semibold font-inter">Download investment certificate</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rightside lg:col-span-5 xs:col-span-12">
          <div className="">
          <div className=" flex justify-between items-center gap-4">
                  <div className=" min-w-max">
                    <h1 className="md:text-2xl font-semibold font-poppins text-gray-1">All Investers</h1>
                  </div>
                  <div className=" w-full border-b-2"></div>
                  <div className="text-custom-blue min-w-max">
                    <button className=" font-semibold hover:scale-105 hover:text-blue-500 font-poppins xs:text-sm md:text-base">View all</button>
                  </div>
                </div>
            <div className="pt-5">
              <div className="border rounded-xl p-5">
                <div className="grid grid-cols-3 border-b-2">
                  <div className="md:text-lg font-medium font-poppins text-start">Name</div>
                  <div className="md:text-lg font-medium font-poppins text-start">Time</div>
                  <div className="md:text-lg font-medium font-poppins text-start">Investment</div>
                </div>
                {investment.map((value, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="grid grid-cols-3 pt-3 border-b py-2"
                      >
                        <div><h1 className="text-start text-base font-normal font-open-sans text-[#686868]">{value.name}</h1></div>
                        <div><h1 className="text-start font-poppins font-light text-lg text-[#1E1E1E]">10:20:40 AM</h1></div>
                        <div><h1 className="text-start font-poppins font-light text-lg text-[#1E1E1E]">$**</h1></div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" pt-6">
          <div className=" flex justify-between items-center gap-4">
                  <div className=" min-w-max">
                    <h1 className="md:text-2xl font-semibold font-poppins text-gray-1">All reviews</h1>
                  </div>
                  <div className=" w-full border-b-2"></div>
                  <div className="text-custom-blue min-w-max">
                    <button className=" font-semibold hover:scale-105 hover:text-blue-500 font-poppins xs:text-sm md:text-base">View all</button>
                  </div>
                </div>
            <div className="flex gap-4 py-4 xs:justify-center md:justify-start">
              <div>
                <button className="bg-custom-blue px-5 py-2.5 text-sm rounded-xl font-poppins text-white">
                  All reviews
                </button>
              </div>
              <div>
                <button className="bg-white px-5 py-2.5 text-sm font-poppins font-semibold text-gray-2 rounded-xl border">
                  write a review
                </button>
              </div>
            </div>
            {review.map((value, i) => {
              return (
                <>
                  <div className="border p-3 rounded-xl shadow my-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="icon">
                          <p>
                            <img src={vectorImage} alt="" />
                          </p>
                        </div>
                        <div>
                          <h1 className="md:text-xl font-semibold font-poppins">
                            Jonas Sousa
                          </h1>
                          <p className="xs:text-xs md:text-sm font-normal text-start font-poppins text-[#7A7A7A]">Investor</p>
                        </div>
                      </div>
                      <div>
                        <img src={starImage} alt="" />
                      </div> 
                    </div>
                    <div className="pt-4">
                      <p className=" font-poppins font-normal text-sm text-gray-4 text-start">
                        I didn't know the first thing about investing. This
                        book helped me understand some basic topics. It even
                        taught me who to be careful with when taking advice
                        about investing, wink wink youtube gurus. I
                        recommend this book to anyone trying to understand
                        the stock market before investing.
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>


        </div>
      </div>
    </>
  );
}

export default InvestmentCompleted;

import React from "react";
import partyImage from "../../assets/images/party.png";
import vectorImage from "../../assets/images/Vector.png";
import pdfImage from "../../assets/images/pdf.png";
import starImage from "../../assets/images/star.png"
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


  return (
    <>
      <div className="allpage grid xs:grid-cols-1 md:grid-cols-12 gap-4">
        <div className="leftside xs:col-span-12 md:col-span-12 lg:col-span-7">
          <div className="upsidebox border bg-[#F1F5ff] rounded-xl py-6 px-10">
            <div className="flex justify-center items-center gap-1">
              <img src={partyImage} alt="" />
              <h1 className=" text-xl font-medium font-poppins">Congratulations</h1>
              <img src={partyImage} alt="" />
            </div>
            <div className="pt-6">
              <div className="flex justify-between items-center">
                <h1 className="text-[#3EB14A] text-4xl font-semibold font-poppins">$605.00</h1>
                <h1 className="text-sm font-poppins font-normal text-gray-4">
                  Invested amount: <span className="text-[#6F9CFF] font-poppins text-sm font-semibold">$500</span>
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-sm font-poppins font-normal text-gray-4">
                  Date of transfer:{" "}
                  <span className="text-gray-1 font-poppins text-sm font-semibold">
                    20/7/2024
                  </span>
                </h1>
                <h1 className="text-sm font-poppins font-normal text-gray-4">
                  Return on investment:{" "}
                  <span className="text-[#3EB14A] font-poppins text-sm font-semibold">21%</span>
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
                  <h1 className="text-2xl lato font-semibold">Project 21</h1>
                  <p className="text-base font-medium lato text-gray-1">TechDX, Inc</p>
                </div>
              </div>
              <div className="py-6">
                <p className="font-noraml font-poppins text-base text-gray-2">
                  We are delighted to offer you a wide range of vehicles through
                  our auction platform. Whether you're looking for a new ride or
                  seeking a classic gem, our auctions provide you with a variety
                  of options to choose from.
                </p>
              </div>
              <div className="border rounded-xl p-5 my-6 shadow-sm md:w-[90%]">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <h1 className="text-sm font-poppins font-normal text-gray-4 ">Date:</h1>
                    <h1 className="text-gray-1 font-poppins text-sm font-semibold">24/05/2024</h1>
                  </div>
                  <div className="flex gap-1">
                    <h1 className="text-sm font-poppins font-normal text-gray-4">Minimum Investment:</h1>
                    <h1 className="text-[#6F9CFF] font-poppins text-sm font-semibold">%500</h1>
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
                <h1 className="text-sm font-semibold font-inter">Download investment certificate</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rightside lg:col-span-5 xs:col-span-12">
          <div className="">
          <div className=" flex justify-between items-center gap-4">
                  <div className=" min-w-max">
                    <h1 className="text-2xl font-semibold font-poppins text-gray-1">All Investers</h1>
                  </div>
                  <div className=" w-full border-b-2"></div>
                  <div className="text-custom-blue min-w-max">
                    <button className=" font-semibold hover:scale-105 hover:text-blue-500 font-poppins text-base">View all</button>
                  </div>
                </div>
            <div className="pt-5">
              <div className="border rounded-xl p-5">
                <div className="grid grid-cols-3 border-b-2">
                  <div className="text-lg font-medium font-poppins">Name</div>
                  <div className="text-lg font-medium font-poppins">Time</div>
                  <div className="text-lg font-medium font-poppins">Investment</div>
                </div>
                {investment.map((value, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="grid grid-cols-3 pt-3 border-b py-2"
                      >
                        <div><h1 className="text-base font-normal font-open-sans text-[#686868]">{value.name}</h1></div>
                        <div><h1 className=" font-poppins font-light text-lg text-[#1E1E1E]">10:20:40 AM</h1></div>
                        <div><h1 className="font-poppins font-light text-lg text-[#1E1E1E]">$**</h1></div>
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
                    <h1 className="text-2xl font-semibold font-poppins text-gray-1">All Investers</h1>
                  </div>
                  <div className=" w-full border-b-2"></div>
                  <div className="text-custom-blue min-w-max">
                    <button className=" font-semibold hover:scale-105 hover:text-blue-500 font-poppins text-base">View all</button>
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
                  <div className="border p-3 rounded-xl shadow-xl my-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="icon">
                          <p>
                            <img src={vectorImage} alt="" />
                          </p>
                        </div>
                        <div>
                          <h1 className="text-xl font-semibold font-poppins">
                            Jonas Sousa
                          </h1>
                          <p className=" text-sm font-normal font-poppins text-[#7A7A7A]">Investor</p>
                        </div>
                      </div>
                      <div>
                        <img src={starImage} alt="" />
                      </div> 
                    </div>
                    <div className="pt-4">
                      <p className=" font-poppins font-normal text-sm text-gray-4">
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

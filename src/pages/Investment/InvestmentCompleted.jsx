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
          <div className="upsidebox border bg-[#F1F5ff] rounded-xl py-8 px-10">
            <div className="flex justify-center items-center gap-1">
              <img src={partyImage} alt="" />
              <h1 className=" text-xl font-bold">Congratulations</h1>
              <img src={partyImage} alt="" />
            </div>
            <div className="pt-6">
              <div className="flex justify-between items-center">
                <h1 className="text-green-500 text-4xl font-bold">$605.00</h1>
                <h1 className="opacity-60">
                  Invested amount: <span className="text-custom-blue">$500</span>
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className=" opacity-60">
                  Date of transfer:{" "}
                  <span className="text-black text-lg font-semibold">
                    20/7/2024
                  </span>
                </h1>
                <h1 className="opacity-60">
                  Return on investment:{" "}
                  <span className="text-green-700">21%</span>
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
                  <h1 className="text-xl font-semibold">Jones</h1>
                  <p className="opacity-65">TechDX, Inc</p>
                </div>
              </div>
              <div className="py-6">
                <p className=" md:font-semibold opacity-70">
                  We are delighted to offer you a wide range of vehicles through
                  our auction platform. Whether you're looking for a new ride or
                  seeking a classic gem, our auctions provide you with a variety
                  of options to choose from.
                </p>
              </div>
              <div className="border rounded-xl p-5 my-6 shadow-sm md:w-[90%]">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <h1 className=" opacity-60 ">Date:</h1>
                    <h1 className="font-bold">24/05/2024</h1>
                  </div>
                  <div className="flex gap-1">
                    <h1 className="opacity-60">Minimum Investment:</h1>
                    <h1 className="text-custom-blue font-bold">%500</h1>
                  </div>
                </div>
                <div className="flex justify-between pt-3">
                  <div className="flex gap-1">
                    <h1 className=" opacity-60 ">Time:</h1>
                    <h1 className=" font-bold">9:00 PM</h1>
                  </div>
                  <div className="flex gap-1">
                    <h1 className=" opacity-60">Return on investment:</h1>
                    <h1 className="text-green-500 font-bold">21%</h1>
                  </div>
                </div>
              </div>
              <div className=" pt-3 flex gap-4 items-center"></div>
              <div className="border p-3 w-fit rounded-xl flex gap-2">
                <img src={pdfImage} alt="" width={15} />
                <h1>Download investment certificate</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rightside lg:col-span-5 xs:col-span-12">
          <div className="">
            <div className=" flex justify-between items-center">
              <div className="">
                <h1 className=" font-bold">All Investers</h1>
              </div>
              <div className="w-[55%] mx-auto border-b-2"></div>
              <div className="text-custom-blue">
                <button>view all</button>
              </div>
            </div>
            <div className="pt-5">
              <div className="border rounded-xl p-5">
                <div className="grid grid-cols-3 border-b-2">
                  <div className="text-md font-semibold">Name</div>
                  <div className="text-md font-semibold">Time</div>
                  <div className="text-md font-semibold">Investment</div>
                </div>
                {investment.map((value, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="grid grid-cols-3 pt-3 border-b py-2"
                      >
                        <div>{value.name}</div>
                        <div>10:20:40 AM</div>
                        <div>$**</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" pt-6">
            <div className=" flex justify-between items-center">
              <div className="">
                <h1 className=" font-bold">All Reviews</h1>
              </div>
              <div className="w-[55%] border-b-2"></div>
              <div className="text-custom-blue">
                <button>view all</button>
              </div>
            </div>
            <div className="flex gap-4 py-4">
              <div>
                <button className="bg-custom-blue px-4 py-2 rounded-lg text-white">
                  All reviews
                </button>
              </div>
              <div>
                <button className="bg-white px-4 py-2 rounded-lg border">
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
                          <h1 className="text-xl font-semibold">
                            Jonas Sousa
                          </h1>
                          <p className="opacity-65">Investor</p>
                        </div>
                      </div>
                      <div>
                        <img src={starImage} alt="" />
                      </div>
                    </div>
                    <div className="pt-4">
                      <p className=" opacity-55">
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

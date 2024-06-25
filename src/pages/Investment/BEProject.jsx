import React from "react";
import vectorImage from "../../assets/images/Vector.png";
import starImage from "../../assets/images/star.png";
import { useState } from "react";
function BEProject() {
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

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="overallpage p-5">
      <div className="uperpart grid md:grid-cols-12 gap-5">
        <div className="leftpart col-span-8">
          <div className="border p-3 rounded-xl shadow-xl">
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
            <div className=" pt-3 flex gap-4 items-center">
              <input
                type="text"
                className="rounded-lg border py-3 px-2 w-[70%]"
                placeholder="Enter amount to investment"
              />

              <div>
                <button
                  onClick={toggleVisibility}
                  className="bg-custom-blue text-white px-3 py-3 rounded-lg"
                >
                  Add money
                </button>
                {isVisible && <BEProjectDialog />}
              </div>
            </div>
            <div className="flex justify-center gap-2 py-6">
              <h1>Wallet:</h1>
              <h1 className="text-custom-blue">$1200</h1>
            </div>
          </div>
        </div>
        <div className="rightpart col-span-8 md:col-span-4">
          <div className="">
            <div className=" flex justify-between items-center">
              <div className="">
                <h1 className="text-lg font-bold">All Investers</h1>
              </div>
              <div className="w-[60%] mx-auto border-b-2"></div>
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
                <div className="text-center py-5">
                  <button className="px-4 py-2 rounded-lg border border-blue text-custom-blue">
                    View all
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="downpart grid md:grid-cols-12 gap-5">
        <div className="leftpart col-span-8">
          <div className="py-5">
            <h1 className="text-xl font-semibold">Terms & conditions</h1>
          </div>
          <div className="border p-5 rounded-xl">
            <ul className=" list-decimal px-14 py-1">
              <li>
                <p className="py-3 text-lg font-semibold opacity-70">
                  Bidders must be 18+ and register with valid ID. Registration
                  implies agreement to these terms.
                </p>
              </li>
              <li>
                <p className="py-3 text-lg font-semibold opacity-70">
                  Bidders must be 18+ and register with valid ID. Registration
                  implies agreement to these terms.
                </p>
              </li>
              <li>
                <p className="py-3 text-lg font-semibold opacity-70">
                  Bidders must be 18+ and register with valid ID. Registration
                  implies agreement to these terms.
                </p>
              </li>
              <li>
                <p className="py-3 text-lg font-semibold opacity-70">
                  Bidders must be 18+ and register with valid ID. Registration
                  implies agreement to these terms.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightpart xs:col-span-8 md:col-span-4 pt-6">
          <div className="">
            <div className=" flex justify-between items-center">
              <div className="">
                <h1 className="text-lg font-bold">All Reviews</h1>
              </div>
              <div className="w-[65%] border-b-2"></div>
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
                          <h1 className="text-xl font-semibold">Jonas Sousa</h1>
                          <p className="opacity-65">Investor</p>
                        </div>
                      </div>
                      <div>
                        <img src={starImage} alt="" />
                      </div>
                    </div>
                    <div className="pt-4">
                      <p className=" opacity-55">
                        I didn't know the first thing about investing. This book
                        helped me understand some basic topics. It even taught
                        me who to be careful with when taking advice about
                        investing, wink wink youtube gurus. I recommend this
                        book to anyone trying to understand the stock market
                        before investing.
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function BEProjectDialog() {
  const [dialog, setDialog] = useState(true);
  function handleClick() {
    setDialog(false);
  }
  return (
    <>
      {dialog && (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" flex items-center justify-center h-[100vh]">
            <div className=" mx-auto p-8 bg-white rounded-lg shadow-md py-7 ">
              <div className="flex justify-between mb-6">
                <div className="">
                  <div className="flex justify-center items-center">
                    <p className="">
                      <span className="material-icons bg-green-500 text-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
                        check
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <h1 className="text-green-500 font-semibold">$500</h1>
                  </div>
                  <div className="w-[60%] mx-auto">
                    <h1 className="text-center font-semibold">
                      Added to wallet successfully!
                    </h1>
                  </div>
                  <div className="flex justify-center items-center py-2">
                    <p className=" opacity-60">Transaction ID: CDX86Cd232</p>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <button
                      onClick={handleClick}
                      className="bg-custom-blue px-14 rounded-lg py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BEProject;

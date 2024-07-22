import React from "react";
import vectorImage from "../../assets/images/Vector.png";
import starImage from "../../assets/images/star.png";
import { useState } from "react";
import { Button } from "../../components/Button";
import { OutlineButton } from "../../components/OutlineButton";
import { navigate, useNavigate } from "react-router-dom";
import filledstar from "../../assets/images/filledstars.png"

function BEProject() {

  const [activeReview, setActiveReview] = useState("review")

  const handleClick = (item) =>{
    setActiveReview(item)
  }


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

  const navigate = useNavigate()
  return (
    <div className="overallpage p-5">

<div className='flex flex-row items-center gap-x-2 py-6'>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z" fill="black" />
                    </svg>
                    <div className='flex flex-row font-poppins font-normal  text-base'>
                        <p onClick={() => navigate(-1)} className='text-gray-1  hover:cursor-pointer hover:text-black'>Investments/</p>
                        <p className='font-semibold text-custom-blue'>BE Project</p>
                    </div>
                </div>

      <div className="uperpart grid md:grid-cols-12 gap-5">
        <div className="leftpart col-span-12 md:col-span-7">
          <div className="border p-5 rounded-xl shadow-sm">
            <div className="flex xs:flex-col  md:flex-row items-center gap-4">
              <div className="icon">
                <p>
                  <img src={vectorImage} alt="" />
                </p>
              </div>
              <div className="flex flex-col xs:gap-2 md:block">
                <h1 className="md:text-2xl font-semibold font-lato text-gray-1">Project 21</h1>
                <p className="xs:text-xs md:text-base font-medium font-lato text-gray-4">TechDX, Inc</p>
              </div>
            </div>
            <div className="py-6 xs:text-center md:text-start">
              <p className="xs:text-xs md:text-base font-normal font-poppins text-gray-2">
                We are delighted to offer you a wide range of vehicles through our auction platform. Whether you're looking for a new ride or seeking a classic gem, our auctions provide you with a variety of options to choose from.
              </p>
            </div>
            <div className="border rounded-xl p-5 my-6 shadow-sm md:w-[90%]">
              <div className="flex justify-between">
                <div className="upfirst flex items-center gap-1">
                  <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">Date:</h1>
                  <h1 className="text-xs md:text-base font-semibold font-poppins text-gray-1">25/06/2024</h1>
                </div>
                <div className="upsecond flex gap-1">
                  <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">Minimum investment:</h1>
                  <h1 className="text-xs md:text-base font-semibold font-poppins text-custom-blue">4</h1>
                </div>
              </div>
              <div className="downside flex justify-between items-center">
                <div className="dwnfirst flex items-center gap-1">
                  <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">Time:</h1>
                  <h1 className="text-xs md:text-base font-semibold font-poppins text-gray-1">9:00 PM</h1>
                </div>
                <div className="dwnsecond flex items-center gap-1">
                  <h1 className="text-xs md:text-base font-normal font-poppins text-gray-4">Return on investment:</h1>
                  <h1 className="text-xs md:text-base font-semibold font-poppins text-custom-blue">$5</h1>
                </div>
              </div>
            </div>
            <div className="pt-3 flex gap-4 items-center">
              <input
                type="text"
                className="rounded-xl border py-3 px-3 w-[70%]"
                placeholder="Enter amount to investment"
              />

              <div>
                <button
                  onClick={toggleVisibility}
                  className="bg-custom-blue text-white px-4 py-3 rounded-xl w-[140px] text-sm font-semibold font-inter"
                >
                  Invest now
                </button>
                {isVisible && <BEProjectDialog />}
              </div>
            </div>
            <div className="flex justify-center gap-2 py-6">
              <h1 className="font-normal font-poppins text-gray-1">Wallet:</h1>
              <h1 className="text-custom-blue font-semibold font-poppins">$1200</h1>
            </div>
          </div>
        </div>
        <div className="rightpart col-span-12 md:col-span-5">
          <div className="">
            <div className="flex justify-between items-center gap-4">
              <div className="min-w-max">
                <h1  className="md:text-2xl font-semibold font-poppins text-gray-1">All Investers</h1>
              </div>
              <div className="w-full border-b-2"></div>
              <div className="text-custom-blue min-w-max">
                <button onClick={()=>{navigate("/investments/allinvesters")}} className="font-semibold hover:scale-105 hover:text-blue-500 font-poppins xs:text-xs md:text-base">View all</button>
              </div>
            </div>
            <div className="pt-5">
              <div className="border rounded-xl p-5 w-full justify-between flex flex-col items-stretch">
                <div className="grid grid-cols-3 text-[#1E1E1E]">
                  <div className="md:text-lg font-medium font-poppins">Name</div>
                  <div className="md:text-lg font-medium font-poppins">Time</div>
                  <div className="md:text-lg font-medium font-poppins">Investment</div>
                  <div className="border-b-2 pt-2 col-span-3"></div>
                </div>
                {investment.map((value, i) => {
                  return (
                    <div key={i} className="grid grid-cols-3 pt-4 border-b text-[#1E1E1E]">
                      <div><h1 className="font-normal text-[#686868] font-open-sans xs:text-sm md:text-base underline">{value.name}</h1></div>
                      <div><p className="xs:text-sm md:text-base font-light">10:20:40 AM</p></div>
                      <div><p className="xs:text-sm md:text-base font-light">$**</p></div>
                    </div>
                  );
                })}
                <div className="text-center pt-5">
                  <button className="px-4 py-3 rounded-xl bg-white border border-custom-blue text-custom-blue text-sm font-semibold font-poppins">View all</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="downpart grid md:grid-cols-12 gap-5">
        <div className="leftpart col-span-12 md:col-span-7">
          <div className="py-5">
            <h1 className="xs:text-xl md:text-2xl font-semibold font-poppins text-gray-1">Terms & conditions</h1>
          </div>
          <div className="border p-5 rounded-xl">
            <ul className="list-decimal px-10 py-1">
              <li>
                <p className="py-3 xs:text-xs md:text-sm font-normal text-gray-2 font-poppins">
                  Bidders must be 18+ and register with valid ID. Registration implies agreement to these terms.
                </p>
              </li>
              <li>
                <p className="py-3 xs:text-xs md:text-sm font-normal text-gray-2 font-poppins">
                  All bids are final and binding. The highest bid wins. The auctioneer can reject bids, withdraw items, and resolve disputes.
                </p>
              </li>
              <li>
                <p className="py-3 xs:text-xs md:text-sm font-normal text-gray-2 font-poppins">
                  Full payment due within [Number] hours/days post-auction. A [Percentage]% buyer’s premium applies. Non-payment results in bid forfeiture.
                </p>
              </li>
              <li>
                <p className="py-3 xs:text-xs md:text-sm font-normal text-gray-2 font-poppins">
                  Items sold "as is" without warranties. Bidders must inspect items before bidding. Auction house not liable for description errors.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightpart col-span-12 md:col-span-5 pt-6">
          {/* <div className="">
            <div className="flex justify-between items-center gap-4">
              <div className="">
                <h1 className="md:text-2xl font-poppins text-gray-1 font-semibold min-w-max">All Reviews</h1>
              </div>
              <div className="w-full border-b-2"></div>
              <div className="text-custom-blue min-w-max">
                <button className="xs:text-sm md:text-base font-semibold font-poppins hover:scale-105 hover:text-blue-500">View all</button>
              </div>
            </div>
            <div className="flex gap-4 pt-4 items-center">
              <div>
                <Button
                  title={"All reviews"}
                  className={"px-5 py-3 text-sm font-semibold font-poppins rounded-xl"}
                />
              </div>
              <div>
                <OutlineButton
                  className={"text-gray-2 px-5 py-3 text-sm font-semibold font-poppins rounded-xl border-gray-2 hover:text-gray-1"}
                  title={"Write a review"}
                />
              </div>
            </div>
            {review.map((value, i) => {
              return (
                <div key={i} className="border p-3 rounded-xl shadow my-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="icon">
                        <p>
                          <img src={vectorImage} alt="" />
                        </p>
                      </div>
                      <div>
                        <h1 className="md:text-xl font-semibold font-poppins text-gray-1">
                          Jonas Sousa
                        </h1>
                        <p className=" text-gray-4 xs:text-sm md:text-base font-normal font-poppins">Investor</p>
                      </div>
                    </div>
                    <div>
                      <img src={starImage} alt="" />
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm font-normal font-poppins text-gray-4">
                      I didn't know the first thing about investing. This book helped me understand some basic topics. It even taught me who to be careful with when taking advice about investing, wink wink youtube gurus. I recommend this book to anyone trying to understand the stock market before investing.
                    </p>
                  </div>
                </div>
              );
            })}
          </div> */}
           <div className="">
                <div className=" flex justify-between items-center gap-4">
                  <div className="">
                    <h1 className="text-2xl font-poppins text-gray-1 font-semibold min-w-max">All Reviews</h1>
                  </div>
                  <div className="w-full border-b-2"></div>
                  <div className="text-custom-blue min-w-max">
                    <button onClick={()=>{navigate("/investments/allreviews")}} className="text-base font-semibold font-poppins hover:scale-105 hover:text-blue-500">View all</button>
                  </div>
                </div>
                <div className="flex gap-4 pt-4 items-center">
                  <div>
                    <button
                    onClick={()=>{handleClick("review")}}
                      title={"All reviews"}
                      className={`px-5 py-3 text-sm font-semibold font-poppins rounded-xl ${(activeReview === "review")? "text-white bg-custom-blue" : " text-custom-blue border-custom-blue border bg-white"} `}
                    >
                      All review
                      </button>
                  </div>
                  <div>
                    <button
                    onClick={()=>{handleClick("writeReview")}}
                      className={` px-5 py-3 text-sm font-semibold font-poppins rounded-xl ${(activeReview === "writeReview")? "text-white bg-custom-blue" : " text-custom-blue border-custom-blue border bg-white"}`}
                      title={"Write a review"}
                    >
                      Write a review
                    </button>
                  </div>
                </div>
                {activeReview === "review" && (
                  <>
                  {review.map((value, i) => {
                    return (
                      <>
                        <div className="border p-3 rounded-xl shadow my-4">
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
                                <p className="opacity-65 text-base font-normal font-poppins">Investor</p>
                              </div>
                            </div>
                            <div>
                              <img src={starImage} alt="" />
                            </div>
                          </div>
                          <div className="pt-4">
                            <p className=" text-sm font-normal font-poppins text-gray-4">
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
                  </>
                )}
                {activeReview === "writeReview" && (
                  <>
                <div className="writeAreview">
                  <div className="py-5">
                    <h1 className=" text-lg font-normal font-poppins text-[#000000]">
                    How much do you like us?
                    </h1>
                  </div>
                  <div className="pb-5">
                    <img src={filledstar} alt="" />
                  </div>
                  <div>
                    <label htmlFor="review" className="text-base font-medium font-poppins text-gray-1">Write a review</label>
                    <textarea name="" id="review" className=" w-full outline-none border rounded-xl p-3 mt-2" rows={5}></textarea>
                  </div>
                  <div className="text-center p-4">
                  <button
                      className={` px-5 py-3 text-sm font-semibold font-inter rounded-xl ${(activeReview === "writeReview")? "text-white bg-custom-blue" : " text-custom-blue border-custom-blue border bg-white"}`}
                      title={"Write a review"}
                    >
                      Submit review
                    </button>
                  </div>
                </div>
                  </>
                )}
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex items-center justify-center h-[100vh]">
            <div className="mx-auto p-8 bg-white rounded-lg shadow-md py-7">
              <div className="flex justify-center mb-6">
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
                    <p className="opacity-60">Transaction ID: CDX86Cd232</p>
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

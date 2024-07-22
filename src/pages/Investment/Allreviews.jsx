import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import vectorImage from "../../assets/images/Vector.png";
import starImage from "../../assets/images/star.png";
import filledstar from "../../assets/images/filledstars.png"
import { useState } from "react";

function Allreviews() {
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

  const [activeReview, setActiveReview] = useState("review")

  const handleClick = (item) => {
    setActiveReview(item)
  }


  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row gap-x-4 items-center min-w-max">
        <button onClick={() => navigate(-1)}>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z"
              fill="black"
            />
          </svg>
        </button>

        <div className="flex flex-row">
          <p onClick={() => navigate(-1)} className=" text-black font-medium cursor-pointer">
            Ford mustang/
          </p>
          <p className="text-custom-blue font-semibold">All reviews</p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-4">
          {activeReview === "review" && (
            <>
              {review.map((value, i) => {
                return (
                  <>
                    <div className="border p-3 rounded-xl shadow">
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
                    className={` px-5 py-3 text-sm font-semibold font-inter rounded-xl ${(activeReview === "writeReview") ? "text-white bg-custom-blue" : " text-custom-blue border-custom-blue border bg-white"}`}
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
    </>
  );
}

export default Allreviews;

import React, { useEffect } from "react";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import cwb from "../../assets/images/cwb.png";
import edit2 from "../../assets/images/edit2.png";
import radio from "../../assets/images/radio.png";
function Withdraw() {
  //   const [step, setStep] = useState(1);

  //   const nextStep = () => {
  //     setStep((prevStep) => Math.min(prevStep + 1, 2));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [dialog, setDialog] = useState(true);
  function handleClick() {
    setDialog(false);
  }
  return (
    <div>
      {dialog && (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className=" flex items-center justify-center h-[100vh]  lg:w-[30%] sm:w-[50%]">
            <div className=" mx-auto p-12 bg-white rounded-lg shadow-md  w-full py-7 ">
              <div className="flex justify-between "></div>
              <form onSubmit={handleSubmit}>
                {
                  <>
                    <div className="w-full">
                      <div className="mb-4">
                        <h2 className="lg:text-[28px] text-gray-1 font-poppins font-semibold mb-6 text-center">
                          Withdraw money
                        </h2>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor=""
                          className="text-base font-medium font-poppins text-gray-1"
                        >
                          Amount
                        </label>
                        <input
                          type="text"
                          placeholder="Type amount here"
                          className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 ring-custom-blue"
                        />
                      </div>

                      <div className="mb-4">
                        <div>
                          <div className="border border-[#6f9cff] rounded-xl">
                            <div className="flex justify-between items-center px-2 py-4">
                              <div className="flex items-center gap-3">
                                <div>
                                  <img src={radio} alt="" />
                                </div>
                                <div>
                                  <img src={cwb} alt="" />
                                </div>
                                <div>
                                  <h1 className="text-base font-semibold font-poppins text-gray-1">
                                    **** **** 1454
                                  </h1>
                                  <h1 className="text-[10px] font-normal text-gray-4 font-poppins">
                                    Canadian western bank
                                  </h1>
                                </div>
                              </div>
                              <div>
                                <button className="text-sm font-semibold font-inter bg-[#f1f5ff]  py-2 px-2 rounded-full border-gray-1">
                                  <img src={edit2} alt="" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <Button title={"Add money"} onClick={nextStep} /> */}
                    <div className="text-center">
                      <button className="text-custom-blue underline text-base font-normal font-poppins hover:text-blue-500 hover:scale-105">
                        Add new bank account
                      </button>
                    </div>
                    <div className="py-7">
                      <button
                        onClick={handleClick}
                        className="text-base font-medium font-poppins bg-custom-blue text-white rounded-xl py-[14px] px-[24px] w-full"
                      >
                        Withdraw
                      </button>
                    </div>
                  </>
                }
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Withdraw;

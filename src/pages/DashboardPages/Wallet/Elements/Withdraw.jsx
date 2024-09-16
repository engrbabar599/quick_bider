import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Input } from "components/Input";
import { Button } from "components/Button";
import cwb from "assets/images/cwb.png";
import edit2 from "assets/images/edit2.png";
import radio from "assets/images/radio.png";
import { useAddRecentTransaction } from "api/UserManagement";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

function Withdraw({ show, onClose }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [dialog, setDialog] = useState(true);
  const queryClient = useQueryClient()

  function handleClick() {
    setDialog(false);
  }

  const { mutate } = useAddRecentTransaction({
    onError: () => {
      toast.error("Transaction unsuccessfull")
    },
    onSuccess: () => {
      toast.success("Transaction successfull")
      setDialog(false)
      queryClient.invalidateQueries({ queryKey: ["useGetRecentTransaction"] })
    }
  })
  useEffect(() => { }, []);

  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  if (!show) return null

  return (
    <div>
      {dialog && (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className=" flex items-center justify-center h-[100vh]  lg:w-[30%] sm:w-[50%]">
            <div ref={popupRef}
              className=" mx-auto p-12 bg-white rounded-lg shadow-md  md:w-full py-7 w-[90%]">
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

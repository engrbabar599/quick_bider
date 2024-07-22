import React from "react";
import { useState } from "react";
import square from "../../assets/images/square.png";

export default function ReactionsPopUp({ onClose }) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [dialog, setDialog] = useState(true);
  function handleClick() {
    setDialog(false);
  }

  const [popupColor, setPopUpColor] = useState("")

  const handleColor = (items) => {
    setPopUpColor(items)
  }
  return (
    <div>
      {dialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-scroll">
          <div className="flex items-center justify-center w-full px-4">
            <div className="mx-auto p-8 bg-white rounded-lg shadow-md  py-1 ">
              <div className="flex justify-between mb-6 "></div>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="w-full xs:max-w-[90vw] md:max-w-[70vw] lg:max-w-[25vw] 2xl:max-w-[15vw] mx-auto">
                    <div className="text-center">
                      <h1 className="text-base md:text-xl font-semibold font-poppins text-gray-700">
                        Send reactions
                      </h1>
                    </div>
                    <div className="pt-9 px-5">
                      <div className="flex items-center justify-center flex-wrap gap-6">
                        <div className="bg-[#e2ebff] cursor-pointer rounded-full">
                          <h1 onClick={()=>{handleColor('green1')}} className={` cur text-sm font-normal font-roboto text-gray-1 px-[15px] py-[7px] ${(popupColor === 'green1')? "bg-sky-400 rounded-full" : "bg-[#e2ebff] rounded-full"}`}>
                            Wow! that’s great
                          </h1>{" "}
                        </div>
                        <div className="bg-[#e2ebff] cursor-pointer rounded-full">
                          <h1  onClick={()=>{handleColor('green2')}} className={` cur text-sm font-normal font-roboto text-gray-1 px-[15px] py-[7px] ${(popupColor === 'green2')? "bg-sky-400 rounded-full" : "bg-[#e2ebff] rounded-full"}`}>
                          Awesome
                          </h1>{" "}
                        </div>
                        <div className="bg-[#e2ebff] cursor-pointer rounded-full">
                          <h1  onClick={()=>{handleColor('green3')}} className={` cur text-sm font-normal font-roboto text-gray-1 px-[15px] py-[7px] ${(popupColor === 'green3')? "bg-sky-400 rounded-full" : "bg-[#e2ebff] rounded-full"}`}>
                          Wow
                          </h1>{" "}
                        </div>
                        <div className="bg-[#e2ebff] cursor-pointer rounded-full">
                          <h1  onClick={()=>{handleColor('green4')}} className={` cur text-sm font-normal font-roboto text-gray-1 px-[15px] py-[7px] ${(popupColor === 'green4')? "bg-sky-400 rounded-full" : "bg-[#e2ebff] rounded-full"}`}>
                          Wonderful
                          </h1>{" "}
                        </div>
                        <div className="bg-[#e2ebff] cursor-pointer rounded-full">
                          <h1  onClick={()=>{handleColor('green5')}} className={` cur text-sm font-normal font-roboto text-gray-1 px-[15px] py-[7px] ${(popupColor === 'green5')? "bg-sky-400 rounded-full" : "bg-[#e2ebff] rounded-full"}`}>
                          Amazing
                          </h1>{" "}
                        </div>
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/2 mx-auto py-6">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full py-3 bg-custom-blue text-sm text-white font-semibold font-inter rounded-xl"
                      >
                       Send reaction
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="w-full text-center">
                    <div className="flex justify-center items-center mb-4">
                      <span className="material-icons bg-green-500 text-white w-10 h-10 rounded-full flex justify-center items-center">
                        check
                      </span>
                    </div>
                    <div className="w-3/4 mx-auto">
                      <h1 className="text-base font-medium font-poppins text-gray-700 mb-2">
                        Reaction submited successfully!
                      </h1>
                      {/* <p className="text-sm font-normal font-poppins text-gray-400">
                        You can now invest on our portal for easy returns.
                      </p> */}
                    </div>
                    <div className="flex items-center justify-center py-2">
                      <button
                        onClick={onClose}
                        className="bg-custom-blue w-48 px-4 rounded-xl py-3 text-white text-sm font-semibold font-poppins"
                      >
                        close
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

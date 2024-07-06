import React from "react";
import { useState } from "react";
import square from "../../assets/images/square.png";

function Employees() {
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

  return (
    <div>
      {dialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-scroll">
          <div className="flex items-center justify-center w-full px-4">
            <div className="mx-auto p-8 bg-white rounded-lg shadow-md  py-1md:w-full  w-[90%]">
              <div className="flex justify-between mb-6 "></div>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="w-full xs:max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] ">
                    <div className="text-center">
                      <h1 className="text-base md:text-2xl lg:text-[28px] font-semibold font-poppins text-gray-700">
                        Activate Investment
                      </h1>
                    </div>
                    <div className="pt-9 px-5">
                      <ul className="list-decimal">
                        <li className="text-xs lg:text-lg font-normal font-poppins text-gray-700">
                          Eligibility: Users must be at least 18 years old and provide valid identification and contact information.
                        </li>
                        <li className="text-xs lg:text-lg font-normal font-poppins text-gray-700">
                          Investment Process: Funds are committed for the entire duration of the project, with no early withdrawal permitted unless explicitly stated otherwise.
                        </li>
                        <li className="text-xs lg:text-lg font-normal font-poppins text-gray-700">
                          Return on Investment: A guaranteed 21% return on the initial investment upon project completion, credited to the user’s account within [Number] days after the project’s successful completion.
                        </li>
                        <li className="text-xs lg:text-lg font-normal font-poppins text-gray-700">
                          Project Completion: Defined by achieving all predefined milestones and deliverables. Any delays or changes in project timelines will be communicated to investors promptly.
                        </li>
                        <li className="text-xs lg:text-lg font-normal font-poppins text-gray-700">
                          Risk and Disclaimer: All investments carry inherent risks. [Your Company Name] is not responsible for losses due to unforeseen circumstances beyond our control. Users are encouraged to review all investment documents and seek independent financial advice if necessary.
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center gap-3 pt-5">
                      <img src={square} alt="" className="w-5 h-5" />
                      <span className="text-xs lg:text-sm font-normal font-poppins text-gray-400">
                        I have read and agree to the Terms of Service
                      </span>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 mx-auto py-6">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full py-3 bg-custom-blue text-sm text-white font-semibold font-inter rounded-xl"
                      >
                        Activate investments
                      </button>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="w-full">
                    <div className="xs:max-w-[70vw] sm:max-w-[50vw] lg:max-w-[33vw] mx-auto">
                      <div className="text-center">
                        <h2 className="text-base md:text-2xl lg:text-[28px] font-semibold font-poppins text-gray-700 mb-6">
                          Verify to continue
                        </h2>
                        <p className="text-xs md:text-base font-normal font-poppins text-gray-400 w-[73%] mx-auto">
                          We have sent a One-Time Password (OTP) to your email address. Please check your inbox and enter the OTP to proceed.
                        </p>
                        <div className="w-3/4 mx-auto py-5">
                          <label className="text-sm text-start font-medium md:text-base font-poppins text-gray-700 mb-2 block">
                            Enter OTP
                          </label>
                          <input
                            type="text"
                            placeholder="000"
                            className="w-full px-3 py-2 border rounded-lg"
                          />
                          <div className="py-6">
                            <button
                              type="button"
                              onClick={nextStep}
                              className="w-full py-3 mt-4 text-base bg-custom-blue text-white font-medium rounded-xl font-poppins"
                            >
                              Verify
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-center pb-7">
                        <button className="text-base text-custom-blue font-normal font-poppins">
                          Resend OTP
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="w-full text-center">
                    <div className="flex justify-center items-center mb-4">
                      <span className="material-icons bg-green-500 text-white w-10 h-10 rounded-full flex justify-center items-center">
                        check
                      </span>
                    </div>
                    <div className="w-3/4 mx-auto">
                      <h1 className="text-base font-medium font-poppins text-gray-700 mb-2">
                        Investments activated successfully!
                      </h1>
                      <p className="text-sm font-normal font-poppins text-gray-400">
                        You can now invest on our portal for easy returns.
                      </p>
                    </div>
                    <div className="flex items-center justify-center py-2">
                      <button
                        onClick={handleClick}
                        className="bg-custom-blue w-48 px-4 rounded-xl py-3 text-white text-sm font-semibold font-poppins"
                      >
                        Invest now
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

export default Employees;

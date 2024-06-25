import React from "react";
import { useState } from "react";

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
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" flex items-center justify-center h-[100vh]">
            <div className=" mx-auto p-8 bg-white rounded-lg shadow-md py-7 ">
              <div className="flex justify-between mb-6"></div>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className=" md:w-[50vw] max-h-fit">
                      <div className="text-center">
                        <h1 className=" text-xl font-bold">
                          Activate Investment
                        </h1>
                      </div>
                      <div className="p-5">
                        <ul className="list-decimal">
                          <li>
                            Eligibility: Users must be at least 18 years old and
                            provide valid identification and contact
                            information.
                          </li>
                          <li>
                            Investment Process: Funds are committed for the
                            entire duration of the project, with no early
                            withdrawal permitted unless explicitly stated
                            otherwise.
                          </li>
                          <li>
                            Return on Investment: A guaranteed 21% return on the
                            initial investment upon project completion, credited
                            to the user’s account within [Number] days after the
                            project’s successful completion.
                          </li>
                          <li>
                            Project Completion: Defined by achieving all
                            predefined milestones and deliverables. Any delays
                            or changes in project timelines will be communicated
                            to investors promptly.
                          </li>
                          <li>
                            Risk and Disclaimer: All investments carry inherent
                            risks. [Your Company Name] is not responsible for
                            losses due to unforeseen circumstances beyond our
                            control. Users are encouraged to review all
                            investment documents and seek independent financial
                            advice if necessary.
                          </li>
                        </ul>
                      </div>
                      <div className=" flex items-center gap-3">
                        <input type="checkbox" className=" h-4 w-4" />
                        <span className="opacity-60">
                          I have read and agree to the Terms of Service
                        </span>
                      </div>
                      <div className="w-[15vw] mx-auto">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="w-full py-3 mt-4 bg-custom-blue text-white font-semibold rounded-lg"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className=" md:w-[25vw]">
                      <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-6 text-center">
                          Verify to continue
                        </h2>
                        <div className="w-[92%] text-center mx-auto">
                          <p className="opacity-70">
                            We have sent a One-Time Password (OTP) to your email
                            address. Please check your inbox and enter the OTP to
                            proceed.
                          </p>
                        </div>

                        <label className="block text-gray-700 mb-2 pt-6">
                          Enter OTP
                        </label>
                        <input
                          type="text"
                          placeholder="000"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full py-3 mt-4 bg-custom-blue text-white font-semibold rounded-lg"
                    >
                      Next
                    </button>
                    <div className="text-center pt-9">
                      <button className="text-custom-blue">Resend OTP</button>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
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
                          Investments activated
                          successfully!
                        </h1>
                      </div>
                      <div className="flex justify-center items-center py-2 w-[70%] text-center mx-auto">
                        <p className=" opacity-60">
                          You can now invest on our portal
                          for easy returns.
                        </p>
                      </div>
                      <div className="flex items-center justify-center py-2">
                        <button
                          onClick={handleClick}
                          className="bg-custom-blue px-14 rounded-lg py-2 text-white"
                        >
                          Invest now
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {/* Additional steps can be added here similar to step 1 */}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;

import React from "react";
import { useState } from "react";

function ClaimNow({ onClose }) {
  // const [step, setStep] = useState(1);

  // const nextStep = () => {
  //   setStep((prevStep) => Math.min(prevStep + 1, 2));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const [dialog, setDialog] = useState(true);
  // function handleClick() {
  //   setDialog(false);
  // }
  return (
    <div>
      {
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" flex items-center justify-center h-[100vh]">
            <div className=" mx-auto p-8 bg-white rounded-lg shadow-md py-7 ">
              <div className="flex justify-between mb-6"></div>
              <form onSubmit={handleSubmit}>
                {
                  <>
                    <div className="w-[25vw]">
                      <h2 className="text-2xl font-semibold mb-6 text-center">
                        Claim now
                      </h2>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="$00"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Phone no
                        </label>
                        <input
                          type="text"
                          placeholder="+1"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Type email"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          placeholder="Type address here"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>

                      <div className="relative pb-[100px] flex justify-around items-center ">
                        <div className=" ">
                          <label className="border cursor-pointer rounded-lg px-8 py-5 absolute top-0 left-0 block text-gray-700 mb-2">
                            <p className="flex items-center justify-center">
                            
                              <span class="material-icons">images</span>
                            </p>
                            Upload photo
                            <input
                              className="hidden w-1/2 px-3 py-2 border rounded-lg"
                              type="file"
                            />
                          </label>
                        </div>
                        <div className=" ">
                          <label className="border cursor-pointer rounded-lg px-8 py-5 absolute top-0 right-0 block text-gray-700 mb-2">
                            <p className="flex items-center justify-center">
                              
                              <span class="material-icons">movie</span>
                            </p>
                            upload video
                            <input
                              className="hidden w-1/2 px-3 py-2 border rounded-lg"
                              type="file"
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      // onClick={nextStep}
                      onClick={onClose}
                      className="w-full py-3 mt-4 bg-blue text-white font-semibold rounded-lg"
                    >
                      Submit claim
                    </button>

                    <div className="text-center pt-9">
                      <button className="text-blue underline">
                        + add new card
                      </button>
                    </div>
                  </>
                }

                {/* Additional steps can be added here similar to step 1 */}
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default ClaimNow;

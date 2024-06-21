import React from "react";
import { useState } from "react";

function Employees() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 2));
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
      { dialog &&
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" flex items-center justify-center h-[100vh]">
            <div className=" mx-auto p-8 bg-white rounded-lg shadow-md py-7 ">
              <div className="flex justify-between mb-6"></div>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="w-[25vw]">
                      <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-6 text-center">
                          Add money to wallet
                        </h2>
                        <label className="block text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Name here"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Full Name
                        </label>
                        <select
                          className="w-full px-3 py-2 border rounded-lg"
                          name=""
                          id=""
                        >
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full py-3 mt-4 bg-blue text-white font-semibold rounded-lg"
                    >
                      Next
                    </button>
                    <div className="text-center pt-9">
                      <button className="text-blue underline">
                        + add new card
                      </button>
                    </div>
                  </>
                )}

                {step === 2 && (
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
                          Added to wallet successfully!
                        </h1>
                      </div>
                      <div className="flex justify-center items-center py-2">
                        <p className=" opacity-60">
                          Transaction ID: CDX86Cd232
                        </p>
                      </div>
                      <div className="flex items-center justify-center py-2">
                        <button
                          onClick={handleClick}
                          className="bg-blue px-14 rounded-lg py-2 text-white"
                        >
                          Close
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
      }
    </div>
  );
}

export default Employees;

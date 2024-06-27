import React, { useEffect } from "react";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

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


  useEffect(() => {

  }, [])
  return (

    <div>
      {dialog &&
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className=" flex items-center justify-center h-[100vh]  md:w-2/5 w-[90%]">
            <div className=" mx-auto p-8 bg-white rounded-lg shadow-md  w-full py-7 ">
              <div className="flex justify-between "></div>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="w-full">
                      <div className="mb-4">
                        <h2 className="md:text-2xl font-semibold mb-6 text-center">
                          Add money to wallet
                        </h2>
                        <Input
                          label={"Amount"}
                          placeholder={"$00"}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-medium">
                          Select Card
                        </label>
                        <select
                          className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 ring-custom-blue"
                          name=""
                          id=""
                        >
                          <option value="">*** *** 2922</option>
                          <option value="">*** *** 4457</option>
                          <option value="">*** *** 4769</option>
                        </select>
                      </div>
                    </div>

                    <Button
                      title={"Add money"}
                      onClick={nextStep}
                    />

                    <div className="text-center pt-9">
                      <button className="text-custom-blue underline hover:text-blue-500 hover:scale-105">
                        + Add new card
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
                        <h1 className="text-custom-green font-semibold">$500</h1>
                      </div>
                      <div className="w-[60%] mx-auto">
                        <h1 className="text-center font-semibold text-gray-1">
                          Added to wallet successfully!
                        </h1>
                      </div>
                      <div className="flex justify-center items-center py-2">
                        <p className=" text-gray-4 text-sm">
                          Transaction ID: CDX86Cd232
                        </p>
                      </div>
                      <div className="flex items-center justify-center py-2 w-full">

                        <Button
                          className={"md:w-2/5 "}
                          title={"Close"}
                          onClick={handleClick} />
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

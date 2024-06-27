import React from "react";
import { useState } from "react";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

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
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className=" flex items-center justify-center ">
            <div className=" mx-auto p-8 bg-white rounded-lg shadow-md xs:py-7 md:py-2 w-[90%] md:w-full">
              <div className="flex justify-between md:mb-6"></div>
              <form onSubmit={handleSubmit}>
                {
                  <>
                    <div className="xs:w-[90vw] md:w-[30vw]">
                      <h2 className="lg:text-2xl text-xl font-semibold mb-4 text-center">
                        Claim now
                      </h2>
                      <div className="mb-4">
                        <Input
                          label={"Full name"}
                          placeholder={"Type full name"}

                        />
                      </div>
                      <div className="mb-4">
                        <Input
                          label={"Phone no"}
                          placeholder={"+1 000000"}
                        />
                      </div>
                      <div className="mb-4">
                        <Input
                          type={"email"}
                          label={"Email"}
                          placeholder={"Type email id"} />
                      </div>
                      <div className="mb-4">
                        <Input
                          label={"Address"}
                          placeholder={"Type address here"}
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


                    <div className="py-5">

                      <Button
                        onClick={onClose}
                        title={"Submit claim"}
                      />
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

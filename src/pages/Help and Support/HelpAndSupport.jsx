import React from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

function HelpAndSupport() {
  return (
    <>
      <div className=" mx-auto md:p-4">
        <div className="md:px-4">
          <h2 className="md:text-2xl text-lg font-medium">Send enquiry</h2>
        </div>
        <div className=" rounded md:p-4 py-4 md:grid gap-6 md:grid-cols-3 flex flex-col ">
          <form className="md:col-span-2 shadow-lg p-4 border rounded-lg">
            <div className="grid gap-4 md:grid-cols-2 ">
              <div>
                <Input
                  label={"Full name"}
                  placeholder={"Full name"}
                />
              </div>
              <div>
                <Input
                  label={"Last name"}
                  placeholder={"Last name"}
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div>
                <Input
                  label={"Phone number"}
                  placeholder={"+1"}
                />
              </div>
              <div>
                <Input
                  label={"Email ID"}
                  placeholder={"Email id"}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-1 font-medium">Your message</label>
              <textarea
                placeholder="Type your message here"
                className="mt-1 p-2 w-full border rounded-lg h-32 resize-none focus:ring-2 ring-custom-blue outline-none"
              ></textarea>
            </div>
            <div className="w-full flex justify-center mt-6">
              <Button
                className={"md:w-1/5"}
                title={"Submit"}
              />
            </div>
          </form>
          <div className="space-y-4">
            <div className="border p-4 rounded-md flex items-center shadow gap-5 cursor-pointer">
              <div>
                <p className="w-[50px] h-[50px] bg-[#c3d2f254] flex justify-center items-center rounded-full">
                  <span className="material-icons text-custom-blue">email</span>
                </p>
              </div>
              <div>
                <p className=" font-medium text-gray-1">Contact us by email</p>
                <p className="text-custom-blue text-xs  font-normal">support@quickbet.com</p>
              </div>
            </div>
            <div className="border rounded-md shadow p-4 flex items-center gap-5 cursor-pointer">
              <div>
                <p className="w-[50px] h-[50px] bg-[#c3d2f254] flex justify-center items-center rounded-full">
                  <span className="material-icons text-custom-blue">phone</span>
                </p>
              </div>
              <div>
                <p className=" font-medium">Give us a call</p>
                <p className="text-custom-blue text-xs font-normal">+12 3456 7890</p>
              </div>
            </div>
            <div className="border p-4 rounded-md shadow flex items-center gap-5 cursor-pointer">
              <div>
                <p className="w-[50px] h-[50px] bg-[#c3d2f254] flex justify-center items-center rounded-full">
                  <span className="material-icons text-custom-blue">chat</span>
                </p>
              </div>
              <div>
                <p className=" font-medium">Let’s chat</p>
                <p className="text-gray-4 text-xs font-normal">Open live chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpAndSupport;

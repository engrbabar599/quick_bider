import React from "react";

function HelpAndSupport() {
  return (
    <>
      <div className=" mx-auto md:p-4">
        <div className="px-4">
            <h2 className="text-2xl font-medium">Send enquiry</h2>
        </div>
        <div className=" rounded p-4 md:grid gap-6 md:grid-cols-3 flex flex-col ">
          <form className="md:col-span-2 shadow-lg p-4 border rounded-lg">
            <div className="grid gap-4 md:grid-cols-2 ">
              <div>
                <label className="block text-gray-700 font-medium">Full name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="mt-1 p-2 w-full border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="mt-1 p-2 w-full border rounded-lg"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div>
                <label className="block text-gray-700 font-medium">Phone number</label>
                <input
                  type="text"
                  placeholder="+1"
                  className="mt-1 p-2 w-full border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email ID</label>
                <input
                  type="email"
                  placeholder="Email id"
                  className="mt-1 p-2 w-full border rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">Your message</label>
              <textarea
                placeholder="Type your message here"
                className="mt-1 p-2 w-full border rounded-lg h-32"
              ></textarea>
            </div>
            <div className="text-center">
              <button className=" bg-custom-blue text-sm font-semibold text-white px-12 py-3 rounded-lg hover:bg-white hover:text-custom-blue hover:border hover:border-custom-blue mt-4">
                Submit
              </button>
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
                <p className=" font-medium">Contact us by email</p>
                <p className="text-custom-blue md:text-xs lg:text-sm font-normal">support@quickbet.com</p>
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
                <p className="text-custom-blue text-sm font-normal">+12 3456 7890</p>
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
                <p className="text-custom-blue text-sm font-normal">Open live chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpAndSupport;

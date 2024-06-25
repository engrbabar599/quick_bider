import React from "react";

function HelpAndSupport() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="border rounded p-6 grid gap-6 md:grid-cols-3">
          <form className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Send enquiry</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-gray-700">Full name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div>
                <label className="block text-gray-700">Phone number</label>
                <input
                  type="text"
                  placeholder="+1"
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email ID</label>
                <input
                  type="email"
                  placeholder="Email id"
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Your message</label>
              <textarea
                placeholder="Type your message here"
                className="mt-1 p-2 w-full border rounded h-32"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="mx-auto bg-custom-blue text-white px-6 py-2 rounded-lg hover:bg-custom-blue-600 mt-4">
                submit
              </button>
            </div>
          </form>
          <div className="space-y-4">
            <div className="border p-4 rounded-md flex items-center shadow gap-5 cursor-pointer">
              <div>
                <p className="w-[50px] h-[50px] bg-[#c3d2f254] flex justify-center items-center rounded-full">
                  <span className="material-icons text-custom-blue ">email</span>
                </p>
              </div>
              <div>
                <p className="">Contact us by email</p>
                <p className="text-custom-blue">support@quickbet.com</p>
              </div>
            </div>
            <div className="border rounded-md shadow p-4 flex items-center gap-5 cursor-pointer">
              <div>
                <p className="w-[50px] h-[50px] bg-[#c3d2f254] flex justify-center items-center rounded-full">
                  <span className="material-icons text-custom-blue">phone</span>
                </p>
              </div>
              <div>
                <p className="">Give us a call</p>
                <p className="text-custom-blue">+12 3456 7890</p>
              </div>
            </div>
            <div className="border p-4 rounded-md shadow flex items-center gap-5 cursor-pointer">
              <div>
                <p className="w-[50px] h-[50px] bg-[#c3d2f254] flex justify-center items-center rounded-full">
                  <span className="material-icons text-custom-blue">chat</span>
                </p>
              </div>
              <div>
                <p className="">Let’s chat</p>
                <p className="text-custom-blue">Open live chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpAndSupport;

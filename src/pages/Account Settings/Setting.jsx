import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function Setting() {
  const tabs = [
    "Account",
    "Security",
    "Bank details",
    "Notifications",
    "Privacy policy",
  ];
  const [activeTab, setActiveTab] = useState("Account");

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [sendToEmail, setSendToEmail] = useState(false);
  const [sendToPhone, setSendToPhone] = useState(false);

  const ToggleSwitch = ({ enabled, setEnabled }) => (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-custom-blue" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
      />
    </Switch>
  );

  return (
    <>
    <div className=" px-5 ">
          <h1 className=" text-2xl font-medium font-poppins">
            Settings
          </h1>
        </div>
      <div className=" md:w-[60%]  border rounded-lg p-5 m-5">
        <div className="flex flex-wrap justify-center sm:justify-start space-x-0 sm:space-x-4 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-1 mx-1 sm:mx-0  text-base font-normal ${activeTab === tab
                ? "border-b-2 border-blue text-custom-blue font-medium opacity-100"
                : "text-gray-600 hover:border-b-2 hover:border-blue opacity-60"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Account" && (
          <>
            <div className="border-b-[1px]">
              <div className="flex flex-col gap-2 sm:flex-row items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="w-24 h-24 rounded-lg mr-4 mb-4 sm:mb-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl font-medium">Robert Fox</h2>
                  <p className="text-[#828282] font-normal text-lg">robertfox@gmail.com</p>
                </div>
                <button className="ml-0 sm:ml-auto border border-blue  text-custom-blue xs:px-1 md:px-4  py-2 rounded-lg hover:bg-custom-blue hover:text-white">
                  Update Profile Picture
                </button>
              </div>
            </div>
            <div className="pt-5">
              <div>
                <h1 className="font-medium text-base">Personal details</h1>
              </div>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                  <div className="w-full">
                    <label className="block font-medium text-base">Full name</label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block font-medium">Last name</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full">
                    <label className="block font-medium">Phone number</label>
                    <input
                      type="text"
                      placeholder="+1"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block font-medium">Email ID</label>
                    <input
                      type="text"
                      placeholder="Email id"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full">
                    <label className="block font-medium">Street address</label>
                    <input
                      type="text"
                      placeholder="Type address"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block font-medium">Zip code</label>
                    <input
                      type="text"
                      placeholder="Type nearby location"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full">
                    <label className="block font-medium">City</label>
                    <input
                      type="text"
                      placeholder="Type city name"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block font-medium">Province</label>
                    <input
                      type="text"
                      placeholder="Type province name"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button className="mx-auto bg-custom-blue text-white px-14 py-2 rounded-lg hover:bg-custom-blue-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {activeTab === "Security" && (
          <>
            <div className="pt-6">
              <div>
                <h1 className="font-medium">Update pasword</h1>
              </div>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                  <div className="w-full">
                    <label className="block font-medium">New password</label>
                    <input
                      type="text"
                      placeholder="Type new password"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block font-medium">
                      Confirm new password
                    </label>
                    <input
                      type="text"
                      placeholder="Confirm new password"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button className="mx-auto bg-custom-blue text-white px-8 py-2 rounded-lg hover:bg-custom-blue-600">
                    Update password
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
        {activeTab === "Bank details" && (
          <>
            <div className="pt-6">
              <div>
                <h1 className="font-medium">Bank details</h1>
              </div>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                  <div className="w-full">
                    <label className="block font-medium">Account number</label>
                    <input
                      type="text"
                      placeholder="343535434333"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block font-medium">
                      Confirm account number
                    </label>
                    <input
                      type="text"
                      placeholder="343535434333"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full">
                    <label className="block font-medium">IFSC code</label>
                    <input
                      type="text"
                      placeholder="ICIC00033343"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block font-medium">Bank name</label>
                    <input
                      type="text"
                      placeholder="ICICI bank"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full">
                    <label className="block font-medium">Name on account</label>
                    <input
                      type="text"
                      placeholder="Robert Fox"
                      className="w-1/2 p-2 border rounded"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button className="mx-auto bg-custom-blue text-white px-8 py-3 rounded-lg hover:bg-custom-blue-600">
                    Update bank details
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
        {activeTab === "Notifications" && (
          <>
            <div className="pt-6 w-[100%]">
              <div>
                <h1 className="font-medium">Notifications</h1>
              </div>

              <div className="pt-6">
                <div className="flex items-center justify-between mb-4 border-b-[1px] pb-3 px-2">
                  <label className="text-gray-700 font-medium">Notifications</label>
                  <ToggleSwitch
                    enabled={notificationsEnabled}
                    setEnabled={setNotificationsEnabled}
                  />
                </div>
                <div className="flex items-center justify-between mb-4 border-b-[1px] pb-3 px-2">
                  <label className="text-gray-700 font-medium">
                    Notifications Sound
                  </label>
                  <ToggleSwitch
                    enabled={soundEnabled}
                    setEnabled={setSoundEnabled}
                  />
                </div>
                <div className="flex items-center justify-between mb-4 border-b-[1px] pb-3 px-2">
                  <label className="text-gray-700 font-medium">
                    Send to email id
                  </label>
                  <ToggleSwitch
                    enabled={sendToEmail}
                    setEnabled={setSendToEmail}
                  />
                </div>
                <div className="flex items-center justify-between border-b-[1px] pb-3 px-2">
                  <label className="text-gray-700 font-medium">Send to phone</label>
                  <ToggleSwitch
                    enabled={sendToPhone}
                    setEnabled={setSendToPhone}
                  />
                </div>
                <div className="text-center pt-6">
                  <button className="mx-auto bg-custom-blue text-white px-8 py-3 rounded-lg hover:bg-custom-blue-600">
                    Update settings
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "Privacy policy" && <p>Privacy Policy</p>}
      </div>
    </>
  );
}

export default Setting;

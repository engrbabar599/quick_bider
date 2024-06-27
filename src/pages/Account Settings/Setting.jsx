import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import IMAGES from "../../assets/IMAGES";
import { OutlineButton } from "../../components/OutlineButton";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

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
        <h1 className=" text-2xl font-medium font-poppins text-gray-1">
          Settings
        </h1>
      </div>
      <div className=" md:w-[60%]  border rounded-lg p-5 m-5 flex flex-col gap-4 ">
        <div className="overflow-x-auto">

          <div className="flex flex-wrap  min-w-max flex-row gap-6 justify-center sm:justify-start space-x-0 sm:space-x-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`pb-1 mx-1 sm:mx-0  text-base font-normal ${activeTab === tab
                  ? "border-b-2 border-custom-blue text-custom-blue font-medium "
                  : "text-gray-4 hover:border-b-2 hover:border-custom-blue"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>


        {activeTab === "Account" && (
          <>
            <div className="border-b-[1px]">
              <div className="flex flex-col gap-2 sm:flex-row items-center mb-4">
                <img
                  src={IMAGES.profilePic}
                  alt="Profile"
                  className="w-24 h-24 rounded-lg mr-4 mb-4 sm:mb-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl font-medium">Robert Fox</h2>
                  <p className="text-[#828282] font-normal text-lg">robertfox@gmail.com</p>
                </div>
                <div>
                  <OutlineButton
                    className={"px-4"}
                    title={"Update Profile Picture"}
                  />
                </div>
              </div>
            </div>
            <div className="pt-3">
              <div>
                <h1 className="font-medium text-base">Personal details</h1>
              </div>
              <form className="space-y-8">
                <div className="space-y-5">

                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                    <div className="w-full">
                      <Input
                        label={"Full name"}
                        placeholder={"Full name"}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        label={"Last name"}
                        placeholder={"Last name"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <Input
                        type={"number"}
                        label={"Phone Number"}
                        placeholder={"+1"}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        label={"Email ID"}
                        placeholder={"Email id"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <Input
                        label={"Street address"}
                        placeholder={"Type address"}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        label={"Zip code"}
                        placeholder={"Type nearby location"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <Input
                        label={"City"}
                        placeholder={"Type city name"}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        label={"Province"}
                        placeholder={"Type province name"}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full text-center flex items-center justify-center">
                  <Button
                    className={"md:w-2/5 self-center items-center"}
                    title={"Submit"}
                  />
                </div>
              </form>
            </div>
          </>
        )}

        {activeTab === "Security" && (
          <>
            <div className="space-y-2">
              <div>
                <h1 className="font-medium text-gray-1 text-base">Update pasword</h1>
              </div>
              <form className="space-y-8">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                  <div className="w-full">
                    <Input
                      label={"New password"}
                      placeholder={"Type new password"} />
                  </div>
                  <div className="w-full">
                    <Input
                      label={"Confirm new password"}
                      placeholder={"Confirm new password"} />
                  </div>
                </div>
                <div className="text-center w-full">
                  <Button
                    className={"md:w-2/5"}
                    title={"Update password"}
                  />
                </div>
              </form>
            </div>
          </>
        )}
        {activeTab === "Bank details" && (
          <>
            <div className="">
              <div>
                <h1 className="font-medium text-gray-1 text-base">Bank details</h1>
              </div>
              <form className="space-y-8">
                <div className="space-y-4">

                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                    <div className="w-full">
                      <Input
                        label={"Account number"}
                        placeholder={"343535434333"} />
                    </div>
                    <div className="w-full">
                      <Input
                        label={"Confirm account number"}
                        placeholder={"343535434333"} />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <Input
                        label={"IFSC code"}
                        placeholder={"ICIC00033343"} />
                    </div>
                    <div className="w-full">
                      <Input
                        label={"Bank name"}
                        placeholder={"ICICI bank"} />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="md:w-2/4 w-full">
                      <Input
                        label={"Name on account"}
                        placeholder={"Robert Fox"} />
                    </div>
                  </div>
                </div>


                <div className="text-center w-full">
                  <Button
                    className={"md:w-2/5"}
                    title={"Update bank details"}
                  />
                </div>
              </form>
            </div>
          </>
        )}
        {activeTab === "Notifications" && (
          <>
            <div className=" w-[100%]">
              <div>
                <h1 className="font-medium">Notifications</h1>
              </div>

              <div className="pt-6">
                <div className="flex items-center justify-between mb-4 border-b-[1px] pb-3 px-2">
                  <label className="text-gray-1 font-medium">Notifications</label>
                  <ToggleSwitch
                    enabled={notificationsEnabled}
                    setEnabled={setNotificationsEnabled}
                  />
                </div>
                <div className="flex items-center justify-between mb-4 border-b-[1px] pb-3 px-2">
                  <label className="text-gray-1 font-medium">
                    Notifications Sound
                  </label>
                  <ToggleSwitch
                    enabled={soundEnabled}
                    setEnabled={setSoundEnabled}
                  />
                </div>
                <div className="flex items-center justify-between mb-4 border-b-[1px] pb-3 px-2">
                  <label className="text-gray-1 font-medium">
                    Send to email id
                  </label>
                  <ToggleSwitch
                    enabled={sendToEmail}
                    setEnabled={setSendToEmail}
                  />
                </div>
                <div className="flex items-center justify-between border-b-[1px] pb-3 px-2">
                  <label className="text-gray-1 font-medium">Send to phone</label>
                  <ToggleSwitch
                    enabled={sendToPhone}
                    setEnabled={setSendToPhone}
                  />
                </div>
                <div className="w-full items-center flex justify-center pt-5">
                  <Button
                    className={"md:w-2/5"}
                    title={"Update Settings"} />
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

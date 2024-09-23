import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import IMAGES from "../../../assets/IMAGES";
import { OutlineButton } from "../../../components/OutlineButton";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { DashboardLayout } from "components/Layout";
import { useGetUserProfile, useUpdateUserProfile } from "api/UserManagement";
import { toast } from "react-toastify";
import { useSettingsHelper } from "./helper";
import Spinner from "components/Spinner";
import { Formik } from "formik";
import Svgs from "assets/svgs";
import { UserProfileSkeleton } from "components/Skeleton/Components/Settings/UserProfileSkeleton";

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

const TABS = [
  "Account",
  "Security",
  "Bank details",
  "Notifications",
  "Privacy policy",
];

function Setting() {

  const {
    fileInputRef,
    formikRef,
    // state
    activeTab, setActiveTab,
    previewProfileImage, setPreviewProfileImage,
    notificationPreferences, setNotificationPreferences,
    // api
    userData, isLoadingUserData,
    updatedUserData,
    isUpdating,
    // functions
    handleImageUpload,
    handleUpdateProfile,
    handleChangeUserData

  } = useSettingsHelper()

  return (
    <DashboardLayout activeSidebar={"Settings"}>
      <div className="flex flex-col gap-5">
        <h1 className=" text-2xl font-medium font-poppins text-gray-1">
          Settings
        </h1>
        <div className=" lg:w-[60%]  border rounded-lg p-5 flex flex-col gap-4 ">
          <div className="overflow-x-auto">

            <div className="flex flex-wrap  min-w-max flex-row gap-6 justify-center sm:justify-start space-x-0 sm:space-x-4 mb-4">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`pb-1 mx-1 sm:mx-0  text-base font-normal  ease-in-out duration-75 ${activeTab === tab
                    ? "border-b-2 border-custom-blue text-custom-blue font-medium "
                    : "text-gray-4 hover:border-b-2 hover:border-custom-blue hover:text-custom-blue"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>


          {activeTab === "Account" && (
            isLoadingUserData ?
              <UserProfileSkeleton />
              :
              <>
                <div className="border-b-[1px]">
                  <div className="flex flex-col gap-2 sm:flex-row items-center mb-4">
                    <div className="relative border-">
                      {userData?.display_pic || previewProfileImage ?
                        <img
                          src={
                            previewProfileImage ? previewProfileImage : userData?.display_pic?.length > 0 ? userData?.display_pic : IMAGES.profilePic
                          }
                          alt="Profile"
                          className="w-24 h-24 rounded-xl mr-4 mb-4 sm:mb-0 border object-cover"
                        />
                        :
                        <div
                          className="bg-custom-blue flex items-center justify-center text-white w-24 h-24  rounded-xl text-4xl capitalize mr-4 mb-4 sm:mb-0  ">
                          {updatedUserData?.first_name[0]}{updatedUserData?.last_name[0]}
                        </div>
                      }

                      <button
                        disabled={previewProfileImage === null}
                        onClick={() => {
                          setPreviewProfileImage(null)
                        }}
                        className={` bg-white rounded-full  opacity-0 transition-opacity duration-300 ease-in-out absolute -top-1 right-2 ${previewProfileImage ? 'opacity-100' : 'opacity-0'}`}>
                        <Svgs.RedCrossIcon />
                      </button>


                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <h2 className="text-xl font-medium font-poppins text-gray-1 capitalize">
                        {updatedUserData?.first_name} {updatedUserData?.last_name}
                      </h2>
                      <p className="text-[#828282] font-poppins font-normal text-lg pt-3 ">
                        {updatedUserData?.email}
                      </p>
                    </div>
                    <div>

                      <label htmlFor="uploadProfile">
                        <Button
                          customTheme={'btn-outline'}
                          onClick={() => {
                            if (fileInputRef.current) {
                              fileInputRef.current.click(); // Trigger click on the hidden file input
                            }
                          }}
                          className="px-4 text-sm font-normal font-poppins"
                          title="Update Profile Picture"
                        />
                      </label>
                      <input
                        type="file"
                        name="uploadProfile"
                        id="uploadProfile" // Associate the label with this ID
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                        ref={fileInputRef}
                      />

                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  <div>
                    <h1 className="font-medium text-base font-poppins">
                      Personal details
                    </h1>
                  </div>

                  <Formik
                    innerRef={formikRef}
                    enableReinitialize
                    initialValues={updatedUserData}
                    onSubmit={() => {
                      handleUpdateProfile(updatedUserData)
                    }}
                  >
                    {({
                      values,
                      handleBlur,
                      handleChange,
                      errors,
                      handleSubmit
                    }) => (
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-8">
                        <div className="space-y-5">
                          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                            <div className="w-full">
                              <Input
                                label={"First name"}
                                placeholder={"First name"}
                                value={values?.first_name}
                                name={'first_name'}
                                onChange={(e) => {
                                  handleChange(e)
                                  handleChangeUserData(e)
                                }}
                                onBlur={handleBlur}
                              />
                            </div>
                            <div className="w-full">
                              <Input
                                label={"Last name"}
                                placeholder={"Last name"}
                                value={values?.last_name}
                                name={'last_name'}
                                onChange={(e) => {
                                  handleChange(e)
                                  handleChangeUserData(e)
                                }}
                                onBlur={handleBlur}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <div className="w-full">
                              <Input
                                type={"number"}
                                label={"Phone Number"}
                                placeholder={"+1"}
                                value={values?.phone_number}
                                name={'phone_number'}
                                onChange={(e) => {
                                  handleChange(e)
                                  handleChangeUserData(e)
                                }}
                                onBlur={handleBlur}
                              />
                            </div>
                            <div className="w-full">
                              <Input
                                label={"Email ID"}
                                placeholder={"Email id"}
                                value={values?.email}
                                name={'email'}
                                onChange={(e) => {
                                  handleChange(e)
                                  handleChangeUserData(e)
                                }}
                                onBlur={handleBlur}
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
                            type={"submit"}
                            className={"md:w-2/5 text-sm  font-inter self-center items-center"}
                            title={isUpdating ?
                              <Spinner height={20} /> :
                              "Submit"}
                          />
                        </div>
                      </form>
                    )}

                  </Formik>


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
                      enabled={notificationPreferences.notificationsEnabled}
                      setEnabled={() => {
                        setNotificationPreferences({ ...notificationPreferences, notificationsEnabled: !notificationPreferences.notificationsEnabled })
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between mb-4 border-b-[1px] pb-3 px-2">
                    <label className="text-gray-1 font-medium">
                      Notifications Sound
                    </label>
                    <ToggleSwitch
                      enabled={notificationPreferences?.soundEnabled}
                      setEnabled={() => {
                        setNotificationPreferences({ ...notificationPreferences, soundEnabled: !notificationPreferences?.soundEnabled })
                      }} />
                  </div>
                  <div className="flex items-center justify-between mb-4 border-b-[1px] pb-3 px-2">
                    <label className="text-gray-1 font-medium">
                      Send to email id
                    </label>
                    <ToggleSwitch
                      enabled={notificationPreferences?.sendToEmail}
                      setEnabled={() => {
                        setNotificationPreferences({ ...notificationPreferences, sendToEmail: !notificationPreferences.sendToEmail })
                      }} />
                  </div>
                  <div className="flex items-center justify-between border-b-[1px] pb-3 px-2">
                    <label className="text-gray-1 font-medium">Send to phone</label>
                    <ToggleSwitch
                      enabled={notificationPreferences?.sendToPhone}
                      setEnabled={() => {
                        setNotificationPreferences({ ...notificationPreferences, sendToPhone: !notificationPreferences.sendToPhone })
                      }} />
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
      </div>

    </DashboardLayout >
  );
}

export default Setting;

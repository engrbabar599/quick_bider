import React from "react";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { DashboardLayout } from "components/Layout";
import { Formik } from "formik";
import { useSupportHelper } from "./helper";
import Spinner from "components/Spinner";
import Svgs from "assets/svgs";

function HelpAndSupport() {

  const { enquirySchema, formikRef, isSendingEnquiry, sendEnquiry } = useSupportHelper()

  return (
    <DashboardLayout activeSidebar={"Help & Support"}>
      <div className="  ">
        <h2 className="md:text-2xl font-poppins font-medium">Send enquiry</h2>
        <div className=" rounded  py-4 lg:grid gap-6 lg:grid-cols-3 flex flex-col ">

          <Formik
            innerRef={formikRef}
            validationSchema={enquirySchema}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              first_name: "",
              last_name: "",
              phone_number: "",
              email: "",
              message: ""
            }}
            onSubmit={(values) => {
              sendEnquiry(values)
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              setErrors,
              touched,
              isSubmitting,
              isValidating,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="md:col-span-2 shadow-lg p-4 border rounded-lg">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                  <div className="w-full flex flex-col gap-2">
                    <Input
                      value={values?.first_name}
                      label={"First name"}
                      placeholder={"First name"}
                      name={"first_name"}
                      onChange={(e) => {
                        setErrors({ ...errors, [e.target.name]: "" })
                        handleChange(e)
                      }}
                      error={errors?.first_name && touched?.first_name}
                    />
                    {errors?.first_name && touched?.first_name &&
                      <span className="text-xs text-custom-red">
                        {errors?.first_name}
                      </span>
                    }
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Input
                      label={"Last name"}
                      placeholder={"Last name"}
                      name={"last_name"}
                      value={values?.last_name}
                      error={errors?.last_name && touched?.last_name}
                      onChange={(e) => {
                        setErrors({ ...errors, [e.target.name]: "" })
                        handleChange(e)
                      }} />
                    {errors?.last_name && touched?.last_name &&
                      <span className="text-xs text-custom-red">
                        {errors?.last_name}
                      </span>
                    }
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
                  <div className="w-full flex flex-col gap-2">
                    <Input
                      label={"Phone number"}
                      placeholder={"+1"}
                      value={values?.phone_number}
                      onChange={(e) => {
                        setErrors({ ...errors, [e.target.name]: "" })
                        handleChange(e)
                      }}
                      name={"phone_number"}
                      error={errors?.phone_number && touched?.phone_number}
                    />
                    {errors?.phone_number && touched?.phone_number &&
                      <span className="text-xs text-custom-red
                      ">
                        {errors?.phone_number}
                      </span>
                    }
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Input
                      label={"Email ID"}
                      placeholder={"Email id"}
                      value={values?.email}
                      onChange={(e) => {
                        setErrors({ ...errors, [e.target.name]: "" })
                        handleChange(e)
                      }}
                      name={"email"}
                      error={errors?.email && touched?.email}

                    />
                    {errors?.email && touched?.email &&
                      <span className="text-xs text-custom-red">
                        {errors?.email}
                      </span>
                    }
                  </div>
                </div>
                <div className="mt-4">

                  <label className="block text-gray-1 font-medium">
                    Your message
                  </label>
                  <div className="flex flex-col gap-2">

                    <textarea
                      value={values?.message}
                      onChange={(e) => {
                        setErrors({ ...errors, [e.target.name]: "" })
                        handleChange(e)
                      }}
                      placeholder="Type your message here"
                      name="message"
                      className={`${errors?.message && touched?.message ? " ring-custom-red ring-1" : ""} mt-1 p-2 w-full border rounded-lg h-32 resize-none focus:ring-2 ring-custom-blue outline-none `}
                    ></textarea>

                    {errors?.message && touched?.message &&
                      <span className="text-xs text-custom-red">
                        {errors?.message}
                      </span>
                    }
                  </div>

                </div>
                <div className="w-full flex justify-center mt-6">
                  <Button
                    className={"md:w-2/5 text-sm text-[#FFFFFF] font-semibold font-inter rounded-xl "}
                    title={isSendingEnquiry || isValidating ?
                      <Spinner
                        height={20}
                      /> :

                      "Submit"}
                  />
                </div>
              </form>
            )}

          </Formik>


          <div className="space-y-4">
            <div className="border p-4 rounded-md flex items-center shadow gap-5 cursor-pointer">
              <div>
                <p className="w-[50px] h-[50px]  bg-custom-blue bg-opacity-10 flex justify-center items-center rounded-full">
                  <Svgs.HelpScreenEmailIcon />
                </p>
              </div>
              <div>
                <p className=" font-medium text-gray-1">Contact us by email</p>
                <p className="text-custom-blue text-xs  font-normal">support@quickbet.com</p>
              </div>
            </div>
            <div className="border rounded-md shadow p-4 flex items-center gap-5 cursor-pointer">
              <div>
                <p className="w-[50px] h-[50px]  bg-custom-blue bg-opacity-10 flex justify-center items-center rounded-full">
                  <Svgs.HelpScreenPhoneIcon />
                </p>
              </div>
              <div>
                <p className=" font-medium">Give us a call</p>
                <p className="text-custom-blue text-xs font-normal">+12 3456 7890</p>
              </div>
            </div>
            <div className="border p-4 rounded-md shadow flex items-center gap-5 cursor-pointer">
              <div>
                <p className="w-[50px] h-[50px] bg-custom-blue bg-opacity-10 flex justify-center items-center rounded-full">
                  <Svgs.HelpScreenChatIcon />
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
    </DashboardLayout>
  );
}

export default HelpAndSupport;

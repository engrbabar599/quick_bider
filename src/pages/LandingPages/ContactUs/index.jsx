import React, { useRef } from "react";
import background from "assets/images/Background.png"
import callIcon from "assets/images/Icon_Call.png"
import emailIcon from "assets/images/Icon_Email.png"
import supportIcon from "assets/images/Icon_CS.png"
import { LandingPageLayout } from "components/LandingPagesLayout";
import { Button } from "components/Button";
import { Input } from "components/Input";
import * as Yup from "yup"
import { Formik } from "formik";
import { useAddContactUs } from "api/AppUtils";
import Spinner from "components/Spinner";
import { toast } from "react-toastify";
import Svgs from "assets/svgs";

export const ContactUsPage = () => {
    const formikRef = useRef();

    const contactSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().matches("\b[\w\.-]+ @[\w\.-] +\.\w{ 2, 4}\b", "Enter a email").required("Email is required"),
        message: Yup.string().required("Message is required"),
    })

    const { mutate: addContactUs, isPending } = useAddContactUs({
        onError: () => {
            toast.error("Something went wrong. Please try again later")
        },
        onSuccess: () => {
            toast.success("Send successfully")
            formikRef.current.resetForm()
        }
    })

    const handleInputChange = (e, errors, setErrors, handleChange) => {
        setErrors({
            ...errors,
            [e.target.name]: "", // Clear the error for the specific input
        });
        handleChange(e); // Continue with Formik's handleChange
    };

    return (
        <LandingPageLayout>
            <>
                <div className="relative blueAreaFirstPart">
                    <img src={background} className="absolute top-0 w-full -z-10 h-full" alt="" />
                    <div className="contactpart z-10 md:pt-40 pt-10">
                        <div className="text-center">
                            <h1 className="text-[56px] font-bold font-inter text-white">
                                Contact Us
                            </h1>
                        </div>
                        <div className="pt-5 pb-12 px-5">
                            <p className="text-base font-normal font-inter text-white w-full md:w-[50%] mx-auto text-center">
                                We’re here to help! Whether you have questions about our betting rounds,
                                investment opportunities, or need assistance with your account, our team is
                                ready to assist you. Reach out to us through any of the following channels:
                            </p>
                        </div>


                        <Formik
                            innerRef={formikRef}
                            validationSchema={contactSchema}
                            validateOnChange={false}
                            validateOnBlur={false}
                            initialValues={{
                                name: "",
                                email: "",
                                message: ""
                            }}
                            onSubmit={(values) => {
                                console.log(values)
                                addContactUs(values)
                            }}
                        >
                            {({ values,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                errors,
                                touched,
                                setErrors
                            }) => (
                                <form onSubmit={handleSubmit} className="w-full md:w-[63%] mx-auto p-6 md:p-12 rounded-xl bg-white border">
                                    <div className="text-center">
                                        <h1 className="text-[36px] font-bold font-inter text-gray-1">
                                            Send message
                                        </h1>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:justify-between gap-8 py-4">
                                        <div className="w-full">
                                            <Input
                                                value={values?.name}
                                                onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                                                onBlur={handleBlur}
                                                error={errors?.name && touched?.name}
                                                name={"name"}
                                                label={"Your name"}
                                                placeholder={"Type your name here"}
                                            />
                                            {errors?.name && touched?.name &&
                                                <span className="py-1 text-xs text-red-500">
                                                    {errors?.name}
                                                </span>
                                            }
                                        </div>
                                        <div className="w-full">
                                            <Input
                                                value={values?.email}
                                                onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                                                onBlur={handleBlur}
                                                name={"email"}
                                                error={errors?.email && touched?.email}
                                                label={"Email"}
                                                placeholder={"Type your email here"}
                                            />
                                            {errors?.email && touched?.email &&
                                                <span className="py-1 text-xs text-red-500">
                                                    {errors?.email}
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    <div className="py-4 space-y-2">
                                        <label htmlFor="message" className="text-base font-medium font-poppins text-gray-1 mb-1">
                                            Your message
                                        </label>
                                        <textarea
                                            value={values?.message}
                                            onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                                            onBlur={handleBlur}
                                            name="message"
                                            id="message"
                                            rows="7"
                                            className={` resize-none w-full rounded-xl border px-4 py-2 outline-none focus-within:ring-2   ${errors.message && touched?.message ? "ring-1 ring-red-500" : "focus:ring-custom-blue"}`} placeholder="Type your message here"></textarea>

                                        {errors?.message && touched?.message &&
                                            <span className="text-xs text-red-500 ">
                                                {errors?.message}
                                            </span>
                                        }
                                    </div>
                                    <div className=" flex items-center justify-center !min-w-max">
                                        <Button
                                            disabled={isPending}
                                            type={"submit"}
                                            title={isPending ? <Spinner width={120} /> : "Send Message"}
                                            className={" !w-max !px-12  "}
                                        />
                                    </div>
                                </form>
                            )}

                        </Formik>

                    </div>
                </div>




                <div className="iconspart w-full md:w-[80%] mx-auto py-10 md:py-20 flex flex-wrap items-center justify-center gap-10">
                    <div className="card1 w-full md:w-[28%] flex flex-col items-center justify-center text-center gap-4">
                        <div className="p-3 bg-[#f5f8fe] rounded-2xl">
                            <img src={emailIcon} className="border-[3px] border-dashed border-gray-400" alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-1 font-hk-grotesk">Email us</h1>
                        </div>
                        <div>
                            <p className="text-base font-normal text-gray-2 font-open-sans">
                                Email us for general queries, including marketing and partnership opportunities.
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-bold text-custom-blue font-open-sans">
                                info@quickbider.com
                            </p>
                        </div>
                    </div>
                    <div className="card2 w-full md:w-[28%] flex flex-col items-center justify-center text-center gap-4">
                        <div className="p-3 bg-[#f5f8fe] rounded-2xl">
                            <img src={callIcon} className="border-[3px] border-dashed border-gray-400" alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-1 font-hk-grotesk">Call us</h1>
                        </div>
                        <div>
                            <p className="text-base font-normal text-gray-2 font-open-sans">
                                Call us to speak to a member of our team. We are always happy to help.
                            </p>
                        </div>
                        <div>
                            <a href="tel:+16467865060">
                                <p className="text-base font-bold text-custom-blue font-open-sans">
                                    +1 (646) 786-5060
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="card3 w-full md:w-[28%] flex flex-col items-center justify-center text-center gap-4">
                        <div className="p-3 bg-[#f5f8fe] rounded-2xl">
                            <img src={supportIcon} className="border-[3px] border-dashed border-gray-400" alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-1 font-hk-grotesk">Support</h1>
                        </div>
                        <div>
                            <p className="text-base font-normal text-gray-2 font-open-sans">
                                Check out helpful resources, FAQs, and developer tools.
                            </p>
                        </div>
                        <div>
                            <button className="w-full md:w-[179px] h-[40px] rounded-xl p-4 bg-white border border-custom-blue text-custom-blue text-base font-bold font-open-sans flex items-center justify-between hover:text-white hover:bg-custom-blue">
                                Support Center <Svgs.ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

            </>
        </LandingPageLayout >
    )
}

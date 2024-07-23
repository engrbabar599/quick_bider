import React from "react";
import background from "../../assets/images/Background.png"
import callIcon from "../../assets/images/Icon_Call.png"
import emailIcon from "../../assets/images/Icon_Email.png"
import supportIcon from "../../assets/images/Icon_CS.png"
import { ArrowRight } from "../../assets/svgs/ArrowRight"
import { LandingPageLayout } from "../../components/LandingPagesLayout";

export const ContactUsPage = () => {
    return (
        <LandingPageLayout>
            <>
                <div class="relative blueAreaFirstPart">
                    <img src={background} class="absolute top-0 w-full -z-10 h-full" alt="" />
                    <div class="contactpart z-10 md:pt-40 pt-10">
                        <div class="text-center">
                            <h1 class="text-[56px] font-bold font-inter text-white">
                                Contact Us
                            </h1>
                        </div>
                        <div class="pt-5 pb-12 px-5">
                            <p class="text-base font-normal font-inter text-white w-full md:w-[50%] mx-auto text-center">
                                We’re here to help! Whether you have questions about our betting rounds,
                                investment opportunities, or need assistance with your account, our team is
                                ready to assist you. Reach out to us through any of the following channels:
                            </p>
                        </div>
                        <div class="w-full md:w-[63%] mx-auto p-6 md:p-12 rounded-xl bg-white border">
                            <div class="text-center">
                                <h1 class="text-[36px] font-bold font-inter text-gray-1">
                                    Send message
                                </h1>
                            </div>
                            <div class="flex flex-col md:flex-row md:justify-between">
                                <div class="mb-4 md:mb-0 md:w-[48%]">
                                    <label for="yourname" class="text-base font-medium font-poppins text-gray-1 mb-1">
                                        Your name
                                    </label>
                                    <input type="text" id="yourname" class="w-full h-[44px] rounded-xl border px-4 py-2 outline-none" placeholder="Type your name here" />
                                </div>
                                <div class="md:w-[48%]">
                                    <label for="email" class="text-base font-medium font-poppins text-gray-1 mb-1">
                                        Email
                                    </label>
                                    <input type="text" id="email" class="w-full h-[44px] rounded-xl border px-4 py-2 outline-none" placeholder="Input your email here" />
                                </div>
                            </div>
                            <div class="py-4">
                                <label for="message" class="text-base font-medium font-poppins text-gray-1 mb-1">
                                    Your message
                                </label>
                                <textarea id="message" rows="7" class="w-full rounded-xl border px-4 py-2 outline-none" placeholder="Type your message here"></textarea>
                            </div>
                            <div class="text-center">
                                <button class="w-[220px] h-[48px] rounded-xl text-base font-medium font-poppins bg-custom-blue text-white px-6 py-3">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="iconspart w-full md:w-[80%] mx-auto py-10 md:py-20 flex flex-wrap items-center justify-center gap-10">
                    <div class="card1 w-full md:w-[28%] flex flex-col items-center justify-center text-center gap-4">
                        <div class="p-3 bg-[#f5f8fe] rounded-2xl">
                            <img src={emailIcon} class="border-[3px] border-dashed border-gray-400" alt="" />
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold text-gray-1 font-hk-grotesk">Email us</h1>
                        </div>
                        <div>
                            <p class="text-base font-normal text-gray-2 font-open-sans">
                                Email us for general queries, including marketing and partnership opportunities.
                            </p>
                        </div>
                        <div>
                            <p class="text-base font-bold text-custom-blue font-open-sans">
                                info@quickbider.com
                            </p>
                        </div>
                    </div>
                    <div class="card2 w-full md:w-[28%] flex flex-col items-center justify-center text-center gap-4">
                        <div class="p-3 bg-[#f5f8fe] rounded-2xl">
                            <img src={callIcon} class="border-[3px] border-dashed border-gray-400" alt="" />
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold text-gray-1 font-hk-grotesk">Call us</h1>
                        </div>
                        <div>
                            <p class="text-base font-normal text-gray-2 font-open-sans">
                                Call us to speak to a member of our team. We are always happy to help.
                            </p>
                        </div>
                        <div>
                            <p class="text-base font-bold text-custom-blue font-open-sans">
                                +1 (646) 786-5060
                            </p>
                        </div>
                    </div>
                    <div class="card3 w-full md:w-[28%] flex flex-col items-center justify-center text-center gap-4">
                        <div class="p-3 bg-[#f5f8fe] rounded-2xl">
                            <img src={supportIcon} class="border-[3px] border-dashed border-gray-400" alt="" />
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold text-gray-1 font-hk-grotesk">Support</h1>
                        </div>
                        <div>
                            <p class="text-base font-normal text-gray-2 font-open-sans">
                                Check out helpful resources, FAQs, and developer tools.
                            </p>
                        </div>
                        <div>
                            <button class="w-full md:w-[179px] h-[40px] rounded-xl p-4 bg-white border border-custom-blue text-custom-blue text-base font-bold font-open-sans flex items-center justify-between hover:text-white hover:bg-custom-blue">
                                Support Center <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

            </>
        </LandingPageLayout>
    )
}

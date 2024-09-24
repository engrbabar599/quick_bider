import { Button } from 'components/Button'
import { Input } from 'components/Input'
import Popup from 'components/Popup'
import React, { useState } from 'react'

function OtpVerificationPopup({ showModal, closeModal, onSubmit }) {
    const [otpValue, setOtpValue] = useState("")
    const [otpErrors, setOtpErrors] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!otpValue || otpValue?.length != 4) {
            setOtpErrors(
                !otpValue ?
                    "OTP is required"
                    :
                    otpValue?.length != 4 ?
                        "Enter a valid OTP"
                        :
                        ""
            )
            return
        }
        onSubmit(otpValue)
    }

    return (
        <Popup
            customWidth={"w-[85vw] md:w-[65vw] lg:w-[50vw] xl:w-[35vw] 2xl:w-[25vw]"}

            customPadding="p-[54px]"
            closeModal={closeModal}
            open={showModal}
        >
            <div className='flex flex-col gap-[36px]'>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                    <div className='text-center'>
                        <h2 className="text-base md:text-2xl lg:text-[28px] font-semibold font-poppins text-gray-700 mb-6">
                            Verify to continue
                        </h2>
                        <p className="text-xs md:text-base font-normal font-poppins text-gray-400 mx-auto">
                            We have sent a One-Time Password (OTP) to your email address. Please check your inbox and enter the OTP to proceed.
                        </p>
                    </div>

                    <Input
                        type={'number'}
                        value={otpValue}
                        onChange={(e) => {
                            setOtpErrors('')
                            setOtpValue(e.target.value)
                        }}
                        label={'Enter OTP'}
                        placeholder={'0000'}
                        error={otpErrors}

                    />
                    <Button
                        type="submit"
                        title={"Verify"}
                    />
                </form>
                <div className="text-center ">
                    <button className="text-base text-custom-blue hover:scale-105 hover:text-blue-500 font-normal font-poppins ease-in-out duration-150">
                        Resend OTP
                    </button>
                </div>
            </div>
        </Popup>

    )
}

export default OtpVerificationPopup
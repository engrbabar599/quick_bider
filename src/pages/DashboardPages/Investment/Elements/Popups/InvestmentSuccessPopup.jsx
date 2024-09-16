

import Svgs from 'assets/svgs'
import { Button } from 'components/Button'
import Popup from 'components/Popup'
import React from 'react'

function InvestmentSuccessPopup({ open, closeModal, amount, transactionId }) {
    return (
        <Popup
            closeModal={closeModal}
            open={open}
            customWidth={"lg:w-[30vw] xl:w-[20vw]  w-[80vw] xs:w-[70vw] md:w-[35vw]"}
            customPadding={"py-[20px] xl:px-[40px] px-[20px] "}
        >
            <div className='flex flex-col items-center justify-center gap-4  w-full  '>
                <div className='flex flex-col gap-3 items-center justify-center w-full'>
                    <Svgs.SuccessIcon />
                    <div className='space-y-2 items-center justify-center flex flex-col font-poppins w-full'>

                        <h2 className='text-custom-green font-semibold text-[20px]'>
                            ${amount}
                        </h2>
                        <p className='font-medium text-gray-1 text-base'>
                            Investment successful!
                        </p>
                        <p className='text-sm text-gray-4 truncate max-w-full'>
                            Transaction ID: {transactionId}
                        </p>

                    </div>
                </div>
                <Button
                    onClick={closeModal}
                    customWidth={"w-full"}
                    title={"Close"}
                />
            </div>

        </Popup>
    )
}

export default InvestmentSuccessPopup
import { Button } from "components/Button";
import Popup from "components/Popup";
import React from "react";
import { useState, useEffect, useRef } from "react";
import ReactModal from "react-modal";

function ActivateInvestmentPopup({ showModal, closeModal, onSubmit }) {

  const [termsConditions, setTermsConditions] = useState(false)
  const [termsConditionsError, setTermsConditionsError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsConditions == false) {
      setTermsConditionsError("Accept the Terms and Conditions")
      return
    }
    onSubmit()
  };


  return (
    <Popup
      customWidth={"w-[90vw] md:w-[80vw] xl:w-[55vw]"}
      open={showModal}
      closeModal={closeModal}
    >
      <form onSubmit={handleSubmit} className="p-[8px]">
        <h1 className="text-base md:text-2xl lg:text-[28px] font-semibold font-poppins text-gray-1 text-center">
          Activate Investment
        </h1>
        <div className="pt-9 px-5">
          <ul className="list-decimal text-xs lg:text-lg font-normal font-poppins text-gray-1">
            <li>
              Eligibility: Users must be at least 18 years old and provide valid identification and contact information.
            </li>
            <li>
              Investment Process: Funds are committed for the entire duration of the project, with no early withdrawal permitted unless explicitly stated otherwise.
            </li>
            <li>
              Return on Investment: A guaranteed 21% return on the initial investment upon project completion, credited to the user’s account within [Number] days after the project’s successful completion.
            </li>
            <li>
              Project Completion: Defined by achieving all predefined milestones and deliverables. Any delays or changes in project timelines will be communicated to investors promptly.
            </li>
            <li>
              Risk and Disclaimer: All investments carry inherent risks. [Your Company Name] is not responsible for losses due to unforeseen circumstances beyond our control. Users are encouraged to review all investment documents and seek independent financial advice if necessary.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-3 pt-5">
            <input
              type="checkbox"
              value={termsConditions}
              onChange={(e) => {
                setTermsConditionsError('')
                setTermsConditions(e.target.checked)
              }}
              className={`w-[20px] h-[20px] appearance-none ${termsConditionsError ? 'border-custom-red' : 'border-custom-blue'} border-2 rounded-[4px] checked:bg-custom-blue ease-in-out duration-300 cursor-pointer `} />
            <span className="text-xs lg:text-sm font-normal font-poppins text-gray-4">
              I have read and agree to the Terms of Service
            </span>
          </div>
          {termsConditionsError &&
            <span className="text-xs text-red-500">
              {termsConditionsError}
            </span>
          }
        </div>
        <div className=" flex items-center justify-center pt-[40px]">
          <Button
            customPadding={"px-[15px] py-[12px]"}
            customWidth={'min-w-max'}
            title={"Activate investments"}
          />
        </div>
      </form>
    </Popup>
  );
}

export default ActivateInvestmentPopup;

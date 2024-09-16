import { useQueryClient } from "@tanstack/react-query";
import { useAddCardDetails, useEditCardDetails } from "api/UserManagement";
import { Button } from "components/Button";
import { Input } from "components/Input";
import Spinner from "components/Spinner";
import SuccessPopup from "components/Popups/SuccessPopup";
import { Formik } from "formik";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup"
import Popup from "components/Popup";

function AddNewCard({ show, onClose, cardDetailsToEdit }) {
  const popupRef = useRef();
  const isEditable = cardDetailsToEdit ? true : false
  const [dialog, setDialog] = useState(true);
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const queryClient = useQueryClient()

  const [newCardDetails, setNewCardDetails] = useState({
    card_number: "",
    expiry_date: "",
    cvv: '',
    name_no_card: '',
  })

  const cardDetailsSchema = Yup.object().shape({
    card_number: Yup.string().length(12, "Enter a valid account number").required("Account number is required"),
    expiry_date: Yup.string().matches(/^(0[1-9]|1[0-2])\/(\d{2})$/, "Enter a valid expiry date").required("Enter a expiry date"),
    cvv: Yup.string().length(3, "Enter a valid CVV number").required("CVV is required"),
    name_no_card: Yup.string().required("Name is required"),
  })


  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);


  const handleInputChange = (e, errors, setErrors, handleChange) => {
    setErrors({ ...errors, [e.target.name]: '' })
    handleChange(e)
  }

  const { mutate: addCardDetails, isPending: isAddingCardDetails } = useAddCardDetails({
    onError: () => {
      toast.error("Something went wrong")
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['useGetCardDetails'] })
      setDialog(false)
      setOpenSuccessModal(true)
    }
  })

  const { mutate: editCardDetails, isPending: isEditingCardDetails } = useEditCardDetails({
    onError: () => {
      toast.error("Something went wrong")
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['useGetCardDetails'] })
      setDialog(false)
      setOpenSuccessModal(true)
    }
  })




  if (!show) return null

  return (
    <div>
      <Popup
        closeModal={onClose}
        open={dialog}
        customPadding={"p-[48px] "}
        customWidth={"w-[80vw] lg:w-[30vw] xl:w-[30vw]"}
      >

        <Formik
          enableReinitialize
          initialValues={isEditable ? cardDetailsToEdit : newCardDetails}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={cardDetailsSchema}
          onSubmit={(values) => {
            isEditable ?
              editCardDetails(values)
              :
              addCardDetails(values)
          }}
        >
          {({
            values,
            handleChange,
            errors,
            setErrors,
            handleSubmit

          }) => (
            <form onSubmit={handleSubmit}>
              <>
                <div className="w-full">
                  <div className="mb-4">
                    <h2 className="lg:text-[28px] text-gray-1 font-poppins font-semibold mb-6 text-center">
                      {isEditable ?
                        "Edit Card" :
                        "Add new card"
                      }
                    </h2>
                  </div>

                  <div className="mb-4">
                    <Input
                      type={'number'}
                      label={"Card number"}
                      value={values.card_number}
                      error={errors.card_number}
                      name={"card_number"}
                      placeholder={"0000 0000 0000"}
                      onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                    />
                  </div>
                  <div className=" items-start  gap-4 mb-4 grid grid-cols-2 ">
                    <Input
                      label={"Expiry date"}
                      value={values.expiry_date}
                      error={errors.expiry_date}
                      name={"expiry_date"}
                      placeholder={"00/00"}
                      onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                    />
                    <Input
                      type={'number'}
                      label={"CVV"}
                      value={values.cvv}
                      error={errors.cvv}
                      name={"cvv"}
                      placeholder={"XXX"}
                      onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      label={"Name on card"}
                      value={values.name_no_card}
                      error={errors.name_no_card}
                      name={"name_no_card"}
                      placeholder={"Type here"}
                      onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                    />
                  </div>
                </div>

                <div className="pt-5">
                  <Button
                    type={'submit'}
                    className={""}
                    title={isAddingCardDetails || isEditingCardDetails ? <Spinner /> : "Save"}
                  />
                </div>

              </>

              {/* {step === 2 && (
                  <>
                    <div className="">
                      <div className="flex justify-center items-center">
                        <p className="">
                          <span className="material-icons bg-green-500 text-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
                            check
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center justify-center py-2">
                        <h1 className="text-custom-green font-semibold text-xl font-poppins">
                        </h1>
                      </div>
                      <div className="w-[60%] mx-auto">
                        <h1 className="text-center text-xs md:text-base font-poppins font-medium text-gray-1">
                          New card added
                          successfully!
                        </h1>
                      </div>
                      <div className="flex justify-center items-center py-2">
                        <p className=" text-gray-4 text-sm flex items-center justify-center text-center">
                          Transaction ID: CDX86Cd232
                        </p>
                      </div>
                      <div className="flex items-center justify-center py-2 w-full">
                        <button
                          className={"px-[16px] py-[12px] bg-custom-blue rounded-xl text-white w-[190px] h-[48px] flex items-center justify-center "}

                          onClick={onClose}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                )} */}


              {/* Additional steps can be added here similar to step 1 */}
            </form>
          )}

        </Formik>
      </Popup>

      {openSuccessModal &&
        <SuccessPopup
          open={openSuccessModal}
          closeModal={() => {
            setOpenSuccessModal(false)
            onClose()
          }}
          buttonText={'Close'}
          successText={isEditable ? "Card edited successfully!" : "New card added successfully!"}
        />
      }

    </div>
  );
}

export default AddNewCard;

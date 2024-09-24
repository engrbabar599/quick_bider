import React from "react";
import { useState, useRef, useEffect } from "react";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { toast } from "react-toastify";
import { useAddRecentTransaction, useGetBankDetails, useGetCardDetails } from "api/UserManagement";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import SuccessPopup from "components/Popups/SuccessPopup";
import Spinner from "components/Spinner";
import { object, string } from "yup";
import Dropdown from "components/Dropdown";
import AddNewCard from "./AddNewCard";
import Popup from "components/Popup";

function AddMoneyPopup({ show, onClose }) {
  const queryClient = useQueryClient()
  const { data: cardDetails } = useGetCardDetails()
  // const [setOpenNewCardPopup]
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [openAddMoneyPopup, setOpenAddMoneyPopup] = useState(show)
  const [openAddCardPopup, setOpenNewCardPopup] = useState(false)

  const { mutate: addMoney, isPending: isAddingMoney } = useAddRecentTransaction({
    onError: () => {
      toast.error("Transaction unsuccessfull")
    },
    onSuccess: async (data) => {
      console.log(data)
      setShowSuccessPopup(true)
      queryClient.invalidateQueries({ queryKey: ["useGetRecentTransaction"] })
    }
  })



  return (
    <div>
      <Popup
        open={openAddMoneyPopup}
        closeModal={onClose}
        customPadding={"p-[48px] "}
        customWidth={"w-[85vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw]"}
      >
        <Formik
          initialValues={{
            amount: "",
            card: ""
          }}
          validationSchema={
            object().shape({
              amount: string().required("Required"),
              card: string().required("Required")
            })
          }
          onSubmit={(values) => {
            addMoney(values)
          }}>

          {({
            values,
            errors,
            handleBlur,
            handleChange,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit}>
              <>
                <div className="w-full">
                  <div className="mb-4">
                    <h2 className="lg:text-[28px] text-gray-1 font-poppins font-semibold mb-6 text-center">
                      Add money to wallet
                    </h2>
                  </div>

                  <div className="mb-4">
                    <Input
                      label={"Amount"}
                      placeholder={"$00"}
                      name={"amount"}
                      value={values?.amount}
                      error={errors?.amount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <Dropdown
                    title={"Select card"}
                    placeholder={"Select card"}
                    value={values?.card}
                    errors={errors?.amount}
                    onChange={(value) => handleChange(value)}
                  />
                </div>

                <div className="pt-5">
                  <Button
                    type={'submit'}
                    title={isAddingMoney ? <Spinner /> : "Add money"}
                  />

                </div>
                <div className="text-center pt-9">
                  <button
                    onClick={() => {
                      setOpenAddMoneyPopup(false)
                      setOpenNewCardPopup(true)
                    }}
                    type="button"
                    className="text-custom-blue text-base font-normal font-poppins hover:text-blue-500 hover:scale-105 underline underline-offset-2">
                    +Add new card
                  </button>
                </div>
              </>

            </form>
          )}



        </Formik>
      </Popup>



      {showSuccessPopup &&
        <SuccessPopup
          open={showSuccessPopup}
          closeModal={() => {
            setShowSuccessPopup(false)
            onClose()
          }}
          secondaryText={`Transaction ID: CDX86Cd232`}
          successText={
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-custom-green font-semibold font-poppins text-lg">
                $500
              </h3>
              <p className="text-gray-1 text-base">
                Added to wallet
                successfully!
              </p>


            </div>
          }
          buttonText={"Close"}

        />
      }
      {openAddCardPopup &&
        <AddNewCard
          onClose={() => {
            setOpenNewCardPopup(false)
            setOpenAddMoneyPopup(true)
          }}
          show={openAddCardPopup}
        />
      }
    </div>
  );
}

export default AddMoneyPopup;

import React from "react";
import { useState, useRef, useEffect } from "react";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useAddBankDetails, useEditBankDetails } from "api/UserManagement";
import Spinner from "components/Spinner";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


function BankCard({ show, onClose, bankDetailsToEdit }) {
  const [dialog, setDialog] = useState(true);
  const popupRef = useRef();
  const isEditable = Object.entries(bankDetailsToEdit).length > 0 ? true : false
  const queryClient = useQueryClient()

  const [newBankData, setBankData] = useState({
    account_no: "",
    ifsc_code: "",
    bank_name: "",
    name_on_account: ""
  })

  const { mutate: editBankDetails, isPending: isEditingBankDetails } = useEditBankDetails({
    onError: () => {
      toast.error("Something went wrong")
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useGetBankDetails"] })
      toast.success("Edit successful")
      setDialog(false)
      onClose()

    }
  })


  const { mutate: addBankDetails, isPending: isAddingBankDetails } = useAddBankDetails({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useGetBankDetails"] })
      setDialog(false)
      onClose()
    },
    onError: (error) => {
      const apiError = error?.response?.data?.response?.message
      toast.error("Something went wrong,Please try again later")

    }
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


  // useEffect(() => {
  //   if (bankDetailsToEdit) {
  //     setBankData({
  //       account_no: bankDetailsToEdit?.account_no,
  //       ifsc_code: bankDetailsToEdit?.ifsc_code,
  //       bank_name: bankDetailsToEdit?.bank_name,
  //       name_on_account: bankDetailsToEdit?.name_on_account,
  //     })
  //   }

  //   return () => {
  //     setBankData({
  //       account_no: "",
  //       ifsc_code: "",
  //       bank_name: "",
  //       name_on_account: ""
  //     })
  //   }
  // }, [bankDetailsToEdit])

  if (!show) return null

  const addBankAccountSchema = Yup.object().shape({
    account_no: Yup.string()
      .length(12, "Enter a 12 digit account number")
      .required("Account number is required"),
    ifsc_code: Yup.string().required("Ifsc code is required"),
    bank_name: Yup.string().required("Bank name is required"),
    name_on_account: Yup.string().required("Name on account is required"),
  })

  const handleInputChange = (e, errors, setErrors, handleChange) => {
    setErrors({ ...errors, [e.target.name]: '' })
    handleChange(e)
  }




  return (
    <div>
      {dialog && (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className=" flex items-center justify-center h-[100vh]  md:w-[30vw] w-[90%]">
            <div ref={popupRef} className=" mx-auto p-8 bg-white rounded-lg shadow-md  w-full py-10 ">
              <div className="flex justify-between "></div>
              <Formik
                enableReinitialize
                validateOnBlur={false}
                initialValues={isEditable ? bankDetailsToEdit : newBankData}
                validationSchema={addBankAccountSchema}
                validateOnChange={false}
                onSubmit={(values) => {
                  console.log(values)
                  isEditable ?
                    editBankDetails(values)
                    :
                    addBankDetails(values)
                }}>
                {({ touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  setErrors,

                }) => (
                  <>
                    <form onSubmit={handleSubmit} className="w-full">
                      <div className="mb-4">
                        <h2 className="lg:text-[28px] text-gray-1 font-poppins font-semibold mb-6 text-center">
                          {isEditable ?
                            "Edit Bank Account"
                            :
                            "Add Bank Account"
                          }

                        </h2>
                      </div>

                      <div className="mb-4">
                        <Input
                          value={values?.account_no}
                          type={"number"}
                          label={"Account number"}
                          name={"account_no"}
                          placeholder={"**** **** 1234"}
                          onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                          onBlur={handleBlur}
                          error={errors?.account_no && touched?.account_no}
                        />
                        {errors?.account_no && touched?.account_no &&
                          <span className="text-red-500 text-xs">
                            {errors?.account_no}
                          </span>
                        }

                      </div>
                      <div className="mb-4">
                        <Input
                          name={"ifsc_code"}
                          label={"IFSC Code"}
                          error={errors?.ifsc_code && touched?.ifsc_code}
                          value={values?.ifsc_code}
                          onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                          placeholder={"**** "}
                          onBlur={handleBlur}
                        />
                        {errors?.ifsc_code && touched?.ifsc_code &&
                          <span className="text-red-500 text-xs">
                            {errors?.ifsc_code}
                          </span>
                        }

                      </div>
                      <div className="mb-4">
                        <Input
                          value={values?.bank_name}
                          label={"Bank name"}
                          error={errors?.bank_name && touched?.bank_name}
                          name={"bank_name"}
                          onBlur={handleBlur}
                          onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                          placeholder={"**** Bank"}
                        />
                        {errors?.bank_name && touched?.bank_name &&
                          <span className="text-red-500 text-xs">
                            {errors?.bank_name}
                          </span>
                        }
                      </div>
                      <div className="mb-4">
                        <Input
                          value={values?.name_on_account}
                          label={"Name on account"}
                          error={errors?.name_on_account && touched?.name_on_account}
                          name={"name_on_account"}
                          onBlur={handleBlur}
                          onChange={(e) => handleInputChange(e, errors, setErrors, handleChange)}
                          placeholder={"Type here"}
                        />
                        {errors?.name_on_account && touched?.name_on_account &&
                          <span className="text-red-500 text-xs">
                            {errors?.name_on_account}
                          </span>
                        }
                      </div>

                      {isEditable ?
                        <Button
                          disabled={isEditingBankDetails}
                          type={"submit"}
                          title={isEditingBankDetails ? <Spinner /> : "Edit"}
                        />
                        :
                        <Button
                          disabled={isAddingBankDetails}
                          type={"submit"}
                          title={isAddingBankDetails ? <Spinner /> : "Save"}
                        />
                      }


                    </form>


                  </>

                )}
                {/* {step === 1 && ( */}
                {/* )} */}

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
                      <div className="w-[70%] mx-auto">
                        <h1 className="text-center text-xs md:text-base font-poppins font-medium text-gray-1">
                          Bank account added
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
              </Formik>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BankCard;


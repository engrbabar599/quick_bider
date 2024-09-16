import React, { useEffect } from "react";
import { useState } from "react";
import Employees from "../../../components/Popups/AddMoneyPopup";
import { Line } from "react-chartjs-2";
import { Button } from "components/Button";
import CardSection from "./Elements/CardSection";
import cwb from "assets/images/cwb.png";
import edit from "assets/images/edit.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Withdraw from "./Elements/Withdraw";
import BankCard from "./Elements/BankCard";
import { useDeleteBankDetails, useGetWallet } from "api/UserManagement";
import { BankDetailSkeleton } from "components/Skeleton/BankDetailSkeleton";
import { DashboardLayout } from "components/Layout";
import { useWalletHelper } from "./helper";
import AddMoneyPopup from "../../../components/Popups/AddMoneyPopup";
import Svgs from "assets/svgs";
import { toast } from "react-toastify";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pagination } from "components/Pagination/index";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Wallet = () => {

  const {
    // state
    data, options,
    addMoneyPopupVisible, setAddMoneyPopupVisible,
    showWithdrawPopup, setShowWithdrawPopup,
    bankDetailPage, setBankDetailPage,
    bankDetailsToEdit, setBankDetailsToEdit,
    totalBankDetailPage, setTotalBankDetailPage,
    showPopup, setShowPopup,
    bankDetails, isLoadingBankDetails,
    // functions
    handleClosePopup, handleShowPopup,
    toggleShow,
    toggleVisibility,
  } = useWalletHelper();

  const queryClient = useQueryClient()

  const { mutate: deleteBankDetails, isPending: isDeleting } = useDeleteBankDetails({
    onError: () => {
      toast.error("Something went wrong")
    },
    onSuccess: () => {
      toast.success('Bank details deleted successfully')
      queryClient.invalidateQueries({ queryKey: ['useGetBankDetails'] })

    }
  })

  const { data: walletData } = useGetWallet()


  return (
    <DashboardLayout activeSidebar={"Wallet"}>
      <div className="container mx-auto lg:grid flex flex-col lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <h2 className="text-base md:text-2xl font-medium font-poppins text-gray-1 mb-4">
            Wallet
          </h2>
          <div className="bg-white shadow rounded-xl border px-5 py-6 md:py-12">
            <div className="flex justify-between items-center flex-wrap">
              <div>
                <p className="xs:text-2xl md:text-[64px] xs:font-semibold text-gray-1 font-poppins">
                  ${walletData?.balance ? walletData?.balance : 0}
                </p>
                <p className="text-gray-1 text-[20px] xs:text-sm font-noraml font-poppins md:py-8 xs:py-3">
                  Current Balance
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <button
                    onClick={toggleVisibility}
                    className="px-4 py-3 rounded-xl text-white bg-[#6F9CFF] text-sm font-semibold font-inter md:w-[172px]"
                  >
                    Add money
                  </button>
                  {addMoneyPopupVisible &&
                    <AddMoneyPopup
                      show={addMoneyPopupVisible}
                      onClose={() => setAddMoneyPopupVisible(false)} />}
                </div>
                <div>
                  <div>
                    <button
                      onClick={toggleShow}
                      className="px-4 py-3 border rounded-xl text-gray-1 text-sm font-semibold font-inter w-[172px] border-gray-1 hidden md:block hover:bg-custom-blue hover:text-white hover:border-none">
                      Withdraw
                    </button>
                    {showWithdrawPopup && <Withdraw show={showWithdrawPopup} onClose={() => setShowWithdrawPopup(false)} />}
                  </div>
                </div>
              </div>
            </div>
            <Line data={data} options={options} />
          </div>
          <div>
            <div className="py-6">
              <h1 className="text-2xl font-medium font-poppins">Bank account</h1>
            </div>
            <div className="border px-3 py-7 rounded-xl shadow flex flex-col gap-4">
              {isLoadingBankDetails ?
                Array(3).fill().map((_, index) => (
                  <BankDetailSkeleton key={index} />
                ))
                :
                <>
                  {bankDetails?.results?.length === 0 ?
                    <div className="flex items-center justify-center font-medium md:text-xl text-base ">
                      No Bank Account Added
                    </div>
                    :
                    bankDetails?.results?.map((data) => (
                      <div key={data?.id}
                        className="border border-[#6f9cff] rounded-xl">
                        <div className="flex flex-col md:flex-row justify-between  items-start md:items-center px-2 py-4 gap-4">
                          <div className="flex items-center gap-3">
                            <img src={cwb} alt="" className="h-[64px] w-[64px]" />
                            <div>
                              <h1 className="text-base font-semibold font-poppins text-gray-1">
                                {"**** **** " + data?.account_no?.slice(-4)}
                              </h1>
                              <h1 className="text-[10px] font-normal text-gray-4 font-poppins capitalize">
                                {data?.bank_name}
                              </h1>
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 justify-center">
                            <button
                              disabled={isDeleting}
                              onClick={() => {
                                deleteBankDetails(data?.id)
                              }}
                              className="text-sm font-semibold font-inter border flex items-center hover:shadow-[rgba(0,0,0,0.2)]  hover:shadow py-3 px-5 rounded-xl border-custom-red text-custom-red gap-2 justify-center">
                              <span>
                                <Svgs.DeleteIcon />
                              </span>
                              Delete

                            </button>
                            <button
                              onClick={() => {
                                handleShowPopup()
                                setBankDetailsToEdit(data)
                              }}
                              className="text-sm font-semibold font-inter border flex items-center gap-3 w-[94px] py-3 px-5 rounded-xl border-gray-1 hover:shadow-[rgba(0,0,0,0.2)]  hover:shadow">
                              <Svgs.EditIcon />
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                  {totalBankDetailPage !== 0 &&
                    <Pagination
                      onClick={setBankDetailPage}
                      totalPages={totalBankDetailPage}
                      activePage={bankDetailPage}
                      nextOnClick={() => setBankDetailPage(oldPage => oldPage + 1)}
                      previousOnClick={() => setBankDetailPage(oldPage => oldPage - 1)}
                    />
                  }
                </>

              }


              <div className="pt-7">

                <Button
                  onClick={handleShowPopup}
                  className={"md:w-2/5 min-w-max font-inter"}
                  title={"+ Add New Bank Account"} />
                {showPopup && <BankCard show={showPopup} onClose={handleClosePopup} bankDetailsToEdit={bankDetailsToEdit} />}
              </div>
            </div>
          </div>
        </div>
        <div>
          <CardSection />
        </div>
      </div>
    </DashboardLayout >

  );
};

export default Wallet;

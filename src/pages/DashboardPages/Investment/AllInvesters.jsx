import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useGetInvestmentProject, useGetUserInvestment } from '../../../api/AuctionManagement';
import { DashboardLayout } from 'components/Layout';
import { useGetAllInvestors } from 'api/UserManagement';
import Svgs from 'assets/svgs';
import { formatDate } from 'utils/utility-functions';

function AllInvestors() {
  const navigate = useNavigate()
  const { data: investment } = useGetAllInvestors()

  return (
    <DashboardLayout activeSidebar={"Investment"}>
      <div className="flex flex-row gap-x-4 items-center min-w-max">
        <span onClick={() => navigate(-1)} className='cursor-pointer'>
          <Svgs.BackArrow />
        </span>
        <div className="flex flex-row">
          <p onClick={() => navigate(-1)} className=" text-gray-1 font-medium cursor-pointer">
            Investments/
          </p>
          <p className="text-custom-blue font-semibold">All investors</p>
        </div>
      </div>
      <div className="">
        <div className="pt-5 lg:grid grid-cols-12">
          <div className="border rounded-xl p-5  w-full justify-between flex flex-col items-stretch  col-span-7">
            <div className="grid grid-cols-3 text-[#1E1E1E]">
              <div className="text-lg font-medium font-poppins">Name</div>
              <div className="text-lg font-medium font-poppins">Time</div>
              <div className="text-lg font-medium font-poppins text-end 2xl:text-center">Investment</div>
              <div className="border-b-2 pt-2 col-span-3"></div>
            </div>
            {investment.map((value, i) => {
              return (
                <>
                  <div
                    key={i}
                    className="grid grid-cols-3 pt-4 border-b text-[#1E1E1E]"
                  >
                    <div><h1 className=" font-normal text-[#686868] font-open-sans text-base underline">{value.first_name} {value?.last_name}</h1></div>
                    <div><p className="text-base font-light">
                      {formatDate(value?.completed_date_time, {
                        hour: "2-digit",
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: '2-digit'
                      })}
                    </p></div>
                    <div><p className="text-base font-light text-center">$**</p></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AllInvestors
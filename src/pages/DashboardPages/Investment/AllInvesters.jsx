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

      <div className="pt-5">

        <div className=" p-[14px] md:p-[28px] border rounded-[16px] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] w-full">

          <table className="table-fixed w-full  space-y-20 ">
            <thead className=" w-full   text-[#1E1E1E] ">
              <tr className=" border-b border-gray-5 text-base">
                <th className=" pb-2 text-left font-poppins font-medium max-md:text-sm">
                  Name
                </th>
                <th className=" pb-2 text-left  font-poppins font-medium  max-md:text-sm">
                  Time
                </th>
                <th className="pb-2 text-left md:w-1/5 w-[30%]  font-poppins font-medium  max-md:text-sm ">
                  Investment
                </th>
              </tr>
            </thead>


            <tr className="h-[16px]"></tr>
            <tbody>
              {false ?
                Array(8).fill(null)?.map((_, index) => (
                  <tr key={index} className="border-b border-gray-5">
                    <td className="py-2">
                      <Skeleton width={100} />
                    </td>
                    <td className="py-2">
                      <Skeleton width={100} />
                    </td>
                    <td className="py-2">
                      <Skeleton width={75} />
                    </td>
                  </tr>
                ))
                :
                investment?.map((data, index) => (
                  <tr key={index} className="border-b border-gray-5 ">
                    <td className="py-2 font-open-sans text-[#686868]  max-md:text-sm text-base underline underline-offset-1 decoration-[#686868] decoration-1 ">
                      {data?.username}
                    </td>
                    <td className="py-2 font-poppins font-light  max-md:text-sm text-[#1E1E1E] text-base uppercase">
                      {formatDate(data?.completed_date_time, {
                        hour: "2-digit",
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: '2-digit'
                      })}
                    </td>
                    <td className="py-2 font-poppins font-light  max-md:text-sm text-[#1E1E1E] text-base uppercase  md:w-1/5 w-[30%]  ">
                      $**
                    </td>
                  </tr>
                ))}

            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AllInvestors
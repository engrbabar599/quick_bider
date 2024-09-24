import React from "react";
import { Button } from "components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetInvestmentProject } from "api/AuctionManagement";
import { InvestmentSkeleton } from "components/Skeleton/InvestmentSkeleton";
import { useGetUserProfile } from "api/UserManagement";
import { useLoginContext } from "context/LoginContext";
import InvestmentCard from "components/Elements/InvestmentCard";

function Project() {

  const navigate = useNavigate()
  const { data: investmentProject, isLoading: isLoadingInvestments } = useGetInvestmentProject()
  const { data: userProfile } = useGetUserProfile()
  const { isLoggedIn } = useLoginContext()


  return (
    <>
      {/* <div className="grid xl:grid-cols-4  items-center justify-center lg:grid-cols-3   md:grid-cols-2 sm:grid-cols-2 gap-5 py-10  "> */}
      <div className="flex flex-wrap flex-row items-center w-full justify-center gap-5 py-10">
        {isLoadingInvestments ?
          Array(4).fill().map((_, index) => (
            <InvestmentSkeleton key={index} />
          ))
          :
          investmentProject?.results?.length > 0 ?
            investmentProject?.results?.slice(0, 4)?.map((value, index) => (
              <InvestmentCard
                buttonTitle={"Invest"}
                createdBy={value?.createdBy}
                display_pic={value?.display_pic}
                investors={value?.investors}
                min_amount={value?.min_amount}
                name={value?.name}
                onClick={() => {
                  console.log('adsadgausf')
                  if (userProfile?.active_investment) {
                    navigate(`/investments/project-details?id=${value?.id}`)
                  }
                  else {
                    navigate('/investments')
                  }
                }}
                start_date_time={value?.start_date_time}
                key={index}
              />
            ))
            :
            <div className=" text-lg text-center whitespace-pre-wrap lg:text-2xl font-poppins font-medium flex col-span-12 items-center justify-center w-full min-h-[100px] ">
              No Upcoming Investments at the time
            </div>
        }
      </div>
      {investmentProject?.results?.length > 0 &&
        <div className="text-center mt-10">
          <NavLink
            to={
              isLoggedIn ?
                "/investments"
                : "/login"
            }>
            <Button
              customTheme={'btn-outline'}
              title={"View all"}
              className={"!w-[160px] !px-[24px] !py-[14px]"}
            />
          </NavLink>
        </div>
      }
    </>
  );
}

export default Project;

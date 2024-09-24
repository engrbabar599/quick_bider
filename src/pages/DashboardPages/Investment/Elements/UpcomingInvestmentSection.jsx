import React from "react";
import { Button } from "components/Button";
import { useGetInvestmentProject } from "api/AuctionManagement";
import InvestmentProjectCard from "./InvestmentProjectCard";
import { InvestmentSkeleton } from "components/Skeleton/InvestmentSkeleton";
import InvestmentCard from "components/Elements/InvestmentCard";

function UpcomingInvestmentSection({ hadding, padding }) {
  const { data: investmentProjects, isLoading: isLoadingInvestments } = useGetInvestmentProject()

  return (
    <>
      <section
        className={`py-5 ${padding}`}>
        <h1
          className={`text-center md:text-start text-2xl font-medium text-gray-1 font-poppins ${hadding}`}>
          Upcoming projects
        </h1>
      </section>
      <div className="flex flex-row items-center gap-5">
        <div className="flex xl:flex-row flex-col justify-between w-full gap-5 items-center  ">
          <div className="flex flex-row flex-wrap gap-5 items-center justify-center ">

            {isLoadingInvestments ?
              Array(4).fill(null)?.map((_, index) => (
                <InvestmentSkeleton key={index} />
              ))
              :
              investmentProjects?.results?.slice(0, 4)?.map((data, index) =>
                <>
                  <InvestmentCard
                    buttonTitle={"Invest"}
                    display_pic={data?.display_pic}
                    min_amount={data?.min_amount}
                    createdBy={data?.createdBy}
                    investors={data?.investors}
                    id={data?.id}
                    name={data?.name}
                    key={index}
                    start_date_time={data?.start_date_time}
                  />
                </>
              )
            }

          </div>
          {investmentProjects?.results?.length > 4 &&
            <div className=" h-full flex-1 w-full flex items-center justify-center">
              <Button
                customWidth={"min-w-max"}
                customTheme={"btn-outline"}
                title={"View all"}
              />
            </div>
          }
        </div>


      </div>

    </>
  );
}

export default UpcomingInvestmentSection;

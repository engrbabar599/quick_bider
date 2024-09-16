import React from "react";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";
import { useGetInvestmentProject } from "api/AuctionManagement";
import { InvestmentSkeleton } from "components/Skeleton/InvestmentSkeleton";

function Project() {

  const navigate = useNavigate()
  const { data: investmentProject, isLoading: isLoadingInvestments } = useGetInvestmentProject()

  const formatDate = (timeStamp) => {
    const date = new Date(timeStamp)
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(date)
  }

  return (
    <>
      <div className="grid lg:grid-cols-4  flex-wrap items-center justify-center  md:grid-cols-3 sm:grid-cols-2 gap-5 py-10">
        {isLoadingInvestments ?
          Array(4).fill().map((_, index) => (
            <InvestmentSkeleton key={index} />
          ))
          :
          investmentProject?.results?.slice(0, 4)?.map((value, i) => {
            return (
              <>
                <div key={i}
                  className="border p-3 rounded-xl shadow-sm min-w-[292px] ">
                  <div className="flex items-center gap-4">
                    <div className="icon" >
                      <img src={value?.display_pic} className="h-[40px] w-[40px] bg-gray-200 rounded-full" />
                    </div>
                    <div className="font-lato">
                      <h1 className="text-2xl font-semibold font-lato text-gray-1">
                        {value?.name}
                      </h1>
                      <p className=" text-gray-4 text-base font-lato font-medium">
                        {value?.createdBy}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 font-lato font-semibold">
                    <div className=" font-lato font-semibold ">
                      <div className="flex justify-between items-center py-2">
                        <h1 className="text-gray-4 text-base font-lato font-semibold">
                          Min Investment
                        </h1>
                        <h1 className="font-semibold font-lato">
                          ${value?.min_amount}
                        </h1>
                      </div>
                      <div className="border-dashed border-[1px]"></div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center py-2">
                        <h1 className="text-gray-4 text-base font-lato font-semibold">
                          Start date
                        </h1>
                        <h1 className="font-semibold font-lato">
                          {formatDate(value?.start_date_time)}
                        </h1>
                      </div>
                      <div className="border-dashed border-[1px]"></div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center py-2">
                        <h1 className="text-gray-4 text-base font-lato font-semibold">
                          Total Investors
                        </h1>
                        <h1 className="font-semibold font-lato">
                          {value?.investors?.length}
                        </h1>
                      </div>
                      <div className="border-dashed border-[1px]"></div>
                    </div>
                  </div>
                  <div className="w-[60%] mx-auto flex items-center justify-center py-5 rounded-xl">

                    <Button
                      title={"Invest"}
                      onClick={() => { navigate("/investments/project-details") }}
                      // onClick={(button === viewdetails) ? () => { navigate("/investments/investment-completed") } : () => { navigate("/investments/project-details") }}
                      // title={`${(button === viewdetails) ? 'view details' : 'Invest'}`}
                      className={" text-sm font-medium"}
                    />
                  </div>
                </div>
              </>
            )
          })}

      </div>
    </>
  );
}

export default Project;

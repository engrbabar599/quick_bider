import { useGetUserProfile } from 'api/UserManagement'
import { Button } from 'components/Button'
import Divider from 'components/Divider'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { formatDate } from 'utils/utility-functions'

function InvestmentProjectCard({ data, hideInvestment, aciveInvestmentButtonRef }) {
    const navigate = useNavigate()
    const { data: userProfile } = useGetUserProfile()


    return (
        <div key={data?.id} className={`border p-3 rounded-xl shadow-sm w-[245px] ${hideInvestment}`}>
            <div className="flex items-center gap-4">
                <div className="icon" >
                    {data?.display_pic ?
                        <img src={data?.display_pic} alt="" className="w-[40px] h-[40px] rounded-full" />
                        :
                        <div className="h-[40px] w-[40px] bg-gray-4 flex items-center justify-center text-white rounded-full capitalize">
                            {/* {data?.name[0] || "das"} */}
                            {"asgdj"}
                        </div>
                    }
                </div>
                <div className="font-lato">
                    <h1 className="text-2xl font-semibold font-lato text-gray-1 capitalize truncate max-w-[150px]">
                        {data?.name}
                    </h1>
                    <p className=" text-gray-4 text-base font-lato font-medium capitalize truncate max-w-[130px]">
                        {data?.created_by}
                    </p>
                </div>
            </div>
            <div className="pt-4 font-lato font-semibold">

                <div>
                    <div className="flex justify-between items-center py-2 ">
                        <h1 className="text-gray-4 text-base font-lato font-semibold">
                            Min investment
                        </h1>
                        <h1 className="font-semibold font-lato">
                            ${data?.min_amount}
                        </h1>
                    </div>
                    <Divider />
                </div>

                <div>
                    <div className="flex justify-between items-center py-2">
                        <h1 className="text-gray-4 text-base font-lato font-semibold">
                            Start date
                        </h1>
                        <h1 className="font-semibold font-lato">
                            {formatDate(data?.start_date_time)}
                        </h1>
                    </div>
                    <Divider />
                </div>

                <div>
                    <div className="flex justify-between items-center py-2">
                        <h1 className="text-gray-4 text-base font-lato font-semibold">
                            Total Investors
                        </h1>
                        <h1 className="font-semibold font-lato">
                            {data?.investors?.length}
                        </h1>
                    </div>
                    <Divider />
                </div>
            </div>
            <div className="w-[60%] mx-auto flex items-center justify-center pt-3 rounded-xl">

                <Button
                    onClick={() => {
                        if (userProfile?.active_investment) {

                            if (data?.status == 'completed') {
                                navigate(`/investments/investment-completed?id=${data?.id}`)
                            }
                            else {
                                navigate(`/investments/project-details?id=${data?.id}`)
                            }
                        }
                        else {
                            aciveInvestmentButtonRef?.current?.focus()
                            toast.error("Activate Investment first")
                        }
                    }}
                    title={data?.status == 'completed' ? "View details" : "Invest"}
                    className={"text-sm font-medium"}
                />
            </div>
        </div>
    )
}

export default InvestmentProjectCard
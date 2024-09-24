import { useGetUserProfile } from 'api/UserManagement'
import { Button } from 'components/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from 'utils/utility-functions'

export default function InvestmentCard({ display_pic, name, createdBy, min_amount, start_date_time, investors, onButtonClick, buttonTitle, id }) {
    const navigate = useNavigate()

    const { data: userProfile } = useGetUserProfile()
    return (
        <div
            className="border md:p-3 p-4 rounded-xl  flex flex-col shadow-sm md:min-w-[250px] xl:min-w-[240px] max-md:w-[300px] max-h-[290px]  md:max-h-[275px]  ">
            <div className="flex items-center gap-4">
                {display_pic ?
                    <img src={display_pic} className="h-[40px] w-[40px] bg-gray-200 rounded-full" />
                    :
                    <div className="h-[40px] w-[40px] bg-gray-4 flex items-center justify-center text-white rounded-full capitalize">
                        {name[0]}
                    </div>
                }
                <div className="font-lato">
                    <h1 className="text-2xl font-semibold font-lato text-gray-1 capitalize whitespace-nowrap truncate max-w-[170px]">
                        {name}
                    </h1>
                    <p className=" text-gray-4 text-base font-lato font-medium">
                        {createdBy}
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
                            ${min_amount}
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
                            {formatDate(start_date_time)}
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
                            {investors?.length}
                        </h1>
                    </div>
                    <div className="border-dashed border-[1px]"></div>
                </div>
            </div>
            <div className="w-[60%] mx-auto flex items-center justify-center py-5 rounded-xl">

                <Button
                    title={buttonTitle}
                    onClick={
                        onButtonClick
                            ?
                            onButtonClick :
                            () => {
                                navigate(`/investments/project-details?id=${id}`)
                            }
                    }
                    className={" text-sm font-medium"}
                />
            </div>
        </div>
    )
}

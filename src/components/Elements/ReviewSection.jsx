import { useQueryClient } from '@tanstack/react-query'
import { useAddUserReview, useGetUserReview } from 'api/AuctionManagement'
import Svgs from 'assets/svgs'
import { Button } from 'components/Button'
import Spinner from 'components/Spinner'
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ReviewSection({
    hideSwitch,
    reviewType,
    id,
}) {

    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const [activeSection, setActiveSection] = useState("View")
    console.log(id)
    const [newData, setNewData] = useState({
        text: "",
        rating: 0,
        [reviewType == "investment_project" ? "investment_project" : "auction"]: id,
    })
    const [reviewErrors, setReviewErrors] = useState({})

    const { data: reviewData, isLoading: isLoadingReviewData } = useGetUserReview(reviewType, id)

    const { mutate: addReview, isPending: isSubmitting } = useAddUserReview({
        onError: () => {
            toast.error("Something went wrong")
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["useGetUserReview"] })
            toast.success("Commented successfully!")
            setActiveSection("View")
            setNewData({
                rating: 0,
                text: ""
            })
        }
    })

    const handleSubmit = () => {
        if (newData?.rating == 0 || !newData?.text) {
            setReviewErrors({
                rating: newData?.rating == 0 ? "Rating is required" : "",
                text: !newData?.text ? "Required" : "",
            })
            return
        }
        addReview(newData)
        setActiveSection("Write")
    }



    return (
        <div>
            <div className=" flex justify-between items-center gap-4">
                <h1 className=" text-base md:text-2xl font-poppins text-gray-1 font-semibold min-w-max">
                    All Reviews
                </h1>
                <div className="w-full border-b-2"></div>
                <div className="text-custom-blue min-w-max">
                    <button
                        onClick={() => { navigate("/investments/all-reviews") }}
                        className="text-sm md:text-base font-semibold font-poppins hover:scale-105 hover:text-blue-500 outline-none">
                        View all
                    </button>
                </div>
            </div>
            {!hideSwitch &&
                <div className="flex gap-4 pt-4 items-center">
                    <button
                        onClick={() => { setActiveSection("View") }}
                        className={`px-2.5  md:px-5 py-3 text-xs md:text-sm font-semibold font-poppins rounded-xl outline-none ${activeSection === "View" ? "text-white bg-custom-blue" : " text-gray-2  border-gray-2 border bg-white"} `}
                    >
                        All reviews
                    </button>
                    <button
                        onClick={() => { setActiveSection("Write") }}
                        className={`px-2.5 md:px-5 py-3 text-xs sm:text-sm font-semibold font-poppins rounded-xl  outline-none ${activeSection === "Write" ? "text-white bg-custom-blue" : " text-gray-2   bg-white border border-gray-2"}`}
                        title={"Write a review"}
                    >
                        Write a review
                    </button>
                </div>
            }
            {activeSection === "View" && (
                <div className='flex flex-col py-8 gap-8'>

                    {isLoadingReviewData ?
                        Array(2).fill()?.map((_, index) => (
                            <div
                                key={index}
                                className="border p-4 rounded-xl  my-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 ">
                                        <Skeleton circle width={50} height={50} />
                                        <div>
                                            <Skeleton width={150} />
                                            <Skeleton width={75} />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Skeleton count={3} />
                                </div>
                            </div>
                        ))
                        :
                        reviewData?.results?.length == 0 ?
                            <div className='flex items-center justify-center h-[40vh] '>
                                <p className='text-gray-1 text-xl  font-semibold'>
                                    No Reviews Yet!
                                </p>
                            </div>
                            :
                            reviewData?.results?.slice(0, 2)?.map((value, i) => (
                                <>
                                    <div
                                        key={i}
                                        className="border p-3 md:p-4 rounded-xl  my-0">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3 ">
                                                {value?.display_pic
                                                    ?
                                                    <img
                                                        src={value?.display_pic}
                                                        alt="Profile Pic"
                                                        className='aspect-square 
                                                        h-[32px] w-[32px]
                                            md:h-[49px] md:w-[49px] bg-white border rounded-xl object-cover' />
                                                    :
                                                    <div
                                                        className='h-[32px] w-[32px]
                                            md:h-[49px] md:w-[49px] rounded-full bg-custom-blue text-white  text-xs md:text-base text-center flex items-center justify-center '>
                                                        {value?.user?.first_name[0]}
                                                        {value?.user?.last_name[0]}
                                                    </div>
                                                }

                                                <div>
                                                    <h1 className="md:text-xl text-base font-semibold font-poppins capitalize text-[#414042] whitespace-nowrap  max-w-[200px] overflow-hidden truncate">
                                                        {value?.user?.first_name} {value?.user?.last_name}
                                                    </h1>
                                                    <p className=" text-sm  md:text-base font-normal font-poppins text-[#7A7A7A]">
                                                        {value?.investment_project != null ? "Investor" : "Bidder"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-row items-center justify-center gap-[7px]">
                                                {Array(5).fill()?.map((_, index) => (
                                                    <Svgs.ReviewStarIcon color={value?.rating >= index + 1 ? "#FFB543" : "#C5C5C5"} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <p
                                                className=" text-sm font-normal font-poppins text-gray-4">
                                                {value?.text}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))}
                </div>
            )}
            {activeSection === "Write" && (
                <>
                    <div className="writeAreview py-8">
                        <div className=" flex flex-col gap-[24px]">
                            <div className='flex flex-col gap-[10px]'>
                                <h1 className="text-base md:text-lg font-normal font-poppins text-[#000000]">
                                    How much do you like us?
                                </h1>
                                <div className='space-y-2'>
                                    <div className="flex flex-row gap-[7px]">
                                        {Array(5).fill().map((_, index) => (
                                            <span
                                                className='cursor-pointer'
                                                onClick={() => {
                                                    setReviewErrors({ ...reviewErrors, rating: "" })
                                                    setNewData({ ...newData, rating: index + 1 })
                                                }}>
                                                <Svgs.ReviewStarIcon
                                                    key={index}
                                                    color={index + 1 <= newData?.rating ? "#FFB543" : "#BDBDBD"} />
                                            </span>
                                        ))}
                                    </div>
                                    {reviewErrors?.rating || true &&
                                        <span className='text-custom-red text-sm '>
                                            {reviewErrors?.rating}
                                        </span>
                                    }
                                </div>

                            </div>

                            <div className='space-y-1'>

                                <div className='flex flex-col gap-[10px]'>
                                    <label
                                        htmlFor="review"
                                        className="text-base font-medium font-poppins text-gray-1">
                                        Write a review
                                    </label>
                                    <textarea
                                        name=""
                                        id="review"
                                        value={newData?.text}
                                        onChange={(e) => {
                                            setReviewErrors({ ...reviewErrors, text: '' })
                                            setNewData({ ...newData, text: e.target.value })
                                        }}
                                        placeholder='Type here'
                                        className={` ${reviewErrors?.text ? "ring-custom-red ring-1" : "focus:ring-1 focus:ring-custom-blue"}   resize-none w-full outline-none border rounded-xl py-[14px] px-[16px] text-base placeholder:text-[#828282] `}
                                        rows={5} />
                                </div>
                                <span className='text-custom-red text-sm'>
                                    {reviewErrors?.text}
                                </span>

                            </div>
                            <div className="flex items-center justify-center">
                                <div>
                                    <Button
                                        onClick={handleSubmit}
                                        customPadding={"px-5 py-3"}
                                        title={isSubmitting ? <Spinner width={100} height={20} /> : "Submit review"}
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </>
            )}
        </div>
    )
}

export default ReviewSection
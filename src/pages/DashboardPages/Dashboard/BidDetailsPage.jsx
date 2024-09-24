import React, { useEffect } from 'react'
import IMAGES from 'assets/IMAGES'
import { Button } from 'components/Button'
import { OutlineButton } from 'components/OutlineButton'
import { useLocation, useNavigate } from 'react-router-dom'
import starImage from "assets/images/star.png";
import { useState } from 'react'
import { VideoAd } from 'components/VideoAd'
import { useAddBidParticipant, useAddUserReview, useGetAuctionBid, useGetBidParticipant, useGetUserReview } from 'api/AuctionManagement'
import { toast } from 'react-toastify'
import { useGetUserProfile, useGetWallet } from 'api/UserManagement'
import Spinner from 'components/Spinner'
import { DashboardLayout } from 'components/Layout'
import ReviewSection from 'components/Elements/ReviewSection'
import Svgs from 'assets/svgs'
import SuccessPopup from 'components/Popups/SuccessPopup'
import BreadCrumb from 'components/BreadCrumb'

export const BidsDetailsPage = () => {
  const { state } = useLocation()
  console.log(state)
  const [bidRound, setBidRound] = useState(1)
  const [showSuccessPopup, setShowSuccessPopup] = useState({
    show: false,
    round: ""
  })

  const [activeReview, setActiveReview] = useState("review")
  const [rating, setRating] = useState(0)
  const [reviewData, setReviewData] = useState({
    // user:
    rating: 0,
    text: "",
    auction: "",
    investment_project: "",
  })


  const navigate = useNavigate()




  const [showVideoAd, setShowVideoAd] = useState(false);

  const handleShowPopup = () => {
    if (bidRound === 4) {
      navigate("/dashboard/results")
    }
    else {
      setBidRound(prev => prev + 1)
    }


    setShowVideoAd(true);
  };


  const getOrdinalSuffix = (num) => {
    if (num === 0) return ""; // No suffix for 0

    const j = num % 10,
      k = num % 100;
    if (j === 1 && k !== 11) {
      return "st";
    }
    if (j === 2 && k !== 12) {
      return "nd";
    }
    if (j === 3 && k !== 13) {
      return "rd";
    }
    return "th";
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(date)
  }

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp)
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      hour12: true,
      minute: "2-digit"
    }).format(date)
  }

  const { mutate: addParticipants, isPending: isAddingParticipants } = useAddBidParticipant({
    onError: (error) => {
      toast.error(error)
    },
    onSuccess: (data) => {
      toast.success("Success")
      setShowSuccessPopup({
        show: true,
        round: 1
      })
    }
  })


  const { data: fdsugy } = useGetAuctionBid()

  useEffect(() => {
    setReviewData({ ...reviewData, auction: state?.auctionDetails?.id })
  }, [state])

  const { data } = useGetBidParticipant()
  const { data: dsad } = useGetAuctionBid()

  const { data: wallet } = useGetWallet()
  const { data: userProfile } = useGetUserProfile()

  const { data: userReview } = useGetUserReview()
  const [timer, setTimer] = useState(60)
  useEffect(() => {
    setTimeout(() => {
      if (timer != 0) {
        setTimer(prev => prev - 1)
      }

    }, 1000)
    return (() => {
      clearTimeout()
    })
  }, [timer])

  const handleBid = () => {
    // mutate()
    addParticipants({
      user: "2",
      auction: state?.auctionDetails?.id,
      auction_bid: "1",
      bid_amount: state?.auctionDetails?.bid_amount,
      auction_participant: "1",
      round_no: "1",
    })
  }

  console.log(state?.auctionDetails?.from)

  return (
    <DashboardLayout activeSidebar={state?.auctionDetails?.from ? state?.auctionDetails?.from : "Dashboard"}>
      <div className='xl:grid xl:grid-cols-5 flex flex-col gap-8 '>

        <div className='lg:col-span-3 flex flex-col gap-6 relative '>
          <img src={IMAGES.mainAd} alt="" className='cursor-pointer' />
          <div>
            <h1 className='text-lg font-normal font-poppins text-gray-1 bg-white absolute top-0 right-0 rounded-bl-xl px-4'>
              Advertisement
            </h1>
          </div>


          <BreadCrumb
            first={state?.auctionDetails?.from ? state?.auctionDetails?.from : "Dashboard"}
            second={state?.auctionDetails?.title}
          />

          <div className="bg-white border  shadow-sm rounded-xl flex flex-col  lg:px-10 p-5 gap-7 items-center">

            <h2 className='font-heading lg:text-lg text-center flex flex-col md:flex-row !text-base'>
              <p className='  '>
                {state?.auctionDetails?.title}
              </p>
              <span>
                ({bidRound}{getOrdinalSuffix(bidRound)} round bid)
              </span>
            </h2>

            <div className='flex flex-col gap-4 items-center'>

              <div className='md:flex flex-row gap-3 hidden '>
                {Array(3).fill().map((_, index) => (
                  <div
                    key={index}
                    className='flex flex-col gap-4 group'>
                    <img
                      src={state?.auctionDetails?.[`support_image_${index + 1}`]}
                      alt="" className='rounded-xl group-hover:scale-105 group-hover:ease-in group-hover:duration-300 h-[124px] max-h-[124px] w-[200px] max-w-[200px] object-contain' />
                    <div className='w-full border-4 rounded-xl group-hover:border-custom-blue'></div>
                  </div>
                ))}
              </div>

              <img src={state?.auctionDetails?.thumbnail_image} alt="" className='!rounded-xl md:hidden w-full max-h-[188px] object-contain' />


              <p className='text-justify font-poppins font-normal text-gray-2 lg:text-sm text-xs lg:px-5'>
                {state?.auctionDetails?.description}
              </p>
            </div>



            <div className='flex flex-col gap-4 lg:w-4/5 w-full'>
              <div className='flex flex-row justify-between items-center w-full border border-gray-5 shadow-sm rounded-2xl p-3'>
                <div className='font-poppins lg:text-base text-xs gap-2 flex flex-col'>
                  <div className='flex flex-row space-x-1'>
                    <p className='text-gray-4'>Date:</p>
                    <p className='text-gray-1 font-semibold'>{state?.auctionDetails?.bid_date_time ? formatDate(state?.auctionDetails?.bid_date_time) : ''}</p>
                  </div>
                  <div className='flex flex-row space-x-1'>
                    <p className='text-gray-4'>Time:</p>
                    <p className='text-gray-1 font-semibold'>{state?.auctionDetails?.bid_date_time ? formatDateTime(state?.auctionDetails?.bid_date_time) : ''}</p>
                  </div>
                </div>

                <div className='font-poppins lg:text-base text-xs gap-2 flex flex-col'>
                  <div className='flex flex-row space-x-1'>
                    <p className='text-gray-4'>Total rounds:</p>
                    <p className='text-custom-blue font-semibold'>{state?.auctionDetails?.bidding_round}</p>
                  </div>
                  <div className='flex flex-row space-x-1'>
                    <p className='text-gray-4'>Bid amount:</p>
                    <p className='text-custom-blue font-semibold'>${state?.auctionDetails?.bid_amount}</p>
                  </div>
                </div>

              </div>

              <div className='flex flex-wrap items-center justify-center flex-row lg:gap-6 gap-4 h-full w-full'>
                <div className='border border-gray-5  py-2 flex flex-col items-center justify-center rounded-xl lg:w-28 w-20 h-full gap-2'>
                  <Svgs.ScoreIcon />
                  <div className='flex flex-col font-poppins items-center'>
                    <p className='text-gray-1 font-semibold lg:text-xl text-sm'>
                      {state?.auctionDetails?.bid_score}
                    </p>
                    <p className='text-gray-4 lg:text-base text-xs'>Score</p>
                  </div>
                </div>
                <div className='border border-gray-5 py-2  flex flex-col items-center justify-center rounded-xl lg:w-28 w-20 h-full gap-2 '>
                  <Svgs.ParticipantsIcon />

                  <div className='flex flex-col font-poppins items-center'>
                    <p className='text-gray-1 font-semibold lg:text-xl text-sm '>
                      {state?.auctionDetails?.participants?.length}
                    </p>
                    <p className='text-gray-4 lg:text-base text-xs'>Participants</p>
                  </div>
                </div>
                <div className='border border-gray-5 py-2  flex flex-col items-center justify-center rounded-xl lg:w-28 w-20 h-full gap-2'>
                  <Svgs.TimeIcon />

                  <div className='flex flex-col font-poppins items-center'>
                    <p className='text-gray-1 font-semibold lg:text-xl text-sm'>
                      {/* {state?.auctionDetails?.auction_minutes} */}
                      {timer}
                    </p>
                    <p className='text-gray-4 lg:text-base text-xs'>Time</p>
                  </div>
                </div>

              </div>


            </div>


            <div className={`${bidRound > 4 ? " hidden " : "flex"}  flex-col gap-5 lg:w-1/4 w-2/4 items-center`}>
              <Button
                onClick={handleBid}
                title={isAddingParticipants ? <Spinner /> : "Bid now"}
              />
              <div className='flex flex-row font-poppins text-base space-x-1'>
                <p className='text-gray-4'>Wallet:</p>
                <p className='text-custom-blue'>${wallet?.balance ? wallet?.balance : 0}</p>
              </div>
            </div>

            <button className='underline text-custom-blue cursor-pointer text-base underline-offset-2 font-poppins hover:scale-105 ease-in duration-150'>
              Check terms & conditions
            </button>


          </div>



        </div>

        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* LEaderboards */}
          <div className='flex flex-col gap-8' >
            <div className='flex flex-row justify-between items-center font-poppins font-semibold '>
              <p className='text-gray-1 lg:text-xl text-base'>Participants</p>
              <button onClick={() => { navigate("/dashboard/results") }} className='text-custom-blue text-sm hover:text-blue-500 hover:scale-105'>View all</button>
            </div>


            <div className='flex flex-col border shadow-md rounded-2xl lg:p-8 p-4 gap-5 w-full items-center'>
              <div className='flex flex-row justify-between font-poppins lg:text-base text-sm font-medium w-full'>
                <p className=''>Partcipants</p>
                <p>City</p>
                <p>Province</p>
              </div>
              <div className='divide-y-2 w-full '>
                {Array(6).fill().map((_, index) => (
                  <div className='flex flex-row justify-between items-center text-justify font-poppins py-2 font-light lg:text-base text-sm text-gray-4'>
                    <p className='underline text-sm font-open-sans font-normal cursor-pointer'>Paul Fisher</p>
                    <p>Surrey</p>
                    <p>AB</p>
                  </div>
                ))}
              </div>
              <div className='lg:w-1/4'>
                <Button
                  customTheme={"btn-outline"}
                  onClick={() => { navigate("/dashboard/results") }}
                  className={"!text-sm"}
                  title={"View all"}
                />
              </div>


            </div>

          </div>



          {/* My bids */}
          <div className='flex flex-col gap-8'>

            <div className={`${bidRound !== 1 ? "flex" : "hidden"} gap-8 flex-col`}>
              <h3 className='font-poppins lg:text-xl text-base text-gray-1 font-semibold'>
                My bids
              </h3>


              {Array((bidRound - 1)).fill().map((_, index) => (
                <div
                  key={index}
                  className='flex flex-row items-center justify-between border bg-white shadow-md rounded-2xl p-4'>
                  <div className='flex flex-row items-center font-poppins lg:text-base text-xs gap-4'>
                    <p className='text-custom-blue font-semibold'>Bid {index + 1}</p>
                    <div className='font-poppins font-semibold gap-2 flex flex-col' >
                      <div className='flex flex-row'>
                        <p className=''>Robert Fox</p>
                        <span className='font-normal'>(Rank 3)</span>
                      </div>
                      <div className='flex flex-row space-x-1'>
                        <p className='font-normal'>Time:</p>
                        <span>10:10:20 AM</span>
                      </div>

                    </div>

                  </div>

                  <div className='flex flex-row space-x-2'>
                    <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.0367 25.7515L32.3191 25.4763L41.6607 16.3701C41.6609 16.3699 41.6611 16.3697 41.6613 16.3695C41.8682 16.166 41.94 15.8689 41.8525 15.6003C41.7638 15.3283 41.5287 15.13 41.2456 15.0886C41.2455 15.0886 41.2454 15.0885 41.2453 15.0885L28.3323 13.2136L27.942 13.1569L27.7675 12.8033L21.9925 1.10026L21.9925 1.10024C21.8958 0.904192 21.6543 0.75 21.3196 0.75C20.9848 0.75 20.7434 0.904192 20.6467 1.10024L20.6466 1.10026L14.8716 12.8033L14.6971 13.1569L14.3068 13.2136L1.39384 15.0885C1.39372 15.0885 1.39359 15.0886 1.39347 15.0886C1.39343 15.0886 1.39338 15.0886 1.39334 15.0886C1.11117 15.13 0.875289 15.3291 0.786454 15.6009C0.699008 15.8684 0.771663 16.1677 0.977111 16.3688C0.977225 16.3689 0.97734 16.3691 0.977454 16.3692L10.3215 25.4747L10.6039 25.75L10.5373 26.1387L8.33088 39.002L32.0367 25.7515ZM32.0367 25.7515L32.1034 26.1402M32.0367 25.7515L32.1034 26.1402M32.1034 26.1402L34.3098 39.0036C34.3578 39.2852 34.2422 39.5696 34.0109 39.7378L34.0099 39.7386M32.1034 26.1402L34.0099 39.7386M34.0099 39.7386C33.8814 39.8324 33.7268 39.8809 33.5701 39.8809C33.4508 39.8809 33.3312 39.8524 33.2224 39.795L33.2216 39.7945M34.0099 39.7386L33.2216 39.7945M33.2216 39.7945L21.6686 33.721L21.3196 33.5376M33.2216 39.7945L21.3196 33.5376M21.3196 33.5376L20.9706 33.721M21.3196 33.5376L20.9706 33.721M20.9706 33.721L9.41911 39.793L9.41698 39.7941M20.9706 33.721L9.41698 39.7941M9.41698 39.7941C9.16643 39.9269 8.86104 39.9053 8.63099 39.7373L8.6297 39.7363M9.41698 39.7941L8.6297 39.7363M8.6297 39.7363C8.3986 39.5683 8.28299 39.2841 8.33078 39.0027L8.6297 39.7363Z" stroke="#6F9CFF" strokeWidth="1.5" />
                    </svg>

                    <div className='flex flex-col items-center font-poppins'>
                      <p className=' font-semibold text-gray-1 lg:text-lg text-sm'>{state?.auctionDetails?.bid_score}</p>
                      <p className='text-gray-4 lg:text-base text-xs'>Score</p>
                    </div>


                  </div>


                </div>
              ))}

            </div>



          </div>
          <ReviewSection
            hideSwitch={!state?.auctionDetails?.participants?.some(data => data?.id == userProfile?.id)}
            reviewType={"auction"}
            id={state?.auctionDetails?.id}
          />
        </div>


        <VideoAd
          open={showVideoAd}
          setOpen={setShowVideoAd}
          closeModal={() => {
            setShowVideoAd(false)
          }} />
      </div >


      <SuccessPopup
        open={showSuccessPopup.show}
        closeModal={() => {
          setShowSuccessPopup({ ...showSuccessPopup, show: false })
          handleShowPopup()
        }}
        buttonText={"Close"}
        successText={`Bid ${showSuccessPopup?.round} successful`}

      />
    </DashboardLayout>

  )
}

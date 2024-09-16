import React, { useRef } from 'react';
import cardBar from "assets/images/cardBar.png"
import cardDetailsCorner from "assets/images/card-details-corner.png"
import ornament from "assets/images/Ornament.png"
import AddNewCard from '../../../../components/Popups/AddNewCard';
import { useState } from 'react';
import { useGetCardDetails, useGetRecentTransaction, useGetWallet } from 'api/UserManagement';

const CardSection = () => {

  const [showPopup, setShowPopup] = useState(false);
  const { data: walletData } = useGetWallet()
  const { data: recentTransaction } = useGetRecentTransaction()
  const { data: cardDetails } = useGetCardDetails()
  const [cardDetailsToEdit, setCardDetailsToEdit] = useState({})

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleBulletClick = (index) => {
    // Calculate the scroll position based on the slide index
    const slider = sliderRef.current;
    const cardWidth = slider.children[index].offsetWidth;
    slider.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
    setActiveSlide(index);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    const cardWidth = slider.children[0].offsetWidth;
    const scrollPosition = slider.scrollLeft;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveSlide(index);
  };



  return (
    <div className="bg-custom-blue bg-opacity-10 flex flex-col gap-5  shadow-md rounded-xl p-4">
      <div className='w-full flex flex-row justify-between items-center '>
        <h2 className="md:text-[28px] text-base font-semibold font-poppins text-gray-1">
          My Card
        </h2>
        <button
          onClick={handleShowPopup}
          className='text-custom-blue underline xs:text-sm md:text-base font-medium font-poppins hover:scale-105 hover:text-blue-500 '>
          +Add New
        </button>
      </div>

      {showPopup && <AddNewCard show={showPopup} onClose={handleClosePopup} cardDetailsToEdit={cardDetailsToEdit} />}



      <div className="w-full flex flex-col gap-5">
        <div>

          <div
            ref={sliderRef}
            className="flex flex-row overflow-x-auto snap-x  scroll-smooth gap-4 w-full"
            onScroll={handleScroll}
          >

            {cardDetails?.length > 0 ?
              cardDetails?.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center min-w-[320px] snap-start"
                >
                  <div className="p-4 flex flex-col justify-between relative bg-gradient-to-b from-[#94A0F3] via-[#6074F6] to-[#475FF5] shadow-[rgba(73,97,245,1)]  text-white rounded-xl w-full  lg:h-[30vh]">
                    <img src={cardBar} alt="" className="absolute top-0 right-0 " />
                    <img src={cardDetailsCorner} alt="" className="absolute top-0 right-0" />
                    <div className="flex justify-between items-center">
                      <p className="z-0 xs:text-base md:text-lg font-medium font-poppins">
                        Universal Card
                      </p>
                      <button
                        onClick={() => {
                          setCardDetailsToEdit(data)
                          handleShowPopup()
                        }}
                        className="z-10 bg-white bg-opacity-60 text-black px-4 py-1 w-[64px] rounded-lg md:text-lg xs:text-base font-normal font-poppins">
                        Edit
                      </button>
                    </div>
                    <div>
                      <p className="md:text-2xl xs:text-lg font-dm-sans font-bold">
                        {data?.card_number.replace(/(.{4})/g, '$1 ').trim()}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-7 font-dm-sans">
                        <p className="xs:text-[10px] md:text-xs font-bold font-dm-sans">
                          {data?.name_no_card}
                        </p>
                        <p className="xs:text-[10px] md:text-xs font-bold font-dm-sans">
                          {data?.expiry_date}
                        </p>
                      </div>
                      <div>
                        <img src={ornament} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
              :
              <div className="p-4 flex flex-col justify-between relative bg-gradient-to-b from-[#94A0F3] via-[#6074F6] to-[#475FF5] shadow-[rgba(73,97,245,1)]  text-white rounded-xl w-full  lg:h-[30vh] min-h-[200px]">
                <img src={cardBar} alt="" className="absolute top-0 right-0 " />
                <img src={cardDetailsCorner} alt="" className="absolute top-0 right-0" />
                <div className="flex justify-center h-full items-center">
                  <h3 className='text-2xl'>No Cards added</h3>
                </div>
              </div>
            }

          </div>

          {/* Navigation Bullets */}
          <div className="flex justify-center mt-4 space-x-1">
            {cardDetails?.map((_, index) => (
              <button
                key={index}
                className={` h-1 rounded-full ease-in-out duration-150 transform ${activeSlide === index ? 'bg-custom-blue w-5' : 'bg-[#BDBDBD] w-2.5'}`}
                onClick={() => handleBulletClick(index)}
              />
            ))}
          </div>
        </div>

        <div className=" flex flex-col gap-3 ">
          <h3
            className="xs:text-xs md:text-base font-medium font-poppins  text-[#B8B8B8] py-2 ">
            Total Balance
          </h3>
          <p className="xs:text-xl md:text-[40px] font-semibold font-poppins text-gray-1 ">
            ${walletData?.balance ? walletData?.balance : 0}
          </p>
        </div>

        <div className=" font-dm-sans ">
          <div className="shadow bg-white py-6 px-4 rounded-lg space-y-4">
            <h3 className="md:text-[22px] font-medium text-[#333333] font-poppins">
              Recent Transaction
            </h3>
            {recentTransaction?.results?.length < 0 ?
              <>
                {recentTransaction?.results?.map((data) => (
                  <div key={data?.id} className="flex justify-between items-center border-b p-2">
                    <div className="flex gap-3 font-dm-sans items-centers">
                      <div>
                        <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
                      </div>
                      <div>
                        <p className=' font-medium text-base font-dm-sans text-[#333333]'>{data?.store}</p>
                        <p className='text-sm font-medium text-gray-4 font-dm-sans'>12 Sept at 22:21</p>
                      </div>
                    </div>
                    <div>
                      <p>
                        <span className={`${data?.transaction_behaviour !== "add" ? "text-custom-red" : "text-custom-green"} text-base font-medium font-dm-sans`}>{data?.transaction_behaviour !== "add" ? "-" : "+"}${data?.amount}</span>
                      </p>
                    </div>
                  </div>

                ))}
                <div className=" text-center">
                  <button className="text-custom-blue text-balance  font-bold cursor-pointer font-dm-sans">See All</button>
                </div>
              </>
              :
              <div className='text-center font-medium font-poppins text-base h-[100px] flex items-center justify-center'>
                No Recent Transactions
              </div>
            }

          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default CardSection;

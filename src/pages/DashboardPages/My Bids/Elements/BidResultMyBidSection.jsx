import React from 'react'
import stars from "assets/images/stars.png";


function BidResultMyBidSection() {

  return (
    <>
      <div className="rightbottom py-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold text-gray-1">
            My bids
          </h1>
          <h1 className="border-b-2 w-[75%]"></h1>
        </div>
        {Array(4).fill().map((_, index) => (
          <>
            <div
              key={index}
              className="border rounded-xl shadow-sm flex justify-between items-center p-4 my-5">
              <div className="left flex items-center gap-4">
                <div className="bid1">
                  <h1 className=" font-semibold text-custom-blue text-base">
                    Bid {index + 1}
                  </h1>
                </div>
                <div className="robertouter flex flex-col gap-3">
                  <div className="robert flex items-center">
                    <div>
                      <h1 className=" font-semibold text-gray-1">Robert Fox</h1>
                    </div>
                    <div>
                      <h1 className=" text-gray-2">(Rank 3)</h1>
                    </div>
                  </div>
                  <div className="time flex gap-1">
                    <div>
                      <h1 className="text-gray-4">Time:</h1>
                    </div>
                    <div>
                      <h1 className=" font-semibold text-gray-1">10:10:20 AM</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right flex items-center gap-3">
                <div className="img">
                  <img src={stars} alt="" />
                </div>
                <div className="score flex items-center justify-center flex-col">
                  <div>
                    <h1 className=" font-semibold text-gray-1">320</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-4">Score</h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

    </>
  )
}

export default BidResultMyBidSection
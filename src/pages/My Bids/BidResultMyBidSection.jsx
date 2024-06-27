import React from 'react'
import stars from "../../assets/images/stars.png";



function BidResultMyBidSection() {

    const myBids = [
        {
          name: "Bids 1",
          score: "320",
          time: "10:10:20 AM",
        },
        {
          name: "Bids 1",
          score: "320",
          time: "10:10:20 AM",
        },
        {
          name: "Bids 1",
          score: "320",
          time: "10:10:20 AM",
        },
        {
          name: "Bids 1",
          score: "320",
          time: "10:10:20 AM",
        },
      ];

  return (
   <>
   <div className="rightbottom py-6">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">My bids</h1>
              <h1 className="border-b-2 w-[75%]"></h1>
            </div>
            {myBids.map(() => {
              return (
                <>
                  <div className="border rounded-xl shadow-sm flex justify-between items-center p-4 my-5">
                    <div className="left flex items-center gap-4">
                      <div className="bid1">
                        <h1 className=" font-semibold text-custom-blue text-base">
                          Bid 1
                        </h1>
                      </div>
                      <div className="robertouter flex flex-col gap-3">
                        <div className="robert flex items-center">
                          <div>
                            <h1 className=" font-bold">Robert Fox</h1>
                          </div>
                          <div>
                            <h1 className=" opacity-70">(Rank 3)</h1>
                          </div>
                        </div>
                        <div className="time flex gap-1">
                          <div>
                            <h1 className=" opacity-70">Time:</h1>
                          </div>
                          <div>
                            <h1 className=" font-bold">10:10:20 AM</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right flex items-center gap-3">
                      <div className="img">
                        <img src={stars} alt="" />
                      </div>
                      <div className="score">
                        <div>
                          <h1 className=" font-bold">320</h1>
                        </div>
                        <div>
                          <h1 className=" opacity-70">Score</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

   </>
  )
}

export default BidResultMyBidSection
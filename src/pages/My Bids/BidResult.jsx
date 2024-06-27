import React from "react";
import { RecentWinnersSection } from "./RecentWinnersSection";
import { AllParticipents } from "./AllParticipents";
import BidResultMustang from "./BidResultMustang";
import BidResultMyBidSection from "./BidResultMyBidSection";

function BidResult() {
  return (
    <>
      <div className="p-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-7 xs:col-span-12">
            <div className="recentWinner">
              <RecentWinnersSection />
            </div>
            <div className="allparticipetns py-4">
              <AllParticipents />
            </div>
          </div>
          <div className="mustang lg:col-span-5 xs:col-span-12">
            <div>
              <BidResultMustang />
            </div>
            <div className="mybidsection">
              <BidResultMyBidSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BidResult;

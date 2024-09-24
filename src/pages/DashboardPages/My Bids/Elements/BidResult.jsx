import React from "react";
import { RecentWinnersSection } from "./RecentWinnersSection";
import { AllParticipents } from "./AllParticipents";
import BidResultMustang from "./BidResultMustang";
import BidResultMyBidSection from "./BidResultMyBidSection";
import { DashboardLayout } from "components/Layout";

function BidResult() {
  return (
    <DashboardLayout activeSidebar={"Dashboard"}>
      <div className="">
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-7 col-span-12">
            <div className="recentWinner">
              <RecentWinnersSection />
            </div>
            <div className="allparticipetns py-4">
              <AllParticipents />
            </div>
          </div>
          <div className="mustang lg:col-span-5 col-span-12">
            <div>
              <BidResultMustang />
            </div>
            <div className="mybidsection">
              <BidResultMyBidSection />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default BidResult;

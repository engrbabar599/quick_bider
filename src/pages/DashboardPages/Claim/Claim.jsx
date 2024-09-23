import React from "react";
import { useState } from "react";
import ClaimNow from "./ClaimPopup";
import { Button } from "../../../components/Button";
import { OutlineButton } from "../../../components/OutlineButton";
import IMAGES from "../../../assets/IMAGES";
import { DashboardLayout } from "components/Layout";
import ClaimCard from "./Elements/ClaimCard";
import ClaimPopup from "./ClaimPopup";

function Claim() {
  const cardItem = [
    {
      model: "Ford Mustang",
      year: "(2018Model)",
      winner: "You are the winner!",
      score: "1400",
    },
    {
      model: "Bugatti",
      year: "(2022Model)",
      winner: "You are the winner!",
      score: "1800",
    },
    {
      model: "Audi",
      year: "(2023Model)",
      winner: "You are the winner!",
      score: "1280",
    },
    {
      model: "Mercedes",
      year: "(2017Model)",
      winner: "You are the winner!",
      score: "1800",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <DashboardLayout activeSidebar={"Claim"}>
      <div>
        <div className="">
          <div className="pb-6">
            <h1 className="text-2xl font-semibold font-poppins text-gray-1">My winnings</h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {cardItem.map((value, index) => (
              <ClaimCard
                claim_sent={false}
                // image={Im}
                onClickSendClaim={handleShowPopup}
                score={value?.score}
                title={value?.model}
                image={IMAGES.mustang}
                key={index}

              />
            ))}
          </div>

        </div>

        <ClaimPopup
          show={showPopup}
          onClose={handleClosePopup}

        />
        {/* <Claim */}
        {/* // {showPopup && <ClaimNow show={showPopup} onClose={handleClosePopup} />} */}
      </div>
    </DashboardLayout>
  );
}

export default Claim;

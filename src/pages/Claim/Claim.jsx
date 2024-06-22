import React from "react";
import { useState } from "react";
import ClaimNow from "./ClaimNow";

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

  const [isVisible, setIsVisible] = useState(false);

  const showDialog = () => {
    setIsVisible(true);
  };

  const closeDialog = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div>
        <div className="p-5">
          <div className="pb-3">
            <h1 className="text-lg font-semibold">My winnings</h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {cardItem.map((value, i) => {
              return (
                <div className="bg-sky-100 rounded-xl shadow-lg">
                  <div className="shadow-lg bg-white p-5">
                    <div className="">
                      <img
                        className="rounded-xl"
                        src="https://images.unsplash.com/photo-1584902645120-f86567d892b6?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center pt-2">
                      <h1 className="text-lg font-semibold">{value.model}</h1>
                      <p className="opacity-70">{value.year}</p>
                    </div>
                    <div>
                      <h1 className="text-green-500 font-semibold">
                        You are the winner!
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <div>
                      <p className="opacity-60">My score</p>
                      <p className="text-lg font-bold">{value.score}</p>
                    </div>
                    <div>
                      <button
                        onClick={showDialog}
                        className="bg-blue text-white px-4 py-2 rounded mb-4"
                      >
                        Add money
                      </button>
                      {isVisible && <ClaimNow onClose={closeDialog} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Claim;

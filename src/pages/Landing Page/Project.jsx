import React from "react";
import vectorImage from "../../assets/images/Vector.png"
import { useState } from "react";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Project({hadding, padding, button}) {
  const navigate = useNavigate()
  // const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };


  const card = [
    {
      pname: "Project 21",
      company: "TechDX, Inc",
      investment: "$500",
    },
    {
      pname: "Project 21",
      company: "TechDX, Inc",
      investment: "$500",
    },
    {
      pname: "Project 21",
      company: "TechDX, Inc",
      investment: "$500",
    },
    {
      pname: "Project 21",
      company: "TechDX, Inc",
      investment: "$500",
    },
  ];

  const [viewdetails , setviewdetails] = useState("view details")
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 py-10">
        {card.map((value, i) => {
          return (
            <>
              <div key={i} className="border p-3 rounded-xl shadow-sm ">
                <div className="flex items-center gap-4">
                  <div className="icon" >
                    <p>
                      <img src={vectorImage} alt="" />
                    </p>
                  </div>
                  <div className="font-lato">
                    <h1 className="text-2xl font-semibold font-lato text-gray-1">{value.pname}</h1>
                    <p className=" text-gray-4 text-base font-lato font-medium">TechDX, Inc</p>
                  </div>
                </div>
                <div className="pt-4 font-lato font-semibold">
                  <div className=" font-lato font-semibold ">
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-gray-4 text-base font-lato font-semibold">Min investment</h1>
                      <h1 className="font-semibold font-lato">$500</h1>
                    </div>
                    <div className="border-dashed border-[1px]"></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-gray-4 text-base font-lato font-semibold">Start date</h1>
                      <h1 className="font-semibold font-lato">12/06/2024</h1>
                    </div>
                    <div className="border-dashed border-[1px]"></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-gray-4 text-base font-lato font-semibold">Total Investors</h1>
                      <h1 className="font-semibold font-lato">225</h1>
                    </div>
                    <div className="border-dashed border-[1px]"></div>
                  </div>
                </div>
                <div className="w-[60%] mx-auto flex items-center justify-center py-5 rounded-xl">
                
                  <Button
                  onClick={ (button === viewdetails)? ()=>{navigate("/investments/investmentCompleted")} : ()=>{navigate("/investments/BEProject")}}
                    title={`${(button === viewdetails)? 'view details' : 'Invest'}`}
                    className={" text-sm font-medium"}
                  />
                  {/* {isVisible && <BEProject/>} */}
                </div>
              </div>
            </>
          )
        })}

      </div>
    </>
  );
}

export default Project;

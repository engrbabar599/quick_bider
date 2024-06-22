import React from "react";
import vectorImage from "../../assets/images/Vector.png"

function Project() {
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
  return (
    <>
      <div className="py-5">
        <h1 className=" text-xl font-semibold">Upcoming projects</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {card.map((value, i)=>{
            return(
                <>
                 <div key={i} className="border p-3 rounded-xl shadow-xl">
          <div className="flex items-center gap-4">
            <div className="icon">
              <p>
                <img src={vectorImage} alt="" />
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold">{value.pname}</h1>
              <p className="opacity-65">TechDX, Inc</p>
            </div>
          </div>
          <div className="pt-4">
            <div className="">
              <div className="flex justify-between items-center py-2">
                <h1 className="opacity-70">Min investment</h1>
                <h1 className="font-semibold">$500</h1>
              </div>
              <div className="border-dashed border-[1px]"></div>
            </div>
            <div>
              <div className="flex justify-between items-center py-2">
                <h1 className="opacity-70">Min investment</h1>
                <h1 className="font-semibold">$500</h1>
              </div>
              <div className="border-dashed border-[1px]"></div>
            </div>
            <div>
              <div className="flex justify-between items-center py-2">
                <h1 className="opacity-70">Min investment</h1>
                <h1 className="font-semibold">$500</h1>
              </div>
              <div className="border-dashed border-[1px]"></div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-3">
            <button className="px-10 py-2 bg-blue text-white rounded-lg">
              Invest
            </button>
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

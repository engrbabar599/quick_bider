import React from "react";
import { useEffect, useRef } from "react";
import { Input } from "components/Input";
import { Button } from "components/Button";
import gallery from "assets/images/gallery.png";
import photo from "assets/images/photo.png";
import Popup from "components/Popup";

function ClaimPopup({ show, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <Popup
      open={show}
      closeModal={onClose}
      customWidth={"w-[90vw] md:w-[55vw] lg:w-[40vw] xl:w-[30vw]"}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="lg:text-[28px] xs:text-base text-xl font-semibold mb-4 text-center">
          Claim now
        </h2>

        <div className="mb-4">
          <label htmlFor="full-name" className="text-sm font-medium text-gray-700">Full name</label>
          <Input
            id="full-name"
            placeholder="Type full name"

          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone-no" className="text-sm font-medium text-gray-700">Phone no</label>
          <Input
            id="phone-no"
            placeholder="+1 000000"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Type email id"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
          <Input
            id="address"
            placeholder="Type address here"
          />
        </div>

        <div className="flex justify-around items-center">
          <div className="relative w-[48%]">
            <label className="cursor-pointer block text-gray-700 mb-2">
              <img src={gallery} alt="Gallery" className="w-full" />
              <input
                className="hidden"
                type="file"
              />
            </label>
          </div>
          <div className="relative w-[48%]">
            <label className="cursor-pointer block text-gray-700 mb-2">
              <img src={photo} alt="Photo" className="w-full" />
              <input
                className="hidden"
                type="file"
              />
            </label>
          </div>
        </div>

        <div className="lg:py-6 py-3.5 text-center">
          <Button
            onClick={onClose}
            title="Submit claim"
            className="text-base font-medium"
          />
        </div>
      </form>
    </Popup>

    //     </div>
    //   </div>
    // </div>
  );
}

export default ClaimPopup;

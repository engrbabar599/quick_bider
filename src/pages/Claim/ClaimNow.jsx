import React from "react";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import gallery from "../../assets/images/gallery.png";
import photo from "../../assets/images/photo.png";

function ClaimNow({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex items-center justify-center">
        <div className="mx-auto p-8 bg-white rounded-lg shadow-md xs:py-7 md:py-2 w-[90%] md:w-full" >
          <div className="flex justify-between md:mb-6"></div>
          <form onSubmit={handleSubmit}>
            <div className="xs:w-[80vw] md:w-[50vw] lg:w-[30vw]">
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

              <div className="py-6 text-center">
                <Button
                  onClick={onClose}
                  title="Submit claim"
                  className="text-base font-medium"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClaimNow;

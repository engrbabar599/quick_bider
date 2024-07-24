import React, { useState, useEffect, useRef } from 'react';


const VideoAdPopup = ({ show, onClose }) => {
  const popupRef = useRef();
  const videoRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10">
      <div ref={popupRef} className="bg-white p-5 rounded-xl shadow-lg w-full max-w-2xl">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-base font-normal font-poppins text-gray-4">Time left - <span className=" text-base font-semibold font-poppins text-gray-1">5:00 min</span></h2>
        </div>
        <video ref={videoRef} controls className="w-full h-auto rounded-xl">
          <source  type="" />
          Your browser does not support the video tag.
        </video>
        <div className=' mt-5 flex items-center justify-center'>
          <button onClick={onClose} className=" bg-custom-blue px-[16px] py-[12px] text-sm  font-semibold font-inter text-white rounded-xl w-[190px] h-[48px] flex items-center justify-center">Close</button>
        </div>
      </div>
    </div>
  );
};

export default VideoAdPopup
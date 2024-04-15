import React from 'react';
import { QRCode } from 'react-qrcode-logo'
import { X } from 'react-feather';

function QRCodePopup({ onCloseQR, cardId }) {
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center relative">
      <button className="absolute top-0 left-0 mt-4 ml-4 text-md text-[#013941] cursor-pointer" onClick={onCloseQR}><X/></button>
      <h2 className="text-xl font-bold">Your card is ready to be used.</h2>
        <p className="text-sm mt-2 mb-5">Share it via Link or QR code, or order accessories for it.</p>      
        <QRCode value={`http://localhost:5173/card/${cardId}`} eyeRadius={5} />
        <div className="flex justify-center mt-4">
            <button type="button" className="mt-5 mx-1 my-5 px-4 py-1 shadow-md bg-[#14B8A6] text-white text-md rounded-full focus:outline-none">
                Share
            </button>
          <button  className="mt-5 mx-1 my-5 px-4 py-1 shadow-md bg-[#013941] text-white text-md rounded-full focus:outline-none">
            Accessories
          </button>
        </div>
      </div>
    </div>
  );
}

export default QRCodePopup;

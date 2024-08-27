'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  return (
    showPopup && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={handleOutsideClick}
      >
        <div
          ref={popupRef}
          className=" rounded-lg shadow-lg relative w-[100%] max-w-md "
        >
          <button
            className="absolute top-2 right-5 text-gray-500 bg-black rounded-full p-2 hover:text-gray-700"
            onClick={handleClose}
          >
            <span className="material-symbols-outlined text-white font-semibold text-4xl rounded-full">&#10005;  </span>
          </button>
          <div className="flex justify-center items-center mb-4">
            <Link href="https://forms.gle/AKKuaGPyZgztVUwj7" target="_blank">
              <Image
                src="https://res.cloudinary.com/dzvdh7yez/image/upload/v1724785330/zypher_24_ctre50.jpg"
                alt="Zypher"
                height={60}  
                width={380}  
                className="object-contain rounded-xl cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;

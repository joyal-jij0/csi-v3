'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white  rounded-lg shadow-lg relative w-[90%] max-w-xl h-auto">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="w-full h-full flex justify-center items-center">
          
           <Link href="https://forms.gle/AKKuaGPyZgztVUwj7" target="_blank">
           <Image
              src="https://res.cloudinary.com/dzvdh7yez/image/upload/v1724345761/Zypher_poster_wfedhe.jpg"
              alt="Zypher"
              height={600}
              width={600}
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

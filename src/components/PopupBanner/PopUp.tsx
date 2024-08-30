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
          className="relative w-[100%] max-w-3xl mx-1 lg:p-1 bg-white rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-1 lg:top-2 right-1 lg:right-2 text-gray-500 bg-black rounded-full p-2 px-3 opacity-70 hover:text-gray-700"
            onClick={handleClose}
          >
            <span className="material-symbols-outlined text-white font-semibold text:xl lg:text-2xl">
              &#10005;
            </span>
          </button>
          <div className="flex justify-center items-center">
            <Link href="https://forms.gle/AKKuaGPyZgztVUwj7" target="_blank">
              <div className="hidden lg:block">
                {/* Large screen image */}
                <Image
                  src="https://res.cloudinary.com/dzvdh7yez/image/upload/v1725039105/desktop_page-0001_pbchq8.jpg"
                  alt="Zypher"
                  height={800}
                  width={800}
                  className="object-contain rounded-xl cursor-pointer"
                />
              </div>
              <div className="lg:hidden">
                {/* Mobile screen image */}
                <Image
                  src="https://res.cloudinary.com/dzvdh7yez/image/upload/v1725039020/mobile_wxaovm.jpg"
                  alt="Zypher Mobile"
                  height={800}
                  width={800}
                  className="object-contain rounded-xl cursor-pointer "
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;

// src/app/gallery/page.tsx

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "../../components/ui/images-slider";
import { imagesOne } from "@/data/galleryData";
import { EventsDataType } from "@/types/EventData";

// We need the lightbox for the fullscreen pop-up
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {
  const [eventImages, setEventImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(-1); // For the lightbox

  // --- This data fetching logic stays exactly the same ---
  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events", { cache: "no-store" });
      if (!response.ok) { throw new Error(`Failed to fetch events: ${response.status}`); }
      const data = await response.json();
      const eventImageUrls = (data as EventsDataType[]).flatMap((event) => event.imageUrls);
      setEventImages(eventImageUrls);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") { fetchEvents(); }
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="sm:h-auto h-aut z-50 w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex py-2 justify-center">
          <div className="text-3xl sm:text-7xl w-8/12">
            <div className="font-bold relative z-20 bg-clip-text pb-10 text-transparent text-center bg-gradient-to-r from-blue-600 to-indigo-200 ">
              Our Memories
            </div>
            <div>
              {/* This slider is untouched */}
              <ImagesSlider className="sm:h-[40rem] h-[20rem] rounded-2xl" images={imagesOne}>
                <motion.div initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ zIndex: 50, display: 'flex' }}></motion.div>
              </ImagesSlider>
            </div>

            <div className="py-20">
              <div className="font-bold relative z-20 bg-clip-text mb-10 text-transparent text-center bg-gradient-to-r from-blue-600 to-indigo-200 ">
                Photos
              </div>

              {/* --- HERE IS THE DYNAMIC COLLAGE GRID --- */}
              {loading ? (
                <p className="text-center text-white text-xl">Loading Photos...</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 grid-flow-dense">
                  {eventImages.map((imageUrl, index) => {
                    let itemClasses = "";
                    // Make every 5th image wide (span 2 columns)
                    if ((index + 1) % 5 === 0) {
                      itemClasses = "md:col-span-2";
                    }
                    // Make every 7th image tall (span 2 rows)
                    if ((index + 1) % 7 === 0) {
                      itemClasses = "md:row-span-2";
                    }

                    return (
                      <div
                        key={imageUrl + index}
                        className={`cursor-pointer overflow-hidden rounded-lg group ${itemClasses}`}
                        onClick={() => setLightboxIndex(index)}
                      >
                        <img
                          src={imageUrl}
                          alt={`Gallery image ${index + 1}`}
                          className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- This is the Lightbox component with the fix --- */}
      <Lightbox
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={eventImages.map((url) => ({ src: url }))}
      />
    </>
  );
}

export default Gallery;
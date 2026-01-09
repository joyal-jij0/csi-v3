"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImagesSlider } from "../../components/ui/images-slider";
import { imagesOne } from "@/data/galleryData";
import { EventsDataType } from "@/types/EventData";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {
  const [eventImages, setEventImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const convertHeicToJpg = (url: string): string => {
    if (!/\.heic$/i.test(url)) {
      return url;
    }

    const uploadSegment = "/upload/";

    if (url.includes(uploadSegment)) {
      return url.replace(uploadSegment, `${uploadSegment}f_jpg/`);
    }

    return url.replace(/\.heic$/i, ".jpg");
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events", { cache: "no-store" });
      if (!response.ok) { throw new Error(`Failed to fetch events: ${response.status}`); }
      const data = await response.json();
      const eventImageUrls = (data as EventsDataType[])
        .flatMap((event) => event.imageUrls)
        .map(convertHeicToJpg);
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

  const visibleImages = eventImages.filter(url => !imageErrors.has(url));

  return (
    <>
      <div>
        <div className="sm:h-auto h-aut z-50 w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex py-2 justify-center">
          <div className="text-3xl sm:text-7xl w-8/12">
            <div className="font-bold relative z-20 bg-clip-text pb-10 text-transparent text-center bg-gradient-to-r from-[#1d7a16] to-[#41d324ff]">
              Our Memories
            </div>
            <div>
              <ImagesSlider className="sm:h-[40rem] h-[20rem] rounded-2xl" images={imagesOne}>
                <motion.div initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ zIndex: 50, display: 'flex' }}></motion.div>
              </ImagesSlider>
            </div>

            <div className="py-20">
              <div className="font-bold relative z-20 bg-clip-text pb-10 text-transparent text-center bg-gradient-to-r from-[#1d7a16] to-[#41d324ff] ">
                Photos
              </div>

              {loading ? (
                <p className="text-center text-white text-xl">Loading Photos...</p>
              ) : visibleImages.length === 0 ? (
                <p className="text-center text-white text-xl">No photos available yet. Check back soon!</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 grid-flow-dense">
                  {visibleImages.map((imageUrl, index) => {
                    let itemClasses = "";
                    if ((index + 1) % 5 === 0) {
                      itemClasses = "md:col-span-2";
                    }
                    if ((index + 1) % 7 === 0) {
                      itemClasses = "md:row-span-2";
                    }

                    const isLarge = (index + 1) % 5 === 0;
                    const sizes = isLarge
                      ? "(max-width: 768px) 50vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw";

                    return (
                      <div
                        key={imageUrl}
                        className={`cursor-pointer overflow-hidden rounded-lg group relative ${itemClasses}`}
                        style={{ minHeight: '200px' }}
                        onClick={() => setLightboxIndex(index)}
                      >
                        <Image
                          src={imageUrl}
                          alt={`Gallery image ${index + 1}`}
                          fill
                          sizes={sizes}
                          className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                          onError={() => {
                            setImageErrors(prev => new Set(prev).add(imageUrl));
                          }}
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

      <Lightbox
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={visibleImages.map((url) => ({ src: url }))}
      />
    </>
  );
}

export default Gallery;
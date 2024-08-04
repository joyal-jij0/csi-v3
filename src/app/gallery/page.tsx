"use client";
import React from 'react'
import {motion} from "framer-motion"
import { ImagesSlider } from "../../components/ui/images-slider";
import { ParallaxScroll } from "../../components/ui/parallax-scroll";
import { imagesOne, imagesTwo } from '@/data/galleryData';



function Gallery() {
  return (
    <div>
      <div className="sm:h-auto h-aut z-50 w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  flex py-2 justify-center">
        <div className="text-3xl sm:text-7xl w-8/12">
          <div className="font-bold relative z-20 bg-clip-text pb-10 text-transparent text-center bg-gradient-to-r from-blue-600 to-indigo-200 ">
            Our Memories
          </div>
          <div>
            <ImagesSlider
              className="sm:h-[40rem] h-[20rem] rounded-2xl"
              images={imagesOne}
            >
              {/* Children -> Bug in production mode! */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
              ></motion.div>
            </ImagesSlider>
          </div>
          
          <div className=' py-20'>
            {/* Parralex effect */}
            <div className="font-bold relative z-20 bg-clip-text mb-5 text-transparent text-center bg-gradient-to-r from-blue-600 to-indigo-200 ">
              Photos
            </div>
            <ParallaxScroll images={imagesTwo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery
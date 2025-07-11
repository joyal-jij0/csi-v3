"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "../../components/ui/images-slider";
import { ParallaxScroll } from "../../components/ui/parallax-scroll";
import { imagesOne, imagesTwo } from "@/data/galleryData";
import { EventsDataType } from "@/types/EventData";

function Gallery() {
    const [eventImages, setEventImages] = useState<string[]>([]);

    const fetchEvents = async () => {
        try {
            const response = await fetch("/api/events", {
                cache: "no-store",
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`HTTP ${response.status}: ${errorText}`);
                throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            const eventImageUrls = (data as EventsDataType[]).flatMap(
                (event) => event.imageUrls
            );
            setEventImages(eventImageUrls);
            console.log(eventImageUrls);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    useEffect(() => {
        fetchEvents();
        const interval = setInterval(() => {
            if (document.visibilityState === "visible") {
                fetchEvents();
            }
        }, 60000);
        return () => clearInterval(interval);
    }, []);

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
                                style={{ zIndex: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                            ></motion.div>
                        </ImagesSlider>
                    </div>

                    {eventImages && (
                        <div className="py-20">
                            {/* Parralex effect */}
                            <div className="font-bold relative z-20 bg-clip-text mb-5 text-transparent text-center bg-gradient-to-r from-blue-600 to-indigo-200 ">
                                Photos
                            </div>
                            <ParallaxScroll images={eventImages} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Gallery;

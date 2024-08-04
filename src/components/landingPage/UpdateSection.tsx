"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import eventData from "../../data/eventData"; 

interface EventData {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  posterLink: string;
  formLink: string;
  eventPhotos?: string[];
}

export function UpdateSection() {
  const [activeEvent, setActiveEvent] = useState<EventData | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveEvent(null);
      }
    }

    if (activeEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeEvent]);

  useOutsideClick(ref, () => setActiveEvent(null));

 
  const visibleEvents = eventData.slice(0, 3);

  return (
    <div className="bg-black text-white py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
        UPDATES & EVENTS
      </h2>
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeEvent && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`event-${activeEvent.title}-${id}`}
              ref={ref}
              className="relative w-full max-w-[500px] h-full md:h-fit max-h-screen flex flex-col bg-slate-900 dark:bg-neutral-800 rounded-3xl overflow-y-auto scrollbar-none border border-white" 
            >
              <motion.div layoutId={`image-${activeEvent.title}-${id}`} className="relative">
                <Image
                  priority
                  width={500}
                  height={300}
                  src={activeEvent.posterLink}
                  alt={activeEvent.title}
                  className="w-full h-60 object-cover object-top"
                />
                <motion.button
                  key={`button-${activeEvent.title}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="absolute top-2 right-2 bg-white rounded-full h-8 w-8 flex items-center justify-center"
                  onClick={() => setActiveEvent(null)}
                >
                  <CloseIcon />
                </motion.button>
              </motion.div>

              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${activeEvent.title}-${id}`}
                      className="font-bold text-white text-xl"
                    >
                      {activeEvent.title}
                    </motion.h3>
                    {activeEvent.shortDescription && (
                      <motion.p
                        layoutId={`short-description-${activeEvent.shortDescription}-${id}`}
                        className="text-white dark:text-gray-300 text-sm mt-2 mr-4"
                      >
                        {activeEvent.shortDescription}
                      </motion.p>
                    )}
                  </div>
                  {activeEvent.formLink && (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={activeEvent.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      Register
                    </motion.a>
                  )}
                </div>

                {activeEvent.description && (
                  <div className="pt-4 px-4 flex-1 overflow-auto">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-white dark:text-gray-300 text-xs md:text-sm lg:text-base"
                    >
                      {activeEvent.description}
                    </motion.div>
                  </div>
                )}

                {/* {activeEvent.eventPhotos && (
                  <div className="p-4 flex-1 overflow-auto">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-wrap gap-2"
                    >
                      {activeEvent.eventPhotos.map((photo, index) => (
                        <Image
                          key={index}
                          src={photo}
                          alt={`Event photo ${index + 1}`}
                          width={150}
                          height={100}
                          className="w-32 h-20 object-cover rounded-lg"
                        />
                      ))}
                    </motion.div>
                  </div>
                )} */}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ul className="max-w-6xl mx-auto w-full flex flex-col sm:flex-col md:flex-col lg:flex-row items-center lg:items-start justify-between gap-4">
        {visibleEvents.map((event) => (
          <motion.div
            layoutId={`event-${event.title}-${id}`}
            key={event.id}
            onClick={() => setActiveEvent(event)}
            className="p-4 flex flex-col hover:bg-neutral-900 rounded-xl cursor-pointer w-full lg:w-1/3 border border-white mx-2 sm:mx-4 md:mx-6 lg:mx-6 mb-4 lg:mb-0 h-[500px]" // Ensure all cards have the same height
          >
            <motion.div layoutId={`image-${event.title}-${id}`} className="relative flex-shrink-0">
              <Image
                width={300}
                height={200}
                src={event.posterLink}
                alt={event.title}
                className="h-[400px] lg:h-auto w-full rounded-lg object-contain" 
              />
            </motion.div>

            <div className="flex flex-col flex-grow justify-between mt-2">
              <motion.h3
                layoutId={`title-${event.title}-${id}`}
                className="font-medium text-white text-center text-lg"
              >
                {event.title}
              </motion.h3>
              <p className="text-gray-300 text-center text-s mt-1">{event.date}</p>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon: React.FC = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

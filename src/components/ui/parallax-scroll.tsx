"use client";
import { useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PopupImageProps {
  src: string;
  onClose: () => void;
}

const PopupImage: React.FC<PopupImageProps> = ({ src, onClose }) => {
  return (
    <div onClick={onClose}>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      style={{
        position: 'fixed', // Equivalent to `fixed`
        top: 0, // Part of `inset-0`
        right: 0, // Part of `inset-0`
        bottom: 0, // Part of `inset-0`
        left: 0, // Part of `inset-0`
        zIndex: 50, // Equivalent to `z-50`
        display: 'flex', // Equivalent to `flex`
        alignItems: 'center', // Equivalent to `items-center`
        justifyContent: 'center', // Equivalent to `justify-center`
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Combines `bg-black` and `bg-opacity-75`
      }}
    >
      <Image
        src={src}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        height={800}
        width={800}
        alt="popup thumbnail"
      />
    </motion.div>
    </div>
  );
};

interface ParallaxScrollProps {
  images: string[];
  className?: string;
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  images,
  className,
}) => {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const handleImageClick = (src: string) => {
    setPopupImage((prev) => (prev === src ? null : src)); // Toggle functionality
  };

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  // Effect to handle Esc key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClosePopup();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const renderImages = (images: string[], translateY: any) => {
    return images.map((el, idx) => (
      <motion.div style={{ y: translateY }} key={`grid-${idx}`}>
        <Image
          src={el}
          className="lg:h-80 h-100 w-full lg:object-cover  rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
          height={400}
          width={400}
          alt="thumbnail"
          onClick={() => handleImageClick(el)}
        />
      </motion.div>
    ));
  };

  return (
    <div className={cn("w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-10 px-10">
        <div className="grid gap-10">{renderImages(firstPart, translateFirst)}</div>
        <div className="grid gap-10">{renderImages(secondPart, translateSecond)}</div>
        <div className="grid gap-10">{renderImages(thirdPart, translateThird)}</div>
      </div>
      <AnimatePresence>
        {popupImage && <PopupImage src={popupImage} onClose={handleClosePopup} />}
      </AnimatePresence>
    </div>
  );
};

export default ParallaxScroll;


'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-96">
      <Image
        src={images[currentIndex]}
        alt={`Event image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        
      />
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 border-2 border-white/50 hover:border-white font-bold"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4 font-extrabold" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 border-2 border-white/50 hover:border-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4 font-extrabold" />
      </Button>
    </div>
  );
};

export default ImageCarousel;

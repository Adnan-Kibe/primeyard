import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import React from 'react';
import CarouselButton from './CarouselButton';
import Image from 'next/image';

interface CustomCarouselProps {
  images: string[];
}

const CustomCarousel = ({ images }: CustomCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 10000 })]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="relative container mx-auto p-4 h-96">
      {/* Carousel Container */}
      <div className="overflow-hidden w-full h-full rounded-lg shadow-lg" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <Image
            key={index}
            src={image}
            alt={image}
            className="w-full h-full object-cover"
            layout='fill'
            />
          ))}
        </div>
      </div>

      {/* Carousel Buttons under the carousel */}
      <div className="absolute bottom-4 left-4 flex space-x-2 z-20">
        {/* Previous Button */}
        <CarouselButton
          onclick={scrollPrev}
        >
          <HiArrowSmLeft />
        </CarouselButton>

        {/* Next Button */}
        <CarouselButton
          onclick={scrollNext}
        >
          <HiArrowSmRight />
        </CarouselButton>
      </div>
    </div>
  );
};

export default CustomCarousel;

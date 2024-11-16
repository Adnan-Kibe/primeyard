import React from 'react'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image';

interface CardCarouselProps {
  images: string[]; // Type annotation for images prop
}

const CardCarousel: React.FC<CardCarouselProps> = ({ images = [] }) => {  

  return (
    <Carousel plugins={[]}>
        <CarouselContent>
            {
                !images.length ?
                (
                    <div className='flex items-center'>No Images</div>
                ) :
                (
                    images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Image src={image} alt={`Image ${index}`} width={300} height={300} />
                        </CarouselItem>
                    ))
                )
            }
        </CarouselContent>
    </Carousel>
  )
}

export default CardCarousel

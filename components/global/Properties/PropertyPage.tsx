import CustomCarousel from '@/components/custom/CustomCarousel'
import { Property } from '@/lib/constant'
import React from 'react'

const PropertyPage = ({ id, title, description, price, images } : Property) => {
  return (
    <div>
        <CustomCarousel images={images} />
    </div>
  )
}

export default PropertyPage
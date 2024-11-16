import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface FooterLogoIconProps {
  imageSrc: string
  alt: string
  url: string
  width: number
  height: number
}

const FooterLogoIcon = ({ imageSrc, alt, url, width, height }: FooterLogoIconProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer p-2"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className= "brightness-0 invert"
        />
      </a>
    </motion.div>
  )
}

export default FooterLogoIcon

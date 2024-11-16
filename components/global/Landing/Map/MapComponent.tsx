'use client'
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const MapComponent = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={ isInView ? {opacity: 1} : {opacity: 0}}
    transition={{duration: 0.95}}
    ref={ref} 
    className='flex items-center justify-center min-h-screen p-10'>
        MapComponent
    </motion.div>
  )
}

export default MapComponent
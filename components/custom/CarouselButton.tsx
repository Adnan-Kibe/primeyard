import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface CarouselButtonProps {
  children: React.ReactNode;
  onclick: () => void;
  className?: string;
}

const CarouselButton = ({ children, onclick, className }: CarouselButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }} // Adds a small tap effect for clicks
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`${className} relative w-12 h-12 rounded-full flex items-center justify-center border-2 border-gray-600 cursor-pointer overflow-hidden shadow-md hover:shadow-lg active:shadow-sm transition-all`}
        onClick={onclick}
        >
            <motion.span
            className="relative z-10"
            animate={{ color: isHovered ? '#ffffff' : '#000000' }} 
            transition={{ duration: 0.3, ease: 'easeInOut' }} 
            >
                {children}
            </motion.span>

            <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
            initial={{ opacity: 0, y: '-100%' }}
            animate={isHovered ? { opacity: 1, y: '0%' } : { opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            />
        </motion.div>
    )
}

export default CarouselButton;

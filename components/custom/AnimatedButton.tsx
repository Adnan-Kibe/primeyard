'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onclick: () => void;
  className?: string;
}

const AnimatedButton = ({ children, onclick, className }: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
        duration: 0.9,
        ease: 'easeIn',
      }}
      className={`relative border border-black p-2 cursor-pointer overflow-hidden bg-white ${className}`}
      onClick={onclick}
    >
      {/* Text with color transition */}
      <motion.span
        className="relative z-10"
        animate={{ color: isHovered ? '#ffffff' : '#000000' }} 
        transition={{ duration: 0.3, ease: 'easeInOut' }} 
      >
        {children}
      </motion.span>

      {/* Curtain effect (orange background) */}
      <motion.div
        className="absolute inset-0 bg-orange-500"
        initial={{ opacity: 0, y: '-100%' }}
        animate={isHovered ? { opacity: 1, y: '0%' } : { opacity: 0, y: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
      />
    </motion.button>
  );
};

export default AnimatedButton;

'use client'

import { motion } from 'framer-motion'
import React from 'react'
import logo from '@/public/assets/logo/logo-png.png'
import FooterMover from './FooterMover'
import LogoInfo from './LogoInfo'

const Footer = () => {
  
  return (
    <div className='bg-gray-800  text-white p-4'>
      <FooterMover logo={logo.src}>
        <LogoInfo />
      </FooterMover>
    </div>
  )
}

export default Footer

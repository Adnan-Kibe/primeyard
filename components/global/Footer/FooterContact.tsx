import React from 'react'
import envelope from "@/public/assets/icons/envelope-solid.svg"
import phone from "@/public/assets/icons/phone-solid.svg"
import Image from 'next/image'
import { motion } from 'framer-motion'

const FooterContact = () => {
  return (
    <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-10">
      
      {/* Email Contact */}
      <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center space-x-2">
        <Image src={envelope} alt="envelope" width={20} height={20} className="brightness-0 invert" />
        <a href="mailto:sales@primeyardproperties.co.ke" className="text-md">
          sales@primeyardproperties.co.ke
        </a>
      </motion.div>

      {/* Phone Contact */}
      <div className="flex items-center space-x-2">
        <Image src={phone} alt="phone" width={20} height={20} className="brightness-0 invert" />
        <span className="text-md">0702482991 | 0708344199</span>
      </div>
      
    </div>
  )
}

export default FooterContact

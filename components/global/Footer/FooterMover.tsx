import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'

interface FooterMoverProps {
    logo: string
    children: React.ReactNode
}

const FooterMover = ({logo, children}: FooterMoverProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref) 
    
  return (
    <div ref={ref} className='flex flex-row items-center justify-around space-x-8'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.95 }}
        >
          <Image src={logo} alt='logo' width={120} height={120}/>
        </motion.div>
        <motion.div
          initial={{opacity:0, x: 50}}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.95 }}
        >
          {children}
        </motion.div>
      </div>
  )
}

export default FooterMover
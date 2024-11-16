import Footer from '@/components/global/Footer/Footer'
import NavBar from '@/components/global/Navbar/NavBar'
import React from 'react'

const LandingPageLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <NavBar />
            {children}
        <Footer />
    </div>
  )
}

export default LandingPageLayout
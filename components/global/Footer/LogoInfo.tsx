import React from 'react'
import FooterLogoIcon from './FooterLogoIcon'
import youtube from "@/public/assets/icons/youtube-brands-solid.svg"
import x from "@/public/assets/icons/square-x-twitter-brands-solid.svg"
import tiktok from "@/public/assets/icons/tiktok-brands-solid.svg"
import facebook from "@/public/assets/icons/facebook-f-brands-solid.svg"
import FooterContact from './FooterContact'


const LogoInfo = () => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
      
      {/* Contact Email */}
      <FooterContact />

      {/* Social Media Icons */}
      <FooterLogoIcon imageSrc={facebook} alt="facebook" url="https://www.facebook.com/dagitarisirsam?mibextid=qi2Omg&rdid=lLMRT0aeXJD9uVlk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FTgtWP9gVNYHG4Miq%2F%3Fmibextid%3Dqi2Omg" width={20} height={20} />
      <FooterLogoIcon imageSrc={x} alt="X" url="https://x.com/i/flow/login?redirect_after_login=%2FPrimeyardP" width={20} height={20} />
      <FooterLogoIcon imageSrc={tiktok} alt="tiktok" url="https://www.tiktok.com/@primeyard?_t=8ocPvCQfF4w&_r=1" width={20} height={20} />
      <FooterLogoIcon imageSrc={youtube} alt="youtube" url="https://www.youtube.com/@primeyardproperties" width={20} height={20} />
      
    </div>
  )
}

export default LogoInfo

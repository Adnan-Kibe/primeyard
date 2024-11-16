'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/assets/logo/logo-png.png";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-4 md:py-6">
          
          {/* Left side: Properties and Search */}
          <div className="flex flex-1 items-center space-x-6 pl-4">
            <Link href="/properties" className="text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
              Properties
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
              Search
            </Link>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="logo" width={120} height={120} />
            </Link>
          </div>

          {/* Right side: About Us, Services, and Contact Us */}
          <div className="flex flex-1 items-center justify-end space-x-6 pr-4">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;

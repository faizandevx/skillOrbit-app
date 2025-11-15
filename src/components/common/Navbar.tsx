"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="pt-8 mx-8">
      <div className="  bg-transparent border-0 rounded-lg " >
      <div className=" mx-4   md:px-10 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo2.png" alt="Logo" width={210} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex text-lg items-center ">
            <div className="flex  text-lg">
              <Link 
                href="/courses" 
                className={`px-3 py-2 font-bold transition-all duration-300 ${
                  activeLink === 'courses' 
                    ? 'text-[#2554A4] border-b-2 border-indigo-600 shadow-[0_4px_6px_-1px_rgba(79,70,229,0.1)]' 
                    : 'text-[#32A1DA] hover:text-indigo-800 hover:border-b-2 hover:border-indigo-100'
                }`}
                onClick={() => handleLinkClick('courses')}
              >
                Courses
              </Link>
              <Link 
                href="/services" 
                className={`px-3 py-2 font-bold transition-all duration-300 ${
                  activeLink === 'services' 
                    ? 'text-[#2554A4] border-b-2 border-indigo-600 shadow-[0_4px_6px_-1px_rgba(79,70,229,0.1)]' 
                    : 'text-[#32A1DA] hover:text-indigo-800 hover:border-b-2 hover:border-indigo-100'
                }`}
                onClick={() => handleLinkClick('services')}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className={`px-3 py-2 font-bold transition-all duration-300 ${
                  activeLink === 'about' 
                    ? 'text-[#2554A4] border-b-2 border-indigo-600 shadow-[0_4px_6px_-1px_rgba(79,70,229,0.1)]' 
                    : 'text-[#32A1DA] hover:text-indigo-800 hover:border-b-2 hover:border-indigo-100'
                }`}
                onClick={() => handleLinkClick('about')}
              >
                About Us
              </Link>
            </div>
            <div className="ml-4 flex items-center border-2 text-[#32A1DA] border-[#32A1DA] rounded-full px-4 py-2 hover:border-green-500 hover:text-green-500 hover:bg-green-50 transition-colors duration-200 space-x-3">
             
              <Link 
                href="https://wa.me/+923334834116" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" flex items-center gap-2 "
                aria-label="WhatsApp"
                >
              
              <span className="text-green-500 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.222-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.492.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.55 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.465h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.18-1.26-6.173-3.548-8.42"/>
                </svg></span>
                <span className="  text-lg">Contact us</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center justify-between  md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#32A1DA]  hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb- text-center items-center sm:px-3">
            <Link 
              href="/courses" 
              onClick={() => { setIsOpen(false); handleLinkClick('courses'); }}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#32A1DA] hover:text-[#2554A4] hover:bg-gray-50"
            >
              Courses
            </Link>
            <Link 
              href="/services" 
              onClick={() => { setIsOpen(false); handleLinkClick('services'); }}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#32A1DA] hover:text-[#2554A4] hover:bg-gray-50"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              onClick={() => { setIsOpen(false); handleLinkClick('about'); }}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#32A1DA] hover:text-[#2554A4] hover:bg-gray-50"
            >
              About Us
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <Link 
                  href="https://wa.me/+923334834116" 
                  target="_blank" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-2 text-base font-medium text-center text-white bg-[#2554A4] hover:bg-[#32A1DA] rounded-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
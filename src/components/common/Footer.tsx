import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTiktok } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const courses = [
    { name: 'Web Development', href: '/courses' },
    { name: 'Mobile App Development', href: '/courses' },
    { name: 'Data Science', href: '/courses' },
    { name: 'UI/UX Design', href: '/courses' },
    { name: 'Digital Marketing', href: '/courses' },
    { name: 'Cloud Computing', href: '/courses' },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-white" />, 
      text: '407 , stadium road, opposite happy school system, Sahiwal law college Sahiwal.' 
    },
    { 
      icon: <FaPhoneAlt className="text-white" />, 
      text: '+92 333 483 4116' 
    },
    { 
      icon: <FaEnvelope className="text-white" />, 
      text: 'skillorbit.itc@gmail.com' 
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#32a1da] to-[#2554A4] text-white mt-12 pt-16 pb-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
            <Image src="/FooterLogo.png" alt="Logo" width={300} height={58} className="mb-6" />
            
            </Link>
            <p className="text-white">Empowering individuals with in-demand skills for the digital age. Learn from industry experts and accelerate your career.</p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/share/1BFk9RmMD1/" className="text-white hover:text-[#32a1da] transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-white hover:text-[#32a1da] transition-colors duration-300">
                <FaTwitter className="w-5 h-5" /> 
              </a>*/}
              <a href="https://www.linkedin.com/in/abdul-waheed-213aa8180/" className="text-white hover:text-[#32a1da] transition-colors duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-waheed-213aa8180/" className="text-white hover:text-[#32a1da] transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@skill.orbit?_t=ZS-8zhIhCzLseO&_r=1" className="text-white hover:text-[#32a1da] transition-colors duration-300">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-white pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white hover:text-[#32a1da] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-white pb-2">Popular Courses</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <a 
                    href={course.href} 
                    className="text-white hover:text-[#32a1da] transition-colors duration-300"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-white pb-2">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-white mt-1">{item.icon}</span>
                  <span className="text-white">{item.text}</span>
                </li>
              ))}
            </ul>
            
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-white text-sm">
           
           &copy; {currentYear} SkillOrbit. All rights reserved.</p>
          
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-[#32A1DA] text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-[#32A1DA] text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white hover:text-[#32A1DA] text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
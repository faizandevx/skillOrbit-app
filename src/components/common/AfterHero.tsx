
"use client";
import React from 'react'

import { FaGraduationCap, FaLaptopCode, FaUsers, FaCertificate } from 'react-icons/fa';

const features = [
  {
    icon: <FaGraduationCap className="w-8 h-8 text-blue-600" />,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of experience in their fields."
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 text-blue-600" />,
    title: "Hands-On Learning",
    description: "Gain practical experience with real-world projects and coding exercises."
  },
  {
    icon: <FaUsers className="w-8 h-8 text-blue-600" />,
    title: "Community Support",
    description: "Join a community of learners and get help whenever you need it."
  },
  {
    icon: <FaCertificate className="w-8 h-8 text-blue-600" />,
    title: "Certification",
    description: "Earn certificates to showcase your skills to employers."
  }
];

const AfterHero = () => {
  return (
    <section className="pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2554A4] sm:text-4xl">
            Why Choose Our Platform
          </h2>
          <p className="mt-4 text-lg text-[#32325D] max-w-2xl mx-auto">
            We provide the best learning experience with industry-relevant courses and expert instructors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ease-in-out duration-400 border border-gray-100"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2554A4] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#32325D]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfterHero;
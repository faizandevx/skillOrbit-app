"use client";

import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/hero.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-6 md:py-10 ">
      <div className=" sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center">
          {/* Image Section */}
          <div className="mb-3">
            <div className="relative">
              <div className=" overflow-hidden transition-all duration-500">
                <Image
                  src={heroImage}
                  alt="Learning and Development"
                  width={450}
                  height={100}
                  className="  min-h-[35vh]  "
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 leading-tight ">
              Transform Your <span className="text-[#2554A4]">Skills</span> with Our Expert-Led Courses
            </h1>
            <p className="text-lg mx-24 text-[#32325D] mb-4 sm:px-0">
            SkillOrbit is more than an IT training center — its a mission to empower individuals with practical skills, career counseling, and real opportunities. We provide affordable, market-driven IT courses and professional services that help students, freelancers, and businesses grow with confidence.
            </p>
            <div className="flex flex-col mt-4 sm:flex-row gap-8 justify-center">
              <Link href = "/courses"  className="px-8 py-3 bg-[#2554A4] hover:bg-[#32325D] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3">
                Explore Courses
              </Link>
              {/* <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-300">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-100 rounded-full -z-10 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-100 rounded-full -z-10 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-[blob_7s_infinite_2000ms]"></div>
      <div className="absolute top-1/2 left-1/2 w-1/4 h-1/2 bg-purple-100 rounded-full -z-10 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-[blob_7s_infinite_4000ms]"></div>
   
    </section>
  );
};

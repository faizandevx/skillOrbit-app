"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// Sample course data - replace with your actual data
const courses = [
  {
    id: 1,
    title: "E-Commerce Mastery",
    description: "Learn practical E-Commerce skills in a simple, structured, and affordable way — designed to build your confidence, help you earn online, and unlock opportunities in both local and global markets. Learn modern web development with the latest technologies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    duration: "4 to 6 Months",
    level: "Beginner"
  },
  {
    id: 2,
    title: "COMET – Computer Operations & Modern Essential Tools",
    description: "COMET is designed for beginners and students who want to build strong digital foundations. From computer basics to essential modern tools, this course prepares you for education, freelancing, and the job market.",
    image: "https://img.freepik.com/free-vector/computer-science-concept-illustration_114360-1243.jpg",
    duration: "2 Months (Physical Classes – Multiple Time Slots Available)",
    level: "Beginner"
  },
  {
    id: 3,
    title: "App Development – Build & Launch Your Own Mobile Apps",
    description: "This course takes you from beginner to professional in mobile app development using Flutter & Dart. With hands-on practice, real-world projects, and deployment guidance, you’ll be ready to create and publish your own apps.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3",
    duration: "5 Months (Weekend Physical Classes – Sat & Sun 11:00am–1:20pm)",
    level: "Beginner"
  },
  {
    id: 4,
    title: "Web Development – From Beginner to Full Stack Developer",
    description: "Learn modThis course is designed to transform beginners into job-ready developers. Learn step by step from HTML & CSS to advanced JavaScript, React, Node.js, and MongoDB, building real-world projects along the way.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    duration: "6 Months (Weekend Physical Classes – Sat & Sun 2:00pm–5:00pm + 1 Online Session on Weekdays)",
    level: "Beginner"
  },
  {
    id: 5,
    title: "Graphic Designing – From Creativity to Career",
    description: "Learn to design beautiful user interfaces",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3",
    duration: "2 Months – 2 Modules",
    level: "Beginner"
  },
  {
    id: 6,
    title: "IELTS Preparation – Unlock Global Opportunities",
    description: "This course equips students with practical strategies and personalized training to achieve their target band score in IELTS Academic or General. Learn the proven methods to excel in Listening, Reading, Writing, and Speaking with real test practices and expert guidance.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3",
    duration: "2 Months (Mon–Thu 3:00pm–5:00pm, Physical Classes)",
    level: "Beginner"
  },
  {
    id: 7,
    title: "Digital Marketing – From Basics to Professional Campaigns",
    description: "This course is designed to equip you with the most in-demand digital marketing skills. Learn how to plan, execute, and optimize campaigns across multiple platforms, with hands-on practice in real industry tools and strategies.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3",
    duration: "2 Months (Mon–Thu 5:45pm–7:00pm, Physical Classes)",
    level: "Beginner"
  },
];

const CourcesCarosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16">
        {/* carocel section  */}
      <div className="container mx-auto lg:px-12">
        <div className="group relative inline-block">
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl font-bold text-[#2554A4] group-hover:text-blue-600 transition-colors duration-300">
              Our Courses
            </h2>
            <Link href="/courses">
            <span className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-in-out text-blue-600 mt-2 hover:text-blue-800 cursor-pointer whitespace-nowrap">
              Explore All
            </span>
            </Link>
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <div className="relative h-92">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                      <p className="text-gray-200 mb-3">{course.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span className='text-[#32A1DA]'>{course.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  {/* <Link href={`/courses/${course.id}`}> */}
                  <Link href={`/courses`}>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                      Explore Course
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourcesCarosel;
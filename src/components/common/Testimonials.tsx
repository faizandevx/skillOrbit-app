"use client";

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import femaleAvatar from '../../../public/content/female.png';
import maleAvatar from '../../../public/content/male.png';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: StaticImageData;
  content: string;
  rating: number;
  course: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ayesha',
    role: 'Digital Marketing Student',
    avatar: femaleAvatar,
    content: 'Before SkillOrbit, I only knew theory. Now I’ve run my first campaign and already started freelancing. Affordable & practical!',
    rating: 5,
    course: 'Digital Marketing'
  },
  {
    id: 2,
    name: 'Hassan',
    role: 'COMET Student',
    avatar: maleAvatar,
    content: 'As a beginner, COMET gave me confidence in computers, Office, and AI tools. It feels like my career has just started',
    rating: 5,
    course: 'COMET'
  },
  {
    id: 3,
    name: 'Sana',
    role: ' Spoken English Student',
    avatar: femaleAvatar,
    content: 'From being shy to confidently speaking in mock interviews — this course was a game-changer for me.',
    rating: 5,
    course: 'Spoken English'
  },
 
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          
          <h2 className="text-4xl font-bold text-[#2554A4] mb-6">
            What Our Students Review
          </h2>
          <p className="text-lg text-[#32325D]">
            Don&apos;t just take our word for it. Hear from our students about their learning experience.
          </p>
        </div>
        {/* main div */}

        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative overflow-hidden min-h-[500px] sm:min-h-[400px]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  
                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
                className="absolute inset-0"
              >
                <div className="bg-blue-100 rounded-2xl shadow-xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                        <Image
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].name}
                          width={128}
                          height={128}
                          className="object-cover"
                          priority
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-blue-600 mb-3">
                        {testimonials[currentIndex].role}
                      </p>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                        {testimonials[currentIndex].course}
                      </span>
                    </div>
                    <div className="md:w-2/3 flex items-center">
                      <div className="relative">
                        <FaQuoteLeft className="text-blue-600 text-5xl absolute -left-7 -top-15" />
                        <div className="relative">
                          <blockquote 
                            className={`relative z-10 text-lg text-gray-700 transition-all duration-300 ${
                              expandedTestimonial === testimonials[currentIndex].id 
                                ? 'max-h-full' 
                                : 'max-h-32 sm:max-h-24 overflow-hidden'
                            }`}
                          >
                          {testimonials[currentIndex].content}
                        </blockquote>
                          <button 
                            onClick={() => toggleExpand(testimonials[currentIndex].id)}
                            className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none"
                          >
                            {expandedTestimonial === testimonials[currentIndex].id ? 'Show less' : 'Read more'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          {/* left right button */}

          <button
            onClick={prevSlide}
            className="absolute -left-5 top-1/3 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-white shadow-lg text-blue-600 hover:bg-blue-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-5 top-1/3 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-white shadow-lg text-blue-600 hover:bg-blue-50 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
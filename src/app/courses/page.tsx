'use client';

import React, { useState } from 'react';
import CourseCard from '@/components/courses/CourseCard';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');

  // Sample course data - replace with your actual data
  const courses = [
    {
      id: '1',
      title: 'Web Development – From Beginner to Full Stack Developer',
      description: 'This course is designed to transform beginners into job-ready developers. Learn step by step from HTML & CSS to advanced JavaScript, React, Node.js, and MongoDB, building real-world projects along the way.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      duration: '6 Months (Onsite Classes – Sat & Sun 2:00pm–5:00pm + 1 Online Session on Weekdays)',
      level: 'Beginner',
      // students: 1245,
      // price: '$299',
      category: 'Web Development',
      
      whatsappLink: 'https://wa.me/923334834116?text=I%20want%20to%20enroll%20in%20Web%20Development%20Bootcamp',
    },
    {
      id: '2',
      title: 'COMET – Computer Operations & Modern Essential Tools',
      description: 'COMET is designed for beginners and students who want to build strong digital foundations. From computer basics to essential modern tools, this course prepares you for education, freelancing, and the job market.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '2 Months (Physical Classes – Multiple Time Slots Available)',
      level: 'Beginner',
      // students: 892,
      // price: '$349',  
      category: 'COMET',
      whatsappLink: 'https://wa.me/923334834116?text=I%20want%20to%20enroll%20in%20COMET',
    },
    {
      id: '3',
      title: 'App Development – Build & Launch Your Own Mobile Apps',
      description: 'This course takes you from beginner to professional in mobile app development using Flutter & Dart. With hands-on practice, real-world projects, and deployment guidance, you’ll be ready to create and publish your own apps.',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '2 Months (Weekend Physical Classes – Sat & Sun 11:00am–1:20pm)',
      level: 'Beginner',
      // students: 756,
      // price: '$279',
      category: 'App Development',
      whatsappLink: 'https://wa.me/923334834116?text=I%20want%20to%20enroll%20in%20App%20Development',
    },
    {
      id: '4',
      title: 'Graphic Designing – From Creativity to Career',
      description: 'This course is designed to transform beginners into professional graphic designers. Learn step by step from basic design principles to advanced tools like Adobe Photoshop, Illustrator, and InDesign, building real-world projects along the way.',
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '2 Months – 2 Modules',
      level: 'Beginner',
      // students: 1023,
      // price: '$249',
      category: 'Design',
      whatsappLink: 'https://wa.me/923334834116?text=I%20want%20to%20enroll%20in%20Graphic%20Designing',
    },
    {
      id: '5',
      title: 'Spoken English – Communication & Confidence Building',
      description: 'This course is designed to improve your English speaking, listening, reading, and writing skills with practical methods. It focuses on boosting confidence, building vocabulary, and mastering communication for education, professional growth, and daily use.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      duration: '2 Months (Physical Classes – Flexible Time Slots)',
      level: 'Beginner',
      // students: 543,
      // price: '$399',
      category: 'Spoken English',
      whatsappLink: 'https://wa.me/923334834116?text=I%20want%20to%20enroll%20in%20Spoken%20English',
    },
    {
      id: '6',
      title: 'Digital Marketing – From Basics to Professional Campaigns',
      description: 'This course is designed to equip you with the most in-demand digital marketing skills. Learn how to plan, execute, and optimize campaigns across multiple platforms, with hands-on practice in real industry tools and strategies.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '2 Months (Physical Classes – Flexible Time Slots)',
      level: 'Beginner',
      // students: 1342,
      // price: '$229',
      category: 'Marketing',
      whatsappLink: 'https://wa.me/923334834116?text=I%20want%20to%20enroll%20in%20Digital%20Marketing',
    },
    {
      id: '7',
      title: 'IELTS Preparation – Unlock Global Opportunities',
      description: 'This course equips students with practical strategies and personalized training to achieve their target band score in IELTS Academic or General. Learn the proven methods to excel in Listening, Reading, Writing, and Speaking with real test practices and expert guidance.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.3.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      duration: '2 Months (Mon–Thu 3:00pm–5:00pm, Physical Classes)',
      level: 'Beginner',
      // students: 1342,
      // price: '$229',
      category: 'IELTS',
      whatsappLink: 'https://wa.me/923334834116?text=I%20want%20to%20enroll%20in%20IELTS%20Preparation',
    },
  ];

  // Get unique categories for filter
  const categories = ['All', ...new Set(courses.map(course => course.category))];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'All' || course.category === category;
    const matchesLevel = level === 'All' || course.level === level;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#32a1da] to-[#2554A4] opacity-90 text-[white]  py-20 mt-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Course</h1>
          <p className="text-xl text-[white] max-w-3xl mx-auto mb-8">
            Browse our wide range of professional courses and start your learning journey today
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full py-4 px-6 pr-12 rounded-lg border-2 border-[white] text-[white] focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[white] text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
              <FiFilter className="text-gray-500 mr-2" />
              <span className="text-gray-700 mr-2">Filter:</span>
              
              <div className="relative group">
                <button className="flex items-center text-gray-700">
                  {category}
                  <FiChevronDown className="ml-1" />
                </button>
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg py-1 hidden group-hover:block">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${category === cat ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <span className="mx-2 text-gray-300">|</span>
              
              <div className="relative group">
                <button className="flex items-center text-gray-700">
                  {level}
                  <FiChevronDown className="ml-1" />
                </button>
                <div className="absolute z-10 mt-2 w-32 rounded-md shadow-lg py-1 hidden group-hover:block">
                  {levels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setLevel(lvl)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${level === lvl ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
              
              {(category !== 'All' || level !== 'All') && (
                <button 
                  onClick={() => {
                    setCategory('All');
                    setLevel('All');
                  }}
                  className="ml-4 text-sm text-blue-600 hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
          
          <div className="text-gray-600">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="mx-4 grid grid-cols-1 gap-6 sm:mx-6 sm:grid-cols-2 lg:mx-auto lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setCategory('All');
                setLevel('All');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
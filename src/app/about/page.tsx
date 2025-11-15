'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTarget, FiAward, FiHeart, FiArrowRight } from 'react-icons/fi';
import abdulWaheed from '../../../public/content/abdulwaheed.jpg';
import muazamMughal from '../../../public/content/muazamz.png';
import maleAvatar from '../../../public/content/male.png';


const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Abdul Waheed',
      role: 'CEO & Founder',
      image: abdulWaheed,
      bio: 'Visionary leader, passionate about technology and Teaching.'
    },
    {
      name: 'Ahmad Ali',
      role: 'Senior Graphic Designer',
      image: maleAvatar,
      bio: ' 5+ years in graphic design, 2000+ Fiverr orders, top-rated seller, and experienced in branding for startups & international firms.'
    },
    {
      name: 'Muazam Mughal',
      role: 'Lead Developer',
      image: muazamMughal,
      bio: 'Full-stack developer with expertise in modern web technologies.'
    },
    {
      name: 'Muhammad Muneeb Javed',
      role: 'Digital Marketing Specialist',
      image: maleAvatar,
      bio: ' Industry professional with real campaign experience, expert in Meta Ads, Instagram Growth & Strategic Branding.'
    },
    {
      name: 'Asad',
      role: ' Crypto & Trading Instructor',
      image: maleAvatar,
      bio: ' 9+ years of hands-on halal crypto trading and blockchain knowledge, guiding students in secure and smart investing.'
    },
    {
      name: 'Umar Jameel ',
      role: ' Executive Coordinator',
      image: maleAvatar,
      bio: ' Executive Coordinator | 2+ years of experience in coordinating and managing projects, ensuring smooth operations and successful outcomes.'
    },

  ];

  const values = [
    {
      icon: <FiTarget className="w-8 h-8 text-blue-600" />,
      title: 'Our Mission',
      description: ' To build a skillful society that can compete globally while upholding ethics and professionalism.'
    },
    {
      icon: <FiAward className="w-8 h-8 text-blue-600" />,
      title: 'Our Vision',
      description: 'To provide affordable, hands-on IT training that prepares students for freelancing, jobs, and entrepreneurship — while connecting top performers with real projects and businesses.'
    },
    {
      icon: <FiHeart className="w-8 h-8 text-blue-600" />,
      title: 'Our Values',
      description: 'Build Sahiwal’s most trusted IT hub and expand nationwide, Provide free career counseling to guide students into the right fields, Ensure no talented student misses opportunities due to fee barriers, Develop SkillOrbit into a future-ready IT agency + software house'}
];

  return (
    <div className="min-h-screen mt-6">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#32a1da] to-[#2554A4] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Team working together"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-6xl mx-auto">
            SkillOrbit is more than an IT training center — its a mission to empower individuals with practical skills, career counseling, and real opportunities. We provide affordable, market-driven IT courses and professional services that help students, freelancers, and businesses grow with confidence.

            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            {/* <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Story</h2> */}
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Passion for Innovation
            </p>
            <p className="mt-4 max-w-7xl text-xl text-gray-500 lg:mx-auto">
            At SkillOrbit&rsquo; we believe degrees alone don’t define success — real, practical skills do. That’s why we’ve built a purpose-driven platform where education meets empowerment. Our mission is to make IT skills accessible, affordable, and impactful for everyone.

            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        {value.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">{value.title}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    

      {/* Team Section */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


        {/* FAQ Section */}
        <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#2554A4] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-[#32325D] max-w-2xl mx-auto">
              Everything you need to know about our courses and training programs
            </p>
          </div>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-[#32a1da] mr-3">Q1</span>
                  How much is the fee for courses?
                </h3>
                <div className="mt-2 pl-9 text-gray-600">
                  <p>👉 Each course has an affordable monthly fee starting from 9,500 PKR.</p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-[#32a1da] mr-3">Q2</span>
                  Are classes online or physical?
                </h3>
                <div className="mt-2 pl-9 text-gray-600">
                  <p>👉 Primarily physical for professional environment. Some courses offer online sessions.</p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-[#32a1da] mr-3">Q3</span>
                  Do I get a certificate?
                </h3>
                <div className="mt-2 pl-9 text-gray-600">
                  <p>👉 Yes, SkillOrbit provides certificates upon course completion.</p>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-[#32a1da] mr-3">Q4</span>
                  I&apos;m a beginner. Can I still join?
                </h3>
                <div className="mt-2 pl-9 text-gray-600">
                  <p>👉 Absolutely! COMET and Spoken English are designed for beginners.</p>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-[#32a1da] mr-3">Q5</span>
                  What if I don&apos;t like the course?
                </h3>
                <div className="mt-2 pl-9 text-gray-600">
                  <p>👉 We provide free career counseling and can help you shift to a more suitable field.</p>
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-[#32a1da] mr-3">Q6</span>
                  Can I work on projects after training?
                </h3>
                <div className="mt-2 pl-9 text-gray-600">
                  <p>👉 Yes, top-performing students will be linked with small projects, in-house tasks, or software house partners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-[#32a1da] to-[#2554A4]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your next project?</span>
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us today and lets create something amazing together.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              Get in Touch
              <FiArrowRight className="ml-3 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
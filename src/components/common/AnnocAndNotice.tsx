"use client";

import React, { useState } from 'react';
import { FaBullhorn, FaBell, FaChevronRight, FaCalendarAlt, FaUserTie } from 'react-icons/fa';

type TabType = 'announcements' | 'notices';

interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  isNew: boolean;
}

const AnnocAndNotice = () => {
  const [activeTab, setActiveTab] = useState<TabType>('announcements');

  const announcements: Announcement[] = [
    {
      id: 1,
      title: 'New Course Module Released',
      description: 'New course module is now available. Crypto-Trading, Web Development, COMET, App Development, Graphic Designing, IELTS Preparation, Digital Marketing',
      date: '2025-09-16',
      author: 'Skill Orbit',
      isNew: true
    },
  
    // {
    //   id: 3,
    //   title: 'Assignment Deadline Extended',
    //   description: 'The deadline for the React project has been extended to next Monday.',
    //   date: '3 days ago',
    //   author: 'Prof. Williams',
    //   isNew: false
    // }
  ];

  const notices = [
    {
      id: 1,
      title: 'New Course Module Released',
      description: 'New course module is now available. Crypto-Trading, Web Development, COMET, App Development, Graphic Designing, IELTS Preparation, Digital Marketing',
      date: '2025-09-16',
      type: 'New'
    },
    // {
    //   id: 2,
    //   title: 'New Feature: Study Groups',
    //   description: 'Create and join study groups directly from your dashboard to collaborate with peers.',
    //   date: '2023-09-08',
    //   type: 'feature'
    // },
    // {
    //   id: 3,
    //   title: 'Mobile App Update',
    //   description: 'Update your mobile app to the latest version for better performance and new features.',
    //   date: '2023-09-05',
    //   type: 'update'
    // }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#2554A4] mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-[#32325D]">
            Never miss important updates, announcements, and notices about your courses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('announcements')}
              className={`flex-1 py-4 px-6 text-center font-medium text-sm md:text-base transition-colors ${
                activeTab === 'announcements'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <FaBullhorn className="w-4 h-4" />
                <span>Announcements</span>
                {announcements.some(a => a.isNew) && (
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                )}
              </div>
            </button>
            <button
              onClick={() => setActiveTab('notices')}
              className={`flex-1 py-4 px-6 text-center font-medium text-sm md:text-base transition-colors ${
                activeTab === 'notices'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <FaBell className="w-4 h-4" />
                <span>Notices</span>
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'announcements' ? (
              <div className="space-y-6">
                {announcements.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          {item.isNew && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaUserTie className="w-3.5 h-3.5" />
                            {item.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="w-3.5 h-3.5" />
                            {item.date}
                          </span>
                        </div>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <FaChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="p-5 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {notice.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{notice.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FaCalendarAlt className="w-3.5 h-3.5" />
                          <span>{notice.date}</span>
                        </div>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <FaChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p   className="w-full py-2.5 text-center text-blue-600 font-medium  rounded-md transition-colors">
              View  {activeTab === 'announcements' ? 'announcements' : 'notices'} 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnocAndNotice;
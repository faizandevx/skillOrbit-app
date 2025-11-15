import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt, FaRegStar, FaPlay, FaClock, FaUsers, FaGlobe} from 'react-icons/fa';
import { MdOutlineCategory, MdOutlineSchool } from 'react-icons/md';
import coursesData from '@/data/course2.json';

type Course = {
  id: number;
  title: string;
  instructor: string;
  instructorImage: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  students?: number;
  rating: number;
  reviews: number;
  price: number;
  discountPrice?: number;
  language: string;
  certificate: boolean;
  thumbnail: string;
  description?: string;
  whatYouWillLearn?: string[];
  requirements?: string[];
  syllabus?: Array<{
    week: string;
    title: string;
    topics: string[];
  }>;
};

const CourseDetails = ({ params }: { params: { id: string } }) => {
  const course = (coursesData.courses as Course[]).find(course => course.id === parseInt(params.id));

  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Course not found</h2>
        <Link href="/courses" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Browse All Courses
        </Link>
      </div>
    </div>;
  }

  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {renderRating(course.rating)}
                  </div>
                  <span className="ml-2 text-gray-700">{course.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{course.reviews} reviews</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center text-gray-600">
                  <FaUsers className="mr-1" />
                  <span>{course.students?.toLocaleString()} students</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <MdOutlineCategory className="mr-2" />
                  <span>{course.category}</span>
                </div>
                <div className="flex items-center">
                  <MdOutlineSchool className="mr-2" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="mr-2" />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Image 
                    src={course.instructorImage} 
                    alt={course.instructor}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="ml-2 font-medium text-gray-800">Instructor: {course.instructor}</span>
                </div>
              </div>
            </div>

            {/* <div className="md:w-1/3">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 sticky top-6">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={course.thumbnail} 
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button className="bg-white rounded-full p-4 text-blue-600 hover:scale-110 transition-transform">
                      <FaPlay className="text-lg" />
                    </button>
                  </div>
                </div>

                // <div className="space-y-4">
                //   <div className="flex justify-between items-center">
                //     <span className="text-2xl font-bold text-gray-900">
                //       ${course.discountPrice ? course.discountPrice.toFixed(2) : course.price.toFixed(2)}
                //     </span>
                //     {course.discountPrice && (
                //       <div className="flex items-center">
                //         <span className="text-gray-500 line-through mr-2">${course.price.toFixed(2)}</span>
                //         <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                //           {Math.round(((course.price - course.discountPrice) / course.price) * 100)}% OFF
                //         </span>
                //       </div>
                //     )}
                //   </div>

                //   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition">
                //     Enroll Now
                //   </button>

                //   <div className="border-t border-gray-200 pt-4">
                //     <h3 className="font-medium text-gray-900 mb-3">This course includes:</h3>
                //     <ul className="space-y-2 text-gray-600">
                //       <li className="flex items-center">
                //         <FaPlay className="text-blue-500 mr-2 text-xs" />
                //         <span>{course.lessons} on-demand video lessons</span>
                //       </li>
                //       <li className="flex items-center">
                //         <FaClock className="text-blue-500 mr-2" />
                //         <span>{course.duration} of content</span>
                //       </li>
                //       {course.certificate && (
                //         <li className="flex items-center">
                //           <FaCertificate className="text-blue-500 mr-2" />
                //           <span>Certificate of completion</span>
                //         </li>
                //       )}
                //       <li className="flex items-center">
                //         <FaGlobe className="text-blue-500 mr-2" />
                //         <span>Available in {course.language}</span>
                //       </li>
                //     </ul>
                //   </div>
                // </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* this is the most latest nuild */}

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* What You'll Learn */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What you ll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn?.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            {course.syllabus && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>
                <div className="space-y-4">
                  {course.syllabus.map((week, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer">
                        <h3 className="font-medium text-gray-900">Week {week.week}: {week.title}</h3>
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="px-4 py-2 bg-white">
                        <ul className="space-y-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center py-2 border-b border-gray-100 last:border-0">
                              <FaPlay className="text-blue-500 mr-3 text-xs" />
                              <span className="text-gray-700">{topic}</span>
                              {/* <span className="ml-auto text-sm text-gray-500">10:45</span> */}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements */}
            {course.requirements && course.requirements.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {course.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instructor */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructor</h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={course.instructorImage} 
                    alt={course.instructor}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{course.instructor}</h3>
                  <p className="text-gray-600 mb-2">Senior Instructor</p>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {renderRating(4.8)}
                    </div>
                    <span className="ml-2 text-gray-700">4.8 Instructor Rating</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    {course.instructor.split(' ')[0]} is a professional with over 8 years of experience in {course.category}. 
                    They have taught over 100 students and received 20+ positive reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Course Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-900 mb-4">Course Features</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium text-gray-800">{course.duration}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Lessons</span>
                  <span className="font-medium text-gray-800">{course.lessons}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Skill Level</span>
                  <span className="font-medium text-gray-800">{course.level}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Language</span>
                  <span className="font-medium text-gray-800">{course.language}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Certificate</span>
                  <span className="font-medium text-gray-800">{course.certificate ? 'Yes' : 'No'}</span>
                </li>
              </ul>
            </div>

            {/* Share Course */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-900 mb-4">Share this course</h3>
              <div className="flex space-x-4">
                <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
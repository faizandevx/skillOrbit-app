import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  features,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <h3 className="absolute bottom-0 left-0 right-0 p-4 text-xl font-bold text-white">
          {title}
        </h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        
        <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="https://wa.me/+923334834116" target="_blank" >
        
        <button className="w-full bg-[#32A1DA] hover:bg-[#2554A4] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
          Learn More
        </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

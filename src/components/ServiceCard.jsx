// ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ imgSrc, title, description, linkUrl, linkText }) => {
  return (
    // Container untuk efek 3D perspective
    <div className="group h-72 w-full [perspective:1000px]">
      {/* Container utama yang akan berputar */}
      <div className="relative h-full w-full rounded-xl shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Sisi Depan Kartu */}
        <div className="absolute inset-0 bg-white p-6 rounded-xl border border-gray-200 [backface-visibility:hidden]">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img 
              src={imgSrc} 
              alt={title} 
              className="h-24 mb-5 object-contain" 
            />
            <h3 className="font-semibold text-gray-800 text-lg leading-snug">
              {title}
            </h3>
          </div>
        </div>

        {/* Sisi Belakang Kartu */}
        <div className="absolute inset-0 bg-white p-6 rounded-xl border border-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col items-center justify-center h-full text-center gap-4">
            <p className="text-sm text-gray-700">
              {description}
            </p>
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
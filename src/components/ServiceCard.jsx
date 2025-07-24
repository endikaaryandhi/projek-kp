// ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ imgSrc, title, description, linkUrl, linkText }) => {
  return (
    <div className="group h-56 w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Sisi Depan */}
        <div className="absolute inset-0 bg-white p-6 rounded-xl border border-gray-200 [backface-visibility:hidden]">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img 
              src={imgSrc} 
              alt={title} 
              className="h-20 mb-4 object-contain" 
            />
            <h3 className="font-semibold text-gray-800 text-base">{title}</h3>
          </div>
        </div>

        {/* Sisi Belakang */}
        <div className="absolute inset-0 bg-white p-6 rounded-xl border border-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col items-center justify-center h-full text-center gap-4">
            <p className="text-sm text-gray-700">{description}</p>
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#0D246D] text-white font-medium rounded-md hover:bg-blue-800 transition duration-300 text-sm"
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

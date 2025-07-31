import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ imgSrc, title, description, linkUrl, linkText, clickable }) => {
  const isExternal = linkUrl.startsWith('http');

  const CardContent = () => (
  <div className="relative h-56 w-full rounded-3xl shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

    {/* Front */}
    <div className="absolute inset-0 bg-white p-6 rounded-3xl border border-gray-200 [backface-visibility:hidden]">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <img src={imgSrc} alt={title} className="h-20 mb-5 object-contain" />
        <h3 className="font-semibold text-gray-800 text-lg leading-snug">
          {title}
        </h3>
      </div>
    </div>

    {/* Back */}
    <div className="absolute inset-0 bg-white p-6 rounded-3xl border border-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
      <div className="flex flex-col items-center justify-center h-full text-center gap-2">
        <p className="text-sm text-gray-700">{description}</p>

        {/* Tampilkan tombol biru hanya jika tidak clickable */}
        {!clickable && (
          isExternal ? (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {linkText}
            </a>
          ) : (
            <Link
              to={linkUrl}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {linkText}
            </Link>
          )
        )}
      </div>
    </div>
  </div>
);


  // Wrapper logika
  if (clickable) {
    if (isExternal) {
      return (
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="group h-72 w-full block [perspective:1000px]">
          <CardContent />
        </a>
      );
    } else {
      return (
        <Link to={linkUrl} className="group h-72 w-full block [perspective:1000px]">
          <CardContent />
        </Link>
      );
    }
  }

  return (
    <div className="group h-72 w-full [perspective:1000px]">
      <CardContent />
    </div>
  );
};

export default ServiceCard;

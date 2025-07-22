import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/bbpjnjtgdiy.png'; 

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Pengaduan', path: '/pengaduan' }
  ];

  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 font-sans border-b border-gray-200">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-[60px] mr-[15px]" />
      </div>

      <ul className="flex list-none m-0 p-0">
        {links.map(({ name, path }) => {
          const isActive = location.pathname === path;

          return (
            <li
              key={name}
              className={`ml-[30px] border-b-[3px] ${
                isActive ? 'border-yellow-500' : 'border-transparent'
              }`}
            >
              <Link
                to={path}
                className={`no-underline text-lg pb-2 transition-colors duration-300 ease-in-out ${
                  isActive
                    ? 'text-black font-bold'
                    : 'text-gray-500 font-medium hover:text-black'
                }`}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

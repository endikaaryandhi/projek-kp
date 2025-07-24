import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/bbpjnjtgdiy.png';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Pengaduan', path: '/pengaduan' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 font-semibold shadow-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-[44px] mr-4" />
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-6">
          {links.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <li
                key={name}
                className={`border-b-[2px] ${
                  isActive ? 'border-yellow-500' : 'border-transparent'
                }`}
              >
                <Link
                  to={path}
                  className={`no-underline text-sm pb-1 transition-colors duration-300 ${
                    isActive
                      ? 'text-black font-bold'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-2">
          <ul className="flex flex-col space-y-2">
            {links.map(({ name, path }) => {
              const isActive = location.pathname === path;
              return (
                <li key={name}>
                  <Link
                    to={path}
                    onClick={() => setMenuOpen(false)} // Tutup menu setelah klik
                    className={`block py-2 px-3 rounded text-sm ${
                      isActive
                        ? 'bg-yellow-100 text-black font-bold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

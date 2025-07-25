import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 px-4 sm:px-6 md:px-10 py-3 font-semibold shadow-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    >
        <div className="relative flex items-center justify-between">
        {/* Hamburger di ujung kanan */}
        <button
          className="absolute right-4 top-4 md:hidden text-gray-700 z-10"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>

        <div className="relative flex items-center justify-between">
        {/* Logo ujung kiri */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 sm:h-11 md:h-12 lg:h-14 cursor-pointer" />
          </Link>
        </div>
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-6">
          {links.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={name} className={`border-b-2 ${isActive ? 'border-yellow-500' : 'border-transparent'}`}>
                <Link
                  to={path}
                  className={`no-underline text-base pb-1 transition-colors duration-300 ${
                    isActive ? 'text-black font-bold' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Menu Mobile (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden mt-2 px-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col space-y-2">
              {links.map(({ name, path }) => {
                const isActive = location.pathname === path;
                return (
                  <li key={name}>
                    <Link
                      to={path}
                      onClick={() => setMenuOpen(false)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

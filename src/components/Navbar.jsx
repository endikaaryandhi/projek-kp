import React, { useState } from 'react';
import logo from '../assets/bbpjnjtgdiy.png'; 

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Layanan');

  const links = ['Beranda', 'Layanan', 'Pengaduan'];

  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 font-sans border-b border-gray-200">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-[60px] mr-[15px]" />
      </div>

      <ul className="flex list-none m-0 p-0">
        {links.map((link) => (
          <li
            key={link}
            className={`
              ml-[30px] 
              ${activeLink === link ? 'border-b-[3px] border-accent' : 'border-b-[3px] border-transparent'}
            `}
            onClick={() => setActiveLink(link)}
          >
            <a
              href={`#${link.toLowerCase()}`}
              className={`
                no-underline text-lg pb-2 transition-colors duration-300 ease-in-out
                ${activeLink === link 
                  ? 'text-primary-text font-bold' 
                  : 'text-secondary-text font-medium hover:text-primary-text'
                }
              `}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
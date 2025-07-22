import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/bbpjnjtgdiy.png'; 

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Layanan');

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <div className="logo-text">
        </div>
      </div>
      <ul className="navbar-links">
        <li
          className={activeLink === 'Beranda' ? 'active' : ''}
          onClick={() => setActiveLink('Beranda')}
        >
          <a href="#beranda">Beranda</a>
        </li>
        <li
          className={activeLink === 'Layanan' ? 'active' : ''}
          onClick={() => setActiveLink('Layanan')}
        >
          <a href="#layanan">Layanan</a>
        </li>
        <li
          className={activeLink === 'Pengaduan' ? 'active' : ''}
          onClick={() => setActiveLink('Pengaduan')}
        >
          <a href="#pengaduan">Pengaduan</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
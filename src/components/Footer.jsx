// src/components/Footer.jsx

import React from 'react';

// Ikon YouTube (SVG)
const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2 fill-current"
    viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.427-.002 6.135 0 9.715v4.57c.002 3.58 1.49 6.288 4.385 6.531 3.6.245 11.626.246 15.23 0 2.895-.243 4.383-2.95 4.385-6.531v-4.57c-.002-3.58-1.49-6.288-4.385-6.531zM9.5 15.565V7.835l6 3.865-6 3.865z"/>
  </svg>
);

const Footer = () => {
  const links = {
    profil: {
      visiMisi: '#',
      struktur: '#',
      sejarah: '#',
      tugasFungsi: '#',
    },
    sosial: {
      instagram: '#',
      youtube: '#',
    },
    kontak: '#',
  };

  return (
    <footer className="bg-[#0D246D] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Kolom 1: Profil */}
          <div>
            <h3 className="text-lg font-semibold border-b-2 border-yellow-400 inline-block mb-4">Profil</h3>
            <ul className="space-y-2 text-sm">
              <li><a href={links.profil.visiMisi} className="hover:text-yellow-400 transition">Visi & Misi</a></li>
              <li><a href={links.profil.struktur} className="hover:text-yellow-400 transition">Struktur Organisasi</a></li>
              <li><a href={links.profil.sejarah} className="hover:text-yellow-400 transition">Sejarah</a></li>
              <li><a href={links.profil.tugasFungsi} className="hover:text-yellow-400 transition">Tugas & Fungsi</a></li>
            </ul>
          </div>

          {/* Kolom 2: Media Sosial */}
          <div>
            <h3 className="text-lg font-semibold border-b-2 border-yellow-400 inline-block mb-4">Media Sosial</h3>
            <ul className="space-y-2 text-sm">
              <li><a href={links.sosial.instagram} className="hover:text-yellow-400 transition">Instagram</a></li>
              <li>
                <a href={links.sosial.youtube} className="flex items-center hover:text-yellow-400 transition">
                  <YouTubeIcon />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Lokasi */}
          <div>
            <h3 className="text-lg font-semibold border-b-2 border-yellow-400 inline-block mb-4">Lokasi</h3>
            <p className="text-sm leading-relaxed">
              BBPJN Jawa Tengah - DI Yogyakarta<br />
              Jl. Soekarno–Hatta Km.26, Bergas,<br />
              Kabupaten Semarang<br />
              Jawa Tengah
            </p>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h3 className="text-lg font-semibold border-b-2 border-yellow-400 inline-block mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={links.kontak} className="hover:text-yellow-400 transition">Kontak</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis bawah */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} BBPJN JATENG DIY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

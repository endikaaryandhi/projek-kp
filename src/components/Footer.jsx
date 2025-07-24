import React, { useState } from 'react';
import { FaInstagram,  FaYoutube } from "react-icons/fa"; // Fa = Font Awesome

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-2 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.427-.002 6.135 0 9.715v4.57c.002 3.58 1.49 6.288 4.385 6.531 3.6.245 11.626.246 15.23 0 2.895-.243 4.383-2.95 4.385-6.531v-4.57c-.002-3.58-1.49-6.288-4.385-6.531zM9.5 15.565V7.835l6 3.865-6 3.865z" />
  </svg>
);

const Footer = () => {
  const [showMap, setShowMap] = useState(false);

  const links = {
    profil: {
      visiMisi: 'https://binamarga.pu.go.id/balai-jateng-diy/konten/profil/visi-misi',
      struktur: 'https://binamarga.pu.go.id/balai-jateng-diy/konten/profil/struktur-organisasi',
      sejarah: 'https://binamarga.pu.go.id/balai-jateng-diy/konten/profil/sejarah',
      tugasFungsi: 'https://binamarga.pu.go.id/balai-jateng-diy/konten/profil/tugas-dan-fungsi',
    },
    sosial: {
      instagram: 'https://www.instagram.com/pu_jalan_jatengdiy/',
      youtube: 'https://youtube.com/@pu_jalan_jatengdiy?feature=shared',
    },
    kontak: '#',
  };

  return (
    <footer className="bg-[#0D246D] text-white font-sans text-sm relative z-10 rounded-t-[6rem]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-6 text-center">

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          
          {/* Kolom 1: Profil */}
          <div>
            <h3 className="text-base font-semibold border-b-2 border-yellow-400 inline-block mb-3">Profil</h3>
            <ul className="space-y-1 text-justify">
              <li><a href={links.profil.visiMisi} className="hover:text-yellow-400 transition">Visi & Misi</a></li>
              <li><a href={links.profil.struktur} className="hover:text-yellow-400 transition">Struktur Organisasi</a></li>
              <li><a href={links.profil.sejarah} className="hover:text-yellow-400 transition">Sejarah</a></li>
              <li><a href={links.profil.tugasFungsi} className="hover:text-yellow-400 transition">Tugas & Fungsi</a></li>
            </ul>
          </div>

          {/* Kolom 2: Media Sosial */}
          <div>
            <h3 className="text-base font-semibold border-b-2 border-yellow-400 inline-block mb-3">Media Sosial</h3>
            <ul className="space-y-1 text-justify">
              <li>
                <a href={links.sosial.instagram} className="flex items-center hover:text-yellow-400 transition space-x-2">
                  <FaInstagram size={25}/>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href={links.sosial.youtube} className="flex items-center hover:text-yellow-400 transition space-x-2">
                  <FaYoutube size={25}/>
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Lokasi */}
          <div>
            <h3 className="text-base font-semibold border-b-2 border-yellow-400 inline-block mb-3">Lokasi</h3>
            <button
              onClick={() => setShowMap(true)}
              className="block leading-relaxed hover:text-yellow-400 transition text-justify"
            >
              BBPJN Jawa Tengah - DI Yogyakarta<br />
              Jl. Soekarno–Hatta Km.26, Bergas,<br />
              Kabupaten Semarang<br />
              Jawa Tengah
            </button>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h3 className="text-base font-semibold border-b-2 border-yellow-400 inline-block mb-3">Kontak</h3>
            <ul className="space-y-1">
              <li><a href={links.kontak} className="hover:text-yellow-400 transition">Kontak</a></li>
            </ul>
          </div>
        </div>

        {/* Garis bawah */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} BBPJN JATENG DIY. All rights reserved.
        </div>
      </div>

      {/* Modal Map */}
      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-sm font-semibold text-gray-800">Lokasi di Google Maps</h2>
              <button onClick={() => setShowMap(false)} className="text-gray-600 hover:text-red-500 text-lg">&times;</button>
            </div>
            <a
              href="https://maps.app.goo.gl/w6wHfZMQvK5nDwfbA"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.512927333471!2d110.42529119999999!3d-7.182159200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7087f811cb5037%3A0x47bd425a70eca1e9!2sBalai%20Besar%20Pelaksanaan%20Jalan%20Nasional%20Jawa%20Tengah%20-%20DI%20Yogyakarta!5e0!3m2!1sen!2ssg!4v1753158744598!5m2!1sen!2ssg"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Lokasi BBPJN"
              ></iframe>
            </a>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import HeroBackground from '../assets/flyover.jpeg'; 
import PanduanImage from '../assets/panduan.png'; 

// FAQ 
const FaqItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 px-2 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};


const HomePage = () => {
  return (
    <div className="bg-white">
      {/*BAGIAN HEADER*/}
      <section
        className="relative h-[25rem] md:h-[37rem] bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E5D]/90 via-[#1337AD]/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-6">
            Website Pelayanan
          </h1>
          <a
            href="/layanan"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-900 transition-colors duration-300"
          >
            LAYANAN
          </a>
        </div>
      </section>

      {/*PENGERTIAN*/}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pengertian</h2>
          <div className="max-w-3xl mx-auto text-left text-gray-700 space-y-4">
            <p>
              Website ini merupakan sarana digital yang dikembangkan oleh Balai Besar Pelaksanaan Jalan Nasional Jawa Tengah - D.I. Yogyakarta sebagai media informasi, layanan, serta Pengaduan dan regulasi yang berkaitan dengan pelayanan di Balai Besar Pelaksanaan Jalan Nasional Jawa Tengah - D.I. Yogyakarta.
            </p>
            <p>
              Melalui website ini, pengguna dapat mengakses layanan-layanan dan Pengaduan sebagai berikut:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Layanan Informasi Publik</li>
              <li>Layanan Pemanfaatan Bagian-Bagian Jalan Nasional</li>
              <li>Sertifikasi Laik Operasi (SLO) AMP</li>
              <li>Laboratorium Pengujian Material Bahan Jalan</li>
              <li>Peminjaman Peralatan Konstruksi dengan Cara Sewa</li>
            </ol>
            <p>
              Website ini juga didesain untuk memudahkan navigasi bagi pengguna umum maupun penyedia jasa. Setelah berada di beranda, pengguna tinggal menekan tombol Layanan, pengguna langsung diarahkan ke halaman website atau layanan yang dibutuhkan.
            </p>
          </div>
        </div>
      </section>

      {/*BAGIAN PANDUAN*/}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">PANDUAN</h2>
          <img 
            src={PanduanImage} 
            alt="Panduan Penggunaan Website" 
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </section>
      
      {/*BAGIAN FAQ*/}
      <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">FAQs</h2>
              <div className="space-y-2">
                  <FaqItem question="Ada apa saja pada pelayanan">
                      <p>Jawaban untuk pertanyaan ini akan ditampilkan di sini ketika pengguna mengklik.</p>
                  </FaqItem>
                  <FaqItem question="Ada apa saja pada pelayanan">
                      <p>Ini adalah jawaban untuk pertanyaan kedua. Anda bisa memasukkan konten HTML apa pun di sini.</p>
                  </FaqItem>
                  <FaqItem question="Ada apa saja pada pelayanan">
                      <p>Jawaban untuk pertanyaan ketiga.</p>
                  </FaqItem>
                  <FaqItem question="Ada apa saja pada pelayanan">
                      <p>Jawaban untuk pertanyaan keempat.</p>
                  </FaqItem>
                  <FaqItem question="Ada apa saja pada pelayanan">
                      <p>Jawaban untuk pertanyaan kelima.</p>
                  </FaqItem>
              </div>
          </div>
      </section>

    </div>
  );
};

export default HomePage;
import React, { useState } from 'react';
import HeroBackground from '../assets/flyover.jpeg'; 
import PanduanImage from '../assets/panduan.png'; 
import Survey from '../components/Survey';

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
        <div className="pb-4 px-2 text-gray-600 text-base md:text-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* HEADER */}
      <section
        className="relative h-[25rem] md:h-[37rem] bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E5D]/90 via-[#1337AD]/20 to-transparent z-0" />

        <div className="relative z-10 pl-6 md:pl-[200px]">
          <div className="relative w-[320px] md:w-[510px] h-[100px] bg-blue-500/50 rounded-[10px]">
            <div className="absolute top-6 left-6 w-[290px] md:w-[500px] h-[90px] bg-yellow-400/60 rounded-[10px] z-10" />
            <div className="absolute top-10 left-6 md:left-10 text-white text-xl md:text-[48px] font-bold z-20">
              Website Pelayanan
            </div>
          </div>

          <div className="mt-10 ml-4">
            <a
              href="/layanan"
              className="relative inline-block rounded-full bg-gradient-to-r from-[#007AFF80] to-[#FFCC0080] p-[5px]"
            >
              <span className="block rounded-full bg-black/60 text-white font-bold py-4 px-14 text-2xl hover:bg-black/45 transition-colors duration-300">
                LAYANAN
              </span>
            </a>    
          </div>
        </div>
      </section>

      {/* PENGERTIAN */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Pengertian</h2>
          <div className="max-w-5xl mx-auto text-base md:text-xl text-gray-700 space-y-4 text-justify px-4">
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

      {/* PANDUAN */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">PANDUAN</h2>
          <img 
            src={PanduanImage} 
            alt="Panduan Penggunaan Website" 
            className="mx-auto w-full max-w-3xl h-auto shadow-2xl rounded-md"
          />
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">FAQs</h2>
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

      {/* Tombol Gambar Modal */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-5 right-5 z-[9999] p-0 border-0 bg-transparent cursor-pointer"
      >
        <img
          src="https://sahabat.pu.go.id/traffic/img/modal-logo.png"
          alt="Buka Survei"
          className="h-[100px] md:h-[150px] w-auto"
        />
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 z-[9998] p-4 md:p-10 flex items-center justify-center">
          <div className="bg-white w-full max-w-[1000px] h-[90vh] rounded-2xl overflow-auto relative shadow-xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-4 text-3xl font-bold text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <Survey />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

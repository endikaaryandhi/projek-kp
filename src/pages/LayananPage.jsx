import React, { useState } from "react"; 
import ServiceCard from '../components/ServiceCard';
import laporLogo from '../assets/lapor.png';
import dokumenlogo from '../assets/dokumen.png';
import amplogo from '../assets/amp.png';
import oksiplogo from '../assets/oksip.png';
import alatlogo from '../assets/alat.png';
import pengaduanlogo from '../assets/pengaduan.png';
import bgHeader from "../assets/underpass.png";

const services = [
  {
    imgSrc: laporLogo,
    title: 'Permohonan Informasi Publik',
    description: "Jika ingin melakukan permohonan informasi publik silahkan klik tombol di bawah",
    linkUrl: "https://www.lapor.go.id/",
    clickable: "true"
  },
  {
    imgSrc: dokumenlogo,
    title: 'Laboratorium Pengujian Material Bahan Jalan',
    description: "Jika ingin mengetahui tentang alur pelayanan pengujian silahkan klik tombol di bawah",
    linkUrl: "/layanan/Laboratorium",
    clickable: "true"
  },
  {
    imgSrc: amplogo, 
    title: 'Sertifikasi Asphalt Mixing Plant (AMP)',
    description: "Jika ingin mengetahui tentang alur sertifikasi AMP silahkan klik tombol di bawah",
    linkUrl: "/layanan/Sertifikasi",
    clickable: "true"
  },
  {
    imgSrc: oksiplogo, 
    title: 'Perizinan Pemanfaatan Bagian-Bagian Jalan Nasional',
    description: "Jika ingin melakukan perizinan pemanfaatan bagian-bagian jalan nasional silahkan klik tombol di bawah",
    linkUrl: "https://oksip.pu.go.id",
    clickable: "true"
  },
  {
    imgSrc: alatlogo, 
    title: 'Peminjaman Peralatan Konstruksi dengan Cara Sewa',
    description: "Jika ingin mengetahui tentang alur sertifikasi AMP silahkan klik tombol di bawah",
    linkUrl: "/layanan/Peminjaman",
    clickable: "true"
  },
  {
    imgSrc: pengaduanlogo,
    title: 'Pengaduan',
    description: "Jika ingin mengetahui tentang alur sertifikasi AMP silahkan klik tombol di bawah",
    linkUrl: "/pengaduan",
    clickable: "true"
  },
];

const LayananPage = () => {
  return (
    <div className="bg-white font-sans text-sm text-gray-800 min-h-screen">
      
    {/* Hero Section */}
    <section
      className="relative h-[25rem] md:h-[37rem] bg-cover bg-center flex items-center justify-start"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      {/* Overlay gradasi dari kiri ke kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E5D]/90 via-[#1337AD]/20 to-transparent"></div>

      {/* Konten kiri */}
      <div className="relative z-10 text-white text-left px-4 sm:px-8 md:px-12 max-w-2xl w-full">
        <div className="ml-0 sm:ml-8 md:ml-16 lg:ml-24">
          <h1 className="text-2xl md:text-5xl font-bold mb-10 text-justify">
            Layanan
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Halaman ini merupakan halaman Pengaduan yang berisikan <r/>
            layanan-layanan yang ada pada BPPJN Jatebg-DIY 
          </p>
        </div>
      </div>

      {/* Teks pojok kanan bawah */}
      <div className="absolute bottom-8 right-8 z-10 text-white text-xs sm:text-sm md:text-base">
        Underpass Joglo
      </div>
    </section>

      {/* Services Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0D246D] mb-4">
            Layanan Kami
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

          {/* Grid Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                imgSrc={service.imgSrc}
                title={service.title}
                description={service.description}
                linkUrl={service.linkUrl}
                clickable={service.clickable}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayananPage;

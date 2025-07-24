import React from 'react';
import ServiceCard from '../components/ServiceCard';

import laporLogo from '../assets/lapor.png';
import dokumenlogo from '../assets/dokumen.png';
import amplogo from '../assets/amp.png';
import oksiplogo from '../assets/oksip.png';
import alatlogo from '../assets/alat.png';
import pengaduanlogo from '../assets/pengaduan.png';

const services = [
  {
    imgSrc: laporLogo,
    title: 'Permohonan Informasi Publik',
    description: 'Ajukan permintaan informasi publik secara resmi dan mudah.',
    linkUrl: 'https://ppid.pu.go.id',
    linkText: 'Ajukan Permohonan',
  },
  {
    imgSrc: dokumenlogo,
    title: 'Laboratorium Pengujian Material Bahan Jalan',
    description: 'Layanan uji material jalan dengan standar akreditasi nasional.',
    linkUrl: 'https://example.com/lab-material',
    linkText: 'Lihat Info Lab',
  },
  {
    imgSrc: amplogo,
    title: 'Sertifikasi AMP',
    description: 'Pengajuan sertifikasi untuk Asphalt Mixing Plant (AMP).',
    linkUrl: 'https://example.com/sertifikasi-amp',
    linkText: 'Ajukan Sertifikasi',
  },
  {
    imgSrc: oksiplogo,
    title: 'Perizinan Jalan Nasional',
    description: 'Permohonan izin pemanfaatan jalan nasional secara daring.',
    linkUrl: 'https://perizinan.pu.go.id',
    linkText: 'Ajukan Izin',
  },
  {
    imgSrc: alatlogo,
    title: 'Peminjaman Alat Konstruksi',
    description: 'Sewa alat konstruksi dengan prosedur yang mudah dan cepat.',
    linkUrl: 'https://example.com/peminjaman-alat',
    linkText: 'Sewa Alat',
  },
  {
    imgSrc: pengaduanlogo,
    title: 'Pengaduan',
    description: 'Laporkan keluhan atau masalah terkait infrastruktur jalan.',
    linkUrl: 'https://lapor.go.id',
    linkText: 'Laporkan Sekarang',
  },
];

const LayananPage = () => {
  return (
    <div className="bg-white font-sans text-sm text-gray-800 min-h-screen">
      
      {/* Hero Section */}
      <section
        className="relative h-56 md:h-64 flex items-center justify-center bg-cover bg-center rounded-b-[60px]"
        style={{ backgroundImage: "url('/images/hero-layanan.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-b-[60px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Layanan</h1>
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
                linkText={service.linkText}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayananPage;

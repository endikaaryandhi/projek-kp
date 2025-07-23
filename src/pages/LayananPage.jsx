import React from 'react';
import ServiceCard from '../components/ServiceCard';
import laporLogo from '../assets/lapor.png'
import dokumenlogo from '../assets/dokumen.png'
import amplogo from '../assets/amp.png'
import oksiplogo from '../assets/oksip.png'
import alatlogo from '../assets/alat.png'
import pengaduanlogo from '../assets/pengaduan.png'

const services = [
  {
    imgSrc: laporLogo,
    title: 'Permohonan Informasi Publik',
  },
  {
    imgSrc: dokumenlogo, 
    title: 'Laboratorium Pengujian Material Bahan Jalan',
  },
  {
    imgSrc: amplogo, 
    title: 'Sertifikasi Asphalt Mixing Plant (AMP)',
  },
  {
    imgSrc: oksiplogo, 
    title: 'Perizinan Pemanfaatan Bagian-Bagian Jalan Nasional',
  },
  {
    imgSrc: alatlogo, 
    title: 'Peminjaman Peralatan Konstruksi dengan Cara Sewa',
  },
  {
    imgSrc: pengaduanlogo, 
    title: 'Pengaduan',
  },
];

const LayananPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-72 flex items-center justify-center text-white" 
        style={{ backgroundImage: "url('/images/hero-layanan.jpg')" }} // Ganti dengan path gambar hero Anda
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Layanan</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Layanan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                imgSrc={service.imgSrc} 
                title={service.title} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayananPage;
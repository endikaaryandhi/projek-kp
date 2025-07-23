// Pengaduan.jsx
import React from "react";
import jalanKitaLogo from "../assets/jalankita.png";
import laporLogo from "../assets/lapor.png"; 
import bgHeader from "../assets/canguk.jpg"; 
import ServiceCard from '../components/ServiceCard';

// Data untuk kartu layanan
const services = [
  {
    imgSrc: jalanKitaLogo,
    title: "Jalan Kita (JAK)",
    description: "Kerusakan jalan yang termasuk ke dalam jalan nasional dapat melapor melalui Jalan Kita (Jak).",
    linkUrl: "https://jalankita.binamarga.pu.go.id",
    linkText: "Kunjungi Jalan Kita"
  },
  {
    imgSrc: laporLogo,
    title: "Lapor!",
    description: "Kerusakan jalan selain jalan nasional dapat melapor melalui Lapor!. Layanan aspirasi dan pengaduan online rakyat.",
    linkUrl: "https://www.lapor.go.id",
    linkText: "Kunjungi LAPOR!"
  }
];

const Pengaduan = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bgHeader})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="text-white text-4xl font-bold relative z-10">Pengaduan</h1>
      </div>

      {/* Konten */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Saluran Pengaduan</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12 rounded-full"></div>

        {/* Menggunakan ServiceCard dengan .map() */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
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
      </section>
    </div>
  );
};

export default Pengaduan;
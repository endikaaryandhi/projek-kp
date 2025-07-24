// Pengaduan.jsx
import React from "react";
import jalanKitaLogo from "../assets/jalankita.png";
import laporLogo from "../assets/lapor.png";
import bgHeader from "../assets/canguk.jpg";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    imgSrc: jalanKitaLogo,
    title: "Jalan Kita (JAK)",
    description: "Laporkan kerusakan jalan nasional langsung melalui sistem Jalan Kita (JAK).",
    linkUrl: "https://jalankita.binamarga.pu.go.id",
    linkText: "Kunjungi Jalan Kita",
  },
  {
    imgSrc: laporLogo,
    title: "Lapor!",
    description: "Laporkan infrastruktur non-nasional lewat LAPOR!, sistem pengaduan nasional.",
    linkUrl: "https://www.lapor.go.id",
    linkText: "Kunjungi LAPOR!",
  },
];

const Pengaduan = () => {
  return (
    <div className="bg-white font-sans text-sm text-gray-800 min-h-screen">
    {/* Hero Section */}
    <section
      className="relative h-[25rem] md:h-[35rem] bg-cover bg-center flex items-center justify-start"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      {/* Overlay gradasi dari kiri ke kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E5D]/90 via-[#1337AD]/20 to-transparent"></div>

      {/* Konten kiri */}
      <div className="relative z-10 text-white text-left px-4 sm:px-8 md:px-12 max-w-3xl w-full">
        <div className="ml-0 sm:ml-8 md:ml-16 lg:ml-24">
          <h1 className="text-2xl md:text-5xl font-bold mb-10 text-justify">
            Pengaduan
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Halaman ini merupakan halaman Pengaduan yang berisikan
            pengaduan-pengaduan yang ada pada BBPJN Jateng - DIY
          </p>
        </div>
      </div>

      {/* Teks pojok kanan bawah */}
      <div className="absolute bottom-4 right-4 z-10 text-white text-xs sm:text-sm md:text-base">
        Underpass Joglo
      </div>
    </section>

      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0D246D] mb-4">
            Saluran Pengaduan
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-3xl mx-auto">
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

export default Pengaduan;

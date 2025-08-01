import React from "react";
import jalanKitaLogo from "../assets/jalankita.png";
import laporLogo from "../assets/lapor.png";
import bgHeader from "../assets/canguk.jpg";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    imgSrc: jalanKitaLogo,
    title: "Jalan Kita (JAK)",
    description: "Jika anda menemukan kerusakan jalan di wilayah BBPJN Jateng-DIY silahkan unduh aplikasi Jalan Kita dengan melalui web atau aplikasi mobile app dengan menekan tombol di bawah",
    linkUrl: "https://jalankita.binamarga.pu.go.id",
    linkText: "Jalan Kita"
  },
  {
    imgSrc: laporLogo,
    title: "Lapor!",
    description: "Jika ada keluhan, saran, atau infrastruktur wilayah BBPJN Jateng-DIY yang mengalami kerusakan, silahkan lapor dengan menekan tombol di bawah",
    linkUrl: "https://www.lapor.go.id",
    linkText: "LAPOR!"
  }
];

const Pengaduan = () => {
  return (
    <div className="bg-white font-sans text-sm text-gray-800 min-h-screen">
    <section
      className="relative h-[25rem] md:h-[37rem] bg-cover bg-center flex items-center justify-start"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E5D]/90 via-[#1337AD]/20 to-transparent"></div>
      <div className="relative z-10 text-white text-left px-4 sm:px-8 md:px-12 max-w-2xl w-full">
        <div className="ml-0 sm:ml-8 md:ml-16 lg:ml-24">
          <h1 className="text-2xl md:text-5xl font-bold mb-10 text-justify">
            Pengaduan
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Halaman ini menyediakan informasi dan akses untuk menyampaikan pengaduan terkait infrastruktur dan jalan nasional di wilayah kerja BBPJN Jawa Tengah - D.I. Yogyakarta. Masyarakat dapat memilih saluran pengaduan yang tersedia sesuai kebutuhan.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 z-10 text-white text-xs sm:text-sm md:text-base">
        Flyover Canguk Magelang
      </div>
    </section>

      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0D246D] mb-4">
            Saluran Pengaduan
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-10 w-full max-w-3xl mx-auto">
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

import React from "react";
import jalanKitaLogo from "../assets/jalankita.png";
import laporLogo from "../assets/lapor.png"; 
import bgHeader from "../assets/canguk.jpg"; 

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
        <h2 className="text-3xl font-semibold mb-4">Pengaduan</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Jalan Kita */}
          <div className="flex flex-col items-center gap-4 p-6 border rounded-xl shadow hover:shadow-md transition">
            <a
              href="https://jalankita.binamarga.pu.go.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={jalanKitaLogo} alt="Jalan Kita" className="w-40 mx-auto" />
            </a>
            <p className="text-sm">
              Kerusakan jalan yang termasuk ke dalam jalan nasional dapat melapor melalui <span className="font-semibold text-red-500">Jalan Kita (Jak)</span>. Informasi lebih lanjut dapat mengklik link di atas.
            </p>
          </div>

          {/* Lapor */}
          <div className="flex flex-col items-center gap-4 p-6 border rounded-xl shadow hover:shadow-md transition">
            <a
              href="https://www.lapor.go.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={laporLogo} alt="Lapor" className="w-40 mx-auto" />
            </a>
            <p className="text-sm">
              Kerusakan jalan <span className="font-semibold text-red-500">selain</span> jalan nasional dapat melapor melalui <span className="font-semibold text-red-500">Lapor!</span>. Informasi lebih lanjut dapat mengklik link di atas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pengaduan;

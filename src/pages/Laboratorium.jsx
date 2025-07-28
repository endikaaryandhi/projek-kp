import React from 'react';
import labmatebg from '../assets/labmate.png'; 
import Dokumen from '../assets/dokumen.png'; 
import pelayanan from '../assets/pelyanan-pengujian.png';

const AmpPage = () => {
  return (
    <div className="bg-white">
      {/* Bagian Hero */}
      <section 
        className="relative h-80 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${labmatebg})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10 flex items-center space-x-8">
          <div className="bg-yellow-400 p-6 rounded-full flex justify-center items-center shadow-lg">
            <img src={Dokumen} alt="AMP Icon" className="h-16 w-16" />
          </div>
          
          {/* Teks Judul */}
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            Laboratorium Pengujian Material Bahan Jalan
          </h1>
        </div>
      </section>

      {/* Bagian Konten */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Informasi Layanan
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-justify">
            Laboratorium Pengujian Material Bahan Jalan bertujuan untuk memastikan bahwa material yang digunakan dalam pembangunan infrastruktur memenuhi standar mutu dan keselamatan yang ditetapkan.
          </p>
          
          <img 
            src={pelayanan} 
            alt="Pelayanan Pengujian" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md mb-8"
          />

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Prosedur Pelayanan Pengujian
          </h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>Pemohon mengajukan permohonan pengujian kepada Kepala BBPJN Jateng - DIY.</li>
            <li>DIV ADM APPS melakukan evaluasi kecukupan sampe dan persyaratan administrasi.</li>
            <li>DIV ADM APPS menyampaian surat balasan kepada Pemohon.</li>
            <li>Pemohon melakukan pembayaran dan dikonfirmasi oleh DIV ADM UPPS.</li>
            <li>DIV TEKNIK UPPS mengkaji ulang permintaan pengujian.</li>
            <li>Pemohon & DIV ADM UPPS melakukan perikatan kontrak pengujian.</li>
            <li>DIV TEKNIK UPPS Penerbitan Surat Perintah Kerja Pengujian.</li>
            <li>DIV TEKNIK UPPS melaksanaan Pengujian.</li>
            <li>DIV TEKNIK UPPS melakukan pengolahaan data dan validasi laporan hasil pengujian.</li>
            <li>DIV ADM UPPS menyampaikan hasil Laporan Hasil Pengujian kepada Pemohon.</li>
            <li>DIV MUTU menyampaikan Umpan Balik & Pengaduan kepada Pemohon.</li>
          </ol>

          <div className="mt-6 text-lg text-gray-800 space-y-2">
            <p>
              Konsultasi Pengujian ke Petugas Lab Kami melalui Whatsapp ke:{' '}
              <a 
                href="https://wa.me/6285711751505" 
                className="text-blue-600 hover:underline font-semibold"
              >
                +62 857-1175-1505
              </a>
            </p>
          </div>

          <div className="mt-10 p-6 bg-blue-50 border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900">Butuh Bantuan?</h4>
            <p className="mt-1">
              Untuk informasi lebih lanjut atau konsultasi, silakan hubungi kami melalui <a href="https://wa.me/p/23906094625650968/628112663464" className="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Kontak</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmpPage;
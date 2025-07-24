import React from 'react';
import labmatebg from '../assets/labmate.png'; // <-- Ganti dengan path gambar latar belakang Anda
import amplogo from '../assets/amp.png'; // <-- Ganti dengan path ikon Anda

const AmpPage = () => {
  return (
    <div className="bg-white">
      {/* Bagian Hero */}
      <section 
        className="relative h-80 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${labmatebg})` }}
      >
        {/* Lapisan Overlay Biru */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

        {/* Konten Hero */}
        <div className="container mx-auto px-6 relative z-10 flex items-center space-x-8">
          {/* Lingkaran Ikon */}
          <div className="bg-yellow-400 p-6 rounded-full flex justify-center items-center shadow-lg">
            {/* Ganti dengan komponen ikon atau tag img Anda */}
            <img src={amplogo} alt="AMP Icon" className="h-16 w-16" />
            {/* Contoh jika menggunakan react-icons: <FaIndustry className="text-black h-16 w-16" /> */}
          </div>
          
          {/* Teks Judul */}
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            Sertifikasi Asphalt Mixing Plant (AMP)
          </h1>
        </div>
      </section>

      {/* Bagian Konten */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Informasi Layanan
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Sertifikasi Asphalt Mixing Plant (AMP) adalah proses penting untuk memastikan bahwa fasilitas produksi aspal Anda memenuhi standar kualitas dan keamanan yang ditetapkan. Layanan ini mencakup inspeksi, pengujian, dan verifikasi untuk menjamin AMP beroperasi secara optimal dan menghasilkan campuran aspal yang sesuai dengan spesifikasi teknis.
          </p>
          
          <hr className="my-8" />

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Prosedur Pengajuan Sertifikasi
          </h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>Mengajukan surat permohonan yang ditujukan kepada Kepala Balai.</li>
            <li>Melampirkan dokumen-dokumen teknis yang diperlukan.</li>
            <li>Tim teknis akan melakukan verifikasi dan penjadwalan kunjungan lapangan.</li>
            <li>Inspeksi dan pengujian di lokasi AMP oleh tim ahli.</li>
            <li>Penerbitan sertifikat jika semua persyaratan telah terpenuhi.</li>
          </ol>

          <div className="mt-10 p-6 bg-blue-50 border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900">Butuh Bantuan?</h4>
            <p className="mt-1">
              Untuk informasi lebih lanjut atau konsultasi, silakan hubungi kami melalui halaman <a href="/kontak" className="text-blue-600 hover:underline font-semibold">Kontak</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmpPage;
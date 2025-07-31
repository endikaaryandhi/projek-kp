import React from 'react';
import AMPbg from '../assets/amp2.png'; 
import amplogo from '../assets/amp.png'; 
import sertifikasi from '../assets/Sertifikasi-AMP.png';

const AmpPage = () => {
  return (
    <div className="bg-white">
      {/* Bagian Hero */}
      <section 
        className="relative h-80 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${AMPbg})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

        {/* Konten Hero */}
        <div className="container mx-auto px-6 relative z-10 flex items-center space-x-8">
          <div className="bg-yellow-400 p-6 rounded-full flex justify-center items-center shadow-lg">
            <img src={amplogo} alt="AMP Icon" className="h-16 w-16" />
          </div>
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
          <p className="mb-8 text-lg leading-relaxed text-justify">
            Sertifikasi Asphalt Mixing Plant (AMP) adalah proses penting untuk memastikan bahwa fasilitas produksi aspal Anda memenuhi standar kualitas dan keamanan yang ditetapkan. Layanan ini mencakup inspeksi, pengujian, dan verifikasi untuk menjamin AMP beroperasi secara optimal dan menghasilkan campuran aspal yang sesuai dengan spesifikasi teknis.
          </p>
          
          <img 
            src={sertifikasi} 
            alt="Sertifikasi AMP" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md mb-8"
          />

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Prosedur Pengajuan Sertifikasi
          </h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>Pemohon mengajukan Permohonan Sertifikasi AMP Kepada Kepala Balai.</li>
            <li>Tim Pemeriksa AMP memberitahukan Jadwal Pemeriksaan AMP Kepada Pemohon.</li>
            <li>Melaksanakan Pemeriksaan Kelaikan Operasi AMP.</li>
            <li>Hasil Pemeriksaan Kelaikan Operasi AMP.</li>
            <li>Tim Pemeriksa AMP Mengajukan Penerbitan Sertifikat Laik Operasi AMP.</li>
            <li>Kepala BBPJN Jateng-DIY menyetujui Sertifikat Laik Operasi AMP yang di Ajukan.</li>
          </ol>

          <div className="mt-6 text-lg text-gray-800 space-y-2">
            <p>
              Surat permohonan dapat dikirimkan melalui email ke:{' '}
              <a 
                href="mailto:bbpjn_jatengdiy@pu.go.id" 
                className="text-blue-600 hover:underline font-semibold"
              >
                bbpjn_jatengdiy@pu.go.id
              </a>
            </p>
            <p>
              Alur dan contoh surat permohonan dapat diakses melalui:{' '}
              <a 
                href="https://s.pu.go.id/OTEw/SertifikasiAMPBBPJNJTGDIY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline font-semibold"
              >
                https://s.pu.go.id/OTEw/SertifikasiAMPBBPJNJTGDIY
              </a>
            </p>
          </div>

          <div className="mt-10 p-6 bg-blue-50 border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900">Butuh Bantuan?</h4>
            <p className="mt-1">
              Untuk informasi lebih lanjut atau konsultasi, silakan hubungi kami melalui <a href="https://wa.me/p/9621363657913044/628112663464" className="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Kontak</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmpPage;
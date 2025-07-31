import React from 'react';
import Alatalat from '../assets/alatalat.png'; 
import Alatlogo from '../assets/alat.png';
import kontruksi from '../assets/konstruksi.png';

const AmpPage = () => {
  return (
    <div className="bg-white">
      <section 
        className="relative h-80 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${Alatalat})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10 flex items-center space-x-8">
          <div className="bg-yellow-400 p-6 rounded-full flex justify-center items-center shadow-lg">
            <img src={Alatlogo} alt="AMP Icon" className="h-16 w-16" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            Peminjaman Peralatan Konstruksi dengan Cara Sewa
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 text-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Informasi Layanan
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-justify">
            Laboratorium Pengujian Material Bahan Jalan bertujuan untuk memastikan bahwa material yang digunakan dalam pembangunan infrastruktur memenuhi standar mutu dan keselamatan yang ditetapkan.
          </p>
          
          <img 
            src={kontruksi} 
            alt="Pelayanan Pengujian" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md mb-8"
          />

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Prosedur Pelayan Penggunaan Peralatan Konstruksi dengan Cara Sewa
          </h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>PENYEWA Mengajukan permohonan peminjaman peralatan konstruksi kepada Kepala BBPJN Jateng-DIY.</li>
            <li>PENYEWA & KOORDINATOR PERALATAN BBPJN JATENG - DIY Melakukan koordinasi kesiapan alat.</li>
            <li>KEPALA BBPJN JATENG - DIY Surat Persetujuan Peminjaman Alat.</li>
            <li>PENYEWA & PPK PERALATAN BBPJN JATENG - DIY Berita Acara Serah Terima Pengambilan Peminjaman Peralatan.</li>
            <li>PENYEWA Melakukan pembayaran biaya sewa alat melalui Bendahara penerimaan BBPJN Jateng - DIY (PNPB).</li>
            <li>PENYEWA & KOORDINATOR PERALATAN BBPJN JATENG - DIY Berita Acara Serah Terima Pengambilan Peminjaman Peralatan.</li>
            <li>OPERASIONAL PERALATAN Sesuai dengan jangka waktu dan ketentuan dalam Surat Perjanjian Peminjaman Peralatan.</li>
            <li>PENYEWA & KOORDINATOR PERALATAN BBPJN JATENG - DIY Berita Acara Serah Terima Pengembalian Peralatan.</li>
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
                href="https://s.pu.go.id/OTEw/SewaPeralatanBBPJNJTGDIY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline font-semibold"
              >
                https://s.pu.go.id/OTEw/SewaPeralatanBBPJNJTGDIY
              </a>
            </p>
          </div>

          <div className="mt-10 p-6 bg-blue-50 border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900">Butuh Bantuan?</h4>
            <p className="mt-1">
              Untuk informasi lebih lanjut atau konsultasi, silakan hubungi kami melalui <a href="https://wa.me/p/9899826426750670/628112663464" className="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Kontak</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmpPage;
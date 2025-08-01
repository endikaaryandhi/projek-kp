import React, { useState, useEffect } from 'react';
import HeroBackground from '../assets/flyover.jpeg'; 
import PanduanImage from '../assets/panduan.png'; 
import Survey from '../components/Survey';
import skmLogo from '../assets/skm.png';

const FaqItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 px-2 text-gray-600 text-sm md:text-base text-justify">
          {children}
        </div>
      )}
    </div>
  );
};

const faqGenres = [
  {
    genre: 'Laboratorium',
    faqs: [
      {
        question: 'Apa itu Laboratorium Pengujian Material di BBPJN Jateng DIY?',
        answer: 'Laboratorium Pengujian Material di BBPJN Jateng DIY adalah fasilitas yang menyediakan layanan pengujian berbagai jenis material konstruksi untuk memastikan kualitas dan kesesuaian material tersebut dengan standar yang berlaku dalam proyek pembangunan jalan dan jembatan.',
      },
      {
        question: 'Bagaimana cara mengajukan permohonan pengujian material di laboratorium ini?',
        answer: 'Pengajuan permohonan pengujian dapat dikonsultasikan ke Petugas Layanan Laboratorium melalui Whatsapp 0857-1175-1505.',
      },
      {
        question: 'Apa saja parameter yang dapat diuji di laboratorium ini?',
        answer: 'Parameter yang dapat diuji yaitu Aspal, Beton, Tanah, Agregat, Beton dan Campuran Aspal, dan Pengujian Lapangan.',
      },
      {
        question: 'Apakah laboratorium penguji BBPJN Jateng - DIY sudah berpredikat ISO?',
        answer: 'Laboratorium penguji BBPJN Jateng - DIY telah terakdreditasi SNI ISO / IEC 17025-2017. Selain itu laboratorium ini selalu dilakukan kalibrasi dan uji banding untuk mempertahankan kualitas pengujian.',
      },
    ],
  },
  {
  genre: 'Sertifikasi AMP',
  faqs: [
    {
      question: 'Apa itu Sertifikasi AMP (Asphalt Mixing Plant)?',
      answer: 'Sertifikasi AMP (Asphalt Mixing Plant) adalah proses verifikasi dan validasi yang dilakukan oleh pihak berwenang untuk memastikan bahwa fasilitas pencampuran aspal (AMP) memenuhi standar teknis, operasional, dan kualitas yang ditetapkan.',
    },
    {
      question: 'Bagaimana Alur dan Contoh Surat Permohonan mengenai Sertifikasi AMP?',
      answer: (
        <p>
          Alur dan Contoh Surat Permohonan dapat diakses melalui{' '}
          <a
            href="https://s.id/SiapMelayani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://s.id/SiapMelayani
          </a>{' '}
          dan pilih folder “SERTIFIKASI AMP”.
        </p>
      ),
    },
    {
      question: 'Bagaimana cara mengajukan permohonan sertifikasi AMP?',
      answer: 'Pengajuan permohonan dalam bentuk surat dapat diemail ke bbpjn_jatengdiy@pu.go.id',
    },
  ],
},
  {
    genre: 'Kerja Praktik / Magang',
    faqs: [
      {
        question: 'Siapa yang bisa mendaftar untuk kerja praktik/magang di BBPJN Jateng DIY?',
        answer: 'Mahasiswa dari jurusan teknik sipil, teknik lingkungan, dan jurusan terkait lainnya. Kegiatan ini tidak dipungut biaya dan disesuaikan dengan ketersediaan tempat.',
      },
      {
        question: 'Bagaimana syarat permohonan untuk kerja praktik/magang?',
        answer:
          <ul className="list-disc list-inside space-y-1">
              <li>Surat Permohonan dari Kampus ke Kepala BBPJN Jateng-DIY</li>
              <li>Identitas Diri (KTP dan KTM)</li>
              <li>CV (jika ada, sertakan sertifikat/keahlian)</li>
          </ul>
      },
      {
        question: 'Bagaimana cara mengajukan Surat Permohonan?',
        answer: 'Kirim melalui email ke bbpjn_jatengdiy@pu.go.id atau cc ke ppid.bbpjnjatengdiy@pu.go.id',
      },
    ],
  },
  {
    genre: 'Informasi Publik',
    faqs: [
      {
        question: 'Apa itu informasi publik?',
        answer:
          'Informasi publik adalah informasi yang berkaitan dengan penyelenggaraan negara dan/atau badan publik lainnya yang sesuai dengan Undang-Undang serta berkaitan dengan kepentingan publik.',
      },
      {
      question: 'Bagaimana alur Pelayanan Informasi Publik di BBPJN Jateng - DIY?',
      answer: (
        <p>
          Alur dapat diakses melalui{' '}
          <a
            href="https://s.id/SiapMelayani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://s.id/SiapMelayani
          </a>
        </p>
      ),
      },
      {
        question: 'Apa syarat permohonan Informasi Publik?',
        answer:
        <ul className="list-disc list-inside space-y-1">
          <li>Surat permohonan</li>
          <li>Identitas pemohon (KTP/SIM/KK)</li>
          <li>Jika mewakili badan hukum: AD/ART</li>
          <li>Jika mewakili orang lain: Surat Kuasa + KTP pemberi kuasa</li>
        </ul>
      },
      {
        question: 'Bagaimana cara mengajukan permohonan informasi publik di BBPJN Jateng DIY?',
        answer: 'Kirim email ke bbpjn_jatengdiy@pu.go.id atau cc ke ppid.bbpjnjatengdiy@pu.go.id',
      },
      {
        question: 'Apakah ada biaya untuk mengakses informasi publik?',
        answer: 'Secara umum gratis. Jika ada biaya penggandaan/pengiriman, pemohon akan diberitahu terlebih dahulu.',
      },
    ],
  },
  {
    genre: 'Perizinan Jalan Nasional',
    faqs: [
      {
        question: 'Apa itu perizinan pemanfaatan bagian-bagian jalan nasional?',
        answer: 'Izin yang diberikan untuk kegiatan yang memanfaatkan ruang milik jalan nasional seperti reklame, utilitas, akses masuk/keluar, dll.',
      },
      {
        question: 'Apa itu RUMIJA?',
        answer:
          'Ruang milik jalan (rumija) adalah lahan di kiri-kanan jalan yang digunakan sebagai pengaman dan untuk kebutuhan masa depan seperti pelebaran jalan atau penambahan jalur.',
      },
      {
        question: 'Bagaimana alur dan proses pengajuan izin pemanfaatan jalan nasional?',
        answer: (
          <p>
            Alur dapat diakses melalui{' '}
            <a
              href="https://bit.ly/BBPJNJTGDIYAlurPerizinan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              bit.ly/BBPJNJTGDIYAlurPerizinan
            </a>
          </p>
        ),
      },
      {
        question: 'Bagaimana cara mengajukan permohonan izin pemanfaatan bagian-bagian jalan nasional?',
        answer: (
          <p>
            Permohonan dan pengecekan bisa dilakukan online via{' '}
            <a
              href="https://oksip.pu.go.id/apps/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://oksip.pu.go.id/apps/
            </a>. Jam layanan: Senin–Jumat, 08.00–16.00.
          </p>
        ),
      },
    ],
  },
];


const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [genreIndex, setGenreIndex] = useState(0);

  const currentGenre = faqGenres[genreIndex];

  return (
    <div className="bg-white">
      {/* HEADER */}
      <section
        className="relative h-[25rem] md:h-[37rem] bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E5D]/90 via-[#1337AD]/20 to-transparent z-0" />

        <div className="relative z-10 pl-12 md:pl-[200px]">
          <div className="relative w-[220px] md:w-[510px] h-[60px] md:h-[100px] bg-blue-500/50 rounded-[10px]">
            <div className="absolute top-3 left-5 md:left-6 md:top-6 w-[210px] md:w-[500px] h-[60px] md:h-[100px] bg-yellow-400/60 rounded-[10px] z-10" />
            <div className="absolute top-6 left-8 md:left-10 md:top-10 text-white text-xl md:text-[48px] font-bold z-20">
              Website Pelayanan
            </div>
          </div>

          <div className="mt-10 ml-4">
            <a
              href="/layanan"
              className="relative inline-block rounded-full bg-gradient-to-r from-[#007AFF80] to-[#FFCC0080] p-[3px] sm:p-[4px] md:p-[5px]"
            >
              <span className="block rounded-full bg-black/60 text-white font-bold 
                py-2 px-6 text-base 
                sm:py-3 sm:px-10 sm:text-lg 
                md:py-4 md:px-14 md:text-2xl 
                hover:bg-black/45 transition-colors duration-300">
                LAYANAN
              </span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 z-10 text-white text-xs sm:text-sm md:text-base">
          Flyover Madukoro Semarang
        </div>
      </section>

      {/* PENGERTIAN */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Pengertian</h2>
          <div className="max-w-5xl mx-auto text-base md:text-xl text-gray-700 space-y-4 text-justify px-4">
            <p>
              Website ini merupakan sarana digital yang dikembangkan oleh Balai Besar Pelaksanaan Jalan Nasional Jawa Tengah - D.I. Yogyakarta sebagai media informasi, layanan, serta Pengaduan dan regulasi yang berkaitan dengan pelayanan di Balai Besar Pelaksanaan Jalan Nasional Jawa Tengah - D.I. Yogyakarta.
            </p>
            <p>
              Melalui website ini, pengguna dapat mengakses layanan-layanan dan Pengaduan sebagai berikut:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Layanan Informasi Publik</li>
              <li>Layanan Pemanfaatan Bagian-Bagian Jalan Nasional</li>
              <li>Sertifikasi Laik Operasi (SLO) AMP</li>
              <li>Laboratorium Pengujian Material Bahan Jalan</li>
              <li>Peminjaman Peralatan Konstruksi dengan Cara Sewa</li>
            </ol>
            <p>
              Website ini juga didesain untuk memudahkan navigasi bagi pengguna umum maupun penyedia jasa. Setelah berada di beranda, pengguna tinggal menekan tombol Layanan, pengguna langsung diarahkan ke halaman website atau layanan yang dibutuhkan.
            </p>
          </div>
        </div>
      </section>

      {/* PANDUAN */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">PANDUAN</h2>
          <img 
            src={PanduanImage} 
            alt="Panduan Penggunaan Website" 
            className="mx-auto w-full max-w-3xl h-auto shadow-2xl rounded-md"
          />
        </div>
      </section>
      
      {/* FAQ Dinamis dengan Panah Navigasi */}
      <section className="py-10 bg-gray-50 transition-all duration-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">FAQs</h2>
          
          {/* Navigasi Genre */}
          <div className="grid grid-cols-3 items-center justify-between mb-6 text-center">
          <div className="flex justify-start">
            <button
              onClick={() => setGenreIndex((prev) => (prev - 1 + faqGenres.length) % faqGenres.length)}
              className="text-3xl text-blue-700 hover:text-blue-900 transition"
              aria-label="Sebelumnya"
            >
              &larr;
            </button>
          </div>

          <div>
            <span className="text-xl font-semibold text-blue-600 uppercase tracking-wider">
              {currentGenre.genre}
            </span>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setGenreIndex((prev) => (prev + 1) % faqGenres.length)}
              className="text-3xl text-blue-700 hover:text-blue-900 transition"
              aria-label="Berikutnya"
            >
              &rarr;
            </button>
          </div>
        </div>

          {/* Daftar FAQ */}
          <div className="space-y-2">
            {currentGenre.faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question}>
                <p>{faq.answer}</p>
              </FaqItem>
            ))}
          </div>
        </div>
      </section>

      {/* Tombol Gambar Modal */}
      {!modalOpen && (
        <button
          onClick={() => setModalOpen(true)}
          className="fixed bottom-5 right-5 z-[9999] p-0 border-0 bg-transparent cursor-pointer"
        >
          <img
            src={skmLogo}
            alt="Buka Survei"
            className="h-[70px] md:h-[140px] w-auto"
          />
        </button>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 z-[9998] px-4 py-24 md:p-10 flex items-center justify-center overflow-y-auto">
          <div className="bg-white w-full max-w-4xl max-h-[95vh] h-full md:h-[90vh] rounded-2xl overflow-auto relative shadow-xl">
            {/* Tombol Tutup */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-4 text-3xl font-bold text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            {/* Konten Survei */}
            <div className="p-4 md:p-8">
              <Survey />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

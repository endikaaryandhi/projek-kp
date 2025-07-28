import React from 'react';
import kontakBg from '../assets/ruastepus.jpg'; 
import kontakIcon from '../assets/contact-person.png'; 

const KontakPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-80 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${kontakBg})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

        <div className="container mx-auto px-6 relative z-10 flex items-center space-x-6">
          <div className="bg-yellow-400 p-6 rounded-full shadow-lg flex justify-center items-center">
            <img src={kontakIcon} alt="Contact Icon" className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            Hubungi Kami
          </h1>
        </div>
      </section>

      {/* Konten */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Informasi Kontak</h2>
          <p className="text-lg leading-relaxed mb-8 text-justify">
            Silakan hubungi kami jika Anda memiliki pertanyaan, masukan, atau membutuhkan bantuan terkait layanan Balai Besar Pelaksanaan Jalan Nasional Jawa Tengah – D.I. Yogyakarta.
          </p>

          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-semibold text-gray-900">Alamat Kantor:</h3>
              <p>Jl. Soekarno Hatta No.123, Semarang, Jawa Tengah, Indonesia</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Email:</h3>
              <a
                href="mailto:bbpjn_jatengdiy@pu.go.id"
                className="text-blue-600 hover:underline font-semibold"
              >
                bbpjn_jatengdiy@pu.go.id
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Telepon:</h3>
              <p>0298 - 6023302</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Fax:</h3>
              <p>0298 - 6023033</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">WhatsApp:</h3>
              <a
                href="https://wa.me/p/9621363657913044/628112663464"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                +62 811-2663-464
              </a>
            </div>

            <div>
            <h3 className="font-semibold text-gray-900">Media Sosial:</h3>
            <ul className="list-disc list-inside space-y-1">
                <li>
                X (Twitter):{' '}
                <a
                    href="https://x.com/pu_jalan_jtgdiy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                >
                    @pu_jalan_jtgdiy
                </a>
                </li>
                <li>
                Facebook    :{' '}
                <a
                    href="https://facebook.com/PUJalanJatengdiy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                >
                    @PUJalanJatengdiy
                </a>
                </li>
                <li>
                Instagram   :{' '}
                <a
                    href="https://instagram.com/pu_jalan_jatengdiy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                >
                    @pu_jalan_jatengdiy
                </a>
                </li>
                <li>
                YouTube :{' '}
                <a
                    href="https://youtube.com/@pu_jalan_jatengdiy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                >
                    @pu_jalan_jatengdiy
                </a>
                </li>
                <li>
                TikTok  :{' '}
                <a
                    href="https://tiktok.com/@pu_jalan_jatengdiy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                >
                    @pu_jalan_jatengdiy
                </a>
                </li>
            </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KontakPage;

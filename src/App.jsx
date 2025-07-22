import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import halaman
import Pengaduan from './pages/Pengaduan';
// Kamu bisa tambahkan halaman lain di sini, misalnya:
// import Beranda from './pages/Beranda';
// import Layanan from './pages/Layanan';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/pengaduan" element={<Pengaduan />} />
            {/* <Route path="/" element={<Beranda />} />
            <Route path="/layanan" element={<Layanan />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

//./src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LayananPage from './pages/LayananPage';
import Pengaduan from './pages/Pengaduan';
import Laboratorium from './pages/Laboratorium';
import Sertifikasi from './pages/Sertifikasi'
import Peminjaman from './pages/Peminjaman'
import Beranda from './pages/Beranda'
import Kontak from './pages/Kontak'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/pengaduan" element={<Pengaduan />} />
            <Route path="/layanan" element={<LayananPage />} />
            <Route path="/layanan/Laboratorium" element={<Laboratorium />} />
            <Route path='/layanan/Sertifikasi' element={<Sertifikasi />} />
            <Route path='/layanan/Peminjaman' element={<Peminjaman />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

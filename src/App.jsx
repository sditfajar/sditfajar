import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavQween from './components/NavQween';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import NewsSection from './pages/NewsSection';
import BuktiNyata from './pages/BeritaSdit';
import LastCard from './pages/LastCard';
import StatistikManajemen from './pages/StatistikManajemen';
import KeunggulanSDIT from './pages/KeunggulanSDIT';
import ProgramKami from './pages/ProgramKami';
import KenapaHarusKami from './pages/KenapaHarusKami';
import ProfilSekolah from './pages/ProfilSekolah';
import ManajemenSekolah from './pages/ManajemenSekolah';
import SejarahSekolah from './pages/SejarahSekolah';
import Kurikulum from './pages/Kurikulum';
import Ekstrakulikuler from './pages/Ekstrakulikuler';
import Kontak from './pages/Kontak';
import MajalahMulia from './pages/MajalahMulia';
import BeritaBmh from './pages/BeritaBmh';
import BeritaBmhDetail from './pages/BeritaBmhDetail';
import RisetPengembangan from './pages/RisetPengembangan';
import RisetDetail from './pages/RisetDetail';
import NewsDetail from './pages/NewsDetail';
import FullBeritaSekolah from './pages/FullBeritaSekolah';

// App.jsx
// import { app, db, storage } from './config/firebase';
// console.log('Firebase initialized:', app);
// console.log('Firestore instance:', db);
// console.log('Storage instance:', storage);

function App() {
  return (
    <Router>
      <div className="relative">
        {/* NavQween */}
        <NavQween />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news-section" element={<NewsSection />} />
          <Route path="/bukti-nyata" element={<BuktiNyata />} />
          <Route path="/berita-sekolah" element={<FullBeritaSekolah />} />
          <Route path="/lastCard" element={<LastCard />} />
          <Route path="/statistik-manajemen" element={<StatistikManajemen />} />
          <Route path="/keunggulan-sdit" element={<KeunggulanSDIT />} />
          <Route path="/program-kami" element={<ProgramKami />} />
          <Route path="/kenapa-harus-kami" element={<KenapaHarusKami />} />
          <Route path="/profil-sekolah" element={<ProfilSekolah />} />
          <Route path="/manajemen-sekolah" element={<ManajemenSekolah />} />
          <Route path="/sejarah-sekolah" element={<SejarahSekolah />} />
          <Route path="/kurikulum" element={<Kurikulum />} />
          <Route path="/ekstrakulikuler" element={<Ekstrakulikuler />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/majalah-mulia" element={<MajalahMulia />} />
          <Route path="/riset-pengembangan" element={<RisetPengembangan />} />
          <Route path="/riset-detail" element={<RisetDetail />} />
          <Route path="/berita-terkini-detail" element={<NewsDetail />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Popup Whatsapp */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

// src/pages/Home.jsx
import HeroTailwind from './HeroTailwind';
import NewsSection from './NewsSection';
import BuktiNyata from './BuktiNyata';
// import LastCard from './LastCard';
import Motto from './Motto';
import ManajemenSekolahHome from './ManajemenSekolahHome';
import StatistikManajemen from './StatistikManajemen.jsx';
import KeunggulanSDIT from './KeunggulanSDIT.jsx';
// import ProgramKami from './ProgramKami';
// import KenapaHarusKami from './KenapaHarusKami';
import Testimonials from './Testimonials';
import FAQ from './FAQ.jsx';

// BG Reactbits
import Squares from '../ReactBits/Squares/Squares.jsx';

export default function Home() {
  return (
    <div className="min-h-screen px-4 bg-slate-100 md:px-6 lg:px-12">
      {/* Hero Section */}
      <HeroTailwind />

      {/* News Section */}
      <div className="pt-20 md:pt-23">
        <NewsSection />
      </div>
      {/* BuktiNyata */}
      <div className="pt-20 md:pt-23" id="bukti-nyata">
        <BuktiNyata />
      </div>
      {/* LastCard */}
      {/* <div className="pt-20 md:pt-23">
        <LastCard />
      </div> */}
      {/* Motto */}
      <div className="pt-20 md:pt-23">
        <Motto />
      </div>
      {/* ManajemenSekolah */}
      <div className="pt-20 md:pt-23">
        <ManajemenSekolahHome />
      </div>
      {/* KenapaHarusKami */}
      {/* <div className="pt-20 md:pt-23">
        <KenapaHarusKami />
      </div> */}
      {/* StatistikManajemen */}
      <div className="pt-20 md:pt-23">
        <StatistikManajemen />
      </div>
      {/* KeunggulanSDIT */}
      <div className="pt-20 md:pt-23">
        <KeunggulanSDIT />
      </div>
      {/* ProgramKami */}
      {/* <div className="pt-20 md:pt-23" id="program-kami">
        <ProgramKami />
      </div> */}
      {/* Testimonials */}
      <div className="pt-20 md:pt-23">
        <Testimonials />
      </div>
      {/* FAQ */}
      <div className="pt-20 mb-30 md:pt-23">
        <FAQ />
      </div>
    </div>
  );
}

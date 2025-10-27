import React from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';
import Masonry from '../ReactBits/Masonry/Masonry.jsx';

export default function ProfilSekolah() {
  const items = [
    {
      id: '1',
      img: 'images/profil/profil.jpg',
      url: 'https://example.com/one',
      height: 400,
    },
    {
      id: '2',
      img: 'images/profil/profil.jpg',
      url: 'https://example.com/two',
      height: 250,
    },
    {
      id: '3',
      img: '/images/profil/profil.jpg',
      url: 'https://example.com/three',
      height: 600,
    },
    {
      id: '4',
      img: 'images/profil/profil.jpg',
      url: 'https://example.com/one',
      height: 400,
    },
    {
      id: '5',
      img: 'images/profil/profil.jpg',
      url: 'https://example.com/two',
      height: 250,
    },
    {
      id: '6',
      img: 'images/profil/profil.jpg',
      url: 'https://example.com/three',
      height: 600,
    },

    // ... more items
  ];
  return (
    <section className="px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      <div className="grid items-center gap-10 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Images Grid */}
        <div className="">
          <img src="/images/profil/profil.jpg" alt="SDIT Fajar" className="object-cover w-full h-40 shadow-lg md:h-100 rounded-xl" />
        </div>

        {/* Text Content */}
        <div className="text-left lg:text-left">
          <h3 className="font-semibold tracking-wide text-[#2486C6] uppercase">Tentang Sekolah</h3>
          <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold">SDIT FAJAR</h2>
          <div className="h-2 w-40 bg-[#2486C6] mt-1 mb-4"></div>
          <p className="leading-relaxed text-justify text-gray-700 text-md md:text-lg">
            SDIT (Sekolah Dasar Islam Terpadu) Fajar Depok adalah sebuah sekolah dasar yang menggabungkan kurikulum pendidikan nasional dengan pendidikan agama Islam. Sekolah ini menawarkan program pendidikan yang berfokus pada pengembangan
            akademik serta nilai-nilai keislaman. SDIT Fajar bertujuan untuk membentuk generasi yang tidak hanya cerdas secara intelektual tetapi juga berakhlak mulia dan berpegang teguh pada ajaran Islam. Sekolah ini biasanya memiliki
            berbagai kegiatan tambahan yang mendukung pembentukan karakter islami siswa, seperti hafalan Al-Qur'an, shalat berjamaah, dan kegiatan keagamaan lainnya.
          </p>
        </div>
      </div>

      {/* Visi-Misi */}
      <div className="">
        <div className="container py-12 mx-auto space-y-10 max-w-7xl">
          {/* Misi */}
          <div>
            <h2 className="text-2xl font-bold text-[#002141] flex items-center gap-2">Motto</h2>
            <div className="h-2 w-20 bg-[#F59E0B] mt-1 mb-4"></div>
            <div className="p-4 border rounded-xl border-slate-300">
              <p className="font-medium text-gray-700">Jiwa Pemimpin tumbuh dari lingkungan dan perkembangan interaksi sosial.</p>
            </div>
          </div>
          {/* Visi */}
          <div>
            <h2 className="text-2xl font-bold text-[#002141] flex items-center gap-2">Visi</h2>
            <div className="h-2 w-20 bg-[#2486C6] mt-1 mb-4"></div>
            <div className="p-4 border rounded-xl border-slate-300">
              <p className="font-medium text-gray-700">Terwujudnya peserta didik yang beriman dan bertaqwa, terampil serta cinta terhadap lingkungan.</p>
            </div>
          </div>

          {/* Misi */}
          <div>
            <h2 className="text-2xl font-bold text-[#002141] flex items-center gap-2">Misi</h2>
            <div className="h-2 w-20 bg-[#F59E0B] mt-1 mb-4"></div>
            <div className="p-4 border rounded-xl border-slate-300">
              <ul className="pl-6 space-y-2 font-medium text-gray-700 list-disc">
                <li>Menanam keimanan dan ketaqwaan kepada peserta didik dalam taat beribadah</li>
                <li>Membentuk peserta didik yang cerdas, kreatif, inovatif dan berakhlak mulia</li>
                <li>Mengoptimalkan proses pembelajaran dengan bimbingan dalam mengembangkan bakat yang dimiliki peserta didik</li>
                <li>Meningkatkan prestasi akademik dan non akademik</li>
                <li>Mewujudkan suasana kekeluargaan antar warga sekolah</li>
                <li>Mewujudkan budaya peduli lingkungan hidup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ReactBits Gallery */}
      <div className="container py-12 mx-auto space-y-10 mb-100 max-w-7xl">
        <Masonry items={items} ease="power3.out" duration={2} stagger={0.3} animateFrom="bottom" scaleOnHover={true} hoverScale={0.97} blurToFocus={true} colorShiftOnHover={false} />
      </div>
    </section>
  );
}

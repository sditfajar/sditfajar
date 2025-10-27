import React from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

// Reusable Component
const CardManajemen = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
      {data.map((item, index) => (
        <div key={index} className="relative overflow-hidden shadow-md rounded-2xl bg-slate-50">
          {/* Foto pengurus */}
          <div className="w-full bg-gray-200 h-75 md:h-111">
            {item.image ? (
              <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                </svg>
              </div>
            )}
          </div>

          {/* Overlay gradasi */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#002141] to-transparent">
            <p className="text-xs font-medium text-white md:text-sm">{item.role}</p>
            <h3 className="text-sm font-semibold text-yellow-500 md:text-base">{item.name}</h3>
            <p className="text-xs text-gray-200">{item.mapel}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ManajemenSekolah() {
  const dataManajemen = [
    {
      role: '',
      name: 'Ummi Nining Juningsih, S.Ag.',
      mapel: 'Kepala Sekolah',
      image: '/images/manajemen-sekolah/ummi.JPG',
    },
    {
      role: '',
      name: 'Bu Herlin Ruswanti, S.Pd, Gr.',
      mapel: 'Guru BK',
      image: '/images/manajemen-sekolah/herlin.JPG',
    },
    {
      role: '',
      name: 'Pa Alfa Muhdina, S.Pd',
      mapel: 'Kedisiplinan',
      image: '/images/manajemen-sekolah/none.jpeg',
    },
    {
      role: '',
      name: 'Bu Mia Nurdiana , S.Pd',
      mapel: 'Bendahara Sekolah',
      image: '/images/manajemen-sekolah/mia.JPG',
    },
    {
      role: '',
      name: 'Pa Esa Pandu  Imansyah',
      mapel: 'Kesehatan',
      image: '/images/manajemen-sekolah/esa.JPG',
    },
    {
      role: '',
      name: 'Bu Nurul Fitri, S.Pd, Gr',
      mapel: 'Kurikulum',
      image: '/images/manajemen-sekolah/nurul.JPG',
    },
    {
      role: '',
      name: 'Pa Nasrullah, S.Pd, Gr',
      mapel: 'Kesiswaan',
      image: '/images/manajemen-sekolah/nasrul.JPG',
    },
    {
      role: '',
      name: 'Ust. M.Padil Riswandi, S.E',
      mapel: 'OPS, PJOK',
      image: '/images/manajemen-sekolah/fadil.png',
    },
    {
      role: '',
      name: 'Ustadzah Viny Virzanah',
      mapel: 'Ubuddiyah, B. Arab',
      image: '/images/manajemen-sekolah/fini.JPG',
    },
    {
      role: '',
      name: 'Ustadzah Risma, S.Pd',
      mapel: 'Kesiswaan',
      image: '/images/manajemen-sekolah/risma.JPG',
    },
    {
      role: '',
      name: 'Ustadzah Rizky',
      mapel: 'Perpustakaan, TU',
      image: '/images/manajemen-sekolah/none.jpeg',
    },
    {
      role: '',
      name: 'Bu Wartiah',
      mapel: 'Kebersihan',
      image: '/images/manajemen-sekolah/none.jpeg',
    },
    {
      role: '',
      name: 'Pak Martalih',
      mapel: 'Keamanan',
      image: '/images/manajemen-sekolah/none.jpeg',
    },
    {
      role: '',
      name: 'Ustadzah Diandra',
      mapel: 'B. Inggris',
      image: '/images/manajemen-sekolah/none.jpeg',
    },
    {
      role: '',
      name: 'Ustadzah Rifka Rahmawati',
      mapel: 'B. Sunda',
      image: '/images/manajemen-sekolah/none.jpeg',
    },
    {
      role: '',
      name: 'Bu Ustadzah Risma',
      mapel: 'Koordinator, Guru Tilawati',
      image: '/images/manajemen-sekolah/none.jpeg',
    },
  ];

  return (
    <section className="px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {/* Text Content */}
      <div className="text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#002141]">Manajemen Sekolah</h2>
        <div className="h-2 w-40 bg-[#2486C6] mt-1 mb-4"></div>

        <p className="leading-relaxed text-justify text-gray-700 text-md md:text-lg">
          Di balik setiap keberhasilan SDIT Fajar, terdapat para pemimpin yang berdedikasi tinggi dan visioner. Jajaran manajemen SDIT Fajar adalah sosok-sosok terbaik yang berkomitmen menjalankan amanah pendidikan dengan penuh tanggung
          jawab, integritas, dan semangat membentuk generasi islami yang berprestasi.
        </p>
      </div>

      {/* Bagian Dewan Pembina */}
      <div className="my-10">
        <CardManajemen data={dataManajemen} />
      </div>
    </section>
  );
}

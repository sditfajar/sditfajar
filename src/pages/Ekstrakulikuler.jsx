import React from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

export default function Ekstrakulikuler() {
  const ekstrakulikuler = [
    {
      id: 1,
      title: 'Pramuka: Membangun Karakter dan Kepemimpinan Siswa.',
      ket: 'Ekstrakulikuler 1',
      author: 'Admin Website BMH',
      image: './images/ekstrakulikuler/pramuka.jpg',
      link: '/majalah-mulia-detail',
    },
    {
      id: 2,
      title: 'Memanah: Meningkatkan Fokus dan Disiplin Anak.',
      ket: 'Ekstrakulikuler 2',
      author: 'Admin Website BMH',
      image: './images/ekstrakulikuler/memanah.jpg',
      link: '/majalah-mulia-detail',
    },
    {
      id: 3,
      title: 'Taekwondo: Seni Bela Diri untuk Kesehatan dan Kepercayaan Diri.',
      ket: 'Ekstrakulikuler 3',
      author: 'Admin Website BMH',
      image: './images/ekstrakulikuler/taekwondoo.jpg',
      link: '/majalah-mulia-detail',
    },
    {
      id: 4,
      title: "Tahfidz Al-Qur'an: Menghafal dan Memahami Kitab Suci.",
      ket: 'Ekstrakulikuler 4',
      author: 'Admin Website BMH',
      image: './images/ekstrakulikuler/tahfidz.jpg',
      link: '/majalah-mulia-detail',
    },
    {
      id: 1,
      title: 'Futsal: Olahraga Tim untuk Kerjasama dan Kesehatan.',
      ket: 'Ekstrakulikuler 5',
      author: 'Admin Website BMH',
      image: './images/ekstrakulikuler/futsal.jpg',
      link: '/majalah-mulia-detail',
    },
  ];

  return (
    <section className="container px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {/* Text Content */}
      <div className="text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#002141]">Ekstrakulikuler Sekolah</h2>
        <div className="h-2 w-40 bg-[#2486C6] mt-1 mb-4"></div>
        <p className="leading-relaxed text-justify text-gray-700 text-md">
          Kegiatan ekstrakurikuler di SDIT Fajar dirancang untuk mengembangkan minat, bakat, dan potensi siswa di luar pembelajaran kelas. Melalui berbagai aktivitas seperti pramuka, tahfidz, olahraga, seni, dan sains, siswa belajar kerja
          sama, disiplin, dan kemandirian dalam suasana yang menyenangkan dan bernilai islami.
        </p>
      </div>

      {/* Grid Artikel */}
      <div className="grid gap-6 py-10 md:grid-cols-2">
        {ekstrakulikuler.map((article) => (
          <div key={article.id} className="relative overflow-hidden shadow-md rounded-3xl group">
            {/* Gambar */}
            <img src={article.image} alt={article.title} className="object-cover w-full transition-transform duration-500 h-50 group-hover:scale-105" />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/90 to-black/5">
              <p className="mb-2 text-xs text-yellow-300 ">{article.ket}</p>
              <h3 className="text-sm font-semibold sm:text-base">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

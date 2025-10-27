import React from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';
import Masonry from '../ReactBits/Masonry/Masonry.jsx';

export default function Kurikulum() {
  return (
    <section className="px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      <div className="">
        {/* Text Content */}
        <div className="mx-auto mb-5 text-left">
          <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#002141]">Kurikulum SDIT Fajar</h2>
          <div className="h-2 w-40 bg-[#2486C6] mt-1 mb-4"></div>

          <p className="leading-relaxed text-justify text-gray-700 text-md md:text-lg">
            Kurikulum SDIT Fajar dirancang untuk membangun generasi Islami yang berkarakter, kreatif, mandiri, dan berprestasi global. Melalui pendekatan terpadu antara kurikulum nasional, pendidikan Al-Qur’an, serta pembiasaan ibadah
            harian, SDIT Fajar berkomitmen mencetak siswa-siswi yang cerdas secara intelektual, emosional, dan spiritual. Pembelajaran dilengkapi dengan program unggulan seperti Tilawati, kegiatan lifeskill, marketday, hingga penguatan
            karakter Profil Pelajar Pancasila.
          </p>
        </div>
      </div>

      {/* Visi-Misi */}
      <div className="">
        <div className="container py-12 mx-auto space-y-10 max-w-7xl">
          {/* Misi */}
          <div>
            <h2 className="text-2xl font-bold text-[#002141] flex items-center gap-2">PROGRAM UNGGULAN</h2>
            <div className="h-2 w-20 bg-[#F59E0B] mt-1 mb-4"></div>
            <div className="p-4 border rounded-xl border-slate-300">
              <ul className="pl-6 space-y-2 font-medium text-gray-700 list-disc">
                <li>Pembelajaran Al-Qur'an dengan Metode "Tilawati".</li>
                <li>Education Field Trip.</li>
                <li>Pembinaan Karakter Siswa Sesuai dengan Ajaran Islam.</li>
                <li>Lifeskill melalui Kegiatan Cookingday.</li>
                <li>Marketday (Entrepreneurship).</li>
                <li>Pembiasaan Ibadah.</li>
              </ul>{' '}
            </div>
          </div>
          {/* Visi */}
          <div>
            <h2 className="text-2xl font-bold text-[#002141] flex items-center gap-2">MORNING ACTIVITY</h2>
            <div className="h-2 w-20 bg-[#2486C6] mt-1 mb-4"></div>
            <div className="p-4 border rounded-xl border-slate-300">
              <ul className="pl-6 space-y-2 font-medium text-gray-700 list-disc">
                <li>Shalat Dhuha.</li>
                <li>Dzikir Pagi.</li>
                <li>Muroja'ah Yaumiyah.</li>
                <li>Jum'at Bersih.</li>
              </ul>
            </div>
          </div>

          {/* Misi */}
          <div>
            <h2 className="text-2xl font-bold text-[#002141] flex items-center gap-2">KONSEP PEMBELAJARAN</h2>
            <div className="h-2 w-20 bg-[#F59E0B] mt-1 mb-4"></div>
            <div className="mb-3 ">
              <div className="p-4 font-medium text-gray-700 border rounded-xl border-slate-300">
                <span className="pb-3 font-bold ps-6">Pendidikan Al-Qur'an</span>
                <ul className="pl-6 space-y-4 font-medium text-gray-700 list-disc">
                  <li>Siswa-siswi SDIT Fajar menghafal minimal 1 Juz Al-Qur'an (Juz 30) dengan metode "Tilawati".</li>
                </ul>
              </div>
            </div>
            <div className="mb-3 ">
              <div className="p-4 font-medium text-gray-700 border rounded-xl border-slate-300">
                <span className="pb-3 font-bold ps-6">Kurikulum Merdeka</span>
                <ul className="pl-6 space-y-4 font-medium text-gray-700 list-disc">
                  <li>SDIT Fajar menerapkan Kurikulum Merdeka yang mengembangkan Projek Penguatan Profil Pelajar Pancasila.</li>
                </ul>
              </div>
            </div>
            <div className="mb-3 ">
              <div className="p-4 font-medium text-gray-700 border rounded-xl border-slate-300">
                <span className="pb-3 font-bold ps-6">Pendidikan Karakter</span>
                <ul className="pl-6 space-y-4 font-medium text-gray-700 list-disc">
                  <li>
                    Pembelajaran berbasis karakter berdasarkan 6 Karakter Profil Pelajar Pancasila (Beriman, Bertaqwa kepada Tuhan Yang Maha Esa dan Berakhlak Mulia, Berkebhinekaan Global, Gotong Royong, Mandiri, Kreatif, dan Bernalar
                    Kritis).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

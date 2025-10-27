const DataCard = [
  {
    id: 1,
    title: 'Menumbuhkan Karakter Islami Sejak Dini',
    desc: 'Melalui pembelajaran Al-Qur’an dan akhlak mulia, siswa dibimbing menjadi pribadi yang beriman dan berakhlak baik sejak usia sekolah dasar.',
  },
  {
    id: 2,
    title: 'Pembelajaran Aktif dan Menyenangkan',
    desc: 'Setiap siswa diajak belajar dengan metode interaktif, praktikum, dan permainan edukatif agar tumbuh rasa cinta belajar sejak dini.',
  },
  {
    id: 3,
    title: 'Membangun Generasi Cinta Al-Qur’an',
    desc: 'Sekolah Islam Terpadu Fajar berkomitmen mencetak generasi penghafal Al-Qur’an dengan program tahfidz harian yang terarah.',
  },
  {
    id: 4,
    title: 'Kegiatan Ekstrakurikuler Bernilai Islami',
    desc: 'Mulai dari pramuka islami, seni kaligrafi, hingga olahraga sunnah—semua dirancang untuk menumbuhkan potensi siswa secara seimbang.',
  },
];

export default function LastCard() {
  return (
    <section className="w-full px-5 font-poppins">
      <div className="container mx-auto max-w-7xl">
        {/* Judul */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-start md:text-4xl text-[#002141]">Blog</h2>
          <div className="w-32 h-2 mt-2 bg-[#2486C6]"></div>
        </div>
        {/* Grid Card */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DataCard.map((item) => (
            <div key={item.id} className="flex flex-col justify-between p-6 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
              <div>
                <h2 className="mb-3 text-lg font-semibold text-[#005C8F]">{item.title}</h2>
                <p className="text-xs md:text-sm text-slate-600">{item.desc}</p>
              </div>
              <button className="self-start px-4 py-2 mt-6 text-xs font-medium text-white rounded-xl bg-[#005C8F] hover:bg-[#002141]">Selengkapnya</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

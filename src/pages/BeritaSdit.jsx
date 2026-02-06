// src/components/pages/BuktiNyata.jsx
const beritaSekolah = [
  {
    id: 3,
    img: '/images/berita-terkini/olahraga.jpg',
    title: 'Senam Pagi hari Jumat di SDIT Fajarr',
    desc: 'Setiap Jumat pagi, siswa dan guru SDIT Fajar melaksanakan senam bersama untuk menjaga kebugaran, menumbuhkan semangat, dan mempererat kebersamaan sebelum memulai kegiatan belajar.',
    color: 'border-yellow-500',
    judul: 'text-yellow-500',
  },
  {
    id: 4,
    img: '/images/berita-terkini/akred.jpg',
    title: 'Akreditasi SDIT Fajar Raih Predikat A',
    desc: 'SDIT Fajar meraih akreditasi predikat A dari Badan Akreditasi Nasional sebagai bukti komitmen dalam menjaga mutu pendidikan dan menciptakan lingkungan belajar yang unggul.',
    color: 'border-emerald-500',
    judul: 'text-emerald-500',
  },
  {
    id: 5,
    img: '/images/berita-terkini/guru.jpg',
    title: 'Guru Bersertifikasi Tingkatkan Kompetensi Mengajar',
    desc: 'Guru SDIT Fajar mengikuti sertifikasi dan pelatihan untuk meningkatkan kompetensi mengajar, menciptakan pembelajaran yang lebih inovatif dan menyenangkan.',
    color: 'border-emerald-500',
    judul: 'text-emerald-500',
  },
  // {
  //   id: 6,
  //   img: '/images/berita-terkini/marhaban.jpg',
  //   title: 'Selamat Hari Santri Nasional!',
  //   desc: 'Santri adalah penjaga cahaya ilmu dan akhlak mulia. Mari terus menebar semangat belajar, berjuang, dan berbakti untuk agama dan negeri.',
  //   color: 'border-yellow-500',
  //   judul: 'text-yellow-500',
  // },
  // {
  //   id: 1,
  //   img: '/images/berita-terkini/11.jpg',
  //   title: 'Kejuaraan 5 Provinsi Taekwondo Championship 2025',
  //   desc: 'Salah satu siswa SDIT Fajar berhasil meraih juara dalam ajang Taekwondo Championship 2025 di Universitas Indonesia. Prestasi ini menjadi bukti semangat juang dan disiplin tinggi dalam meraih mimpi!',
  //   color: 'border-emerald-500',
  //   judul: 'text-emerald-500',
  // },
  // {
  //   id: 2,
  //   img: '/images/berita-terkini/kls6.JPG',
  //   title: 'Perfotoan Kelas 6 dalam rangka Maulid Nabi Muhammad SAW',
  //   desc: 'Kegiatan Maulid Nabi menjadi momentum siswa meneladani akhlak Rasulullah melalui lomba ceramah dan shalawat bersama.',
  //   color: 'border-yellow-500',
  //   judul: 'text-yellow-500',
  // },
];

export default function BuktiNyata() {
  return (
    <section className="w-full px-5 font-poppins">
      <div className="container mx-auto max-w-7xl">
        {/* Judul */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-start md:text-4xl text-[#002141]">Berita Sekolah</h2>
          <div className="w-32 h-2 mt-2 rounded-none bg-[#2486C6]"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {beritaSekolah.map((bukti) => (
            <div key={bukti.id} className="relative flex flex-col overflow-hidden transition duration-300 shadow-md border-1 border-[#65BDFF] rounded-3xl bg-white/10 hover:shadow-xl md:flex-row">
              {/* Gambar */}
              <div className="relative object-cover w-full h-56 overflow-hidden md:w-1/2 md:h-auto">
                <img src={bukti.img} alt={bukti.title} className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
              </div>

              {/* Konten */}
              <div className="flex flex-col justify-between flex-1 p-6 md:p-8 bg-white/80 backdrop-blur-sm">
                <h3 className={`text-lg font-semibold text-[#005C8F] mb-2 hover:text-[#2C2C2C] transition-colors duration-200`}>{bukti.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-4 md:line-clamp-5">{bukti.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-7">
          <a href="/berita-sekolah" className="px-10 py-3 text-xs font-medium text-white bg-[#005C8F] rounded-xl hover:bg-[#002141] transition">
            Selengkapnya
          </a>
        </div>

        {/* <div className="grid gap-8 md:grid-cols-2">
          {buktiNyata.map((bukti) => (
            <div key={bukti.id} className="flex flex-col items-center pt-1 pl-1 overflow-hidden bg-transparent border-2 border-[#65BDFF] rounded-3xl md:flex-row">
              
              <div className="absolute z-20 overflow-hidden duration-500 border-3 w-85 h-45 md:w-80 md:h-50 border-slate-50 rounded-3xl hover:shadow-2xl">
                <img src={bukti.img} alt={bukti.title} className="object-cover w-full h-full transition-shadow shadow-lg" />
              </div>

              <div className="flex-1 pt-40 mt-4 backdrop-blur md:mt-0 md:ml-6 md:pl-75 md:pt-0">
                <div className="flex flex-col justify-center w-full p-6">
                  <h3 className={'${bukti.judul} mb-2 font-semibold text-md hover:cursor-pointer'}>{bukti.title}</h3>
                  <p className="flex-1 text-xs leading-relaxed md:text-xs text-slate-600">{bukti.desc}</p>
                  <button className="self-start px-5 py-2 mt-4 text-xs text-white bg-[#095046] rounded-xl hover:bg-emerald-800">Selengkapnya</button>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className="grid gap-8 md:grid-cols-2">
          {buktiNyata.map((bukti) => (
            <div key={bukti.id} className="flex flex-col justify-center overflow-hidden bg-transparent rounded-3xl">
              
              <div className="absolute z-10 flex flex-col overflow-hidden transition-shadow duration-500 shadow-lg h-59 border-3 border-slate-100 rounded-3xl hover:shadow-2xl ">
                <div className="object-cover w-full">
                  <img src={bukti.img} alt={bukti.title} className="object-cover h-59 w-80" />
                </div>
              </div>

              
              <div className="border-2 border-[#65BDFF] pl-80 rounded-3xl backdrop-blur">
                <div className="flex flex-col justify-center w-full p-6">
                  <h3 className={'${bukti.judul} mb-2 font-semibold text-md hover:cursor-pointer'}>{bukti.title}</h3>
                  <p className="flex-1 text-xs leading-relaxed text-slate-600">{bukti.desc}</p>
                  <button className="self-start px-5 py-2 mt-4 text-xs text-white bg-teal-900 hover:cursor-pointer rounded-xl hover:bg-teal-950">Selengkapnya</button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

import React from 'react';

const SejarahSekolah = () => {
  const timelineData = [
    {
      id: 1,
      title: 'Peresmian Berdirinya Sekolah',
      description: [
        '<b>Sekolah Dasar Islam Terpadu Fajar</b> (SDIT Fajar) resmi didirikan pada tahun 2012 dengan visi menghadirkan pendidikan berbasis Islam yang berkualitas. Berawal dari impian besar para pendiri untuk membentuk generasi muda yang berakhlak mulia, cerdas, dan bertakwa, sekolah ini memulai perjalanannya dengan komitmen yang kuat terhadap nilai-nilai Islam.',
        'Momen bersejarah tersebut diresmikan dengan tanda tangan oleh Wali Kota Depok bersama tokoh masyarakat dan para pendiri. Ini menjadi tonggak awal berdirinya SDIT Fajar yang terus tumbuh menjadi lembaga pendidikan terkemuka, tidak hanya dari sisi akademik tetapi juga penguatan karakter siswa.',
      ],
      image: 'images/sejarah-sekolah/tanda-tangan.jpg',
    },
    {
      id: 2,
      title: 'Peletakan Batu Pertama: Simbol Awal dan Harapan',
      description: [
        'Peletakan batu pertama menandai dimulainya pembangunan fisik sekolah. Momen ini menggambarkan optimisme serta harapan untuk mendidik sepuluh siswa pertama yang bergabung dalam SDIT Fajar. Ini adalah bukti nyata bahwa dengan kesungguhan hati dan doa, mimpi untuk menyediakan pendidikan berkualitas berbasis Islam dapat diwujudkan.',
      ],
      image: 'images/sejarah-sekolah/peletakan-batu-pertama.jpg',
    },
    {
      id: 3,
      title: 'Mengukir Sejarah Bersama',
      description: [
        'Hingga saat ini, SDIT Fajar telah menjelma menjadi lembaga pendidikan yang dikenal luas berkat prestasi siswa-siswinya, baik di tingkat akademik maupun non-akademik. Visi untuk terus mencetak generasi penerus bangsa yang unggul dan berkarakter Islami masih menjadi fokus utama dalam setiap langkah dan program yang dijalankan oleh sekolah ini.',
      ],
      image: 'images/sejarah-sekolah/abi mba.jpg',
      // image: 'https://placehold.co/600x400/2486C6/002141?text=Kegiatan+Sekolah',
    },
  ];

  return (
    <section className="px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {/* Text Content */}
      <div className="mx-auto mb-5 text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#002141]">Sejarah SDIT Fajar</h2>
        <div className="h-2 w-40 bg-[#2486C6] mt-1 mb-4"></div>

        <p className="leading-relaxed text-justify text-gray-700 text-md md:text-lg">
          SDIT Fajar berdiri pada tahun <strong>2012</strong> sebagai wujud kepedulian terhadap pendidikan Islam yang berkarakter. Dengan semangat "Mencetak Generasi Qurani, Cerdas, dan Berakhlak Mulia", sekolah ini terus berkembang menjadi
          lembaga pendidikan yang unggul dan dipercaya masyarakat.
        </p>
      </div>

      {timelineData.map((item, index) => (
        <div key={item.id} className="py-8">
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="transition-all duration-300 hover:scale-105">
              <img src={item.image} className="object-cover w-full h-auto shadow-lg rounded-2xl" alt={`Gambar sejarah sekolah ${item.title}`} />
            </div>
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{item.title}</h2>
                {item.description.map((desc, idx) => (
                  <p key={idx} className="mt-4 leading-relaxed text-gray-700 text-md" dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SejarahSekolah;

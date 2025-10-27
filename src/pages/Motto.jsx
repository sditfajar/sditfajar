export default function Motto() {
  return (
    <section className="w-full px-5 font-poppins">
      <div className="container mx-auto max-w-7xl">
        {/* Judul */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-start md:text-4xl text-[#002141]">Motto & Visi Misi</h2>
          <div className="w-32 h-2 mt-2 bg-[#2486C6]"></div>
        </div>

        {/* Visi-Misi */}
        <div className="">
          <div className="container pt-0 pb-0 mx-auto space-y-10 max-w-7xl">
            {/* Misi */}
            <div>
              <div className="p-4 border rounded-xl border-slate-300">
                <h2 className="flex items-center gap-2 pb-2 text-lg font-bold text-gray-700 border-b-1 border-slate-300">Motto</h2>
                <p className="pt-3 font-medium text-gray-700">Jiwa Pemimpin tumbuh dari lingkungan dan perkembangan interaksi sosial.</p>
              </div>
            </div>
            {/* Visi SDIT */}
            <div>
              <div className="p-4 border rounded-xl border-slate-300">
                <h2 className="flex items-center gap-2 pb-2 text-lg font-bold text-gray-700 border-b-1 border-slate-300">Visi</h2>
                <p className="pt-3 font-medium text-gray-700">Terwujudnya peserta didik yang beriman dan bertaqwa, terampil serta cinta terhadap lingkungan.</p>
              </div>
            </div>

            {/* Misi */}
            <div>
              <div className="p-4 border rounded-xl border-slate-300">
                <h2 className="flex items-center gap-2 pb-2 text-lg font-bold text-gray-700 border-b-1 border-slate-300">Misi</h2>
                <ul className="pt-3 pl-6 space-y-2 font-medium text-gray-700 list-disc">
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
      </div>
    </section>
  );
}

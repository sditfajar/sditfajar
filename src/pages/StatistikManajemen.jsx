import CountUp from '../ReactBits/CountUp/CountUp.jsx';

export default function StatistikManajemen() {
  return (
    <section className="p-8 mx-0 bg-white shadow-sm md:mx-5 rounded-3xl md:p-5 font-poppins">
      {/* Judul */}
      <div className="container py-10 mx-auto max-w-7xl">
        <div className="py-5 mb-10">
          <h2 className="text-3xl font-bold text-[#002141] md:text-4xl">Statistik Manajemen</h2>
          <div className="w-32 h-2 mt-2 bg-[#5DB5F7]"></div>
        </div>

        {/* Statistik Bawah */}
        <div className="grid grid-cols-1 gap-4 mt-0 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 text-center border rounded-xl border-slate-200">
            <p className="text-[#095046] font-medium">Guru</p>
            <CountUp from={0} to={14} separator="," direction="up" duration={1} className="text-2xl font-bold count-up-text text-[#5DB5F7]" />
            <span className="text-2xl font-bold text-[#5DB5F7]"> Guru</span>
            <p className="mt-1 text-xs text-gray-500 md:text-sm">Mendidik dengan ikhlas dan penuh dedikasi.</p>
          </div>
          <div className="p-6 text-center border rounded-xl border-slate-200">
            <p className="text-[#095046] font-medium">Tenaga Kependidikan</p>
            <CountUp from={0} to={2} separator="," direction="up" duration={1} className="text-2xl font-bold count-up-text text-[#5DB5F7]" />
            <span className="text-2xl font-bold text-[#5DB5F7]"> T.Kependidikan</span>
            <p className="mt-1 text-xs text-gray-500 md:text-sm">Melayani dengan tanggung jawab dan kehangatan.</p>
          </div>

          <div className="p-6 text-center border rounded-xl border-slate-200">
            <p className="text-[#095046] font-medium">Murid</p>
            <CountUp from={0} to={73} separator="," direction="up" duration={1} className="text-2xl font-bold count-up-text text-[#5DB5F7]" />
            <span className="text-2xl font-bold text-[#5DB5F7]"> Murid</span>
            <p className="mt-1 text-xs text-gray-500 md:text-sm">Generasi Qurani yang cerdas dan berakhlak.</p>
          </div>

          <div className="p-6 text-center border rounded-xl border-slate-200">
            <p className="text-[#095046] font-medium0">Rombel</p>
            <CountUp from={0} to={6} separator="," direction="up" duration={1} className="text-2xl font-bold count-up-text text-[#5DB5F7]" />
            <span className="text-2xl font-bold text-[#5DB5F7]"> Rombel</span>
            <p className="mt-1 text-xs text-gray-500 md:text-sm">Lingkungan belajar yang aktif dan menyenangkan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

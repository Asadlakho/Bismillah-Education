import React from "react";

const levels = [
  {
    emoji: "👦",
    title: "Level 1: Noorani Qaida",
    arabic: "نُورَانِي قَاعِدَة",
    desc: "Learn Arabic letters, pronunciation & basic word joining",
  },
  {
    emoji: "📖",
    title: "Level 2: Basic Quran Reading",
    arabic: "القِرَاءَة الأَسَاسِيَة لِلقُرآن",
    desc: "Start reading Quran verses with tajweed foundations",
  },
  {
    emoji: "🔠",
    title: "Level 3: Tajweed Essentials",
    arabic: "أَسَاسِيَات التَجوِيد",
    desc: "Master the rules of tajweed with daily corrections",
  },
  {
    emoji: "📚",
    title: "Level 4: Full Quran Reading",
    arabic: "القِرَاءَة الكَامِلَة لِلقُرآن",
    desc: "Complete Quran reading with proper pronunciation",
  },
  {
    emoji: "🧠",
    title: "Level 5: Memorization - Juz Amma",
    arabic: "حفظ جزء عَمّ",
    desc: "Start memorizing short surahs with daily revision cycles",
  },
  {
    emoji: "🧠",
    title: "Level 6: Hifz Program",
    arabic: "برنامج الحفظ",
    desc: "Memorize full Quran sections with supervision",
  },
  {
    emoji: "🕋",
    title: "Level 7: Islamic Studies",
    arabic: "الدراسات الإسلامية",
    desc: "Learn Islamic subjects, dua, and daily sunnah practices",
  },
  {
    emoji: "🗣",
    title: "Level 8: Arabic Basics",
    arabic: "أَسَاسِيَات اللُغَة العَرَبِيَة",
    desc: "Learn Arabic grammar, vocabulary & comprehension",
  },
  {
    emoji: "🌟",
    title: "Level 9: Advanced Tajweed",
    arabic: "التَجوِيد المُتَقَدِم",
    desc: "Master tajweed theory, Qira’ah, and tongue techniques",
  },
  {
    emoji: "🎓",
    title: "Level 10: Ijazah Certification",
    arabic: "شَهَادَة الإِجَازَة",
    desc: "Recite Quran from memory and earn official Ijazah sanad",
  },
];

export default function Levels() {
  return (
    <div className="w-full">

      {/* 🔹 Top Ayat Section */}
      <section className="w-full text-center px-4 py-20 bg-[#E8F8E5] bg-gradient-to-b from-[#EBFFD9] to-[#E6F7D6]">
        <h1 className="text-[42px] md:text-[60px] text-[#1C3F2A] font-serif font-bold leading-snug">
          اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
        </h1>

        <h2 className="mt-4 text-[32px] md:text-[42px] font-bold text-[#1C3F2A]">
          Embark on Your <span className="text-green-700">Quran Journey 🌙</span>
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-[17px] md:text-[18.5px] text-gray-700 leading-relaxed">
          Learn the Holy Quran with <b>peace, guidance, and devotion.</b> Experience spiritual
          growth through <i>structured online classes</i> guided by expert tutors.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="/free-trial"
            className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-xl text-[16px] shadow-md duration-150"
          >
            🌿 Start Free Trial
          </a>

          <a
            href="/programs"
            className="px-6 py-3 bg-white hover:bg-gray-100 border border-green-700 text-green-700 rounded-xl text-[16px] shadow-md duration-150"
          >
            📖 Explore Programs
          </a>
        </div>
      </section>

      {/* 🔹 Journey Section */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-16 bg-white">
        <h2 className="text-[26px] md:text-[30px] font-bold text-[#1C3F2A] flex items-center gap-2 mb-10">
          📘 Quran Learning Journey
        </h2>

        <div className="relative border-l-4 border-green-600 pl-6 space-y-8">
          {levels.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3FFF2] p-5 rounded-xl shadow-sm hover:shadow-md duration-150"
            >
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#1C3F2A] flex items-center gap-2">
                {item.emoji} {item.title}
              </h3>
              <p className="text-[#1C3F2A] text-[17px] mt-1">{item.arabic}</p>
              <p className="text-gray-700 text-[15px] mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Promo Banner */}
      <section className="w-full px-4 py-20 bg-gradient-to-b from-[#C3F0A6] to-[#A4E088]">
        <div className="max-w-3xl mx-auto bg-[#E8FFE0] p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-[30px] md:text-[36px] font-bold text-[#1C3F2A]">
            🌙 Begin Your <span className="text-green-700">Quran Journey</span> Today
          </h2>

          <p className="mt-4 text-gray-700 text-[16px] md:text-[17px] leading-relaxed">
            Thousands have begun their path toward becoming Huffaz and Qaris. Wherever you are in
            your learning — our tutors guide you with patience, devotion, and excellence. 🍃
          </p>

          <a
            href="/enroll"
            className="mt-7 inline-block px-7 py-3 bg-green-700 hover:bg-green-800 text-white rounded-xl text-[17px] shadow-md duration-150"
          >
            Enroll Now 📘
          </a>
        </div>
      </section>
    </div>
  );
}

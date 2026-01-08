import React from "react";
import video from "../assets/programs.mp4"
import women from "../assets/Easycommunication.png"
const Programs = () => {
  return (
    <>
      {/* =========================
          HERO SECTION
      ========================== */}
      <div className="w-full bg-[#F3FBE9] py-10 px-6">
        <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row items-start justify-between">

          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-[48px] leading-[52px] font-bold text-[#1b381b] tracking-tight">
              Learn the <span className="text-[#5FAF3F]">Quran</span> <br /> with Peace & Light
            </h1>

            <div className="text-[50px] mt-3">🌙</div>

            <p className="mt-6 text-[17px] leading-[28px] text-[#444] max-w-[550px]">
              📖 <b>1-on-1 Online Quran Classes</b> for Kids, Adults & Reverts — learn anytime with expert tutors.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <button className="bg-[#66BD55] hover:bg-[#54a846]
               text-white text-[16px] font-semibold px-8 py-3 rounded-full shadow-md flex items-center gap-2">
                🚀 Start Free Trial
              </button>

              <button className="border-2 border-[#62AF4A] text-[#3F7A30] hover:bg-[#e8f8e3]
               text-[16px] font-semibold px-8 py-3 rounded-full shadow-md flex items-center gap-2">
                📚 Explore Programs
              </button>
            </div>

            <p className="mt-6 text-[#88a77a] text-[26px] opacity-30 tracking-[1px]">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>

          {/* RIGHT VIDEO */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-13">
            <div className="bg-[#D8F0C8] p-3 rounded-[35px] border-[8px] border-[#8CC878] shadow-lg">
              <video
                src={video}
                autoPlay
                muted
                loop
                className="rounded-[30px] w-[445px] h-[260px] object-cover"
              />

              <div className="flex justify-center -mt-5">
                <span className="bg-[#5FAF3F] text-white px-5 py-1 text-[13px] rounded-full shadow-md">
                  🎧 Peaceful Quran Recitation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===============================
          SECTION 2 – WHITE
      ================================ */}
      <div className="w-full bg-white py-14 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[32px] font-bold text-[#76B24F]">
            📘 Explore Our Quran Programs <span className="text-[36px]">🌙</span>
          </h1>

          <p className="mt-4 text-[18px] text-[#3b5b3b] max-w-[700px] mx-auto">
            Discover programs designed with <b>faith 💚</b>, <b>focus 🧭</b>, and <b>love for the Quran 📜</b>.
          </p>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="relative">
              <button className="bg-[#3E9B43] text-white text-[18px] font-semibold px-7 py-2.5 rounded-full shadow-md">
                All ✨
              </button>
              <span className="absolute -right-2 -top-2 bg-[#FFD83B] text-white text-[16px] w-8 h-8 flex items-center justify-center rounded-full shadow">
                ⭐
              </span>
            </div>

            <button className="text-[18px] px-7 py-2.5 rounded-full border hover:bg-[#f7fff4]">Nazra ✨</button>
            <button className="text-[18px] px-7 py-2.5 rounded-full border hover:bg-[#f7fff4]">Hifz ✨</button>
            <button className="text-[18px] px-7 py-2.5 rounded-full border hover:bg-[#f7fff4]">Tajweed ✨</button>
            <button className="text-[18px] px-7 py-2.5 rounded-full border hover:bg-[#f7fff4]">Islamic ✨</button>
          </div>
        </div>
      </div>

      {/* ===============================
          PROGRAM CARDS
      ================================ */}
      <div className="w-full bg-[#E8F9E9] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">

          <h1 className="text-[40px] text-center font-bold text-[#1b381b] flex justify-center items-center gap-2">
            📚 Our Quran Learning Programs 🌙
          </h1>

          <p className="text-center text-[#2f4f2f] text-[17px] mt-3 max-w-[700px] mx-auto">
            Choose a path that strengthens your connection with the Quran 📖📚🌿
          </p>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: "📘", badge: "Nazra 🌸", title: "📘 Nazra Quran ✨" },
              { icon: "🧠", badge: "Hifz 🌸", title: "🧠 Hifz e Quran ✨" },
              { icon: "📖", badge: "Tajweed 🌸", title: "🎧 Tajweed ✨" },
              { icon: "🌙", badge: "Islamic 🌸", title: "🌙 Islamic Studies ✨" },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-md border border-[#d6e9d6] overflow-hidden">
                <div className="h-2 w-full bg-[#3A8F3A]" />

                <div className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E6F7E6] flex items-center justify-center mx-auto">
                    <span className="text-[32px]">{c.icon}</span>
                  </div>

                  <div className="mt-2 inline-block bg-[#eef9ee] text-[#2d552d] px-3 py-1 rounded-full text-sm">
                    {c.badge}
                  </div>

                  <h3 className="text-[18px] font-bold text-[#1b381b] mt-3">{c.title}</h3>

                  <p className="text-[#3b5b3b] text-[15px] mt-2">
                    Learn with expert teachers and easy schedules.
                  </p>

                  <div className="w-full mt-5 border-t border-[#d9ead9]" />

                  <div className="mt-4 space-y-1 text-left text-[15px] text-[#294129]">
                    <p>📅 <b>Duration:</b> 3 Months</p>
                    <p>🔥 <b>Monthly Fee:</b> PKR 3500</p>
                    <p>👨‍👩‍👧‍👦 <b>For:</b> Kids & Adults</p>
                  </div>

                  <button className="mt-5 w-full bg-[#2D7A2D] hover:bg-[#256725]
                   text-white font-semibold py-2.5 rounded-full text-[15px]">
                    {c.icon} Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <div className="w-[110px] h-[3px] bg-[#3c8c3c] rounded-full" />
          </div>
        </div>
      </div>

      {/* ===============================
          COMMUNICATION SECTION
      ================================ */}
      <div className="w-full bg-[#c3e5bc] py-20 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-[40px] font-bold text-[#113811] leading-[48px]">
              💬 Easy Communication,<br /> Wherever You Are 🌍
            </h1>

            <p className="mt-5 text-[18px] leading-[28px] text-[#2f4f2f] max-w-[550px]">
              Stay connected with your Quran tutor on WhatsApp, Zoom, Google Meet, or Skype 📖✨
            </p>

            <div className="flex items-center gap-5 mt-8 text-[45px]">
              <span>🟢</span>
              <span>🔵</span>
              <span>📹</span>
              <span>📞</span>
            </div>

            <button className="mt-8 bg-[#3A8F3A] hover:bg-[#2e7130] text-white 
            text-[18px] font-semibold px-9 py-3 rounded-full shadow-md">
              📅 Book Your Free Trial
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="bg-[#E3F6E3] p-5 rounded-[35px] shadow-lg">
              <img
                src={women}
                className="w-[430px] h-[480px] object-cover rounded-[28px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===============================
          STUDENT STATS — FULL WIDTH, OUTSIDE
      ================================ */}
      <div className="w-full bg-white py-20">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#204F28] flex items-center justify-center gap-3">
            <span>📊</span> Our Student Stats
          </h2>
        </div>

        {/* GRID */}
        <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">

          {[
            { icon: "👨‍🎓", label: "🎓 Students Graduated", num: "4,200+" },
            { icon: "🧑‍🏫", label: "👨‍🎓 Current Students", num: "850+" },
            { icon: "🌍", label: "🌎 Countries Reached", num: "12+" },
            { icon: "📚", label: "📗 Total Programs", num: "18+" },
            { icon: "🎵", label: "👨‍🏫 Total Teachers", num: "25+" },
            { icon: "🧑", label: "👦 Male Students", num: "2,500+" },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAF8E7] rounded-3xl rotate-12"></div>

              <div className="relative">
                <div className="text-4xl">{c.icon}</div>
                <div className="text-xl font-semibold text-[#1E3520] mt-4 flex items-center gap-2">
                  {c.label}
                </div>
                <div className="text-4xl font-bold text-[#1A7A36] mt-3">{c.num}</div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="w-full bg-[#F3FFEE] py-10">

  <div className="max-w-[1200px] mx-auto text-center px-4">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-semibold text-[#195A3B] flex items-center justify-center gap-3">
      🌙 Start Your Spiritual Journey Today!
    </h2>

    {/* Subtitle */}
    <p className="text-lg md:text-xl text-[#195A3B] mt-6 leading-relaxed">
      Join 1-on-1 live Quran classes 📖 — With certified male & female teachers 👨‍🏫👩‍🏫.<br />
      Flexible timing ⏱️ . Free trial included 🎁.
    </p>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">

      <button className="flex items-center gap-2 bg-[#195A3B] text-white px-8 py-3 rounded-full text-lg shadow-md hover:scale-105 duration-200">
        🧠 Book Free Trial
      </button>

      <button className="flex items-center gap-2 border border-[#195A3B] text-[#195A3B] px-8 py-3 rounded-full text-lg shadow-md hover:bg-[#195A3B] hover:text-white duration-200">
        📚 Explore Courses
      </button>

    </div>

  </div>
</div>


    </>
  );
};

export default Programs;

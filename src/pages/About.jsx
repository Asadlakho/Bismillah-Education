import {
  FaChalkboardTeacher,
  FaClock,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";
import Women from "../assets/women.png";
import Kid from "../assets/kid.jpg";

export default function About() {
  const features = [
    {
      icon: <FaChalkboardTeacher size={38} />,
      title: "Certified Teachers",
      desc: "Guidance from scholars with deep Islamic knowledge.",
    },
    {
      icon: <FaClock size={38} />,
      title: "Flexible Schedules",
      desc: "Morning, evening, or weekend — study anytime.",
    },
    {
      icon: <FaGlobe size={38} />,
      title: "Worldwide Access",
      desc: "Join from anywhere with just an internet connection.",
    },
    {
      icon: <FaShieldAlt size={38} />,
      title: "Safe & Private",
      desc: "1-on-1 secure sessions for every student.",
    },
  ];

  return (
    <div className="font-serif">

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0d260d] to-[#24471f] text-center py-[80px] px-6 md:px-[100px]">
        <button className="bg-[#2c4729] text-[#f9f3c2] font-extrabold text-[16px] md:text-[20px] px-6 py-2 rounded-full border mb-6">
          اِنَّ هٰذَا الْقُرْاٰنَ يَهْدِيْ لِلَّتِيْ هِيَ اَقْوَمُ 🌙
        </button>

        <div className="mx-0 md:mx-[180px]">
          <h1 className="text-white text-[34px] md:text-[60px] font-extrabold leading-tight">
            Illuminating Hearts with the{" "}
            <span className="text-[#99CC66]">Light of the Quran 🌿</span>
          </h1>

          <p className="text-[#e6f2e6] text-[15px] md:text-[18px] mx-0 md:mx-[55px] mt-5 mb-7 font-medium">
            We believe in transforming lives through the timeless guidance of the
            Quran — taught with love, patience, and sincerity.
          </p>

          <div className="w-[100px] h-[4px] bg-[#99cc66] rounded-full mx-auto mb-12" />

          <a className="inline-block bg-[#99cc66] px-10 py-5 rounded-full font-semibold hover:scale-105 transition">
            Discover Our Purpose ✨
          </a>
        </div>
      </section>

      {/* WHY LEARN */}
      <section className="bg-gradient-to-br from-[#e7f5eb] to-[#f5fef6] py-20 px-4">
        <h2 className="text-center text-[28px] md:text-[38px] font-extrabold text-gray-700 mb-3">
          🌟 Why Learn With Us?
        </h2>
        <p className="text-center text-gray-500 mb-14 text-sm md:text-base">
          Experience Quran learning that is modern, accessible, and spiritually fulfilling.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white w-full md:w-[290px] p-4 rounded-[20px] shadow-sm text-center"
            >
              <div className="bg-[#d8f5c5] text-[#43a447] w-fit mx-auto p-3 rounded-full mb-4">
                {f.icon}
              </div>
              <h5 className="font-bold text-gray-700">{f.title}</h5>
              <p className="text-gray-500 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-gradient-to-r from-[#B9D9C3] via-[#F9FCF8] to-[#B9D9C3] px-6">
        <h2 className="text-center text-[30px] md:text-[45px] font-extrabold text-gray-700 mb-6">
          🌟 Why Choose <span className="text-[#419E44]">Our Quran Academy?</span>
        </h2>

        <p className="text-center text-gray-500 text-[15px] md:text-[18px] mx-0 md:mx-[320px] mb-14">
          A spiritual journey that's personal, global, and guided by excellence.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-[170px] text-[16px] md:text-[20px]">
          <div>
            <p>✅ <b>Certified</b> male & female teachers</p>
            <p>🌍 <b>Worldwide access</b></p>
            <p>📘 <b>Structured Hifz & Tajweed</b></p>
          </div>
          <div>
            <p>🎥 <b>One-on-one</b> live sessions</p>
            <p>🕒 <b>Flexible timings</b></p>
            <p>💵 <b>Affordable plans</b></p>
          </div>
        </div>
      </section>

      {/* FEMALE TEACHERS */}
      <section className="flex flex-col md:flex-row gap-[60px] md:gap-[100px] px-6 md:px-[100px] py-20 bg-gradient-to-br from-[#d8f1c7] to-[#f5faf1]">
        <img src={Women} className="w-full md:w-[450px] mx-auto" />

        <div className="text-center md:text-left">
          <h1 className="text-[32px] md:text-[50px] font-extrabold text-[#336633] mb-4">
            Learn Quran with Female Teachers 👩‍🏫🧕
          </h1>

          <p className="text-gray-600 mb-5">
            Safe and supportive environment for sisters and girls.
          </p>

          <ul className="space-y-2 mb-6 text-[#336633] inline-block text-left">
            <li>✅ Female-only learning</li>
            <li>✅ Friendly teachers</li>
            <li>✅ Tajweed & Hifz</li>
            <li>✅ Online comfort</li>
          </ul>

          <br />
          <a className="bg-[#99cc66] px-6 py-4 rounded-lg font-bold text-white inline-block hover:scale-105">
            🧕 Enroll with a Female Teacher
          </a>
        </div>
      </section>

        <section className="bg-[#fbfdf9] py-[60px] font-serif">
  {/* Heading */}
  <div className="text-center mb-[60px] md:mb-[90px] px-4">
    <h2 className="text-[26px] md:text-[36px] font-bold text-[#2f3e4e] flex items-center justify-center gap-3">
      <span className="text-[34px] md:text-[40px]">👦</span>
      For Kids, Teens & Adults
    </h2>
    <p className="text-[15px] md:text-[18px] text-[#6b7280] mt-3">
      Age doesn't matter — we welcome learners at every stage of life.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[50px] px-4 md:px-[40px]">
    
    {/* Kids */}
    <div className="bg-white rounded-[30px] md:rounded-[36px] border border-[#cde94a] px-6 md:px-[44px] py-[32px] md:py-[40px]
      shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
      <div className="text-[44px] md:text-[50px]">👦</div>
      <h3 className="text-[24px] md:text-[28px] font-bold text-[#2f3e4e] mb-3">
        Kids
      </h3>
      <p className="text-[13px] text-[#6b7280] leading-[1.7]">
        Starting with <b>Noorani Qaida</b>, basic Arabic alphabets, and simple
        surahs — perfect for young minds.
      </p>
    </div>

    {/* Teens */}
    <div className="bg-white rounded-[30px] md:rounded-[36px] border border-[#43a447] px-6 md:px-[44px] py-[32px] md:py-[40px]
      shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
      <div className="text-[44px] md:text-[50px] mb-3">👦</div>
      <h3 className="text-[24px] md:text-[28px] font-bold text-[#2f3e4e] mb-3">
        Teens
      </h3>
      <p className="text-[13px] text-[#6b7280] leading-[1.7]">
        Focused on <b>Hifz programs</b>, <b>Tajweed</b>, and learning
        <b> Islamic etiquettes</b> for character building.
      </p>
    </div>

    {/* Adults */}
    <div className="bg-white rounded-[30px] md:rounded-[36px] border border-[#64748b] px-6 md:px-[44px] py-[32px] md:py-[40px]
      shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
      <div className="text-[44px] md:text-[50px] mb-3">👴</div>
      <h3 className="text-[24px] md:text-[28px] font-bold text-[#2f3e4e] mb-3">
        Adults
      </h3>
      <p className="text-[13px] text-[#6b7280] leading-[1.7]">
        Join our <b>evening Tajweed classes</b> or refresh your recitation
        skills from home.
      </p>
    </div>

  </div>

  {/* ================= Scholars Section ================= */}
  <div className="mt-[90px] md:mt-[140px] px-4">

    {/* Heading */}
    <div className="text-center mb-[60px] md:mb-[90px] max-w-[900px] mx-auto">
      <h2 className="text-[30px] md:text-[42px] font-bold text-[#2f3e4e] flex items-center justify-center gap-4">
        <span className="text-[36px] md:text-[44px]">🌍</span>
        Our Scholars & Global Trust
      </h2>

      <p className="text-[15px] md:text-[18px] text-[#6b7280] mt-5 leading-[1.8]">
        We’re proud to be guided by renowned scholars, taught by certified teachers,
        and trusted by thousands of families across the world.
      </p>
    </div>

    {/* Content */}
    <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:px-[40px]">

      {/* Respected Ulema */}
      <div className="md:pr-[50px]">
        <h3 className="text-[22px] md:text-[26px] font-bold text-[#2f3e4e] flex items-center gap-3 mb-6">
          <span className="text-[26px] md:text-[28px]">🕌</span>
          Respected Ulema
        </h3>
        <p className="text-[15px] md:text-[16px] text-[#6b7280] leading-[1.9] mb-6">
          Our programs are designed under the supervision of highly respected
          Islamic scholars (Ulema), ensuring full alignment with Quran & Sunnah.
        </p>
        <p className="text-[15px] md:text-[16px] text-[#6b7280] leading-[1.9]">
          Regular reviews & shariah guidance help maintain spiritual integrity.
        </p>
      </div>
         
      <div className="hidden md:block border-l border-[#d1d5db]"></div>
          {/* Trusted Worldwide */}
      <div className="md:pl-[50px] lg:[pb-50px]">
        <h3 className="text-[22px] md:text-[26px] font-bold text-[#2f3e4e] flex items-center gap-3 mb-6">
          <span className="text-[26px] md:text-[28px]">🤝</span>
          Trusted Worldwide
        </h3>
        <p className="text-[15px] md:text-[16px] text-[#6b7280] leading-[1.9] mb-6">
          15,000+ students, 20+ countries, and verified testimonials.
        </p>
        <p className="text-[15px] md:text-[16px] text-[#6b7280] leading-[1.9]">
          Institutions & masajid partner with us globally.
        </p>
      </div>
            <div className="hidden md:block border-l border-[#d1d5db]"></div>

      {/* Certified Teachers */}
      <div className="md:px-[50px] md:mt-[-270px]">
        <h3 className="text-[22px] md:text-[26px] font-bold text-[#2f3e4e] flex items-center gap-3 mb-6">
          <span className="text-[23px] md:text-[20px]">🧑‍🏫</span>
          Certified Teachers
        </h3>
        <p className="text-[15px] md:text-[16px] text-[#6b7280] leading-[1.9] mb-6">
          We employ Ijaza-holding male and female teachers trained in Tajweed,
          Hifz, and modern online teaching methods.
        </p>
        <p className="text-[15px] md:text-[16px] text-[#6b7280] leading-[1.9]">
          Interactive sessions and regular assessments.
        </p>
      </div>


      


    </div>
  </div>
</section>

      {/* ISLAMIC */}
      <section className="flex flex-col-reverse md:flex-row gap-[60px] md:gap-[100px] px-6 py-20 bg-gradient-to-l from-[#c5efd1] to-[#eefcf2] items-center">
        <div className="text-center md:text-left">
          <h1 className="text-[32px] md:text-[45px] font-bold">
            Learn from <span className="text-[#43A447]">Qualified Islamic Teachers 📖👳‍♂️</span>
          </h1>
          <p className="text-gray-600 mb-10">
            Personalized Quran education worldwide.
          </p>
          <a className="bg-[#43A447] px-8 py-4 rounded-full text-white font-bold">
            📞 Book Free Trial Class
          </a>
        </div>

        <img src={Kid} className="w-full md:w-auto md:mr-[80px]" />
      </section>

    </div>
  );
}

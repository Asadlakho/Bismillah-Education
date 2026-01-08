import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaCreditCard,
  FaMoneyBillWave,
  FaWallet,
  FaExchangeAlt,
  FaUniversity,
  FaCircle,
  FaBtc
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <div
        className="w-full h-[1px]"
        style={{
          background: `
      repeating-linear-gradient(
        90deg,
        #C6E8AB 0px,
        #badf9b 6px,
        transparent 6px,
        transparent 18px
      )
    `
        }}
      />

      {/* FOOTER MAIN */}
      <div className="w-full bg-[#eef8e9] py-16 px-2">
        <div className="max-w-13xl mx-auto flex flex-wrap justify-between items-start gap-1">
          {/* LEFT GREEN CARD */}
          <div className="w-[350px] bg-gradient-to-br from-[#41b34d] to-[#c7e63c] rounded-2xl p-7 lg:mr-2 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
            <h2 className="text-white text-[28px] font-bold leading-tight flex items-center gap-1">
              📘 Seeking Knowledge is a <br /> Duty!
            </h2>

            <p className="text-white mt-5 text-[18px] leading-relaxed flex flex-col gap-1">
              <span>🧿 Join BismillahEducation Now!</span>
              <span>WhatsApp: +92-316-1639706</span>
            </p>

            <button className="bg-white w-full mt-8 py-3 rounded-full text-[#333] font-semibold text-lg shadow-md flex items-center justify-center gap-2">
              💬 Join Our Community
            </button>
          </div>

          {/* QUICK LINKS */}
          <div className="w-[260px]">
            <h3 className="text-[#46b446] text-2xl font-semibold flex items-center gap-1">🔗 Quick Links</h3>

            <div className="h-[3px] w-full bg-[#cfe467] mt-1 mb-4" />

            <ul className="space-y-3 text-[#333] text-[18px]">
              {["🏡 Home", "🌙 Our Mission", "📘 Admissions", "☎️ Contact", "❓ FAQ"].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:text-[#46b446] transition-all duration-300
                       relative after:absolute after:left-0 after:-bottom-1 after:w-0 
                       after:h-[2px] after:bg-[#46b446] after:transition-all after:duration-300
                       hover:after:w-full cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ISLAMIC NAVIGATION */}
          <div className="w-[260px]">
            <h3 className="text-[#46b446] text-2xl font-semibold flex items-center gap-1">🕋 Islamic Navigation</h3>

            <div className="h-[3px] w-full bg-[#cfe467] mt-1 mb-4" />

            <ul className="space-y-3 text-[#333] text-[18px]">
              {["🕌 Namaz", "🧿 Masnoon Duain", "📘 Hadith", "💰 Zakat", "🌙 Ramadan"].map((item, i) => (
                <li
                  key={i}
                  className="flex items-cente]r gap-2 hover:text-[#66d466] transition-all duration-300
             relative after:absolute after:left-0 after:-bottom-1 after:w-0 
             after:h-[2px] after:bg-[#60cb60] after:transition-all after:duration-400
             hover:after:w-[45%] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div className="w-[260px]">
            <h3 className="text-[#46b446] text-2xl font-semibold flex items-center gap-1">📜 Legal</h3>

            <div className="h-[3px] w-full bg-[#cfe467] mt-1 mb-4" />

            <ul className="space-y-3 text-[#333] text-[18px]">
              {["📄 Terms & Conditions", "🔒 Privacy Policy"].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:text-[#46b446] transition-all duration-300
                       relative after:absolute after:left-0 after:-bottom-1 after:w-0 
                       after:h-[2px] after:bg-[#46b446] after:transition-all after:duration-300
                       hover:after:w-full cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="max-w-7xl mx-auto mt-14">
          <h3 className="text-[#46b446] text-2xl font-semibold flex items-center gap-2">📬 Contact Us</h3>

          <div className="h-[3px] bg-[#d7e866] w-full mt-2 mb-5" />

          <ul className="space-y-4 text-[#333] text-[18px]">
            {[
              ["📱", "+92-327-6381819"],
              ["📞", "+92-316-1639706"],
              ["📧", "info@bismillaheducation.pk"],
              ["🌐", "www.bismillaheducation.pk"]
            ].map(([icon, text], i) => (
              <li key={i} className="flex items-center gap-3">
                <span>{icon}</span> {text}
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6 mt-7">
            <FaFacebookF size={40} className="text-[#3b5998] bg-white p-2 rounded-full shadow" />
            <FaInstagram size={40} className="text-[#d6249f] bg-white p-2 rounded-full shadow" />
            <FaYoutube size={40} className="text-[#ff0000] bg-white p-2 rounded-full shadow" />
            <FaWhatsapp size={40} className="text-[#25d366] bg-white p-2 rounded-full shadow" />
            <FaLinkedinIn size={40} className="text-[#0077b5] bg-white p-2 rounded-full shadow" />
          </div>
        </div>

        {/* DOTTED LINE */}
        <div className="border-t border-dotted border-[#d7e866] w-full mt-10 mb-10" />

        {/* PAYMENT ICONS */}
        {/* PAYMENT ICONS */}
        <div className="w-full flex justify-center gap-4 sm:gap-6 md:gap-10 mt-4 px-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-xl shadow flex items-center justify-center">
            <FaCreditCard className="text-[#8a2be2] text-[18px] sm:text-[22px] md:text-[32px]" />
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-xl shadow flex items-center justify-center">
            <FaMoneyBillWave className="text-green-600 text-[18px] sm:text-[22px] md:text-[32px]" />
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-xl shadow flex items-center justify-center">
            <FaWallet className="text-gray-800 text-[18px] sm:text-[22px] md:text-[32px]" />
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-xl shadow flex items-center justify-center">
            <FaExchangeAlt className="text-[#0a7d45] text-[18px] sm:text-[22px] md:text-[32px]" />
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-xl shadow flex items-center justify-center">
            <FaUniversity className="text-blue-600 text-[18px] sm:text-[22px] md:text-[32px]" />
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-xl shadow flex items-center justify-center">
            <FaCircle className="text-orange-500 text-[18px] sm:text-[22px] md:text-[32px]" />
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-xl shadow flex items-center justify-center">
            <FaBtc className="text-yellow-500 text-[18px] sm:text-[22px] md:text-[32px]" />
          </div>
        </div>

        {/* SECOND DOTTED LINE */}
        <div className="border-t border-dotted border-[#d7e866] w-full mt-10 mb-6" />

        {/* COPYRIGHT */}
        <div className="text-center text-[#333] text-[17px]">
          © 2025 <span className="text-[#46b446] font-semibold">Bismillah Education</span> — All rights reserved. 🌙 |
          Empowering Through Islamic & Modern Education
        </div>
      </div>
    </div>
  );
};

export default Footer;

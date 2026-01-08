import React from "react";
const Registration = () => {
  return (
    <div className="w-full">
      {/*  TOP BANNER SECTION  */}

      <div className="w-full relative overflow-hidden pt-28 pb-2 bg-[#dff2d2]">

        {/* Background */}
        <div className="absolute inset-0 bg-[#dff2d2]"></div>

        {/* Curved Layer 1 */}
        <div className="absolute top-0 left-0 w-full h-[280px] bg-[#cfe9bd] rounded-b-[50%]"></div>

        {/* Curved Layer 2 */}
        <div className="absolute top-10 right-0 w-full h-[300px] bg-[#e7f7dd] rounded-b-[55%] opacity-90"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 flex justify-center items-center gap-3">
            🕌 Bismillah Islamic Admissions
          </h1>

          {/* Subtitle 1 */}
          <p className="mt-6 text-lg md:text-xl text-gray-800 leading-relaxed flex flex-wrap justify-center gap-2">
            📖 100% Online Quran & Islamic classes for all ages. Join certified male & female teachers today.
          </p>

          {/* Subtitle 2 */}
          <p className="mt-3 text-lg md:text-xl text-gray-800 flex flex-wrap justify-center gap-4">
            🎓 Flexible timings | 📚 Urdu & English Medium | 🎥 Zoom Sessions
          </p>

          {/* Button */}
          <div className="mt-10">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl flex items-center gap-2 mx-auto transition">
              📝 Start Registration
            </button>
          </div>
        </div>
      </div>

      {/* ============================== */}
      {/*  FORM SECTION */}
      {/* ============================== */}

      <div className="w-full bg-[#e8f7df] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT INFO BOX */}
          <div className="bg-[#d4eac7] p-8 rounded-2xl shadow-md border border-[#b9d8a8]">

            <span className="bg-green-800 text-white px-4 py-1 rounded-lg text-sm font-semibold">
              🟩 Islamic Knowledge
            </span>

            <h2 className="text-2xl font-bold mt-4 text-green-900">
              🍃 “Seeking Knowledge is an Obligation upon Every Muslim”
            </h2>

            <p className="mt-4">Learn with Bismillah Education:</p>

            <ul className="mt-3 space-y-2 text-gray-700">
              <li>📖 Quran with Tajweed</li>
              <li>🌸 Masnoon Duain</li>
              <li>📚 Hadith & Fiqh</li>
              <li>🌙 Ramadan & Zakat Guidelines</li>
            </ul>

            <div className="bg-green-700 text-white p-3 rounded-lg mt-6 text-sm font-semibold">
              👨‍🏫 Certified Tutors | 🎥 Live Zoom Classes | 🌍 Urdu + English Medium
            </div>

            <blockquote className="border-l-4 border-green-700 pl-4 mt-6 italic text-gray-700">
              “Whoever follows a path to seek knowledge, Allah makes the path to Paradise easy for him”
              <br />— Sahih Muslim
            </blockquote>

            <div className="mt-6 space-y-2 text-gray-700">
              <p>📞 +92-316-1639706</p>
              <p>📩 support@bismillaheducation.pk</p>
              <p>🌐 100% Online Islamic Classes</p>
            </div>

            <button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-full font-bold">
              💬 Join WhatsApp Channel
            </button>
          </div>

          {/* RIGHT FORM */}
          <div className="md:col-span-2 bg-white p-10 rounded-2xl shadow-md border border-[#c8dfb8]">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="font-semibold">👤 Student Name</label>
                <input type="text" placeholder="Enter full name"
                  className="w-full mt-1 p-3 border rounded-lg" />
              </div>

              <div>
                <label className="font-semibold">📞 Student Phone Number</label>
                <input type="text" placeholder="+92XXXXXXXXXX"
                  className="w-full mt-1 p-3 border rounded-lg" />
              </div>

              <div>
                <label className="font-semibold">📱 Father Phone Number</label>
                <input type="text" placeholder="+92XXXXXXXXXX"
                  className="w-full mt-1 p-3 border rounded-lg" />
              </div>

              <div>
                <label className="font-semibold">🆔 Student CNIC (optional)</label>
                <input type="text" placeholder="42101-1234567-1"
                  className="w-full mt-1 p-3 border rounded-lg" />
              </div>

              <div>
                <label className="font-semibold">👨‍👦 Father CNIC Number</label>
                <input type="text" placeholder="42101-1234567-1"
                  className="w-full mt-1 p-3 border rounded-lg" />
              </div>

              <div>
                <label className="font-semibold">📧 Email Address</label>
                <input type="email" placeholder="example@email.com"
                  className="w-full mt-1 p-3 border rounded-lg" />
              </div>

              <div>
                <label className="font-semibold">🎂 Age</label>
                <input type="text" placeholder="e.g. 12"
                  className="w-full mt-1 p-3 border rounded-lg" />
              </div>

              <div>
                <label className="font-semibold">🌍 City</label>
                <input type="text" placeholder="e.g. Lahore, Karachi"
                  className="w-full mt-1 p-3 border rounded-lg" />
              </div>

            </div>

            {/* Qualifications */}
            <div className="mt-6">
              <label className="font-semibold">🎓 Your Qualifications</label>
              <textarea
                className="w-full mt-1 p-3 border rounded-lg h-20"
                placeholder="e.g. 5th Class, 8th Grade, Matric, Intermediate, A-Levels..."
              ></textarea>
            </div>

            {/* Dropdown Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

              <div>
                <label className="font-semibold">👥 Old or New Student?</label>
                <select className="w-full mt-1 p-3 border rounded-lg">
                  <option>Select</option>
                </select>
              </div>

              <div>
                <label className="font-semibold">📗 Quran/Madrasa Background?</label>
                <select className="w-full mt-1 p-3 border rounded-lg">
                  <option>Select</option>
                </select>
              </div>

            </div>

            {/* Course Select */}
            <div className="mt-6">
              <label className="font-semibold">📘 Select Course</label>
              <select className="w-full mt-1 p-3 border rounded-lg">
                <option>Choose a course</option>
              </select>
            </div>

            {/* Submit */}
            <div className="mt-10 text-right">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-bold">
                📤 Send Message
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Registration;

import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-[#EAF8E3] pt-7 py-3 px-10 mt-1 ">

      {/* PAGE TITLE */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-[#2E7D32] flex justify-center items-center gap-3">
          Get in Touch <span>📩</span>
        </h1>

        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions about our Quran courses? Need guidance or want to enroll?
          We’re just a message away. Reach out and start your journey today!
          <br /> 📚✨
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="mt-16 max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-">

        {/* LEFT CARD */}
        <div className="bg-[#8DD26A] p-12 rounded-[30px] shadow-xl relative">

          <h2 className="text-4xl font-extrabold text-[#1B4D1B] leading-snug">
            Start Your Quran Journey <br /> Today! 📚✨
          </h2>

          <p className="mt-6 text-[#1B4D1B] text-lg leading-relaxed">
            📚 Enroll in our 1-on-1 Quran courses — 
            <span className="bg-black text-white px-2 rounded mx-1">Nazra</span>
            <span className="bg-black text-white px-2 rounded mx-1">Hifz</span>
            <span className="bg-black text-white px-2 rounded mx-1">Tajweed</span>
            <span className="bg-black text-white px-2 rounded mx-1">Islamic Studies</span>
            — from the comfort of your home. 🕌
          </p>

          <ul className="mt-7 space-y-3 text-[#1B4D1B] text-lg">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-700" /> 1-on-1 Live Sessions
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-700" /> Male & Female Teachers
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-700" /> Flexible Timings
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-700" /> Students Worldwide 🌍
            </li>
          </ul>

          <button className="mt-10 bg-[#0F4D1C] px-8 py-3 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-[#0B3A15] transition">
            🚀 Enroll Now
          </button>

          <div className="absolute bottom-6 right-6 opacity-20 text-[#1B4D1B] text-7xl">
            📱
          </div>
        </div>

        {/* RIGHT CARD - FORM */}
        <div className="bg-white w-full p-16 rounded-[40px] shadow-sm md:-ml-2 lg:-ml-2 ">

          <h2 className="text-3xl font-extrabold text-[#1B5E20] mb-6 flex items-center gap-2">
            ✍️ Send a Message
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
                <FaUser /> Full Name
              </label>
              <input
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
                <FaEnvelope /> Email Address
              </label>
              <input
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <FaPhone /> Phone Number
            </label>
            <input
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
              placeholder="03XX-XXXXXXX"
            />
          </div>

          <div className="mt-5">
            <label className="font-semibold text-gray-700 mb-2 block">
              📖 Your Message
            </label>
            <textarea
              rows={5}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button className="w-full mt-7 bg-[#8DD26A] text-[#0E3F17] py-4 rounded-xl text-lg font-bold shadow hover:bg-[#7BCB59] transition flex justify-center items-center gap-2">
             🚀 Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

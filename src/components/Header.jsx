import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bismillah-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const menuItems = [
    { icon: "🏠", label: "Home", path: "/" },
    { icon: "📖", label: "Quran Programs", path: "/programs" },
    { icon: "🎓", label: "Levels", path: "/levels" },
    { icon: "📖", label: "About", path: "/about" },
    { icon: "📞", label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 w-full z-50 transition-all duration-300 
          px-6 md:px-10 py-4 flex items-center justify-between

          md:bg-[##F5FBF2] md:shadow-sm

          ${
            scrolled
              ? "backdrop-blur-xl bg-[#ebf7e380] shadow-md md:bg-[#ebf7e33d]/70"
              : "backdrop-blur-lg bg-[#ebf7e350] md:bg-[#EBF7E3]"
          }
        `}
      >
        {/* LOGO */}
        <Link to="/">
          <img src={logo} className="h-12 cursor-pointer" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-[16px] font-semibold text-black">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.path}
                className="flex items-center gap-1 cursor-pointer hover:text-[#43A447]"
              >
                {item.icon}
                <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:h-[2px] after:bg-green-700 after:w-full
                  after:scale-x-0 group-hover:after:scale-x-100 
                  after:origin-left after:transition-transform after:duration-300">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/registration"
            className="bg-[#99CC66] text-white font-semibold text-lg px-6 py-2 rounded group relative"
          >
            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0 
              after:h-[2px] after:bg-white after:w-full after:scale-x-0 
              group-hover:after:scale-x-100 after:origin-left">
              📝 Registration
            </span>
          </Link>

          <Link
            to="/login"
            className="bg-[#99CC66] text-white font-semibold text-lg px-6 py-2 rounded group relative"
          >
            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0 
              after:h-[2px] after:bg-white after:w-full after:scale-x-0 
              group-hover:after:scale-x-100 after:origin-left">
              🔐 Login
            </span>
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="text-3xl md:hidden text-[#2d2d2d] cursor-pointer"
        >
          ☰
        </button>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-[300px]
        bg-white/15 backdrop-blur-3xl shadow-xl z-50
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
          <img src={logo} className="h-13" />
          <button onClick={() => setOpen(false)} className="text-3xl font-bold cursor-pointer text-white">
            ×
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul className="px-6 pt-6 flex flex-col gap-6 text-[18px] font-semibold text-white">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 group"
              >
                {item.icon}

                {/* WHITE UNDERLINE — EXACT LIKE SCREENSHOT */}
                <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2.5px] after:bg-white after:w-full
                  after:scale-x-0 group-hover:after:scale-x-100 
                  after:origin-left after:transition-transform after:duration-300">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}

          {/* LOGIN BUTTON — MOBILE */}
          <li>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="bg-[#99CC66] text-white px-4 py-3 rounded w-full flex items-center gap-2 group justify-center"
            >
              🔐
              <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-white after:w-full
                after:scale-x-0 group-hover:after:scale-x-100 
                after:origin-left">
                Login
              </span>
            </Link>
          </li>

          {/* REGISTRATION BUTTON */}
          <li>
            <Link
              to="/registration"
              onClick={() => setOpen(false)}
              className="bg-[#99CC66] text-white px-4 py-3 rounded w-full flex items-center gap-2 group justify-center"
            >
              📝
              <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-white after:w-full
                after:scale-x-0 group-hover:after:scale-x-100 
                after:origin-left">
                Registration
              </span>
            </Link>
          </li>
        </ul>

        {/* SOCIAL */}
       <div className="px-6 mt-10 flex flex-col gap-4 text-white/90">

  {/* SOCIAL ICONS */}
  <div className="flex items-center gap-3 text-[26px] mt-[-15px] ml-10">
    <a
      href="tel:+923001234567"
      className="hover:text-[#be4a42] transition"
      aria-label="Call"
    >
      <FaPhoneAlt />
    </a>

    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="hover:text-[#0f73ed] transition"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className="hover:text-[#d13e3e] transition"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noreferrer"
      className="hover:text-[#99CC66] transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>

  </div>

  <p className="text-[13px] opacity-90 ml-14 ">🌐 Version 1.1.0</p>
</div>

      </div>
    </>
  );
};

export default Header;

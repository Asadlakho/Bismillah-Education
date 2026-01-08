import React from 'react'
import logo from '../assets/bismillah-logo.png'
import kidparents from '../assets/kidpernts.png'
import footer from '../assets/footer.png'
const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className='
          w-full 
          pt-16 pb-20 px-5 md:px-12 
          flex flex-col md:flex-row items-center justify-between
          bg-[#F4FFE9]
          backdrop-blur-xl
        '
      >
        {/* LEFT TEXT SIDE */}
        <div className='max-w-xl space-y-4 md:mb-[90px]'>
          <h3 className='text-[#88BB55] tracking-wide font-bold'>
            BISMILLAH EDUCATION
          </h3>

          <h1 className='text-5xl md:text-6xl font-extrabold leading-tight text-[#1d1d1d]'>
            Discover the <br />
            <span className='text-[#88BB55]'>Light of Quran</span> <br />
            Within You 🌙
          </h1>

          <p className='text-gray-700 text-lg mt-3'>
            Step into a journey of understanding, reflection, and peace. Learn
            the Quran online with certified scholars — at your own pace, from
            anywhere in the world.
          </p>

          {/* BUTTONS */}
          <div className='flex items-center gap-4 mt-6'>
            <button className='bg-[#88BB55] hover:bg-[#86be58] transition px-6 py-3 rounded-lg text-white font-semibold text-lg flex items-center gap-2 cursor-pointer'>
              Enroll Now 📖
            </button>

            <button className='border border-[#88BB55] text-[#3c7c2f] px-6 py-3 rounded-lg font-semibold hover:bg-[#daf2c4] transition flex items-center gap-2 cursor-pointer'>
              View Courses 🎓
            </button>
          </div>

          {/* ✔️ STATS SECTION */}
          <div className='flex items-center gap-16 mt-16'>
            <div>
              <h2 className='text-4xl font-bold text-[#88BB55]'>10K+</h2>
              <p className='text-lg text-gray-600'>Global Students</p>
            </div>

            <div>
              <h2 className='text-4xl font-bold text-[#88BB55]'>100%</h2>
              <p className='text-lg text-gray-600'>Satisfaction</p>
            </div>

            <div>
              <h2 className='text-4xl font-bold text-[#88BB55]'>24/7</h2>
              <p className='text-lg text-gray-600'>Classes</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className='mt-10 md:mt-[-100px]'>
          <img
            src={logo}
            alt='Quran Logo'
            className='
              w-[350px] md:w-[450px] g
              rounded-xl shadow-xl 
              border border-[#bcbcbc6c] 
              bg-white/5 
              backdrop-blur-md 
              p-4
              
            '
          />
        </div>
      </section>

      {/* SERVICES CARDS SECTION */}
      <div className='w-full bg-white mt-14'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6'>
          {/* CARD 1 */}
          <div
            className='
      bg-[#F1FCEB] rounded-2xl py-4 flex flex-col items-center gap-3
      transition-all duration-300 cursor-pointer transform
      hover:-translate-y-2 hover:shadow-xl  hover:scale-[1.05]
      border border-transparent 
    '
          >
            <span className='text-4xl transform transition-transform duration-300 hover:scale-125'>
              📕
            </span>
            <h3 className='text-[#49A743] font-bold text-lg text-center'>
              Quran Learning
            </h3>
          </div>

          {/* CARD 2 */}
          <div
            className='
      bg-[#F1FCEB] rounded-2xl py-4 flex flex-col items-center gap-3
      transition-all duration-300 cursor-pointer transform
      hover:-translate-y-2 hover:shadow-xl  hover:scale-[1.05]
      border border-transparent
    '
          >
            <span className='text-4xl transform transition-transform duration-300 hover:scale-125'>
              📿
            </span>
            <h3 className='text-[#49A743] font-bold text-lg text-center'>
              Namaz Sessions
            </h3>
          </div>

          {/* CARD 3 */}
          <div
            className='
      bg-[#F1FCEB] rounded-2xl py-4 flex flex-col items-center gap-3
      transition-all duration-300 cursor-pointer transform
      hover:-translate-y-2 hover:shadow-xl  hover:scale-[1.05]
      border border-transparent 
    '
          >
            <span className='text-4xl transform transition-transform duration-300 hover:scale-125'>
              🙏
            </span>
            <h3 className='text-[#49A743] font-bold text-lg text-center'>
              Masnoon Duas
            </h3>
          </div>

          {/* CARD 4 */}
          <div
            className='
      bg-[#F1FCEB] rounded-2xl py-4 flex flex-col items-center gap-3
      transition-all duration-300 cursor-pointer transform
      hover:-translate-y-2 hover:shadow-xl hover:scale-[1.05]
      border border-transparent 
    '
          >
            <span className='text-4xl transform transition-transform duration-300 hover:scale-125'>
              📘
            </span>
            <h3 className='text-[#49A743] font-bold text-lg text-center'>
              Qaida (Basics)
            </h3>
          </div>

          {/* CARD 5 */}
          <div
            className='
      bg-[#F1FCEB] rounded-2xl py-4 flex flex-col items-center gap-3
      transition-all duration-300 cursor-pointer transform
      hover:-translate-y-2 hover:shadow-xl hover:scale-[1.05]
      border border-transparent 
    '
          >
            <span className='text-4xl transform transition-transform duration-300 hover:scale-125'>
              📖
            </span>
            <h3 className='text-[#49A743] font-bold text-lg text-center'>
              Tajweed Rules
            </h3>
          </div>

          {/* CARD 6 */}
          <div
            className='
      bg-[#F1FCEB] rounded-2xl py-4 flex flex-col items-center gap-3
      transition-all duration-300 cursor-pointer transform
      hover:-translate-y-2 hover:shadow-xl  hover:scale-[1.05]
      border border-transparent 
    '
          >
            <span className='text-4xl transform transition-transform duration-300 hover:scale-125'>
              🕌
            </span>
            <h3 className='text-[#49A743] font-bold text-lg text-center'>
              Hifaz Practice
            </h3>
          </div>
        </div>
      </div>

      {/*Kids parents*/}
      <div className='w-full bg-[#F4FFE9] mt-12 py-10'>
        <div className='max-w-[1200px] mx-auto flex items-center justify-between px-10'>
          {/* LEFT SIDE */}
          <div className='w-[50%]'>
            <h1 className='text-[44px] font-bold leading-[52px] text-[#1E441E] font-serif'>
              Quran Learning for <br />
              Parents & Children 👨‍👩‍👧‍👦
            </h1>

            <p className='mt-4 text-[18px] leading-[30px] text-[#325332] max-w-[480px]'>
              Discover the joy of learning the Quran together as a family. Our
              1-on-1 online sessions are specially designed for both adults and
              children — making it easy, interactive, and spiritually rewarding.
              🕌✨
            </p>

            <div className='mt-6 space-y-2.5 text-[17px] text-[#244b24]'>
              <p className='flex items-center gap-2'>
                <span className='text-[20px]'>✅</span>
                Learn from certified male & female teachers
              </p>

              <p className='flex items-center gap-2'>
                <span className='text-[20px]'>✅</span>
                Flexible timings for busy parents
              </p>

              <p className='flex items-center gap-2'>
                <span className='text-[20px]'>✅</span>
                Special child-friendly teaching methods
              </p>

              <p className='flex items-center gap-2'>
                <span className='text-[20px]'>✅</span>
                Join from anywhere in the world 🌍
              </p>
            </div>

            <button
              className='mt-7 bg-[#7FD26A] 
             hover:bg-[#99CC66]
             transition-all duration-300
             px-8 py-3 rounded-xl shadow-sm 
             text-white text-[16px] font-semibold 
             flex items-center gap-2.5
             hover:scale-y-110'
            >
              <span className='text-[20px] text-white'>📖</span>
              Start Learning Together
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className='w-[50%] flex justify-end'>
            <img
              src={kidparents}
              className='w-[470px] drop-shadow-2xl'
              alt='Parents & Children'
            />
          </div>
        </div>
      </div>

      {/* ======================= WHAT WE OFFER SECTION ======================= */}
      <div className='w-full bg-[#81C348] py-20 flex flex-col items-center text-center px-4'>
        {/* HEADING */}
        <h2 className='text-white font-bold text-4xl flex items-center gap-3 mb-3'>
          <span>🌟</span> What We Offer
        </h2>

        <p className='text-white text-lg mb-16'>
          Discover modern Quranic learning with comfort, confidence, and care.
        </p>

        {/* GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl'>
          {/* CARD 1 */}
          <div className='bg-[#DFF2C8] rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='text-3xl'>📚</span>
              <h3 className='font-bold text-xl text-[#2F5D18]'>
                1-on-1 Classes
              </h3>
            </div>
            <p className='text-[#3E6F22] text-sm'>
              Individual Quran sessions tailored to your pace and level.
            </p>
          </div>

          {/* CARD 2 */}
          <div className='bg-[#DFF2C8] rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='text-3xl'>🌙</span>
              <h3 className='font-bold text-xl text-[#2F5D18]'>24/7 Support</h3>
            </div>
            <p className='text-[#3E6F22] text-sm'>
              Always here for help — anytime, anywhere.
            </p>
          </div>

          {/* CARD 3 */}
          <div className='bg-[#DFF2C8] rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='text-3xl'>🎓</span>
              <h3 className='font-bold text-xl text-[#2F5D18]'>
                Certified Tutors
              </h3>
            </div>
            <p className='text-[#3E6F22] text-sm'>
              Qualified scholars trained in Tajweed and teaching.
            </p>
          </div>

          {/* CARD 4 */}
          <div className='bg-[#DFF2C8] rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='text-3xl'>👩‍🏫</span>
              <h3 className='font-bold text-xl text-[#2F5D18]'>
                Female Teachers
              </h3>
            </div>
            <p className='text-[#3E6F22] text-sm'>
              Comfort and privacy for sisters with expert female staff.
            </p>
          </div>

          {/* CARD 5 */}
          <div className='bg-[#DFF2C8] rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='text-3xl'>⏰</span>
              <h3 className='font-bold text-xl text-[#2F5D18]'>
                Flexible Timings
              </h3>
            </div>
            <p className='text-[#3E6F22] text-sm'>
              You choose the time, we adapt to you.
            </p>
          </div>

          {/* CARD 6 */}
          <div className='bg-[#DFF2C8] rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='text-3xl'>📖</span>
              <h3 className='font-bold text-xl text-[#2F5D18]'>
                Hifz & Tajweed
              </h3>
            </div>
            <p className='text-[#3E6F22] text-sm'>
              Structured Hifz and Tajweed-focused curriculum.
            </p>
          </div>
        </div>
      </div>
      {/* ======================= END OFFER SECTION ======================= */}

      <div class='w-full bg-[#f1faf1] py-20'>
        <div class='max-w-[1300px] mx-auto text-center px-4'>
          <h2 class='text-[40px] font-extrabold text-[#173b22] flex justify-center items-center gap-3'>
            🌍 <span>Trusted Across the World</span>
          </h2>

          <p class='mt-3 text-[#3a4a3a] text-[18px]'>
            We proudly teach Quran students across continents — united in
            <span class='font-semibold'>faith</span> and
            <span class='font-semibold'>Quranic learning</span>.
          </p>

          <div class='mt-14 w-full flex flex-wrap justify-center gap-6 overflow-hidden'>
            <div
              class='w-[100px] h-[100px] bg-white rounded-[18px]
         flex flex-col items-center justify-center
         shadow-[0_2px_6px_rgba(0,0,0,0.08)]
         overflow-hidden
         md:-ml-[50px]'
            >
              <img src='https://flagcdn.com/w40/pk.png' class='w-10 mb-0' />
              <p class='text-sm font-semibold text-[#1D3B29] mt-[2px]'>
                Pakitan
              </p>
            </div>

            <div class='w-[100px] h-[100px] bg-white rounded-[18px] shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center'>
              <img src='https://flagcdn.com/w40/us.png' class='w-10 mb-0' />
              <p class='text-sm font-semibold text-[#1D3B29] mt-[2px]'>USA</p>
            </div>

            <div class='w-[100px] h-[100px] bg-white rounded-[18px] shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center'>
              <img src='https://flagcdn.com/w40/gb.png' class='w-10 mb-0' />
              <p class='text-sm font-semibold text-[#1D3B29] mt-[2px]'>UK</p>
            </div>

            <div class='w-[100px] h-[100px] bg-white rounded-[18px] shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center'>
              <img src='https://flagcdn.com/w40/ae.png' class='w-10 mb-0' />
              <p class='text-sm font-semibold text-[#1D3B29] mt-[2px]'>UAE</p>
            </div>

            <div class='w-[100px] h-[100px] bg-white rounded-[18px] shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center'>
              <img src='https://flagcdn.com/w40/ca.png' class='w-10 mb-0' />
              <p class='text-sm font-semibold text-[#1D3B29] mt-[2px]'>
                Canada
              </p>
            </div>

            <div class='w-[100px] h-[100px] bg-white rounded-[18px] shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center'>
              <img src='https://flagcdn.com/w40/au.png' class='w-10 mb-0' />
              <p class='text-sm font-semibold text-[#1D3B29] mt-[2px]'>
                Australia
              </p>
            </div>

            <div class='w-[100px] h-[100px] bg-white rounded-[18px] shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center'>
              <img src='https://flagcdn.com/w40/qa.png' class='w-10 mb-0' />
              <p class='text-sm font-semibold text-[#1D3B29] mt-[2px]'>Qatar</p>
            </div>

            <div class='w-[100px] h-[100px] bg-white rounded-[18px] shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center'>
              <img src='https://flagcdn.com/w40/sa.png' class='w-10 mb-0' />
              <p class='text-sm font-semibold text-[#1D3B29] mt-[2px]'>
                Saudi Arabia
              </p>
            </div>

            <div
              class='w-[100px] md:w-[-50px] h-[100px] bg-white rounded-[18px] md:mr-[-50px] shadow-[0_2px_6px_rgba(0,0,0,0.08)]
                  flex flex-col items-center justify-center'
            >
              <img src='https://flagcdn.com/w40/za.png' class='w-10 mb-0' />
              <p class='text-sm font-semibold text-[#1D3B29] mt-[2px]'>
                South Africa
              </p>
            </div>
          </div>

          <div class='flex justify-center mt-10'>
            <div class='w-[130px] h-[3px] bg-[#3c8c3c] rounded-full' />
          </div>
          <br />
          <hr style={{ color: '#dae5dc' }} />
          <section class='w-full px-3 md:px-12 lg:px-3 py-20'>
            <div class='w-full pt-10 pb-6 text-center'>
              <div class='flex items-center justify-center gap-3 md:gap-4'>
                <span class='text-[35px] md:text-[50px] leading-none'>🌙</span>
                <h1 class='text-[#1D3B29] font-extrabold text-[32px] md:text-[45px] leading-[1.1]'>
                  Premium Quran Courses
                </h1>
              </div>

              <p class='mt-4 text-[16px] md:text-[20px] text-[#355C38] leading-relaxed max-w-3xl mx-auto px-4'>
                Learn the Quran with certified teachers — from Tajweed to Tafsir
                — in a peaceful
                <br class='hidden md:block' />
                online environment.
              </p>
            </div>

            <br />
            <br />

            <div class='w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-10'>
              <div class='w-full max-w-[370px] bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.10)] overflow-hidden'>
                <div class='h-[115px] bg-gradient-to-r from-[#2F6B3F] to-[#6FB45A] p-5'>
                  <h2 class='text-white text-[26px] font-bold'>
                    Nazra Quran Course
                  </h2>
                  <p class='text-white mt-1 flex items-center gap-2 text-[15px]'>
                    👤 Ustadh Bilal
                  </p>
                </div>

                <div class='px-5 py-5'>
                  <p class='flex items-center gap-2 text-[16px] mb-2'>
                    ⏱ <strong>Time:</strong> Mon–Fri, 6PM
                  </p>
                  <p class='flex items-center gap-2 text-[16px] mb-2'>
                    📅 <strong>Duration:</strong> 3 Months
                  </p>
                  <p class='flex items-center gap-2 text-[16px]'>
                    🎓 <strong>Mode:</strong> Live 1-on-1
                  </p>

                  <div class='flex items-center justify-between mt-5'>
                    <p class='text-[20px] font-bold text-[#1e2a1e]'>
                      Rs. 3000/month
                    </p>
                    <button class='bg-[#2D6A45] hover:bg-[#255738] transition-all px-5 py-2 rounded-xl text-white font-semibold text-[15px] flex items-center gap-2'>
                      Details 📘
                    </button>
                  </div>
                </div>
              </div>

              <div class='w-full max-w-[370px] bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.10)] overflow-hidden'>
                <div class='h-[115px] bg-gradient-to-r from-[#2F6B3F] to-[#6FB45A] p-5'>
                  <h2 class='text-white text-[26px] font-bold'>
                    Hifz-ul-Quran Program
                  </h2>
                  <p class='text-white mt-1 flex items-center gap-2 text-[15px]'>
                    👤 Qari Saeed
                  </p>
                </div>

                <div class='px-5 py-5'>
                  <p class='flex items-center gap-2 text-[16px] mb-2'>
                    ⏱ <strong>Time:</strong> 7AM–8AM
                  </p>
                  <p class='flex items-center gap-2 text-[16px] mb-2'>
                    📅 <strong>Duration:</strong> 12+ Months
                  </p>
                  <p class='flex items-center gap-2 text-[16px]'>
                    🎓 <strong>Mode:</strong> Daily Hifz
                  </p>

                  <div class='flex items-center justify-between mt-5'>
                    <p class='text-[20px] font-bold text-[#1e2a1e]'>
                      Rs. 5000/month
                    </p>
                    <button class='bg-[#2D6A45] hover:bg-[#255738] transition-all px-5 py-2 rounded-xl text-white font-semibold text-[15px] flex items-center gap-2'>
                      Details 📘
                    </button>
                  </div>
                </div>
              </div>

              <div class='w-full max-w-[370px] bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.10)] overflow-hidden'>
                <div class='h-[115px] bg-gradient-to-r from-[#2F6B3F] to-[#6FB45A] p-5'>
                  <h2 class='text-white text-[26px] font-bold'>
                    Tajweed & Qaida
                  </h2>
                  <p class='text-white mt-1 flex items-center gap-2 text-[15px]'>
                    👤 Sister Amina
                  </p>
                </div>

                <div class='px-5 py-5'>
                  <p class='flex items-center gap-2 text-[16px] mb-2'>
                    ⏱ <strong>Time:</strong> Sat–Sun, 10AM
                  </p>
                  <p class='flex items-center gap-2 text-[16px] mb-2'>
                    📅 <strong>Duration:</strong> 2 Months
                  </p>
                  <p class='flex items-center gap-2 text-[16px]'>
                    🎓 <strong>Mode:</strong> Weekend Class
                  </p>

                  <div class='flex items-center justify-between mt-5'>
                    <p class='text-[20px] font-bold text-[#1e2a1e]'>
                      Rs. 2500/month
                    </p>
                    <button class='bg-[#2D6A45] hover:bg-[#255738] transition-all px-5 py-2 rounded-xl text-white font-semibold text-[15px] flex items-center gap-2'>
                      Details 📘
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class='w-full py-16 px-4 md:px-12'>
            <div class='text-center mb-14'>
              <h2 class='text-4xl md:text-5xl font-extrabold text-[#1C3F2C] flex justify-center items-center gap-3'>
                🎧 Listen to Quranic Ayahs 🌿
              </h2>

              <p class='text-[20px] mt-5 text-[#234428] leading-relaxed'>
                Immerse yourself in the{' '}
                <span class='font-semibold'>divine recitations</span> ✨ by{' '}
                <span class='font-semibold'>Qari Mishary Al-Afasy</span> —
                explore the timeless beauty of verses from the Holy Quran 📖✨
              </p>
            </div>

            <br />
            <div class='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div class='bg-white rounded-3xl shadow-md p-8'>
                <h3 class='text-3xl text-[#1C3F2C] font-semibold text-center mb-3 flex items-center justify-center gap-2'>
                  الرَّحْمَـٰنُ * عَلَّمَ الْقُرْآنَ 🌸
                </h3>

                <p class='text-center italic text-[#56745E] mb-6'>
                  The Most Merciful — Taught the Qur’an (Surah Ar-Rahman: 1-2)
                  🌿
                </p>

                <audio controls class='w-full'>
                  <source src='' type='audio/mp3' />
                </audio>
              </div>

              <div class='bg-white rounded-3xl shadow-md p-8'>
                <h3 class='text-3xl text-[#1C3F2C] font-semibold text-center mb-3 flex items-center justify-center gap-2'>
                  اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ 🌸
                </h3>

                <p class='text-center italic text-[#56745E] mb-6'>
                  Recite in the name of your Lord who created (Surah Al-Alaq: 1)
                  🌿
                </p>

                <audio controls class='w-full'>
                  <source src='' type='audio/mp3' />
                </audio>
              </div>

              <div class='bg-white rounded-3xl shadow-md p-8'>
                <h3 class='text-3xl text-[#1C3F2C] font-semibold text-center mb-3 flex items-center justify-center gap-2'>
                  إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ 🌸
                </h3>

                <p class='text-center italic text-[#56745E] mb-6'>
                  Indeed, We have granted you al-Kawthar (Surah Al-Kawthar: 1)
                  🌿
                </p>

                <audio controls class='w-full'>
                  <source src='' type='audio/mp3' />
                </audio>
              </div>

              <div class='bg-white rounded-3xl shadow-md p-8'>
                <h3 class='text-3xl text-[#1C3F2C] font-semibold text-center mb-3 flex items-center justify-center gap-2'>
                  اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ 🌸
                </h3>

                <p class='text-center italic text-[#56745E] mb-6'>
                  Allah — there is no deity except Him, the Ever-Living,
                  Sustainer (Ayat-ul-Kursi: 255) 🌿
                </p>

                <audio controls class='w-full'>
                  <source src='' type='audio/mp3' />
                </audio>
              </div>
            </div>
          </section>
        </div>
        <div
          class='w-full bg-[#C0D429] rounded-t-[120px] md:rounded-t-[140px] lg:rounded-t-[50px]
px-6 md:px-10 lg:px-7 
py-2 md:py-20 lg:py-13 
flex flex-col lg:flex-row items-center justify-between 
relative overflow-hidden'
        >
          <div class='max-w-2xl z-10'>
            <h1 class='text-white text-4xl  md:text-5xl lg:text-[50px] font-bold leading-tight'>
              <span class='inline-block mr-2'>🚀</span>
              Ready to Begin
              <br /> Your Quran Journey?
            </h1>
            <p class='text-white/90 text-lg md:text-xl mt-2 leading-relaxed'>
              Join thousands of students across the globe — learning with
              <br />
              excellence, sincerity, and expert guidance. 🌙📘
            </p>

            <div class='flex items-center gap-5 mt-10'>
              <a
                href='#'
                class='bg-white text-[#1A2E05] font-semibold px-3 py-3 text-lg rounded-full shadow-lg flex items-center gap-2'
              >
                <span>🔰</span>
                Enroll Now
              </a>
              <a
                href='#'
                class='bg-transparent border border-white text-white font-semibold px-3 py-3 text-lg rounded-full flex items-center gap-2 backdrop-blur-sm'
              >
                <span>🎓</span>
                View Courses
              </a>
            </div>
          </div>

          <div class='mt-4 lg:mt-0 lg:absolute right-20 bottom-0'>
            <img
              src={footer}
              alt='Child studying'
              class='w-[460px] md:w-[520px] lg:w-[380px] drop-shadow-2xl opacity-95 md:mb-13 lg-ml-[30px]'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

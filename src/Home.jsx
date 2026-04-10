import React, { useEffect, useRef } from 'react';
import { mohsen } from './assets/img';
import Typed from 'typed.js';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Mohsen Abdel Moneim',
        'Frontend Developer',
        'UI/UX Designer',
        'MIS Specialist'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-gray-950 overflow-hidden min-h-screen">
      
      {/* Background Abstract Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E63946] opacity-[0.04] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E63946] opacity-[0.04] blur-[120px] rounded-full"></div>
      </div>

      {/* HERO SECTION */}
      <div
        className="py-20 md:py-28 max-w-6xl mx-auto px-6 flex items-center justify-center"
        id="home"
        data-aos="fade-up"
      >
        <div className="text-center w-full mt-10 md:mt-16">

        {/* Profile Image Section */}
<div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto mb-10 group">

  {/* Status Badge (cleaned) */}
  <div className="absolute -top-2 -right-2 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-70"></span>
      <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
    </span>
    <span className="text-[10px] text-green-400 font-semibold tracking-wide">
      Available
    </span>
  </div>

  {/* Soft Glow (simplified) */}
  <div className="absolute inset-0 bg-[#E63946] opacity-15 blur-3xl rounded-full" />

  {/* Single Ring only (clean look) */}
  <div className="absolute inset-[-6px] border border-white/10 rounded-full animate-[spin_18s_linear_infinite]" />

  {/* Image */}
  <img
    src={mohsen}
    alt="Mohsen Abdel Moneim"
    className="relative w-full h-full object-cover rounded-full border border-white/10 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
  />
</div>

{/* Intro */}
<div className="mb-6 text-center">
  <span className="text-gray-500 text-xs md:text-sm tracking-[0.35em] uppercase block mb-3">
    Frontend Developer
  </span>

  <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
    I’m <span ref={el} className="text-[#E63946]" />
  </h2>
</div>

{/* Subtitle (clean & stronger message) */}
<p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto text-center leading-relaxed">
  I build clean, fast and user-focused web interfaces that solve real problems and deliver real business value.
</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto px-12 py-4.5 bg-[#E63946] text-white font-bold rounded-2xl hover:bg-[#C1121F] hover:shadow-[0_10px_30px_rgba(230,57,70,0.4)] transition-all duration-300 transform active:scale-95 no-underline shadow-lg text-center"
            >
              Contact Me
            </a>

            <a
              href="./Black and White Clean Professional A4 Resume for Marketing Manager.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-4.5 border border-white/20 text-white font-bold rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm no-underline shadow-lg text-center"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
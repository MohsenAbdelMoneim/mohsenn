import React from 'react';
import { mohsen } from './assets/img';

const Home = () => {
  return (
    <div className="relative w-full">

      {/* Floating Badge */}
      <div
        id="eng-tag"
        className="fixed bottom-10 left-4 md:left-10 z-50 hidden md:flex flex-col items-center cursor-pointer bg-[#1A1A1A]/90 backdrop-blur-sm p-3 rounded-2xl shadow-2xl transition-transform hover:scale-105"
      >
        <div className="w-full h-1 mb-2 rounded animate-pulse bg-gradient-to-r from-[#E63946] via-gray-500 to-black"></div>

        <span className="text-white text-sm md:text-base font-semibold px-2">
          I’m Frontend Mohsen
        </span>

        <div className="w-full h-1 mt-2 rounded animate-pulse bg-gradient-to-r from-black via-gray-500 to-[#E63946]"></div>
      </div>

      {/* HERO */}
      <div
        className="py-20 max-w-6xl mx-auto px-6 min-h-screen flex items-center justify-center"
        id="home"
        data-aos="fade-up"
      >
        <div className="text-center w-full">

          {/* Image */}
          <div className="relative w-48 h-48 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-[#E63946] blur-3xl opacity-30 rounded-full animate-pulse group-hover:opacity-60 transition-opacity duration-500"></div>

            <img
              src={mohsen}
              alt="Mohsen"
              className="relative w-full h-full object-cover rounded-full border-4 border-[#E63946] shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Name */}
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white min-h-[3rem] md:min-h-[4rem]">
            <span id="name-typing"></span>
          </h2>

          {/* Description */}
          <p className="text-[#E63946] font-medium mb-8 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
            I build clean, responsive, and user-friendly web interfaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="#contact"
              className="px-8 py-3 bg-[#E63946] text-white font-semibold rounded-full hover:bg-[#C1121F] hover:scale-105 transition-all shadow-lg hover:shadow-red-500/30"
            >
              Contact Me
            </a>

            <a
              href="./cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#E63946] text-[#E63946] font-semibold rounded-full hover:bg-[#E63946] hover:text-white hover:scale-105 transition-all"
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
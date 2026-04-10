import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-[#0B0F19] overflow-hidden"
      data-aos="fade-up"
    >

      {/* Soft Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E63946] opacity-10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E63946] opacity-10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] text-[#E63946] uppercase font-semibold">
            About
          </span>

          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-white">
            About Me
          </h2>

          <div className="w-12 h-[2px] bg-[#E63946] mx-auto mt-6" />
        </div>

        {/* Bio */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            I’m a{" "}
            <span className="text-white font-medium">
              Frontend Developer & UI/UX Designer
            </span>{" "}
            with a background in{" "}
            <span className="text-white font-medium">
              Management Information Systems
            </span>.
          </p>

          <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed">
            I focus on building clean, scalable and user-centered web experiences
            that connect design with real business value.
          </p>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center border-t border-white/10 pt-12">

          <div>
            <p className="text-4xl md:text-5xl font-bold text-white hover:text-[#E63946] transition">
              1+
            </p>
            <p className="mt-3 text-xs tracking-[0.3em] text-gray-500 uppercase">
              Experience
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-bold text-white hover:text-[#E63946] transition">
              15+
            </p>
            <p className="mt-3 text-xs tracking-[0.3em] text-gray-500 uppercase">
              Projects
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-bold text-white hover:text-[#E63946] transition">
              MIS + Dev
            </p>
            <p className="mt-3 text-xs tracking-[0.3em] text-gray-500 uppercase">
              Hybrid Focus
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
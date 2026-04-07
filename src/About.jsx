import React from 'react'
import './index.css'

const About = () => {
  return (
    <div className="py-20 px-4 md:px-6">

      <section
        id="about"
        className="relative py-16 md:py-24 max-w-5xl mx-auto px-6 md:px-12 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl overflow-hidden"
        data-aos="fade-up"
      >

        {/* Background Glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#E63946] opacity-[0.06] blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#E63946] opacity-[0.06] blur-[120px] rounded-full"></div>

        {/* Header */}
        <div className="relative text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black text-[#E63946]">
            About Me
          </h3>

          <div className="w-16 h-1 bg-[#E63946]/50 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto z-10">

          <p
            id="about-text"
            className="text-center leading-[1.8] text-gray-200 text-lg md:text-xl lg:text-2xl font-light"
            data-en="I’m a Frontend Developer with strong attention to detail and a passion for clean UI/UX. I enjoy turning ideas into real, interactive products and continuously improving my skills through hands-on projects."
            data-ar="أنا مطور واجهات أمامية أهتم بالتفاصيل وتجربة المستخدم، وأحب تحويل الأفكار إلى منتجات حقيقية تفاعلية مع التطوير المستمر لمهاراتي من خلال المشاريع العملية."
          >
            I’m a <span className="text-[#E63946] font-bold">Frontend Developer</span> with strong attention to detail and a passion for clean <span className="text-white border-b border-[#E63946]/30">UI/UX</span>. I enjoy turning ideas into real, interactive products and continuously improving my skills through hands-on projects.
          </p>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16 items-center border-t border-white/5 pt-10">

            <div className="group text-center">
              <p className="text-[#E63946] font-black text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                1+
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mt-2">
                Years Exp.
              </p>
            </div>

            <div className="hidden sm:block w-[1px] h-12 bg-white/10"></div>

            <div className="group text-center">
              <p className="text-[#E63946] font-black text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                10+
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mt-2">
                Projects
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default About
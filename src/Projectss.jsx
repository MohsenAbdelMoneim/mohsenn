import { gym, learing, phone, hode, cars } from "./assets/img";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

const Projectss = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#0B0F19] overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#E63946] opacity-10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] text-[#E63946] uppercase font-semibold">
            Projects
          </span>

          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-white">
            My Work
          </h2>

          <div className="w-12 h-[2px] bg-[#E63946] mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project */}
          {[
            {
              title: "Smart Gym System",
              desc: "Full management system with dashboards for owners and members.",
              img: gym,
              link: "https://form-u8pa.vercel.app",
              color: "#E63946",
              tag: "Graduation Project",
            },
            {
              title: "E-Learning Platform",
              desc: "Interactive learning platform for structured educational content.",
              img: learing,
              link: "https://learing-livid.vercel.app",
              color: "#0ea5e9",
              tag: "Education",
            },
            {
              title: "Portfolio Website",
              desc: "Personal portfolio showcasing UI/UX and frontend skills.",
              img: phone,
              link: "https://tarekameramer.github.io/mohsen1Abdul-Moneim/",
              color: "#64748b",
              tag: "Branding",
            },
            {
              title: "Cars Project",
              desc: "Modern UI car showcase web application.",
              img: cars,
              link: "https://123-brown-rho.vercel.app",
              color: "#f59e0b",
              tag: "UI Project",
            },
            {
              title: "Hode Project",
              desc: "Creative web project with experimental UI.",
              img: hode,
              link: "nova/Home.html",
              color: "#8b5cf6",
              tag: "Experimental",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />

                <span
                  className="absolute top-3 right-3 text-[10px] px-3 py-1 rounded-full text-white font-semibold"
                  style={{ backgroundColor: project.color }}
                >
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-white font-bold text-xl">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-5 text-sm font-semibold text-white hover:text-[#E63946] transition"
                >
                  View Project →
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Swiper Section */}
      <div className="relative mt-24 pb-10">
        <h4 className="text-center text-gray-500 uppercase tracking-[0.3em] text-xs mb-10">
          Quick Preview
        </h4>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-72 h-96 md:w-80 md:h-[450px]"
        >

          {[gym, learing, cars, hode].map((img, i) => (
            <SwiperSlide
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col"
            >
              <img
                src={img}
                alt="project"
                className="rounded-2xl h-2/3 object-cover mb-4"
              />

              <h5 className="text-white font-bold text-center">
                Project {i + 1}
              </h5>

              <a
                href="#"
                className="mt-auto bg-[#E63946] text-white py-2 px-4 rounded-xl text-center text-sm"
              >
                View
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default Projectss;
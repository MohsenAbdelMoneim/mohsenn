import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const skillList = [
    { name: 'HTML5', level: 95, icon: '🌐' },
    { name: 'CSS3 / Tailwind v4', level: 90, icon: '🎨' },
    { name: 'JavaScript (ES6+)', level: 85, icon: '⚡' },
    { name: 'React.js', level: 80, icon: '⚛️' },
    { name: 'UI/UX Design', level: 75, icon: '📐' },
    { name: 'Git & GitHub', level: 85, icon: '📂' },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(skillList.map(() => 0));

  // detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // animate numbers
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((p, i) => {
          const target = skillList[i].level;
          if (p < target) return p + 1;
          return target;
        })
      );
    }, 15);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E63946] opacity-[0.04] blur-[140px] -z-10"></div>

        {/* title */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-[#E63946] mb-4">
            My Skills
          </h3>
          <p className="text-gray-400">
            Skills that grow with every project
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillList.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/[0.02] border border-white/5 p-8 rounded-[2rem]
              hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2"
            >

              {/* icon + percent */}
              <div className="flex justify-between items-center mb-5">

                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>

                <span className="text-[#E63946] font-bold text-sm bg-[#E63946]/10 px-3 py-1 rounded-full">
                  {visible ? progress[index] : 0}%
                </span>

              </div>

              {/* name */}
              <h4 className="text-xl font-bold mb-5 text-gray-100">
                {skill.name}
              </h4>

              {/* progress bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

                <div
                  className="h-full bg-[#E63946] rounded-full transition-all duration-300"
                  style={{
                    width: visible ? `${progress[index]}%` : '0%',
                  }}
                />

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
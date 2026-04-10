import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  // تحديث القائمة لتشمل المهارات التقنية والتحليلية من الـ CV الخاص بك
  const skillList = [
    { name: 'HTML5 / CSS3', level: 95, icon: '🌐' },
    { name: 'JavaScript (ES6+)', level: 85, icon: '⚡' },
    { name: 'Tailwind CSS / Bootstrap', level: 90, icon: '🎨' },
    { name: 'React.js', level: 80, icon: '⚛️' },
    { name: 'UI/UX (Figma / Adobe XD)', level: 85, icon: '📐' },
    { name: 'Systems Analysis (MIS)', level: 50, icon: '📊' }, // إضافة تخصص المعهد
    { name: 'Git & GitHub', level: 85, icon: '📂' },
    { name: 'Database Design', level: 60, icon: '💾' }, // مهارة إضافية من مشروع الجيم
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(skillList.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 } // تقليل الـ threshold ليبدأ التحريك أسرع قليلاً
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    }, 10); // تسريع الحركة قليلاً لتبدو أكثر سلاسة

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* glow effect */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E63946] opacity-[0.05] blur-[120px] -z-10"></div>

        {/* title */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-[#E63946] mb-4 uppercase tracking-tight">
            Technical Expertise
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining Frontend Development with Systems Analysis to build professional and scalable digital solutions.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/[0.03] border border-white/10 p-6 rounded-3xl
              hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2 hover:border-[#E63946]/30 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-5">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-500">
                  {skill.icon}
                </span>
                <span className="text-[#E63946] font-extrabold text-xs bg-[#E63946]/10 px-3 py-1 rounded-full border border-[#E63946]/20">
                  {visible ? progress[index] : 0}%
                </span>
              </div>

              <h4 className="text-lg font-bold mb-4 text-gray-100 group-hover:text-[#E63946] transition-colors">
                {skill.name}
              </h4>

              {/* progress bar */}
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#E63946] to-[#ff4d5a] rounded-full transition-all duration-300"
                  style={{
                    width: visible ? `${progress[index]}%` : '50%',
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
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك لاحقاً ربط هذا الجزء بـ EmailJS لإرسال رسائل حقيقية
    alert("Message sent successfully! Thank you Mohamed.");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-950 text-white overflow-hidden relative"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Background Glow - تأثير إضاءة خلفي خافت */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#E63946] opacity-[0.06] blur-[120px] -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#E63946] opacity-[0.06] blur-[120px] -z-10"></div>

        {/* Header - العنوان */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h3 className="text-4xl md:text-5xl font-black text-[#E63946] mb-4 tracking-tight">
            Contact Me
          </h3>
          <p className="text-gray-400 text-lg">
            Let’s build something amazing together.
          </p>
          <div className="w-12 h-1 bg-[#E63946] mx-auto mt-4 rounded-full opacity-40"></div>
        </div>

        {/* Form - النموذج */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-white/[0.02] p-7 md:p-12 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl border border-white/5"
          data-aos="zoom-in"
        >

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="p-4 rounded-2xl bg-gray-900/40 text-white border border-white/5 outline-none focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946] transition-all duration-300 placeholder:text-gray-600 shadow-inner"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="p-4 rounded-2xl bg-gray-900/40 text-white border border-white/5 outline-none focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946] transition-all duration-300 placeholder:text-gray-600 shadow-inner"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message..."
            required
            rows="5"
            className="p-4 rounded-2xl bg-gray-900/40 text-white border border-white/5 outline-none focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946] transition-all duration-300 placeholder:text-gray-600 resize-none shadow-inner"
          />

          <button
            type="submit"
            className="bg-[#E63946] py-4 rounded-2xl font-bold text-lg hover:bg-[#C1121F] active:scale-95 transition-all duration-300 shadow-xl shadow-[#E63946]/20 mt-2"
          >
            Send Message
          </button>

        </form>

        {/* Contact Info - معلومات التواصل */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center border-t border-white/5 pt-16">

          <a href="https://www.google.com/maps?q=Cairo,Egypt" target="_blank" rel="noreferrer" className="group">
            <div className="mb-3 text-2xl group-hover:scale-125 transition-transform duration-300">📍</div>
            <p className="text-[#E63946] font-bold mb-1">Location</p>
            <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">Cairo, Egypt</p>
          </a>

          <a href="tel:01096295395" className="group">
            <div className="mb-3 text-2xl group-hover:scale-125 transition-transform duration-300">📞</div>
            <p className="text-[#E63946] font-bold mb-1">Call Me</p>
            <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">01096295395</p>
          </a>

          <a href="mailto:mt9276404@gmail.com" className="group">
            <div className="mb-3 text-2xl group-hover:scale-125 transition-transform duration-300">📧</div>
            <p className="text-[#E63946] font-bold mb-1">Email</p>
            <p className="text-gray-400 text-sm underline decoration-[#E63946]/20 group-hover:text-gray-200 transition-colors">
              mt9276404@gmail.com
            </p>
          </a>

        </div>

        {/* Footer - الحقوق */}
        <div className="mt-24 text-center border-t border-white/5 pt-10 pb-4">
          <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">
            © 2026 <span className="text-gray-300">Mohsen Abdel Moneim</span> — Built with passion
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
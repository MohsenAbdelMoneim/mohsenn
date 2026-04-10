import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs
      .sendForm(
        "service_x4zardn",
        "template_k9j42ng",
        form.current,
        "pRe1kqOfJrF5NDap0"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F19] text-white">

      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 bg-white/5 p-8 rounded-2xl border border-white/10"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#E63946] rounded-xl font-bold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {/* Success */}
        {success && (
          <div className="mt-5 text-green-400 text-center">
            ✔ Message sent successfully!
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-5 text-red-400 text-center">
            ❌ Something went wrong, try again.
          </div>
        )}

      </div>
    </section>
  );
};

export default Contact;
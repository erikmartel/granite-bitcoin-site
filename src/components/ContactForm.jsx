// src/components/ContactForm.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const serviceID = "service_agto79j";
    const adminTemplateID = "template_gzl5jsn";
    const autoReplyTemplateID = "template_3737hzd";
    const publicKey = "RkkkttXthstVAdc1s";

    const form = formRef.current;

    emailjs
      .sendForm(serviceID, adminTemplateID, form, publicKey)
      .then(() => emailjs.sendForm(serviceID, autoReplyTemplateID, form, publicKey))
      .then(() => {
        setSuccess(true);
        setSending(false);
        form.reset();
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setSending(false);
        alert("There was an error sending your message. Please try again later.");
      });
  };

  return (
    <div className="relative bg-black/70 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-10 md:p-14 hover:bg-black/80 transition-all duration-300">
      <h3 className="text-4xl font-serif mb-4 text-white">Contact Us</h3>
      <p className="text-gray-100 mb-8 max-w-xl mx-auto">
        Have questions? Reach out and we’ll be in touch shortly.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 text-left">
        <input type="hidden" name="formType" value="ContactUs" />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <textarea
          name="additional_comments"
          placeholder="Message"
          rows="5"
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <div className="pt-2">
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-60 shadow transition-transform duration-200 hover:scale-[1.02]"
          >
            {sending ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Success Toast */}
      <div
        id="contactSuccess"
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg w-[90%] max-w-xl relative transition-all duration-700 ${
          success ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!success}
      >
        <div className="text-center w-full">✅ Thanks! Your message has been sent.</div>
        <button
          onClick={() => setSuccess(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 font-bold"
          aria-label="Dismiss success message"
        >
          ✖
        </button>
      </div>
    </div>
  );
}

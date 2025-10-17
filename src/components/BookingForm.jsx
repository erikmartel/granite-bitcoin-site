// src/components/BookingForm.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookingForm() {
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
    <section
      id="booking"
      className="relative w-full flex items-center justify-center px-6 py-24 bg-cover bg-center bg-no-repeat"
      
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0" />

      <div className="relative max-w-3xl w-full mx-auto text-center -mt-20">
        {/* Frosted Glass Card */}
        <div className="bg-black/70 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-10 md:p-14 hover:bg-black/80 transition-all duration-300">
          <h3 className="text-4xl font-serif mb-4 text-white">Let's Talk</h3>
          <p className="text-gray-100 mb-8 max-w-xl mx-auto">
            Reach out below to schedule your free 30-minute consultation.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 text-left">
            <input type="hidden" name="formType" value="Booking" />

            <input
              type="text"
              name="name"
              placeholder="Name"
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

            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <select
              name="knowledge"
              required
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Current Bitcoin Knowledge</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <textarea
              name="goals"
              placeholder="Primary Goal / What do you want to achieve with Bitcoin?"
              rows="4"
              required
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>

            <label className="flex items-center space-x-2 text-white/90">
              <input
                type="checkbox"
                name="selfCustodyInterest"
                value="Yes"
                className="accent-amber-500"
              />
              <span>I am interested in hands-on self-custody training</span>
            </label>

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
        </div>

        {/* Success Toast */}
        <div
          id="bookingSuccess"
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg w-[90%] max-w-xl relative transition-all duration-700 ${
            success
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
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
    </section>
  );
}

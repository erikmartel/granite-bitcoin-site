import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PackageSection() {
  const items = [
    { title: "Bitcoin Fundamentals", desc: "Learn how Bitcoin works, from basic concepts to wallets and the underlying protocol." },
    { title: "Acquisition Best Practices", desc: "Understand your options and trade-offs when it comes to acquiring bitcoin." },
    { title: "Fraud Prevention Essentials", desc: "Identify scams and phishing attemps—with a reference guide you can revisit anytime." },
    { title: "Secure Wallet Setup", desc: "Step-by-step guidance to properly configure your hardware wallet for secure self-custody." },
    { title: "Backup & Recovery Guidance", desc: "Best practices for seed phrase storage and redundancy." },
    { title: "Operations & Management", desc: "Essential procedures for sending, receiving, and managing bitcoin securely." },
    { title: "On-demand Support", desc: "Continued guidance as your needs and knowledge evolves." },
  ];

  return (
    <section
      id="package"
      // ↓ Reduce vertical padding on mobile, keep same on desktop
      className="relative py-16 sm:py-20 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0" />

      {/* ↓ Adjust top margin responsively (slightly higher on mobile) */}
      <div className="relative max-w-6xl mx-auto px-5 lg:px-8 -mt-2 sm:-mt-4 md:-mt-5">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          {/* LEFT SIDE — Text Content */}
          <div className="space-y-6 text-left text-black">
            <h1 className="text-4xl md:text-4xl font-serif">
              Take Full Control of Your Digital Capital
            </h1>

            <p className="text-gray-900 text-lg leading-relaxed">
              Your bitcoin isn't truly yours if it's held on an exchange. Real ownership means holding your own keys.
            </p>
            <p className="text-gray-900 text-lg leading-relaxed">
              We guide you step by step to build a self-custody framework that removes third-party dependence,
              protects your wealth, and gives you peace of mind.
            </p>

            <div className="pt-4">
              <Link
                to="/booking"
                className="inline-block bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-transform duration-200 hover:scale-[1.02]"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE — Frosted Glass Card */}
          <motion.div
            className="bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-black/80 transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif mb-8 text-white">Get Access to:</h3>
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

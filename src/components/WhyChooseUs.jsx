import React from "react";
import { motion } from "framer-motion";
import { Bitcoin, HandHelping, EyeOff, Unlink } from "lucide-react";

export default function WhyChooseUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const principles = [
    
    {
      icon: <HandHelping className="w-6 h-6" />,
      title: "Hands-On Guidance",
      desc: "Multi-session, step-by-step exercises to ensure you understand every aspect of your setup with confidence.",
    },
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: "Privacy-First",
      desc: "Your journey remains private — we encourage anonymity, confidentiality, and do not ask for KYC information.",
    },
    {
      icon: <Unlink className="w-6 h-6" />,
      title: "Independent & Open",
      desc: "Our guidance is unbiased and based on open-source tools and software — verifiable and transparent, never influenced.",
    },
    {
        icon: <Bitcoin className="w-6 h-6" />,
        title: "Bitcoin-Only",
        desc: "Focused solely on Bitcoin principles and ownership — no distractions, no noise.",
      },
  ];

  return (
    <motion.section
      className="py-24 bg-gradient-to-bl from-green-800 to-emerald-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Philosophy */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          className="max-w-xl mx-auto text-center lg:text-left"
        >
          <h2 className="text-4xl font-serif mb-4">Our Approach</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Grounded in the same principles that define Bitcoin — transparency, resilience, and independence. 
            We teach with simplicity and integrity so you can protect your wealth
            with clarity and control.
          </p>

          <a
            href="/company"
            className="mt-10 inline-block bg-white hover:bg-gray-300 text-black font-semibold px-6 py-3 rounded-lg shadow transition-transform duration-200 hover:scale-[1.02]"
          >
            Learn more about us
          </a>
        </motion.div>

        {/* Right: Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

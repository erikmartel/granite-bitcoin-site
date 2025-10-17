import React from "react";
import { motion } from "framer-motion";
import { Component, HouseHeart, Server, Lock } from "lucide-react";

export default function AdditionalServices() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const services = [
    {
      icon: <Component className="w-6 h-6" />,
      title: "Multi-Signature Setups",
      description:
        "Build a distributed security framework with multi-sig wallet configurations.",
    },
    {
      icon: <HouseHeart className="w-6 h-6" />,
      title: "Inheritance Planning",
      description:
        "Design a Bitcoin inheritance strategy to ensure safe access for your heirs.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Node Deployment",
      description:
        "Run your own Bitcoin node for direct verification, privacy, and total control over your transactions.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Personal Cybersecurity",
      description:
        "Enhance your digital hygiene and security posture with tailored, privacy-first best practices.",
    },
  ];

  return (
    <motion.section
      className="py-24 bg-gradient-to-tr from-black to-black/80 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Cards + Footer */}
        <div className="flex flex-col order-2 lg:order-1">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-gray-400 text-sm italic text-center lg:text-left">
            These services can be added to any package or arranged as standalone consultations.
          </div>
        </div>

        {/* Right Column: Text Content */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl font-serif mb-4">Beyond the Foundation</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Once your core setup is established, more advanced consultations
              help you strengthen and expand your sovereignty — from personal privacy tools to planning for future unknowns.
            </p>
            <a
              href="/contact"
              className="self-center lg:self-start inline-block bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-transform duration-200 hover:scale-[1.02]"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

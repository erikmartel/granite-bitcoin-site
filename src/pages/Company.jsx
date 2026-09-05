// src/pages/Company.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  BrickWallShield,
  LaptopMinimalCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Company() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const values = [
    {
      icon: <LaptopMinimalCheck className="w-8 h-8 text-white mx-auto mb-4" />,
      title: "Simplicity",
      desc: "In cybersecurity, complexity creates vulnerability. We focus on simple, proven practices that anyone can handle.",
    },
    {
      icon: <Lock className="w-8 h-8 text-white mx-auto mb-4" />,
      title: "Privacy & Autonomy",
      desc: "You maintain full confidentiality and control. We never observe, touch, or inquire about your holdings. Our role is to guide, not to manage.",
    },
    {
      icon: <Eye className="w-8 h-8 text-white mx-auto mb-4" />,
      title: "Transparency",
      desc: "Our services are grounded in open-source, verifiable solutions — no hype, no trust required. As Bitcoin teaches: Don't trust, verify.",
    },
    {
      icon: <BrickWallShield className="w-8 h-8 text-white mx-auto mb-4" />,
      title: "Durability",
      desc: "Like Granite, our philosophy prioritizes strength and resilience. Simple, time-tested methods that protect your wealth for decades.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Granite Bitcoin</title>
        <meta
          name="description"
          content="Our Mission, Pillars, and Team"
        />
        <link rel="canonical" href="https://granitebitcoin.com/about" />
      </Helmet>
    
    <div className=" text-white overflow-hidden">

{/* MISSION */}
<motion.section
  className="relative flex justify-center items-center text-center py-24 bg-cover bg-center bg-no-repeat relative min-h-screen -mt-20"
  style={{
    backgroundImage: "url('/hero-bg.png')", // match hero style
  }}
  initial="hidden"
  whileInView="visible"
  variants={fadeIn}
  viewport={{ once: true }}
>
  {/* Dark overlay for contrast */}
  <div className="absolute inset-0 " />

  {/* Frosted glass mission card */}
  <div className="relative max-w-4xl mx-auto px-6">
    <div className="bg-black/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-10 md:p-14 hover:bg-black/80 transition-all duration-300">
      <p className="text-sm font-serif tracking-[0.25em] uppercase text-gray-300 mb-4">Our Mission</p>
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Own Bitcoin the way you were meant to</h1>
      <p className="text-lg md:text-xl text-gray-100 mb-4">
        At Granite Bitcoin, our mission is to empower you to own Bitcoin the way you were meant to — without risky reliance on third-parties.
      </p>
      <p className="text-lg md:text-xl text-gray-100">
        Through high-signal education and proven practices, we make self-custody simple and secure so you can preserve your wealth with true independence.
      </p>
    </div>
  </div>
</motion.section>




      {/* PILLARS */}
      <motion.section
        className="py-20 bg-gradient-to-bl from-green-800 to-emerald-900"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12 text-white">Our Pillars</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((val) => (
              <motion.div
                key={val.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                whileHover={{ scale: 1.03 }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className="text-white w-6 h-6">{val.icon}</div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-white mb-2">{val.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-200 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



{/* CALL TO ACTION */}
<motion.section
        className="py-10 bg-gray-50 text-gray-900 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4">Ready to strengthen your foundation?</h2>
          <p className="text-gray-700 mb-8">
          Take true ownership of your bitcoin with guidance grounded in clarity, security, and independence.
          </p>
          <Link
            to="/booking"
            className="bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-transform duration-200 hover:scale-[1.02]"
          >
            Book Free Consultation
          </Link>
        </div>
      </motion.section>


    </div>
    </>
  );
}

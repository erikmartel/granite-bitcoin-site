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
        <link rel="canonical" href="https://granitebitcoin.com" />
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
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Our Mission</h1>
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

      {/* FOUNDER */}
      {/* FOUNDER */}
<motion.section
  className="py-24 bg-gradient-to-tr from-black to-black/80 flex flex-col items-center"
  initial="hidden"
  whileInView="visible"
  variants={fadeIn}
  viewport={{ once: true }}
>
  {/* Title */}
  <h2 className="text-4xl font-serif text-white mb-10 text-center">
    Meet the Founder
  </h2>

  {/* Wrapper for side padding on mobile */}
  <div className="w-full px-6 sm:px-0">
    {/* Frosted Glass Card */}
    <div className="max-w-3xl w-full mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 text-center hover:bg-white/20 transition-all duration-300">
      <img
        src="/profile-pic.jpg"
        alt="Founder"
        className="w-40 h-40 mx-auto rounded-full mb-6 shadow-lg object-cover border-2 border-white/20"
      />
      <h3 className="text-4xl font-serif mb-2 text-white">Erik Martel</h3>
      <p className="text-xl font-semibold text-gray-200 mb-6">
        Founder & Principal Advisor
      </p>
      <p className="text-gray-100 text-md leading-relaxed">
        After a decade in Bitcoin, Erik founded GBA with a passion for educating
        and empowering individuals to truly own their digital capital. With a
        background in software, cybersecurity, economics, and education, he
        provides practical, straightforward guidance to help clients gain
        confidence and financial sovereignty in our dynamic, digital world.
      </p>
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

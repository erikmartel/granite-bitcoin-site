// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookingForm from "../components/BookingForm";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  // subtle parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY * 0.5);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gray-50 text-gray-900 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] sm:h-[90vh] md:h-[95vh] flex flex-col items-center justify-start text-center overflow-hidden pt-20 md:pt-28">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            transform: `translateY(${offsetY * 0.3}px)`,
            transition: "transform 0.2s ease-out",
            backgroundPosition: "center 45%",
          }}
        />
      

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="relative max-w-5xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-black">
            Safe, Simple Bitcoin Ownership
          </h1>
          <p className="text-lg md:text-xl mb-6 text-black">
            We help you understand, manage and secure  Bitcoin properly.
          </p>
          <a
            href="/booking"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Book a Consultation
          </a>
        </motion.div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* SERVICES CTA */}
      {/*<section className="w-full bg-gray-800 py-4 flex justify-center">
      <div className="text-center">
        <a
          href="/services"
          className="inline-block px-8 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-md transition-all duration-300"
        >
          Explore our Services
        </a>
      </div>
    </section>*/}

      {/* ABOUT */}
      <motion.section
        id="about"
        className="py-20 bg-gradient-to-bl from-green-800 to-emerald-900 text-white px-6 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-serif mb-6">Why Granite?</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-100">
          Based in New Hampshire — the Granite State — we stand for resilience, dependability,
          and freedom. GBA helps you navigate Bitcoin with clarity and confidence,
          while avoiding hype and confusion.
        </p>
          <a
            href="/services"
            className="mt-10 inline-block bg-white hover:bg-gray-300 text-black font-semibold px-6 py-3 rounded-lg"
          >
            Explore our Services
          </a>

      </motion.section>

      {/* BOOKING */}
      <motion.section
        id="contact"
        className="py-16 bg-gradient-to-tr from-black to-black/80 -mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-2">
          <div className="max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

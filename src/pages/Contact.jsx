// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative h-[85vh] sm:h-[90vh] md:h-[95vh] flex flex-col items-center justify-center text-center overflow-hidden pt-20 md:pt-28">

      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          transform: `translateY(${offsetY * 0.3}px)`,
          transition: "transform 0.2s ease-out",
          backgroundPosition: "center 45%",
        }}
      />

      {/* Frosted Glass Contact Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-3xl px-3 mb-20"
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}

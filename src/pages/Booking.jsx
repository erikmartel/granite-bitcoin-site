import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BookingForm from "../components/BookingForm";

export default function Booking() {
  const [offsetY, setOffsetY] = useState(0);

  // Track scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20 md:pt-28">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          transform: `translateY(${offsetY * 0.3}px)`,
          transition: "transform 0.2s ease-out",
          backgroundPosition: "center 45%",
        }}
      />



      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl px-0 py-10"
      >


        <BookingForm />
      </motion.div>
    </section>
  );
}

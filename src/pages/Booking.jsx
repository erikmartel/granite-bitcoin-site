import React from "react";
import { motion } from "framer-motion";
import BookingForm from "../components/BookingForm";
import { Helmet } from "react-helmet-async";

export default function Booking() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <Helmet>
        <title>Schedule a Consultation with GBA</title>
        <meta
          name="description"
          content="Book a free 1:1 consultation today."
        />
        <link rel="canonical" href="https://granitebitcoin.com" />
      </Helmet>
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-tr from-black to-black/80 pt-24 pb-24 md:pt-32 md:pb-32 px-4">
      {/* Booking Form Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-3xl"
      >
        <BookingForm />
      </motion.div>
    </section>
    </>
  );
}

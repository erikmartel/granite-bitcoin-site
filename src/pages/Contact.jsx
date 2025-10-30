import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <Helmet>
        <title>Contact Granite Bitcoin Advisors</title>
        <meta
          name="description"
          content="Inquiries? Contact Granite Bitcoin directly."
        />
        <link rel="canonical" href="https://granitebitcoin.com/contact" />
      </Helmet>
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-tr from-black to-black/80 pt-24 pb-24 md:pt-32 md:pb-32 px-4">
      {/* Contact Form Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-3xl"
      >
        <ContactForm />
      </motion.div>
    </section>
    </>
  );
}

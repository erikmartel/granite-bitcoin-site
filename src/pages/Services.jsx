// src/pages/Services.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, BookOpen, Users, Cpu, Lock, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import PackageSection from "../components/PackageSection";
import ProcessTimeline from "../components/ProcessTimeline";
import AdditionalServices from "../components/AdditionalServices";
import WhyChooseUs from "../components/WhyChooseUs";
import { Helmet } from "react-helmet-async";

export default function Services() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY * 0.5);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
<Helmet>
        <title>Bitcoin Education and Wallet Setup Trainings</title>
        <meta
          name="description"
          content="Bitcoin education and self-custody training for individuals and businesses. Learn. Save. Secure. Prosper."
        />
        <link rel="canonical" href="https://granitebitcoin.com/services" />
      </Helmet>

    <div className="bg-gray-50 text-gray-900 overflow-hidden">

      {/* === PACKAGES SECTION === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <PackageSection />
      </motion.section>

{/* PROCESS */}
<motion.section
        className=" bg-white"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <ProcessTimeline />
      </motion.section>


{/* GRANITE PACKAGE 
<motion.section
  className="py-20 bg-gray-100"
  initial="hidden"
  whileInView="visible"
  variants={fadeIn}
  viewport={{ once: true }}
>
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-serif mb-4">Granite Foundation</h2>
    <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
      The easiest way to start taking control of your Bitcoin — with nothing extra, and nothing missing.
    </p>

    <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 text-left max-w-3xl mx-auto">
      <ul className="grid gap-6 md:grid-cols-2">
        {[
          { title: "Training", desc: "Personalized education covering Bitcoin, security, and best practices." },
          { title: "Self-Custody Wallet Setup", desc: "Hands-on installation and configuration of your hardware wallet." },
          { title: "Backup Strategies", desc: "Resilient seed storage options including metal plates and redundancy." },
          { title: "Documented Protocols", desc: "Written SOPs for self-custody, wallet operations, and inheritance planning." },
        ].map((item) => (
          <li key={item.title} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-gray-100 transition">
            <Check className="w-5 h-5 text-[#F7931A] mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <p className="mt-8 text-gray-600 italic">
      Everything you need to take secure, independent control of your Bitcoin — in one streamlined package.
    </p>

    <div className="mt-8">
      <Link
        to="/booking"
        className="bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow"
      >
        Get Started with Granite Foundation
      </Link>
    </div>
  </div>
</motion.section> */}

      {/* WHY CHOOSE US */}
      <motion.section
        className=" bg-gray-800"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <WhyChooseUs />
      </motion.section>

            {/* SERVICES */}
            <motion.section
        className=" bg-gray-100"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <AdditionalServices />
      </motion.section>

      {/* CALL TO ACTION 
      <motion.section
        className="py-10 bg-gray-50 text-gray-900 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4">Ready to take full control?</h2>
          <p className="text-gray-700 mb-8">
          Take true ownership of your bitcoin with guidance grounded in clarity, security, and independence.
          </p>
          <Link
            to="/booking"
            className="self-center lg:self-start inline-block bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-transform duration-200 hover:scale-[1.02]"
          >
            Book Free Consultation
          </Link>
        </div>
      </motion.section>*/}
    </div>
    </>
  );
}

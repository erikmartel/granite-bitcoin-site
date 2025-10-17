import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function PackagesComparison() {
  const [openPackages, setOpenPackages] = useState([]);

  const packages = [
    {
      name: "Granite Foundation",
      tagline: "All the essentials to secure your Bitcoin with confidence.",
      items: [
        { title: "Bitcoin Education", desc: "Learn the fundamentals of Bitcoin, wallets, and the protocol itself." },
        { title: "Secure Purchase Guidance", desc: "Set up a River account and learn how to buy Bitcoin safely." },
        { title: "Fraud Avoidance Training", desc: "Understand common scams and receive a written reference guide." },
        { title: "Cold Storage Setup", desc: "Hands-on configuration of your hardware wallet." },
        { title: "Operations & Management", desc: "Step-by-step SOP for sending, receiving, and managing Bitcoin securely." },
        { title: "Seed Backup Guidance", desc: "Best practices for metal or DIY seed storage and redundancy." },
        { title: "Ongoing Support", desc: "Optional training and guidance after setup." },
      ],
      cta: "Book Granite Foundation",
      link: "/booking?pkg=foundation",
    },
    {
      name: "Granite Fortress",
      tagline: "Advanced protection and sovereignty for serious Bitcoin holders.",
      items: [
        { title: "Everything in Foundation", desc: "All core training, setup, and security fundamentals included." },
        { title: "Multi-Signature Setup", desc: "Enhanced wallet design for eliminating single points of failure." },
        { title: "Inheritance Planning", desc: "Ensure secure, recoverable transfer of assets to your heirs." },
        { title: "Node Deployment & Operation", desc: "Run your own Bitcoin node for full validation and privacy." },
      ],
      cta: "Book Granite Fortress",
      link: "/booking?pkg=fortress",
    },
  ];

  const togglePackage = (index) => {
    if (openPackages.includes(index)) {
      setOpenPackages(openPackages.filter((i) => i !== index));
    } else {
      setOpenPackages([...openPackages, index]);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-gradient-to-bl from-green-800 to-emerald-900 ">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-serif text-center text-white mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          Service Packages
        </motion.h2>

        {/* Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, i) => {
            const isOpen = openPackages.includes(i);
            return (
              <motion.div
                key={pkg.name}
                className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                {/* Header button */}
                <button
                  onClick={() => togglePackage(i)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <div>
                    <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                    <p className="text-gray-700">{pkg.tagline}</p>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="text-gray-500" size={28} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={28} />
                  )}
                </button>

                {/* Expandable panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="border-t border-gray-200 bg-white"
                    >
                      <div className="p-6 text-left">
                        <ul className="space-y-4 mb-6">
                          {pkg.items.map((item) => (
                            <li key={item.title} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-[#F7931A] mt-1 shrink-0" />
                              <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-700">{item.desc}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-2">
                          <Link
                            to={pkg.link}
                            className="inline-block bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow"
                          >
                            {pkg.cta}
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

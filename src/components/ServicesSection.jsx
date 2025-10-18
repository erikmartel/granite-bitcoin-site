import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";

const pillars = [
  {
    word: "Learn",
    tagline: "Master the Fundamentals",
    description:
      "Gain the knowledge and skills to truly own your bitcoin - without third parties. Understand Bitcoin's history, technology, and economic properties.",
    listTitle: "Discover:",
    listItems: [
      "Core principles and properties of Bitcoin, self-custody, and operational security",
      "The evolution of money and how Bitcoin fits into the picture",
      "The function and byproducts of our current fiat monetary system",
    ],
    cta: "Start Learning",
  },
  {
    word: "Save",
    tagline: "Transform and Preserve Your Wealth",
    description:
      "There are multiple ways to acquire, access and store bitcoin, with trade-offs for each. We help you choose the best solution for your situation.",
    listTitle: "Guidance on:",
    listItems: [
      "Acquisition methods and services",
      "Transfers, transactions, and management",
      "Wallets: types, software, services, and best practices",
    ],
    cta: "Start Saving",
  },
  {
    word: "Secure",
    tagline: "Control and Protect Your Assets",
    description:
      "The ability to take self-custody is one of the most important features of Bitcoin. Our personalized training enables you to protect your bitcoin, regardless of market, hardware, or life events.",
    listTitle: "Guidance on:",
    listItems: [
      "Initial, secure self-custody setup",
      "Proven backup strategies",
      "Standard operating procedures to avoid scams and human error",
      "Safe and private recovery processes",
    ],
    cta: "Book a Consultation",
  },
  {
    word: "Prosper",
    tagline: "Future-proof Your Financial Freedom",
    description:
      "Leverage your Bitcoin knowledge and self-custody foundation to grow your wealth, freedom, and peace of mind over time.",
    listTitle: "Guidance on:",
    listItems: [
      "Long-term stewardship and cold storage planning",
      "Inheritance plans and multi-signature setups",
      "New developments and trends in a changing global economy",
    ],
    cta: "Book a Consultation",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(null);
  const containerRef = useRef(null);

  const handleClick = (i) => {
    if (active === i) {
      setActive(null);
      return;
    }

    const el = containerRef.current?.querySelector(`#pillar-${i}`);
    const topOffset = 250; // buffer from top
    const scrollToElement = () => {
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (active !== null && active !== i) {
      scrollToElement();
      setActive(null);
      setTimeout(() => setActive(i), 50);
    } else {
      setActive(i);
      setTimeout(scrollToElement, 50);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Words */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-y-6 relative">
          {pillars.map((p, i) => (
            <motion.div
              key={p.word}
              id={`pillar-${i}`}
              className={`flex flex-col items-center w-full md:w-auto transition-all duration-500 ${
                active !== null && active !== i ? "opacity-40 blur-[1px]" : "opacity-100 blur-0"
              }`}
            >
              <button
                onClick={() => handleClick(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick(i);
                  }
                }}
                aria-expanded={active === i}
                className={`font-serif text-5xl sm:text-5xl md:text-5xl lg:text-5xl leading-tight text-center px-2 focus:outline-none transition-all
                  ${active === i ? "border-b-2 border-gray-500 pb-2" : "hover:border-b-2 hover:border-gray-300 pb-2"}
                  cursor-pointer transform hover:-translate-y-1`}
              >
                {p.word}{" "}
                <ChevronDown
                  className={`inline-block ml-1 transition-transform duration-300 ${
                    active === i ? "rotate-180" : "rotate-0"
                  }`}
                  size={24}
                  color="gray"
                />
              </button>

              {/* Mobile Detail Panel */}
              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -5, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full mt-4 lg:hidden"
                  >
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-6 text-left text-gray-100 relative transition-all duration-300">
                      <button
                        onClick={() => setActive(null)}
                        className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 transition"
                        aria-label="Close section"
                      >
                        <ChevronUp size={28} />
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-2xl font-semibold mb-3 text-black">{p.tagline}</h3>
                          <p className="text-base mb-6 text-gray-800">{p.description}</p>
                          <Link
                            to="/booking"
                            className="inline-block bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition-transform duration-200 hover:scale-[1.02]"
                          >
                            {p.cta}
                          </Link>
                        </div>

                        {p.listItems && (
                          <div>
                            <h4 className="text-lg font-semibold mb-2 text-black">{p.listTitle}</h4>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-800 leading-relaxed">
                              {p.listItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Desktop Detail Panel */}
        <AnimatePresence initial={false}>
          {active !== null && (
            <motion.div
              key="desktop-panel"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="hidden lg:block mt-10 relative"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-transparent via-gray-300/60 to-transparent blur-sm" />

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-10 text-gray-100 relative">
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 transition"
                  aria-label="Close section"
                >
                  <ChevronUp size={28} />
                </button>

                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-black">{pillars[active].tagline}</h3>
                    <p className="text-base mb-6 text-gray-800 max-w-3xl">
                      {pillars[active].description}
                    </p>
                    <Link
                      to="/booking"
                      className="inline-block bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition-transform duration-200 hover:scale-[1.02]"
                    >
                      {pillars[active].cta}
                    </Link>
                  </div>

                  {pillars[active].listItems && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-black">
                        {pillars[active].listTitle}
                      </h4>
                      <ul className="list-disc list-outside pl-5 space-y-2 text-gray-800 leading-relaxed">
                        {pillars[active].listItems.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

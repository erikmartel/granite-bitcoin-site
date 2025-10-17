import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ShieldCheck,
  Cpu,
  Users,
  CheckCircle,
  Clock,
  ChevronDown,
  WalletMinimal,
  Handshake,
  UserStar,
  BookOpenCheck,
  BookKey,
} from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(null);
  const containerRef = useRef(null);

  const steps = [
    {
      number: "1",
      icon: <Handshake className="w-7 h-7" />,
      title: "Free Welcome Call",
      desc: "Share your goals, assess your Bitcoin knowledge, and plan next steps.",
      overview:"A free video consultation to evaluate your objectives, current setup, and comfort level with Bitcoin. Together, we’ll outline the essentials, clarify initial questions, and plan your path to secure self-custody.",
      details: {
        deliverables: [
          "Personalized Bitcoin readiness assessment",
          "Open Q&A session",
          "Bitcoin Basics: Essential educational resources",
          "Clear next steps and timeline overview",
        ],
        included: [
          "Goal and experience evaluation",
          "Hardware wallet recommendations",
          "Security best practices overview",
          "Q&A session",
        ],
        timeEstimate: "30-60 minutes",
      },
    },
    {
      number: "2",
      icon: <BookKey className="w-7 h-7" />,
      title: "Self-Custody Onboarding",
      desc: "Step-by-step guidance for secure wallet setup and backup creation.",
      overview:"We'll show you how to secure your keys using open-source, verifiable tools. You'll be guided through each step to understand your setup fully and feel confident managing your Bitcoin independently.",
      details: {
        deliverables: [
          "Fully configured hardware wallet",
          "Secure seed phrase backup",
          "SimpleSecurity Checklist",
        ],
        included: [
          "Hardware wallet unboxing and setup",
          "Seed phrase generation and verification",
          "Initial wallet configuration",
          "Security checklist walkthrough",
        ],
        timeEstimate: "1-2 hours",
      },
    },
    {
      number: "3",
      icon: <BookOpenCheck className="w-7 h-7" />,
      title: "Operational Training",
      desc: "Personalized training and documentation to use your new setup confidently.",
      overview:"Gain practical, hands-on training to manage your Bitcoin safely and confidently. You'll learn how to avoid common scams, back up and recover your wallet, and operate your setup with ease. We also provide personalized written protocols so you always have clear guidance to reference.",
      details: {
        deliverables: [
          "Acquisition options and recommendations",
          "Hands-on transaction practice",
          "Backup and recovery procedures",
          "Wallet recovery simulation",
          "Fraud Prevention and OpSec Checklist",
        ],
        included: [
          "Sending and receiving Bitcoin",
          "Fee management and optimization",
          "Wallet recovery simulation",
          "Address verification techniques",
        ],
        timeEstimate: "1–2 hours",
      },
    },
    {
      number: "4",
      icon: <Users className="w-7 h-7" />,
      title: "Continuous Support",
      desc: "Optional follow-up sessions and ongoing assistance.",
      overview:"Stay supported into the future. Get access to additional training sessions, on-demand help, and updates on the latest best practices and industry developments, helping you grow your knowledge and maintain full confidence in your setup.",
      details: {
        deliverables: [
          "Ongoing support access",
          "News and updates on self-custody practices",
          "Optional Follow-up Sessions"
        ],
        included: [
          "Check-in calls to answer questions",
          "Security audit of your setup",
          "Advanced topics as needed",
          "Resource library access",
        ],
        timeEstimate: "Ongoing",
      },
    },
  ];

  const handleStepClick = (index) => {
    if (activeStep === index) {
      setActiveStep(null);
      return;
    }

    const el = containerRef.current?.querySelector(`#step-${index}`);
    const topOffset = 220; // space from top
    const scrollToElement = () => {
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (activeStep !== null && activeStep !== index) {
      scrollToElement();
      setActiveStep(null);
      setTimeout(() => setActiveStep(index), 50);
    } else {
      setActiveStep(index);
      setTimeout(scrollToElement, 50);
    }
  };

  return (
    <section className="pt-20 pb-10 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16 text-gray-900">
          Our Process
        </h2>

        <div className="relative">
          {/* Timeline rail */}
          <div
            className="hidden lg:block absolute top-[52px] left-0 right-0 h-[2px] bg-gray-300"
            style={{ width: "calc(100% - 100px)", marginLeft: "50px" }}
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} id={`step-${index}`} className="relative group/step">
                <button
                  onClick={() => handleStepClick(index)}
                  className={`w-full cursor-pointer rounded-xl transition-all duration-300 p-2
                    ${activeStep !== null && activeStep !== index ? "opacity-40" : "opacity-100"}
                    active:bg-gray-50`}
                >
                  {/* Step indicator */}
                  <div className="flex justify-center mb-6 lg:mb-8">
                    <div className="relative z-10">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-semibold tracking-wide text-gray-900">
                          STEP {step.number}
                        </span>
                      </div>

                                <div
                                    className={`relative w-[52px] h-[52px] rounded-xl bg-white flex items-center justify-center shadow-sm transition-all duration-300 
    ${activeStep === index
                                            ? "border-2 border-gray-900 scale-105 shadow-lg"
                                            : "border-2 border-gray-400 group-hover/step:border-gray-900 group-hover/step:scale-105 group-hover/step:shadow-md"
                                        }`}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-xl border-2 border-gray-900 transition-all duration-300 ${activeStep === index
                                                ? "opacity-0"
                                                : "opacity-0 group-hover/step:opacity-100 group-hover/step:scale-125"
                                            }`}
                                    />
                                    <div className="text-gray-900">{step.icon}</div>
                                </div>

                    </div>
                  </div>

                  {/* Title + desc */}
                  <div className="text-center">
                    <h3 className="font-semibold text-base text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {step.desc}
                    </p>

                    <div className="flex justify-center">
                      <ChevronDown
                        className={`w-6 h-6 transition-all duration-300 ${
                          activeStep === index
                            ? "text-gray-900 rotate-180 opacity-100"
                            : "text-gray-400 group-hover/step:text-gray-900 opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Mobile animated detail panel */}
                <AnimatePresence initial={false}>
                  {activeStep === index && (
                    <motion.div
                      key={`mobile-panel-${index}`}
                      initial={{ opacity: 0, y: -5, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -5, height: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="lg:hidden mt-8"
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl p-6 space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="w-5 h-5 text-gray-900" />
                            <h4 className="font-semibold text-base text-gray-900">
                              Overview
                            </h4>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            {step.overview}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5 text-gray-900" />
                            <h4 className="font-semibold text-base text-gray-900">
                              You'll Receive:
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {step.details.deliverables.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2" />
                                <span className="text-sm text-gray-700">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex mt-5 items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                            <Clock className="w-4 h-4 text-gray-900" />
                            <span className="text-sm font-medium text-gray-700">
                              Time: {step.details.timeEstimate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop animated detail panel */}
          <AnimatePresence initial={false}>
            {activeStep !== null && (
              <motion.div
                key="desktop-panel"
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="hidden lg:block mt-12 relative"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-transparent via-gray-300/60 to-transparent blur-sm" />
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-5 h-5 text-gray-900" />
                        <h4 className="font-semibold text-lg text-gray-900">
                          Overview
                        </h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed mb-6">
                        {steps[activeStep].overview}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-gray-900" />
                        <h4 className="font-semibold text-lg text-gray-900">
                          You'll Receive:
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {steps[activeStep].details.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 mt-5 border border-gray-200">
                        <Clock className="w-4 h-4 text-gray-900" />
                        <span className="text-sm font-medium text-gray-700">
                          Time: {steps[activeStep].details.timeEstimate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

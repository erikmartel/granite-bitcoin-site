// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // smooth scroll links

import logo from "./assets/logo.svg";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Menu, X } from "lucide-react";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import LegalNotice from "./pages/LegalNotice";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 p-5 flex justify-between items-center bg-white/90 backdrop-blur-md shadow-md">
          <div className="flex items-center space-x-3 ml-5 pr-5">
            <img
              src={logo}
              alt="Granite Bitcoin logo"
              className="h-10 w-10 rounded-full"
            />
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-xl text-black font-serif tracking-tight"
            >
              Granite Bitcoin Advisors
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-7 text-black mr-5 text-lgtext-lg">
            <Link to="/services" className="font-serif hover:text-amber-600">
              Services
            </Link>
            <Link to="/company" className="font-serif hover:text-amber-600">
              Company
            </Link>
            <Link to="/contact" className="font-serif hover:text-amber-600">
              Contact
            </Link>
            <Link
              to="/booking"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-lg"
            >
              Book a Consultation
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center p-5 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Granite Bitcoin logo"
                className="h-10 w-10 rounded-full"
              />
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-black font-serif tracking-tight"
              >
                Granite Bitcoin Advisors
              </Link>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col pl-6 pr-6 text-2xl  divide-y divide-gray-200">

            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 font-serif hover:text-amber-600 py-4 w-full"
            >
              Services
            </Link>
            <Link
              to="/company"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 font-serif hover:text-amber-600 py-4 w-full"
            >
              Company
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 font-serif hover:text-amber-600 py-4 w-full"
            >
              Contact
            </Link>
            <div className="pt-4 w-full">
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full self-center lg:self-start inline-block bg-[#F7931A] hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-transform duration-200 hover:scale-[1.02] rounded-lg text-center"
              >
                Book a Consultation
              </Link>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/legal" element={<LegalNotice />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

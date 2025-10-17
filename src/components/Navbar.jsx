import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-6 flex justify-between items-center bg-gray-900 text-white relative z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-tight align-left">Granite Bitcoin</h1>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/services" className="hover:text-amber-400">
          Services
        </Link>
        <Link to="/company" className="hover:text-amber-400">
          Company
        </Link>
        <Link
          to="/contact"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Book a Consultation
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden focus:outline-none"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer itself */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gray-900 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="focus:outline-none"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6 text-xl">
          <Link
            to="/services"
            className="hover:text-amber-400"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/company"
            className="hover:text-amber-400"
            onClick={() => setMenuOpen(false)}
          >
            Company
          </Link>
          <Link
            to="/contact"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

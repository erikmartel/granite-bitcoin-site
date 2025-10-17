// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="py-6 text-center text-sm text-gray-500 bg-gray-200">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <div>© {new Date().getFullYear()} Granite Bitcoin Advisors</div>
        <nav className="space-x-4">
          <Link to="/terms" className="hover:underline">Terms</Link>
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <Link to="/legal" className="hover:underline">Legal Notice</Link>
        </nav>
      </div>
    </footer>
  );
}

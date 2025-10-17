
// src/pages/Contact.jsx
import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/hero-bg.png)" }} // put hero-bg.jpg in /public
    >
      {/* overlay to darken image for readability */}
      <div className="min-h-screen  flex flex-col">
        {/* keep your header spacing if header is fixed */}
        <main className="flex-grow flex items-center justify-center px-6 py-10">
          <div className="w-full">
            <ContactForm />
          </div>
        </main>
      </div>
    </div>
  );
}


// src/pages/Booking.jsx
import React from "react";
import BookingForm from "../components/BookingForm";

export default function Booking() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }} // replace with your image
    >
      {/* overlay for readability */}
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow flex items-center justify-center px-6 py-20">
          <div className="w-full">
            <BookingForm />
          </div>
        </main>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState("");

  const quotes = [
    "Quality is not an act, it is a habit. - Aristotle",
    "Excellence is not a destination; it is a continuous journey. - Ralph Marston",
    "The customer's perception is your reality. - Kate Zabriskie",
    "Success is the sum of small efforts repeated day in and day out. - Robert Collier",
    "Attention to detail is the ultimate luxury. - Ralph Lauren",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Your satisfaction is our success. - Moshi Dryclean",
    "Serving with excellence, caring with passion. - Moshi Dryclean",
    "Where quality meets commitment to service.",
    "Perfection in every press, care in every fold.",
  ];

  const handleGetQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    setShowQuote(true);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-safe flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-600">
            Moshi Dryclean
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
          <button onClick={handleGetQuote} className="btn-primary">Get Quote</button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="space-y-2 md:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-all ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-all ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full flex flex-col bg-white py-4 shadow-lg md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button onClick={handleGetQuote} className="mx-4 mt-2 btn-primary">Get Quote</button>
          </div>
        )}

        {/* Quote Modal */}
        {showQuote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
              <h2 className="mb-4 text-2xl font-bold text-primary-600">
                Inspiration for You
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 italic">
                "{currentQuote}"
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleGetQuote()}
                  className="flex-1 rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 transition-colors"
                >
                  Another Quote
                </button>
                <button
                  onClick={() => setShowQuote(false)}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

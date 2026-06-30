"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="backdrop-blur-xl bg-black/45 border-b border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.08)]">
          <div className="max-w-7xl mx-auto relative flex items-center justify-between px-10 py-3">
            <button onClick={() => setIsOpen(true)}>
              <img
                src="/NavbarIcon.png"
                alt="Antonio Logo"
                className="w-14 h-14 rounded-xl object-cover border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] cursor-pointer ml-20"
              />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 group">
              <p className="text-3xl font-bold text-white tracking-wide drop-shadow-lg cursor-pointer">
                Welcome
                <span className="inline-block text-cyan-400 origin-[70%_70%] group-hover:animate-[wave_0.9s_ease-in-out_infinite]">
                  👋🏼
                </span>
                !
              </p>
            </div>

            <nav className="ml-auto">
              <ul className="flex items-center gap-7 text-xl">
                {["About", "Experience", "Contact", "CV"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item}`}
                      className="relative text-white/90 transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
      fixed inset-0 z-[999]
      bg-black/85 backdrop-blur-md
      flex items-center justify-center
      animate-fadeIn
    "
        >
          <button
            onClick={() => setIsOpen(false)}
            className="
        absolute top-6 right-8
        text-white text-5xl
        hover:text-cyan-400
        transition duration-300
        cursor-pointer
      "
          >
            ×
          </button>

          <img
            src="/NavbarIcon.png"
            alt="Zoomed Antonio Logo"
            onClick={(e) => e.stopPropagation()}
            className="
        max-w-[80vw]
        max-h-[80vh]
        object-contain
        rounded-3xl
        border border-cyan-400/40
        shadow-[0_0_70px_rgba(34,211,238,0.45)]
        animate-[zoomIn_0.35s_ease]
      "
          />
        </div>
      )}
    </>
  );
}

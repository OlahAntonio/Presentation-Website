"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../Components/Footer/Footer";
import { div } from "framer-motion/client";

const aboutParagraphs = [
  "My passion for Computer Science and programming started from gaming. I was fascinated by how games worked behind the screen, how systems interacted together, and how developers transformed ideas into something immersive and interactive through code.",
  "That curiosity slowly evolved into solving my first algorithmic problems, learning programming logic, and experimenting with my first small projects. The satisfaction of solving problems and building things from scratch made me realize that programming was more than just a hobby for me.",
  "So much so, that during the 10th grade of high school I made the decision of devoting myself to the programming path. From that point onward, I continuously invested time into learning, improving, and understanding the foundations behind software development and Computer Science.",
  "Over time, this passion pushed me to study Computer Science at the University of Oradea, where I continued expanding my technical knowledge through university projects, algorithmic thinking, databases, software engineering, and web development.",
  "The “Gym Rat” attribution fits me because the gym represents much more than fitness. It represents discipline, consistency, sacrifice, patience, and the willingness to improve every single day even when motivation is not there.",
  "I strongly believe these values perfectly translate into programming and personal development. Writing clean code, solving difficult problems, debugging applications, and continuously learning technologies all require the same mindset of persistence and devotion.",
  "My goal is to continue growing both professionally and personally, building meaningful projects, mastering modern technologies, and becoming a better version of myself day after day.",
];

const navLinks = [
  { href: "/Home", label: "GO BACK", active: true },
  { href: "/Experience", label: "EXPERIENCE" },
  { href: "/Contact", label: "CONTACT" },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <main className="relative min-h-screen bg-[#0b0f10] text-white overflow-y-auto flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.14),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.22)_2px,_transparent_2px)] bg-[size:150px_150px] opacity-35" />

        <section className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[24px] border border-cyan-400/30 bg-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <div className="relative h-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 flex items-end justify-center">
            <img
              src="/ProfilePic.png"
              alt="Profile"
              className="absolute -bottom-10 w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>

          <div className="px-8 pt-14 pb-5">
            <h1 className="text-2xl font-bold text-center mb-2">
              Olah Antonio
            </h1>
            <p className="text-center uppercase tracking-[4px] text-cyan-300 text-[11px] mb-5">
              Student • Developer • Gym Rat
            </p>
            <div
              className={`space-y-3 text-gray-300 leading-6 text-[14px] transition-all duration-500 ${
                expanded ? "max-h-[1200px]" : "max-h-[260px] overflow-hidden"
              }`}
            >
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-4 text-cyan-300 hover:text-white transition font-semibold text-sm cursor-pointer"
            >
              {expanded ? "See Less ↑" : "See More ↓"}
            </button>

            <nav className="mt-5 border-t border-cyan-400/20 pt-4 flex items-center justify-between text-xs font-semibold tracking-wide">
              {navLinks.map(({ href, label, active }) => (
                <Link
                  key={href}
                  href={href}
                  className={
                    active
                      ? "text-cyan-300 border-b-2 border-cyan-300 pb-2"
                      : "text-gray-400 hover:text-cyan-300 transition"
                  }
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

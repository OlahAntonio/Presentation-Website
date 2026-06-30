"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OpeningPage() {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  const handleNavigation = () => {
    setTransitioning(true);
    setTimeout(() => {
      router.push("/Home");
    }, 1200);
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <img
        src="/SiteOpeningBackgeound.png"
        alt="Background"
        className="h-full w-full object-cover"
      />
      <section className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl font-light tracking-wide">
          Hello, I'm{" "}
          <span className="font-bold text-cyan-400 drop-shadow-lg">
            Olah Antonio
          </span>{" "}
          🤝🏼!
        </h1>

        <p className="mt-6 text-2xl text-gray-200 tracking-wide">
          I'm a Full-Stack Developer 💻⚙️
        </p>
        <button
          onClick={handleNavigation}
          className="group relative mt-10 inline-block overflow-hidden border border-cyan-400 px-8 py-4 text-cyan-300 bg-white/5 tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] cursor-pointer"
        >
          <span className="absolute left-0 top-0 h-full w-0 bg-cyan-500 transition-all duration-700 ease-in-out group-hover:w-full" />
          <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
            View My Work →
          </span>
        </button>
      </section>
      <div
        className={`
          fixed inset-0 z-50 bg-[#181818]
          transition-transform duration-[1200ms] ease-in-out
          ${transitioning ? "translate-x-0" : "-translate-x-full"}
        `}
      />
    </main>
  );
}

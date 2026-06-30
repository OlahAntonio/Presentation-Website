import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="w-full border-t border-cyan-900/40 bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center md:flex-row">
          <p className="text-sm text-gray-400">
            © 2025-{new Date().getFullYear()} All rights reserved
          </p>
          <div className="hidden h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent md:block" />
          <p className="text-sm text-gray-400">
            Website created in{" "}
            <span className="font-semibold text-cyan-400">Next.js</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

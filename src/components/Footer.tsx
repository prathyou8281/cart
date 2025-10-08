"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300 py-6 mt-16 border-t border-gray-700/60">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Left Section */}
        <div className="md:w-1/3 mb-4 md:mb-1">
          <h2 className="text-2xl font-bold text-white tracking-wide">Opiqo</h2>
          <p className="text-sm text-gray-400">Quality That Moves You</p>
        </div>

        {/* Center Section */}
        <div className="md:w-1/3 mb-4 md:mb-0 text-center text-xs md:text-sm text-gray-400">
          Designed & Developed with ❤️ by{" "}
          <span className="text-white font-semibold">Opiqo Team</span>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 text-xs md:text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Opiqo</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

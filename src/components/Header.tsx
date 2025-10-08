"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/"; // 👈 Detect if we're on the welcome page

  return (
    <motion.header
      className="flex flex-wrap justify-between items-center 
                 bg-gradient-to-r from-[#0f172a]/90 via-[#1e293b]/90 to-[#0f172a]/90 
                 backdrop-blur-xl border border-gray-700/50 
                 shadow-[0_0_25px_rgba(59,130,246,0.2)] 
                 rounded-2xl mx-4 sm:mx-8 mt-4 px-4 sm:px-8 py-3 sm:py-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo / Brand */}
      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold 
                   bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 
                   bg-clip-text text-transparent tracking-tight cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        Opiqo
      </motion.h1>

      {/* Navigation */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-8">
        <nav className="flex flex-wrap justify-center gap-3 sm:gap-8">
          {["Home", "Products", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="px-3 sm:px-4 py-2 rounded-lg 
                           text-gray-200 font-medium transition-all duration-300 
                           hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 
                           hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* 🛒 Cart Button - Hidden on Home */}
        {!isHomePage && (
          <Link href="/store">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 
                         text-white px-5 py-2 rounded-lg font-semibold 
                         shadow-[0_0_20px_rgba(59,130,246,0.4)] 
                         hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] 
                         transition-all duration-300 text-sm sm:text-base"
            >
              🛒 Cart
            </motion.button>
          </Link>
        )}
      </div>
    </motion.header>
  );
}

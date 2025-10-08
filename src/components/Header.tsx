"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="flex flex-wrap justify-between items-center bg-white/80 backdrop-blur-md shadow-md rounded-2xl mx-4 sm:mx-6 mt-4 px-4 sm:px-8 py-3 sm:py-4 border border-gray-200"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Logo / Brand */}
      <motion.h1
        className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight cursor-pointer mb-2 sm:mb-0"
        whileHover={{ scale: 1.05 }}
      >
        🛍️ MyStore
      </motion.h1>

      {/* Navigation + Cart (Right Section) */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-6">
        <nav className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {["Home", "Products", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="px-3 sm:px-4 py-2 rounded-lg border border-transparent hover:border-blue-500 hover:bg-blue-50 text-gray-800 font-medium transition-all duration-300 text-sm sm:text-base"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Cart Button */}
        <Link href="/cart">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
          >
            🛒 Cart
          </motion.button>
        </Link>
      </div>
    </motion.header>
  );
}

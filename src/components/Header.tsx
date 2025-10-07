"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="flex justify-between items-center bg-white/80 backdrop-blur-md shadow-md rounded-2xl mx-6 mt-4 px-8 py-4 border border-gray-200"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo / Brand */}
      <motion.h1
        className="text-3xl font-extrabold text-blue-600 tracking-tight cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        🛍️ MyStore
      </motion.h1>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        {["Home", "Products", "Contact"].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="px-4 py-2 rounded-lg border border-transparent hover:border-blue-500 hover:bg-blue-50 text-gray-800 font-medium transition-all duration-300"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Right Action: Cart Link */}
      <Link href="/cart">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
        >
          🛒 Cart
        </motion.button>
      </Link>
    </motion.header>
  );
}

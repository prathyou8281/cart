"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-100 overflow-hidden">
      <Header />

      {/* Split Layout */}
      <section className="flex flex-col md:flex-row items-center justify-center flex-grow px-8 md:px-20 relative">
        {/* Left Side - Opiqo Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-center items-center"
        >
          <Image
            src="/logo/logo3.png"
            alt="Opiqo Logo"
            width={550}
            height={550}
            priority
            className="object-contain drop-shadow-[0_0_45px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Side - Welcome & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
            Welcome
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-md leading-relaxed">
            Powering digital experiences with innovation, performance, and design excellence.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Link
              href="/store"
              className="px-16 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 
                         text-white font-semibold text-xl text-center shadow-lg 
                         hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:scale-105 
                         transition-all duration-300"
            >
              🛒 Store
            </Link>

            <Link
              href="/production"
              className="px-16 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 
                         text-white font-semibold text-xl text-center shadow-lg 
                         hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:scale-105 
                         transition-all duration-300"
            >
              ⚙️ Production
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  qty?: number;
}

const products: Product[] = [
  { id: 1, name: "Gaming Laptop", price: 89999, img: "/images/laptop.jpg" },
  { id: 2, name: "Wireless Headset", price: 2999, img: "/images/headset.jpg" },
  { id: 3, name: "Mechanical Keyboard", price: 4499, img: "/images/keyboard.jpg" },
];

export default function Home() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [addedItem, setAddedItem] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    const existingCart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const itemExists = existingCart.find((item) => item.id === product.id);
    if (itemExists) itemExists.qty = (itemExists.qty || 1) + 1;
    else existingCart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setAddedItem(product);
    setShowPopup(true);
  };

  const handleBuyNow = (product: Product) => {
    localStorage.setItem("cart", JSON.stringify([{ ...product, qty: 1 }]));
    router.push("/cart");
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white overflow-hidden">
      <Header />

      {/* 🌟 Hero Section */}
      <motion.section
        className="relative text-center py-16 sm:py-20 px-4 sm:px-6 md:px-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 mb-6 drop-shadow-lg">
          Discover the Future of Tech
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Explore premium gadgets designed for performance, style, and innovation.  
          Build your setup. Unleash your power. 🚀
        </p>

        <motion.div
          className="absolute inset-0 -z-10 blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(0,180,255,0.6), transparent 70%)",
          }}
        />
      </motion.section>

      {/* 🛍️ Product Section */}
      <section className="flex-grow px-4 sm:px-6 md:px-12 pb-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-blue-400 tracking-wide">
          
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 overflow-hidden shadow-lg group hover:shadow-blue-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

              <Image
                src={p.img}
                alt={p.name}
                width={300}
                height={200}
                className="mx-auto rounded-xl object-cover shadow-md hover:scale-110 transition-transform duration-700"
                priority
              />

              <div className="mt-5 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-300">
                  {p.name}
                </h3>
                <p className="text-base sm:text-lg font-bold mt-2 text-emerald-400">
                  ₹{p.price.toLocaleString("en-IN")}
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleBuyNow(p)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 sm:px-6 rounded-full font-semibold shadow-md focus:ring-2 focus:ring-emerald-400"
                  >
                    Buy Now
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleAddToCart(p)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 sm:px-6 rounded-full font-semibold shadow-md focus:ring-2 focus:ring-blue-400"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🛒 Popup */}
      <AnimatePresence>
        {showPopup && addedItem && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-900 via-black to-gray-900 border border-blue-500/30 rounded-2xl p-6 text-center shadow-2xl w-[90%] max-w-sm"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                ✅ Added to Cart
              </h3>
              <p className="text-gray-300 mb-6">
                {addedItem.name} has been successfully added to your cart.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold focus:ring-2 focus:ring-blue-400"
                  onClick={() => {
                    setShowPopup(false);
                    router.push("/cart");
                  }}
                >
                  🛒 Go to Cart
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold focus:ring-2 focus:ring-emerald-400"
                  onClick={() => setShowPopup(false)}
                >
                  🛍️ Continue Shopping
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

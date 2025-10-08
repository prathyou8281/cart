"use client";

import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// ✅ Define a Product type
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  qty?: number; // optional, used for cart quantity
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

  // ✅ Add to Cart
  const handleAddToCart = (product: Product) => {
    const existingCart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const itemExists = existingCart.find((item) => item.id === product.id);

    if (itemExists) itemExists.qty = (itemExists.qty || 1) + 1;
    else existingCart.push({ ...product, qty: 1 });

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setAddedItem(product);
    setShowPopup(true);
  };

  // ✅ Buy Now
  const handleBuyNow = (product: Product) => {
    localStorage.setItem("cart", JSON.stringify([{ ...product, qty: 1 }]));
    router.push("/cart");
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-x-hidden">
      <Header />

      <section className="text-center py-20 flex-grow px-4 sm:px-6 md:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-blue-400 tracking-wide drop-shadow-lg">
          🔥 Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={300}
                  height={200}
                  className="mx-auto rounded-xl object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mt-5 text-blue-300">
                {p.name}
              </h3>
              <p className="text-base sm:text-lg font-bold mt-2 text-emerald-400">
                ₹{p.price.toLocaleString("en-IN")}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleBuyNow(p)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  Buy Now
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleAddToCart(p)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🛒 Add-to-Cart Popup */}
      <AnimatePresence>
        {showPopup && addedItem && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/70 backdrop-blur-md p-safe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ WebkitOverflowScrolling: "touch", paddingBottom: "env(safe-area-inset-bottom)" }}
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

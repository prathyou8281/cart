"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  // 🧾 Load cart from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(saved);
  }, []);

  // 💾 Save updates to localStorage
  const updateLocalStorage = (items: any[]) => {
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems([...items]);
  };

  // ➕ Increase qty
  const increaseQty = (id: number) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateLocalStorage(updated);
  };

  // ➖ Decrease qty
  const decreaseQty = (id: number) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
      )
      .filter((item) => item.qty > 0);
    updateLocalStorage(updated);
  };

  // 🗑️ Remove item
  const removeItem = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateLocalStorage(updated);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white">
      <Header />

      <section className="flex-grow container mx-auto px-6 py-16">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-12 text-blue-400 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🛒 Your Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* 🧾 Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="flex items-center justify-between bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-md hover:shadow-blue-500/20 transition-all"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 overflow-hidden rounded-xl">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-xl object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-blue-300">
                        {item.name}
                      </h2>
                      <p className="text-gray-400 text-sm mt-1">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center mt-3 space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full text-white text-lg font-bold"
                          onClick={() => decreaseQty(item.id)}
                        >
                          −
                        </motion.button>

                        <span className="text-lg font-semibold">
                          {item.qty}
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full text-white text-lg font-bold"
                          onClick={() => increaseQty(item.id)}
                        >
                          +
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-3">
                    <p className="text-lg font-bold text-emerald-400">
                      ₹{(item.price * item.qty).toLocaleString("en-IN")}
                    </p>

                    {/* Remove button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow"
                      onClick={() => removeItem(item.id)}
                    >
                      🗑️ Remove
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 💰 Summary Section */}
            <motion.div
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 h-fit shadow-lg hover:shadow-blue-500/20 transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3 text-gray-300">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between mb-3 text-gray-300">
                <span>Shipping</span>
                <span>₹299</span>
              </div>

              <hr className="border-white/20 my-4" />

              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>₹{(subtotal + 299).toLocaleString("en-IN")}</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold shadow-md"
              >
                Proceed to Checkout
              </motion.button>

              <Link
                href="/"
                className="block text-center text-blue-400 mt-6 hover:underline"
              >
                ← Continue Shopping
              </Link>
            </motion.div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

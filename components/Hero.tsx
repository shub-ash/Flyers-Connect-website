"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Monitor, Laptop, Smartphone } from "lucide-react";
import Image from "next/image";
import Workingman from "../components/assets/images/workingman.gif";
import { useState } from "react";

export default function Hero() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products = [
    {
      name: "MacBook Pro",
      icon: Laptop,
      gradientFrom: "#006FE6",
      gradientTo: "#3BA7FF",
    },
    {
      name: "iMac",
      icon: Monitor,
      gradientFrom: "#009E4F",
      gradientTo: "#66D39D",
    },
    {
      name: "Mac Mini",
      icon: Smartphone,
      gradientFrom: "#FF9E00",
      gradientTo: "#FFD279",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-100"></div>

      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle bg-blue-400/30 rounded-full absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10  w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                🚀 India's Premier Mac Rental Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-medium  mb-6 w-full"
            >
              <span className="text-[#003557]">Premium Mac</span>
              <br />
              <span className="my-6 bg-gradient-to-r from-[#FF9E00] to-[#ED312A] bg-clip-text text-transparent">
                Rentals for
              </span>
              <br />
              <span className="text-[#003557]">Modern Workforces</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-0 leading-relaxed max-w-2xl"
            >
              Rent MacBook Pros, iMacs, and Mac Minis — ready to work, delivered
              to your door.
            </motion.p>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              {/* {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  className="flex items-center space-x-2 px-5 py-3 rounded-full text-white text-sm font-medium shadow-md cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${product.gradientFrom}, ${product.gradientTo})`,
                  }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredProduct(product.name)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <product.icon className="w-4 h-4" />
                  <span>{product.name}</span>
                </motion.div>
              ))} */}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#006FE6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get a Quote</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="group inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="mr-2 w-5 h-5" />
                <span>Explore Devices</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { number: "1000+", label: "Devices Delivered" },
                { number: "200+", label: "Happy Clients" },
                { number: "24x7", label: "Support Coverage" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <motion.div
                    className="text-2xl lg:text-3xl font-bold text-slate-800"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.4 + index * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* MacBook Mockup stays the same */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative perspective-1000"
            >
              {/* MacBook mockup container */}
              <div className="relative">
                <motion.div
                  className="w-full max-w-lg mx-auto"
                  animate={{
                    y: [0, -10, 0],
                    rotateY: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={Workingman}
                      alt="MacBook Mockup"
                      className="w-[800px]"
                    />
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity },
                  }}
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: -360,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 4, repeat: Infinity },
                  }}
                >
                  <div className="w-6 h-6 bg-[#006FE6] rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}

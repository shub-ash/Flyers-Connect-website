"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Monitor,
  Laptop,
  Cpu,
  ArrowRight,
  Check,
  Smartphone,
} from "lucide-react";

export default function Products() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef);

  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef);

  const PRIMARY_GRADIENT = "linear-gradient(to right, #006FE6, #6C4BFF)";

  const products = [
    {
      name: "MacBook Pro",
      icon: Laptop,
      description: 'M1 / M2 / M3, 13–16"',
      specs: [
        "Latest M-series chips",
        "Retina displays",
        "Professional performance",
        "All-day battery",
      ],
      idealFor: "Developers, Designers, Executives",
      startingPrice: "₹2,999",
      gradientFrom: "#006FE6",
      gradientTo: "#3BA7FF",
      popular: true,
    },
    {
      name: "MacBook Air",
      icon: Laptop,
      description: "Lightweight, M1/M2",
      specs: [
        "M1/M2 chip",
        '13" & 15" options',
        "Ultra-portable design",
        "Silent operation",
      ],
      idealFor: "Founders, Business Use",
      startingPrice: "₹1,999",
      gradientFrom: "#6C4BFF",
      gradientTo: "#A58DFF",
    },
    {
      name: "iMac",
      icon: Monitor,
      description: '24" Retina, M1 Chip',
      specs: [
        '24" 4.5K Retina display',
        "M1 chip performance",
        "Studio-quality audio",
        "Vibrant colors",
      ],
      idealFor: "Creative Agencies, Branding",
      startingPrice: "₹3,499",
      gradientFrom: "#009E4F",
      gradientTo: "#66D39D",
    },
    {
      name: "Mac Mini",
      icon: Smartphone,
      description: "M2 Chip, compact power",
      specs: [
        "M2 chip performance",
        "Compact design",
        "Multiple connectivity",
        "Bundle options available",
      ],
      idealFor: "Bundle with monitor, keyboard, mouse",
      startingPrice: "₹1,499",
      gradientFrom: "#FF9E00",
      gradientTo: "#FFD279",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#003557]">
            Premium{" "}
            <span className="bg-gradient-to-r from-[#FF9E00] to-[#ED312A] bg-clip-text text-transparent">
              Mac
            </span>{" "}
            Products
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our extensive collection of the latest Apple Mac
            devices. Fully tested, sanitized, and ready for immediate use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            return (
              <div ref={cardRef} key={product.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.3, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {product.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#ff0000] to-[#ffa479] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        POPULAR
                      </div>
                    )}

                    <div
                      className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center text-white"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${product.gradientFrom}, ${product.gradientTo})`,
                      }}
                    >
                      <product.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {product.description}
                    </p>

                    <div className="text-xs text-[#006FE6] bg-[#E6F0FF] rounded-full px-2 py-1 mb-4 inline-block font-medium">
                      Ideal for: {product.idealFor}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {product.specs.map((spec, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Check className="w-4 h-4 text-[#009E4F] mr-2" />
                          {spec}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xl font-bold text-gray-900">
                          {product.startingPrice}
                        </div>
                        <div className="text-sm text-gray-500">per month</div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center px-4 py-3 text-white rounded-xl font-medium transition"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${product.gradientFrom}, ${product.gradientTo})`,
                      }}
                    >
                      Rent Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA at bottom */}
        <div className="mt-20" ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-600 mb-6">
              Not sure which one to pick? Let our experts help you choose the
              perfect Mac.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transition duration-300 shadow-lg"
              style={{
                backgroundImage: PRIMARY_GRADIENT,
              }}
            >
              Get Expert Recommendation
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

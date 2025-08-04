"use client";

import { motion, useInView } from "framer-motion";
import {
  Laptop,
  Calendar,
  Download,
  Truck,
  Shield,
  HeadphonesIcon,
} from "lucide-react";
import { useRef } from "react";

export default function WhyRentFromUs() {
  const features = [
    {
      icon: Laptop,
      title: "Latest Apple Hardware",
      description:
        "Access to newest Mac models with cutting-edge M-series chips and latest macOS.",
      gradientFrom: "#006FE6",
      gradientTo: "#3BA7FF",
    },
    {
      icon: Calendar,
      title: "Flexible Rental Plans",
      description:
        "Daily, weekly, monthly, or yearly rentals with easy upgrade and extension options.",
      gradientFrom: "#6C4BFF",
      gradientTo: "#A58DFF",
    },
    {
      icon: Download,
      title: "Pre-installed Software",
      description:
        "Xcode, Adobe Creative Suite, Office 365, and other professional tools ready to use.",
      gradientFrom: "#009E4F",
      gradientTo: "#66D39D",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description:
        "Free delivery and setup across India with same-day service in major cities.",
      gradientFrom: "#FF9E00",
      gradientTo: "#FFD279",
    },
    {
      icon: Shield,
      title: "Data Wipe & Sanitization",
      description:
        "Complete data security with professional wiping and device sanitization.",
      gradientFrom: "#ED312A",
      gradientTo: "#FF6B6B",
    },
    {
      icon: HeadphonesIcon,
      title: "Tech Support Available Anytime",
      description:
        "24/7 technical support with immediate replacement for any hardware issues.",
      gradientFrom: "#003557",
      gradientTo: "#4F6E89",
    },
  ];

  // Section header animation
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef);

  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="why-rent" className="py-0 pb-32 bg-gray-50">
      <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#003557]">
            Why{" "}
            <span className="bg-gradient-to-r from-[#FF9E00] to-[#ED312A] bg-clip-text text-transparent">
              Rent
            </span>{" "}
            from Us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our comprehensive Mac rental service
            designed for modern businesses and professionals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {features.map((feature, index) => {
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  {/* Checkmark */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${feature.gradientFrom}, ${feature.gradientTo})`,
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${feature.gradientFrom}, ${feature.gradientTo})`,
                    }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

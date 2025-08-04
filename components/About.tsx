"use client";

import { motion, useInView } from "framer-motion";
import { Users, Award, Clock, Shield } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px",
  });

  const counters = [
    {
      number: "1000+",
      label: "Devices Delivered",
      icon: Award,
      gradient: "linear-gradient(135deg, #009E4F 0%, #66D39D 100%)",
      textGradient: "linear-gradient(135deg, #009E4F 0%, #66D39D 100%)",
    },
    {
      number: "200+",
      label: "Happy Clients",
      icon: Users,
      gradient: "linear-gradient(135deg, #FF9E00 0%, #FFD279 100%)",
      textGradient: "linear-gradient(135deg, #FF9E00 0%, #FFD279 100%)",
    },
    {
      number: "24x7",
      label: "Support Coverage",
      icon: Clock,
      gradient: "linear-gradient(135deg, #006FE6 0%, #3BA7FF 100%)",
      textGradient: "linear-gradient(135deg, #006FE6 0%, #3BA7FF 100%)",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div
        ref={ref}
        className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight pb-2 text-[#003557]">
            Who{" "}
            <span className="bg-gradient-to-r from-[#FF9E00] to-[#ED312A] bg-clip-text text-transparent">
              We
            </span>{" "}
            Are
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Flyers Connect is India's trusted Mac-only rental provider. We
            empower startups, remote teams, and enterprises with
            high-performance Apple devices—without the overhead cost of
            ownership. From configuration to doorstep delivery, we handle it
            all.
          </p>
        </motion.div>

        {/* Animated Counters */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: counter.gradient,
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <counter.icon className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <motion.div
                  className="text-4xl lg:text-5xl font-bold mb-2 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  style={{
                    background: counter.textGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {counter.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{counter.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #3BA7FF 0%, #6C4BFF 100%)",
            boxShadow: "0 20px 40px rgba(0, 111, 230, 0.3)",
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Trusted by India's Leading Companies
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              From Fortune 500 enterprises to innovative startups, we provide
              reliable Mac solutions that keep businesses running smoothly and
              teams productive.
            </p>
            <div className="flex items-center justify-center">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                style={{
                  background:
                    "linear-gradient(135deg, #3BA7FF 0%, #6C4BFF 100%)",
                }}
              >
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">
                Enterprise-Grade Security & Support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Rocket, Users, Palette, GraduationCap } from "lucide-react";

const useCases = [
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Teams",
    description:
      "Scalable Mac solutions for enterprise teams and project-based requirements.",
    features: [
      "Bulk rental discounts",
      "Centralized billing",
      "Enterprise security",
      "Remote device management",
    ],
    image: "/images/corporate.jpg",
    color: "#003557",
  },
  {
    id: "startups",
    icon: Rocket,
    title: "Startups",
    description:
      "Empower your startup with powerful Macs and flexible rental terms.",
    features: [
      "Flexible rental terms",
      "Upgrade options",
      "Early-stage pricing",
      "Pre-installed dev tools",
    ],
    image: "/images/startups.jpg",
    color: "#006FE6",
  },
  {
    id: "designers",
    icon: Palette,
    title: "Designers",
    description:
      "High-performance Macs for graphic, UI/UX, and visual designers.",
    features: [
      "Retina display Macs",
      "Adobe Suite pre-installed",
      "Color-calibrated systems",
      "Extended GPU support",
    ],
    image: "/images/designers.jpg",
    color: "#ED312A",
  },
  {
    id: "students",
    icon: GraduationCap,
    title: "Students",
    description:
      "Affordable Macs for academic projects and creative assignments.",
    features: [
      "Student discounts",
      "Short-term rentals",
      "Pre-installed education apps",
      "Tech support included",
    ],
    image: "/images/students.jpg",
    color: "#009E4F",
  },
  {
    id: "teams",
    icon: Users,
    title: "Remote Teams",
    description: "Enable your remote workforce with ready-to-go Mac kits.",
    features: [
      "Doorstep delivery",
      "Secure access setup",
      "Remote support",
      "Multi-location logistics",
    ],
    image: "/images/teams.jpg",
    color: "#FF9E00",
  },
];

export default function UseCases() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      ref={ref}
      id="features"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-20 px-4 bg-background w-11/12 md:w-10/12 mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight pb-2 text-[#003557]">
          Perfect for{" "}
          <span className="bg-gradient-to-r from-[#FF9E00] to-[#ED312A] bg-clip-text text-transparent">
            Every
          </span>{" "}
          Use Case
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
          From startups to enterprises, our Mac rental solutions are designed to
          meet diverse professional needs.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {useCases.map((useCase) => {
          const isActive = activeUseCase.id === useCase.id;
          return (
            <button
              key={useCase.id}
              onClick={() => setActiveUseCase(useCase)}
              className={`flex items-center px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                isActive
                  ? "text-white"
                  : `text-[${useCase.color}] bg-white border-[${useCase.color}]`
              }`}
              style={{
                backgroundColor: isActive ? useCase.color : "white",
                borderColor: useCase.color,
              }}
            >
              <useCase.icon className="w-4 h-4 mr-2" />
              {useCase.title}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: activeUseCase.color }}
          >
            {activeUseCase.title}
          </h3>
          <p className="mb-6 text-muted-foreground">
            {activeUseCase.description}
          </p>
          <ul className="space-y-2">
            {activeUseCase.features.map((feature) => (
              <li key={feature} className="flex items-center text-sm">
                <span
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: activeUseCase.color }}
                />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative rounded-xl overflow-hidden glass p-4">
            <img
              src={activeUseCase.image}
              alt={activeUseCase.title}
              className="w-full h-64 object-cover rounded-lg opacity-90"
            />
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: `linear-gradient(to top, ${activeUseCase.color}88, transparent)`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

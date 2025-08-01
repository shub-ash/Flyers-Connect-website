"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const testimonials = [
    {
      quote:
        "Flyers Connect delivered 15 MacBook Pros preloaded for our design team. Plug-and-play ready.",
      author: "Shruti D.",
      position: "Creative Director",
      company: "Design Studio Mumbai",
      rating: 5,
    },
    {
      quote:
        "Perfect for our remote onboarding. MacBooks arrived on time, configured, and supported.",
      author: "Ravi T.",
      position: "Tech Founder",
      company: "StartupXYZ",
      rating: 5,
    },
    {
      quote:
        "Exceptional service quality. The Mac Minis were perfect for our development team's needs.",
      author: "Priya S.",
      position: "CTO",
      company: "TechCorp India",
      rating: 5,
    },
    {
      quote:
        "Seamless experience from booking to return. Will definitely use again for future projects.",
      author: "Amit K.",
      position: "Project Manager",
      company: "Enterprise Solutions",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  return (
    <motion.section
      ref={ref}
      id="testimonials"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 to-slate-900"
      initial={isInView ? { opacity: 0, y: 40 } : {}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#FF9E00] to-[#ED312A] bg-clip-text text-transparent">
              Clients Say
            </span>{" "}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-blue-600" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-gray-800 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-blue-600 font-semibold mb-1">
                  {testimonials[currentIndex].position}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-400" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Features from "@/components/Features";
import WhyRentFromUs from "@/components/WhyRentFromUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ContactModal from "@/components/ContactModal";
import Chatbot from "@/components/Chatbot";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import UseCases from "@/components/Features";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyRentFromUs />
      <HowItWorks />

      <UseCases />
      <Testimonials />
      <Footer />
      <FloatingContact />
      <Chatbot />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  );
}

import { useEffect, useRef, useState } from "react";
import { Search, Clock, Truck, Laptop, RefreshCw } from "lucide-react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Select Your Mac",
    description:
      "Browse our premium collection and choose the perfect Mac for your needs.",
    color: "#006FE6",
  },
  {
    icon: Clock,
    title: "Choose Duration",
    description:
      "Pick your rental period - from days to months, we offer flexible plans.",
    color: "#009E4F",
  },
  {
    icon: Truck,
    title: "We Deliver & Configure",
    description:
      "Fast delivery with pre-installation of software based on your requirements.",
    color: "#ED312A",
  },
  {
    icon: Laptop,
    title: "Use Without Worry",
    description:
      "Enjoy your Mac with full support and peace of mind throughout the rental.",
    color: "#FF9E00",
  },
  {
    icon: RefreshCw,
    title: "Return or Extend Easily",
    description:
      "Simple return process or extend your rental period with just one click.",
    color: "#003557",
  },
];

const StepCard = ({
  step,
  index,
  isActive,
}: {
  step: (typeof steps)[0];
  index: number;
  isActive: boolean;
}) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Step Number */}

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500`}
        style={{
          backgroundColor: isActive ? `${step.color}20` : "#e0e0e0",
        }}
      >
        <step.icon
          className="w-8 h-8 transition-colors duration-500"
          style={{
            color: isActive ? step.color : "#999",
          }}
        />
      </div>

      {/* Content */}
      <div className="text-center max-w-xs">
        <h3
          className={`text-lg font-semibold mb-2 transition-colors duration-500`}
          style={{ color: isActive ? "#000" : "#888" }}
        >
          {step.title}
        </h3>
        <p
          className={`text-sm transition-colors duration-500`}
          style={{ color: isActive ? "#666" : "#aaa" }}
        >
          {step.description}
        </p>
      </div>

      {/* Connecting Line */}
      {index < steps.length - 1 && (
        <div className="absolute top-[30px] left-[64%] w-[79%] h-0.5 bg-border hidden lg:block">
          <div
            className="h-full transition-all duration-1000"
            style={{
              backgroundColor: step.color,
              width: isActive ? "100%" : "0%",
            }}
          />
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.3 }
    );

    if (animateRef.current) {
      observer.observe(animateRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={ref} id="howitworks" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          ref={animateRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={isVisible ? { duration: 0.6 } : {}}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#003557]">
            Simple{" "}
            <span className="bg-gradient-to-r from-[#FF9E00] to-[#ED312A] bg-clip-text text-transparent">
              Rental
            </span>{" "}
            Process
          </h2>
          <p className="text-lg pt-6 text-muted-foreground max-w-3xl mx-auto">
            Get your Mac rental in just 5 easy steps. Our streamlined process
            ensures you get what you need, when you need it.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={step}
                index={index}
                isActive={index <= activeStep}
              />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index <= activeStep ? step.color : "#ccc",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

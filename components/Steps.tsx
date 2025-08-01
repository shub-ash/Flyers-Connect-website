import { useEffect, useRef, useState } from "react";
import { Search, Clock, Truck, Laptop, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Select Your Mac",
    description:
      "Browse our premium collection and choose the perfect Mac for your needs.",
  },
  {
    icon: Clock,
    title: "Choose Duration",
    description:
      "Pick your rental period - from days to months, we offer flexible plans.",
  },
  {
    icon: Truck,
    title: "We Deliver & Configure",
    description:
      "Fast delivery with pre-installation of software based on your requirements.",
  },
  {
    icon: Laptop,
    title: "Use Without Worry",
    description:
      "Enjoy your Mac with full support and peace of mind throughout the rental.",
  },
  {
    icon: RefreshCw,
    title: "Return or Extend Easily",
    description:
      "Simple return process or extend your rental period with just one click.",
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
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-4 transition-all duration-500 ${
          isActive
            ? "bg-primary text-primary-foreground scale-110"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {index + 1}
      </div>

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
          isActive ? "bg-primary/10 scale-110" : "bg-muted/50"
        }`}
      >
        <step.icon
          className={`w-8 h-8 transition-colors duration-500 ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`}
        />
      </div>

      {/* Content */}
      <div className="text-center max-w-xs">
        <h3
          className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
            isActive ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`text-sm transition-colors duration-500 ${
            isActive ? "text-muted-foreground" : "text-muted-foreground/70"
          }`}
        >
          {step.description}
        </p>
      </div>

      {/* Connecting Line */}
      {index < steps.length - 1 && (
        <div className="absolute top-6 left-1/2 w-full h-0.5 bg-border hidden lg:block">
          <div
            className={`h-full bg-primary transition-all duration-1000 ${
              isActive ? "w-full" : "w-0"
            }`}
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={ref} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            Simple Rental Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-200">
            Get your Mac rental in just 5 easy steps. Our streamlined process
            ensures you get what you need, when you need it.
          </p>
        </div>

        {/* Steps Timeline */}
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

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= activeStep ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

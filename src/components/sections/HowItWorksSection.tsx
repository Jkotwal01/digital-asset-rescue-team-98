
import { FileText, Search, DollarSign } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Your Case",
      description: "Tell us what happened. Our secure form captures all the details we need to evaluate your situation.",
      step: "01"
    },
    {
      icon: Search,
      title: "We Investigate",
      description: "Our forensic team analyzes and traces your assets using advanced blockchain investigation tools.",
      step: "02"
    },
    {
      icon: DollarSign,
      title: "You Recover",
      description: "If we recover your funds, you pay only after success. No upfront fees for most cases.",
      step: "03"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            A Simple, Secure 3-Step Process
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to successful recovery, we guide you through every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group animate-slideInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-base sm:text-lg z-10">
                {step.step}
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 sm:p-8 pt-10 sm:pt-12 h-full group-hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

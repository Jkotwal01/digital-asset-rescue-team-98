
import { Wallet, HardDrive, ArrowLeftRight, Link2, Building, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatWeRecoverSection = () => {
  const services = [
    {
      icon: Wallet,
      title: "DeFi Wallet Unlock",
      description: "Get help in the recovery of access to your lost or locked DeFi Wallet."
    },
    {
      icon: HardDrive,
      title: "Hardware Wallet Recovery",
      description: "Help to unlock your hardware crypto wallet when you can't access it."
    },
    {
      icon: ArrowLeftRight,
      title: "Cross-Chain Transaction Recovery",
      description: "Recover funds sent to the wrong blockchain."
    },
    {
      icon: Link2,
      title: "On-Chain Transaction",
      description: "Restore lost or stuck funds on-chain."
    },
    {
      icon: Building,
      title: "Centralised Exchange",
      description: "Regain access and secure a locked or compromised exchange account."
    },
    {
      icon: Shield,
      title: "Scam Tracing",
      description: "Trace stolen crypto and investigate suspicious blockchain activities."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What We Recover
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Effortless Solutions for Complex Problems
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 group hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 animate-fadeInUp">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeRecoverSection;


import { Shield, Globe, Lock, Clock } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Trusted",
      description: "Operates under a UAE government license."
    },
    {
      icon: Globe,
      title: "Cross-Chain Experts",
      description: "Specialists in EVM chains, layer-2s, and multi-chain tracing."
    },
    {
      icon: Lock,
      title: "Privacy-Centric",
      description: "No private keys ever asked. NDA-backed, offline recovery."
    },
    {
      icon: Clock,
      title: "Global Support",
      description: "Serving clients worldwide with 24/7 assistance."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose BTCRecoveryPro?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

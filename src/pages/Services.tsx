
import { Wallet, HardDrive, ArrowLeftRight, Link2, Building, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Wallet,
      title: "DeFi Wallet Recovery",
      description: "Restore access to MetaMask, Trust Wallet, or dApp-based wallets with our advanced recovery techniques.",
      features: ["MetaMask recovery", "Trust Wallet restoration", "Missing seed phrase recovery", "Corrupted file repair"],
      cta: "Recover My Wallet",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Link2,
      title: "On-chain Transaction Recovery",
      description: "Trace and recover funds sent to wrong addresses with our blockchain analysis expertise.",
      features: ["Wrong address recovery", "Stuck transaction resolution", "Failed transfer analysis", "Chain analysis"],
      cta: "Start Tracing Now",
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: ArrowLeftRight,
      title: "Cross-chain Transaction Recovery",
      description: "Specialized recovery for assets lost between different blockchain networks and bridges.",
      features: ["ERC20 to BEP20 recovery", "Bridge failure resolution", "Wrong network transfers", "Multi-chain expertise"],
      cta: "Book a Specialist Call",
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: HardDrive,
      title: "Hardware Wallet Recovery",
      description: "Professional hardware wallet recovery through chip-level diagnostics and firmware analysis.",
      features: ["Ledger PIN recovery", "Trezor restoration", "Firmware repair", "Chip-level diagnostics"],
      cta: "Talk to Recovery Team",
      color: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Building,
      title: "Centralized Exchange Recovery",
      description: "Regain access to locked exchange accounts with our legal and technical support services.",
      features: ["Account unlock assistance", "KYC documentation help", "2FA reset guidance", "Legal letter support"],
      cta: "Contact for Exchange Support",
      color: "from-indigo-500/10 to-blue-500/10"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Wallet className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fadeInUp">
            Recovery Services
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fadeInUp">
            Lost Access? We'll Help You Get It Back—Securely and Legally.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-6 sm:p-8 lg:p-12 animate-fadeInUp">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Why Choose BTCRecoveryPro?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  We specialize in helping individuals and businesses recover access to lost, compromised, or inaccessible crypto assets using advanced blockchain forensics and ethical recovery methods.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm sm:text-base text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Cross-Chain Transaction Recovery Specialists</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Advanced Blockchain Forensics</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>UAE Licensed & Regulated</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground mb-4">Success Rate</div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Wallets Recovered</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">30+</div>
                      <div className="text-xs text-muted-foreground">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 animate-fadeInUp">
              Our Recovery Services
            </h2>
            <p className="text-lg text-muted-foreground animate-fadeInUp">
              Comprehensive solutions for every crypto recovery need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 sm:p-8 animate-fadeInUp hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    {service.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 sm:p-12 text-center animate-fadeInUp relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Recovery?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get expert guidance with no upfront fees. Our specialists are ready to help you recover your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Success Stories
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No upfront fees • 95% success rate • Licensed & trusted
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

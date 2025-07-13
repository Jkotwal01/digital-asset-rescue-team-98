
import { Search, FileText, Scale, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ScamTracing = () => {
  const services = [
    {
      icon: Search,
      title: "Blockchain Investigation",
      description: "Wallet trail, General Laundering route, Mixers."
    },
    {
      icon: FileText,
      title: "Scammer Profiling",
      description: "Behavioral map, transaction pattern, and risk scores."
    },
    {
      icon: Scale,
      title: "Legal Documentation",
      description: "Chain reports and recovery briefs for attorneys and enforcement."
    },
    {
      icon: Building,
      title: "Exchange Liaison",
      description: "If funds arrive at an exchange, submit official requests for recovery."
    }
  ];

  const deliverables = [
    "Full blockchain tracing report",
    "Templates to file complaints with police or FIR or legal",
    "Assistance with law firms and exchange compliance teams"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fadeInUp">
            Scam Tracing
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fadeInUp">
            Are You Being Scammed? We Trace It. We Prove It. We Fight for It.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 animate-fadeInUp">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At BTCRecoveryPro, we do not just track your stolen cryptocurrency: We empower you to fight for it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Using state-of-the-art blockchain forensic and chain analysis tools, we trace crypto scams on Bitcoin, Ethereum, BNB Chain, and other networks. From phishing schemes to rug pulls, we find out where your stuff went and set you up with a strong lawsuit to demand its return.
            </p>
          </div>
        </div>
      </section>

      {/* What We Trace */}
      <section className="py-16 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fadeInUp">
            What We Trace
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8 animate-fadeInUp">
            What You Get
          </h2>
          
          <div className="glass rounded-3xl p-8 md:p-12 animate-fadeInUp">
            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-center text-lg text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  {item}
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/10 rounded-xl">
              <p className="text-foreground font-semibold text-center">
                We are not just analysts; rather, professionals supporting victims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get a Scam Investigation Report
            </h2>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 animate-fadeInUp">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-card/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-card/50 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="scam-details" className="block text-sm font-medium text-foreground mb-2">
                  Scam Details *
                </label>
                <Textarea
                  id="scam-details"
                  placeholder="Please describe the scam, provide transaction IDs, wallet addresses, and any other relevant information..."
                  className="bg-card/50 border-border focus:border-primary min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg animate-glow"
              >
                Start Scam Investigation
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Processing fee: $200 (non-refundable) • Full forensic report included
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScamTracing;

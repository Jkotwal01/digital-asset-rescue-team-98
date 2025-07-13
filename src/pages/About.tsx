
import { Shield, Globe, Users, Award, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { icon: Users, label: "Wallets Recovered", value: "500+" },
    { icon: Award, label: "Success Rate", value: "95%" },
    { icon: Globe, label: "Countries Served", value: "30+" },
    { icon: CheckCircle, label: "Millions Restored", value: "$50M+" }
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Offline Recovery Environment",
      description: "No risk of your data being leaked online."
    },
    {
      icon: CheckCircle,
      title: "Ethical Practices",
      description: "Every process is secure, legal, and bound by NDAs."
    },
    {
      icon: Award,
      title: "Forensics-Grade Tools",
      description: "We use advanced methods to investigate, trace, and recover assets that others can't."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fadeInUp">
            About BTCRecoveryPro
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fadeInUp">
            To restore what's rightfully yours. BTCRecoveryPro exists to help individuals and organizations recover inaccessible crypto with integrity, discretion, and unmatched technical precision.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From forensic analysis to secure offline recovery, we bring global expertise and a results-first approach to every case—because your trust matters.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BTCRecoveryPro is a licensed, UAE-based crypto recovery firm trusted by clients across 30+ countries. Our expertise spans blockchain forensics, AI-powered tracing, and wallet decryption technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-slideInRight">
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-xl p-6 text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fadeInUp">
            What Makes Us Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8 md:p-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Start with Confidence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free evaluation—no upfront charges for recovery.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

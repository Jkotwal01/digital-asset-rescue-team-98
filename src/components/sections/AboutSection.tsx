
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slideInLeft">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              About BTCRecoveryPro
            </h2>
            
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                BTCRecoveryPro is a licensed crypto recovery firm based in the UAE, helping individuals and institutions worldwide reclaim lost digital assets.
              </p>
              
              <p>
                From hardware wallet unlocks to scam tracing and cross-chain recovery, we combine blockchain forensics with ethical expertise. No false promises—just results-driven recovery backed by transparency, privacy, and 24/7 global support.
              </p>
            </div>

            <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                Discover More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slideInRight mt-8 lg:mt-0">
            <div className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
              
              <div className="relative space-y-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Wallets Recovered</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card/50 rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">95%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-card/50 rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">30+</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-base sm:text-lg font-semibold text-foreground mb-1">UAE Licensed</div>
                  <div className="text-sm text-muted-foreground">Fully regulated & compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

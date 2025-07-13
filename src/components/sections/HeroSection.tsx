
import { ArrowRight, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Floating Bitcoin Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <Bitcoin className="absolute top-20 left-10 h-8 w-8 text-primary/20 animate-float" />
        <Bitcoin className="absolute top-40 right-20 h-6 w-6 text-primary/15 animate-bounce-slow" />
        <Bitcoin className="absolute bottom-32 left-1/4 h-10 w-10 text-primary/10 animate-float" />
        <Bitcoin className="absolute top-1/3 right-1/3 h-4 w-4 text-primary/25 animate-orbit" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6 sm:py-8 lg:py-12">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fadeInUp">
          {/* Main Headline */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block bg-gradient-to-r from-primary via-yellow-300 to-foreground bg-clip-text text-transparent">
                Lost Crypto?
              </span>
              <span className="block bg-gradient-to-r from-primary via-yellow-300 to-foreground bg-clip-text text-transparent">
                We Help You Get It Back.
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Experts in Blockchain Forensics & Asset Recovery
            </p>
          </div>

          {/* Central Bitcoin Animation - Smaller on mobile */}
          <div className="relative my-4 sm:my-6 lg:my-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 mx-auto relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg sm:blur-xl lg:blur-2xl animate-pulse"></div>
              <Bitcoin className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 text-primary animate-float mx-auto relative z-10" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-3 sm:space-y-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg animate-glow w-full sm:w-auto">
              Request Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground px-4">
              No upfront fees • 95% success rate • Licensed & trusted
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;


import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-card/50 to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="section-title font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground">
            Your assets deserve a second chance.
          </p>
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
              <label htmlFor="case-type" className="block text-sm font-medium text-foreground mb-2">
                Case Type *
              </label>
              <Select>
                <SelectTrigger className="bg-card/50 border-border focus:border-primary">
                  <SelectValue placeholder="Select your case type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="defi">DeFi Wallet Recovery</SelectItem>
                  <SelectItem value="hardware">Hardware Wallet Recovery</SelectItem>
                  <SelectItem value="cross-chain">Cross-Chain Recovery</SelectItem>
                  <SelectItem value="scam">Scam Tracing</SelectItem>
                  <SelectItem value="exchange">Exchange Recovery</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                Case Description *
              </label>
              <Textarea
                id="description"
                placeholder="Please describe your situation in detail..."
                className="bg-card/50 border-border focus:border-primary min-h-[120px]"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg animate-glow"
            >
              Start Your Recovery Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Free consultation • No upfront fees • 100% confidential
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

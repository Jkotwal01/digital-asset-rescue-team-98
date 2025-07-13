
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="section-title font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto animate-fadeInUp">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-primary fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
            "BTCRecoveryPro recovered my lost MetaMask funds in 48 hours. Transparent, professional, and life-saving!"
          </blockquote>
          
          <div className="text-muted-foreground">
            <p className="font-semibold">David H.</p>
            <p className="text-sm">United Kingdom</p>
          </div>
        </div>

        <div className="text-center mt-12 animate-fadeInUp">
          <Link to="/testimonials">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Read More Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

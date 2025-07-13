
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "David H.",
      location: "United Kingdom",
      text: "I genuinely thought my MetaMask funds were lost forever. BTCRecoveryPro recovered them in less than 48 hours. The truth is, I did not even expect them to work, but they did.",
      rating: 5
    },
    {
      name: "Priya S.",
      location: "India",
      text: "I had accidentally sent USDT through the wrong chain. Their team explained the entire process well and recovered it without strings attached. Very professional.",
      rating: 5
    },
    {
      name: "Luca M.",
      location: "Italy",
      text: "Even when the scammers tried to cover their trail, they still traced my ETH. With that forensic report, I was able to take legal action.",
      rating: 5
    },
    {
      name: "Raymond T.",
      location: "Singapore",
      text: "They tried recovering my Ledger after I forgot the PIN and messed up the backup; it wasn't fast, but they kept me in the loop all along. Worth every penny.",
      rating: 5
    },
    {
      name: "Nora M.",
      location: "Canada",
      text: "After being locked out from my Binance account, BTCRecoveryPro was my last hope. Their legal letter did the trick, and I could get back into it. Feeling grateful and relieved.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fadeInUp">
            What Our Clients Say
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fadeInUp">
            Real people. Real recoveries. Real results.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-muted-foreground text-center mb-12 animate-fadeInUp">
            Here's what our clients from around the world say about working with BTCRecoveryPro:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 text-center italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Rating Section */}
      <section className="py-16 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8 md:p-12 animate-fadeInUp">
            <div className="mb-6">
              <div className="text-6xl font-bold text-primary mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground">Based on 150+ verified reviews</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">48h</div>
                <div className="text-sm text-muted-foreground">Average Recovery Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

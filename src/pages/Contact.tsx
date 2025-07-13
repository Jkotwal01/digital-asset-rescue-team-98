
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "support@btcrecoverypro.com",
      description: "We respond within 12-24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Ajman Free Zone, UAE",
      description: "Licensed & regulated"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Global Support",
      description: "Always here when you need us"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fadeInUp">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fadeInUp">
            Let's Recover What's Yours
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our recovery experts will respond within 12–24 hours. Your information is treated with complete confidentiality and stored offline.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 animate-fadeInUp">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-card/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-card/50 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone / WhatsApp (Optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-card/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="recoveryType" className="block text-sm font-medium text-foreground mb-2">
                  Type of Recovery *
                </label>
                <Select>
                  <SelectTrigger className="bg-card/50 border-border focus:border-primary">
                    <SelectValue placeholder="Select recovery type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="defi">DeFi Wallet Recovery</SelectItem>
                    <SelectItem value="hardware">Hardware Wallet Recovery</SelectItem>
                    <SelectItem value="cross-chain">Cross-Chain Recovery</SelectItem>
                    <SelectItem value="on-chain">On-Chain Transaction</SelectItem>
                    <SelectItem value="exchange">Exchange Recovery</SelectItem>
                    <SelectItem value="scam">Scam Tracing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  Short Description of Issue *
                </label>
                <Textarea
                  id="description"
                  placeholder="Please provide a detailed description of your situation, including relevant wallet addresses, transaction IDs, or other pertinent information..."
                  className="bg-card/50 border-border focus:border-primary min-h-[120px]"
                  required
                />
              </div>

              <div>
                <label htmlFor="fileUpload" className="block text-sm font-medium text-foreground mb-2">
                  File Upload (Optional)
                </label>
                <Input
                  id="fileUpload"
                  type="file"
                  className="bg-card/50 border-border focus:border-primary"
                  accept=".jpg,.jpeg,.png,.pdf,.txt"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Upload wallet backups, screenshots, or relevant documents (Max 10MB)
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg animate-glow"
              >
                Send Inquiry
              </Button>
            </form>

            <div className="mt-6 p-4 bg-primary/10 rounded-xl">
              <p className="text-sm text-center text-muted-foreground">
                <strong>Privacy Notice:</strong> All information is encrypted and stored offline. We never share your data with third parties without explicit consent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

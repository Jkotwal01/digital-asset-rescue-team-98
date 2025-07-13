
import { Link } from "react-router-dom";
import { Bitcoin, Shield, Globe, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bitcoin className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">BTCRecoveryPro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Licensed crypto recovery firm helping individuals and institutions worldwide reclaim lost digital assets.
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Shield className="h-3 w-3" />
                <span>UAE Licensed</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="h-3 w-3" />
                <span>Global Support</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>24/7 Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">DeFi Wallet Recovery</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Hardware Wallet Recovery</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Cross-Chain Recovery</Link></li>
              <li><Link to="/scam-tracing" className="hover:text-primary transition-colors">Scam Tracing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Exchange Recovery</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>support@btcrecoverypro.com</p>
              <p>Ajman Free Zone</p>
              <p>United Arab Emirates</p>
              <p className="text-primary font-medium">24/7 Global Support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BTCRecoveryPro. All rights reserved. Licensed crypto recovery firm operating under UAE regulations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

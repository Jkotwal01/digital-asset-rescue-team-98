
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Privacy = () => {
  const highlights = [
    {
      icon: Shield,
      title: "We Never Collect Private Keys",
      description: "Your private keys, seed phrases, and passwords are never requested or stored."
    },
    {
      icon: Lock,
      title: "Offline Storage",
      description: "All case-related files are stored offline in encrypted, secure systems."
    },
    {
      icon: Eye,
      title: "No Third-Party Sharing",
      description: "We never sell, rent, or share your data with advertisers or third parties."
    },
    {
      icon: FileText,
      title: "NDA Protected",
      description: "All processes are governed by strict non-disclosure agreements."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fadeInUp">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground animate-fadeInUp">
            Effective Date: January 1, 2024
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your Privacy Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              BTCRecoveryPro is committed to safeguarding your privacy with the highest standards of security and confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 animate-fadeInUp">
            
            {/* Section 1 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">a) Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Phone Number (optional)</li>
                    <li>Country of Residence</li>
                    <li>Wallet address (for verification only, never accessed or controlled)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">b) Case-Related Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Recovery issue details (e.g., wallet type, transaction ID, chain involved)</li>
                    <li>Uploaded files (e.g., wallet backups, screenshots, transaction records)</li>
                    <li>Recovery preferences and communication logs</li>
                  </ul>
                </div>

                <div className="bg-primary/10 p-4 rounded-xl">
                  <p className="font-semibold text-foreground">
                    We never collect private keys, full seed phrases, passwords, or any credential that would give us control over your wallet or funds.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">We only use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Evaluate your case and deliver the requested recovery service</li>
                  <li>Communicate securely with you throughout the process</li>
                  <li>Create and maintain internal recovery records</li>
                  <li>Generate forensics or legal documentation (with your approval)</li>
                  <li>Improve our website and service offerings</li>
                </ul>
                <p className="mt-4 font-semibold">We do not use your information for marketing without explicit consent.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Storage & Protection</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All case-related files and client data are stored offline, in secure, encrypted systems.</li>
                <li>We retain your data only for as long as necessary to fulfill your request or comply with legal requirements.</li>
                <li>We use firewall protection, data encryption, and strict access control protocols.</li>
                <li>Staff access is granted on a need-to-know basis only and governed by NDAs.</li>
              </ul>
              <div className="bg-primary/10 p-4 rounded-xl mt-4">
                <p className="font-semibold text-foreground">
                  We never sell, rent, or share your data with third-party advertisers.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Rights</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw your consent at any time</li>
                  <li>Object to certain processing activities</li>
                  <li>Request data portability (where applicable)</li>
                </ul>
                <p className="mt-4">To exercise these rights, contact us at <span className="text-primary font-semibold">support@btcrecoverypro.com</span></p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">If you have questions, concerns, or data access requests, please contact:</p>
                <div className="bg-card/50 p-4 rounded-xl">
                  <p className="font-semibold text-foreground">BTCRecoveryPro</p>
                  <p>Email: support@btcrecoverypro.com</p>
                  <p>Ajman Free Zone, United Arab Emirates</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

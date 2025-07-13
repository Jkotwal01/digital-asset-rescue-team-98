
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is BTCRecoveryPro a legit and licensed recovery firm?",
      answer: "Yes. BTCRecoveryPro is a duly registered consulting agency in the United Arab Emirates. The company operates under an IT & network consultancy license issued at Ajman Free Zone, and the recovery processes are all under NDAs and client confidentiality guidelines."
    },
    {
      question: "Do I need to share my private keys or wallet passwords?",
      answer: "Never! Your privacy and security come first. We never ask for private keys or full access to your wallet. All our recovery operations happen offline in highly secure environments with non-invasive forensic techniques."
    },
    {
      question: "How much does the recovery service cost?",
      answer: "Our model is results-first. For most recovery cases, there are no upfront fees—you only pay 50% of the recovered amount after successful recovery. Scam tracing services, due to their complexity, require a non-refundable processing fee of $200."
    },
    {
      question: "Can you really recover funds sent to the wrong blockchain or address?",
      answer: "In most cases, yes. From USDT sent from ERC20 to BEP20 or assets getting stuck in improper cross-chain bridges, our specialists handle these situations technically and try to reclaim those lost tokens."
    },
    {
      question: "How long does the recovery process take?",
      answer: "Every case is different. A wallet recovery might take anywhere from 24 to 48 hours; tracking cases or cross-chain situations might take a few more days. We keep you updated with timelines based on your specific situation."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="section-title font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our crypto recovery services
          </p>
        </div>

        <div className="animate-fadeInUp">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-border"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

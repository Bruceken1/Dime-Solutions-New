import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does Dime Solutions offer?", a: "We offer a full suite of digital marketing services including SEO, Google Ads, social media marketing, content marketing, email marketing, web design, brand strategy, and video production." },
  { q: "How much do your services cost?", a: "Our pricing starts at KSh 50,000/month for the Starter package. We also offer Professional and Enterprise plans. Contact us for a custom quote tailored to your needs." },
  { q: "How long before I see results?", a: "SEO typically takes 3-6 months for significant results. PPC and social media campaigns can show results within the first month. We set clear expectations and milestones from day one." },
  { q: "Do you work with businesses outside Kenya?", a: "Yes! While we're headquartered in Kenya, we work with businesses across East Africa and beyond. Our strategies are tailored to each market." },
  { q: "Can I cancel my contract at any time?", a: "We believe in earning your business every month. Our contracts are flexible with 30-day notice periods. No long-term lock-ins." },
  { q: "How do you measure success?", a: "We track KPIs including organic traffic, lead generation, conversion rates, ROAS, and revenue growth. You'll receive detailed reports showing exactly how your investment is performing." },
];

const FAQ = () => (
  <div className="overflow-hidden">
    <section className="hero-gradient pt-32 pb-16 section-padding">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
          <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">FAQ</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-dark mb-6">Frequently Asked Questions</h1>
        </motion.div>
      </div>
    </section>
    <section className="section-dark section-padding">
      <div className="container-wide max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-[hsl(var(--navy-light)/0.3)] rounded-xl px-6 bg-[hsl(var(--navy)/0.5)]">
              <AccordionTrigger className="text-on-dark font-heading font-semibold text-left hover:text-cyan">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-on-dark-muted">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
);

export default FAQ;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  { name: "Starter", price: "KSh 50,000", period: "/month", desc: "Great for startups and small businesses", features: ["SEO Audit & Basic Optimization", "2 Social Media Platforms", "Monthly Blog Post", "Basic Analytics Setup", "Email Support", "Monthly Report"], cta: "Get Started" },
  { name: "Professional", price: "KSh 150,000", period: "/month", desc: "For growing businesses ready to scale", popular: true, features: ["Full SEO Strategy", "4 Social Media Platforms", "4 Blog Posts/Month", "Google Ads Management", "Email Marketing Setup", "Bi-Weekly Reporting", "Dedicated Account Manager", "Priority Support"], cta: "Most Popular" },
  { name: "Enterprise", price: "Custom", period: "", desc: "For large organizations needing full-scale solutions", features: ["Everything in Professional", "Custom Strategy & Research", "All Social Platforms", "Daily Content & Posting", "Advanced PPC Campaigns", "CRO & A/B Testing", "Weekly Strategy Calls", "24/7 Priority Support", "Custom Integrations"], cta: "Contact Us" },
];

const Pricing = () => (
  <div className="overflow-hidden">
    <section className="hero-gradient pt-32 pb-16 section-padding">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
          <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">Pricing</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-dark mb-6">Transparent Pricing, Real Results</h1>
          <p className="text-on-dark-muted text-lg">Choose the plan that fits your business. All plans include strategy, execution, and reporting.</p>
        </motion.div>
      </div>
    </section>
    <section className="section-dark section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl border relative ${plan.popular ? "border-cyan glow-cyan bg-[hsl(var(--navy)/0.8)]" : "border-[hsl(var(--navy-light)/0.3)] bg-[hsl(var(--navy)/0.5)]"}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-cyan rounded-full text-xs font-semibold text-accent-foreground">Recommended</div>}
              <h3 className="font-heading font-bold text-xl text-on-dark">{plan.name}</h3>
              <div className="flex items-baseline gap-1 my-4"><span className="text-4xl font-heading font-bold gradient-text">{plan.price}</span><span className="text-on-dark-muted text-sm">{plan.period}</span></div>
              <p className="text-sm text-on-dark-muted mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-on-dark"><Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />{f}</li>))}
              </ul>
              <Link to="/contact"><Button className={`w-full ${plan.popular ? "gradient-cyan text-accent-foreground" : "bg-[hsl(var(--navy-light))] text-on-dark hover:bg-[hsl(var(--navy-light)/0.8)]"}`}>{plan.cta} <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Pricing;

import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const serviceData: Record<string, { title: string; desc: string; features: string[]; process: string[] }> = {
  seo: { title: "Search Engine Optimization", desc: "Dominate Google with our proven SEO strategies. We combine technical expertise, content optimization, and strategic link building to drive sustainable organic growth.", features: ["Technical SEO Audit", "Keyword Research & Strategy", "On-Page Optimization", "Link Building", "Local SEO", "Monthly Reporting"], process: ["Audit & Analysis", "Strategy Development", "Implementation", "Monitor & Optimize"] },
  ppc: { title: "Google Ads & PPC", desc: "High-performance paid advertising campaigns that maximize your ROI across Google Search, Display, YouTube, and Shopping.", features: ["Campaign Strategy", "Ad Creative", "Bid Management", "A/B Testing", "Conversion Tracking", "Weekly Reporting"], process: ["Research", "Campaign Setup", "Launch & Test", "Scale Winners"] },
  "social-media": { title: "Social Media Marketing", desc: "Build engaged communities and drive brand awareness across Instagram, Facebook, LinkedIn, TikTok, and X.", features: ["Content Calendar", "Community Management", "Paid Social Ads", "Influencer Outreach", "Analytics & Insights", "Brand Voice Development"], process: ["Audit", "Strategy", "Content Creation", "Engage & Grow"] },
  content: { title: "Content Marketing", desc: "Strategic content that educates, engages, and converts. From blogs to whitepapers, we craft content that drives results.", features: ["Blog Writing", "Copywriting", "Whitepapers", "Case Studies", "Infographics", "Content Strategy"], process: ["Research", "Planning", "Creation", "Distribution"] },
  email: { title: "Email Marketing", desc: "Automated email flows and campaigns that nurture leads and drive conversions.", features: ["Email Strategy", "Template Design", "Automation Flows", "A/B Testing", "List Management", "Performance Analytics"], process: ["Audit", "Strategy", "Build & Launch", "Optimize"] },
  "web-design": { title: "Web Design & Development", desc: "Beautiful, fast, conversion-optimized websites that represent your brand and drive business results.", features: ["Custom Design", "Responsive Dev", "SEO-Friendly", "CMS Integration", "E-Commerce", "Speed Optimization"], process: ["Discovery", "Design", "Development", "Launch"] },
  "brand-strategy": { title: "Brand Strategy & Identity", desc: "Build a brand that stands out. From logo design to complete visual identity systems.", features: ["Brand Audit", "Logo Design", "Brand Guidelines", "Messaging", "Visual Identity", "Brand Collateral"], process: ["Discovery", "Strategy", "Design", "Deliver"] },
  video: { title: "Video & YouTube Marketing", desc: "Professional video content and YouTube strategy to tell your brand story.", features: ["Video Production", "YouTube Strategy", "Short-Form Content", "Thumbnails & SEO", "Analytics", "Paid Promotion"], process: ["Concept", "Production", "Post-Production", "Distribute"] },
};

const pricingTiers = [
  { name: "Starter", price: "KSh 50,000", desc: "Perfect for small businesses starting out", features: ["Basic strategy", "Monthly reporting", "Email support"] },
  { name: "Growth", price: "KSh 150,000", desc: "For growing businesses ready to scale", features: ["Advanced strategy", "Bi-weekly reporting", "Dedicated manager", "Priority support"], popular: true },
  { name: "Enterprise", price: "Custom", desc: "For large organizations with complex needs", features: ["Custom strategy", "Weekly reporting", "Team of specialists", "24/7 support", "Custom integrations"] },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ""] || serviceData.seo;

  return (
    <div className="overflow-hidden">
      <section className="hero-gradient pt-32 pb-16 section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <Link to="/services" className="text-cyan text-sm font-medium mb-4 inline-block hover:underline">← All Services</Link>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-dark mb-6">{service.title}</h1>
            <p className="text-on-dark-muted text-lg mb-8">{service.desc}</p>
            <Link to="/contact"><Button size="lg" className="gradient-cyan text-accent-foreground font-semibold glow-cyan">Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-wide">
          <SectionHeading label="What's Included" title="Key Features" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)]">
                <Check className="w-5 h-5 text-cyan flex-shrink-0" />
                <span className="text-on-dark text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy section-padding">
        <div className="container-wide">
          <SectionHeading label="Our Process" title="How We Work" light />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            {service.process.map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full gradient-cyan flex items-center justify-center mx-auto mb-2 font-heading font-bold text-accent-foreground">{i + 1}</div>
                  <p className="text-on-dark text-sm font-medium">{step}</p>
                </div>
                {i < service.process.length - 1 && <div className="hidden md:block w-16 h-px bg-[hsl(var(--navy-light))]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-wide">
          <SectionHeading label="Pricing" title="Choose Your Plan" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`p-6 rounded-2xl border ${tier.popular ? "border-cyan glow-cyan bg-[hsl(var(--navy)/0.8)]" : "border-[hsl(var(--navy-light)/0.3)] bg-[hsl(var(--navy)/0.5)]"}`}>
                {tier.popular && <span className="text-xs font-semibold text-cyan uppercase tracking-wider">Most Popular</span>}
                <h3 className="font-heading font-bold text-xl text-on-dark mt-1">{tier.name}</h3>
                <div className="text-3xl font-heading font-bold gradient-text my-3">{tier.price}</div>
                <p className="text-sm text-on-dark-muted mb-6">{tier.desc}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-on-dark"><Check className="w-4 h-4 text-cyan" />{f}</li>))}
                </ul>
                <Link to="/contact"><Button className={`w-full ${tier.popular ? "gradient-cyan text-accent-foreground" : "bg-[hsl(var(--navy-light))] text-on-dark hover:bg-[hsl(var(--navy-light)/0.8)]"}`}>Get Started</Button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

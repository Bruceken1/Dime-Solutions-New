import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Target, Share2, PenTool, Mail, Globe, BarChart3, Video, TrendingUp, Users, Award, Zap } from "lucide-react";
import { Helmet } from 'react-helmet';
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import brandSafaricom from "@/assets/brand-safaricom.png";
import brandKcb from "@/assets/brand-kcb.png";
import brandJumia from "@/assets/brand-jumia.png";
import brandTwiga from "@/assets/brand-twiga.png";
import brandMpesa from "@/assets/brand-mpesa.png";
import brandNcba from "@/assets/brand-ncba.png";

const brandLogos = [
  { name: "Safaricom", img: brandSafaricom },
  { name: "KCB Bank", img: brandKcb },
  { name: "Jumia", img: brandJumia },
  { name: "Twiga Foods", img: brandTwiga },
  { name: "M-Pesa", img: brandMpesa },
  { name: "NCBA", img: brandNcba },
];

const services = [
  { icon: Search, title: "SEO", desc: "Dominate search results and drive organic traffic that converts. Our SEO services in Kenya include keyword research, on-page optimization, and backlink building tailored for East African businesses." },
  { icon: Target, title: "Google Ads & PPC", desc: "High-performance paid campaigns with measurable ROI. We specialize in PPC advertising in Nairobi and Mombasa, optimizing for local search intent to maximize your ad spend." },
  { icon: Share2, title: "Social Media", desc: "Build engaged communities across all platforms. From Facebook to TikTok, our social media marketing strategies help Kenyan brands connect with audiences and drive conversions." },
  { icon: PenTool, title: "Content Marketing", desc: "Compelling content that educates, engages, and converts. We create blog posts, videos, and infographics optimized for digital marketing in East Africa." },
  { icon: Mail, title: "Email Marketing", desc: "Automated email flows that nurture leads into customers. Our email campaigns are designed for high open rates and conversions in the Kenyan market." },
  { icon: Globe, title: "Web Design & Dev", desc: "Stunning, high-converting websites and landing pages. We build responsive sites optimized for SEO and user experience in Kenya." },
  { icon: BarChart3, title: "Analytics & CRO", desc: "Data-driven optimization to maximize your conversions. Using tools like Google Analytics, we improve your site's performance for better ROI." },
  { icon: Video, title: "Video & YouTube", desc: "Professional video content that tells your brand story. We handle YouTube SEO and video production for East African businesses." },
];

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "500%", label: "Average ROI" },
  { value: "10M+", label: "Leads Generated" },
  { value: "50+", label: "Team Members" },
];

const portfolioItems = [
  { img: portfolio1, title: "TechHub Africa", category: "Web Design", result: "+340% Traffic" },
  { img: portfolio2, title: "Fashion Forward", category: "E-Commerce", result: "+280% Sales" },
  { img: portfolio3, title: "FinTech Kenya", category: "PPC Campaign", result: "12x ROAS" },
];

const testimonials = [
  { name: "Sarah Wanjiku", role: "CEO, TechHub Africa", text: "Dime Solutions transformed our online presence completely. Our organic traffic grew by 340% in just 6 months. They truly understand the East African market.", img: team2 },
  { name: "James Ochieng", role: "Founder, ShopLocal", text: "The ROI we've seen from their PPC campaigns is incredible. Every shilling invested has returned tenfold. Best marketing investment we've made.", img: team1 },
  { name: "David Kimani", role: "CTO, PayEasy", text: "Their technical SEO expertise is unmatched. They fixed issues other agencies couldn't even identify. Highly recommend for any serious business.", img: team3 },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Digital Marketing Agency Mombasa | SEO & PPC | Dime Solutions</title>
        <meta name="description" content="Boost business growth with data-driven digital marketing in East Africa, including SEO services in Mombasa, PPC in Nairobi, and social media strategies." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Home - Dime Solutions",
            "description": "Leading digital marketing agency in Kenya offering SEO, PPC, and more for business growth.",
            "url": "https://dime-solutions.co.ke/"
          })}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Digital marketing growth in Kenya background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(213,80%,5%)] via-transparent to-[hsl(213,80%,5%)]" />
        </div>
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-cyan text-sm font-semibold tracking-widest uppercase mb-6">
                <Zap className="w-4 h-4" /> East Africa's Growth Engine
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-on-dark leading-tight mb-6"
            >
              Digital Marketing Agency With a{" "}
              <span className="gradient-text">Data-Driven Approach</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-on-dark-muted max-w-xl mb-8 leading-relaxed"
            >
              Kenya's top Marketing Agency turning clicks into loyal customers. Boost your Revenue by up to 500% with SEO, PPC, social media, and custom strategies tailored for your business. As a leading digital marketing agency in Mombasa and Nairobi, we help SMEs and enterprises navigate the competitive online landscape. Our approaches include local SEO optimization, targeted PPC campaigns, and engaging social media content to drive measurable results like increased traffic, leads, and sales.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/free-audit">
                <Button size="lg" className="gradient-cyan text-accent-foreground font-semibold text-base px-8 hover:opacity-90 glow-cyan">
                  Get Free Audit <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-cyan/60 text-cyan hover:bg-cyan hover:text-accent-foreground font-semibold text-base px-8 transition-colors">
                  View Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-dark py-12 border-y border-[hsl(var(--navy-light)/0.2)]">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-center text-on-dark-muted text-sm mb-6 tracking-widest uppercase">Trusted by Leading Brands</p>
          <div className="overflow-hidden">
            <div className="flex items-center gap-12 md:gap-20 animate-marquee w-max">
              {[...brandLogos, ...brandLogos].map((brand, i) => (
                <img key={`${brand.name}-${i}`} src={brand.img} alt={`${brand.name} logo`} className="h-10 md:h-14 w-auto object-contain flex-shrink-0" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <SectionHeading label="What We Do" title="Services That Drive Growth" description="End-to-end digital marketing solutions tailored for the East African market. Our services help businesses in Kenya achieve sustainable online growth through proven strategies." light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link to="/services" className="block p-6 rounded-2xl bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)] card-hover group">
                  <div className="w-12 h-12 rounded-xl gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-on-dark mb-2">{service.title}</h3>
                  <p className="text-sm text-on-dark-muted leading-relaxed">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-on-dark-muted">In the competitive digital landscape of Kenya, our services ensure your business stands out. Whether you're in Mombasa seeking local SEO or in Nairobi needing PPC expertise, we deliver results with a focus on ROI and long-term growth. Contact us for a customized digital marketing plan.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-navy section-padding">
        <div className="container-wide">
          <SectionHeading label="Results That Matter" title="Why Choose Dime Solutions?" description="We don't just promise results — we deliver them. Here's our track record in digital marketing for Kenyan businesses." light />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-black gradient-text mb-2">{stat.value}</div>
                <p className="text-on-dark-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-on-dark-muted text-center">These stats reflect our commitment to excellence in digital marketing across East Africa, helping over 200 clients achieve exceptional growth through targeted SEO, PPC, and social strategies.</p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <SectionHeading label="Our Work" title="Featured Projects" description="Real results for real businesses. See how we've helped brands grow with our digital marketing services in Kenya." light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to="/portfolio" className="group block rounded-2xl overflow-hidden card-hover">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={item.img} alt={`${item.title} portfolio example in Kenya`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(213,80%,5%)] to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-cyan text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                      <h3 className="font-heading font-bold text-on-dark text-lg">{item.title}</h3>
                      <span className="text-sm text-cyan font-semibold">{item.result}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio">
              <Button variant="outline" className="border-cyan text-cyan hover:bg-cyan hover:text-accent-foreground">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-on-dark-muted">Our portfolio showcases successful digital marketing campaigns in Mombasa, Nairobi, and beyond, demonstrating our expertise in driving traffic and sales for diverse industries.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-navy section-padding">
        <div className="container-wide">
          <SectionHeading label="Client Love" title="What Our Clients Say" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)]"
              >
                <p className="text-on-dark-muted text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={`${t.name} testimonial photo`} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-heading font-semibold text-sm text-on-dark">{t.name}</p>
                    <p className="text-xs text-on-dark-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-on-dark-muted text-center">Hear from satisfied clients across Kenya who have benefited from our comprehensive digital marketing solutions.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Call to action background for digital marketing in Kenya" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-4">Ready to Transform Your Business?</h2>
            <p className="text-on-dark-muted mb-8 max-w-2xl mx-auto">Get a free digital marketing audit and discover how we can help your Kenyan business achieve 500% ROI. Contact our team in Mombasa or Nairobi today.</p>
            <Link to="/free-audit">
              <Button size="lg" className="gradient-cyan text-accent-foreground font-semibold text-base px-8 hover:opacity-90 glow-cyan">
                Claim Free Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

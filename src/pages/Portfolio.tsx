import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from 'react-helmet';
import SectionHeading from "@/components/SectionHeading";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  { img: portfolio1, title: "TechHub Africa", cat: "Web Design", result: "+340% Traffic", desc: "Complete website redesign and SEO overhaul for Kenya's leading tech hub. We implemented modern UI/UX, optimized for mobile users in East Africa, and integrated SEO best practices to boost organic search rankings. The result was a 340% increase in traffic within 6 months, with improved lead generation and user engagement. This project highlights our expertise in web design services in Kenya." },
  { img: portfolio2, title: "Fashion Forward", cat: "E-Commerce", result: "+280% Sales", desc: "End-to-end e-commerce strategy including PPC and social media. For this Nairobi-based fashion brand, we set up targeted Google Ads campaigns and Instagram shopping features, resulting in 280% sales growth. Our approach included audience segmentation for Kenyan shoppers and A/B testing for optimal performance." },
  { img: portfolio3, title: "FinTech Kenya", cat: "PPC Campaign", result: "12x ROAS", desc: "Google Ads campaign delivering exceptional return on ad spend. We managed PPC for this fintech startup in Mombasa, focusing on high-intent keywords and remarketing, achieving 12x ROAS and scaling their user base rapidly." },
  { img: portfolio1, title: "Safari Tours Ltd", cat: "SEO", result: "#1 Rankings", desc: "Dominated search results for competitive tourism keywords. Our SEO strategy for this Kenyan tour operator included content optimization and local backlinks, securing top rankings and increasing bookings by 200%." },
  { img: portfolio2, title: "Urban Eats", cat: "Social Media", result: "500K Followers", desc: "Built a massive social following for Nairobi's top food delivery app. Through engaging content and influencer partnerships, we grew their audience to 500K, driving app downloads and orders." },
  { img: portfolio3, title: "EduTech Plus", cat: "Content Marketing", result: "10K Leads/mo", desc: "Content strategy that generates thousands of qualified leads monthly. We created educational blogs and videos optimized for search, resulting in consistent lead flow for this edtech firm in East Africa." },
];

const Portfolio = () => (
  <div className="overflow-hidden">
    <Helmet>
      <title>Digital Marketing Portfolio | Case Studies Kenya | Dime Solutions</title>
      <meta name="description" content="View our successful digital marketing portfolio with case studies from SEO, PPC, and web design projects in Mombasa, Nairobi, and East Africa." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": projects.map((p, i) => ({
            "@type": "CreativeWork",
            "position": i + 1,
            "name": p.title,
            "description": p.desc
          }))
        })}
      </script>
    </Helmet>
    <section className="hero-gradient pt-32 pb-16 section-padding">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">Portfolio</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-on-dark mb-6">Our Work Speaks for Itself</h1>
          <p className="text-on-dark-muted text-lg">Real results for real businesses across East Africa, showcasing our digital marketing expertise in Kenya.</p>
        </motion.div>
      </div>
    </section>
    <section className="section-dark section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title + i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)] card-hover">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.img} alt={`${p.title} portfolio case study in Kenya`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(213,80%,5%)] to-transparent opacity-80" />
                <div className="absolute top-4 right-4"><span className="px-3 py-1 rounded-full bg-cyan/20 text-cyan text-xs font-semibold">{p.result}</span></div>
              </div>
              <div className="p-5">
                <span className="text-cyan text-xs font-semibold uppercase tracking-wider">{p.cat}</span>
                <h3 className="font-heading font-semibold text-on-dark mt-1">{p.title}</h3>
                <p className="text-sm text-on-dark-muted mt-2">{p.desc}</p>
                <Link to={`/portfolio/${p.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-1 text-cyan text-sm font-medium mt-3 hover:underline">
                  View Full Case Study <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Portfolio;

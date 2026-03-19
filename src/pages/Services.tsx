import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Target, Share2, PenTool, Mail, Globe, BarChart3, Video, TrendingUp, Palette, ArrowRight } from "lucide-react";
import { Helmet } from 'react-helmet';
import SectionHeading from "@/components/SectionHeading";

const allServices = [
  { icon: Search, title: "Search Engine Optimization", desc: "Dominate organic search results with technical SEO, content optimization, and link building strategies. Our SEO services in Kenya help businesses in Mombasa and Nairobi rank higher on Google, driving targeted traffic and increasing visibility. We conduct thorough keyword research, optimize on-page elements like titles and meta descriptions, and build high-quality backlinks to improve your site's authority. With a focus on local SEO, we ensure your business appears in relevant searches, leading to more leads and sales. Results include up to 300% traffic growth for clients.", path: "/services/seo" },
  { icon: Target, title: "Google Ads & PPC", desc: "High-ROI paid advertising campaigns across Google, YouTube, and Display networks. As experts in PPC in Kenya, we create targeted ads that reach your ideal audience in East Africa, optimizing bids and ad copy for maximum conversions. Our strategies include remarketing, A/B testing, and performance tracking to ensure every shilling spent delivers value. Clients see average ROAS of 10x or more.", path: "/services/ppc" },
  { icon: Share2, title: "Social Media Marketing", desc: "Build your brand and engage audiences on Instagram, Facebook, LinkedIn, TikTok, and X. Our social media marketing in Kenya involves content creation, community management, and paid social ads to grow your following and drive engagement. We tailor strategies for local markets, incorporating cultural insights for better resonance.", path: "/services/social-media" },
  { icon: PenTool, title: "Content Marketing", desc: "Strategic content creation including blogs, whitepapers, infographics, and copywriting. We produce SEO-optimized content that attracts and retains customers in the Kenyan digital space, boosting your thought leadership and search rankings.", path: "/services/content" },
  { icon: Mail, title: "Email Marketing", desc: "Automated email sequences, newsletters, and drip campaigns that convert. Our email marketing services in East Africa focus on personalization and segmentation for higher open and click rates.", path: "/services/email" },
  { icon: Globe, title: "Web Design & Development", desc: "Beautiful, fast, conversion-optimized websites and landing pages. We design responsive sites with SEO best practices built-in, ensuring fast load times and mobile-friendliness for Kenyan users.", path: "/services/web-design" },
  { icon: BarChart3, title: "Analytics & CRO", desc: "GA4 setup, conversion tracking, A/B testing, and data-driven optimization. We analyze user behavior to improve conversion rates, helping businesses in Kenya maximize their online performance.", path: "/services/analytics" },
  { icon: Video, title: "Video & YouTube Marketing", desc: "Professional video production, YouTube strategy, and short-form video content. We optimize videos for search and engagement, driving views and subscribers for East African brands.", path: "/services/video" },
  { icon: TrendingUp, title: "Influencer Marketing", desc: "Connect with relevant influencers to amplify your brand reach. Our influencer partnerships in Kenya help expand your audience authentically and cost-effectively.", path: "/services/influencer" },
  { icon: Palette, title: "Brand Strategy & Identity", desc: "Logo design, brand guidelines, messaging frameworks, and visual identity. We craft cohesive brands that resonate in the competitive Kenyan market.", path: "/services/brand-strategy" },
];

const Services = () => (
  <div className="overflow-hidden">
    <Helmet>
      <title>Digital Marketing Services Kenya | SEO, PPC, Social Media | Dime Solutions</title>
      <meta name="description" content="Expert digital marketing services in Kenya including SEO in Mombasa, PPC in Nairobi, social media, and web design for business growth." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Digital Marketing Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Dime Solutions"
          },
          "offers": allServices.map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title
            }
          }))
        })}
      </script>
    </Helmet>
    <section className="hero-gradient pt-32 pb-16 section-padding">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">Our Services</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-on-dark mb-6">Full-Stack Digital Marketing Solutions</h1>
          <p className="text-on-dark-muted text-lg">Everything you need to dominate your market online. From SEO to social media, we've got you covered with tailored strategies for Kenyan businesses seeking growth in East Africa.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-dark section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allServices.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to={service.path} className="flex gap-5 p-6 rounded-2xl bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)] card-hover group">
                <div className="w-14 h-14 rounded-xl gradient-cyan flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-on-dark mb-2 group-hover:text-cyan transition-colors">{service.title}</h3>
                  <p className="text-sm text-on-dark-muted leading-relaxed">{service.desc}</p>
                  <Link to={service.path} className="inline-flex items-center gap-1 text-cyan text-sm font-medium mt-3 hover:underline">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;

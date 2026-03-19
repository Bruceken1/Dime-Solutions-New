import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  {
    title: "10 SEO Strategies That Actually Work in 2025",
    cat: "SEO",
    date: "Feb 20, 2025",
    excerpt: "Discover the latest SEO tactics that are driving results for businesses in East Africa.",
    content: `Search engine optimization continues to evolve, and staying ahead requires adapting to new trends. Here are 10 strategies that are delivering real results in 2025:\n\n1. **AI-Optimized Content** — Create content that answers questions comprehensively using natural language.\n2. **Core Web Vitals Mastery** — Google rewards fast, stable, and responsive sites. Audit your performance regularly.\n3. **Local SEO Domination** — Optimize your Google Business Profile and gather genuine reviews.\n4. **Topic Clusters** — Build pillar pages with supporting content to establish topical authority.\n5. **Video SEO** — Embed optimized videos on key pages to boost engagement and rankings.\n6. **E-E-A-T Signals** — Showcase expertise, experience, authoritativeness, and trustworthiness across your site.\n7. **Zero-Click Optimization** — Structure content for featured snippets and knowledge panels.\n8. **Mobile-First Indexing** — Ensure every element works flawlessly on mobile devices.\n9. **Strategic Internal Linking** — Guide users and search engines through your content hierarchy.\n10. **Performance Analytics** — Use data-driven insights to refine your strategy continuously.\n\nImplementing these strategies consistently can dramatically improve your organic visibility in the competitive East African market.`,
  },
  {
    title: "How to Create a Social Media Strategy That Converts",
    cat: "Social Media",
    date: "Feb 15, 2025",
    excerpt: "A step-by-step guide to building a social media presence that drives real business results.",
    content: `Building a social media strategy that actually converts requires more than just posting regularly. Here's a framework that works:\n\n**Define Your Goals** — Are you driving traffic, generating leads, or building brand awareness? Each goal requires a different approach.\n\n**Know Your Audience** — Use platform analytics and customer research to understand demographics, interests, and online behavior.\n\n**Choose the Right Platforms** — Not every platform suits every business. Focus on where your audience spends time. In Kenya, Instagram, TikTok, and LinkedIn are seeing massive growth.\n\n**Content Mix** — Follow the 80/20 rule: 80% value-driven content (education, entertainment, inspiration) and 20% promotional content.\n\n**Engagement Strategy** — Respond to comments within an hour, engage with your community's content, and use polls/questions to drive interaction.\n\n**Paid Amplification** — Boost your best-performing organic content to reach new audiences with targeted ads.\n\n**Measure & Iterate** — Track conversion metrics (not just vanity metrics) and adjust your strategy monthly based on data.`,
  },
  {
    title: "Google Ads vs. Meta Ads: Which Is Right for You?",
    cat: "PPC",
    date: "Feb 10, 2025",
    excerpt: "Comparing the two biggest advertising platforms to help you decide where to invest.",
    content: `Choosing between Google Ads and Meta Ads depends on your business model, audience, and goals. Here's a detailed comparison:\n\n**Google Ads** excels at capturing demand — people actively searching for your product or service. It's ideal for high-intent keywords, local businesses, and B2B services. The cost-per-click can be higher, but conversion rates tend to be strong.\n\n**Meta Ads** (Facebook & Instagram) are powerful for generating demand — reaching people who don't yet know they need you. The visual format is perfect for e-commerce, lifestyle brands, and awareness campaigns.\n\n**When to Use Google Ads:**\n- Your product solves an urgent problem\n- People are actively searching for your service\n- You want to target specific search queries\n\n**When to Use Meta Ads:**\n- You have a visually appealing product\n- You want to build brand awareness\n- You're targeting specific demographics or interests\n\n**The Best Approach?** Use both. Start with whichever aligns with your immediate goals, then expand to the other as your budget grows. In the East African market, we've seen the highest ROI from combining both platforms strategically.`,
  },
  {
    title: "Email Marketing Automation: A Complete Guide",
    cat: "Email Marketing",
    date: "Feb 5, 2025",
    excerpt: "Learn how to set up automated email flows that nurture leads while you sleep.",
    content: `Email marketing automation is one of the highest-ROI channels available. Here's how to set up flows that convert:\n\n**Welcome Series** — A 3-5 email sequence that introduces new subscribers to your brand, delivers value, and makes a soft offer.\n\n**Abandoned Cart Recovery** — For e-commerce, this single automation can recover 10-15% of lost sales. Send the first email within 1 hour.\n\n**Lead Nurturing Sequences** — Educate prospects over 7-14 days with valuable content before presenting your offer.\n\n**Re-engagement Campaigns** — Target inactive subscribers with a compelling reason to come back.\n\n**Post-Purchase Follow-up** — Request reviews, suggest complementary products, and build loyalty.\n\n**Key Metrics to Track:**\n- Open rate (aim for 20%+)\n- Click-through rate (aim for 3%+)\n- Conversion rate\n- Unsubscribe rate (keep below 0.5%)\n\n**Tools We Recommend:** Mailchimp, ConvertKit, or ActiveCampaign — each offers excellent automation features suitable for businesses in Kenya and East Africa.`,
  },
  {
    title: "The Rise of Short-Form Video in Kenya",
    cat: "Trends",
    date: "Jan 30, 2025",
    excerpt: "How TikTok and Instagram Reels are reshaping digital marketing in East Africa.",
    content: `Short-form video has exploded in Kenya, with TikTok and Instagram Reels leading the charge. Here's what marketers need to know:\n\n**The Numbers** — TikTok usage in Kenya grew by 180% in 2024, with the average user spending 52 minutes per day on the platform.\n\n**Why It Works** — Short-form video captures attention instantly. The algorithm rewards engaging content regardless of follower count, making it the most democratic platform for brand growth.\n\n**Content That Performs in Kenya:**\n- Behind-the-scenes business content\n- Educational tips and how-tos\n- Trending sounds with local flair\n- Customer testimonials and success stories\n- Day-in-the-life content\n\n**Production Tips:**\n- You don't need expensive equipment — a smartphone with good lighting is enough\n- Hook viewers in the first 2 seconds\n- Use captions (many people watch without sound)\n- Post consistently (3-5 times per week minimum)\n\n**For Businesses** — The opportunity is massive. Early adopters in the Kenyan market are seeing incredible organic reach. The key is authenticity — polished, overly produced content actually performs worse than genuine, relatable videos.`,
  },
  {
    title: "Content Marketing ROI: How to Measure What Matters",
    cat: "Content",
    date: "Jan 25, 2025",
    excerpt: "The key metrics you should be tracking to prove your content marketing is working.",
    content: `Measuring content marketing ROI doesn't have to be complicated. Focus on these key areas:\n\n**Traffic Metrics:**\n- Organic traffic growth (month-over-month)\n- Page views per content piece\n- Traffic sources breakdown\n\n**Engagement Metrics:**\n- Average time on page (aim for 3+ minutes)\n- Scroll depth (are people reading the full article?)\n- Social shares and comments\n\n**Conversion Metrics:**\n- Lead generation from content (forms, downloads)\n- Content-assisted conversions in your funnel\n- Email subscriber growth from blog content\n\n**Revenue Metrics:**\n- Customer acquisition cost from content vs. paid channels\n- Lifetime value of content-acquired customers\n- Revenue attributed to content touchpoints\n\n**How to Calculate ROI:**\nROI = (Revenue from Content - Cost of Content) / Cost of Content × 100\n\nInclude all costs: writer fees, design, tools, distribution, and your team's time.\n\n**Pro Tip:** Content marketing compounds over time. A blog post written today can generate leads for years. Track cumulative value, not just immediate returns. In our experience with East African businesses, content marketing delivers the best ROI after 6-12 months of consistent effort.`,
  },
];

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      <section className="hero-gradient pt-32 pb-16 section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">Blog & Resources</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-dark mb-6">Insights & Strategies</h1>
            <p className="text-on-dark-muted text-lg">Expert tips, industry insights, and actionable strategies to grow your business online.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  layout
                  className={`p-6 rounded-2xl bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)] card-hover group cursor-pointer ${isExpanded ? "md:col-span-2 lg:col-span-3" : ""}`}
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                >
                  <span className="text-cyan text-xs font-semibold uppercase tracking-wider">{post.cat}</span>
                  <h3 className="font-heading font-semibold text-on-dark mt-2 mb-3 group-hover:text-cyan transition-colors">{post.title}</h3>
                  <p className="text-sm text-on-dark-muted leading-relaxed mb-4">{post.excerpt}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-[hsl(var(--navy-light)/0.3)]">
                          {post.content.split("\n\n").map((paragraph, pi) => (
                            <p key={pi} className="text-sm text-on-dark-muted leading-relaxed mb-3 whitespace-pre-line">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-on-dark-muted">{post.date}</span>
                    <span className="text-cyan text-xs font-medium flex items-center gap-1">
                      {isExpanded ? <>Read Less <ChevronUp className="w-3 h-3" /></> : <>Read More <ChevronDown className="w-3 h-3" /></>}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

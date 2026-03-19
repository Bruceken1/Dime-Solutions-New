import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Lightbulb, Heart, Shield, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import aboutHero from "@/assets/about-hero.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is designed to deliver measurable ROI." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of trends to give you a competitive edge." },
  { icon: Heart, title: "Client-First", desc: "Your success is our success. We're partners, not vendors." },
  { icon: Shield, title: "Transparency", desc: "Clear reporting and honest communication, always." },
];

const team = [
  { name: "Ken Kaibe", role: "CEO & Founder", img: team1 },
  { name: "Amina Hassan", role: "Head of Strategy", img: team2 },
  { name: "Brian Otieno", role: "Creative Director", img: team3 },
  { name: "Grace Kirwa", role: "SEO Lead", img: team2 },
  { name: "Kevin Ouma", role: "PPC Specialist", img: team1 },
  { name: "Faith Kerubo", role: "Social Media Manager", img: team3 },
];

const About = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center hero-gradient">
      <div className="absolute inset-0"><img src={aboutHero} alt="" className="w-full h-full object-cover opacity-20" /><div className="absolute inset-0 bg-gradient-to-b from-[hsl(213,80%,5%)] via-transparent to-[hsl(213,80%,5%)]" /></div>
      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">About Us</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-on-dark mb-6">We're on a Mission to Grow East Africa Digitally</h1>
          <p className="text-on-dark-muted text-lg">Founded in Mombasa, Dime Solutions is a full-service digital marketing agency helping businesses across Kenya and East Africa scale their online presence.</p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-dark section-padding">
      <div className="container-wide">
        <SectionHeading label="Our Values" title="What Drives Us" light />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)] text-center">
              <div className="w-12 h-12 rounded-xl gradient-cyan flex items-center justify-center mx-auto mb-4"><v.icon className="w-6 h-6 text-accent-foreground" /></div>
              <h3 className="font-heading font-semibold text-on-dark mb-2">{v.title}</h3>
              <p className="text-sm text-on-dark-muted">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-navy section-padding">
      <div className="container-wide">
        <SectionHeading label="Our Team" title="Meet the Experts" description="A passionate team of digital marketers, designers, and strategists." light />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)] card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-on-dark">{member.name}</h3>
                <p className="text-sm text-cyan">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Locations */}
    <section className="section-dark section-padding">
      <div className="container-wide">
        <SectionHeading label="Our Presence" title="Proudly East African" description="Headquartered in Mombasa with offices in Nairobi." light />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[{ city: "Mombasa", desc: "Headquarters – Nyali Business Center" }, { city: "Nairobi", desc: "Westlands, The Oval Building" }].map((loc) => (
            <div key={loc.city} className="p-6 rounded-2xl bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-cyan flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-accent-foreground" /></div>
              <div><h3 className="font-heading font-semibold text-on-dark">{loc.city}</h3><p className="text-sm text-on-dark-muted">{loc.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;

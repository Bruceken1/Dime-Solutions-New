import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Full SEO & technical site audit",
  "Google Ads account review",
  "Social media presence analysis",
  "Competitor gap analysis",
  "Personalised growth recommendations",
];

export default function FreeAudit() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "", contactName: "", email: "", phone: "", industry: "", auditNotes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.error || "Failed to submit request");
      toast({ title: "Request received!", description: "We'll review your details and reach out within 24 hours." });
      setFormData({ companyName: "", contactName: "", email: "", phone: "", industry: "", auditNotes: "" });
    } catch (err: any) {
      toast({ variant: "destructive", title: "Error", description: err.message || "Failed to submit. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="hero-gradient pt-32 pb-16 section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">Free Audit</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-dark mb-6">Get Your Free Digital Audit</h1>
            <p className="text-on-dark-muted text-lg">Let our experts analyse your digital presence and deliver a personalised roadmap — at no cost.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-wide max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading label="What You Get" title="Your Free Audit Includes" light />
              <ul className="mt-6 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-on-dark-muted">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-on-dark-muted text-sm">
                Delivered within <strong className="text-on-dark">2–3 business days</strong>. No commitment required.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                <Input placeholder="Your Name *" name="contactName" value={formData.contactName} onChange={handleChange} required className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                <Input type="email" placeholder="Email Address *" name="email" value={formData.email} onChange={handleChange} required className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                <Input type="tel" placeholder="Phone (optional)" name="phone" value={formData.phone} onChange={handleChange} className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                <Input placeholder="Industry (optional)" name="industry" value={formData.industry} onChange={handleChange} className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                <Textarea placeholder="Anything specific you'd like us to look at?" name="auditNotes" rows={4} value={formData.auditNotes} onChange={handleChange} className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                <Button type="submit" disabled={loading} className="w-full gradient-cyan text-accent-foreground font-semibold glow-cyan">
                  {loading ? "Submitting..." : "Request Free Audit"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

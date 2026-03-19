import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SectionHeading from "@/components/SectionHeading";

const positions = [
  { title: "Senior SEO Specialist", location: "Mombasa / Remote", type: "Full-time" },
  { title: "Social Media Manager", location: "Nairobi", type: "Full-time" },
  { title: "Content Writer", location: "Remote", type: "Contract" },
  { title: "Google Ads Specialist", location: "Mombasa", type: "Full-time" },
  { title: "UI/UX Designer", location: "Nairobi / Remote", type: "Full-time" },
];

const Careers = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", position: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("career_applications").insert({
        name: form.name,
        email: form.email,
        position: form.position || null,
        message: form.message || null,
      });
      if (error) throw error;

      await supabase.functions.invoke("notify-submission", {
        body: { type: "career", data: form },
      });

      toast({ title: "Application submitted!", description: "We'll review your application and get back to you soon." });
      setForm({ name: "", email: "", position: "", message: "" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="hero-gradient pt-32 pb-16 section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">Careers</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-dark mb-6">Join Our Growing Team</h1>
            <p className="text-on-dark-muted text-lg">Help us shape the future of digital marketing in East Africa.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-dark section-padding">
        <div className="container-wide max-w-4xl">
          <SectionHeading label="Open Positions" title="Current Opportunities" light />
          <div className="space-y-4 mb-16">
            {positions.map((pos) => (
              <div key={pos.title} className="p-5 rounded-xl bg-[hsl(var(--navy)/0.5)] border border-[hsl(var(--navy-light)/0.3)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading font-semibold text-on-dark">{pos.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-on-dark-muted">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{pos.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{pos.type}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-cyan text-cyan hover:bg-cyan hover:text-accent-foreground flex-shrink-0">Apply Now</Button>
              </div>
            ))}
          </div>
          <SectionHeading label="Apply" title="Send Your Application" light />
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
            <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
            <Input placeholder="Position you're applying for" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
            <Textarea placeholder="Tell us about yourself..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
            <Button type="submit" disabled={loading} className="gradient-cyan text-accent-foreground font-semibold w-full glow-cyan">
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;

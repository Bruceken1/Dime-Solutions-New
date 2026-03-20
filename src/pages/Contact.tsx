import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail,   label: "Email",   value: "support@dime-solutions.co.ke" },
  { icon: Phone,  label: "Phone",   value: "+254 740 413 951" },
  { icon: MapPin, label: "Mombasa", value: "Nyali Business Center" },
  { icon: MapPin, label: "Nairobi", value: "Westlands, The Oval Building" },
  { icon: Clock,  label: "Hours",   value: "Mon – Fri, 9 AM – 5 PM" },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
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
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.error || "Failed to send message");
      toast({ title: "Message sent!", description: "Thank you for reaching out. We'll get back to you soon." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: any) {
      toast({ variant: "destructive", title: "Error", description: err.message || "Failed to send. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="hero-gradient pt-32 pb-16 section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">Contact</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-dark mb-6">Let's Talk</h1>
            <p className="text-on-dark-muted text-lg">Ready to grow your business? Reach out and let's build something great together.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-wide max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading label="Get In Touch" title="Contact Information" light />
              <div className="space-y-5 mt-6">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label + value} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(var(--navy)/0.6)] border border-[hsl(var(--navy-light)/0.3)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-on-dark-muted uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                      <p className="text-on-dark text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                  <Input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                </div>
                <Input type="tel" placeholder="Phone (optional)" name="phone" value={formData.phone} onChange={handleChange} className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                <Textarea placeholder="Your Message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted" />
                <Button type="submit" disabled={loading} className="w-full gradient-cyan text-accent-foreground font-semibold glow-cyan">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

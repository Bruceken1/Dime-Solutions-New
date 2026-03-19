import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark text-on-dark border-t border-[hsl(var(--navy-light)/0.3)]">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-cyan flex items-center justify-center font-heading font-black text-accent-foreground text-sm">D</div>
              <span className="font-heading font-bold text-lg">Dime Solutions</span>
            </div>
            <p className="text-on-dark-muted text-sm leading-relaxed mb-6">
              Turning clicks into customers. We help businesses across East Africa scale their digital presence with data-driven marketing strategies.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, url: "https://www.instagram.com/dime_solutions/" },
                { Icon: Linkedin, url: "https://www.linkedin.com/company/dime-marketing-solutions-ltd" },
                { Icon: Facebook, url: "https://web.facebook.com/people/Dime-Solutions-LTD/61587798872622/" },
                { Icon: Twitter, url: "https://x.com/dimesolutionske" },
              ].map(({ Icon, url }, i) => (
                <a key={i} href={url} className="w-9 h-9 rounded-lg bg-[hsl(var(--navy-light)/0.4)] flex items-center justify-center text-on-dark-muted hover:text-cyan hover:bg-[hsl(var(--navy-light)/0.7)] transition-colors" target="_blank" rel="noopener noreferrer">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-on-dark-muted">
              {["SEO", "Google Ads & PPC", "Social Media Marketing", "Content Marketing", "Email Marketing", "Web Design & Dev", "Brand Strategy"].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-cyan transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-on-dark-muted">
              {[
                { name: "About Us", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Blog", path: "/blog" },
                { name: "Careers", path: "/careers" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
              ].map((l) => (
                <li key={l.name}><Link to={l.path} className="hover:text-cyan transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-on-dark-muted">
              <li className="flex gap-2"><MapPin className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" /> Mombasa, Kenya</li>
              <li className="flex gap-2"><MapPin className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" /> Nairobi, Kenya</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 text-cyan flex-shrink-0" /> +254 740-413-951</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 text-cyan flex-shrink-0" /> info@dime-solutions.co.ke</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[hsl(var(--navy-light)/0.3)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-dark-muted">
          <p>© 2026 Dime Solutions. All rights reserved.</p>
          <p>Digital Marketing That Delivers ROI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

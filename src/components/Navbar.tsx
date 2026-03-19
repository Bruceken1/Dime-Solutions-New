import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

const services = [
  { name: "SEO", path: "/services/seo" },
  { name: "Google Ads & PPC", path: "/services/ppc" },
  { name: "Social Media Marketing", path: "/services/social-media" },
  { name: "Content Marketing", path: "/services/content" },
  { name: "Email Marketing", path: "/services/email" },
  { name: "Web Design & Dev", path: "/services/web-design" },
  { name: "Brand Strategy", path: "/services/brand-strategy" },
  { name: "Video & YouTube", path: "/services/video" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", children: services },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-dark shadow-lg" : "bg-transparent"}`}>
      <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-lg text-on-dark">Dime Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-md ${location.pathname === link.path ? "text-cyan" : "text-on-dark-muted hover:text-on-dark"}`}
              >
                {link.name}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="nav-dark rounded-xl p-2 min-w-[220px] shadow-2xl border border-[hsl(var(--border))]">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-3 py-2 text-sm text-on-dark-muted hover:text-cyan hover:bg-[hsl(var(--navy-light)/0.3)] rounded-lg transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/free-audit">
            <Button variant="outline" size="sm" className="border-cyan text-cyan hover:bg-cyan hover:text-accent-foreground font-medium">
              Free Audit
            </Button>
          </Link>
          {user ? (
            <Button size="sm" variant="outline" onClick={signOut} className="border-[hsl(var(--navy-light)/0.5)] text-on-dark-muted hover:text-on-dark font-medium">
              <LogOut className="w-4 h-4 mr-1" /> Sign Out
            </Button>
          ) : (
            <Link to="/auth">
              <Button size="sm" className="gradient-cyan text-accent-foreground font-medium hover:opacity-90">
                <LogIn className="w-4 h-4 mr-1" /> Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-on-dark p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden nav-dark border-t border-[hsl(var(--border))]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 text-on-dark-muted hover:text-on-dark text-sm font-medium"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 space-y-1">
                          {link.children.map((child) => (
                            <Link key={child.path} to={child.path} className="block px-3 py-1.5 text-sm text-on-dark-muted hover:text-cyan">
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={link.path} className="block px-3 py-2 text-on-dark-muted hover:text-on-dark text-sm font-medium">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <Link to="/free-audit">
                  <Button variant="outline" className="w-full border-cyan text-cyan">Free Audit</Button>
                </Link>
                {user ? (
                  <Button onClick={signOut} variant="outline" className="w-full border-[hsl(var(--navy-light)/0.5)] text-on-dark-muted">
                    <LogOut className="w-4 h-4 mr-1" /> Sign Out
                  </Button>
                ) : (
                  <Link to="/auth">
                    <Button className="w-full gradient-cyan text-accent-foreground">
                      <LogIn className="w-4 h-4 mr-1" /> Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

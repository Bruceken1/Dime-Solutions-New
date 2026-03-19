import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [dismissed, setDismissed] = useState(() => localStorage.getItem("cookies_accepted") === "true");

  if (dismissed) return null;

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <div className="container-wide nav-dark rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-[hsl(var(--navy-light)/0.3)] shadow-2xl">
          <p className="text-sm text-on-dark-muted text-center md:text-left">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Button variant="ghost" size="sm" className="text-on-dark-muted hover:text-on-dark" onClick={accept}>Decline</Button>
            <Button size="sm" className="gradient-cyan text-accent-foreground" onClick={accept}>Accept</Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;

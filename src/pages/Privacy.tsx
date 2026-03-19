import { motion } from "framer-motion";

const Privacy = () => (
  <div className="overflow-hidden">
    <section className="hero-gradient pt-32 pb-16 section-padding">
      <div className="container-wide"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-dark mb-6">Privacy Policy</h1>
        <p className="text-on-dark-muted">Last updated: February 2025</p>
      </motion.div></div>
    </section>
    <section className="section-dark section-padding">
      <div className="container-wide max-w-3xl prose prose-invert prose-sm">
        <div className="space-y-6 text-on-dark-muted leading-relaxed">
          <p>At Dime Solutions, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          <h3 className="font-heading font-semibold text-on-dark text-lg">Information We Collect</h3>
          <p>We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
          <h3 className="font-heading font-semibold text-on-dark text-lg">How We Use Your Information</h3>
          <p>We use personal information collected via our website for a variety of business purposes including: to provide and maintain our service, to notify you about changes, to provide customer support, and to gather analysis to improve our service.</p>
          <h3 className="font-heading font-semibold text-on-dark text-lg">Contact Us</h3>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@dimesolutions.co.ke.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Privacy;

import { motion } from "framer-motion";

const Terms = () => (
  <div className="overflow-hidden">
    <section className="hero-gradient pt-32 pb-16 section-padding">
      <div className="container-wide"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-on-dark mb-6">Terms of Service</h1>
        <p className="text-on-dark-muted">Last updated: February 2025</p>
      </motion.div></div>
    </section>
    <section className="section-dark section-padding">
      <div className="container-wide max-w-3xl">
        <div className="space-y-6 text-on-dark-muted leading-relaxed">
          <p>These Terms of Service govern your use of the Dime Solutions website and services. By accessing our website, you agree to be bound by these Terms.</p>
          <h3 className="font-heading font-semibold text-on-dark text-lg">Services</h3>
          <p>Dime Solutions provides digital marketing services as described on our website. The specific scope and deliverables will be outlined in individual service agreements.</p>
          <h3 className="font-heading font-semibold text-on-dark text-lg">Payment Terms</h3>
          <p>Payment terms will be specified in your service agreement. Unless otherwise agreed, invoices are due within 14 days of issuance.</p>
          <h3 className="font-heading font-semibold text-on-dark text-lg">Limitation of Liability</h3>
          <p>Dime Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Terms;

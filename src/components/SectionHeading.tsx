import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
  >
    {label && <span className="inline-block text-cyan text-sm font-semibold tracking-widest uppercase mb-3">{label}</span>}
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-on-dark" : ""}`}>
      {title}
    </h2>
    {description && <p className={`text-base md:text-lg ${light ? "text-on-dark-muted" : "text-muted-foreground"}`}>{description}</p>}
  </motion.div>
);

export default SectionHeading;

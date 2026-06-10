import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function AnimatedSection({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  x = 0,
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

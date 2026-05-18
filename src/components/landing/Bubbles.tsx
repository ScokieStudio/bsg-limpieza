import { motion } from "framer-motion";

export function Bubbles() {
  const bubbles = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {bubbles.map((_, i) => {
        const size = 8 + Math.random() * 28;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 8 + Math.random() * 10;
        const delay = Math.random() * 4;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{
              y: [0, -40, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.55, 0.2],
            }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
            className="absolute rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--electric)] opacity-30 blur-[2px]"
          />
        );
      })}
    </div>
  );
}

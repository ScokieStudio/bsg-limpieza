import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck, Sparkles, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/consorcios.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8"
    >
      {/* Background image with parallax-like scale + dark overlays for legibility */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-[var(--background)]/60 to-[var(--background)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent,var(--background))]"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-foreground/90"
          >
            <ShieldCheck className="h-4 w-4 text-[var(--aqua)]" />
            <span>Expertos en Limpieza · +20 años de trayectoria</span>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Limpieza{" "}
          <span className="gradient-text">Profesional e Integral</span>
          <br className="hidden sm:block" /> para tu Empresa
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          Más de 20 años de trayectoria garantizando espacios impecables,
          desinfectados y listos para producir. Servicios a medida para
          consorcios, oficinas, industrias y eventos.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              size="lg"
              className="group h-14 rounded-2xl gradient-bg px-8 text-base font-semibold text-primary-foreground shadow-glow hover:opacity-95"
            >
              <a href="#cotizacion">
                Solicitar Cotización
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-2xl border-white/15 bg-white/5 px-8 text-base text-foreground hover:bg-white/10 hover:text-foreground"
            >
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-3 sm:gap-6"
        >
          {[
            { icon: Sparkles, label: "+20 años", sub: "de trayectoria" },
            { icon: ShieldCheck, label: "100%", sub: "personal capacitado" },
            { icon: Droplets, label: "24/7", sub: "atención y respuesta" },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-4 text-left"
            >
              <s.icon className="h-5 w-5 text-[var(--aqua)]" />
              <div className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {s.label}
              </div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

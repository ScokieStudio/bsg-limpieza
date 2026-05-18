import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  Sparkles,
  Droplets,
  GlassWater,
  GraduationCap,
  Dumbbell,
  Trees,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
  accent?: boolean;
};

const services: Service[] = [
  {
    title: "Consorcios y Edificios",
    description: "Mantenimiento integral de espacios comunes con personal capacitado.",
    icon: Building2,
    className: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    title: "Oficinas, Industrias y Comercios",
    description: "Limpieza programada que potencia la productividad de tu equipo.",
    icon: Briefcase,
    className: "md:col-span-2",
  },
  {
    title: "Desinfección y Sanitización",
    description: "Protocolos específicos con productos certificados.",
    icon: Sparkles,
    className: "",
  },
  {
    title: "Limpieza de Tanques de Agua",
    description: "Procedimiento normado, con certificado oficial al finalizar.",
    icon: Droplets,
    className: "",
  },
  {
    title: "Vidrios de Altura",
    description: "Personal especializado en trabajos verticales con seguridad total.",
    icon: GlassWater,
    className: "md:col-span-2",
  },
  {
    title: "Establecimientos Educativos",
    description: "Espacios seguros para alumnos y docentes, todos los días.",
    icon: GraduationCap,
    className: "",
  },
  {
    title: "Centros Deportivos",
    description: "Higiene profunda para clubes, gimnasios y vestuarios.",
    icon: Dumbbell,
    className: "",
  },
  {
    title: "Espacios Públicos y Verdes",
    description: "Mantenimiento de parques, plazas y áreas comunes.",
    icon: Trees,
    className: "md:col-span-2",
  },
  {
    title: "Personal para Eventos",
    description: "Equipos antes, durante y después de tu evento.",
    icon: Users,
    className: "",
  },
  {
    title: "Fogging (Nebulización)",
    description: "Desinfección por nebulización de alto alcance.",
    icon: Wind,
    className: "md:col-span-2",
    accent: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Services() {
  return (
    <section id="servicios" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--aqua)]">
            Nuestros Servicios
          </span>
          <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Soluciones de limpieza{" "}
            <span className="gradient-text">a la medida de cada espacio</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un portafolio completo para empresas que exigen excelencia,
            puntualidad y resultados visibles.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={card}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className={`group relative overflow-hidden rounded-3xl glass p-6 shadow-card ${s.className}`}
            >
              {s.accent && (
                <div className="pointer-events-none absolute inset-0 opacity-40">
                  <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--electric)] blur-3xl" />
                </div>
              )}
              <div className="relative flex h-full flex-col justify-between">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--cyan-glow)]/20 to-[var(--electric)]/20 ring-1 ring-white/10"
                >
                  <s.icon className="h-6 w-6 text-[var(--aqua)] transition-colors group-hover:text-foreground" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/15" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

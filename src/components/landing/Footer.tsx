import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Sparkles } from "lucide-react";
import bsgLogo from "@/assets/BSG_02.png";

export function Footer() {
  return (
    <footer id="contacto" className="relative px-4 pt-20 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl glass-strong p-8 sm:p-12"
        >
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <a href="#inicio" className="group flex items-center gap-2">
                <img src={bsgLogo} alt="BSG Logo" className="h-12 w-auto object-contain" />
                <span className="text-sm font-bold tracking-normal text-foreground">
                  LIMPIEZA INTEGRAL
                </span>
              </a>
              <p className="mt-5 max-w-sm text-sm text-muted-foreground">
                Limpieza profesional con más de 20 años de trayectoria.
                Resultados impecables, equipo capacitado, atención personalizada.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--aqua)]">
                Contacto
              </h4>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a
                    href="https://wa.me/5491125123301"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-foreground/80 hover:text-foreground"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10">
                      <Phone className="h-4 w-4 text-[var(--aqua)]" />
                    </span>
                    +54 911 2512 3301
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@bsglimpieza.com"
                    className="group flex items-center gap-3 text-foreground/80 hover:text-foreground"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10">
                      <Mail className="h-4 w-4 text-[var(--aqua)]" />
                    </span>
                    info@bsglimpieza.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bsg._limpieza/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-foreground/80 hover:text-foreground"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10">
                      <Instagram className="h-4 w-4 text-[var(--aqua)]" />
                    </span>
                    @bsg._limpieza
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--aqua)]">
                Navegación
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="#inicio" className="nav-link text-foreground/80 hover:text-foreground">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="nav-link text-foreground/80 hover:text-foreground">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#cotizacion" className="nav-link text-foreground/80 hover:text-foreground">
                    Solicitar cotización
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} BSG Limpieza · Todos los derechos reservados - Hecho con <span className="text-primary">♥</span> por <a href="https://www.scokiestudio.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline">ScokieStudio Design</a></p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 

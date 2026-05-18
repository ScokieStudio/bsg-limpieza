import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Sparkles } from "lucide-react";

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
              <a href="#inicio" className="flex items-center gap-2">
                <div className="grid h-10 w-10 place-items-center rounded-xl gradient-bg shadow-glow">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-lg font-extrabold tracking-tight">AML Servicios</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Limpieza Integral
                  </div>
                </div>
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
                    href="https://wa.me/5491140749436"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-foreground/80 hover:text-foreground"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10">
                      <Phone className="h-4 w-4 text-[var(--aqua)]" />
                    </span>
                    +54 911 4074 9436
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:administracion@amlservicios.com.ar"
                    className="group flex items-center gap-3 text-foreground/80 hover:text-foreground"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10">
                      <Mail className="h-4 w-4 text-[var(--aqua)]" />
                    </span>
                    administracion@amlservicios.com.ar
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/amlservicios"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-foreground/80 hover:text-foreground"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10">
                      <Instagram className="h-4 w-4 text-[var(--aqua)]" />
                    </span>
                    @amlservicios
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

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} AML Servicios Integrales. Todos los derechos reservados.</p>
            <p>Diseñado con pulcritud · Hecho en Argentina</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

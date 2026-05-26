import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import {
  Send,
  User,
  Mail,
  Phone,
  Building,
  Minus,
  Plus,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const SERVICES = [
  "Consorcios y Edificios",
  "Oficinas / Industrias / Comercios",
  "Desinfección / Sanitización",
  "Limpieza de tanques de agua",
  "Vidrios de altura",
  "Establecimientos Educativos",
  "Centros Deportivos",
  "Espacios públicos / Verdes",
  "Personal para eventos",
  "Fogging (Nebulización)",
];

const FREQUENCIES = ["1", "2", "3", "5", "7"];

const schema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre").max(80),
  email: z.string().trim().email("Email inválido").max(120),
  phone: z.string().trim().min(6, "Teléfono inválido").max(20),
  company: z.string().trim().min(2, "Ingresá empresa o consorcio").max(120),
  employees: z.number().min(1).max(200),
  frequency: z.string(),
  services: z.array(z.string()).min(1, "Elegí al menos un servicio"),
  message: z.string().max(800).optional(),
});

const WHATSAPP_NUMBER = "5491125123301";

export function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: 2,
    frequency: "2",
    services: [] as string[],
    message: "",
  });

  const toggleService = (s: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const waLink = useMemo(() => {
    const lines = [
      "*Nueva solicitud de cotización — BSG Limpieza*",
      "",
      "*DATOS PERSONALES*",
      `• NOMBRE: ${form.name}`,
      `• EMAIL: ${form.email}`,
      `• TELÉFONO: ${form.phone}`,
      `• EMPRESA / CONSORCIO: ${form.company}`,
      "",
      "*DETALLE DEL SERVICIO*",
      `• SERVICIOS: ${form.services.join(", ") || "—"}`,
      `• EMPLEADOS REQUERIDOS: ${form.employees}`,
      `• FRECUENCIA (días/semana): ${form.frequency}`,
      "",
      "*MENSAJE ADICIONAL*",
      form.message?.trim() || "—",
    ].join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
  }, [form]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const first = result.error.issues[0];
      toast.error(first?.message ?? "Revisá los datos del formulario");
      return;
    }
    window.open(waLink, "_blank", "noopener,noreferrer");
    toast.success("¡Redirigiendo a WhatsApp!");
  };

  return (
    <section id="cotizacion" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--aqua)]">
            Cotización Inmediata
          </span>
          <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contanos qué necesitás{" "}
            <span className="gradient-text">y te respondemos por WhatsApp</span>
          </h2>
          <p className="mt-4 text-white/80">
            Completá el formulario en menos de un minuto. Tu solicitud llega
            directo a nuestro equipo comercial.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-3xl glass-strong p-6 shadow-card sm:p-10"
        >
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[var(--electric)] opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[var(--cyan-glow)] opacity-20 blur-3xl" />

          <div className="relative grid gap-6 sm:grid-cols-2">
            <Field label="Nombre completo" icon={User}>
              <Input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Tu nombre"
                className="input-glass"
                maxLength={80}
              />
            </Field>
            <Field label="Email" icon={Mail}>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="tu@empresa.com"
                className="input-glass"
                maxLength={120}
              />
            </Field>
            <Field label="Teléfono" icon={Phone}>
              <Input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+54 9 11 ..."
                className="input-glass"
                maxLength={20}
              />
            </Field>
            <Field label="Empresa / Consorcio" icon={Building}>
              <Input
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="Nombre de la organización"
                className="input-glass"
                maxLength={120}
              />
            </Field>
          </div>

          <div className="relative mt-8">
            <Label className="text-sm font-semibold">Servicios requeridos</Label>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICES.map((s) => {
                const active = form.services.includes(s);
                return (
                  <motion.button
                    type="button"
                    key={s}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => toggleService(s)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${active
                      ? "border-transparent gradient-bg text-primary-foreground shadow-glow"
                      : "border-white/10 bg-white/5 text-foreground/80 hover:bg-white/10"
                      }`}
                  >
                    {s}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="relative mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <Label className="text-sm font-semibold">
                Cantidad de empleados requeridos
              </Label>
              <div className="mt-3 flex items-center gap-3 rounded-2xl glass px-3 py-2">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    update("employees", Math.max(1, form.employees - 1))
                  }
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 hover:bg-white/10"
                >
                  <Minus className="h-4 w-4" />
                </motion.button>
                <div className="flex-1 text-center">
                  <div className="text-3xl font-extrabold tracking-tight gradient-text">
                    {form.employees}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {form.employees === 1 ? "empleado" : "empleados"}
                  </div>
                </div>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    update("employees", Math.min(200, form.employees + 1))
                  }
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 hover:bg-white/10"
                >
                  <Plus className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold">
                Frecuencia (días por semana)
              </Label>
              <div className="mt-3 flex flex-wrap gap-2">
                {FREQUENCIES.map((f) => (
                  <motion.button
                    type="button"
                    key={f}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => update("frequency", f)}
                    className={`h-12 min-w-12 rounded-xl px-4 text-sm font-bold transition-all ${form.frequency === f
                      ? "gradient-bg text-primary-foreground shadow-glow"
                      : "glass text-foreground/80 hover:bg-white/10"
                      }`}
                  >
                    {f}x
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-8">
            <Field label="Detalles o mensaje adicional" icon={MessageSquare}>
              <Textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Contanos sobre el espacio, horarios, particularidades..."
                rows={4}
                className="input-glass resize-none"
                maxLength={800}
              />
            </Field>
          </div>

          <div className="relative mt-8 flex flex-col items-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Button
                type="submit"
                size="lg"
                className="h-14 w-full rounded-2xl gradient-bg px-10 text-base font-semibold text-primary-foreground shadow-glow hover:opacity-95 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Enviar Solicitud por WhatsApp
              </Button>
            </motion.div>
            <p className="text-xs text-muted-foreground">
              Te redirigimos a WhatsApp con tu solicitud lista para enviar.
            </p>
          </div>
        </motion.form>
      </div>

      <style>{`
        .input-glass {
          background: oklch(1 0 0 / 0.04);
          border: 1px solid oklch(1 0 0 / 0.08);
          color: var(--color-foreground);
          height: 3rem;
          border-radius: 0.85rem;
        }
        .input-glass::placeholder { color: oklch(0.7 0.03 235 / 0.6); }
        textarea.input-glass { height: auto; padding-top: 0.75rem; }
        .input-glass:focus-visible {
          outline: none;
          border-color: var(--color-ring);
          box-shadow: 0 0 0 4px oklch(0.78 0.16 220 / 0.18);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <Icon className="h-3.5 w-3.5 text-[var(--aqua)]" />
        {label}
      </Label>
      {children}
    </div>
  );
}

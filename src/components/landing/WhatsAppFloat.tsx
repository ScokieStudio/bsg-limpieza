import { motion } from "framer-motion";

export function WhatsAppFloat() {
  const href =
    "https://wa.me/5491140749436?text=" +
    encodeURIComponent("Hola AML Servicios, quisiera más información.");

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)]"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-ring" />
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.27c-.27-.13-1.61-.79-1.86-.88-.25-.09-.43-.13-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.61-1.46-.83-2-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32zM16.02 5.33C10.13 5.33 5.34 10.12 5.34 16c0 1.97.54 3.89 1.55 5.56L5.33 26.67l5.22-1.55a10.62 10.62 0 0 0 5.47 1.51h.01c5.88 0 10.67-4.79 10.67-10.67 0-2.85-1.11-5.53-3.12-7.55a10.6 10.6 0 0 0-7.56-3.08zm0 19.51h-.01a8.83 8.83 0 0 1-4.5-1.23l-.32-.19-3.1.92.93-3.02-.21-.32a8.83 8.83 0 0 1-1.36-4.72c0-4.88 3.97-8.85 8.86-8.85 2.37 0 4.59.92 6.26 2.6a8.79 8.79 0 0 1 2.59 6.26c0 4.88-3.97 8.85-8.85 8.85z" />
      </svg>
    </motion.a>
  );
}

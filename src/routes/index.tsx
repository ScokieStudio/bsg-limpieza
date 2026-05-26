import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BSG Limpieza · Limpieza Profesional para Empresas" },
      {
        name: "description",
        content:
          "Más de 20 años brindando limpieza integral, desinfección y mantenimiento para consorcios, oficinas, industrias y eventos. Cotizá por WhatsApp.",
      },
      { property: "og:title", content: "BSG Limpieza" },
      {
        property: "og:description",
        content:
          "Expertos en limpieza con más de 20 años de trayectoria. Cotización inmediata por WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Landing />
      <Toaster theme="dark" position="top-center" />
    </>
  );
}

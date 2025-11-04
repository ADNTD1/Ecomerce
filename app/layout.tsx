import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Mi Sitio",
  description: "Ejemplo con Next.js y Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

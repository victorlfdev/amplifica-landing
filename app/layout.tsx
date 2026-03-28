import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amplifica | Audiovisual estratégico para eventos",
  description:
    "Landing page institucional da Amplifica com foco em audiovisual estratégico, posicionamento e geração de leads.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

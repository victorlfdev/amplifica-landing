import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://amplificamidias.com.br");


export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amplifica | Audiovisual estratégico para eventos",
    template: "%s | Amplifica",
  },
  description:
    "A Amplifica transforma eventos em conteúdo, posicionamento e impacto duradouro com direção estratégica, cobertura audiovisual e desdobramento de marca.",
  applicationName: "Amplifica",
  keywords: [
    "Amplifica",
    "audiovisual estratégico",
    "cobertura audiovisual de eventos",
    "estratégia de conteúdo para eventos",
    "conteúdo para marcas",
    "marketing para eventos",
    "eventos institucionais",
    "produção audiovisual",
  ],
  authors: [{ name: "Amplifica" }],
  creator: "Amplifica",
  publisher: "Amplifica",
  category: "business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Amplifica",
    title: "Amplifica | Audiovisual estratégico para eventos",
    description:
      "Transformamos experiências ao vivo em conteúdo, posicionamento e impacto duradouro para marcas e instituições.",
    images: [
      {
        url: "/images/OpenGraphImage.webp",
        width: 1200,
        height: 630,
        alt: "Open Graph da landing page da Amplifica.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amplifica | Audiovisual estratégico para eventos",
    description:
      "Cobertura, direção estratégica e conteúdo de longo prazo para marcas que constroem autoridade com eventos.",
    images: ["/images/OpenGraphImage.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/AmplificaIconeBranco.webp", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/AmplificaIconeBranco.webp",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

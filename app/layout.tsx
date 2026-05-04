import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope } from "next/font/google";
import { SmoothScrollProvider } from "@/app/components/providers/smooth-scroll-provider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://amplificamidias.com.br");

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amplifica | Audiovisual Estratégico para Eventos",
    template: "%s | Amplifica",
  },
  description:
    "A Amplifica produz cobertura audiovisual estratégica para eventos corporativos, culturais e institucionais — transformando cada projeto em ativos de marca e conteúdo de longo prazo.",
  applicationName: "Amplifica",
  keywords: [
    "Amplifica",
    "audiovisual estratégico",
    "cobertura audiovisual de eventos",
    "produção audiovisual para eventos",
    "captação de eventos",
    "vídeo institucional",
    "conteúdo para marcas",
    "eventos corporativos",
    "eventos institucionais",
    "bastidores de evento",
    "filmagem de eventos",
    "estratégia de conteúdo",
    "ativos de marca",
    "direção criativa",
    "amplifica mídias",
  ],
  authors: [{ name: "Amplifica", url: siteUrl }],
  creator: "Amplifica",
  publisher: "Amplifica",
  category: "business",
  classification: "Produção Audiovisual",
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Amplifica",
    title: "Amplifica | Audiovisual Estratégico para Eventos",
    description:
      "Transformamos eventos em ativos de conteúdo e posicionamento duradouro para marcas e instituições.",
    images: [
      {
        url: "/images/OpenGraphImage.jpg",
        width: 1200,
        height: 630,
        alt: "Amplifica — Audiovisual estratégico para eventos corporativos e institucionais.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amplificamidias",
    title: "Amplifica | Audiovisual Estratégico para Eventos",
    description:
      "Cobertura audiovisual e ativos de longo prazo para marcas que constroem autoridade com eventos.",
    images: [
      {
        url: "/images/OpenGraphImage.jpg",
        alt: "Amplifica — Audiovisual estratégico para eventos.",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/AmplificaIconeBranco.webp", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/images/AmplificaIconeBranco.webp", sizes: "180x180" }],
  },
  other: {
    "geo.region": "BR",
    "geo.country": "Brazil",
    "og:locale:alternate": "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Amplifica",
      alternateName: "Amplifica Mídias",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/AmplificaIconeBranco.webp`,
        contentUrl: `${siteUrl}/images/AmplificaIconeBranco.webp`,
      },
      image: `${siteUrl}/images/OpenGraphImage.jpg`,
      description:
        "Audiovisual estratégico para eventos corporativos, culturais e institucionais. Transformamos eventos em ativos de conteúdo e posicionamento.",
      sameAs: [
        "https://www.instagram.com/amplifica.midias",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://wa.me/5511976589202",
        availableLanguage: { "@type": "Language", name: "Portuguese" },
      },
      areaServed: { "@type": "Country", name: "Brasil" },
      knowsLanguage: "pt-BR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços Audiovisuais",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Direção Estratégica",
              description:
                "Definição de narrativa e objetivos antes de qualquer câmera ligar.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Captação Audiovisual",
              description:
                "Cobertura audiovisual profissional de eventos com propósito e intenção narrativa.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ativos de Conteúdo",
              description:
                "Transformação do evento em ativos de comunicação, marca e presença de longo prazo.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Amplifica",
      description: "Audiovisual estratégico para eventos",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Amplifica | Audiovisual Estratégico para Eventos",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "pt-BR",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: siteUrl,
          },
        ],
      },
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//instagram.com" />
      </head>
      <body className={manrope.variable}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "../providers";
import NavBarUser from "../components/navBarUser";
import Footer from "../components/LadingPage/footer";
import SocialMedia from "../components/socialMedia";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description:
    "Hogar Esperanza es un centro especializado en el cuidado y atención de adultos mayores en Montería, brindando apoyo, amor y un ambiente seguro para una vida digna.",
  keywords:
    "hogar de ancianos, adultos mayores, cuidado de ancianos, Montería, asilo, residencia geriátrica, tercera edad, bienestar",
  authors: [{ name: "Hogar Esperanza" }],
  publisher: "Hogar Esperanza Montería",
  robots: "index, follow",
  alternates: {
    canonical: "http://fundacionhogaresperanza.com",
  },
  openGraph: {
    title: "Hogar Esperanza - Cuidado de Adultos Mayores",
    description:
      "Centro especializado en el cuidado y atención integral de adultos mayores en Montería.",
    url: "http://fundacionhogaresperanza.com",
    images: [
      {
        url: "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2",
        width: 800,
        height: 600,
        alt: "Logo Hogar Esperanza",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2",
      },
      {
        url: "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut:
      "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2",
    apple:
      "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2",
  },
  other: {
    "google-adsense-account": "ca-pub-4478338988718379",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <Providers>
          <NavBarUser />
          <SocialMedia />
          <div style={{ paddingTop: ".5rem", paddingBottom: "10rem" }}>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "../providers";
import { siteConfig } from "@/config/site";
import { fontCursive, fontSans } from "@/config/fonts";
import NavBarUser from "../components/navBarUser";
import Footer from "../components/LadingPage/footer";
import SocialMedia from "../components/socialMedia";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  icons: {
    icon: "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2",
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
    <html suppressHydrationWarning lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Fundación Hogar Esperanza, un espacio dedicado a brindar apoyo y esperanza a quienes más lo necesitan." />
        <meta name="keywords" content="fundación, hogar esperanza, ayuda, caridad, apoyo social, donaciones" />
        <meta name="author" content="Fundación Hogar Esperanza" />
        <meta name="publisher" content="Fundación Hogar Esperanza" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.fundacionhogaresperanza.com/" />
        <link rel="icon" href="https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2" />
        <meta property="og:title" content="Hogar Esperanza" />
        <meta property="og:description" content="Fundación Hogar Esperanza, un espacio dedicado a brindar apoyo y esperanza a quienes más lo necesitan." />
        <meta property="og:url" content="https://www.fundacionhogaresperanza.com/" />
        <meta property="og:image" content="https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hogar Esperanza" />
        <meta name="twitter:description" content="Fundación Hogar Esperanza, un espacio dedicado a brindar apoyo y esperanza a quienes más lo necesitan." />
        <meta name="twitter:image" content="https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background antialiased"
        )}
      >
        <Providers>
          <NavBarUser />
          <SocialMedia />
          <div style={{ paddingTop: ".5rem", paddingBottom: "10rem" }}>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

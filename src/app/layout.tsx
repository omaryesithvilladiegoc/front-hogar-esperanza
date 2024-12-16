import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "../providers";

import { siteConfig } from "@/config/site";
import { fontCursive, fontSans } from "@/config/fonts";
import NavBarUser from "../components/navBarUser";
import Footer from "../components/footer";
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
      <head  >
    
      </head>

      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
       
        )}
      >


        <Providers>
          {" "}
          <NavBarUser />{" "}
          <SocialMedia />
          <div
            style={{
           
              paddingTop: "5rem",
              paddingBottom:'10rem'
            }}
          >
            {" "}
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

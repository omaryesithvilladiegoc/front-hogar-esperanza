import { Fira_Code as FontMono, Inter as FontSans, Borel as FontCursive, Roboto as FontRoboto } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontRoboto = FontRoboto({
  subsets: ["latin"],
  variable:"--font-roboto",
  weight:'500'
})


export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontCursive = FontCursive({
  subsets: ["latin"],
  variable:"--font-borel",
  weight: "400"
});
import {
  Fira_Code,
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const FiraCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
})

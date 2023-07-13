"use client"

import "@/styles/globals.scss"
import React from "react"
import { Metadata } from "next"
import { useSelectedLayoutSegments } from "next/navigation"

import { siteConfig } from "@/config/site"
import { FiraCode } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import ActionsBar from "@/components/header/ActionsBar"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import ExploreAside from "./../components/ExploreAside"
import Sidebar from "./../components/Sidebar"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  pathname: string
}

export default function RootLayout({ children }: RootLayoutProps) {
  const segments = useSelectedLayoutSegments()
  const isNotFound = segments.includes("not-found")

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased fira-code"
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {isNotFound ? (
              <h1>not found</h1>
            ) : (
              <>
                <SiteHeader />
                <ActionsBar />
                <div className="relative flex min-h-screen bg-body">
                  <Sidebar />
                  <ExploreAside />
                  <div className="flex-1">{children}</div>
                </div>
              </>
            )}
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}


"use client"

import type React from "react"
import Link from "next/link"
import { Sparkles, Mail } from "lucide-react"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BigSidebarToggle } from "./components/big-sidebar-toggle"


import { SectionMain } from "./components/section-main"
import { SectionContact } from "./components/section-contact"
import { LanguageDropdown } from "./components/language-dropdown"
import { AppSidebar } from "./components/app-sidebar"
import { SectionProjects } from "./components/section-projects"
import { useTranslation } from "react-i18next"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState } from "react"
import { ExperienceTimeline } from "./components/Experience"

const pageGutterStyle: React.CSSProperties = { ["--page-gutter" as any]: "clamp(16px, 2.5vw, 36px)" }

export default function Page() {

  const [mode, setMode] = useState<"content" | "timeline">("content")

  const { t } = useTranslation();

  return (
    <SidebarProvider>
      <AppSidebar />

      {/* Inset pattern: only center content scrolls; header/footer stay fixed [^1] */}
      <SidebarInset className="h-[98svh] overflow-hidden" style={pageGutterStyle}>
        <div className="flex h-full min-h-0 flex-col">
          <header className="h-20 shrink-0 border-b bg-background/70 px-[var(--page-gutter)] backdrop-blur supports-[backdrop-filter]:bg-background/50">
            <div className="flex h-full w-full items-center gap-3">
              <BigSidebarToggle className="-ml-1" />
              <Sparkles className="h-4 w-4 text-emerald-500" />
              <span className="font-medium h4">{t("Welcome")}</span>
              <Separator orientation="vertical" className="mx-2 h-4" />

              <div className="ml-auto flex items-center gap-2">
                <LanguageDropdown />
                <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700" asChild>
                  <Link href="#contact">
                    <Mail className="h-4 w-4" />
                    {!useIsMobile() && (
                      t("GetInTouch")
                    )}
                  </Link>
                </Button>

              </div>
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto">
            <main className="relative w-full px-[var(--page-gutter)] py-4 md:py-6">
              {mode === "timeline" ? (
                <ExperienceTimeline onSeeTimeline={() => setMode("content")} />
              ) : (
                <>
                  <SectionMain id="main" onSeeTimeline={() => setMode("timeline")} />
                  <div className="flex items-center justify-center w-full">
                    <Separator className="my-10" />
                  </div>
                  <SectionProjects id="projects" />
                  <div className="flex items-center justify-center w-full">
                    <Separator className="my-10" />
                  </div>
                  <SectionContact id="contact" />
                </>
              )}
            </main>
          </div>

          {!useIsMobile() && (
            <footer className="h-14 shrink-0 border-t bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
              <div className="flex h-full w-full items-center justify-between px-[var(--page-gutter)] text-sm leading-none text-muted-foreground">
                <span className="inline-flex h-8 items-center">{t("Copyright", { year: new Date().getFullYear() })}, {t("AllRightsReserved").toLowerCase()}</span>
                <div className="hidden h-8 items-center gap-3 md:flex">
                  <span className="inline-flex h-8 items-center ">
                    {t("MadeWithAi")}
                    <Sparkles className="ml-1 h-4 w-4 text-emerald-600" />
                  </span>
                </div>
              </div>
            </footer>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

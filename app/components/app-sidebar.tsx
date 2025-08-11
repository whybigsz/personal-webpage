"use client"

import Link from "next/link"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Layers3, BarChart3, Wand2, Rocket, Home, FolderKanban } from "lucide-react"
import { useTranslation } from "react-i18next"

const projects = [
    { title: "AnalyticsDashboard", icon: BarChart3, href: "#projects" },
    { title: "InvoiceAutomation", icon: Wand2, href: "#projects" },
    { title: "FormBuilder", icon: Layers3, href: "#projects" },
]

export function AppSidebar() {
    const name = "Ricardo Ferreira"
    const role = "Full‑Stack Developer"
    const avatarSrc = "/images/galp.png"

    const { t } = useTranslation()

    return (
        <Sidebar variant="inset" collapsible="icon">
            {/* Header with avatar always visible (also in collapsed state) */}
            <SidebarHeader>
                <div className="flex h-16 items-center gap-3 px-3 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
                    <img
                        src={avatarSrc || "/placeholder.svg?height=64&width=64&query=developer-avatar"}
                        alt="Portrait of John Developer"
                        className="h-12 w-12 rounded-full object-cover ring-1 ring-emerald-500/70 group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8"
                    />
                    <div className="min-w-0 group-data-[collapsible=icon]:hidden">
                        <p className="truncate text-lg font-semibold">{name}</p>
                        <p className="truncate text-sm text-muted-foreground">{role}</p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>
                {/* Sections navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm">{t("Sections")}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    tooltip="Main"
                                    className="focus-visible:ring-2 focus-visible:ring-sidebar-ring group-data-[collapsible=icon]:rounded-full body-text"
                                >
                                    <a href="#main">
                                        <Home className="text-emerald-600" />
                                        <span>{t("Main")}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    tooltip="Projects"
                                    className="focus-visible:ring-2 focus-visible:ring-sidebar-ring group-data-[collapsible=icon]:rounded-full body-text"
                                >
                                    <a href="#projects">
                                        <FolderKanban className="text-emerald-600" />
                                        <span>{t("Projects")}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    tooltip="Contact"
                                    className="focus-visible:ring-2 focus-visible:ring-sidebar-ring group-data-[collapsible=icon]:rounded-full body-text"
                                >
                                    <a href="#contact">
                                        <Mail className="text-emerald-600" />
                                        <span>{t("Contact")}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Projects list (optional quick jump) */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm">{t("Projects")}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects.map((p) => (
                                <SidebarMenuItem key={p.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="focus-visible:ring-2 focus-visible:ring-sidebar-ring group-data-[collapsible=icon]:rounded-full"
                                        tooltip={p.title}
                                    >
                                        <Link href={p.href} className="flex items-center body-text">
                                            <p.icon className="text-emerald-600" />
                                            <span>{t(p.title)}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Focus — keep (hidden when collapsed to avoid overflow) */}
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupLabel className="text-sm">{t("Focus")}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="flex flex-wrap gap-2 px-2">
                            <Badge variant="secondary" className="border border-emerald-200 bg-emerald-50 text-emerald-700">
                                {t("Performance")}
                            </Badge>
                            <Badge variant="secondary" className="border border-teal-200 bg-teal-50 text-teal-700">
                                {t("Automation")}
                            </Badge>
                            <Badge variant="outline">{t("Analytics")}</Badge>
                            <Badge variant="outline">{t("UI/UX")}</Badge>
                            <Badge variant="outline">{t("AI")}</Badge>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer socials — stacked when collapsed */}
            <SidebarFooter>
                <div className="flex items-center gap-2 px-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-1 group-data-[collapsible=icon]:py-2">
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                        <Link href="https://github.com/whybigsz" aria-label="GitHub">
                            <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                        <Link href="https://www.linkedin.com/in/ricardo-connect/" aria-label="LinkedIn">
                            <Linkedin className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                        <Link href="mailto:ricardo.ferreira.2222@gmail.com" aria-label="Email">
                            <Mail className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}

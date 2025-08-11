"use client"

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
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
import { cn } from "@/lib/utils"

const projects = [
    { title: "AnalyticsDashboard", icon: BarChart3, href: "#projects", id: "analytics" },
    { title: "InvoiceAutomation", icon: Wand2, href: "#projects", id: "automation" },
    { title: "FormBuilder", icon: Layers3, href: "#projects", id: "forms" },
]

const mainSections = [
    { title: "Main", icon: Home, href: "#main", id: "main" },
    { title: "Projects", icon: FolderKanban, href: "#projects", id: "projects" },
    { title: "Contact", icon: Mail, href: "#contact", id: "contact" },
]

export function AppSidebar() {
    const name = "Ricardo Ferreira"
    const role = "Full‑Stack Developer"
    const avatarSrc = "/images/galp.png"
    const [activeSection, setActiveSection] = useState("main")
    const { t } = useTranslation()

    // Improved section tracking using IntersectionObserver
    const updateActiveSection = useCallback(() => {
        const sections = mainSections.map(section => document.getElementById(section.id))
        let mostVisibleSection = "main" // Default to main
        let maxVisibility = 0

        sections.forEach(section => {
            if (section) {
                const rect = section.getBoundingClientRect()
                const visibleHeight = Math.min(
                    rect.bottom,
                    window.innerHeight
                ) - Math.max(rect.top, 0)

                const visibilityPercentage = visibleHeight / rect.height

                if (visibilityPercentage > maxVisibility) {
                    maxVisibility = visibilityPercentage
                    mostVisibleSection = section.id
                }
            }
        })

        setActiveSection(mostVisibleSection)
    }, [])

    useEffect(() => {
        const sections = mainSections.map(section => document.getElementById(section.id))
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5 // Trigger when 50% of section is visible
            }
        )

        // Observe all main sections
        sections.forEach(section => {
            if (section) observer.observe(section)
        })

        // Additional scroll event for more precise tracking
        window.addEventListener('scroll', updateActiveSection)

        // Set initial active section
        updateActiveSection()

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section)
            })
            window.removeEventListener('scroll', updateActiveSection)
        }
    }, [updateActiveSection])

    const handleSectionClick = (sectionId: string) => {
        setActiveSection(sectionId)
        // Smooth scroll to section
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Sidebar variant="inset" collapsible="icon" className="border-r border-border/20 backdrop-blur-xl bg-background/95">
            {/* Header with Apple-style refinement */}
            <SidebarHeader className="border-b border-border/10 bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-sm">
                <div className="flex h-16 items-center gap-3 px-3 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
                    <div className="relative">
                        <img
                            src={avatarSrc || "/placeholder.svg?height=64&width=64&query=developer-avatar"}
                            alt="Portrait of Ricardo Ferreira"
                            className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20 shadow-sm transition-all duration-200 hover:ring-white/40 group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8"
                        />
                        {/* Refined status indicator */}
                        <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background shadow-xs group-data-[collapsible=icon]:h-2 group-data-[collapsible=icon]:w-2" />
                    </div>
                    <div className="min-w-0 group-data-[collapsible=icon]:hidden">
                        <p className="truncate text-lg font-medium tracking-tight">{name}</p>
                        <p className="truncate text-sm text-muted-foreground/80 font-normal">{role}</p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarSeparator className="bg-gradient-to-r from-transparent via-border/20 to-transparent h-px" />

            <SidebarContent className="px-2">
                {/* Apple-style navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-medium text-muted-foreground/70 mb-3 tracking-wide uppercase">
                        {t("Navigation")}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {mainSections.map((section) => {
                                const isActive = activeSection === section.id
                                return (
                                    <SidebarMenuItem key={section.id}>
                                        <SidebarMenuButton
                                            asChild
                                            tooltip={section.title}
                                            className={cn(
                                                "relative transition-all duration-200 ease-out group-data-[collapsible=icon]:rounded-lg",
                                                "focus-visible:ring-2 focus-visible:ring-emerald-500/20 focus-visible:outline-none",
                                                isActive
                                                    ? "bg-gradient-to-r from-emerald-50/80 to-emerald-50/40 text-emerald-700 shadow-xs dark:from-emerald-950/40 dark:to-emerald-950/20 dark:text-emerald-400"
                                                    : ""
                                            )}
                                        >
                                            <a
                                                href={section.href}
                                                className="flex items-center gap-3 body-text rounded-lg px-2 py-1.5"
                                                onClick={() => handleSectionClick(section.id)}
                                            >
                                                {/* Elegant active indicator */}
                                                <div className={cn(
                                                    "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-r transition-all duration-200",
                                                    isActive ? "opacity-100 shadow-sm" : "opacity-0"
                                                )} />
                                                <section.icon className={cn(
                                                    "h-4 w-4 transition-all duration-200",
                                                    isActive
                                                        ? "text-emerald-600 drop-shadow-xs dark:text-emerald-400"
                                                        : "text-muted-foreground group-hover:text-foreground"
                                                )} />
                                                <span className={cn(
                                                    "text-md tracking-tight transition-all duration-200",
                                                    isActive
                                                        ? "text-emerald-700 font-medium dark:text-emerald-400"
                                                        : "text-muted-foreground group-hover:text-foreground"
                                                )}>
                                                    {t(section.title)}
                                                </span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Refined Projects list */}
                <SidebarGroup className="mt-8">
                    <SidebarGroupLabel className="text-xs font-medium text-muted-foreground/70 mb-3 tracking-wide uppercase">
                        {t("QuickAccess")}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {projects.map((project) => (
                                <SidebarMenuItem key={project.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-500/20 group-data-[collapsible=icon]:rounded-lg rounded-lg"
                                        tooltip={project.title}
                                    >
                                        <Link href={project.href} className="flex items-center gap-3 body-text px-2 py-1.5">
                                            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-gradient-to-br from-accent/40 to-accent/20 group-hover:from-emerald-50 group-hover:to-emerald-100/50 dark:group-hover:from-emerald-950/30 dark:group-hover:to-emerald-900/20 transition-all duration-200 shadow-xs">
                                                <project.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200" />
                                            </div>
                                            <span className="text-md text-muted-foreground group-hover:text-foreground transition-colors duration-200 tracking-tight">
                                                {t(project.title)}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Apple-style Focus badges */}
                <SidebarGroup className="group-data-[collapsible=icon]:hidden mt-8">
                    <SidebarGroupLabel className="text-xs font-medium text-muted-foreground/70 mb-3 tracking-wide uppercase">
                        {t("Expertise")}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="flex flex-wrap gap-2 px-2">
                            <Badge
                                variant="secondary"
                                className="border-0 bg-gradient-to-r from-emerald-50/80 to-emerald-100/60 text-emerald-700 text-xs cursor-default shadow-xs font-medium tracking-tight dark:from-emerald-950/40 dark:to-emerald-900/30 dark:text-emerald-400"
                            >
                                {t("Performance")}
                            </Badge>
                            <Badge
                                variant="secondary"
                                className="border-0 bg-gradient-to-r from-teal-50/80 to-teal-100/60 text-teal-700 text-xs cursor-default shadow-xs font-medium tracking-tight dark:from-teal-950/40 dark:to-teal-900/30 dark:text-teal-400"
                            >
                                {t("Automation")}
                            </Badge>
                            <Badge
                                variant="outline"
                                className="text-xs cursor-default border-border/40 text-muted-foreground font-medium tracking-tight shadow-xs bg-background/50"
                            >
                                {t("Analytics")}
                            </Badge>
                            <Badge
                                variant="outline"
                                className="text-xs cursor-default border-border/40 text-muted-foreground font-medium tracking-tight shadow-xs bg-background/50"
                            >
                                {t("UI/UX")}
                            </Badge>
                            <Badge
                                variant="outline"
                                className="text-xs cursor-default border-border/40 text-muted-foreground font-medium tracking-tight shadow-xs bg-background/50"
                            >
                                {t("AI")}
                            </Badge>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Apple-style Footer */}
            <SidebarFooter className="border-t border-border/10 bg-gradient-to-t from-background/50 to-background/80 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-1 px-2 py-4 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-lg hover:bg-accent/60 hover:scale-105 transition-all duration-200 shadow-xs hover:shadow-sm"
                        asChild
                    >
                        <Link href="https://github.com/whybigsz" aria-label="GitHub">
                            <Github className="h-4 w-4 text-muted-foreground/80 group-hover:text-foreground transition-colors duration-200" />
                        </Link>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-lg hover:bg-accent/60 hover:scale-105 transition-all duration-200 shadow-xs hover:shadow-sm"
                        asChild
                    >
                        <Link href="https://www.linkedin.com/in/ricardo-connect/" aria-label="LinkedIn">
                            <Linkedin className="h-4 w-4 text-muted-foreground/80 group-hover:text-blue-600 transition-colors duration-200" />
                        </Link>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-lg hover:bg-accent/60 hover:scale-105 transition-all duration-200 shadow-xs hover:shadow-sm"
                        asChild
                    >
                        <Link href="mailto:ricardo.ferreira.2222@gmail.com" aria-label="Email">
                            <Mail className="h-4 w-4 text-muted-foreground/80 group-hover:text-emerald-600 transition-colors duration-200" />
                        </Link>
                    </Button>
                </div>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
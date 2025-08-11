import Link from "next/link"
import { Github, Linkedin, LinkIcon, ArrowRight, Zap, Cpu, Sparkles, Clock, Crosshair } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { CurvedSvgCard } from "./curved-svg-card"
import { useIsMobile, useIsTablet } from "@/hooks/use-mobile"

export function SectionMain({ id = "main", onSeeTimeline }: { id?: string; onSeeTimeline?: () => void }) {

    const { t } = useTranslation()

    return (
        <section id={id} aria-labelledby="main-title" className="space-y-6">
            {/* Presentation */}
            <header>
                <div className="flex flex-col sm:flex-row justify-between">
                    <div>
                        <p className="h4 text-muted-foreground">{t("Hello")}</p>
                        <h1
                            id="main-title"
                            className="h1-main bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl"
                        >
                            Ricardo Ferreira,
                        </h1>
                        <h2 className="h2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
                            {t("FullStackDeveloper")}
                        </h2>
                    </div>
                    <div className="text-left sm:text-right">
                        <div className="mt-4 flex flex-wrap items-center sm:justify-end gap-2 text-sm text-muted-foreground">
                            <div className="flex flex-col gap-2 sm:items-end">
                                <div className="inline-flex items-center gap-2 rounded-lg py-1 font-medium">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-emerald-300 ring-opacity-50" />
                                    {t("CurrentlyWorking")}
                                </div>
                                <div className="flex gap-2">
                                    <Link href="https://github.com/whybigsz" className="inline-flex items-center gap-1 hover:text-foreground">
                                        <Github className="h-3.5 w-3.5" />
                                        GitHub
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/ricardo-connect/" className="inline-flex items-center gap-1 hover:text-foreground">
                                        <Linkedin className="h-3.5 w-3.5" />
                                        LinkedIn
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <p className="h3 mt-2 max-w-2xl text-sm text-muted-foreground">
                            {t("FocusAreas")}
                        </p>

                        <Button
                            onClick={onSeeTimeline}
                            variant="outline"
                            size="sm"
                            className=" shrink-0 items-center bg-emerald-50 text-emerald-700  inline-flex mt-4 ml-auto"
                            aria-label="See timeline"
                        >
                            {t("See")} timeline
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

                </div>
            </header>

            {/* Main work (quick highlight cards) */}
            <div className="grid gap-6 xs:gap-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <CurvedSvgCard
                    icon={<Zap className="text-emerald-600" />}
                    title="Performance"
                    description="PerformanceDescription"
                    badges={["RUM", "Edge", "Profiling"]}
                    heightClass="h-[280px] md:h-[340px] lg:h-[340px]"
                />
                <CurvedSvgCard
                    icon={<Cpu className="text-emerald-600" />}
                    title="Automation"
                    description="AutomationDescription"
                    badges={["Workers", "Queues", "Webhooks"]}
                    heightClass="h-[280px] md:h-[340px] lg:h-[300px]"
                    flipX={useIsTablet()}
                />
                <CurvedSvgCard
                    icon={<Sparkles className="text-emerald-600" />}
                    title="UX & AI"
                    description="UXAIDescription"
                    badges={["A11y", "UI/UX", "AI"]}
                    heightClass="h-[280px] md:h-[340px] lg:h-[300px]"
                    flipX={!useIsTablet()}
                />
                <CurvedSvgCard
                    icon={<Crosshair className="text-emerald-600" />}
                    title="Logging & Profiling"
                    description="LoggingProfilingDescription"
                    badges={["Logging", "Tracking", "Analytics"]}
                    heightClass="h-[280px] md:h-[340px] lg:h-[340px]"
                    flipX
                />
            </div>
        </section>
    )
}

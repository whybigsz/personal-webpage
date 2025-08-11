"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { BarChart3, FileText, ClipboardList } from "lucide-react"
import { useTranslation } from "react-i18next"

type MiniCard = {
    title: string
    subtitle: string
    icon: React.ElementType
    status: "OnTrack" | "InProgress" | "Completed"
    date: string
    avatars: string[] // initials fallback
    accent?: "emerald" | "teal"
}

const data: MiniCard[] = [
    {
        title: "AnalyticsDashboard",
        subtitle: "AnalyticsDashboardSubtitle",
        icon: BarChart3,
        status: "Completed",
        date: "Aug, 2024",
        avatars: ["RF", "CS", "EB"],
        accent: "emerald",
    },
    {
        title: "FormBuilder",
        subtitle: "FormBuilderDescription",
        icon: ClipboardList,
        status: "OnTrack",
        date: "Feb, 2025",
        avatars: ["RF", "CS"],
        accent: "teal",
    },
    {
        title: "InvoiceAutomation",
        subtitle: "InvoiceAutomationDescription",
        icon: FileText,
        status: "InProgress",
        date: "Aug, 2025",
        avatars: ["RF", "CS", "NM", "FR"],
        accent: "emerald",
    },
]

function AvatarCircle({ label, className }: { label: string; className?: string }) {
    return (
        <div
            className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full border bg-background text-[10px] font-medium ring-1 ring-foreground/10",
                className,
            )}
            aria-hidden="true"
            title={label}
        >
            {label}
        </div>
    )
}

export function ProjectMiniCards() {
    const { t } = useTranslation()
    return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item, idx) => {
                const accent =
                    item.accent === "teal"
                        ? "ring-teal-200/70 hover:ring-teal-300/80"
                        : "ring-emerald-200/70 hover:ring-emerald-300/80"
                const statusColor =
                    item.status === "Completed"
                        ? "text-emerald-700 bg-emerald-50 border-emerald-200"
                        : item.status === "OnTrack"
                            ? "text-teal-700 bg-teal-50 border-teal-200"
                            : "text-amber-700 bg-amber-50 border-amber-200"


                return (
                    <Card
                        key={item.title}
                        className={cn(
                            "group overflow-hidden border bg-gradient-to-b from-background to-background/60 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5",
                            "ring-1 rounded-xl",
                            accent,
                        )}
                    >
                        <CardContent className="flex items-start justify-between gap-3 p-3">
                            <div className="flex min-w-0 items-start gap-3">
                                <div
                                    className={cn(
                                        "grid h-9 w-9 place-items-center rounded-lg ring-1 ring-foreground/10",
                                        item.accent === "teal" ? "bg-teal-50 text-teal-700" : "bg-emerald-50 text-emerald-700",
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                </div>
                                <div className="min-w-0">
                                    <div className="truncate text-md font-semibold">{t(item.title)}</div>
                                    <div className="truncate text-[12px] text-muted-foreground">{t(item.subtitle)}</div>
                                </div>
                            </div>
                            <div className="flex shrink-0 flex-col items-end gap-1">
                                <Badge variant="outline" className={cn("h-5 rounded-full border px-2 text-xs", statusColor)}>
                                    {t(item.status)}
                                </Badge>
                                <span className="text-[11px] text-muted-foreground">{item.date}</span>
                            </div>
                        </CardContent>

                        <div className="flex items-center gap-1.5 p-3 pt-0">
                            {item.avatars.slice(0, 4).map((label, i) => (
                                <AvatarCircle key={i} label={label} className={cn(i > 0 && "-ml-1.5")} />
                            ))}
                            {item.avatars.length > 4 && (
                                <AvatarCircle label={`+${item.avatars.length - 4}`} className="bg-muted text-foreground/80" />
                            )}
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

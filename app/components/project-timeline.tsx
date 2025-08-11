"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

// Phases laid out as a grid; positions can be fractional between indices.
const phases = ["Plan", "Entities", "Design", "Backend", "Frontend", "QA", "Docs", "Launch"]

type Lane = {
    id: string
    label: string
    accent?: "emerald" | "teal"
}

type Task = {
    id: string
    laneId: string
    title: string
    // start/end are phase indices, fractional allowed for between-phase placement.
    start: number
    end: number
    color?: "emerald" | "teal" | "gray" | "amber"
}

// Helper for stable, "random-like" jitter without hydration issues.
function hashToInt(str: string, mod: number) {
    let h = 0
    for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i)
    return Math.abs(h) % mod
}

const lanes: Lane[] = [
    { id: "analytics", label: "AnalyticsDashboard", accent: "emerald" },
    { id: "form", label: "FormBuilder", accent: "teal" },
    { id: "invoice", label: "InvoiceAutomation", accent: "emerald" },
]

// Tasks with fractional placement and varied lengths.
// Analytics Dashboard exactly as requested: Plan, between Entities+Design, Backend, Launch.
const tasks: Task[] = [
    // Analytics Dashboard
    {
        id: "ad-1",
        laneId: "analytics",
        title: "AnalyticsDashboardPlan",
        start: 0.25,
        end: 1.4,
        color: "emerald",
    },
    {
        id: "fb-2",
        laneId: "analytics",
        title: "AnalyticsDashboardEntities",
        start: 1.45,
        end: 2.9,
        color: "emerald",
    },
    {
        id: "ad-3",
        laneId: "analytics",
        title: "AnalyticsDashboardBackend",
        start: 3.1,
        end: 4.2,
        color: "teal",
    },
    {
        id: "ad-4",
        laneId: "analytics",
        title: "AnalyticsDashboardQA",
        start: 5.1,
        end: 6.9,
        color: "emerald"
    },
    {
        id: "ad-5",
        laneId: "analytics",
        title: "AnalyticsDashboardLaunch",
        start: 7.1,
        end: 7,
        color: "emerald"
    },

    // Form Builder — similar 4 steps, spread with fractional positions
    { id: "fb-1", laneId: "form", title: "FormBuilderPlan", start: 0.25, end: 0.8, color: "teal" },
    { id: "fb-2", laneId: "form", title: "FormBuilderEntities", start: 1.2, end: 1.85, color: "emerald" },
    { id: "fb-3", laneId: "form", title: "FormBuilderDesign", start: 2.2, end: 3.0, color: "teal" },
    { id: "fb-4", laneId: "form", title: "FormBuilderPreview", start: 4.2, end: 5.9, color: "emerald" },
    { id: "fb-5", laneId: "form", title: "FormBuilderDocs", start: 6.2, end: 7, color: "gray" },

    // Invoice Automation — varied phases; in progress style
    { id: "ia-1", laneId: "invoice", title: "InvoiceAutomationEntities", start: 0.3, end: 1.7, color: "emerald" },
    { id: "ia-3", laneId: "invoice", title: "InvoiceBuilderBackend", start: 3.2, end: 6.15, color: "teal" },
    { id: "ia-4", laneId: "invoice", title: "InvoiceAutomationDocs", start: 6.2, end: 6.9, color: "gray" },
]

export default function ProjectTimelinePhases({
    phaseLabels = phases,
    lanesData = lanes,
    tasksData = tasks,
}: {
    phaseLabels?: string[]
    lanesData?: Lane[]
    tasksData?: Task[]
}) {
    const cols = phaseLabels.length
    const toPct = (n: number) => (n / cols) * 100

    const { t } = useTranslation()

    return (
        <div className="space-y-4">
            {/* Phase ruler */}
            <div className="relative w-full overflow-x-auto rounded-lg border bg-background/60">
                <div className="grid h-11 min-w-[880px] grid-cols-[180px_minmax(700px,1fr)] items-center text-[11px] text-muted-foreground">
                    {/* Left gutter */}
                    <div className="flex h-full items-center border-r bg-background/70 px-3 font-medium">{t("Phases")}</div>
                    {/* Phase columns */}
                    <div
                        className="relative h-full"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(to right, transparent 0, transparent calc(100%/8 - 1px), rgba(0,0,0,0.06) calc(100%/8 - 1px), rgba(0,0,0,0.06) calc(100%/8))",
                        }}
                    >
                        <div className="flex h-full">
                            {phaseLabels.map((p, i) => (
                                <div key={p + i} className="flex h-full min-w-[110px] flex-1 items-center justify-center">
                                    <span className="rounded bg-muted/50 px-2 py-0.5">{t(p)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lanes + Tasks */}
            <Card className="relative w-full overflow-x-auto border bg-[linear-gradient(135deg,rgba(16,185,129,0.04)_0%,rgba(20,184,166,0.04)_100%)]">
                <div className="grid min-w-[880px] grid-cols-[180px_minmax(700px,1fr)]">
                    {/* Lane labels */}
                    <div className="flex flex-col">
                        {lanesData.map((lane) => (
                            <div key={lane.id} className="flex h-32 items-center border-b px-4 text-sm font-medium last:border-b-0">
                                <span
                                    className={cn(
                                        "mr-2 inline-block h-2 w-2 rounded-full",
                                        lane.accent === "teal" ? "bg-teal-600" : "bg-emerald-600",
                                    )}
                                />
                                {t(lane.label)}
                            </div>
                        ))}
                    </div>

                    {/* Timeline grid */}
                    <div className="relative">
                        {/* Column grid backdrop */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(to right, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent calc(100%/8))",
                            }}
                        />

                        {/* Lanes with spaced blocks */}
                        <div className="relative">
                            {lanesData.map((lane) => {
                                const laneSeed = hashToInt(lane.id, 3) // 0..2
                                const laneBaseY = laneSeed === 0 ? 4 : laneSeed === 1 ? 10 : 16 // baseline per row

                                return (
                                    <div key={lane.id} className="relative h-32 border-b last:border-b-0">
                                        {tasksData
                                            .filter((task) => task.laneId === lane.id)
                                            .slice(0, 5)
                                            .map((task) => {
                                                // Compute left/width from fractional phase positions
                                                const leftBase = toPct(task.start)
                                                const widthBase = toPct(task.end - task.start)

                                                // Increase spacing: inset block within its column group + deterministic jitter
                                                const jitterX = (hashToInt(task.id, 9) - 4) * 0.9 // ~ -3.6% .. +3.6%
                                                const left = leftBase + 1.2 + jitterX
                                                let width = widthBase - 2.4 - Math.abs(jitterX) * 0.4
                                                if (width < 10) width = 10

                                                // Vertical placement: distribute around lane middle for an editorial feel
                                                const jitterIdx = hashToInt(task.id + "-y", 5) // 0..4
                                                const offsets = [6, 18, 34, 50, 22] // px from top within lane
                                                const topOffset = Math.min(offsets[jitterIdx] + laneBaseY, 64)

                                                const color =
                                                    task.color === "teal"
                                                        ? "bg-teal-600 hover:bg-teal-600/90"
                                                        : task.color === "gray"
                                                            ? "bg-muted hover:bg-muted/90 text-foreground ring-inset ring-foreground/5"
                                                            : task.color === "amber"
                                                                ? "bg-amber-500 hover:bg-amber-500/90"
                                                                : "bg-emerald-600 hover:bg-emerald-600/90"

                                                return (
                                                    <div
                                                        key={task.id}
                                                        className={cn(
                                                            "absolute h-16 min-w-[96px] rounded-2xl px-3 py-2 text-left text-[11px] text-white shadow-sm",
                                                            "outline-none ring-1 ring-black/5 transition-all duration-200",
                                                            "hover:z-10 hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-emerald-500",
                                                            color,
                                                        )}
                                                        style={{ left: `${left}%`, width: `${width}%`, top: `${topOffset}px` }}
                                                        title={task.title}
                                                        aria-label={`${lane.label}: ${task.title}`}
                                                    >
                                                        <div className="line-clamp-2 font-medium">{t(task.title)}</div>
                                                        <div className="opacity-90">{`Step ${Math.floor(task.start) + 1} – ${Math.ceil(task.end)}`}</div>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
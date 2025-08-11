import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectMiniCards } from "./project-mini-cards"
import ProjectTimelinePhases from "./project-timeline"
import { useTranslation } from "react-i18next"

export function SectionProjects({ id = "projects" }: { id?: string }) {
    const { t } = useTranslation()
    return (
        <section id={id} aria-labelledby="projects-title" className="space-y-6">
            <div className="flex flex-col gap-1">
                <h2 id="projects-title" className="h2 font-semibold">
                    {t("Projects")}
                </h2>
                <p className="mt-1 max-w-2xl text-md text-muted-foreground">
                    {t("ProjectsDescription")}
                </p>
            </div>

            {/* Compact project cards row */}
            <ProjectMiniCards />

            {/* Per-project creation steps timeline (phases) */}
            <ProjectTimelinePhases />

        </section>
    )
}

"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { ArrowLeft } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

type ExperienceItem = {
  title: string
  role: string
  date: string
  description: string[]
  skills: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Haupper LDa",
    role: "Fullstack developer",
    date: "04/2024 - data atual",
    description: [
      "UX_UI_development",
      "API_service_creation",
      "dashboard_creation",
      "security_logic",
    ],
    skills: ["React", "Node.js", "TypeScript", "API Development"],
  },
  {
    title: "final_project",
    role: "ISEC_LxDataLab_partnership",
    date: "02/2023 - 07/2023",
    description: [
      "traffic_data_analysis",
      "pattern_trend_identification",
      "data_loading_preprocessing",
      "GRU_model_training",
      "result_interpretation",
    ],
    skills: ["Data Analysis", "Machine Learning", "Python", "GRU Model"],
  },
  {
    title: "advanced_java_programming",
    role: "project_internship_management",
    date: "02/2022 - 06/2022",
    description: ["state_machine", "object_serialization", "MVC_model"],
    skills: ["Java", "State Machines", "MVC", "Object Serialization"],
  },
  {
    title: "operating_systems_language",
    role: "MedicalSO e Champion",
    date: "09/2021 - 06/2022",
    description: ["interprocess_communication", "synchronization_concurrency", "threads_mutex"],
    skills: ["C", "Operating Systems", "Concurrency", "Multithreading"],
  },
]

export function ExperienceTimeline({
  title = "Experiência e Trabalho",
  onSeeTimeline
}: {
  title?: string
  onSeeTimeline?: () => void
}) {
  const { t } = useTranslation()

  const isMobile = useIsMobile()

  return (
    <section id="timeline" aria-labelledby="experience-title" className="mt-4 md:mt-6">
      <div className="relative my-4">
        <Button
          variant="secondary"
          className="flex items-center text-md gap-1 rounded-l-sm absolute left-0 top-1/2 -translate-y-1/2 bg-muted/50 py-2 px-4 hover:bg-muted/80"
          onClick={onSeeTimeline}
        >
          <ArrowLeft className="h-4 w-4" />
          {!isMobile && t("Back")}
        </Button>

        <h2
          id="experience-title"
          className="h2 font-semibold text-center"
        >
          {title}
        </h2>
      </div>

      <div className="relative mx-auto max-w-5xl mt-10">
        {/* Static vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-emerald-500 via-emerald-500/70 to-transparent hidden md:inline-flex" />

        {/* Items */}
        <div className="relative z-10 flex flex-col gap-10">
          {EXPERIENCES.map((exp, index) => {
            const isLeft = index % 2 === 0
            return (
              <div key={exp.title} className="relative flex min-h-[140px] items-center">
                {/* Static dot on the line */}
                <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-emerald-600 ring-4 ring-emerald-200/50 flex items-center justify-center hidden md:inline-flex">
                  <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
                </div>

                {/* Card */}
                <div className={cn("w-full md:w-1/2", isLeft ? "pr-0 md:pr-12" : "pl-0 md:pl-12 ml-auto")}>
                  <Card
                    className={cn(
                      "relative overflow-hidden border bg-gradient-to-b from-background to-background/70 shadow-sm",
                      "ring-1 ring-emerald-100/60",
                    )}
                  >
                    {/* small notch pointing to the line */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute top-1/2 block h-3 w-3 -translate-y-1/2 rotate-45 bg-emerald-600/50",
                        "border border-emerald-100/70",
                        isMobile ? "right-[-6px]" : isLeft ? "right-[-6px]" : "left-[-6px]",
                      )}
                    />
                    <CardHeader>
                      <CardTitle className="text-base">{t(exp.title)}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm font-medium">{t(exp.role)}</p>
                      <p className="text-xs text-muted-foreground">{exp.date}</p>
                      <ul className="list-inside list-disc text-sm text-muted-foreground">
                        {exp.description.map((d) => (
                          <li key={d}>{t(d)}</li>
                        ))}
                      </ul>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {exp.skills.map((s) => (
                          <Badge
                            key={s}
                            variant="secondary"
                            className="border-emerald-200/60 bg-emerald-50 text-emerald-700"
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
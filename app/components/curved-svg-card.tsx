"use client"

import type { ComponentType } from "react"
import { useId } from "react"
import { Zap } from "lucide-react"
import { CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import { motion } from 'framer-motion'

type CurvedSvgCardProps = {
    title?: string
    description?: string
    badges?: string[]
    icon?: React.ReactNode
    heightClass?: string
    flipX?: boolean
    className?: string
}

export function CurvedSvgCard({
    title = "Performance",
    description = "Obcecado com Core Web Vitals. Renderização edge-first, estratégias de cache e instrumentação.",
    badges = ["RUM", "Edge", "Profiling"],
    icon: Icon,
    heightClass = "h-[320px] md:h-[340px] lg:h-[360px]",
    flipX = false,
    className,
}: CurvedSvgCardProps) {

    const { t } = useTranslation();

    const d =
        "M 26 2 H 130 C 188 3 141 49 228 51 H 253 Q 279 44 276 102 L 278 354 Q 278 378 254 378 L 26 378 Q 2 378 2 354 L 2 26 Q 2 2 26 2 Z"

    const vb = { w: 280, h: 380 }
    const mirror = flipX ? `translate(${vb.w},0) scale(-1,1)` : undefined

    const uid = useId().replace(/[:]/g, "_")
    const filterId = `cardShadow_${uid}`
    const clipId = `cardShape_${uid}`
    const hoverFilterId = `cardShadowHover_${uid}`

    return (
        <div className={cn("w-full flex items-end max-w-[280px] mx-auto", className)}>
            <motion.div
                className={cn("relative w-full cursor-pointer group", heightClass)}
                whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                initial={false}
            >
                <svg
                    viewBox={`0 0 ${vb.w} ${vb.h}`}
                    preserveAspectRatio="xMidYMid meet"
                    className="absolute inset-0 h-full w-full"
                    aria-label={`${title} card`}
                    role="img"
                >
                    <defs>
                        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="2" stdDeviation="1.8" floodColor="rgba(16, 185, 129, 0.24)" floodOpacity="1" />
                            <feDropShadow dx="0" dy="4" stdDeviation="2.8" floodColor="rgba(16, 185, 129, 0.18)" floodOpacity="1" />
                            <feDropShadow dx="0" dy="-1" stdDeviation="1.2" floodColor="rgba(16, 185, 129, 0.12)" floodOpacity="1" />
                        </filter>

                        <filter id={hoverFilterId} x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="rgba(16, 185, 129, 0.25)" floodOpacity="1" />
                            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(16, 185, 129, 0.2)" floodOpacity="1" />
                            <feDropShadow dx="0" dy="-1" stdDeviation="8" floodColor="rgba(16, 185, 129, 0.15)" floodOpacity="1" />
                        </filter>

                        <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
                            <path d={d} transform={mirror} />
                        </clipPath>
                    </defs>

                    <g
                        filter={`url(#${filterId})`}
                        className="transition-all duration-300 ease-out group-hover:hidden"
                    >
                        <path d={d} transform={mirror} fill="white" />
                    </g>

                    <g
                        filter={`url(#${hoverFilterId})`}
                        className="hidden transition-all duration-300 ease-out group-hover:block"
                    >
                        <path d={d} transform={mirror} fill="white" />
                    </g>

                    <foreignObject x="0" y="0" width={vb.w} height={vb.h} clipPath={`url(#${clipId})`}>
                        <div className="h-full w-full">
                            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
                                <CardHeader className="flex flex-row items-center justify-center gap-2 p-0">
                                    {Icon}
                                    <CardTitle className="m-0 h3 font-semibold leading-tight text-foreground">{t(title)}</CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-3 sm:space-y-6 p-0">
                                    <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                                        {t(description)}
                                    </CardDescription>

                                    <div className="flex flex-wrap items-center justify-center gap-1 opacity-80 px-2 mt-0 sm:mt-4">
                                        {badges.map((b) => (
                                            <Badge
                                                key={b}
                                                className="text-xs sm:text-sm leading-none py-0.5 px-1.5 font-normal whitespace-nowrap"
                                                variant="outline"
                                            >
                                                {b}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>
                        </div>
                    </foreignObject>
                </svg>
            </motion.div>
        </div>
    )
}
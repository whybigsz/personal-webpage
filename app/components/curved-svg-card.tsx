"use client"

import type { ComponentType } from "react"
import { useId } from "react"
import { Zap } from "lucide-react"
import { CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

type IconProps = { className?: string; "aria-hidden"?: boolean }
type CurvedSvgCardProps = {
    title?: string
    description?: string
    badges?: string[]
    icon?: React.ReactNode
    // Consistent height so cards align horizontally; override as needed.
    heightClass?: string
    // Mirror only the shape horizontally (left variant). Content stays upright.
    flipX?: boolean
    className?: string
}

/**
 * CurvedSvgCard
 * - Exact path clipping + small neutral shadow that follows curved corners.
 * - Content centered; precise font sizes (16/14/12).
 * - Fits grid cells; width is 100%; height via heightClass.
 */
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

    // Unique IDs per instance
    const uid = useId().replace(/[:]/g, "_")
    const filterId = `cardShadow_${uid}`
    const clipId = `cardShape_${uid}`

    return (
        <div className={cn("w-full flex items-end", className)}>
            <div className={cn("relative mx-auto w-full", heightClass)}>
                <svg
                    viewBox={`0 0 ${vb.w} ${vb.h}`}
                    preserveAspectRatio="xMidYMid meet"
                    className="absolute inset-0 h-full w-full"
                    aria-label={`${title} card`}
                    role="img"
                >
                    <defs>
                        {/* Small, light gray shadow that hugs the curved corners */}
                        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
                            {/* Bottom shadows (stronger, card-like) */}
                            <feDropShadow dx="0" dy="2" stdDeviation="1.4" floodColor="rgba(0, 128, 0, 0.12)" floodOpacity="1" />
                            <feDropShadow dx="0" dy="4" stdDeviation="2.2" floodColor="rgba(0, 128, 0, 0.1)" floodOpacity="1" />
                            {/* Subtle TOP shadow: small negative dy with low opacity */}
                            <feDropShadow dx="0" dy="-2" stdDeviation="1.4" floodColor="rgba(0, 128, 0, 0.08)" floodOpacity="1" />
                        </filter>

                        <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
                            <path d={d} transform={mirror} />
                        </clipPath>
                    </defs>

                    {/* Shape with subtle card-like shadow */}
                    <g filter={`url(#${filterId})`}>
                        <path d={d} transform={mirror} fill="white" />
                    </g>

                    {/* Centered HTML content clipped to the exact shape */}
                    <foreignObject x="0" y="0" width={vb.w} height={vb.h} clipPath={`url(#${clipId})`}>
                        <div className="h-full w-full">
                            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
                                <CardHeader className="flex flex-row items-center justify-center gap-2 p-0">
                                    {Icon}
                                    {/* Title 16px */}
                                    <CardTitle className="m-0 h3 font-semibold leading-tight text-foreground">{t(title)}</CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-3 p-0">
                                    {/* Subtitle 14px */}
                                    <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                                        {t(description)}
                                    </CardDescription>

                                    {/* Badges 12px */}
                                    <div className="flex flex-wrap items-center justify-center gap-2 opacity-80">
                                        {badges.map((b) => (
                                            <Badge key={b} className="text-md leading-none py-1 px-2 font-normal" variant="outline">
                                                {b}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>
                        </div>
                    </foreignObject>
                </svg>
            </div>
        </div>
    )
}

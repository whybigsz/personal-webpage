"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useSidebar } from "@/components/ui/sidebar"
import { ChevronLeft, Menu } from "lucide-react"

type Props = {
    className?: string
}

export function BigSidebarToggle({ className }: Props) {
    const { open, toggleSidebar } = useSidebar() // Build custom triggers with useSidebar [^1]

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        onClick={toggleSidebar}
                        aria-label="Toggle sidebar"
                        aria-expanded={open}
                        variant="outline"
                        size="icon"
                        className={cn(
                            // Minimalist, but noticeable
                            "h-11 w-11 rounded-full border-2 border-foreground/15 bg-background text-foreground",
                            // Clear affordance on hover/focus
                            "hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/20 dark:hover:text-emerald-300",
                            "focus-visible:ring-2 focus-visible:ring-emerald-500",
                            "shadow-sm",
                            className,
                        )}
                    >
                        {open ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="start" className="text-xs">
                    <span>Toggle sidebar</span>
                    <span className="ml-2 rounded border px-1 py-0.5 text-[10px] opacity-80">Ctrl/Cmd + B</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

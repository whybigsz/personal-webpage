"use client"

import { useEffect, ReactNode } from 'react'
import '../../i18n/config' // Import here in client component

interface ClientI18nProviderProps {
    children: ReactNode
}

export default function ClientI18nProvider({ children }: ClientI18nProviderProps) {
    useEffect(() => {
        // i18n is initialized when this component mounts
    }, [])

    return <>{children}</>
}
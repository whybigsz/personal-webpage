import * as React from "react"
import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const FLAGS = {
    en: "/images/flags/us.jpg",
    pt: "/images/flags/portugal.jpg",
}

const NAMES = {
    en: "English",
    pt: "Português",
}

export function LanguageDropdown({ className }: { className?: string }) {
    const { i18n } = useTranslation()

    // Force English as default if no language is set or cached
    const currentLocale = React.useMemo(() => {
        const lang = i18n.language || 'en'
        // If language is not one of our supported languages, fallback to English
        if (!['en', 'pt'].includes(lang)) {
            return 'en'
        }
        return lang
    }, [i18n.language])

    const availableLocales = ['en', 'pt']

    // Effect to force English on component mount if needed
    React.useEffect(() => {
        if (!i18n.language || !['en', 'pt'].includes(i18n.language)) {
            i18n.changeLanguage('en')
        }
    }, [i18n])

    const changeLanguage = (locale: string) => {
        i18n.changeLanguage(locale)
        // Optionally force update localStorage/cache
        localStorage.setItem('i18nextLng', locale)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className={`rounded-md ${className ?? ""}`}>
                    <img
                        src={FLAGS[currentLocale as keyof typeof FLAGS] || FLAGS.en}
                        alt={currentLocale}
                        className="h-4 w-6 object-cover rounded-sm"
                    />
                    <ChevronDown className="ml-1 h-4 w-4 opacity-75" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[8rem]">
                {availableLocales.map((code) => (
                    <DropdownMenuItem
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className="cursor-pointer"
                    >
                        <img
                            src={FLAGS[code as keyof typeof FLAGS]}
                            alt={code}
                            className="mr-2 h-4 w-6 object-cover rounded-sm"
                        />
                        <span>{NAMES[code as keyof typeof NAMES]}</span>
                        {currentLocale === code && (
                            <span className="ml-auto text-xs opacity-60">✓</span>
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
"use client"

import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "react-i18next"

export function SectionContact({ id = "contact" }: { id?: string }) {
    const { t } = useTranslation()
    return (
        <section id={id} aria-labelledby="contact-title" className="space-y-6">
            <div className="flex flex-col gap-1">
                <h2 id="contact-title" className="h2 font-semibold">
                    {t("Contact")}
                </h2>
                <p className="max-w-2xl text-md text-muted-foreground">
                    {t("ContactDescription")}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">{t("MessageMe")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                alert("Thanks! This demo form doesn’t send yet.")
                            }}
                            className="space-y-3"
                        >
                            <Input name="name" placeholder={t("YourName")} aria-label="Your name" />
                            <Input type="email" name="email" placeholder="Email" aria-label="Email" />
                            <Textarea name="message" placeholder={t("CallToAction")} aria-label="Message" />
                            <Button className="bg-emerald-600 text-white hover:bg-emerald-700">{t("Send")}</Button>
                        </form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">{t("Elsewhere")}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-emerald-600" />
                            <Link href="mailto:john@developer.com" className="hover:underline">
                                ricardo.ferreira.2222@gmail.com
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Github className="h-4 w-4 text-emerald-600" />
                            <Link href="#" className="hover:underline">
                                github.com/whybigsz
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin className="h-4 w-4 text-emerald-600" />
                            <Link href="#" className="hover:underline">
                                linkedin.com/in/ricardo-connect/
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

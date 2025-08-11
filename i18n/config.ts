"use client"

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import your translations directly instead of using HTTP backend
import enCommon from "../public/locales/en/common.json";
import ptCommon from "../public/locales/pt/common.json";

const resources = {
    en: {
        common: enCommon,
    },
    pt: {
        common: ptCommon,
    },
};

i18n
    .use(LanguageDetector) // detect language
    .use(initReactI18next) // bind to React
    .init({
        resources,
        lng: "en", // Force English as default language
        fallbackLng: "en",
        debug: process.env.NODE_ENV === "development",

        interpolation: {
            escapeValue: false, // react already does escaping
        },

        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },

        // Whitelist only supported languages
        supportedLngs: ["en", "pt"],
        nonExplicitSupportedLngs: false, // Reject unsupported languages

        // Clean language codes
        cleanCode: true,

        // Load only supported languages
        load: "languageOnly",

        ns: ["common"],
        defaultNS: "common",
    });

// Force English if current language is not supported or if nothing is cached
if (!i18n.language || !["en", "pt"].includes(i18n.language)) {
    i18n.changeLanguage("en");
}

export default i18n;
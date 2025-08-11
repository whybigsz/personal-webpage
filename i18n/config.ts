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
        fallbackLng: "en",
        debug: process.env.NODE_ENV === "development",

        interpolation: {
            escapeValue: false, // react already does escaping
        },

        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },

        ns: ["common"],
        defaultNS: "common",
    });

export default i18n;

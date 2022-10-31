import en from "./translations/en.json";
import it from "./translations/it.json"
import pt from "./translations/pt.json"
import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof en;
  }
}

i18n
  .createInstance()
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: en
      },
      it: {
        translation: it
      },
      pt: {
        translation: pt
      }
    },
    fallbackLng: "en",
  });
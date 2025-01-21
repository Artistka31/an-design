import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./assets/Locales/en.json"; // Language resource files
import ukrTranslation from "./assets/Locales/ukr.json";

const resources = {
  en: { translation: enTranslation },
  ukr: { translation: ukrTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;

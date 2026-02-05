import i18next from "i18next"
import { initReactI18next } from "react-i18next";
import en from './locales/en.json'
import ar from './locales/ar.json'

(localStorage.getItem('lang'))?null:localStorage.setItem('lang', 'en')


i18next.use(initReactI18next).init({
    resources: {
        en: {translation:en},
        ar: {translation:ar},
    },
    lng: localStorage.getItem('lang'),
    fallbackLng: 'en'
})

export default i18next


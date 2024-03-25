import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from  './locale/es.json';
import en from './locale/en.json';
import pt from './locale/pt.json';
import ar from './locale/ar.json';
import jp from './locale/jp.json';
import ch from './locale/ch.json';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    resources:{
        es: es,
        en: en,
        pt: pt,
        ar: ar,
        jp: jp,
        ch: ch,
    },
    react: {
        useSuspense: false,
    },
    interpolation:{
        escapeValue: false,
    }
})

export default i18n;


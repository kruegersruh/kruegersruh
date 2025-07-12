import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {},
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Einwilligung zu Cookies & Datenverarbeitung",
          description:
            'Auf dieser Website nutzen wir Cookies und vergleichbare Funktionen zur Verarbeitung von Endgeräteinformationen und personenbezogenen Daten (wie z.B. IP-Adressen oder Browserinformationen) zwecks Einbindung von Inhalten, externen Diensten und Elementen Dritter.',
          acceptAllBtn: 'AKZEPTIEREN',
          acceptNecessaryBtn: 'ABLEHNEN',
          showPreferencesBtn: 'EINSTELLUNGEN',
          footer:
            '<a href="/datenschutz">Datenschutz</a>',
        },
        preferencesModal: {
          title: 'Einstellungen',
          acceptAllBtn: 'AKZEPTIEREN',
          acceptNecessaryBtn: 'ABLEHNEN',
          savePreferencesBtn: 'SPEICHERN',
          closeIconLabel: '',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Einsatz von Cookies',
              description:
                'Auf der Website werden notwendige und funktionale Elemente eingesetzt, die für den allgemeinen Betrieb oder zur Verbesserung von Funktionalitäten eingesetzt werden.',
            },
            {
              title:
                'Notwendig <span class="pm__badge">Immer aktiviert.</span>',
              description:
                'Hier sind alle Elemente zu finden, die für den Betrieb der Website notwendig sind oder für die der Betreiber ein berechtigtes Interesse nach Art. 6 Abs. 1 DSGVO hat.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Funktional',
              description:
                'Hier sind alle Elemente zu finden, die für die Verbesserung der Funktionalität eingesetzt werden.',
              linkedCategory: 'functionality',
            },
          ],
        },
      },
    },
  },
};

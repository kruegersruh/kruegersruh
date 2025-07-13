import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  root: '#cc-container',

  disablePageInteraction: true,
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
      services: {
        formspark: {
          label: '<a href="https://formspark.io/legal/privacy-policy/" target="_blank">Formspark</a>',
        },
        turnstile: {
          label: '<a href="https://www.cloudflare.com/de-de/turnstile-privacy-policy/" target="_blank">Cloudflare Turnstile</a>',
        },
      }, 
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
          title: "Einwilligung zur Datenverarbeitung",
          description:
            'Auf dieser Website nutzen wir Cookies und vergleichbare Funktionen zur Verarbeitung von Endgeräteinformationen und personenbezogenen Daten (wie z. B. IP-Adressen oder Browserinformationen) zwecks Einbindung von Inhalten und externen Diensten.',
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
                'Auf der Website werden notwendige Elemente zur Bereitstellung und Prüfung des Kontaktformulars eingesetzt.',
            },
            {
              title:
                'Notwendig <span class="pm__badge">Immer aktiviert.</span>',
              description:
                'Hier finden sich alle für den Betrieb des Kontaktformulars notwendigen Elemente.',
              linkedCategory: 'necessary',
            },
          ],
        },
      },
    },
  },
};

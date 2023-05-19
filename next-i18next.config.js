/** @type {import('next-i18next').UserConfig} */

module.exports = {
  i18n: {
    // all the locales supported in the application
    locales: ["en", "ar"],
    // the default locale to be used when visiting
    // a non-localized route (e.g. `/about`)
    defaultLocale: "en",
    keySeparator: ".",
    fallbackLng: "en",
  },
};

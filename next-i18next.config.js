/** @type {import('next-i18next').UserConfig} */
const path = require("path");

module.exports = {
  i18n: {
    // all the locales supported in the application
    locales: ["en", "ar"],
    // the default locale to be used when visiting
    // a non-localized route (e.g. `/about`)
    defaultLocale: "en",
    keySeparator: ".",
    fallbackLng: "en",
    localePath: path.resolve("./public/locales"),
  },
};

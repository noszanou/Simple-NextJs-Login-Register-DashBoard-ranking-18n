module.exports = {
    i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'en',
      localeDetection: false,
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};
module.exports = {
    i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'fr',
      localeDetection: false,
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  };
  
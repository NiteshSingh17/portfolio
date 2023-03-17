module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'Nitesh Singh',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : '',
      title: 'Nitesh Singh',
      description: 'Nitesh Singh Portfolio',
    },
  },
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};

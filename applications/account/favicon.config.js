module.exports = {
    logo: 'src/assets/favicon-proton-32.svg',
    favicons: {
        appName: 'Proton',
        appDescription:
            'Our encrypted services let you control who has access to your emails, plans, files, and online activity. Free plans are available.',
    },
    url: 'https://account.proton.me/',
    locales: Object.keys(require('./locales/config/locales.json')),
};

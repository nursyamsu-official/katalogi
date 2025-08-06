// import packageInfo from '../../package.json';

export const AppInfo = {
    APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? '',
    APP_DESCRIPTION: 'Aplikasi Standarisasi Master Data',
    // PRODUCTION: process.env.NODE_ENV === 'production',
    // VERSION: packageInfo.version
} as const;


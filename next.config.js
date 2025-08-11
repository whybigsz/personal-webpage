/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const { i18n } = require('./next-i18next.config');

module.exports = {
    i18n,
    reactStrictMode: true,
};


const path = require('path');

module.exports = {
    webpack: (config) => {
        config.watchOptions = {
            ignored: [path.resolve(__dirname, 'node_modules')],
        };
        return config;
    },
};
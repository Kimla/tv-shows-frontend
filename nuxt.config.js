const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:/]+/g) || [];
    }
}

module.exports = {
    mode: 'spa',

    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'sv',
        },
        title: 'Bravissimo',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
        ],
        link: [
            // { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
            // { rel: 'dns-prefetch', href: '//cms.domain.com' },
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#FFFFFF' },

    transition: {
        name: 'page',
        mode: 'out-in',
    },

    /*
     ** Global CSS
     */
    css: ['@/assets/css/main.css'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { mode: 'client', src: '~/plugins/polyfills' },
        { mode: 'client', src: '~/plugins/v-click-outside' },
        { mode: 'all', src: '~/plugins/base-components' },
        { mode: 'all', src: '~/plugins/portal-vue' },
    ],

    modules: [
        '@nuxtjs/sitemap',
        [
            '@nuxtjs/google-analytics',
            {
                id: 'xxx',
            },
        ],
        [
            '@nuxtjs/google-tag-manager',
            {
                id: 'GTM-xxx',
            },
        ],
    ],

    env: {
        APP_ENV: process.env.APP_ENV || 'dev',
    },

    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        splitChunks: {
            layouts: false,
            pages: false,
            commons: false,
        },
        extend(config, { isDev, isClient }) {
            // Run ESLint on save
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
            if (!isDev) {
                // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
                // for more information about purgecss.
                config.plugins.push(
                    new PurgecssPlugin({
                        paths: glob.sync([
                            path.join(__dirname, './pages/**/*.vue'),
                            path.join(__dirname, './layouts/**/*.vue'),
                            path.join(__dirname, './components/**/*.vue'),
                        ]),
                        extractors: [
                            {
                                extractor: TailwindExtractor,
                                extensions: ['vue'],
                            },
                        ],
                        whitelistPatterns: [],
                        whitelist: [
                            'html',
                            'body',
                            'nuxt-progress',
                            'vue-map',
                            'page-enter-active',
                            'page-leave-active',
                            'page-enter',
                            'page-leave-active',
                            'nuxt-link-exact-active',
                            'nuxt-link-active',
                        ],
                    }),
                );
            }

            return config;
        },
    },
};

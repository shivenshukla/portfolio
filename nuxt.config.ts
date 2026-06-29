// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/icon',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/eslint',
        '@nuxt/a11y',
        '@nuxt/hints',
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            bodyAttrs: {
                class: 'bg-white dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50',
            },
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'shortcut icon', href: '/favicon.ico' },
            ],
        },
    },
    colorMode: {
        classSuffix: '',
    },
    compatibilityDate: '2026-05-09',
    a11y: {
        // DevTools + axe scans (default: enabled in dev only)
        logIssues: true,
        axe: {
            options: {},
            runOptions: {
                runOnly: ['wcag2a', 'wcag2aa', 'best-practice'],
            },
        },
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
            },
        },
    },
    hints: {
        // Dev-only (module no-ops in production builds)
        devtools: true,
        features: {
            webVitals: true,
            hydration: true,
            lazyLoad: true,
            thirdPartyScripts: true,
            htmlValidate: true,
        },
    },
})

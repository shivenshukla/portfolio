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
                class: 'bg-white dark:bg-zinc-800',
            },
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

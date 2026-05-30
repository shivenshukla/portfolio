// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/icon',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/eslint',
        '@nuxt/a11y',
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
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
})

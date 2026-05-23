// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/icon',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/eslint',
    ],
    colorMode: {
        classSuffix: '',
    },
    compatibilityDate: '2026-05-09',
    eslint: {
        config: {
            stylistic: {
                indent: 4,
            },
        },
    },
})

<template>
    <Head>
        <Title>Shiven Shukla</Title>
    </Head>
    <div class="flex flex-col min-h-screen bg-white dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
        <SiteHeader />
        <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grow items-start w-full">
            <NuxtPage />
        </main>
        <SiteFooter />
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
    background-color: #ffffff; /* white */
    overscroll-behavior-y: none;
}

html.dark {
    background-color: #0a0a0a; /* neutral-950 */
}

body {
    overscroll-behavior-y: none;
}
</style>

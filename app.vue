<template>
  <Head>
    <Title>Shiven Shukla</Title>
  </Head>
  <div class="flex flex-col min-h-screen dark:bg-zinc-800 dark:text-gray-200">
    <SiteHeader />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
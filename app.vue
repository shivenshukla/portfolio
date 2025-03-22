<template>
  <Head>
    <Title>Shiven Shukla</Title>
  </Head>
  <body class="dark:bg-zinc-800">
    <div class="flex flex-col min-h-screen dark:bg-zinc-800 dark:text-white">
      <SiteHeader />
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grow items-start w-full">
        <NuxtPage />
      </main>
      <SiteFooter />
    </div>
  </body>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
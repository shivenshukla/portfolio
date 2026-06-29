<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const route = { name: 'index' }

const navigation = [
    { name: 'About Me', href: '#about', current: route.name == 'about' },
    { name: 'Experience', href: '#experience', current: route.name == 'experience' },
    { name: 'Projects', href: '#projects', current: route.name == 'projects' },
]

type Theme = 'light' | 'dark'

const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
}
</script>

<template>
    <Disclosure
        v-slot="{ open }"
        as="nav"
        class="fixed w-full bg-white dark:bg-neutral-950 z-50"
    >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <a
                    href="#"
                    class="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 shrink-0"
                    aria-label="Home"
                >
                    Shiven Shukla
                </a>
                <div class="flex items-center gap-1">
                    <div class="hidden sm:flex sm:gap-1">
                        <a
                            v-for="item in navigation"
                            :key="item.name"
                            :href="item.href"
                            :class="[item.current ? 'text-neutral-950 dark:text-neutral-50' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800', 'rounded-md px-3 py-2 text-sm font-medium']"
                            :aria-current="item.current ? 'page' : undefined"
                        >
                            {{ item.name }}
                        </a>
                    </div>
                    <ClientOnly>
                        <button
                            type="button"
                            class="inline-flex h-10 w-10 items-center justify-center overflow-hidden text-neutral-600 dark:text-neutral-400 rounded-md hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                            :aria-label="$colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
                            @click="setColorTheme($colorMode.value === 'dark' ? 'light' : 'dark')"
                        >
                            <Transition
                                name="theme-icon"
                                mode="out-in"
                            >
                                <SunIcon
                                    v-if="$colorMode.value === 'dark'"
                                    key="sun"
                                    class="h-6 w-6"
                                />
                                <MoonIcon
                                    v-else
                                    key="moon"
                                    class="h-6 w-6"
                                />
                            </Transition>
                        </button>
                        <template #fallback>
                            <div class="h-10 w-10" />
                        </template>
                    </ClientOnly>
                    <div class="sm:hidden">
                        <DisclosureButton
                            class="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon
                                v-if="!open"
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                            <XMarkIcon
                                v-else
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton
                    v-for="item in navigation"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    :class="[item.current ? 'text-neutral-950 dark:text-neutral-50' : 'text-neutral-950 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800', 'block rounded-md px-3 py-2 text-base font-bold text-center']"
                    :aria-current="item.current ? 'page' : undefined"
                >
                    {{ item.name }}
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.theme-icon-enter-from,
.theme-icon-leave-to {
    opacity: 0;
    transform: translateY(0.5rem);
}

@media (prefers-reduced-motion: reduce) {
    .theme-icon-enter-active,
    .theme-icon-leave-active {
        transition: none;
    }
}
</style>

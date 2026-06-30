<script setup lang="ts">
import { defineComponent, onUnmounted, watch } from 'vue'
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

function setBodyScrollLocked(locked: boolean) {
    if (!import.meta.client) {
        return
    }

    document.documentElement.style.overflow = locked ? 'hidden' : ''
    document.body.style.overflow = locked ? 'hidden' : ''
}

function clearBodyScrollLock() {
    if (!import.meta.client) {
        return
    }

    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
}

const MobileMenuScrollLock = defineComponent({
    props: {
        menuOpen: { type: Boolean, required: true },
    },
    setup(props) {
        watch(() => props.menuOpen, setBodyScrollLocked, { immediate: true })
        onUnmounted(clearBodyScrollLock)
        return () => null
    },
})
</script>

<template>
    <Disclosure
        v-slot="{ open, close }"
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

        <MobileMenuScrollLock :menu-open="open" />

        <Transition name="mobile-backdrop">
            <button
                v-if="open"
                type="button"
                class="sm:hidden fixed inset-0 top-16 z-30 bg-neutral-950/20 dark:bg-black/50"
                aria-label="Close main menu"
                @click="close"
            />
        </Transition>

        <Transition name="mobile-menu">
            <DisclosurePanel class="sm:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-hidden bg-white dark:bg-neutral-950">
                <div class="mx-auto flex h-full w-full max-w-7xl flex-col overflow-y-auto overscroll-contain px-4 py-8 sm:px-6 lg:px-8">
                    <DisclosureButton
                        v-for="item in navigation"
                        :key="item.name"
                        as="a"
                        :href="item.href"
                        :class="[item.current ? 'text-neutral-950 dark:text-neutral-50' : 'text-neutral-950 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800', 'block rounded-md py-4 text-2xl font-bold text-left']"
                        :aria-current="item.current ? 'page' : undefined"
                    >
                        {{ item.name }}
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Transition>
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

.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: max-height 0.4s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    max-height: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
    max-height: calc(100dvh - 4rem);
}

.mobile-backdrop-enter-active,
.mobile-backdrop-leave-active {
    transition: opacity 0.4s ease;
}

.mobile-backdrop-enter-from,
.mobile-backdrop-leave-to {
    opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
    .theme-icon-enter-active,
    .theme-icon-leave-active,
    .mobile-menu-enter-active,
    .mobile-menu-leave-active,
    .mobile-backdrop-enter-active,
    .mobile-backdrop-leave-active {
        transition: none;
    }
}
</style>

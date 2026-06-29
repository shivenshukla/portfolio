<script setup lang="ts">
const wrapRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)

const fitFooterName = () => {
    const wrap = wrapRef.value
    const text = textRef.value
    if (!wrap || !text) return

    const available = wrap.clientWidth
    if (!available) return

    const baseSize = 100
    text.style.fontSize = `${baseSize}px`
    text.style.fontSize = `${baseSize * (available / text.scrollWidth)}px`
}

let resizeObserver: ResizeObserver | undefined

onMounted(async () => {
    await document.fonts.ready
    fitFooterName()
    resizeObserver = new ResizeObserver(fitFooterName)
    if (wrapRef.value) resizeObserver.observe(wrapRef.value)
})

onUnmounted(() => resizeObserver?.disconnect())
</script>

<template>
    <footer
        class="mx-auto mt-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Copyright Shiven Shukla 2026"
    >
        <div
            ref="wrapRef"
            class="footer-name-wrap w-full pt-2 pb-2"
        >
            <p
                ref="textRef"
                class="footer-name whitespace-nowrap font-sans font-bold leading-none select-none pointer-events-none text-white dark:text-neutral-950 [--outline:#d4d4d4] dark:[--outline:#525252]"
            >
                Shiven Shukla
            </p>
        </div>
    </footer>
</template>

<style scoped>
.footer-name-wrap {
    display: flex;
    justify-content: center;
}

.footer-name {
    display: inline-block;
    text-shadow:
        -1px -1px 0 var(--outline),
        0 -1px 0 var(--outline),
        1px -1px 0 var(--outline),
        -1px 0 0 var(--outline),
        1px 0 0 var(--outline),
        -1px 1px 0 var(--outline),
        0 1px 0 var(--outline),
        1px 1px 0 var(--outline);
}
</style>

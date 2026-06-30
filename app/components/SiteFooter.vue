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
    const fontSize = baseSize * (available / text.scrollWidth)
    text.style.fontSize = `${fontSize}px`
    wrap.style.height = `${fontSize * 0.82}px`
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
        class="mx-auto mt-20 w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8"
        aria-label="Copyright Shiven Shukla"
    >
        <div
            ref="wrapRef"
            class="footer-name-wrap w-full overflow-hidden"
        >
            <p
                ref="textRef"
                class="footer-name whitespace-nowrap font-sans font-bold leading-none select-none pointer-events-none text-neutral-200 dark:text-neutral-800"
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
}
</style>

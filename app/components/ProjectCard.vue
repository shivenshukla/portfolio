<script setup>
defineProps({
    name: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: Array, required: true },
})
</script>

<template>
    <div class="p-5 bg-neutral-100 dark:bg-neutral-900 my-4 rounded-xl">
        <h3 class="text-2xl font-bold">
            {{ name }}
        </h3>
        <p class="mt-1.5 text-neutral-600 dark:text-neutral-400">
            {{ description }}
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
            <p
                v-for="(item, index) in skills"
                :key="index"
                class="px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold"
            >
                {{ item }}
            </p>
        </div>
        <a
            :href="code"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-block rounded-md bg-sky-200 px-3.5 py-1 text-base font-semibold text-neutral-950 hover:bg-sky-300"
        >
            Source code
        </a>
    </div>
</template>

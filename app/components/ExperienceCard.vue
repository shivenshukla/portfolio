<script setup>
defineProps({
    site: { type: String, required: true },
    company: { type: String, required: true },
    position: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    skills: { type: Array, required: true },
})
</script>

<template>
    <div class="p-5 bg-neutral-100 dark:bg-neutral-900 my-4 rounded-xl">
        <h3 class="text-2xl font-bold">
            <a
                class="hover:underline"
                :href="site"
            >{{ company }}</a>
        </h3>
        <div class="text-neutral-600 dark:text-neutral-400">
            <p class="mt-1.5 sm:float-left">
                {{ position }}
            </p>
            <p class="mt-1.5 sm:float-right sm:text-right">
                {{ start }} to {{ end }}
            </p>
        </div>
        <div class="clear-both flex flex-none pt-6">
            <p
                v-for="(item, index) in skills"
                :key="index"
                class="mr-2 px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold"
            >
                {{ item }}
            </p>
        </div>
    </div>
</template>

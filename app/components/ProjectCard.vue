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
            <a
                class="hover:underline"
                :href="code"
            >{{ name }}</a>
        </h3>
        <p class="mt-1.5 text-neutral-600 dark:text-neutral-400">
            {{ description }}
        </p>
        <div class="flex flex-none mt-6">
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

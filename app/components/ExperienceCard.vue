<script setup>
defineProps({
    site: { type: String, required: true },
    company: { type: String, required: true },
    roles: { type: Array, required: true },
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
        <div
            v-for="(role, index) in roles"
            :key="index"
            class="text-neutral-600 dark:text-neutral-400"
            :class="index === 0 ? 'mt-1.5' : 'mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700'"
        >
            <div class="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <p>{{ role.position }}</p>
                <p class="shrink-0 sm:text-right">
                    {{ role.start }} to {{ role.end }}
                </p>
            </div>
        </div>
        <div class="flex flex-none flex-wrap gap-2 pt-6">
            <p
                v-for="(item, skillIndex) in skills"
                :key="skillIndex"
                class="px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold"
            >
                {{ item }}
            </p>
        </div>
    </div>
</template>

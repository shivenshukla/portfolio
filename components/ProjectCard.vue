<script setup>
defineProps({
	name: String,
	code: String,
	description: String,
	skills: Array
})
</script>

<template>
	<div class="p-5 border my-4 rounded-lg shadow-md light:shadow-gray-100 dark:shadow-zinc-900 dark:border-zinc-900">
		<h3 class="text-2xl font-bold"><a :href="code">{{ name }}<span class="text-sky-500"> &#x2192</span></a></h3>
		<p class="mt-1.5 text-gray-700 dark:text-gray-200">{{ description }}</p>
		<div class="flex flex-none mt-6">
			<p v-for="(item, index) in skills" :key="index"
				class="mr-2 px-2 py-0.5 rounded-md bg-sky-100 dark:bg-zinc-700 text-sky-700 dark:text-gray-200 font-semibold">{{ item }}</p>
		</div>
	</div>
</template>
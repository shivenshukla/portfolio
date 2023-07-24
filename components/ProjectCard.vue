<script setup>
defineProps({
	name: String,
	code: String,
	description: String,
	skills: Array
})
</script>

<template>
	<div class="p-5 border my-4 rounded-lg shadow-md light:shadow-gray-100 dark:shadow-zinc-900 dark:border-zinc-950">
		<h3 class="text-2xl font-bold"><a :href="code" class="hover:text-sky-700">{{ name }}</a></h3>
		<p>{{ description }}</p>
		<div class="flex flex-none mt-6">
			<p v-for="(item, index) in skills" :key="index"
				class="mr-2 px-2 rounded-md bg-sky-100 text-sky-700 font-semibold">{{ item }}</p>
		</div>
	</div>
</template>
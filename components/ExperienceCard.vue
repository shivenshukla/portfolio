<script setup>
defineProps({
	site: String,
	company: String,
	position: String,
	start: String,
	end: String,
	skills: Array
})
</script>

<template>
	<div class="p-5 border my-4 rounded-lg shadow-md light:shadow-gray-100 dark:shadow-zinc-900 dark:border-zinc-900">
		<h3 class="text-2xl font-bold"><a :href="site">{{ company }}</a></h3>
		<div class="text-gray-700 dark:text-gray-200">
			<p class="mt-1.5 float-left">{{ position }}</p>
			<p class="mt-1.5 float-right text-right">{{ start }} to {{ end }}</p>
		</div>
		<div class="clear-both flex flex-none pt-6">
			<p v-for="(item, index) in skills" :key="index"
				class="mr-2 px-2 py-0.5 rounded-md bg-sky-100 dark:bg-zinc-700 text-sky-700 dark:text-gray-200 font-semibold">{{ item }}</p>
		</div>
	</div>
</template>
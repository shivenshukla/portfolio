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
	<div class="p-5 border my-4 rounded-lg shadow-md light:shadow-gray-100 dark:shadow-zinc-900 dark:border-zinc-950">
		<h3 class="text-2xl font-bold"><a :href="site" class="hover:text-sky-700">{{ company }}</a></h3>
		<div>
			<p class="float-left">{{ position }}</p>
			<p class="float-right text-right">{{ start }} to {{ end }}</p>
		</div>
		<div class="clear-both flex flex-none pt-6">
			<p v-for="(item, index) in skills" :key="index"
				class="mr-2 px-2 rounded-md bg-sky-100 text-sky-700 font-semibold">{{ item }}</p>
		</div>
	</div>
</template>
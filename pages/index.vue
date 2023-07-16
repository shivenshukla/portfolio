<script setup>
const links = [
	{ name: 'GitHub', href: 'https://github.com/shivenshukla', icon: 'entypo-social:github-with-circle' },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/shiven-shukla', icon: 'entypo-social:linkedin-with-circle' }
]
</script>

<style>
html {
	scroll-behavior: smooth;
}
</style>

<template>
	<section class="pt-5 pb-10">
		<h1 class="text-6xl font-bold mt-20">Shiven Shukla</h1>
		<p class="text-lg text-gray 900">Junior Software Engineer at Planview, Inc.</p>
		<div class="flex flex-row gap-4 my-4">
			<a v-for="link in links" :key="link.name" :href="link.href">
				<Icon :name="link.icon" size="2.75rem" class="text-sky-500 drop-shadow-md" />
			</a>
		</div>
	</section>
	<section class="flex flex-col md:flex-row pb-10">
		<div class="md:w-3/4 relative">
			<h2 class="text-3xl font-bold mt-8 text-sky-500">About Me</h2>
			<a style="top: -45px; position: absolute;" name="about"></a>
			<p class="text-lg py-2">
				Hi! I am a Junior Software Engineer studying Computer Science at the University of British Columbia.
			</p>
		</div>
	</section>
	<section class="pb-10">
		<div class="md:w-3/4 relative">
			<h2 class="text-3xl font-bold mt-8 text-sky-500">Experience</h2>
			<a style="top: -75px; position: absolute;" name="experience"></a>
		</div>
		<div class="p-5 border my-4 rounded-lg shadow-md light:shadow-gray-100 dark:shadow-zinc-900 dark:border-zinc-950">
			<h3 class="text-2xl font-bold"><a href="https://www.planview.com/" class="hover:text-sky-700">Planview</a></h3>
			<div>
				<p class="float-left">Junior Software Engineer</p>
				<p class="float-right text-right">May 2023 to Present</p>
			</div>
			<div class="clear-both flex flex-none pt-6">
				<p class="px-2 rounded-md bg-sky-100 text-sky-700">Java</p>
			</div>
		</div>
		<div class="p-5 border my-4 rounded-lg shadow-md light:shadow-gray-100 dark:shadow-zinc-900 dark:border-zinc-950">
			<h3 class="text-2xl font-bold"><a href="https://www.calabrio.com/" class="hover:text-sky-700">Calabrio</a></h3>
			<div>
				<p class="float-left">Software Engineer Intern</p>
				<p class="float-right text-right">Jan to Aug 2022</p>
			</div>
			<div class="clear-both flex flex-none pt-6">
				<p class="mr-2 px-2 rounded-md bg-sky-100 text-sky-700">Java</p>
				<p class="px-2 rounded-md bg-sky-100 text-sky-700">AWS</p>
			</div>
		</div>
	</section>
	<section class="pb-10">
		<div class="md:w-3/4 relative">
			<h2 class="text-3xl font-bold mt-8 text-sky-500">Projects</h2>
			<a style="top: -75px; position: absolute;" name="projects"></a>
		</div>
		<div class="p-5 border my-4 rounded-lg shadow-md light:shadow-gray-100 dark:shadow-zinc-900 dark:border-zinc-950">
			<h3 class="text-2xl font-bold"><a href="https://github.com/shivenshukla/portfolio" class="hover:text-sky-700">portfolio</a></h3>
			<p>My personal website built in Vue using Nuxt.js and Tailwind CSS</p>
			<div class="flex flex-none mt-6">
				<p class="mr-2 px-2 rounded-md bg-sky-100 text-sky-700">Vue</p>
				<p class="mr-2 px-2 rounded-md bg-sky-100 text-sky-700">Nuxt.js</p>
				<p class="px-2 rounded-md bg-sky-100 text-sky-700">Tailwind CSS</p>
			</div>
		</div>
		<div class="p-5 border my-4 rounded-lg shadow-md light:shadow-gray-100 dark:shadow-zinc-900 dark:border-zinc-950">
			<h3 class="text-2xl font-bold"><a href="https://github.com/shivenshukla/budget-manager" class="hover:text-sky-700">budget-manager</a></h3>
			<p>A Java desktop application for managing a budget</p>
			<div class="flex flex-none mt-6">
				<p class="px-2 rounded-md bg-sky-100 text-sky-700">Java</p>
			</div>
		</div>
	</section>
</template>
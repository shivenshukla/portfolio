<script setup>
const links = [
	{ name: 'GitHub', href: 'https://github.com/shivenshukla', icon: 'entypo-social:github-with-circle' },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/shiven-shukla', icon: 'entypo-social:linkedin-with-circle' }
]
</script>

<template>
	<section>
		<h1 class="text-5xl font-bold mt-20">Shiven Shukla</h1>
		<p class="text-base text-gray 900 p-2 italic">Junior Software Engineer at Planview, Inc.</p>
		<div class="flex flex-row justify-center gap-4 mb-4 mt-2">
			<a v-for="link in links" :key="link.name" :href="link.href">
				<Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
			</a>
		</div>
	</section>
	<section class="flex flex-col md:flex-row">
		<div class="md:w-3/4" id="about">
			<h2 class="text-3xl font-bold mt-8">About Me</h2>
			<p class="text-lg py-2">
				Hi! I am a junior software engineer with a background in Computer Science.
			</p>
		</div>
	</section>
	<section>
		<div class="md:w-3/4" id="experience">
			<h2 class="text-3xl font-bold mt-8">Experience</h2>
		</div>
		<div class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
			<h3><a href="https://www.planview.com/">Planview</a></h3>
			<p>Junior Software Engineer</p>
			<p>May 2023 to Present</p>
			<p>Java</p>
		</div>
		<div class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
			<h3><a href="https://www.calabrio.com/">Calabrio</a></h3>
			<p>Software Engineer Intern</p>
			<p>Jan to Aug 2022</p>
			<p>Java</p>
		</div>
	</section>
	<section>
		<div class="md:w-3/4" id="projects">
			<h2 class="text-3xl font-bold mt-8">Projects</h2>
		</div>
		<div class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
			<h3>portfolio</h3>
			<p>My personal website built in Vue using Nuxt.js and Tailwind CSS</p>
			<p>Vue</p>
			<p>Nuxt.js</p>
			<p>Tailwind CSS</p>
			<a href="https://github.com/shivenshukla/portfolio">Source code</a>
		</div>
		<div class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
			<h3>budget-manager</h3>
			<p>A Java desktop application for managing a budget</p>
			<p>Java</p>
			<a href="https://github.com/shivenshukla/budget-manager">Source code</a>
		</div>
	</section>
</template>
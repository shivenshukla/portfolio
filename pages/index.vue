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
		<div class="flex flex-row gap-4 mb-4 mt-2">
			<a v-for="link in links" :key="link.name" :href="link.href">
				<Icon :name="link.icon" size="2.5rem" class="text-gray-300" />
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
		<div class="p-5 border-4 my-4 rounded-lg hover:bg-gray-50">
			<h3 class="text-2xl font-bold hover:text-sky-500"><a href="https://www.planview.com/">Planview</a></h3>
			<div>
				<p class="float-left">Junior Software Engineer</p>
				<p class="float-right text-right">May 2023 to Present</p>
			</div>
			<ul>
				<li class="clear-both">Java</li>
			</ul>
		</div>
		<div class="p-5 border-4 my-4 rounded-lg hover:bg-gray-50">
			<h3 class="text-2xl font-bold hover:text-sky-500"><a href="https://www.calabrio.com/">Calabrio</a></h3>
			<div>
				<p class="float-left">Software Engineer Intern</p>
				<p class="float-right text-right">Jan to Aug 2022</p>
			</div>
			<ul>
				<li class="clear-both">Java</li>
			</ul>
		</div>
	</section>
	<section>
		<div class="md:w-3/4" id="projects">
			<h2 class="text-3xl font-bold mt-8">Projects</h2>
		</div>
		<div class="p-5 border-4 my-4 rounded-lg hover:bg-gray-50">
			<h3 class="text-2xl font-bold hover:text-sky-500"><a href="https://github.com/shivenshukla/portfolio">portfolio</a></h3>
			<p>My personal website built in Vue using Nuxt.js and Tailwind CSS</p>
			<ul>
				<li class="float-left pr-2">Vue</li>
				<li class="float-left pr-2">Nuxt.js</li>
				<li class="float-left">Tailwind CSS</li>
			</ul>
			<div class="clear-both"></div>
		</div>
		<div class="p-5 border-4 my-4 rounded-lg hover:bg-gray-50">
			<h3 class="text-2xl font-bold hover:text-sky-500"><a href="https://github.com/shivenshukla/budget-manager">budget-manager</a></h3>
			<p>A Java desktop application for managing a budget</p>
			<ul>
				<li>Java</li>
			</ul>
		</div>
	</section>
</template>
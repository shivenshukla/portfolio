<script setup>
const links = [
	{ name: 'GitHub', href: 'https://github.com/shivenshukla', icon: 'entypo-social:github-with-circle' },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/shiven-shukla', icon: 'entypo-social:linkedin-with-circle' }
]
const experiences = [
	{ company: 'Spare', site: 'https://spare.com', position: 'Junior Software Developer', start: 'Apr 2025', end: 'Present', skills: ['TypeScript'] },
	{ company: 'Planview', site: 'https://www.planview.com', position: 'Junior Software Engineer', start: 'May', end: 'Dec 2023', skills: ['Java', 'GitHub Actions'] },
	{ company: 'Calabrio', site: 'https://www.calabrio.com', position: 'Software Engineer Intern', start: 'Jan', end: 'Aug 2022', skills: ['Java', 'AWS', 'Azure Pipelines'] }
]

const projects = [
	{ name: 'Portfolio', code: 'https://github.com/shivenshukla/portfolio', description: "My personal website built in Vue using Nuxt.js and Tailwind CSS", skills: ['Vue', 'Nuxt.js', 'Tailwind CSS'] },
	{ name: 'Budget Manager', code: 'https://github.com/shivenshukla/budget-manager', description: "A budget management application built in Java", skills: ['Java'] }
]
</script>

<template>
	<section class="pt-5 pb-10">
		<h1 class="text-6xl font-bold mt-20">Shiven Shukla</h1>
		<p class="mt-1.5 text-lg text-gray-700 dark:text-gray-200">Software developer at Spare</p>
		<div class="flex flex-row gap-4 my-4">
			<a v-for="link in links" :key="link.name" :href="link.href">
				<Icon :name="link.icon" size="2.75rem" class="text-sky-500 hover:text-sky-400 drop-shadow-md" />
			</a>
		</div>
	</section>
	<section class="pb-10">
		<div class="md:w-3/4 relative">
			<h2 class="text-3xl font-bold mt-8 text-sky-500">Experience</h2>
			<a style="top: -75px; position: absolute;" name="experience"></a>
		</div>
		<ExperienceCard v-for="experience in experiences" :key="experience.company" :company="experience.company"
			:site="experience.site" :position="experience.position" :start="experience.start" :end="experience.end"
			:skills="experience.skills" />
	</section>
	<section class="pb-10">
		<div class="md:w-3/4 relative">
			<h2 class="text-3xl font-bold mt-8 text-sky-500">Projects</h2>
			<a style="top: -75px; position: absolute;" name="projects"></a>
		</div>
		<ProjectCard v-for="project in projects" :key="project.name" :name="project.name" :code="project.code"
			:description="project.description" :skills="project.skills" />
	</section>
</template>

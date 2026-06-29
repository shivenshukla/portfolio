<script setup>
const links = [
    { name: 'GitHub', href: 'https://github.com/shivenshukla', icon: 'entypo-social:github-with-circle' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shiven-shukla', icon: 'entypo-social:linkedin-with-circle' },
]
const experiences = [
    { company: 'Spare', site: 'https://spare.com', position: 'Software Developer', start: 'Apr 2025', end: 'Present', skills: ['TypeScript'] },
    { company: 'Planview', site: 'https://www.planview.com', position: 'Junior Software Engineer', start: 'May', end: 'Dec 2023', skills: ['Java', 'GitHub Actions'] },
    { company: 'Calabrio', site: 'https://www.calabrio.com', position: 'Software Engineer Intern', start: 'Jan', end: 'Aug 2022', skills: ['Java', 'AWS', 'Azure Pipelines'] },
]

const projects = [
    { name: 'Portfolio', code: 'https://github.com/shivenshukla/portfolio', description: 'My personal website built in Vue using Nuxt.js and Tailwind CSS', skills: ['Vue', 'Nuxt.js', 'Tailwind CSS'] },
    { name: 'Budget Manager', code: 'https://github.com/shivenshukla/budget-manager', description: 'A budget management application built in Java', skills: ['Java'] },
]
</script>

<template>
    <div>
        <section class="pt-5 pb-10 mt-20">
            <div class="flex flex-col sm:flex-row sm:items-center gap-6">
                <img
                    src="~/assets/images/profile.png"
                    alt="Cartoon illustration of Shiven Shukla"
                    class="h-36 w-36 sm:h-44 sm:w-44 rounded-full shrink-0"
                >
                <div>
                    <h1 class="text-6xl font-bold">
                        Shiven Shukla
                    </h1>
                    <p class="mt-1.5 text-lg text-gray-700 dark:text-gray-200">
                        Software developer at Spare
                    </p>
                    <div class="flex flex-row gap-4 my-4">
                        <a
                            v-for="link in links"
                            :key="link.name"
                            :href="link.href"
                            :aria-label="link.name"
                        >
                            <Icon
                                :name="link.icon"
                                size="3.25rem"
                                class="text-sky-500 hover:text-sky-400 drop-shadow-md"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-10">
            <div class="md:w-3/4 relative">
                <h2 class="text-3xl font-bold mt-8 text-sky-500">
                    About Me
                </h2>
                <div
                    id="about"
                    style="top: -75px; position: absolute;"
                />
            </div>
            <div class="p-5 border my-4 rounded-lg shadow-md shadow-gray-100 dark:shadow-zinc-900 dark:border-zinc-900">
                <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                    Hi! I'm a software developer based in Vancouver, BC. I studied Computer Science at the University of British Columbia. Now I build AI agents at Spare.
                </p>
            </div>
        </section>
        <section class="pb-10">
            <div class="md:w-3/4 relative">
                <h2 class="text-3xl font-bold mt-8 text-sky-500">
                    Experience
                </h2>
                <div
                    id="experience"
                    style="top: -75px; position: absolute;"
                />
            </div>
            <ExperienceCard
                v-for="experience in experiences"
                :key="experience.company"
                :company="experience.company"
                :site="experience.site"
                :position="experience.position"
                :start="experience.start"
                :end="experience.end"
                :skills="experience.skills"
            />
        </section>
        <section class="pb-10">
            <div class="md:w-3/4 relative">
                <h2 class="text-3xl font-bold mt-8 text-sky-500">
                    Projects
                </h2>
                <div
                    id="projects"
                    style="top: -75px; position: absolute;"
                />
            </div>
            <ProjectCard
                v-for="project in projects"
                :key="project.name"
                :name="project.name"
                :code="project.code"
                :description="project.description"
                :skills="project.skills"
            />
        </section>
    </div>
</template>

<script setup>
const links = [
    { name: 'GitHub', href: 'https://github.com/shivenshukla', icon: 'entypo-social:github-with-circle' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shiven-shukla', icon: 'entypo-social:linkedin-with-circle' },
]
const experiences = [
    {
        company: 'Spare',
        site: 'https://spare.com',
        roles: [
            { position: 'Intermediate Software Developer', start: 'Apr 2026', end: 'Present' },
            { position: 'Junior Software Developer', start: 'Apr 2025', end: 'Mar 2026' },
        ],
        skills: ['TypeScript', 'OpenAI'],
    },
    {
        company: 'Planview',
        site: 'https://www.planview.com',
        roles: [
            { position: 'Junior Software Engineer', start: 'May', end: 'Dec 2023' },
        ],
        skills: ['Java', 'GitHub Actions'],
    },
    {
        company: 'Calabrio',
        site: 'https://www.calabrio.com',
        roles: [
            { position: 'Software Engineer Intern', start: 'Jan', end: 'Aug 2022' },
        ],
        skills: ['Java', 'AWS', 'Azure Pipelines'],
    },
]

const projects = [
    { name: 'Portfolio', code: 'https://github.com/shivenshukla/portfolio', description: 'My personal website to showcase my work and experience', skills: ['Vue', 'Nuxt', 'Tailwind CSS'] },
    { name: 'Budget Manager', code: 'https://github.com/shivenshukla/budget-manager', description: 'A budgeting application to track income and expenses', skills: ['Java'] },
]

const roleTitles = ['software developer', 'software philomath']
const roleTitleIndex = ref(0)

const cycleRoleTitle = () => {
    roleTitleIndex.value = (roleTitleIndex.value + 1) % roleTitles.length
}
</script>

<template>
    <div>
        <section class="pt-5 pb-10 mt-20">
            <div class="flex flex-col sm:flex-row sm:items-center gap-6">
                <ProfileAvatar />
                <div>
                    <h1 class="text-6xl font-bold">
                        Shiven Shukla
                    </h1>
                    <div class="flex flex-row gap-4 mt-4">
                        <a
                            v-for="link in links"
                            :key="link.name"
                            :href="link.href"
                            :aria-label="link.name"
                        >
                            <Icon
                                :name="link.icon"
                                size="3.25rem"
                                class="text-neutral-950 dark:text-neutral-50 hover:opacity-70"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="pb-10">
            <div class="md:w-3/4 relative">
                <h2 class="text-3xl font-bold mt-8">
                    About Me
                </h2>
                <div
                    id="about"
                    style="top: -75px; position: absolute;"
                />
            </div>
            <div class="space-y-4 p-5 bg-neutral-100 dark:bg-neutral-900 my-4 rounded-xl">
                <p class="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Hi!
                </p>
                <p class="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                    I'm a
                    <button
                        type="button"
                        class="role-title-button mx-1 inline-grid w-[11.125rem] cursor-pointer place-items-center overflow-hidden rounded-md border border-neutral-200 bg-white px-1 py-0.5 font-semibold text-neutral-950 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
                        aria-label="Cycle role title"
                        @click="cycleRoleTitle"
                    >
                        <Transition
                            name="role-title"
                            mode="out-in"
                        >
                            <span
                                :key="roleTitles[roleTitleIndex]"
                                class="col-start-1 row-start-1 text-center"
                            >{{ roleTitles[roleTitleIndex] }}</span>
                        </Transition>
                    </button>
                    in Vancouver, BC with a background in computer science.
                </p>
                <p class="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                    I started as a physics major at the University of British Columbia and switched to computer science after taking an introductory programming course which made me fall in love with coding.
                </p>
                <p class="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                    I am passionate about building software that creates a positive impact. This led me to my current role at Spare where I develop AI agents to help individuals schedule their daily commutes.
                </p>
            </div>
        </section>
        <section class="pb-10">
            <div class="md:w-3/4 relative">
                <h2 class="text-3xl font-bold mt-8">
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
                :roles="experience.roles"
                :skills="experience.skills"
            />
        </section>
        <section class="pb-10">
            <div class="md:w-3/4 relative">
                <h2 class="text-3xl font-bold mt-8">
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

<style scoped>
.role-title-enter-active,
.role-title-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.role-title-enter-from,
.role-title-leave-to {
    opacity: 0;
    transform: translateY(0.25rem);
}

@media (prefers-reduced-motion: reduce) {
    .role-title-enter-active,
    .role-title-leave-active {
        transition: none;
    }
}
</style>

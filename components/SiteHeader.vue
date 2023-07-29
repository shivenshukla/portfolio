<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, LightBulbIcon } from '@heroicons/vue/24/outline'

const route = { name: 'index' };

const navigation = [
	{ name: 'About', href: '#about', current: route.name == 'about' },
	{ name: 'Experience', href: '#experience', current: route.name == 'experience' },
	{ name: 'Projects', href: '#projects', current: route.name == 'projects' },
]

type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
	useColorMode().preference = newTheme
}
</script>

<template>
	<Disclosure as="nav"
		class="fixed w-full bg-white dark:bg-zinc-800 shadow-md z-50 opacity-100 dark:shadow-zinc-900"
		v-slot="{ open }">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div class="flex flex-1 items-center justify-start sm:items-stretch">
					<div class="flex flex-shrink-0 items-center">
						<a href="#"><img class="block h-8 w-auto lg:hidden" src="~/assets/images/icon.png" alt="S" /></a>
						<a href="#"><img class="hidden h-8 w-auto lg:block" src="~/assets/images/icon.png" alt="S" /></a>
					</div>
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<a v-for="item in navigation" :key="item.name" :href="item.href"
								:class="[item.current ? 'text-sky-500' : 'text-sky-500 hover:bg-sky-50 dark:hover:bg-zinc-700', 'rounded-md px-3 py-2 text-sm font-bold']"
								:aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
						</div>
					</div>
				</div>
				<div class="flex">
					<div class="inset-y-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button class="ml-6 text-sky-500 p-2 hover:rounded-full hover:bg-sky-50 dark:hover:bg-zinc-700"
							@click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
							<LightBulbIcon class="h-6 w-6" />
						</button>
					</div>
					<div class="inset-y-0 flex items-center sm:hidden">
						<DisclosureButton
							class="inline-flex items-center justify-center rounded-md p-2 text-sky-500 hover:bg-sky-50 dark:hover:bg-zinc-700">
							<span class="sr-only">Open main menu</span>
							<Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
							<XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
						</DisclosureButton>
					</div>
				</div>
			</div>
		</div>

		<DisclosurePanel class="sm:hidden">
			<div class="space-y-1 px-2 pb-3 pt-2">
				<DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
					:class="[item.current ? 'text-sky-500' : 'text-sky-500 hover:bg-sky-50 dark:hover:bg-zinc-700', 'block rounded-md px-3 py-2 text-base font-bold text-center']"
					:aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<style>
.fixed {
	background-color: white;
}
</style>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = { name: 'index' };

const navigation = [
	{ name: 'About', href: '#about', current: route.name == 'about' },
	{ name: 'Experience', href: '#experience', current: route.name == 'experience' },
	{ name: 'Projects', href: '#projects', current: route.name == 'projects' },
]
</script>

<template>
	<Disclosure as="nav" class="fixed w-full bg-white shadow-md z-50" v-slot="{ open }">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 opacity-100">
			<div class="relative flex h-16 items-center justify-between">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<DisclosureButton
						class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
						<span class="sr-only">Open main menu</span>
						<Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
						<XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
					</DisclosureButton>
				</div>
				<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<div class="flex flex-shrink-0 items-center">
						<a href="/"><img class="block h-8 w-auto lg:hidden"
							src="~/assets/images/icon.png" alt="S" /></a>
						<a href="/"><img class="hidden h-8 w-auto lg:block"
							src="~/assets/images/icon.png" alt="S" /></a>
					</div>
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<a v-for="item in navigation" :key="item.name" :href="item.href"
								:class="[item.current ? 'text-sky-500' : 'text-sky-500 hover:bg-sky-50', 'rounded-md px-3 py-2 text-sm font-medium']"
								:aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<DisclosurePanel class="sm:hidden">
			<div class="space-y-1 px-2 pb-3 pt-2">
				<DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
					:class="[item.current ? 'text-sky-500' : 'text-sky-500 hover:bg-sky-50', 'block rounded-md px-3 py-2 text-base font-medium']"
				:aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
		</div>
	</DisclosurePanel>
</Disclosure></template>

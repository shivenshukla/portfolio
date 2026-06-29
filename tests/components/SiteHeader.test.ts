import { describe, it, expect, vi } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import SiteHeader from '../../app/components/SiteHeader.vue'

// Create a hoisted mock so we can track calls to set color preference
const { colorModeMock } = vi.hoisted(() => {
    const mockState = {
        preference: 'light',
        value: 'light',
    }
    return {
        colorModeMock: vi.fn(() => mockState),
    }
})

mockNuxtImport('useColorMode', () => colorModeMock)

describe('SiteHeader', () => {
    it('renders navigation links and header structure', async () => {
        const wrapper = await mountSuspended(SiteHeader)

        // Verify home link and header navigation options
        expect(wrapper.text()).toContain('Shiven Shukla')
        const homeLink = wrapper.find('a[aria-label="Home"]')
        expect(homeLink.exists()).toBe(true)
        expect(homeLink.attributes('href')).toBe('#')

        // Verify header navigation options
        expect(wrapper.text()).toContain('About Me')
        expect(wrapper.text()).toContain('Experience')
        expect(wrapper.text()).toContain('Projects')

        // Verify the href values of the navigation links
        const links = wrapper.findAll('a')
        const hrefs = links.map(link => link.attributes('href'))
        expect(hrefs).toContain('#about')
        expect(hrefs).toContain('#experience')
        expect(hrefs).toContain('#projects')
    })

    it('toggles the color theme when theme button is clicked', async () => {
        const wrapper = await mountSuspended(SiteHeader, {
            global: {
                mocks: {
                    // Provide mock for the global $colorMode helper in templates
                    $colorMode: {
                        value: 'light',
                        preference: 'light',
                    },
                },
            },
        })

        // Find the theme toggle button
        const button = wrapper.find('button')
        expect(button.exists()).toBe(true)

        // Trigger click on the theme button
        await button.trigger('click')

        // Expect useColorMode mock to have been called
        expect(colorModeMock).toHaveBeenCalled()
    })
})

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ExperienceCard from '../../app/components/ExperienceCard.vue'

describe('ExperienceCard', () => {
    it('renders experience details correctly', async () => {
        const wrapper = await mountSuspended(ExperienceCard, {
            props: {
                company: 'Acme Corporation',
                site: 'https://example.com',
                position: 'Rocket Scientist',
                start: 'Jan 2000',
                end: 'Dec 2000',
                skills: ['Anvil Dropping', 'Bird Catching'],
            },
        })

        // Verify company name and position
        expect(wrapper.text()).toContain('Acme Corporation')
        expect(wrapper.text()).toContain('Rocket Scientist')

        // Verify dates render correctly
        expect(wrapper.text()).toContain('Jan 2000 to Dec 2000')

        // Verify link is present and correct
        const link = wrapper.find('a')
        expect(link.exists()).toBe(true)
        expect(link.attributes('href')).toBe('https://example.com')
        expect(link.text()).toBe('Acme Corporation')

        // Verify skills are listed
        expect(wrapper.text()).toContain('Anvil Dropping')
        expect(wrapper.text()).toContain('Bird Catching')
    })
})

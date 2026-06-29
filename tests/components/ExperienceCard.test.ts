import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ExperienceCard from '../../app/components/ExperienceCard.vue'

describe('ExperienceCard', () => {
    it('renders experience details correctly', async () => {
        const wrapper = await mountSuspended(ExperienceCard, {
            props: {
                company: 'Acme Corporation',
                site: 'https://example.com',
                roles: [
                    { position: 'Rocket Scientist', start: 'Jan 2000', end: 'Dec 2000' },
                ],
                skills: ['Anvil Dropping', 'Bird Catching'],
            },
        })

        expect(wrapper.text()).toContain('Acme Corporation')
        expect(wrapper.text()).toContain('Rocket Scientist')
        expect(wrapper.text()).toContain('Jan 2000 to Dec 2000')

        const link = wrapper.find('a')
        expect(link.exists()).toBe(true)
        expect(link.attributes('href')).toBe('https://example.com')
        expect(link.text()).toBe('Acme Corporation')

        expect(wrapper.text()).toContain('Anvil Dropping')
        expect(wrapper.text()).toContain('Bird Catching')
    })

    it('renders multiple roles at the same company', async () => {
        const wrapper = await mountSuspended(ExperienceCard, {
            props: {
                company: 'Acme Corporation',
                site: 'https://example.com',
                roles: [
                    { position: 'Senior Rocket Scientist', start: 'Jan 2001', end: 'Present' },
                    { position: 'Rocket Scientist', start: 'Jan 2000', end: 'Jan 2001' },
                ],
                skills: ['Anvil Dropping'],
            },
        })

        expect(wrapper.text()).toContain('Senior Rocket Scientist')
        expect(wrapper.text()).toContain('Jan 2001 to Present')
        expect(wrapper.text()).toContain('Rocket Scientist')
        expect(wrapper.text()).toContain('Jan 2000 to Jan 2001')
    })
})

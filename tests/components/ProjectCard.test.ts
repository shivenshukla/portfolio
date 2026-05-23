import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectCard from '../../app/components/ProjectCard.vue'

describe('ProjectCard', () => {
    it('renders props correctly', async () => {
        const wrapper = await mountSuspended(ProjectCard, {
            props: {
                name: 'Acme Project',
                code: 'https://example.com/project',
                description: 'A fictional project used for unit testing purposes',
                skills: ['Anvil Dropping', 'Bird Catching'],
            },
        })

        // Verify name and description render correctly
        expect(wrapper.text()).toContain('Acme Project')
        expect(wrapper.text()).toContain('A fictional project used for unit testing purposes')

        // Verify external link renders correctly
        const link = wrapper.find('a')
        expect(link.exists()).toBe(true)
        expect(link.attributes('href')).toBe('https://example.com/project')
        expect(link.text()).toBe('Acme Project')

        // Verify skills are listed
        expect(wrapper.text()).toContain('Anvil Dropping')
        expect(wrapper.text()).toContain('Bird Catching')
    })
})

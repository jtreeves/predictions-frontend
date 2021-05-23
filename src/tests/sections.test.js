import { render, screen } from '@testing-library/react'
import Appeal from '../components/sections/main/Appeal'
import Pitch from '../components/sections/main/Pitch'

describe('Appeal section', () => {
    it('contains only one heading', () => {
        render(<Appeal />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBe(1)
    })
    
    it('presents a heading with the section name as its only heading', () => {
        render(<Appeal />)
        const headings = screen.getAllByRole('heading')
        const sectionHeading = screen.getByText('Appeal')
        expect(headings[0]).toBe(sectionHeading)
    })
})

describe('Pitch section', () => {
    it('contains only one heading', () => {
        render(<Pitch />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBe(1)
    })
    
    it('presents a heading with the section name as its only heading', () => {
        render(<Pitch />)
        const headings = screen.getAllByRole('heading')
        const sectionHeading = screen.getByText('Pitch')
        expect(headings[0]).toBe(sectionHeading)
    })
})
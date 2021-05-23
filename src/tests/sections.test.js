import { render, screen } from '@testing-library/react'
import Appeal from '../components/sections/main/Appeal'
import Pitch from '../components/sections/main/Pitch'

describe('Appeal section', () => {
    it('contains only one heading', () => {
        render(<Appeal />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBe(1)
    })
    
    it('presents only the section name as its heading', () => {
        render(<Appeal />)
        const headingByRole = screen.getByRole('heading')
        const headingByText = screen.getByText('Appeal')
        expect(headingByRole).toBe(headingByText)
    })
})

describe('Pitch section', () => {
    it('contains only one heading', () => {
        render(<Pitch />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBe(1)
    })
    
    it('presents only the section name as its heading', () => {
        render(<Pitch />)
        const headingByRole = screen.getByRole('heading')
        const headingByText = screen.getByText('Pitch')
        expect(headingByRole).toBe(headingByText)
    })
})
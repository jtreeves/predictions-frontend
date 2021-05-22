import { render, screen } from '@testing-library/react'
import Appeal from '../components/sections/main/Appeal'
import Pitch from '../components/sections/main/Pitch'

describe('Appeal section', () => {
    it('contains only one heading', () => {
        render(<Appeal />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBe(1)
    })
    
    it('presents a heading with the page name as its only heading', () => {
        render(<Appeal />)
        const headings = screen.getAllByRole('heading')
        const h1Element = screen.getByText('Appeal')
        expect(headings[0]).toBe(h1Element)
    })
})

describe('Pitch section', () => {
    it('contains only one heading', () => {
        render(<Pitch />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBe(1)
    })
    
    it('presents a heading with the page name as its only heading', () => {
        render(<Pitch />)
        const headings = screen.getAllByRole('heading')
        const h1Element = screen.getByText('Pitch')
        expect(headings[0]).toBe(h1Element)
    })
})
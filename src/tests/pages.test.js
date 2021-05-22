import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Welcome from '../components/pages/main/Welcome'
import About from '../components/pages/main/About'
import Usage from '../components/pages/main/Usage'

describe('Welcome page', () => {
    it('contains many headings', () => {
        render(<Welcome />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBeGreaterThan(1)
    })
    
    it('presents a heading with the page name as its first heading', () => {
        render(<Welcome />)
        const headings = screen.getAllByRole('heading')
        const h1Element = screen.getByText('Welcome')
        expect(headings[0]).toBe(h1Element)
    })
})

describe('About page', () => {
    it('contains many headings', () => {
        render(<About />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBeGreaterThan(1)
    })
    
    it('presents a heading with the page name as its first heading', () => {
        render(<About />)
        const headings = screen.getAllByRole('heading')
        const h1Element = screen.getByText('About')
        expect(headings[0]).toBe(h1Element)
    })
})

describe('Usage page', () => {
    it('contains many headings', () => {
        render(<Usage />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBeGreaterThan(1)
    })
    
    it('presents a heading with the page name as its first heading', () => {
        render(<Usage />)
        const headings = screen.getAllByRole('heading')
        const h1Element = screen.getByText('Usage')
        expect(headings[0]).toBe(h1Element)
    })
})

// Ran 6 passing tests in 9.653s on 05/22/21
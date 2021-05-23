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
        const pageHeading = screen.getByText('Welcome')
        expect(headings[0]).toBe(pageHeading)
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
        const pageHeading = screen.getByText('About')
        expect(headings[0]).toBe(pageHeading)
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
        const pageHeading = screen.getByText('Usage')
        expect(headings[0]).toBe(pageHeading)
    })
})
import { render, screen } from '@testing-library/react'
import Advantages from '../components/elements/main/Advantages'

describe('Advantages element', () => {
    it('contains explanatory text', () => {
        render(<Advantages />)
        const article = screen.getByText(/Unlike other sites/i)
        expect(article).toBeTruthy()
    })
})
import { render, screen } from '@testing-library/react'
import Advantages from '../components/elements/main/Advantages'
import BestFit from '../components/elements/predictions/BestFit'

describe('Advantages element', () => {
    it('contains explanatory text', () => {
        render(<Advantages />)
        const article = screen.getByText(/Unlike other sites/i)
        expect(article).toBeTruthy()
    })
})

describe('BestFit element', () => {
    it('presents only the element name as its heading', () => {
        const bestFitElement = <BestFit 
            bestFit="sinusoidal"
            correlation={0.5}
            precision={4}
        />
        render(bestFitElement)
        const headingByRole = screen.getByRole('heading')
        const headingByText = screen.getByText('Best Fit')
        expect(headingByRole).toBe(headingByText)
    })
    
    it('displays the name of the model with the best fit', () => {
        const bestFitElement = <BestFit 
            bestFit="sinusoidal"
            correlation={0.5}
            precision={4}
        />
        render(bestFitElement)
        const bestFitModel = screen.getByText('sinusoidal')
        expect(bestFitModel).toBeTruthy()
    })
    
    it('displays the correlation rounded to the number of decimal places indicated by the precision', () => {
        const bestFitElement = <BestFit 
            bestFit="sinusoidal"
            correlation={0.5}
            precision={4}
        />
        render(bestFitElement)
        const correlation = screen.getByText('0.5000')
        expect(correlation).toBeTruthy()
    })
})
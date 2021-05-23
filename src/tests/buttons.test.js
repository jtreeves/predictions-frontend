import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormButton from '../components/buttons/main/FormButton'

describe('Form button', () => {
    it('creates a visible button if display set to block', () => {
        const newButton = <FormButton 
            text="Submit"
            onClick={jest.fn()}
            id="submit-button"
            display="block"
        />
        render(newButton)
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Submit')
        expect(buttonByRole).toBe(buttonByText)
    })
    
    it('creates a hidden button if display set to none', () => {
        const newButton = <FormButton 
            text="Submit"
            onClick={jest.fn()}
            id="submit-button"
            display="none"
        />
        render(newButton)
        const createdButton = screen.getByRole('button', { hidden: true })
        expect(createdButton).not.toBeVisible()
    })
    
    it('performs an action when clicked', () => {
        const handleSubmit = jest.fn()
        const newButton = <FormButton 
            text="Submit"
            onClick={handleSubmit}
            id="submit-button"
            display="block"
        />
        render(newButton)
        const createdButton = screen.getByRole('button')
        userEvent.click(createdButton)
        expect(handleSubmit).toHaveBeenCalled()
    })
})
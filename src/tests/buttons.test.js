import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import jwt_decode from 'jwt-decode'
import CreateUser from '../actions/users/CreateUser'
import CreateSession from '../actions/users/CreateSession'
import DeleteUser from '../actions/users/DeleteUser'
import Authentication from '../actions/main/Authentication'
import userEvent from '@testing-library/user-event'
import FormButton from '../components/buttons/main/FormButton'
import UpdateNameButtons from '../components/buttons/users/UpdateNameButtons'

const johnData = {
    name: 'John',
    email: 'john@email.com',
    password: 'john1234'
}

let johnId = ''

beforeAll(async () => {
    await CreateUser(johnData)
    await new Promise((c) => setTimeout(c, 1000))
    const currentSession = await CreateSession(johnData)
    const {token} = currentSession.data
    localStorage.setItem('jwtToken', token)
    Authentication(token)
    const decodedUser = jwt_decode(token)
    johnId = decodedUser.id
})

afterAll(async () => {
    await DeleteUser(johnId)
})

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

describe('UpdateName buttons', () => {
    it('displays button with text of Change Name initially', () => {
        let name = johnData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const buttonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(buttonsArea)
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Change Name')
        expect(buttonByRole).toBe(buttonByText)
    })
    
    it('displays two buttons with new texts and input field after click', async () => {
        let name = johnData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        userEvent.click(button)
        await new Promise((c) => setTimeout(c, 1000))
        cleanup()
        const updatedButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(updatedButtonsArea)
        const buttons = screen.getAllByRole('button')
        const submitButton = screen.getByText('Submit New Name')
        const undoButton = screen.getByText('Keep Old Name')
        const inputAreaByRole = screen.getByRole('textbox')
        const inputAreaByDisplay = screen.getByDisplayValue(name)
        expect(buttons.length).toBe(2)
        expect(buttons[0]).toBe(submitButton)
        expect(buttons[1]).toBe(undoButton)
        expect(inputAreaByRole).toBe(inputAreaByDisplay)
    })
    
    it('lets user input new name', async () => {
        let name = johnData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        userEvent.click(button)
        await new Promise((c) => setTimeout(c, 1000))
        cleanup()
        const updatedButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(updatedButtonsArea)
        const inputArea = screen.getByRole('textbox')
        fireEvent.change(inputArea, { target: { value: '' } })
        userEvent.type(inputArea, 'JOHN')
        expect(inputArea).toHaveValue('JOHN')
    })
    
    it('sets name to user input after click submit', async () => {
        let name = johnData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        userEvent.click(button)
        await new Promise((c) => setTimeout(c, 1000))
        cleanup()
        const updatedButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(updatedButtonsArea)
        const inputArea = screen.getByRole('textbox')
        const submitButton = screen.getByText('Submit New Name')
        fireEvent.change(inputArea, { target: { value: '' } })
        userEvent.type(inputArea, 'JOHN')
        userEvent.click(submitButton)
        await new Promise((c) => setTimeout(c, 1000))
        expect(name).toBe('JOHN')
    })
    
    it('displays original button after click submit button', async () => {
        let name = johnData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        userEvent.click(button)
        await new Promise((c) => setTimeout(c, 1000))
        cleanup()
        const updatedButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(updatedButtonsArea)
        const submitButton = screen.getByText('Submit New Name')
        userEvent.click(submitButton)
        await new Promise((c) => setTimeout(c, 1000))
        cleanup()
        const doneButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(doneButtonsArea)
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Change Name')
        expect(buttonByRole).toBe(buttonByText)
    })
    
    it('displays original button after click undo button', async () => {
        let name = johnData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        userEvent.click(button)
        await new Promise((c) => setTimeout(c, 1000))
        cleanup()
        const updatedButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(updatedButtonsArea)
        const undoButton = screen.getByText('Keep Old Name')
        userEvent.click(undoButton)
        await new Promise((c) => setTimeout(c, 1000))
        cleanup()
        const undoneButtonsArea = <UpdateNameButtons 
            id={johnId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(undoneButtonsArea)
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Change Name')
        expect(buttonByRole).toBe(buttonByText)
    })
})
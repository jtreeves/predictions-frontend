import { render, screen, cleanup, fireEvent, act } from '@testing-library/react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import CreateUser from '../actions/users/CreateUser'
import GetUser from '../actions/users/GetUser'
import CreateSession from '../actions/users/CreateSession'
import DeleteUser from '../actions/users/DeleteUser'
import Authentication from '../actions/main/Authentication'
import userEvent from '@testing-library/user-event'
import FormButton from '../components/buttons/main/FormButton'
import UpdateNameButtons from '../components/buttons/users/UpdateNameButtons'
import UpdateEmailButtons from '../components/buttons/users/UpdateEmailButtons'
import DeleteUserButtons from '../components/buttons/users/DeleteUserButtons'

const davidData = {
    name: 'David',
    email: 'david@email.com',
    password: 'david1234'
}

let davidId = ''

const veronicaData = {
    name: 'Veronica',
    email: 'veronica@email.com',
    password: 'veronica1234'
}

let veronicaId = ''

beforeAll(async () => {
    await CreateUser(davidData)
    await CreateUser(veronicaData)
    await new Promise((c) => setTimeout(c, 1000))
    const currentSession = await CreateSession(davidData)
    const {token} = currentSession.data
    localStorage.setItem('jwtToken', token)
    Authentication(token)
    const decodedUser = jwt_decode(token)
    davidId = decodedUser.id
})

afterAll(async () => {
    await DeleteUser(davidId)
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
        let name = davidData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const buttonsArea = <UpdateNameButtons 
            id={davidId} 
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
        let name = davidData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={davidId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateNameButtons 
                id={davidId} 
                name={name}
                setName={mockSetName}
                changingName={changingName}
                setChangingName={mockSetChangingName}
            />
            render(updatedButtonsArea)
        })
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
        let name = davidData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={davidId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateNameButtons 
                id={davidId} 
                name={name}
                setName={mockSetName}
                changingName={changingName}
                setChangingName={mockSetChangingName}
            />
            render(updatedButtonsArea)
        })
        const inputArea = screen.getByRole('textbox')
        fireEvent.change(inputArea, { target: { value: '' } })
        userEvent.type(inputArea, 'DAVID')
        expect(inputArea).toHaveValue('DAVID')
    })
    
    it('sets name to user input after click submit', async () => {
        let name = davidData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={davidId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateNameButtons 
                id={davidId} 
                name={name}
                setName={mockSetName}
                changingName={changingName}
                setChangingName={mockSetChangingName}
            />
            render(updatedButtonsArea)
            const inputArea = screen.getByRole('textbox')
            const submitButton = screen.getByText('Submit New Name')
            fireEvent.change(inputArea, { target: { value: '' } })
            userEvent.type(inputArea, 'DAVID')
            userEvent.click(submitButton)
        })
        await new Promise((c) => setTimeout(c, 1000))
        expect(name).toBe('DAVID')
    })
    
    it('displays original button after click submit button', async () => {
        let name = davidData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={davidId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateNameButtons 
                id={davidId} 
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
                id={davidId} 
                name={name}
                setName={mockSetName}
                changingName={changingName}
                setChangingName={mockSetChangingName}
            />
            render(doneButtonsArea)
        })
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Change Name')
        expect(buttonByRole).toBe(buttonByText)
    })
    
    it('displays original button after click undo button', async () => {
        let name = davidData.name
        let changingName = false
        const mockSetName = (element) => {
            name = element
        }
        const mockSetChangingName = (element) => {
            changingName = element
        }
        const initialButtonsArea = <UpdateNameButtons 
            id={davidId} 
            name={name}
            setName={mockSetName}
            changingName={changingName}
            setChangingName={mockSetChangingName}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateNameButtons 
                id={davidId} 
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
                id={davidId} 
                name={name}
                setName={mockSetName}
                changingName={changingName}
                setChangingName={mockSetChangingName}
            />
            render(undoneButtonsArea)
        })
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Change Name')
        expect(buttonByRole).toBe(buttonByText)
    })
})

describe('UpdateEmail buttons', () => {
    it('displays button with text of Change Email initially', () => {
        let email = davidData.email
        let changingEmail = false
        const mockSetEmail = (element) => {
            email = element
        }
        const mockSetChangingEmail = (element) => {
            changingEmail = element
        }
        const buttonsArea = <UpdateEmailButtons 
            id={davidId} 
            email={email}
            setEmail={mockSetEmail}
            changingEmail={changingEmail}
            setChangingEmail={mockSetChangingEmail}
        />
        render(buttonsArea)
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Change Email')
        expect(buttonByRole).toBe(buttonByText)
    })
    
    it('displays two buttons with new texts and input field after click', async () => {
        let email = davidData.email
        let changingEmail = false
        const mockSetEmail = (element) => {
            email = element
        }
        const mockSetChangingEmail = (element) => {
            changingEmail = element
        }
        const initialButtonsArea = <UpdateEmailButtons 
            id={davidId} 
            email={email}
            setEmail={mockSetEmail}
            changingEmail={changingEmail}
            setChangingEmail={mockSetChangingEmail}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateEmailButtons 
                id={davidId} 
                email={email}
                setEmail={mockSetEmail}
                changingEmail={changingEmail}
                setChangingEmail={mockSetChangingEmail}
            />
            render(updatedButtonsArea)
        })
        const buttons = screen.getAllByRole('button')
        const submitButton = screen.getByText('Submit New Email')
        const undoButton = screen.getByText('Keep Old Email')
        const inputAreaByRole = screen.getByRole('textbox')
        const inputAreaByDisplay = screen.getByDisplayValue(email)
        expect(buttons.length).toBe(2)
        expect(buttons[0]).toBe(submitButton)
        expect(buttons[1]).toBe(undoButton)
        expect(inputAreaByRole).toBe(inputAreaByDisplay)
    })
    
    it('lets user input new email', async () => {
        let email = davidData.email
        let changingEmail = false
        const mockSetEmail = (element) => {
            email = element
        }
        const mockSetChangingEmail = (element) => {
            changingEmail = element
        }
        const initialButtonsArea = <UpdateEmailButtons 
            id={davidId} 
            email={email}
            setEmail={mockSetEmail}
            changingEmail={changingEmail}
            setChangingEmail={mockSetChangingEmail}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateEmailButtons 
                id={davidId} 
                email={email}
                setEmail={mockSetEmail}
                changingEmail={changingEmail}
                setChangingEmail={mockSetChangingEmail}
            />
            render(updatedButtonsArea)
        })
        const inputArea = screen.getByRole('textbox')
        fireEvent.change(inputArea, { target: { value: '' } })
        userEvent.type(inputArea, 'd@david.com')
        expect(inputArea).toHaveValue('d@david.com')
    })
    
    it('sets email to user input after click submit', async () => {
        let email = davidData.email
        let changingEmail = false
        const mockSetEmail = (element) => {
            email = element
        }
        const mockSetChangingEmail = (element) => {
            changingEmail = element
        }
        const initialButtonsArea = <UpdateEmailButtons 
            id={davidId} 
            email={email}
            setEmail={mockSetEmail}
            changingEmail={changingEmail}
            setChangingEmail={mockSetChangingEmail}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateEmailButtons 
                id={davidId} 
                email={email}
                setEmail={mockSetEmail}
                changingEmail={changingEmail}
                setChangingEmail={mockSetChangingEmail}
            />
            render(updatedButtonsArea)
            const inputArea = screen.getByRole('textbox')
            const submitButton = screen.getByText('Submit New Email')
            fireEvent.change(inputArea, { target: { value: '' } })
            userEvent.type(inputArea, 'd@david.com')
            userEvent.click(submitButton)
        })
        await new Promise((c) => setTimeout(c, 1000))
        expect(email).toBe('d@david.com')
    })
    
    it('displays original button after click submit button', async () => {
        let email = davidData.email
        let changingEmail = false
        const mockSetEmail = (element) => {
            email = element
        }
        const mockSetChangingEmail = (element) => {
            changingEmail = element
        }
        const initialButtonsArea = <UpdateEmailButtons 
            id={davidId} 
            email={email}
            setEmail={mockSetEmail}
            changingEmail={changingEmail}
            setChangingEmail={mockSetChangingEmail}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateEmailButtons 
                id={davidId} 
                email={email}
                setEmail={mockSetEmail}
                changingEmail={changingEmail}
                setChangingEmail={mockSetChangingEmail}
            />
            render(updatedButtonsArea)
            const submitButton = screen.getByText('Submit New Email')
            userEvent.click(submitButton)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const doneButtonsArea = <UpdateEmailButtons 
                id={davidId} 
                email={email}
                setEmail={mockSetEmail}
                changingEmail={changingEmail}
                setChangingEmail={mockSetChangingEmail}
            />
            render(doneButtonsArea)
        })
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Change Email')
        expect(buttonByRole).toBe(buttonByText)
    })
    
    it('displays original button after click undo button', async () => {
        let email = davidData.email
        let changingEmail = false
        const mockSetEmail = (element) => {
            email = element
        }
        const mockSetChangingEmail = (element) => {
            changingEmail = element
        }
        const initialButtonsArea = <UpdateEmailButtons 
            id={davidId} 
            email={email}
            setEmail={mockSetEmail}
            changingEmail={changingEmail}
            setChangingEmail={mockSetChangingEmail}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <UpdateEmailButtons 
                id={davidId} 
                email={email}
                setEmail={mockSetEmail}
                changingEmail={changingEmail}
                setChangingEmail={mockSetChangingEmail}
            />
            render(updatedButtonsArea)
            const undoButton = screen.getByText('Keep Old Email')
            userEvent.click(undoButton)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const undoneButtonsArea = <UpdateEmailButtons 
                id={davidId} 
                email={email}
                setEmail={mockSetEmail}
                changingEmail={changingEmail}
                setChangingEmail={mockSetChangingEmail}
            />
            render(undoneButtonsArea)
        })
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Change Email')
        expect(buttonByRole).toBe(buttonByText)
    })
})

describe('DeleteUser buttons', () => {
    it('displays button with text of Delete Account initially', () => {
        let deletingAccount = false
        const mockSetDeletingAccount = jest.fn((element) => {
            deletingAccount = element
        })
        const mockLogout = jest.fn()
        const buttonsArea = <DeleteUserButtons 
            id={davidId} 
            deletingAccount={deletingAccount}
            setDeletingAccount={mockSetDeletingAccount}
            logout={mockLogout}
        />
        render(buttonsArea)
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Delete Account')
        expect(buttonByRole).toBe(buttonByText)
    })
    
    it('displays two buttons with new texts and warning message after click', async () => {
        let deletingAccount = false
        const mockSetDeletingAccount = jest.fn((element) => {
            deletingAccount = element
        })
        const mockLogout = jest.fn()
        const initialButtonsArea = <DeleteUserButtons 
            id={davidId} 
            deletingAccount={deletingAccount}
            setDeletingAccount={mockSetDeletingAccount}
            logout={mockLogout}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <DeleteUserButtons 
                id={davidId} 
                deletingAccount={deletingAccount}
                setDeletingAccount={mockSetDeletingAccount}
                logout={mockLogout}
            />
            render(updatedButtonsArea)
        })
        const buttons = screen.getAllByRole('button')
        const submitButton = screen.getByText('Yes, Delete My Account')
        const undoButton = screen.getByText('No, Keep Account')
        const warningMessage = screen.getByText('Are you sure you want to delete your account?')
        expect(buttons.length).toBe(2)
        expect(buttons[0]).toBe(submitButton)
        expect(buttons[1]).toBe(undoButton)
        expect(warningMessage).toBeTruthy()
    })
    
    it('displays original button after click undo button', async () => {
        let deletingAccount = false
        const mockSetDeletingAccount = jest.fn((element) => {
            deletingAccount = element
        })
        const mockLogout = jest.fn()
        const initialButtonsArea = <DeleteUserButtons 
            id={davidId} 
            deletingAccount={deletingAccount}
            setDeletingAccount={mockSetDeletingAccount}
            logout={mockLogout}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <DeleteUserButtons 
                id={davidId} 
                deletingAccount={deletingAccount}
                setDeletingAccount={mockSetDeletingAccount}
                logout={mockLogout}
            />
            render(updatedButtonsArea)
            const undoButton = screen.getByText('No, Keep Account')
            userEvent.click(undoButton)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const undoneButtonsArea = <DeleteUserButtons 
                id={davidId} 
                deletingAccount={deletingAccount}
                setDeletingAccount={mockSetDeletingAccount}
                logout={mockLogout}
            />
            render(undoneButtonsArea)
        })
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Delete Account')
        expect(buttonByRole).toBe(buttonByText)
    })

    it('deletes user from database after click submit button', async () => {
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
        const otherCurrentSession = await CreateSession(veronicaData)
        const otherToken = otherCurrentSession.data.token
        localStorage.setItem('jwtToken', otherToken)
        Authentication(otherToken)
        const otherDecodedUser = jwt_decode(otherToken)
        veronicaId = otherDecodedUser.id
        let deletingAccount = false
        const mockSetDeletingAccount = jest.fn((element) => {
            deletingAccount = element
        })
        const mockLogout = jest.fn()
        const initialButtonsArea = <DeleteUserButtons 
            id={veronicaId} 
            deletingAccount={deletingAccount}
            setDeletingAccount={mockSetDeletingAccount}
            logout={mockLogout}
        />
        render(initialButtonsArea)
        const button = screen.getByRole('button')
        await act(async () => {
            userEvent.click(button)
            await new Promise((c) => setTimeout(c, 1000))
            cleanup()
            const updatedButtonsArea = <DeleteUserButtons 
                id={veronicaId} 
                deletingAccount={deletingAccount}
                setDeletingAccount={mockSetDeletingAccount}
                logout={mockLogout}
            />
            render(updatedButtonsArea)
            const submitButton = screen.getByText('Yes, Delete My Account')
            userEvent.click(submitButton)
        })
        try {
            const davidCurrentSession = await CreateSession(davidData)
            const davidToken = davidCurrentSession.data.token
            localStorage.setItem('jwtToken', davidToken)
            Authentication(davidToken)
            await GetUser(veronicaId)
        } catch (error) {
            expect(error.response.status).toBe(404)
        }
    })
})
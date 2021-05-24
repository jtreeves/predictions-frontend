import { render, screen } from '@testing-library/react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Advantages from '../components/elements/main/Advantages'
import BestFit from '../components/elements/predictions/BestFit'
import DisplayName from '../components/elements/users/DisplayName'
import DisplayEmail from '../components/elements/users/DisplayEmail'
import CreateSession from '../actions/users/CreateSession'
import Authentication from '../actions/main/Authentication'

const billData = {
    email: 'bill@email.com',
    password: 'bill1234'
}

let billId = ''

beforeAll(async () => {
    const currentSession = await CreateSession(billData)
    const {token} = currentSession.data
    localStorage.setItem('jwtToken', token)
    Authentication(token)
    const decodedUser = jwt_decode(token)
    billId = decodedUser.id
})

afterAll(async () => {
    localStorage.removeItem('jwtToken')
    delete axios.defaults.headers.common['Authorization']
})

describe('Advantages element', () => {
    it('contains explanatory text', () => {
        render(<Advantages />)
        const article = screen.getByText(/Unlike other sites/i)
        expect(article).toBeTruthy()
    })
})

describe('DisplayName element', () => {
    it('displays current name stored in database', async () => {
        let name = ''
        const mockSetName = (element) => {
            name = element
        }
        const initialNameArea = <DisplayName 
            id={billId}
            name={name}
            setName={mockSetName}
        />
        render(initialNameArea)
        await new Promise((c) => setTimeout(c, 1000))
        const updatedNameArea = <DisplayName 
            id={billId}
            name={name}
            setName={mockSetName}
        />
        render(updatedNameArea)
        const currentName = await screen.findByText('billy boy')
        expect(currentName).toBeTruthy()
    })
    
    it('displays empty string if no ID provided', async () => {
        let name = ''
        const mockSetName = (element) => {
            name = element
        }
        const initialNameArea = <DisplayName 
            id=''
            name={name}
            setName={mockSetName}
        />
        render(initialNameArea)
        await new Promise((c) => setTimeout(c, 1000))
        const updatedNameArea = <DisplayName 
            id=''
            name={name}
            setName={mockSetName}
        />
        render(updatedNameArea)
        const articles = await screen.findAllByRole('article')
        expect(articles[1].children[1].textContent).toBe('')
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
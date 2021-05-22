import jwt_decode from 'jwt-decode'
import CreateUser from '../actions/users/CreateUser'
import CreateSession from '../actions/users/CreateSession'
import DeleteUser from '../actions/users/DeleteUser'
import Authentication from '../actions/main/Authentication'

const johnData = {
    name: 'John',
    email: 'john@email.com',
    password: 'john1234'
}

const billData = {
    name: 'Bill',
    email: 'bill@email.com',
    password: 'bill1234'
}

afterAll(async () => {
    const currentUser = await CreateSession(johnData)
    const {token} = currentUser.data
    localStorage.setItem('jwtToken', token)
    Authentication(token)
    const decodedUser = jwt_decode(token)
    await DeleteUser(decodedUser.id)
})

describe('CreateUser action', () => {
    it('creates a new user if email not in use', async () => {
        const newUser = await CreateUser(johnData)
        expect(newUser.status).toBe(201)
    })
    
    it('fails to create a new user if email in use', async () => {
        try {
            await CreateUser(billData)
        } catch (error) {
            expect(error.response.status).toBe(409)
        }
    })
})
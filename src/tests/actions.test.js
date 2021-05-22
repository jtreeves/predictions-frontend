import CreateUser from '../actions/users/CreateUser'

describe('CreateUser action', () => {
    it('creates a new user if email not in use', async () => {
        const userData = {
            name: 'John',
            email: 'john@email.com',
            password: 'john1234'
        }
        const newUser = await CreateUser(userData)
        expect(newUser.status).toBe(201)
    })
    
    it('fails to create a new user if email in use', async () => {
        const userData = {
            name: 'Bill',
            email: 'bill@email.com',
            password: 'bill1234'
        }
        try {
            await CreateUser(userData)
        } catch (error) {
            expect(error.response.status).toBe(409)
        }
    })
})
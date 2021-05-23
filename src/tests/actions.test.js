import axios from 'axios'
import jwt_decode from 'jwt-decode'
import CreateUser from '../actions/users/CreateUser'
import CreateSession from '../actions/users/CreateSession'
import GetUser from '../actions/users/GetUser'
import UpdateName from '../actions/users/UpdateName'
import UpdateEmail from '../actions/users/UpdateEmail'
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

const martinData = {
    name: 'Martin',
    email: 'martin@email.com',
    password: 'martin1234'
}

const georgeData = {
    name: 'George',
    email: 'george@email.com',
    password: 'george1234'
}

beforeAll(async () => {
    await CreateUser(martinData)
    await CreateUser(georgeData)
})

afterAll(async () => {
    const currentUser = await CreateSession(johnData)
    const {token} = currentUser.data
    localStorage.setItem('jwtToken', token)
    Authentication(token)
    const decodedUser = jwt_decode(token)
    await DeleteUser(decodedUser.id)

    const otherUser = await CreateSession(georgeData)
    const otherToken = otherUser.data.token
    localStorage.setItem('jwtToken', otherToken)
    Authentication(otherToken)
    const decodedOtherUser = jwt_decode(otherToken)
    await DeleteUser(decodedOtherUser.id)
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
            expect(error.response.data.msg).toBe('Email already in use')
        }
    })
})

describe('CreateSession action', () => {
    it('logs in a user if email and password combination correct', async () => {
        const currentUser = await CreateSession(billData)
        expect(currentUser.status).toBe(201)
    })
    
    it('fails to log in a user if email and password combination incorrect', async () => {
        try {
            await CreateSession({
                email: billData.email, 
                password: johnData.password
            })
        } catch (error) {
            expect(error.response.status).toBe(401)
            expect(error.response.data.msg).toBe('Password is incorrect')
        }
    })
    
    it('fails to log in a user if user does not exist', async () => {
        try {
            await CreateSession({
                email: 'carbon@email.com', 
                password: 'carbon1234'
            })
        } catch (error) {
            expect(error.response.status).toBe(404)
            expect(error.response.data.msg).toBe('User not found')
        }
    })
})

describe('GetUser action', () => {
    it('gets info about user if user logged in', async () => {
        const currentSession = await CreateSession(billData)
        const {token} = currentSession.data
        localStorage.setItem('jwtToken', token)
        Authentication(token)
        const decodedUser = jwt_decode(token)
        const currentUser = await GetUser(decodedUser.id)
        expect(currentUser.status).toBe(200)
    })
    
    it('fails to get info about user if user not logged in', async () => {
        try {
            const currentSession = await CreateSession(billData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            const decodedUser = jwt_decode(token)
            localStorage.removeItem('jwtToken')
            delete axios.defaults.headers.common['Authorization']
            await GetUser(decodedUser.id)
        } catch (error) {
            expect(error.response.status).toBe(401)
        }
    })
    
    it('fails to get info about user if user does not exist', async () => {
        try {
            const currentSession = await CreateSession(billData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            await GetUser('123ABC')
        } catch (error) {
            expect(error.response.status).toBe(400)
        }
    })
})

describe('DeleteUser action', () => {
    it('deletes a user if user logged in', async () => {
        const currentUser = await CreateSession(martinData)
        const {token} = currentUser.data
        localStorage.setItem('jwtToken', token)
        Authentication(token)
        const decodedUser = jwt_decode(token)
        const deletion = await DeleteUser(decodedUser.id)
        expect(deletion.status).toBe(204)
    })
    
    it('fails to delete a user if user not logged in', async () => {
        try {
            const currentUser = await CreateSession(georgeData)
            const {token} = currentUser.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            const decodedUser = jwt_decode(token)
            const currentUserId = decodedUser.id
            localStorage.removeItem('jwtToken')
            delete axios.defaults.headers.common['Authorization']
            await DeleteUser(currentUserId)
        } catch (error) {
            expect(error.response.status).toBe(401)
        }
    })
    
    it('fails to delete a user if user does not exist', async () => {
        try {
            const currentUser = await CreateSession(georgeData)
            const {token} = currentUser.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            await DeleteUser('123ABC')
        } catch (error) {
            expect(error.response.status).toBe(400)
        }
    })
})
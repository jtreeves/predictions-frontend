import axios from 'axios'
import jwt_decode from 'jwt-decode'
import CreateUser from '../actions/users/CreateUser'
import CreateSession from '../actions/users/CreateSession'
import GetUser from '../actions/users/GetUser'
import UpdateName from '../actions/users/UpdateName'
import UpdateEmail from '../actions/users/UpdateEmail'
import DeleteUser from '../actions/users/DeleteUser'
import Authentication from '../actions/main/Authentication'
import CreatePredictions from '../actions/predictions/CreatePredictions'
import SavePredictions from '../actions/predictions/SavePredictions'

const predictoData = {
    name: 'Predicto',
    email: 'predicto@email.com',
    password: 'predicto1234'
}

let predictoId = ''

const firstPredictionSet = {
    title: 'Weather for Predicto',
    independent: 'months',
    dependent: 'temperature',
    precision: 4,
    dataSet: [[1, 53], [2, 58], [3, 66], [4, 73], [5, 80], [6, 87], [7, 89], [8, 88], [9, 83], [10, 74], [11, 64], [12, 55]]
}

const badPredictionSet = {
    title: 'Weather for Predicto',
    independent: 'months',
    dependent: 'temperature',
    precision: 4,
    dataSet: '[[1, 53], [2, 58], [3, 66], [4, 73], [5, 80], [6, 87], [7, 89], [8, 88], [9, 83], [10, 74], [11, 64], [12, 55]]'
}

const missingPredictionSet = {
    title: 'Weather for Predicto',
    independent: '',
    dependent: 'temperature',
    precision: 4,
    dataSet: '[[1, 53], [2, 58], [3, 66], [4, 73], [5, 80], [6, 87], [7, 89], [8, 88], [9, 83], [10, 74], [11, 64], [12, 55]]'
}

const secondPredictionSet = {
    title: 'Disease for Predicto',
    independent: 'months',
    dependent: 'deaths',
    precision: 4,
    dataSet: '[[1, 4], [2, 20], [3, 7117], [4, 72390], [5, 110593], [6, 128525], [7, 159539], [8, 189293], [9, 208337], [10, 232942], [11, 285620], [12, 382580]]'
}

const johnData = {
    name: 'John',
    email: 'john@email.com',
    password: 'john1234'
}

const badUser = {
    name: 'Marco',
    email: '',
    password: 'marco1234'
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

const susanData = {
    name: 'Susan',
    email: 'susan@email.com',
    password: 'susan1234'
}

beforeAll(async () => {
    await CreateUser(martinData)
    await CreateUser(georgeData)
    await CreateUser(susanData)
    await CreateUser(predictoData)
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
    
    const susanUser = await CreateSession({
        email: 'susy@susy.com', 
        password: 'susan1234'
    })
    const susanToken = susanUser.data.token
    localStorage.setItem('jwtToken', susanToken)
    Authentication(susanToken)
    const decodedSusanUser = jwt_decode(susanToken)
    await DeleteUser(decodedSusanUser.id)
    
    const predictoUser = await CreateSession(predictoData)
    const predictoToken = predictoUser.data.token
    localStorage.setItem('jwtToken', predictoToken)
    Authentication(predictoToken)
    const decodedPredictoUser = jwt_decode(predictoToken)
    await DeleteUser(decodedPredictoUser.id)
})

describe('Authentication action', () => {
    it('sets authorization headers if provided with token', () => {
        const token = 'ABC123'
        Authentication(token)
        const header = axios.defaults.headers.common['Authorization']
        expect(header).toBe(token)
    })
    
    it('deletes authorization headers if not provided with token', () => {
        Authentication()
        const header = axios.defaults.headers.common['Authorization']
        expect(header).toBeFalsy()
    })
})

describe('CreateUser action', () => {
    it('creates a new user if email not in use', async () => {
        const newUser = await CreateUser(johnData)
        expect(newUser.status).toBe(201)
        expect(newUser.data.msg).toBe('New user created')
    })
    
    it('fails to create a new user if submission contains blank field', async () => {
        try {
            await CreateUser(badUser)
        } catch (error) {
            expect(error.response.status).toBe(403)
            expect(error.response.data.msg).toBe('Name, email, and password fields must all be provided')
        }
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
        expect(currentUser.data.token.slice(0, 6)).toBe('Bearer')
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
    
    it('fails to log in a user if submission contains blank field', async () => {
        try {
            await CreateSession(badUser)
        } catch (error) {
            expect(error.response.status).toBe(403)
            expect(error.response.data.msg).toBe('Email and password fields must both be provided')
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
        expect(currentUser.data.user.email).toBe(billData.email)
    })
    
    it('fails to get info about user if ID not provided', async () => {
        try {
            const currentSession = await CreateSession(billData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            await GetUser('')
        } catch (error) {
            expect(error.response.status).toBe(404)
        }
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
            expect(error.response.data.msg).toBe('User information not retrieved')
        }
    })
})

describe('UpdateName action', () => {
    it('changes name of user if user logged in', async () => {
        const currentSession = await CreateSession(georgeData)
        const {token} = currentSession.data
        localStorage.setItem('jwtToken', token)
        Authentication(token)
        const decodedUser = jwt_decode(token)
        const currentUser = await UpdateName(decodedUser.id, 'GEORGE')
        expect(currentUser.status).toBe(204)
    })
    
    it('fails to change name of user if new name not provided', async () => {
        try {
            const currentSession = await CreateSession(georgeData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            const decodedUser = jwt_decode(token)
            await UpdateName(decodedUser.id, '')
        } catch (error) {
            expect(error.response.status).toBe(403)
            expect(error.response.data.msg).toBe('New name must be provided')
        }
    })
    
    it('fails to change name of user if ID not provided', async () => {
        try {
            const currentSession = await CreateSession(georgeData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            await UpdateName('', 'GEORGE')
        } catch (error) {
            expect(error.response.status).toBe(404)
        }
    })
    
    it('fails to change name of user if user not logged in', async () => {
        try {
            const currentSession = await CreateSession(georgeData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            const decodedUser = jwt_decode(token)
            localStorage.removeItem('jwtToken')
            delete axios.defaults.headers.common['Authorization']
            await UpdateName(decodedUser.id, 'GEORGE')
        } catch (error) {
            expect(error.response.status).toBe(401)
        }
    })
})

describe('UpdateEmail action', () => {
    it('changes email of user if user logged in', async () => {
        const currentSession = await CreateSession(susanData)
        const {token} = currentSession.data
        localStorage.setItem('jwtToken', token)
        Authentication(token)
        const decodedUser = jwt_decode(token)
        const currentUser = await UpdateEmail(decodedUser.id, 'susy@susy.com')
        expect(currentUser.status).toBe(204)
    })
    
    it('fails to change email of user if email already in use', async () => {
        try {
            const currentSession = await CreateSession(georgeData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            const decodedUser = jwt_decode(token)
            await UpdateEmail(decodedUser.id, 'bill@email.com')
        } catch (error) {
            expect(error.response.status).toBe(409)
            expect(error.response.data.msg).toBe('Email already in use')
        }
    })
    
    it('fails to change email of user if new email not provided', async () => {
        try {
            const currentSession = await CreateSession(georgeData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            const decodedUser = jwt_decode(token)
            await UpdateEmail(decodedUser.id, '')
        } catch (error) {
            expect(error.response.status).toBe(403)
            expect(error.response.data.msg).toBe('New email must be provided')
        }
    })
    
    it('fails to change email of user if ID not provided', async () => {
        try {
            const currentSession = await CreateSession(georgeData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            await UpdateEmail('', 'g@george.com')
        } catch (error) {
            expect(error.response.status).toBe(404)
        }
    })

    it('fails to change email of user if user not logged in', async () => {
        try {
            const currentSession = await CreateSession(georgeData)
            const {token} = currentSession.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            const decodedUser = jwt_decode(token)
            localStorage.removeItem('jwtToken')
            delete axios.defaults.headers.common['Authorization']
            await UpdateEmail(decodedUser.id, 'g@george.com')
        } catch (error) {
            expect(error.response.status).toBe(401)
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
    
    it('fails to delete a user if ID not provided', async () => {
        try {
            const currentUser = await CreateSession(georgeData)
            const {token} = currentUser.data
            localStorage.setItem('jwtToken', token)
            Authentication(token)
            await DeleteUser('')
        } catch (error) {
            expect(error.response.status).toBe(404)
        }
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
})

describe('CreatePredictions action', () => {
    jest.setTimeout(15000)

    beforeAll(async () => {
        const currentUser = await CreateSession(predictoData)
        const {token} = currentUser.data
        localStorage.setItem('jwtToken', token)
        Authentication(token)
        const decodedUser = jwt_decode(token)
        predictoId = decodedUser.id
    })

    let testSource = ''

    it('creates a new collection of predictions', async () => {
        const predictions = await CreatePredictions(firstPredictionSet)
        const regressions = predictions.data.regressions
        testSource = regressions.source
        expect(predictions.status).toBe(201)
        expect(regressions['best_fit']).toEqual('cubic')
        expect(regressions['linear_coefficients']).toEqual([0.7273, 67.7727])
        expect(regressions['linear_coefficients']).toEqual([0.7273, 67.7727])
        expect(regressions['quadratic_coefficients']).toEqual([-1.1374, 15.513, 33.2727])
        expect(regressions['cubic_coefficients']).toEqual([-0.0694, 0.2162, 8.19, 42.7475])
        expect(regressions['hyperbolic_coefficients']).toEqual([-28.1904, 79.7901])
        expect(regressions['exponential_coefficients']).toEqual([66.593, 1.0107])
        expect(regressions['logarithmic_coefficients']).toEqual([7.7255, 59.6324])
        expect(regressions['logistic_coefficients']).toEqual([77.223, 0.8019, 0.2482])
        expect(regressions['sinusoidal_coefficients']).toEqual([16.722, -0.6093, -11, 74.6609])
    })
    
    it('fails to create a new collection if submission contains blank field', async () => {
        try {
            await CreatePredictions(missingPredictionSet)
        } catch (error) {
            expect(error.response.status).toBe(403)
            expect(error.response.data.msg).toBe('Title, independent, dependent, precision, and data set fields must all be provided')
        }
    })
    
    it('fails to create a new collection if submission contains element of wrong type', async () => {
        try {
            await CreatePredictions(badPredictionSet)
        } catch (error) {
            expect(error.response.status).toBe(400)
            expect(error.response.data.msg).toBe('Regressions not created')
        }
    })

    afterAll(async () => {
        await SavePredictions(predictoId, testSource)
    })
})

describe('SavePredictions action', () => {
    jest.setTimeout(15000)

    beforeAll(async () => {
        const currentUser = await CreateSession(predictoData)
        const {token} = currentUser.data
        localStorage.setItem('jwtToken', token)
        Authentication(token)
        const decodedUser = jwt_decode(token)
        predictoId = decodedUser.id
    })

    let testSource = ''

    it('adds an existing collection to database', async () => {
        const predictions = await CreatePredictions(firstPredictionSet)
        const saved = await SavePredictions(predictoId, predictions.data.regressions.source)
        expect(saved.status).toBe(201)
        expect(saved.data.prediction.source).toBe(predictions.data.regressions.source)
    })
    
    it('fails to add an existing collection to database if source not provided', async () => {
        try {
            const predictions = await CreatePredictions(firstPredictionSet)
            testSource = predictions.data.regressions.source
            await SavePredictions(predictoId, '')
        } catch (error) {
            expect(error.response.status).toBe(403)
            expect(error.response.data.msg).toBe('Source must be provided')
        }
    })
    
    afterAll(async () => {
        await SavePredictions(predictoId, testSource)
    })
})
import EmptyInputAlert from '../utilities/main/EmptyInputAlert'
import VettedLogin from '../utilities/users/VettedLogin'
import VettedSignup from '../utilities/users/VettedSignup'
import CleanCollection from '../utilities/predictions/CleanCollection'

window.alert = jest.fn()

describe('EmptyInputAlert utility', () => {
    it('allows user to move to next stage if input field not blank', () => {
        const checkField = EmptyInputAlert('John', 'name')
        expect(checkField).toBe(true)
    })

    it('blocks user from moving to next stage if input field blank', () => {
        const checkField = EmptyInputAlert('', 'name')
        expect(checkField).toBe(false)
    })
})

describe('VettedLogin utility', () => {
    it('provides object of user data if no fields blank', () => {
        const userData = VettedLogin('john@email.com', 'john1234')
        expect(userData.email).toBe('john@email.com')
        expect(userData.password).toBe('john1234')
    })
    
    it('fails to provide object of user data if email field blank', () => {
        const userData = VettedLogin('', 'john1234')
        expect(userData).toBe(false)
    })
    
    it('fails to provide object of user data if password field blank', () => {
        const userData = VettedLogin('john@email.com', '')
        expect(userData).toBe(false)
    })
})

describe('VettedSignup utility', () => {
    it('provides object of user data if no fields blank and passwords match', () => {
        const userData = VettedSignup('John', 'john@email.com', 'john1234', 'john1234')
        expect(userData.name).toBe('John')
        expect(userData.email).toBe('john@email.com')
        expect(userData.password).toBe('john1234')
    })
    
    it('fails to provide object of user data if name field blank', () => {
        const userData = VettedSignup('', 'john@email.com', 'john1234', 'john1234')
        expect(userData).toBe(false)
    })
    
    it('fails to provide object of user data if email field blank', () => {
        const userData = VettedSignup('John', '', 'john1234', 'john1234')
        expect(userData).toBe(false)
    })
    
    it('fails to provide object of user data if password field blank', () => {
        const userData = VettedSignup('John', 'john@email.com', '', 'john1234')
        expect(userData).toBe(false)
    })
    
    it('fails to provide object of user data if confirm password field blank', () => {
        const userData = VettedSignup('John', 'john@email.com', 'john1234', '')
        expect(userData).toBe(false)
    })
    
    it('fails to provide object of user data if passwords do not match', () => {
        const userData = VettedSignup('John', 'john@email.com', 'john1234', '1234john')
        expect(userData).toBe(false)
    })
    
    it('fails to provide object of user data if password too short', () => {
        const userData = VettedSignup('John', 'john@email.com', '1234', '1234')
        expect(userData).toBe(false)
    })
})

describe('CleanCollection utility', () => {
    it('returns original string if it contains no parentheses or semicolons and is enclosed correctly', () => {
        const dataSet = CleanCollection('[[1, 2], [3, 4], [5, 6]]')
        expect(dataSet).toBe('[[1, 2], [3, 4], [5, 6]]')
    })
    
    it('replaces parentheses with brackets if original string contains parentheses', () => {
        const dataSet = CleanCollection('[(1, 2), (3, 4), (5, 6)]')
        expect(dataSet).toBe('[[1, 2], [3, 4], [5, 6]]')
    })
    
    it('replaces semicolons with commas if original string contains semicolons', () => {
        const dataSet = CleanCollection('[[1, 2]; [3, 4]; [5, 6]]')
        expect(dataSet).toBe('[[1, 2], [3, 4], [5, 6]]')
    })
    
    it('wraps string in opening and closing brackets if original string omits encapsulation', () => {
        const dataSet = CleanCollection('[1, 2], [3, 4], [5, 6]')
        expect(dataSet).toBe('[[1, 2], [3, 4], [5, 6]]')
    })
})
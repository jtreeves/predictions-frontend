import EmptyInputAlert from '../utilities/main/EmptyInputAlert'

window.alert = jest.fn()

describe('EmptyInputAlert utility', () => {
    it('blocks user from moving to next stage if input field blank', () => {
        const checkField = EmptyInputAlert('', 'name')
        expect(checkField).toBe(false)
    })
    
    it('allows user to move to next stage if input field blank', () => {
        const checkField = EmptyInputAlert('John', 'name')
        expect(checkField).toBe(true)
    })
})
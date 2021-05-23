import { render, screen } from '@testing-library/react'
import EmptyInputAlert from '../utilities/main/EmptyInputAlert'
import VettedLogin from '../utilities/users/VettedLogin'
import VettedSignup from '../utilities/users/VettedSignup'
import VettedDataForm from '../utilities/predictions/VettedDataForm'
import CleanCollection from '../utilities/predictions/CleanCollection'
import Evaluations from '../utilities/predictions/Evaluations'
import SpreadsheetInput from '../utilities/predictions/SpreadsheetInput'
import CheckExpiration from '../utilities/users/CheckExpiration'
import AllFormElements from '../utilities/predictions/AllFormElements'
import FormatPoints from '../utilities/predictions/FormatPoints'

window.alert = jest.fn()

describe('AllFormElements utility', () => {
    it('returns object containing keys for all form elements on page', () => {
        const mockPage = <div>
            <div id="submit-button">Submit Button</div>
            <div id="delete-button">Delete Button</div>
            <div id="undo-submit-button">Undo Submit Button</div>
            <div id="undo-delete-button">Undo Delete Button</div>
            <div id="submit-warning">Submit Warning</div>
            <div id="delete-warning">Delete Warning</div>
        </div>
        render(mockPage)
        const elements = AllFormElements()
        const submitButtonByText = screen.getByText('Submit Button')
        const deleteButtonByText = screen.getByText('Delete Button')
        const undoSubmitButtonByText = screen.getByText('Undo Submit Button')
        const undoDeleteButtonByText = screen.getByText('Undo Delete Button')
        const submitWarningByText = screen.getByText('Submit Warning')
        const deleteWarningByText = screen.getByText('Delete Warning')
        expect(elements.submitButton).toBe(submitButtonByText)
        expect(elements.deleteButton).toBe(deleteButtonByText)
        expect(elements.undoSubmitButton).toBe(undoSubmitButtonByText)
        expect(elements.undoDeleteButton).toBe(undoDeleteButtonByText)
        expect(elements.submitWarning).toBe(submitWarningByText)
        expect(elements.deleteWarning).toBe(deleteWarningByText)
    })
})

describe('FormatPoints utility', () => {
    it('returns LaTeX string of coordinate pairs from an array of arrays', () => {
        const pointsArray = [[1, 2], [3, 4], [5, 6]]
        const pointsString = FormatPoints(pointsArray)
        expect(pointsString).toBe('$ (1, 2),\\: $$ (3, 4),\\: $$ (5, 6)$')
    })
    
    it('returns LaTeX string of one coordinate pair from an array containing only one array', () => {
        const pointsArray = [[1, 2]]
        const pointsString = FormatPoints(pointsArray)
        expect(pointsString).toBe('$ (1, 2)$')
    })
    
    it('returns LaTeX string of none from an array of null', () => {
        const pointsArray = [null]
        const pointsString = FormatPoints(pointsArray)
        expect(pointsString).toBe('$ None $')
    })
})

describe('CheckExpiration utility', () => {
    it('fires if expired', () => {
        const handleLogout = jest.fn()
        const currentTime = Date.now()
        const expirationTime = currentTime / 1000 - 1000
        CheckExpiration(expirationTime, handleLogout)
        expect(handleLogout).toHaveBeenCalled()
    })
    
    it('does not fire if not expired', () => {
        const handleLogout = jest.fn()
        const currentTime = Date.now()
        const expirationTime = currentTime / 1000 + 1000
        CheckExpiration(expirationTime, handleLogout)
        expect(handleLogout).not.toHaveBeenCalled()
    })
})

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

describe('VettedDataForm utility', () => {
    it('provides object of data set if no fields blank', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet.title).toBe('Maximize Profits')
        expect(dataSet.independent).toBe('units')
        expect(dataSet.dependent).toBe('dollars')
        expect(dataSet.precision).toBe(4)
        expect(dataSet.dataSet).toStrictEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]])
    })
    
    it('fails to provide object of data set if title field blank', () => {
        const dataSet = VettedDataForm('', 'units', 'dollars', 4, '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if independent field blank', () => {
        const dataSet = VettedDataForm('Maximize Profits', '', 'dollars', 4, '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if dependent field blank', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', '', 4, '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if precision field blank', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', '', '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if data set field blank', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, '')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if precision field not a number', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 'one', '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if precision field zero', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 0, '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if precision field negative', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', -4, '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if precision field decimal', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4.5, '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if data set contains less than 10 elements', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if data set contains typo with encapsulation', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, '[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if data set not a list', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, 'data set')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if data set list does not contain other lists', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if data set list contains any lists with more than two elements', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, '[[1, 2], [3, 4], [5, 6, 56], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })
    
    it('fails to provide object of data set if data set list contains any lists with less than two elements', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, '[[1, 2], [3, 4], [5], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })

    it('fails to provide object of data set if data set list contains any lists containing a string as an element', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, '[[1, 2], [3, 4], ["five", 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
    })

    it('fails to provide object of data set if data set list contains any lists containing a list as an element', () => {
        const dataSet = VettedDataForm('Maximize Profits', 'units', 'dollars', 4, '[[1, 2], [3, 4], [5, [6, 56]], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]]')
        expect(dataSet).toBe(false)
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

describe('SpreadsheetInput utility', () => {
    it('replaces line breaks with brackets and commas', () => {
        const dataSet = SpreadsheetInput('1,2\r\n3,4\r\n5,6')
        expect(dataSet).toBe('[[1,2],[3,4],[5,6]]')
    })
})

describe('Evaluations utility', () => {
    it('returns output of linear function at a given input', () => {
        const dependent = Evaluations('linear', [2, 3], 4, 10)
        expect(dependent).toBe('23.0000')
    })
    
    it('returns output of quadratic function at a given input', () => {
        const dependent = Evaluations('quadratic', [2, 3, 5], 4, 10)
        expect(dependent).toBe('235.0000')
    })
    
    it('returns output of cubic function at a given input', () => {
        const dependent = Evaluations('cubic', [2, 3, 5, 7], 4, 10)
        expect(dependent).toBe('2357.0000')
    })
    
    it('returns output of hyperbolic function at a given input', () => {
        const dependent = Evaluations('hyperbolic', [2, 3], 4, 10)
        expect(dependent).toBe('3.2000')
    })
    
    it('returns output of hyperbolic function at a given input', () => {
        const dependent = Evaluations('hyperbolic', [2, 3], 4, 10)
        expect(dependent).toBe('3.2000')
    })
    
    it('returns output of exponential function at a given input', () => {
        const dependent = Evaluations('exponential', [2, 3], 4, 10)
        expect(dependent).toBe('118098.0000')
    })
    
    it('returns output of logarithmic function at a given input', () => {
        const dependent = Evaluations('logarithmic', [2, 3], 4, 10)
        expect(dependent).toBe('7.6052')
    })
    
    it('returns output of logistic function at a given input', () => {
        const dependent = Evaluations('logistic', [2, 3, 5], 4, 10)
        expect(dependent).toBe('2.0000')
    })
    
    it('returns output of sinusoidal function at a given input', () => {
        const dependent = Evaluations('sinusoidal', [2, 3, 5, 7], 4, 10)
        expect(dependent).toBe('8.3006')
    })
})
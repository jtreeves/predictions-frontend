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
import ResetFormElements from '../utilities/predictions/ResetFormElements'
import FormatPoints from '../utilities/predictions/FormatPoints'
import FormatSlots from '../utilities/predictions/FormatSlots'
import GeneratePoints from '../utilities/predictions/GeneratePoints'
import VerticalAxis from '../utilities/predictions/VerticalAxis'

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

describe('ResetFormElements utility', () => {
    it('ensures appropriate form elements on page hidden or displayed', () => {
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
        expect(elements.submitButton).toBeVisible()
        expect(elements.deleteButton).toBeVisible()
        expect(elements.undoSubmitButton).toBeVisible()
        expect(elements.undoDeleteButton).toBeVisible()
        expect(elements.submitWarning).toBeVisible()
        expect(elements.deleteWarning).toBeVisible()
        ResetFormElements()
        expect(elements.submitButton).toBeVisible()
        expect(elements.deleteButton).toBeVisible()
        expect(elements.undoSubmitButton).not.toBeVisible()
        expect(elements.undoDeleteButton).not.toBeVisible()
        expect(elements.submitWarning).not.toBeVisible()
        expect(elements.deleteWarning).not.toBeVisible()
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

describe('FormatSlots utility', () => {
    it('returns string of adding number if number positive and operation addition', () => {
        const slotString = FormatSlots(2, 'addition')
        expect(slotString).toBe('+ 2')
    })
    
    it('returns string of subtracting negative of number if number negative and operation addition', () => {
        const slotString = FormatSlots(-2, 'addition')
        expect(slotString).toBe('- 2')
    })
    
    it('returns string of subtracting number if number positive and operation subtraction', () => {
        const slotString = FormatSlots(2, 'subtraction')
        expect(slotString).toBe('- 2')
    })
    
    it('returns string of adding negative of number if number negative and operation subtraction', () => {
        const slotString = FormatSlots(-2, 'subtraction')
        expect(slotString).toBe('+ 2')
    })
    
    it('returns string of number preceded by negation symbol if number positive and operation negation', () => {
        const slotString = FormatSlots(2, 'negation')
        expect(slotString).toBe('-2')
    })
    
    it('returns string of negative of number if number negative and operation negation', () => {
        const slotString = FormatSlots(-2, 'negation')
        expect(slotString).toBe('2')
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

describe('VerticalAxis utility', () => {
    it('determines minimum and maximum y-values from across an array of arrays containing coordinate pairs', () => {
        const firstPoints = [
            {x: 1, y: '1.1'},
            {x: 2, y: '2.3'},
            {x: 3, y: '3.4'},
        ]
        const secondPoints = [
            {x: 1, y: '23.7'},
            {x: 2, y: '57.1'},
            {x: 3, y: '-14.5'},
        ]
        const thirdPoints = [
            {x: 1, y: '111.8'},
            {x: 2, y: '6.3'},
            {x: 3, y: '2.9'},
        ]
        const allPoints = [firstPoints, secondPoints, thirdPoints]
        const axis = VerticalAxis(allPoints)
        expect(axis.minimum).toEqual(-14.5)
        expect(axis.maximum).toEqual(111.8)
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
        expect(dataSet.title).toEqual('Maximize Profits')
        expect(dataSet.independent).toEqual('units')
        expect(dataSet.dependent).toEqual('dollars')
        expect(dataSet.precision).toEqual(4)
        expect(dataSet.dataSet).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20]])
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

describe('GeneratePoints utility', () => {
    it('creates array of objects of coordinate pairs of a linear function over an interval', () => {
        const points = GeneratePoints('linear', [2, 3], 1, 5, 1, 4)
        expect(points).toEqual([
            {x: 1, y: '5.0000'},
            {x: 2, y: '7.0000'},
            {x: 3, y: '9.0000'},
            {x: 4, y: '11.0000'},
            {x: 5, y: '13.0000'}
        ])
    })
    
    it('creates array of objects of coordinate pairs of a quadratic function over an interval', () => {
        const points = GeneratePoints('quadratic', [2, 3, 5], 1, 5, 1, 4)
        expect(points).toEqual([
            {x: 1, y: '10.0000'},
            {x: 2, y: '19.0000'},
            {x: 3, y: '32.0000'},
            {x: 4, y: '49.0000'},
            {x: 5, y: '70.0000'}
        ])
    })
    
    it('creates array of objects of coordinate pairs of a cubic function over an interval', () => {
        const points = GeneratePoints('cubic', [2, 3, 5, 7], 1, 5, 1, 4)
        expect(points).toEqual([
            {x: 1, y: '17.0000'},
            {x: 2, y: '45.0000'},
            {x: 3, y: '103.0000'},
            {x: 4, y: '203.0000'},
            {x: 5, y: '357.0000'}
        ])
    })
    
    it('creates array of objects of coordinate pairs of a hyperbolic function over an interval', () => {
        const points = GeneratePoints('hyperbolic', [2, 3], 1, 5, 1, 4)
        expect(points).toEqual([
            {x: 1, y: '5.0000'},
            {x: 2, y: '4.0000'},
            {x: 3, y: '3.6667'},
            {x: 4, y: '3.5000'},
            {x: 5, y: '3.4000'}
        ])
    })
    
    it('creates array of objects of coordinate pairs of an exponential function over an interval', () => {
        const points = GeneratePoints('exponential', [2, 3], 1, 5, 1, 4)
        expect(points).toEqual([
            {x: 1, y: '6.0000'},
            {x: 2, y: '18.0000'},
            {x: 3, y: '54.0000'},
            {x: 4, y: '162.0000'},
            {x: 5, y: '486.0000'}
        ])
    })
    
    it('creates array of objects of coordinate pairs of a logarithmic function over an interval', () => {
        const points = GeneratePoints('logarithmic', [2, 3], 1, 5, 1, 4)
        expect(points).toEqual([
            {x: 1, y: '3.0000'},
            {x: 2, y: '4.3863'},
            {x: 3, y: '5.1972'},
            {x: 4, y: '5.7726'},
            {x: 5, y: '6.2189'}
        ])
    })
    
    it('creates array of objects of coordinate pairs of a logistic function over an interval', () => {
        const points = GeneratePoints('logistic', [2, 3, 5], 1, 5, 1, 4)
        expect(points).toEqual([
            {x: 1, y: '0.0000'},
            {x: 2, y: '0.0002'},
            {x: 3, y: '0.0049'},
            {x: 4, y: '0.0949'},
            {x: 5, y: '1.0000'}
        ])
    })
    
    it('creates array of objects of coordinate pairs of a sinusoidal function over an interval', () => {
        const points = GeneratePoints('sinusoidal', [2, 3, 5, 7], 1, 5, 1, 4)
        expect(points).toEqual([
            {x: 1, y: '8.0731'},
            {x: 2, y: '6.1758'},
            {x: 3, y: '7.5588'},
            {x: 4, y: '6.7178'},
            {x: 5, y: '7.0000'}
        ])
    })
    
    it('creates array of objects of coordinate pairs (including a placeholder pair) of a hyperbolic function over an interval that includes 0', () => {
        const points = GeneratePoints('hyperbolic', [2, 3], -1, 1, 1, 4)
        expect(points).toEqual([
            {x: -1, y: '1.0000'},
            {x: 0, y: 0},
            {x: 1, y: '5.0000'}
        ])
    })
    
    it('creates array of objects of coordinate pairs (including placeholder pairs) of a logarithmic function over an interval that includes values at or below 0', () => {
        const points = GeneratePoints('logarithmic', [2, 3], -1, 1, 1, 4)
        expect(points).toEqual([
            {x: -1, y: 0},
            {x: 0, y: 0},
            {x: 1, y: '3.0000'}
        ])
    })
    
    it('creates array of objects of coordinate pairs with nonzero increment if increment inputted as 0', () => {
        const points = GeneratePoints('linear', [2, 3], 1, 1.05, 0, 2)
        expect(points).toEqual([
            {x: 1, y: '5.00'},
            {x: 1.01, y: '5.02'},
            {x: 1.02, y: '5.04'},
            {x: 1.03, y: '5.06'},
            {x: 1.04, y: '5.08'},
            {x: 1.05, y: '5.10'},
        ])
    })
    
    it('creates array of one object of coordinate pairs when max and min are the same', () => {
        const points = GeneratePoints('linear', [2, 3], 1, 1, 1, 2)
        expect(points).toEqual([
            {x: 1, y: '5.00'}
        ])
    })
})

describe('Evaluations utility', () => {
    it('returns output of linear function at a given input', () => {
        const dependent = Evaluations('linear', [2, 3], 4, 10)
        expect(dependent).toEqual('23.0000')
    })
    
    it('returns output of quadratic function at a given input', () => {
        const dependent = Evaluations('quadratic', [2, 3, 5], 4, 10)
        expect(dependent).toEqual('235.0000')
    })
    
    it('returns output of cubic function at a given input', () => {
        const dependent = Evaluations('cubic', [2, 3, 5, 7], 4, 10)
        expect(dependent).toEqual('2357.0000')
    })
    
    it('returns output of hyperbolic function at a given input', () => {
        const dependent = Evaluations('hyperbolic', [2, 3], 4, 10)
        expect(dependent).toEqual('3.2000')
    })
    
    it('returns output of hyperbolic function at a given input', () => {
        const dependent = Evaluations('hyperbolic', [2, 3], 4, 10)
        expect(dependent).toEqual('3.2000')
    })
    
    it('returns output of exponential function at a given input', () => {
        const dependent = Evaluations('exponential', [2, 3], 4, 10)
        expect(dependent).toEqual('118098.0000')
    })
    
    it('returns output of logarithmic function at a given input', () => {
        const dependent = Evaluations('logarithmic', [2, 3], 4, 10)
        expect(dependent).toEqual('7.6052')
    })
    
    it('returns output of logistic function at a given input', () => {
        const dependent = Evaluations('logistic', [2, 3, 5], 4, 10)
        expect(dependent).toEqual('2.0000')
    })
    
    it('returns output of sinusoidal function at a given input', () => {
        const dependent = Evaluations('sinusoidal', [2, 3, 5, 7], 4, 10)
        expect(dependent).toEqual('8.3006')
    })
})
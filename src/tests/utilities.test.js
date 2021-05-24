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
import HorizontalAxis from '../utilities/predictions/HorizontalAxis'
import ZoomSeparateGraphs from '../utilities/predictions/ZoomSeparateGraphs'
import CheckFavorite from '../utilities/predictions/CheckFavorite'

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

describe('ZoomSeparateGraphs utility', () => {
    it('sets points for all function types over an interval', () => {
        let originalCoordinates = []
        let linearCoordinates = []
        let quadraticCoordinates = []
        let cubicCoordinates = []
        let hyperbolicCoordinates = []
        let exponentialCoordinates = []
        let logarithmicCoordinates = []
        let logisticCoordinates = []
        let sinusoidalCoordinates = []
        const mockSetOriginalCoordinates = (element) => {
            originalCoordinates = element
        }
        const mockSetLinearCoordinates = (element) => {
            linearCoordinates = element
        }
        const mockSetQuadraticCoordinates = (element) => {
            quadraticCoordinates = element
        }
        const mockSetCubicCoordinates = (element) => {
            cubicCoordinates = element
        }
        const mockSetHyperbolicCoordinates = (element) => {
            hyperbolicCoordinates = element
        }
        const mockSetExponentialCoordinates = (element) => {
            exponentialCoordinates = element
        }
        const mockSetLogarithmicCoordinates = (element) => {
            logarithmicCoordinates = element
        }
        const mockSetLogisticCoordinates = (element) => {
            logisticCoordinates = element
        }
        const mockSetSinusoidalCoordinates = (element) => {
            sinusoidalCoordinates = element
        }
        const twoConstants = [2, 3]
        const threeConstants = [2, 3, 5]
        const fourConstants = [2, 3, 5, 7]
        const points = [
            {x: 2, y: 35},
            {x: 3, y: 19},
            {x: 5, y: -7}
        ]
        ZoomSeparateGraphs(
            true, 
            mockSetOriginalCoordinates, 
            points, 
            true, 
            mockSetLinearCoordinates, 
            twoConstants, 
            true, 
            mockSetQuadraticCoordinates, 
            threeConstants, 
            true, 
            mockSetCubicCoordinates, 
            fourConstants, 
            true, 
            mockSetHyperbolicCoordinates, 
            twoConstants, 
            true, 
            mockSetExponentialCoordinates, 
            twoConstants, 
            true, 
            mockSetLogarithmicCoordinates, 
            twoConstants, 
            true, 
            mockSetLogisticCoordinates, 
            threeConstants, 
            true, 
            mockSetSinusoidalCoordinates, 
            fourConstants, 
            1, 
            5, 
            1, 
            2
        )
        expect(originalCoordinates).toEqual(points)
        expect(linearCoordinates).toEqual([
            {x: 1, y: '5.00'},
            {x: 2, y: '7.00'},
            {x: 3, y: '9.00'},
            {x: 4, y: '11.00'},
            {x: 5, y: '13.00'}
        ])
        expect(quadraticCoordinates).toEqual([
            {x: 1, y: '10.00'},
            {x: 2, y: '19.00'},
            {x: 3, y: '32.00'},
            {x: 4, y: '49.00'},
            {x: 5, y: '70.00'}
        ])
        expect(cubicCoordinates).toEqual([
            {x: 1, y: '17.00'},
            {x: 2, y: '45.00'},
            {x: 3, y: '103.00'},
            {x: 4, y: '203.00'},
            {x: 5, y: '357.00'}
        ])
        expect(hyperbolicCoordinates).toEqual([
            {x: 1, y: '5.00'},
            {x: 2, y: '4.00'},
            {x: 3, y: '3.67'},
            {x: 4, y: '3.50'},
            {x: 5, y: '3.40'}
        ])
        expect(exponentialCoordinates).toEqual([
            {x: 1, y: '6.00'},
            {x: 2, y: '18.00'},
            {x: 3, y: '54.00'},
            {x: 4, y: '162.00'},
            {x: 5, y: '486.00'}
        ])
        expect(logarithmicCoordinates).toEqual([
            {x: 1, y: '3.00'},
            {x: 2, y: '4.39'},
            {x: 3, y: '5.20'},
            {x: 4, y: '5.77'},
            {x: 5, y: '6.22'}
        ])
        expect(logisticCoordinates).toEqual([
            {x: 1, y: '0.00'},
            {x: 2, y: '0.00'},
            {x: 3, y: '0.00'},
            {x: 4, y: '0.09'},
            {x: 5, y: '1.00'}
        ])
        expect(sinusoidalCoordinates).toEqual([
            {x: 1, y: '8.07'},
            {x: 2, y: '6.18'},
            {x: 3, y: '7.56'},
            {x: 4, y: '6.72'},
            {x: 5, y: '7.00'}
        ])
    })

    it('sets points only for original coordinates if all function types set to false', () => {
        let originalCoordinates = []
        let linearCoordinates = []
        let quadraticCoordinates = []
        let cubicCoordinates = []
        let hyperbolicCoordinates = []
        let exponentialCoordinates = []
        let logarithmicCoordinates = []
        let logisticCoordinates = []
        let sinusoidalCoordinates = []
        const mockSetOriginalCoordinates = (element) => {
            originalCoordinates = element
        }
        const mockSetLinearCoordinates = (element) => {
            linearCoordinates = element
        }
        const mockSetQuadraticCoordinates = (element) => {
            quadraticCoordinates = element
        }
        const mockSetCubicCoordinates = (element) => {
            cubicCoordinates = element
        }
        const mockSetHyperbolicCoordinates = (element) => {
            hyperbolicCoordinates = element
        }
        const mockSetExponentialCoordinates = (element) => {
            exponentialCoordinates = element
        }
        const mockSetLogarithmicCoordinates = (element) => {
            logarithmicCoordinates = element
        }
        const mockSetLogisticCoordinates = (element) => {
            logisticCoordinates = element
        }
        const mockSetSinusoidalCoordinates = (element) => {
            sinusoidalCoordinates = element
        }
        const twoConstants = [2, 3]
        const threeConstants = [2, 3, 5]
        const fourConstants = [2, 3, 5, 7]
        const points = [
            {x: 2, y: 35},
            {x: 3, y: 19},
            {x: 5, y: -7}
        ]
        ZoomSeparateGraphs(
            true, 
            mockSetOriginalCoordinates, 
            points, 
            false, 
            mockSetLinearCoordinates, 
            twoConstants, 
            false, 
            mockSetQuadraticCoordinates, 
            threeConstants, 
            false, 
            mockSetCubicCoordinates, 
            fourConstants, 
            false, 
            mockSetHyperbolicCoordinates, 
            twoConstants, 
            false, 
            mockSetExponentialCoordinates, 
            twoConstants, 
            false, 
            mockSetLogarithmicCoordinates, 
            twoConstants, 
            false, 
            mockSetLogisticCoordinates, 
            threeConstants, 
            false, 
            mockSetSinusoidalCoordinates, 
            fourConstants, 
            1, 
            5, 
            1, 
            2
        )
        expect(originalCoordinates).toEqual(points)
        expect(linearCoordinates).toEqual([])
        expect(quadraticCoordinates).toEqual([])
        expect(cubicCoordinates).toEqual([])
        expect(hyperbolicCoordinates).toEqual([])
        expect(exponentialCoordinates).toEqual([])
        expect(logarithmicCoordinates).toEqual([])
        expect(logisticCoordinates).toEqual([])
        expect(sinusoidalCoordinates).toEqual([])
    })
    
    it('only includes original points between maximum and minimum', () => {
        let originalCoordinates = []
        let linearCoordinates = []
        let quadraticCoordinates = []
        let cubicCoordinates = []
        let hyperbolicCoordinates = []
        let exponentialCoordinates = []
        let logarithmicCoordinates = []
        let logisticCoordinates = []
        let sinusoidalCoordinates = []
        const mockSetOriginalCoordinates = (element) => {
            originalCoordinates = element
        }
        const mockSetLinearCoordinates = (element) => {
            linearCoordinates = element
        }
        const mockSetQuadraticCoordinates = (element) => {
            quadraticCoordinates = element
        }
        const mockSetCubicCoordinates = (element) => {
            cubicCoordinates = element
        }
        const mockSetHyperbolicCoordinates = (element) => {
            hyperbolicCoordinates = element
        }
        const mockSetExponentialCoordinates = (element) => {
            exponentialCoordinates = element
        }
        const mockSetLogarithmicCoordinates = (element) => {
            logarithmicCoordinates = element
        }
        const mockSetLogisticCoordinates = (element) => {
            logisticCoordinates = element
        }
        const mockSetSinusoidalCoordinates = (element) => {
            sinusoidalCoordinates = element
        }
        const twoConstants = [2, 3]
        const threeConstants = [2, 3, 5]
        const fourConstants = [2, 3, 5, 7]
        const points = [
            {x: 2, y: 35},
            {x: 3, y: 19},
            {x: 5, y: -7}
        ]
        ZoomSeparateGraphs(
            true, 
            mockSetOriginalCoordinates, 
            points, 
            false, 
            mockSetLinearCoordinates, 
            twoConstants, 
            false, 
            mockSetQuadraticCoordinates, 
            threeConstants, 
            false, 
            mockSetCubicCoordinates, 
            fourConstants, 
            false, 
            mockSetHyperbolicCoordinates, 
            twoConstants, 
            false, 
            mockSetExponentialCoordinates, 
            twoConstants, 
            false, 
            mockSetLogarithmicCoordinates, 
            twoConstants, 
            false, 
            mockSetLogisticCoordinates, 
            threeConstants, 
            false, 
            mockSetSinusoidalCoordinates, 
            fourConstants, 
            2.5, 
            4.5, 
            1, 
            2
        )
        expect(originalCoordinates).toEqual([{x: 3, y: 19}])
        expect(linearCoordinates).toEqual([])
        expect(quadraticCoordinates).toEqual([])
        expect(cubicCoordinates).toEqual([])
        expect(hyperbolicCoordinates).toEqual([])
        expect(exponentialCoordinates).toEqual([])
        expect(logarithmicCoordinates).toEqual([])
        expect(logisticCoordinates).toEqual([])
        expect(sinusoidalCoordinates).toEqual([])
    })
})

describe('CheckFavorite utility', () => {
    it('displays only points for quadratic function if favorite', () => {
        let linearCoordinates = []
        let quadraticCoordinates = []
        let cubicCoordinates = []
        let hyperbolicCoordinates = []
        let exponentialCoordinates = []
        let logarithmicCoordinates = []
        let logisticCoordinates = []
        let sinusoidalCoordinates = []
        let checkFavorite = true
        let displayLinear = false
        let displayQuadratic = false
        let displayCubic = false
        let displayHyperbolic = false
        let displayExponential = false
        let displayLogarithmic = false
        let displayLogistic = false
        let displaySinusoidal = false
        const mockSetCheckFavorite = (element) => {
            checkFavorite = element
        }
        const mockSetLinearCoordinates = (element) => {
            linearCoordinates = element
        }
        const mockSetQuadraticCoordinates = (element) => {
            quadraticCoordinates = element
        }
        const mockSetCubicCoordinates = (element) => {
            cubicCoordinates = element
        }
        const mockSetHyperbolicCoordinates = (element) => {
            hyperbolicCoordinates = element
        }
        const mockSetExponentialCoordinates = (element) => {
            exponentialCoordinates = element
        }
        const mockSetLogarithmicCoordinates = (element) => {
            logarithmicCoordinates = element
        }
        const mockSetLogisticCoordinates = (element) => {
            logisticCoordinates = element
        }
        const mockSetSinusoidalCoordinates = (element) => {
            sinusoidalCoordinates = element
        }
        const mockSetDisplayLinear = (element) => {
            displayLinear = element
        }
        const mockSetDisplayQuadratic = (element) => {
            displayQuadratic = element
        }
        const mockSetDisplayCubic = (element) => {
            displayCubic = element
        }
        const mockSetDisplayHyperbolic = (element) => {
            displayHyperbolic = element
        }
        const mockSetDisplayExponential = (element) => {
            displayExponential = element
        }
        const mockSetDisplayLogarithmic = (element) => {
            displayLogarithmic = element
        }
        const mockSetDisplayLogistic = (element) => {
            displayLogistic = element
        }
        const mockSetDisplaySinusoidal = (element) => {
            displaySinusoidal = element
        }
        const twoConstants = [2, 3]
        const threeConstants = [2, 3, 5]
        const fourConstants = [2, 3, 5, 7]
        CheckFavorite(
            'quadratic', 
            checkFavorite,
            mockSetCheckFavorite,
            1, 
            5, 
            1, 
            2, 
            twoConstants, 
            mockSetDisplayLinear, 
            mockSetLinearCoordinates, 
            threeConstants, 
            mockSetDisplayQuadratic, 
            mockSetQuadraticCoordinates, 
            fourConstants, 
            mockSetDisplayCubic, 
            mockSetCubicCoordinates, 
            twoConstants, 
            mockSetDisplayHyperbolic, 
            mockSetHyperbolicCoordinates, 
            twoConstants, 
            mockSetDisplayExponential, 
            mockSetExponentialCoordinates, 
            twoConstants, 
            mockSetDisplayLogarithmic, 
            mockSetLogarithmicCoordinates, 
            threeConstants, 
            mockSetDisplayLogistic, 
            mockSetLogisticCoordinates, 
            fourConstants, 
            mockSetDisplaySinusoidal, 
            mockSetSinusoidalCoordinates
        )
        expect(linearCoordinates).toEqual([])
        expect(quadraticCoordinates).toEqual([
            {x: 1, y: '10.00'},
            {x: 2, y: '19.00'},
            {x: 3, y: '32.00'},
            {x: 4, y: '49.00'},
            {x: 5, y: '70.00'}
        ])
        expect(cubicCoordinates).toEqual([])
        expect(hyperbolicCoordinates).toEqual([])
        expect(exponentialCoordinates).toEqual([])
        expect(logarithmicCoordinates).toEqual([])
        expect(logisticCoordinates).toEqual([])
        expect(sinusoidalCoordinates).toEqual([])
    })
    
    it('displays only points for sinusoidal function if favorite', () => {
        let linearCoordinates = []
        let quadraticCoordinates = []
        let cubicCoordinates = []
        let hyperbolicCoordinates = []
        let exponentialCoordinates = []
        let logarithmicCoordinates = []
        let logisticCoordinates = []
        let sinusoidalCoordinates = []
        let checkFavorite = true
        let displayLinear = false
        let displayQuadratic = false
        let displayCubic = false
        let displayHyperbolic = false
        let displayExponential = false
        let displayLogarithmic = false
        let displayLogistic = false
        let displaySinusoidal = false
        const mockSetCheckFavorite = (element) => {
            checkFavorite = element
        }
        const mockSetLinearCoordinates = (element) => {
            linearCoordinates = element
        }
        const mockSetQuadraticCoordinates = (element) => {
            quadraticCoordinates = element
        }
        const mockSetCubicCoordinates = (element) => {
            cubicCoordinates = element
        }
        const mockSetHyperbolicCoordinates = (element) => {
            hyperbolicCoordinates = element
        }
        const mockSetExponentialCoordinates = (element) => {
            exponentialCoordinates = element
        }
        const mockSetLogarithmicCoordinates = (element) => {
            logarithmicCoordinates = element
        }
        const mockSetLogisticCoordinates = (element) => {
            logisticCoordinates = element
        }
        const mockSetSinusoidalCoordinates = (element) => {
            sinusoidalCoordinates = element
        }
        const mockSetDisplayLinear = (element) => {
            displayLinear = element
        }
        const mockSetDisplayQuadratic = (element) => {
            displayQuadratic = element
        }
        const mockSetDisplayCubic = (element) => {
            displayCubic = element
        }
        const mockSetDisplayHyperbolic = (element) => {
            displayHyperbolic = element
        }
        const mockSetDisplayExponential = (element) => {
            displayExponential = element
        }
        const mockSetDisplayLogarithmic = (element) => {
            displayLogarithmic = element
        }
        const mockSetDisplayLogistic = (element) => {
            displayLogistic = element
        }
        const mockSetDisplaySinusoidal = (element) => {
            displaySinusoidal = element
        }
        const twoConstants = [2, 3]
        const threeConstants = [2, 3, 5]
        const fourConstants = [2, 3, 5, 7]
        CheckFavorite(
            'sinusoidal', 
            checkFavorite,
            mockSetCheckFavorite,
            1, 
            5, 
            1, 
            2, 
            twoConstants, 
            mockSetDisplayLinear, 
            mockSetLinearCoordinates, 
            threeConstants, 
            mockSetDisplayQuadratic, 
            mockSetQuadraticCoordinates, 
            fourConstants, 
            mockSetDisplayCubic, 
            mockSetCubicCoordinates, 
            twoConstants, 
            mockSetDisplayHyperbolic, 
            mockSetHyperbolicCoordinates, 
            twoConstants, 
            mockSetDisplayExponential, 
            mockSetExponentialCoordinates, 
            twoConstants, 
            mockSetDisplayLogarithmic, 
            mockSetLogarithmicCoordinates, 
            threeConstants, 
            mockSetDisplayLogistic, 
            mockSetLogisticCoordinates, 
            fourConstants, 
            mockSetDisplaySinusoidal, 
            mockSetSinusoidalCoordinates
        )
        expect(linearCoordinates).toEqual([])
        expect(quadraticCoordinates).toEqual([])
        expect(cubicCoordinates).toEqual([])
        expect(hyperbolicCoordinates).toEqual([])
        expect(exponentialCoordinates).toEqual([])
        expect(logarithmicCoordinates).toEqual([])
        expect(logisticCoordinates).toEqual([])
        expect(sinusoidalCoordinates).toEqual([
            {x: 1, y: '8.07'},
            {x: 2, y: '6.18'},
            {x: 3, y: '7.56'},
            {x: 4, y: '6.72'},
            {x: 5, y: '7.00'}
        ])
    })
    
    it('displays all points if no favorite', () => {
        let linearCoordinates = []
        let quadraticCoordinates = []
        let cubicCoordinates = []
        let hyperbolicCoordinates = []
        let exponentialCoordinates = []
        let logarithmicCoordinates = []
        let logisticCoordinates = []
        let sinusoidalCoordinates = []
        let checkFavorite = true
        let displayLinear = false
        let displayQuadratic = false
        let displayCubic = false
        let displayHyperbolic = false
        let displayExponential = false
        let displayLogarithmic = false
        let displayLogistic = false
        let displaySinusoidal = false
        const mockSetCheckFavorite = (element) => {
            checkFavorite = element
        }
        const mockSetLinearCoordinates = (element) => {
            linearCoordinates = element
        }
        const mockSetQuadraticCoordinates = (element) => {
            quadraticCoordinates = element
        }
        const mockSetCubicCoordinates = (element) => {
            cubicCoordinates = element
        }
        const mockSetHyperbolicCoordinates = (element) => {
            hyperbolicCoordinates = element
        }
        const mockSetExponentialCoordinates = (element) => {
            exponentialCoordinates = element
        }
        const mockSetLogarithmicCoordinates = (element) => {
            logarithmicCoordinates = element
        }
        const mockSetLogisticCoordinates = (element) => {
            logisticCoordinates = element
        }
        const mockSetSinusoidalCoordinates = (element) => {
            sinusoidalCoordinates = element
        }
        const mockSetDisplayLinear = (element) => {
            displayLinear = element
        }
        const mockSetDisplayQuadratic = (element) => {
            displayQuadratic = element
        }
        const mockSetDisplayCubic = (element) => {
            displayCubic = element
        }
        const mockSetDisplayHyperbolic = (element) => {
            displayHyperbolic = element
        }
        const mockSetDisplayExponential = (element) => {
            displayExponential = element
        }
        const mockSetDisplayLogarithmic = (element) => {
            displayLogarithmic = element
        }
        const mockSetDisplayLogistic = (element) => {
            displayLogistic = element
        }
        const mockSetDisplaySinusoidal = (element) => {
            displaySinusoidal = element
        }
        const twoConstants = [2, 3]
        const threeConstants = [2, 3, 5]
        const fourConstants = [2, 3, 5, 7]
        CheckFavorite(
            '', 
            checkFavorite,
            mockSetCheckFavorite,
            1, 
            5, 
            1, 
            2, 
            twoConstants, 
            mockSetDisplayLinear, 
            mockSetLinearCoordinates, 
            threeConstants, 
            mockSetDisplayQuadratic, 
            mockSetQuadraticCoordinates, 
            fourConstants, 
            mockSetDisplayCubic, 
            mockSetCubicCoordinates, 
            twoConstants, 
            mockSetDisplayHyperbolic, 
            mockSetHyperbolicCoordinates, 
            twoConstants, 
            mockSetDisplayExponential, 
            mockSetExponentialCoordinates, 
            twoConstants, 
            mockSetDisplayLogarithmic, 
            mockSetLogarithmicCoordinates, 
            threeConstants, 
            mockSetDisplayLogistic, 
            mockSetLogisticCoordinates, 
            fourConstants, 
            mockSetDisplaySinusoidal, 
            mockSetSinusoidalCoordinates
        )
        expect(linearCoordinates).toEqual([
            {x: 1, y: '5.00'},
            {x: 2, y: '7.00'},
            {x: 3, y: '9.00'},
            {x: 4, y: '11.00'},
            {x: 5, y: '13.00'}
        ])
        expect(quadraticCoordinates).toEqual([
            {x: 1, y: '10.00'},
            {x: 2, y: '19.00'},
            {x: 3, y: '32.00'},
            {x: 4, y: '49.00'},
            {x: 5, y: '70.00'}
        ])
        expect(cubicCoordinates).toEqual([
            {x: 1, y: '17.00'},
            {x: 2, y: '45.00'},
            {x: 3, y: '103.00'},
            {x: 4, y: '203.00'},
            {x: 5, y: '357.00'}
        ])
        expect(hyperbolicCoordinates).toEqual([
            {x: 1, y: '5.00'},
            {x: 2, y: '4.00'},
            {x: 3, y: '3.67'},
            {x: 4, y: '3.50'},
            {x: 5, y: '3.40'}
        ])
        expect(exponentialCoordinates).toEqual([
            {x: 1, y: '6.00'},
            {x: 2, y: '18.00'},
            {x: 3, y: '54.00'},
            {x: 4, y: '162.00'},
            {x: 5, y: '486.00'}
        ])
        expect(logarithmicCoordinates).toEqual([
            {x: 1, y: '3.00'},
            {x: 2, y: '4.39'},
            {x: 3, y: '5.20'},
            {x: 4, y: '5.77'},
            {x: 5, y: '6.22'}
        ])
        expect(logisticCoordinates).toEqual([
            {x: 1, y: '0.00'},
            {x: 2, y: '0.00'},
            {x: 3, y: '0.00'},
            {x: 4, y: '0.09'},
            {x: 5, y: '1.00'}
        ])
        expect(sinusoidalCoordinates).toEqual([
            {x: 1, y: '8.07'},
            {x: 2, y: '6.18'},
            {x: 3, y: '7.56'},
            {x: 4, y: '6.72'},
            {x: 5, y: '7.00'}
        ])
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
            {x: 3, y: '3.4'}
        ]
        const secondPoints = [
            {x: 1, y: '23.7'},
            {x: 2, y: '57.1'},
            {x: 3, y: '-14.5'}
        ]
        const thirdPoints = [
            {x: 1, y: '111.8'},
            {x: 2, y: '6.3'},
            {x: 3, y: '2.9'}
        ]
        const allPoints = [firstPoints, secondPoints, thirdPoints]
        const axis = VerticalAxis(allPoints)
        expect(axis.minimum).toEqual(-14.5)
        expect(axis.maximum).toEqual(111.8)
    })
    
    it('determines range of y-values from across an array of arrays containing coordinate pairs', () => {
        const firstPoints = [
            {x: 1, y: '1.1'},
            {x: 2, y: '2.3'},
            {x: 3, y: '3.4'}
        ]
        const secondPoints = [
            {x: 1, y: '23.7'},
            {x: 2, y: '57.1'},
            {x: 3, y: '-14.5'}
        ]
        const thirdPoints = [
            {x: 1, y: '111.8'},
            {x: 2, y: '6.3'},
            {x: 3, y: '2.9'}
        ]
        const allPoints = [firstPoints, secondPoints, thirdPoints]
        const axis = VerticalAxis(allPoints)
        expect(axis.range).toEqual(126.3)
    })
})

describe('HorizontalAxis utility', () => {
    it('determines minimum and maximum x-values of an array of coordinate pairs', () => {
        const points = [
            {x: 5, y: '1.1'},
            {x: 2, y: '2.3'},
            {x: 13, y: '7.9'},
            {x: 42, y: '-13.5'},
            {x: 1, y: '463.4'}
        ]
        const axis = HorizontalAxis(points)
        expect(axis.minimum).toEqual(1)
        expect(axis.maximum).toEqual(42)
    })
    
    it('determines increment necessary to get from minimum to maximum x-value over 100 steps', () => {
        const points = [
            {x: 5, y: '1.1'},
            {x: 2, y: '2.3'},
            {x: 13, y: '7.9'},
            {x: 42, y: '-13.5'},
            {x: 1, y: '463.4'}
        ]
        const axis = HorizontalAxis(points)
        expect(axis.increment).toEqual(0.41)
    })
    
    it('adjusts minimum and maximum x-values based on a scale value', () => {
        const points = [
            {x: 5, y: '1.1'},
            {x: 2, y: '2.3'},
            {x: 13, y: '7.9'},
            {x: 42, y: '-13.5'},
            {x: 1, y: '463.4'}
        ]
        const axis = HorizontalAxis(points, 0.3)
        expect(axis.minimum).toBeCloseTo(-5.15, 4)
        expect(axis.maximum).toBeCloseTo(48.15, 4)
    })
    
    it('adjusts increment necessary to get from minimum to maximum x-value based on a scale value', () => {
        const points = [
            {x: 5, y: '1.1'},
            {x: 2, y: '2.3'},
            {x: 13, y: '7.9'},
            {x: 42, y: '-13.5'},
            {x: 1, y: '463.4'}
        ]
        const axis = HorizontalAxis(points, 0.3)
        expect(axis.increment).toBeCloseTo(0.533, 4)
    })
    
    it('ensures scale value cannot exceed -0.9', () => {
        const points = [
            {x: 5, y: '1.1'},
            {x: 2, y: '2.3'},
            {x: 13, y: '7.9'},
            {x: 42, y: '-13.5'},
            {x: 1, y: '463.4'}
        ]
        const axis = HorizontalAxis(points, -1)
        expect(axis.minimum).toBeCloseTo(20.475, 4)
        expect(axis.maximum).toBeCloseTo(22.525, 4)
        expect(axis.increment).toBeCloseTo(0.0205, 4)
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
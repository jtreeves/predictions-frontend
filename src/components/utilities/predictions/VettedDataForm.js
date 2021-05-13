import EmptyInputAlert from '../main/EmptyInputAlert'
import CleanCollection from './CleanCollection'

function VettedDataForm(title, independent, dependent, precision, dataSet) {
    if (!EmptyInputAlert(title, 'title')) {
        return false
    } else if (!EmptyInputAlert(independent, 'independent')) {
        return false
    } else if (!EmptyInputAlert(dependent, 'dependent')) {
        return false
    } else if (!EmptyInputAlert(precision, 'precision')) {
        return false
    } else if (!EmptyInputAlert(dataSet, 'dataSet')) {
        return false
    } else if (precision < 1 || Number(precision) !== parseInt(precision)) {
        alert('Precision must be a positive integer')
        return false
    } else {
        try {
            console.log('ORIGINAL DATA SET: ', dataSet)
            const cleanedDataSet = CleanCollection(dataSet)
            console.log('CLEANED DATA SET: ', cleanedDataSet)
            const parsedDataSet = JSON.parse(cleanedDataSet)
            console.log('PARSED DATA SET: ', parsedDataSet)
            if (parsedDataSet.length >= 10) {
                const submission = {
                    title,
                    independent,
                    dependent,
                    precision: parseInt(precision),
                    dataSet: parsedDataSet
                }
    
                return submission
            } else {
                alert('You must include at least 10 points in your data set')
                return false
            }
        } catch (error) {
            alert('Data set must be a list of number pairs')
            return false
        }
    }
}

export default VettedDataForm
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
        const cleanedDataSet = CleanCollection(dataSet)
        const parsedDataSet = JSON.parse(cleanedDataSet)
        
        if (parsedDataSet.length < 10) {
            alert('You must include at least 10 points in your data set')
            return false
        } else {
            const submission = {
                title,
                independent,
                dependent,
                precision: parseInt(precision),
                dataSet: parsedDataSet
            }

            return submission
        }
    }
}

export default VettedDataForm
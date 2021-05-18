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
            const cleanedDataSet = CleanCollection(dataSet)
            const parsedDataSet = JSON.parse(cleanedDataSet)

            if (!Array.isArray(parsedDataSet)) {
                alert('Data set must be a list')
                return false
            } else {
                for (const point of parsedDataSet) {
                    if (!Array.isArray(point)) {
                        alert('Each element of data set must be a coordinate pair')
                        return false
                    } else if (point.length !== 2) {
                        alert('Each coordinate pair of data set must contain exactly two elements')
                        return false
                    } else {
                        for (const coordinate of point) {
                            if (!Number.isFinite(coordinate)) {
                                alert('Each element of each coordinate pair of data set must be a number')
                                return false
                            }
                        }
                    }
                }
            }
            
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
                alert('Data set must include at least ten points')
                return false
            }
        } catch (error) {
            alert('A typo appears in your data set; adding or removing brackets may resolve the typo')
            return false
        }
    }
}

export default VettedDataForm
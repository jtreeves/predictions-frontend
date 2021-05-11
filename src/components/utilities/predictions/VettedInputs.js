import CleanCollection from './CleanCollection'

function VettedInputs(title, independent, dependent, precision, dataSet) {
    if (title === '') {
        alert('You must give this data set a title')
    } else if (independent === '') {
        alert('You must identify the independent variable of this data set')
    } else if (dependent === '') {
        alert('You must identify the dependent variable of this data set')
    } else if (precision < 1 || precision != parseInt(precision)) {
        alert('Precision must be a positive integer')
    } else if (dataSet === '') {
        alert('You must provide a data set')
    } else {
        const cleanedDataSet = CleanCollection(dataSet)
        const parsedDataSet = JSON.parse(cleanedDataSet)
        if (parsedDataSet.length < 10) {
            alert('You must include at least 10 points in your data set')
        } else {
            const submission = {
                title: title,
                independent: independent,
                dependent: dependent,
                precision: parseInt(precision),
                dataSet: parsedDataSet
            }

            return submission
        }
    }

    return false
}

export default VettedInputs
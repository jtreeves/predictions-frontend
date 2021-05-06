function CleanCollection(collection) {
    let cleanedCollection = collection

    if (collection.includes('(') || collection.includes(')')) {
        cleanedCollection = cleanedCollection.replaceAll('(', '[').replaceAll(')', ']')
    }

    if (cleanedCollection.includes(';')) {
        cleanedCollection = cleanedCollection.replaceAll(';', ',')
    }
    
    if (!cleanedCollection.includes('[[') && !cleanedCollection.includes(']]')) {
        cleanedCollection = '[' + cleanedCollection + ']'
    }

    return cleanedCollection
}

export default CleanCollection
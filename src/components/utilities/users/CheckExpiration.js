function CheckExpiration(expiration, logout) {
    const expirationTime = new Date(expiration * 1000)
    
    if (Date.now() >= expirationTime) {
        alert('Your session has expired. Please log in.')
        logout()
    }
}

export default CheckExpiration
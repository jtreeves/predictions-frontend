// Import external dependency
import axios from 'axios'

// Create function to add token to every request header
function Authentication(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token
    } else {
        delete axios.defaults.headers.common['Authorization']   
    }
}

// Export function
export default Authentication
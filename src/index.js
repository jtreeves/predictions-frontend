// Import external dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Import internal dependencies
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)

reportWebVitals()
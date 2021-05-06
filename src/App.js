// Import external dependencies
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

// Import internal components
import Authentication from './components/utilities/main/Authentication'
import PrivateRoute from './components/elements/main/PrivateRoute'
import Navigation from './components/elements/main/Navigation'
import Header from './components/elements/main/Header'
import Footer from './components/elements/main/Footer'
import Welcome from './components/pages/main/Welcome'
import About from './components/pages/main/About'
import Signup from './components/pages/users/Signup'
import Login from './components/pages/users/Login'
import Profile from './components/pages/users/Profile'
import Submission from './components/pages/predictions/Submission'
import Analysis from './components/pages/predictions/Analysis'

import './style/main.css'

// Create function for the main operations of the app
function App() {
    //  Set initial state values
    const [currentUser, setCurrentUser] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    // Implement useEffect
    useEffect(() => {
        let token
        if (!localStorage.getItem('jwtToken')) {
            setIsAuthenticated(false)
        } else {
            token = jwt_decode(localStorage.getItem('jwtToken'))
            Authentication(localStorage.jwtToken)
            setCurrentUser(token)
        }
    }, [])

    // Establish current user
    const nowCurrentUser = (userData) => {
        setCurrentUser(userData)
        setIsAuthenticated(true)
    }

    // Log out user
    const handleLogout = () => {
        if (localStorage.getItem('jwtToken')) {
            localStorage.removeItem('jwtToken')
            setCurrentUser(null)
            setIsAuthenticated(false)
        }
    }

    return (
        <div>
            <Navigation 
                isAuthenticated={isAuthenticated} 
                handleLogout={handleLogout} 
            />

            <Header />

            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/about" component={About} />
                <Route path="/signup" component={Signup} />
                <Route
                    path="/login"
                    render={(props) => {
                        return <Login
                            {...props}
                            nowCurrentUser={nowCurrentUser}
                            setIsAuthenticated={setIsAuthenticated}
                            user={currentUser}
                        />
                    }}
                />
                <PrivateRoute
                    path="/profile"
                    component={Profile}
                    user={currentUser}
                    handleLogout={handleLogout}
                />
                <PrivateRoute
                    path="/submission"
                    component={Submission}
                    user={currentUser}
                />
                <PrivateRoute
                    path="/analysis"
                    component={Analysis}
                    user={currentUser}
                />
            </Switch>

            <Footer />
        </div>
    )
}

// Export funtion
export default App
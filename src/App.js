// Import external dependencies
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

// Import internal components
import Navigation from './components/elements/main/Navigation'
import Footer from './components/elements/main/Footer'
import Welcome from './components/pages/main/Welcome'
import About from './components/pages/main/About'
import Signup from './components/pages/users/Signup'
import Login from './components/pages/users/Login'
import Profile from './components/pages/users/Profile'
import Authentication from './components/middleware/Authentication'
import PrivateRoute from './components/middleware/Private'
import Analyze from './components/pages/predictions/Analyze'

// Import internal CSS
import './App.css'
import Analysis from './components/pages/predictions/Analysis'

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
        <div className="App">
            <Navigation handleLogout={handleLogout} isAuth={isAuthenticated} />
                <div className="container mt-5">
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
                            path="/analyze"
                            component={Analyze}
                            user={currentUser}
                        />
                        <PrivateRoute
                            path="/analysis"
                            component={Analysis}
                            user={currentUser}
                        />
                    </Switch>
                </div>
            <Footer />
        </div>
    )
}

// Export funtion
export default App
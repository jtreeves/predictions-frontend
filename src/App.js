// Import external dependencies
import { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

// Import internal components
import Navigation from './components/elements/main/Navigation'
import Footer from './components/elements/main/Footer'
import Welcome from './components/pages/welcome/Start'
import About from './components/pages/welcome/About'
import Signup from './components/elements/welcome/Signup'
import Login from './components/elements/welcome/Login'
import Profile from './components/pages/profile/Home'
import Authentication from './components/middleware/Authentication'

// Import internal CSS
import './App.css'

// Create private route
function PrivateRoute({component: Component, ...rest}) {
    const user = localStorage.getItem('jwtToken')
    return <Route {...rest} render={(props) => {
        return user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
    }} />
}

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
                        />
                    </Switch>
                </div>
            <Footer />
        </div>
    )
}

// Export funtion
export default App
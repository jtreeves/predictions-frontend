import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import Welcome from './components/pages/main/Welcome'
import About from './components/pages/main/About'
import Usage from './components/pages/main/Usage'
import Signup from './components/pages/users/Signup'
import Login from './components/pages/users/Login'
import Profile from './components/pages/users/Profile'
import Submission from './components/pages/predictions/Submission'
import Analysis from './components/pages/predictions/Analysis'
import DataSets from './components/pages/predictions/DataSets'
import Header from './components/sections/main/Header'
import Footer from './components/sections/main/Footer'
import Navigation from './components/sections/main/Navigation'
import PrivateRoute from './components/elements/main/PrivateRoute'
import Authentication from './components/utilities/main/Authentication'
import './style/main/main.css'

function App() {
    const [currentUser, setCurrentUser] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(true)

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

    const nowCurrentUser = (userData) => {
        setCurrentUser(userData)
        setIsAuthenticated(true)
    }

    const handleLogout = () => {
        if (localStorage.getItem('jwtToken')) {
            localStorage.removeItem('jwtToken')
            setCurrentUser(null)
            setIsAuthenticated(false)
        }
    }

    return (
        <>
            <Navigation 
                isAuthenticated={isAuthenticated} 
                handleLogout={handleLogout} 
            />

            <Header />

            <Switch>
                {isAuthenticated ? <PrivateRoute 
                    exact path="/" 
                    component={Profile} 
                    user={currentUser}
                    handleLogout={handleLogout}
                /> : <Route 
                    exact path="/" 
                    component={Welcome} 
                />}

                <Route path="/welcome" component={Welcome} />

                <Route path="/about" component={About} />

                <Route path="/usage" component={Usage} />

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
                    handleLogout={handleLogout}
                />
                
                <PrivateRoute
                    path="/analysis"
                    component={Analysis}
                    user={currentUser}
                    handleLogout={handleLogout}
                />
                
                <PrivateRoute
                    path="/datasets"
                    component={DataSets}
                    user={currentUser}
                    handleLogout={handleLogout}
                />
            </Switch>

            <Footer />
        </>
    )
}

export default App
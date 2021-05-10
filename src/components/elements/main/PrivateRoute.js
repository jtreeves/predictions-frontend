import { Route, Redirect } from 'react-router-dom'

// Create private route
function PrivateRoute({component: Component, ...rest}) {
    console.log('PRIVATE ROUTE HIT')
    const user = localStorage.getItem('jwtToken')
    return <Route {...rest} render={(props) => {
        return user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
    }} />
}

export default PrivateRoute
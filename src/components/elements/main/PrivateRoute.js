import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({component: Component, ...rest}) {
    const user = localStorage.getItem('jwtToken')
    return <Route {...rest} render={(props) => {
        if (user) {
            return <Component {...rest} {...props} />
        } else {
            return <Redirect to="/login" />
        }
    }} />
}

export default PrivateRoute
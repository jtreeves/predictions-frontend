// Import external dependency
import { NavLink } from 'react-router-dom'

// Create function
function Navigation(props) {
    const about = <NavLink
        to="/about"
        style={{ textDecoration: 'none' }} 
    >
        <li>
            About
        </li>
    </NavLink>
    
    const usage = <NavLink
        to="/usage"
        style={{ textDecoration: 'none' }} 
    >
        <li>
            Usage
        </li>
    </NavLink>

    const profile = <NavLink
        to="/profile"
        style={{ textDecoration: 'none' }} 
    >
        <li>
            Profile
        </li>
    </NavLink>
    
    const submission = <NavLink
        to="/submission"
        style={{ textDecoration: 'none' }} 
    >
        <li>
            Add New Set
        </li>
    </NavLink>
    
    const data = <NavLink
        to="/datasets"
        style={{ textDecoration: 'none' }} 
    >
        <li>
            All Sets
        </li>
    </NavLink>

    const signup = <NavLink
        to="/signup"
        style={{ textDecoration: 'none' }} 
    >
        <li>
            Signup
        </li>
    </NavLink>

    const login = <NavLink
        to="/login"
        style={{ textDecoration: 'none' }} 
    >
        <li>
            Login
        </li>
    </NavLink>

    const logout = <span onClick={props.handleLogout}>
        <li>
            Logout
        </li>
    </span>

    const unauthorized = <ul>
        {about}
        {signup}
        {login}
    </ul>

    const authorized = <ul>
        {data}
        {submission}
        {usage}
        {profile}
        {logout}
    </ul>

    if (!props.isAuthenticated) {
        return (
            <nav>
                {unauthorized}
            </nav>
        )
    } else {
        return (
            <nav>
                {authorized}
            </nav>
        )
    }
}

// Export function
export default Navigation
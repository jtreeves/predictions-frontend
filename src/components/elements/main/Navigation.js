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

    const profile = <NavLink
        to="/profile"
        style={{ textDecoration: 'none' }} 
    >
        <li>
            All Sets
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

    if (!props.isAuthenticated) {
        return (
            <nav>
                <ul>
                    {about}
                    {signup}
                    {login}
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>
                <ul>
                    {profile}
                    {submission}
                    {about}
                    {logout}
                </ul>
            </nav>
        )
    }
}

// Export function
export default Navigation
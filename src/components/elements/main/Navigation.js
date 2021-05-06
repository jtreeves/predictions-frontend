// Import external dependency
import { NavLink } from 'react-router-dom'

// Create function
function Navigation(props) {
    return (
        <nav>
            <ul>
                <NavLink
                    exact to="/"
                    style={{ textDecoration: 'none' }} 
                >
                    <li>
                        Home
                    </li>
                </NavLink>
                <NavLink
                    to="/about"
                    style={{ textDecoration: 'none' }} 
                >
                    <li>
                        About
                    </li>
                </NavLink>
            </ul>
            {
                props.isAuth
                ? <ul>
                    <NavLink
                        to="/profile"
                        style={{ textDecoration: 'none' }} 
                    >
                        <li>
                            Profile
                        </li>
                    </NavLink>
                    <span onClick={props.handleLogout}>
                        <li>
                            Logout
                        </li>
                    </span>
                </ul>
                : <ul>
                    <NavLink
                        to="/signup"
                        style={{ textDecoration: 'none' }} 
                    >
                        <li>
                            Create Account
                        </li>
                    </NavLink>
                    <NavLink
                        to="/login"
                        style={{ textDecoration: 'none' }} 
                    >
                        <li>
                            Login
                        </li>
                    </NavLink>
                </ul>
            }
        </nav>
    )
}

// Export function
export default Navigation
// Import external dependency
import { NavLink, Link } from 'react-router-dom'

// Create function
function Navigation(props) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        exact to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact to="/about"
                    >
                        About
                    </NavLink>
                </li>
            </ul>
            {
                props.isAuth
                ? <ul>
                    <li>
                        <NavLink
                            to="/profile"
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <span
                            onClick={props.handleLogout}
                        >
                            Logout
                        </span>
                    </li>
                </ul>
                : <ul>
                    <li>
                        <NavLink
                            to="/signup"
                        >
                            Create Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            }
        </nav>
    )
}

// Export function
export default Navigation
import { Link } from 'react-router-dom'

// Create function
function Header() {
    return (
        <Link 
            to="/" 
            style={{ textDecoration: 'none' }} 
        >
            <header>
                Tiresias
            </header>
        </Link>
    )
}

// Export function
export default Header
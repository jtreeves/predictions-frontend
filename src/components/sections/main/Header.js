import { Link } from 'react-router-dom'

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

export default Header
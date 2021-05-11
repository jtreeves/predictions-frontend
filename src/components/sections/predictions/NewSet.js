import { Link } from 'react-router-dom'

function NewSet() {
    return (
        <Link
            to="/submission"
            style={{ textDecoration: 'none' }} 
        >
            <button>Create New Set</button>
        </Link>
    )
}

export default NewSet
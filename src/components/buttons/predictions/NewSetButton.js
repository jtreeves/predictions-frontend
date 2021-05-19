import { Link } from 'react-router-dom'

function NewSetButton() {
    return (
        <Link
            to="/submission"
            style={{ textDecoration: 'none' }} 
        >
            <button>
                Create New Set
            </button>
        </Link>
    )
}

export default NewSetButton
import { Link } from 'react-router-dom'

function AnalyzeData() {
    return (
        <section className="profile">
            <h2>Analyze Data</h2>

            <Link 
                to="/datasets"
                style={{ textDecoration: 'none' }}
            >
                <button className="profile">
                    View All Your Saved Data Sets
                </button>
            </Link>

            <Link 
                to="/submission"
                style={{ textDecoration: 'none' }}
            >
                <button className="profile">
                    Add a New Data Set
                </button>
            </Link>
        </section>
    )
}

export default AnalyzeData
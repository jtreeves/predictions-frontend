import { Link } from 'react-router-dom'

function AnalyzeData() {
    return (
        <section>
            <h2>Analyze Data</h2>

            <Link 
                to="/datasets"
                style={{ textDecoration: 'none' }}
            >
                <button>
                    View All Your Saved Data Sets
                </button>
            </Link>

            <Link 
                to="/submission"
                style={{ textDecoration: 'none' }}
            >
                <button>
                    Add a New Data Set
                </button>
            </Link>
        </section>
    )
}

export default AnalyzeData